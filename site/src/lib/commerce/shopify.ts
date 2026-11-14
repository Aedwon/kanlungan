import { makers } from '@/data/makers';
import { collections as seedCollections } from '@/data/collections';
import { categories } from '@/data/navigation';
import type { Availability, Collection, CommerceProduct, CommerceProvider } from './types';
type Metafield = { key: string; value: string } | null;
type Connection<T> = { nodes: T[]; pageInfo: { hasNextPage: boolean; endCursor: string | null } };
interface ShopifyProduct {
  id: string; handle: string; title: string; description: string; vendor: string; productType: string; tags: string[]; createdAt: string;
  availableForSale: boolean; metafields: Metafield[];
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  options: { name: string; optionValues: { name: string }[] }[];
  images: { nodes: { url: string; altText: string | null }[] };
  variants: Connection<{ id: string; availableForSale: boolean; price: { amount: string; currencyCode: string }; selectedOptions: { name: string; value: string }[]; metafield: Metafield }>;
}
const keys = ['maker', 'materials', 'dimensions', 'origin', 'availability_state', 'lead_time_weeks', 'one_of_a_kind', 'subcategory', 'price_unit'];
const productFields = `id handle title description vendor productType tags createdAt availableForSale
  priceRange { minVariantPrice { amount currencyCode } }
  options { name optionValues { name } } images(first:6) { nodes { url altText } }
  metafields(identifiers: [${keys.map((key) => `{namespace:"custom", key:"${key}"}`).join(',')}]) { key value }
  variants(first:250) { nodes { id availableForSale price { amount currencyCode } selectedOptions { name value }
    metafield(namespace:"custom", key:"lead_time_weeks") { key value } } pageInfo { hasNextPage endCursor } }`;
const collectionFields = `handle title description products(first:250) { nodes { handle } pageInfo { hasNextPage endCursor } }
  metafield(namespace:"custom", key:"collection_type") { value }`;
async function query<T>(document: string, variables: Record<string, unknown> = {}): Promise<T> {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (!domain || !/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i.test(domain)) throw new Error('SHOPIFY_STORE_DOMAIN must be a myshopify.com store hostname');
  const response = await fetch(`https://${domain}/api/2026-01/graphql.json`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN! },
    body: JSON.stringify({ query: document, variables }), next: { revalidate: 300 }, signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`Shopify Storefront request failed (${response.status})`);
  const result = await response.json() as { data?: T; errors?: { message: string }[] };
  if (result.errors?.length || !result.data) throw new Error(`Shopify Storefront: ${result.errors?.map((e) => e.message).join('; ') ?? 'missing data'}`);
  return result.data;
}
function weeks(value?: string): number | null {
  if (!value) return null;
  const n = Number(value); return Number.isFinite(n) && n > 0 ? n : null;
}
export function mapShopifyProduct(p: ShopifyProduct): CommerceProduct {
  if (p.variants.pageInfo.hasNextPage) throw new Error(`Too many variants for ${p.handle}; expected at most 250`);
  if (!p.variants.nodes.length) throw new Error(`Missing variants for ${p.handle}`);
  const meta = Object.fromEntries(p.metafields.filter((m): m is NonNullable<Metafield> => !!m).map((m) => [m.key, m.value]));
  const oneOfAKind = meta.one_of_a_kind === 'true';
  const states: Availability[] = ['in-stock', 'made-to-order', 'sold-out', 'one-of-a-kind'];
  const declared = states.includes(meta.availability_state as Availability) ? meta.availability_state as Availability : 'in-stock';
  const availability: Availability = !p.availableForSale ? 'sold-out' : oneOfAKind && declared === 'in-stock' ? 'one-of-a-kind' : declared;
  const leadTimeWeeks = weeks(meta.lead_time_weeks);
  const resolvedVariants = p.variants.nodes.map((v) => {
    if (v.price.currencyCode !== 'PHP') throw new Error(`Expected PHP prices for ${p.handle}`);
    return { id: v.id, options: Object.fromEntries(v.selectedOptions.filter((o) => o.name !== 'Title').map((o) => [o.name, o.value])), price: Number(v.price.amount), leadTimeWeeks: weeks(v.metafield?.value) ?? leadTimeWeeks, available: v.availableForSale && availability !== 'sold-out' };
  });
  const first = resolvedVariants.find((v) => v.available) ?? resolvedVariants[0];
  return {
    id: p.id, slug: p.handle, name: p.title, category: p.productType, subcategory: meta.subcategory ?? '', description: p.description,
    price: first.price, priceUnit: meta.price_unit || null, maker: meta.maker ?? p.vendor, materials: meta.materials ?? '', dimensions: meta.dimensions ?? '', origin: meta.origin ?? '',
    availability, availabilityText: availability, leadTimeWeeks, oneOfAKind: oneOfAKind || availability === 'one-of-a-kind', createdAt: p.createdAt,
    variants: p.options.filter((o) => o.name !== 'Title').map((o) => ({ name: o.name, choices: o.optionValues.map((v) => ({ label: v.name })), effect: '' })),
    resolvedVariants, images: p.images.nodes.map((i) => ({ url: i.url, alt: i.altText ?? p.title })),
  };
}
interface ShopifyCollection { handle: string; title: string; description: string; products: Connection<{ handle: string }>; metafield: { value: string } | null }
function mapCollection(c: ShopifyCollection): Collection {
  if (c.products.pageInfo.hasNextPage) throw new Error(`Collection ${c.handle} exceeds the 250 product limit`);
  return { slug: c.handle, name: c.title, description: c.description || null, type: c.metafield?.value ?? seedCollections.find((s) => s.slug === c.handle)?.type ?? 'Room-based', productSlugs: c.products.nodes.map((p) => p.handle) };
}
async function all<T>(field: 'products' | 'collections', fields: string): Promise<T[]> {
  const nodes: T[] = []; let cursor: string | null = null;
  do {
    const data: { [key: string]: Connection<T> } = await query(`query Catalog($cursor:String) { ${field}(first:100, after:$cursor) { nodes { ${fields} } pageInfo { hasNextPage endCursor } } }`, { cursor });
    const page: Connection<T> = data[field]; nodes.push(...page.nodes);
    if (!page.pageInfo.hasNextPage) break;
    cursor = page.pageInfo.endCursor;
    if (!cursor) throw new Error('Shopify returned a missing pagination cursor');
  } while (true);
  return nodes;
}
export const shopifyProvider: CommerceProvider = {
  async getProducts() { return (await all<ShopifyProduct>('products', productFields)).map(mapShopifyProduct); },
  async getProduct(slug) { const { product } = await query<{ product: ShopifyProduct | null }>(`query Product($slug:String!) { product(handle:$slug) { ${productFields} } }`, { slug }); return product ? mapShopifyProduct(product) : undefined; },
  async getCollections() { return (await all<ShopifyCollection>('collections', collectionFields)).map(mapCollection).filter((c) => seedCollections.some((s) => s.slug === c.slug)); },
  async getCollection(slug) { const { collection } = await query<{ collection: ShopifyCollection | null }>(`query Collection($slug:String!) { collection(handle:$slug) { ${collectionFields} } }`, { slug }); return collection ? mapCollection(collection) : undefined; },
  async getProductsByCategory(category) { const name = categories.find((c) => c.slug === category)?.name ?? category; return (await this.getProducts()).filter((p) => p.category.toLowerCase() === name.toLowerCase()); },
  async getMakers() { return structuredClone(makers); },
  async getMaker(slug) { return structuredClone(makers.find((m) => m.slug === slug)); },
};

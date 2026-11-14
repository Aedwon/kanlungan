import 'server-only';
import type { CartLine } from '@/lib/cart';
const fields = `id lines(first:100) { nodes { id quantity merchandise { ... on ProductVariant { id availableForSale price { amount currencyCode } selectedOptions { name value } metafield(namespace:"custom",key:"lead_time_weeks") { value } product { handle title vendor productType availableForSale images(first:1) { nodes { url } } availability:metafield(namespace:"custom",key:"availability_state") { value } weeks:metafield(namespace:"custom",key:"lead_time_weeks") { value } unique:metafield(namespace:"custom",key:"one_of_a_kind") { value } } } } } pageInfo { hasNextPage } }`;
interface RemoteLine { id: string; quantity: number; merchandise: { id: string; availableForSale: boolean; price: { amount: string; currencyCode: string }; selectedOptions: { name: string; value: string }[]; metafield: { value: string } | null; product: { handle: string; title: string; vendor: string; productType: string; images: { nodes: { url: string }[] }; availability: { value: string } | null; weeks: { value: string } | null; unique: { value: string } | null } } }
interface RemoteCart { id: string; lines: { nodes: RemoteLine[]; pageInfo: { hasNextPage: boolean } } }
export const shopifyActive = () => !!(process.env.SHOPIFY_STORE_DOMAIN && process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN);
async function request(query: string, variables: Record<string, unknown>) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (!domain || !/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/i.test(domain)) throw new Error('Invalid store configuration.');
  const response = await fetch(`https://${domain}/api/2026-01/graphql.json`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN! }, body: JSON.stringify({ query, variables }), cache: 'no-store', signal: AbortSignal.timeout(15000) });
  const result = await response.json();
  if (!response.ok || result.errors || !result.data) throw new Error('The cart could not be updated. Please try again.');
  return result.data;
}
function map(cart: RemoteCart) {
  if (cart.lines.pageInfo.hasNextPage) throw new Error('This demo supports up to 100 different cart lines.');
  const lines: CartLine[] = cart.lines.nodes.map((line) => {
    const v = line.merchandise; const p = v.product;
    if (v.price.currencyCode !== 'PHP' || !Number.isFinite(Number(v.price.amount))) throw new Error('Expected PHP cart prices.');
    return { variantId: v.id, productSlug: p.handle, name: p.title, options: Object.fromEntries(v.selectedOptions.filter((o) => o.name !== 'Title').map((o) => [o.name, o.value])), price: Number(v.price.amount), leadTimeWeeks: p.availability?.value === 'made-to-order' ? Number(v.metafield?.value ?? p.weeks?.value) || null : null, quantity: line.quantity, category: p.productType, maker: p.vendor, oneOfAKind: p.unique?.value === 'true', image: p.images.nodes[0]?.url };
  });
  return { id: cart.id, lines };
}
export async function storefrontCart(input: { action: string; id?: string; variantId?: string; quantity?: number }) {
  let cart: RemoteCart | null = null;
  if (input.id) cart = (await request(`query Cart($id:ID!){cart(id:$id){${fields}}}`, { id: input.id })).cart;
  if (!cart) {
    const result = await request(`mutation Create { cartCreate { cart { ${fields} } userErrors { message } } }`, {});
    if (result.cartCreate.userErrors.length || !result.cartCreate.cart) throw new Error('The cart could not be created.');
    cart = result.cartCreate.cart;
  }
  if (input.action === 'load') return map(cart!);
  if (input.action === 'clear') {
    if (!cart!.lines.nodes.length) return map(cart!);
    const payload = (await request(`mutation Clear($id:ID!,$lines:[ID!]!){cartLinesRemove(cartId:$id,lineIds:$lines){cart { ${fields} } userErrors { message }}}`, { id: cart!.id, lines: cart!.lines.nodes.map((l) => l.id) })).cartLinesRemove;
    if (payload.userErrors.length || !payload.cart) throw new Error('The cart could not be cleared. Please try again.');
    return map(payload.cart);
  }
  const existing = cart!.lines.nodes.find((l) => l.merchandise.id === input.variantId);
  const quantity = input.quantity ?? 1;
  if (!existing && input.action === 'set') return map(cart!);
  const operation = quantity === 0 ? 'cartLinesRemove' : existing ? 'cartLinesUpdate' : 'cartLinesAdd';
  const variables = quantity === 0 ? { id: cart!.id, lines: [existing!.id] } : { id: cart!.id, lines: [existing ? { id: existing.id, quantity: existing.merchandise.product.unique?.value === 'true' ? 1 : input.action === 'add' ? existing.quantity + 1 : quantity } : { merchandiseId: input.variantId, quantity: 1 }] };
  const type = quantity === 0 ? '[ID!]!' : existing ? '[CartLineUpdateInput!]!' : '[CartLineInput!]!';
  const payload = (await request(`mutation Change($id:ID!,$lines:${type}) { ${operation}(cartId:$id,${quantity === 0 ? 'lineIds' : 'lines'}:$lines){ cart { ${fields} } userErrors { message } } }`, variables))[operation];
  if (payload.userErrors.length || !payload.cart) throw new Error(payload.userErrors[0]?.message ?? 'The cart could not be updated.');
  return map(payload.cart);
}

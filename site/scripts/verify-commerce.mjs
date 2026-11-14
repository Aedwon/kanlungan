// Focused, dependency-free checks at the provider, filter, and CSV boundaries.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const externalRequire = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const memo = new Map();
function load(name) {
  let file = name.startsWith('@/') ? path.join(root, 'src', name.slice(2)) : name;
  if (!path.extname(file)) file += '.ts';
  if (memo.has(file)) return memo.get(file).exports;
  if (file.endsWith('.json')) return JSON.parse(fs.readFileSync(file, 'utf8'));
  const m = { exports: {} }; memo.set(file, m);
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2022 } }).outputText;
  new Function('require', 'module', 'exports', source)((id) => id.startsWith('@/') ? load(id) : id.startsWith('.') ? load(path.resolve(path.dirname(file), id)) : externalRequire(id), m, m.exports);
  return m.exports;
}
(async () => {
  const { localProvider } = load('@/lib/commerce/local');
  const { defaultVariant, availabilityLine } = load('@/lib/commerce/types');
  const { filterProducts } = load('@/lib/commerce/filter');
  const { mapShopifyProduct, shopifyProvider } = load('@/lib/commerce/shopify');
  const { projects } = load('@/data/projects');
  const { productTemplate, elements } = load('@/lib/shopTemplates');
  const products = await localProvider.getProducts(); const collections = await localProvider.getCollections();
  assert.equal(products.length, 36); assert.equal(collections.length, 7); assert.equal((await localProvider.getMakers()).length, 10);
  assert.equal(products.reduce((n, p) => n + p.resolvedVariants.length, 0), 94);
  for (const p of products) {
    assert.equal(defaultVariant(p).price, p.price, `base price ${p.slug}`);
    assert.equal((await localProvider.getProduct(p.slug)).name, p.name);
    for (const screen of ['desktop', 'mobile']) {
      const node = productTemplate(p, products, collections, screen);
      const links = elements(node).filter((n) => n.tag === 'a').map((n) => n.attrs.href);
      for (const project of projects.filter((project) => project.shopTheProject.some((name) => name.replace(/ \([^)]*\)$/, '') === p.name))) assert(links.includes(`/projects/${project.slug}`), `${p.slug} seen in ${project.slug} ${screen}`);
      assert(elements(node).some((n) => n.tag === 'ProductBuy'));
    }
  }
  const { projectProducts, projectTemplate } = load('@/lib/studioTemplates');
  const tanaw = projects.find((p) => p.slug === 'tanaw-residence');
  const specified = projectProducts(tanaw);
  assert.equal(specified.find((p) => p.slug === 'yakap-sofa').price, 142000);
  assert.equal(specified.find((p) => p.slug === 'salo-dining-table').price, 98000);
  for (const project of projects) for (const screen of ['desktop', 'mobile']) {
    const node = projectTemplate(project, screen);
    const cards = elements(node).filter((n) => n.tag === 'ProductCard');
    assert.equal(cards.length, project.shopTheProject.length, `${project.slug} full product list ${screen}`);
  }
  for (const [slug, sizes] of Object.entries({ 'yakap-sofa': { 'Three-seat 236 cm': 168000, 'Two-seat 186 cm': 142000 }, 'unan-bed': { 'Queen 172 × 222': 128000, 'King 202 × 222': 152000 }, 'salo-dining-table': { 'Ø110 seats four': 98000, 'Ø130 seats six': 126000 } })) {
    const product = await localProvider.getProduct(slug);
    for (const variant of product.resolvedVariants) assert.equal(variant.price, sizes[variant.options.Size], `${slug} ${JSON.stringify(variant.options)}`);
  }
  const { newPieceSlugs } = load('@/lib/commerce/filter');
  assert(newPieceSlugs.includes('salo-dining-table') && newPieceSlugs.includes('bakal-side-table'));
  assert(!newPieceSlugs.includes('pasilyo-console-table') && !newPieceSlugs.includes('bato-object'));
  const sofa = await localProvider.getProduct('silong-sofa');
  assert(sofa.resolvedVariants.filter((v) => v.options.Size === 'Two-seat 178 cm').every((v) => v.price === 158000));
  assert.equal((await localProvider.getProduct('kiso-stool')).availability, 'sold-out');
  assert.equal((await localProvider.getProduct('kiso-stool')).resolvedVariants[0].available, false);
  assert.equal((await localProvider.getProduct('tanghali')).oneOfAKind, true);
  const seating = await localProvider.getProductsByCategory('seating'); assert.equal(seating.length, 7);
  assert.equal(filterProducts(seating, new URLSearchParams('maker=Lilok+Workshop&availability=in-stock'))[0].slug, 'tuntungan-stool');
  assert.equal(filterProducts(seating, new URLSearchParams('material=Cane+and+rattan')).length, 2);
  assert.equal(filterProducts(seating, new URLSearchParams('price=Under+₱25%2C000')).length, 3);
  assert.equal(filterProducts(seating, new URLSearchParams('subcategory=Sofas&max=25000')).length, 0);
  assert.equal(filterProducts(seating, new URLSearchParams('sort=price-desc'))[0].slug, 'silong-sofa');
  assert.equal(filterProducts(seating, new URLSearchParams('sort=price-asc'))[0].slug, 'tuntungan-stool');
  assert.equal(filterProducts(products, new URLSearchParams('sort=newest'))[0].slug, 'lenta-pendant');
  assert.equal(filterProducts(products, new URLSearchParams('maker=Lilok+Workshop&maker=Okabe+Mokko')).length, 6);
  const fixture = { id: 'gid://shopify/Product/1', handle: 'test', title: 'Test', description: 'Test', vendor: 'Lilok Workshop', productType: 'Seating', tags: [], createdAt: '2026-01-01', availableForSale: true, priceRange: { minVariantPrice: { amount: '100', currencyCode: 'PHP' } }, images: { nodes: [] }, options: [{ name: 'Fabric', optionValues: [{ name: 'Oat' }] }, { name: 'Size', optionValues: [{ name: 'Large' }] }], metafields: [{ key: 'availability_state', value: 'made-to-order' }, { key: 'lead_time_weeks', value: '8' }, { key: 'maker', value: 'Lilok Workshop' }, { key: 'materials', value: 'Acacia' }, { key: 'dimensions', value: '10 × 20 × 30' }, { key: 'origin', value: 'Pampanga, Philippines' }, { key: 'one_of_a_kind', value: 'false' }], variants: { pageInfo: { hasNextPage: false }, nodes: [{ id: 'gid://shopify/ProductVariant/1', availableForSale: true, price: { amount: '120', currencyCode: 'PHP' }, selectedOptions: [{ name: 'Fabric', value: 'Oat' }, { name: 'Size', value: 'Large' }], metafield: { key: 'lead_time_weeks', value: '12' } }] } };
  const mapped = mapShopifyProduct(fixture); assert.equal(mapped.resolvedVariants[0].leadTimeWeeks, 12); assert.equal(mapped.resolvedVariants[0].price, 120);
  assert.equal(availabilityLine(mapped, mapped.resolvedVariants[0]), 'Made to order. Ready in 12 weeks.'); assert.equal(mapped.materials, 'Acacia'); assert.equal(mapped.variants[0].name, 'Fabric');
  assert.equal(mapShopifyProduct({ ...fixture, availableForSale: false }).availability, 'sold-out');
  assert.throws(() => mapShopifyProduct({ ...fixture, variants: { ...fixture.variants, nodes: [{ ...fixture.variants.nodes[0], price: { amount: '120', currencyCode: 'USD' } }] } }), /Expected PHP/);
  const originalFetch = global.fetch; const priorDomain = process.env.SHOPIFY_STORE_DOMAIN; const priorToken = process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN;
  process.env.SHOPIFY_STORE_DOMAIN = 'test-store.myshopify.com'; process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN = 'fixture';
  let calls = 0;
  global.fetch = async (url, options) => {
    assert(url.endsWith('/api/2026-01/graphql.json')); assert.equal(options.headers['X-Shopify-Storefront-Access-Token'], 'fixture');
    const request = JSON.parse(options.body); assert(request.query.includes('products')); calls++;
    return { ok: true, json: async () => ({ data: { products: { nodes: [fixture], pageInfo: { hasNextPage: calls === 1, endCursor: calls === 1 ? 'page-2' : null } } } }) };
  };
  assert.equal((await shopifyProvider.getProducts()).length, 2); assert.equal(calls, 2);
  global.fetch = async () => ({ ok: true, json: async () => ({ errors: [{ message: 'fixture error' }] }) });
  await assert.rejects(shopifyProvider.getProducts(), /fixture error/);
  global.fetch = originalFetch;
  if (priorDomain === undefined) delete process.env.SHOPIFY_STORE_DOMAIN; else process.env.SHOPIFY_STORE_DOMAIN = priorDomain;
  if (priorToken === undefined) delete process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN; else process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN = priorToken;
  console.log('PASS: 36 local products, 94 variants, 7 collections, 10 makers; base and option prices; all project cross-links in both screens; URL filter combinations and sorts; Shopify mapping, variant lead-time override, PHP validation, pagination, and GraphQL error handling.');
})().catch((error) => { console.error(error); process.exitCode = 1; });

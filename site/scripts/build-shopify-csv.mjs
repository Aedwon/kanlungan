import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
async function data(file, name) {
  const source = await readFile(path.join(root, 'src/data', file), 'utf8');
  const start = source.indexOf('= [', source.indexOf(`export const ${name}`)) + 2;
  return JSON.parse(source.slice(start, source.indexOf('\n];', start) + 2));
}
const products = await data('products.ts', 'products');
const collections = await data('collections.ts', 'collections');
const metafields = [
  ['Maker', 'maker', 'single_line_text_field'], ['Materials', 'materials', 'single_line_text_field'],
  ['Dimensions', 'dimensions', 'single_line_text_field'], ['Origin', 'origin', 'single_line_text_field'],
  ['Availability state', 'availability_state', 'single_line_text_field'], ['Lead time weeks', 'lead_time_weeks', 'number_integer'],
  ['One of a kind', 'one_of_a_kind', 'boolean'], ['Subcategory', 'subcategory', 'single_line_text_field'], ['Price unit', 'price_unit', 'single_line_text_field'],
];
const headers = ['Handle', 'Title', 'Body (HTML)', 'Vendor', 'Type', 'Tags', 'Published', 'Option1 Name', 'Option1 Value', 'Option2 Name', 'Option2 Value', 'Variant SKU', 'Variant Inventory Tracker', 'Variant Inventory Qty', 'Variant Inventory Policy', 'Variant Fulfillment Service', 'Variant Price', 'Variant Requires Shipping', 'Variant Taxable', 'Status', ...metafields.map(([name, key]) => `${name} (product.metafields.custom.${key})`)];
const rows = [];
for (const p of products) {
  let combinations = [{ options: [], price: p.price }];
  for (const option of p.variants) combinations = combinations.flatMap((v) => option.choices.map((c) => ({ options: [...v.options, [option.name, c.label]], price: c.price ?? v.price })));
  // Shopify's first variant reflects the seed product's displayed base price.
  combinations.sort((a, b) => Number(b.price === p.price) - Number(a.price === p.price));
  const sold = p.slug === 'kiso-stool'; const unique = p.availability === 'one-of-a-kind';
  combinations.forEach((v, i) => {
    const meta = [p.maker, p.materials, p.dimensions, p.origin, sold ? 'sold-out' : p.availability, p.leadTimeWeeks ?? '', unique ? 'true' : 'false', p.subcategory, p.priceUnit ?? ''];
    rows.push([p.slug, i ? '' : p.name, i ? '' : `<p>${p.description}</p>`, i ? '' : p.maker, i ? '' : p.category,
      i ? '' : collections.filter((c) => c.productSlugs.includes(p.slug)).map((c) => `collection:${c.slug}`).join(', '),
      i ? '' : 'TRUE', v.options[0]?.[0] ?? 'Title', v.options[0]?.[1] ?? 'Default Title', v.options[1]?.[0] ?? '', v.options[1]?.[1] ?? '',
      `${p.slug}-${i + 1}`, sold || unique ? 'shopify' : '', sold ? '0' : unique ? '1' : '', 'deny', 'manual', v.price.toFixed(2), 'TRUE', 'TRUE', i ? '' : 'active', ...meta.map((m) => i ? '' : m)]);
  });
}
const quote = (v) => `"${String(v).replaceAll('"', '""')}"`;
await mkdir(path.join(root, 'shopify'), { recursive: true });
await writeFile(path.join(root, 'shopify/products.csv'), [headers, ...rows].map((r) => r.map(quote).join(',')).join('\r\n') + '\r\n');
console.log(`Wrote shopify/products.csv: ${products.length} products, ${rows.length} variant rows (${rows.length + 1} rows including header).`);

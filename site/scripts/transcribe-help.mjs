// Reads the Help and Legal sections of docs/content/copy.md and writes src/data/help-content.json.
import { readFileSync, writeFileSync } from 'node:fs';
const md = readFileSync(new URL('../../docs/content/copy.md', import.meta.url), 'utf8');
const slugs = { 'Delivery and returns': 'delivery-and-returns', 'Care guide': 'care-guide', FAQ: 'faq', Privacy: 'privacy', Terms: 'terms' };
const out = {};
let area = ''; let page = null;
for (const line of md.split('\n')) {
  const h2 = line.match(/^## (.+)/);
  if (h2) { area = h2[1] === 'Help' ? 'help' : h2[1] === 'Legal' ? 'legal' : ''; page = null; continue; }
  if (!area) continue;
  const h3 = line.match(/^### (.+)/);
  if (h3) { const slug = slugs[h3[1]]; if (!slug) throw new Error(`Unknown page ${h3[1]}`); page = out[`${area}/${slug}`] = { slug, area, name: h3[1], title: h3[1], intro: '', items: [] }; continue; }
  const item = page && line.match(/^- \*\*(.+?)\*\*:? (.+)$/);
  if (!item) continue;
  const label = item[1].replace(/:$/, '');
  if (label === 'Heading') page.title = item[2];
  else if (label === 'Intro') page.intro = item[2];
  else page.items.push({ term: label, text: item[2] });
}
writeFileSync(new URL('../src/data/help-content.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(Object.entries(out).map(([k, v]) => `${k}: ${v.items.length} items`).join('\n'));

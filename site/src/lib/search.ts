import { products, type Product } from '@/data/products';
import { projects, type Project } from '@/data/projects';
import { collections } from '@/data/collections';
import { makers } from '@/data/makers';
import { copy } from '@/data/copy';
import help from '@/data/help-content.json';

// Local search over the seed catalog. Every word of the query must appear somewhere in an entry (any case).
export interface PageEntry { title: string; kind: string; href: string; text: string }
export interface Results { products: Product[]; projects: { project: Project; excerpt: string }[]; pages: (PageEntry & { excerpt: string })[] }

const sentence = (value: string) => (/[.!?]$/.test(value.trim()) ? value.trim() : `${value.trim()}.`);
export function tokens(query: string): string[] {
  return query.toLowerCase().replace(/[^\p{L}\p{N}\s'-]/gu, ' ').split(/\s+/).filter(Boolean).slice(0, 8);
}
function has(fields: string[], words: string[]) {
  const text = fields.join(' ').toLowerCase();
  return words.every((w) => text.includes(w));
}
// The sentence that holds the first match, so a result shows why it was found.
export function excerpt(text: string, words: string[], fallback = ''): string {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const line = sentences.find((s) => words.some((w) => s.toLowerCase().includes(w))) ?? (fallback || text).split(/(?<=[.!?])\s+/)[0] ?? '';
  return line.length > 200 ? `${line.slice(0, 197).trimEnd()}...` : line;
}
export function pageEntries(): PageEntry[] {
  const entries: PageEntry[] = [];
  for (const page of Object.values(help)) {
    entries.push({ title: page.title, kind: page.area === 'help' ? 'Help' : 'Legal', href: `/${page.area}/${page.slug}`, text: [page.intro, ...page.items.map((i) => `${i.term}. ${i.text}`)].join(' ') });
  }
  for (const c of collections) entries.push({ title: c.name, kind: 'Collection', href: `/shop/collections/${c.slug}`, text: `${c.description ?? ''} ${c.type}`.trim() });
  for (const m of makers) entries.push({ title: m.name, kind: 'Maker', href: `/shop/makers/${m.slug}`, text: `${m.craft}. ${m.story}` });
  entries.push(
    { title: 'Full-Service Furnishing', kind: 'Studio', href: '/studio/full-service-furnishing', text: `${copy.Services['Full-Service Furnishing / Promise']} ${copy.Services['Full-Service Furnishing / Short version for cards']}` },
    { title: 'Interior Design Direction', kind: 'Studio', href: '/studio/interior-design-direction', text: `${copy.Services['Interior Design Direction / Promise']} ${copy.Services['Interior Design Direction / Short version for cards']}` },
  );
  return entries;
}
export function search(query: string): Results {
  const words = tokens(query);
  if (!words.length) return { products: [], projects: [], pages: [] };
  const score = (name: string) => (words.every((w) => name.toLowerCase().includes(w)) ? 0 : 1);
  const found = products.filter((p) => has([p.name, p.maker, p.materials, p.category, p.subcategory], words))
    .sort((a, b) => score(a.name) - score(b.name));
  const foundProjects = projects.filter((p) => has([p.name, p.location, p.type, p.service, p.materialPalette, p.scope, p.brief], words))
    .map((project) => ({ project, excerpt: excerpt([project.materialPalette, project.brief, project.approach].map(sentence).join(' '), words, project.brief) }));
  const pages = pageEntries().filter((p) => has([p.title, p.kind, p.text], words)).sort((a, b) => score(a.title) - score(b.title))
    .map((p) => ({ ...p, excerpt: excerpt(p.text, words, p.text) }));
  return { products: found, projects: foundProjects, pages };
}

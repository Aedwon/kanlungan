import Link from 'next/link';
import type { ReactNode } from 'react';
import { copy } from '@/data/copy';
import { categories } from '@/data/navigation';
import { projectPages } from '@/data/project-pages';
import { search, tokens } from '@/lib/search';
import { ProductCard } from './ProductCard';
import { PhotoSlot } from './Photo';
import { TextLink } from './TextLink';

const text = copy['Search, 404, contact, and notify me'];

// Wraps every matched word in a mark so a result shows why it was found.
function Highlight({ value, words }: { value: string; words: string[] }): ReactNode {
  if (!words.length) return value;
  const pattern = new RegExp(`(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return value.split(pattern).map((part, i) => i % 2 ? <mark key={i} className="hit">{part}</mark> : part);
}

export function SearchView({ query }: { query: string }) {
  const q = query.trim().slice(0, 80);
  const words = tokens(q);
  const results = q ? search(q) : null;
  const total = results ? results.products.length + results.projects.length + results.pages.length : 0;
  const heading = !q ? 'Search' : total ? text['Search results heading'].replace('{query}', q) : text['Search empty heading'].replace('{query}', q);
  return <div className="sx">
    <div className="sx-head">
      <h1>{heading}</h1>
      <form action="/search" role="search" className="sx-form">
        <label htmlFor="q" className="sr">Search</label>
        <input id="q" name="q" type="search" defaultValue={q} autoComplete="off" autoFocus={!q} maxLength={80} placeholder="Search products, projects, and pages" className="sx-field" />
        <button type="submit" className="button button-primary sx-submit">Search</button>
      </form>
    </div>
    <p className="sr" role="status" aria-live="polite">{results ? `${total} ${total === 1 ? 'result' : 'results'}` : ''}</p>
    {results && total === 0 && <div className="sx-empty">
      <p>{text['Search empty text']}</p>
      <ul className="sx-links">{categories.map((c) => <li key={c.slug}><Link href={c.href} className="lnk">{c.name} <span className="arr" aria-hidden="true">→</span></Link></li>)}</ul>
      <TextLink href="/contact">Ask the studio</TextLink>
    </div>}
    {!q && <div className="sx-empty">
      <p>Search the shop, our projects, and the help pages. Try a material, a maker, or a room.</p>
      <ul className="sx-links">{['cane', 'mahogany', 'lamp', 'Lilim House'].map((s) => <li key={s}><Link href={`/search?q=${encodeURIComponent(s)}`} className="lnk">{s} <span className="arr" aria-hidden="true">→</span></Link></li>)}</ul>
    </div>}
    {results && results.products.length > 0 && <section className="sx-sec" aria-labelledby="sx-products">
      <h2 id="sx-products">Products</h2>
      <ul className="sx-products">{results.products.map((p) => <li key={p.slug}><ProductCard product={p} /></li>)}</ul>
    </section>}
    {results && results.projects.length > 0 && <section className="sx-sec" aria-labelledby="sx-projects">
      <h2 id="sx-projects">Projects</h2>
      <ul className="sx-list">{results.projects.map(({ project, excerpt }) => <li key={project.slug}>
        <Link href={`/projects/${project.slug}`} className="card sx-project">
          <div className="sx-project-image"><PhotoSlot name={projectPages[project.slug].card} alt="" sizes="132px" /></div>
          <div><div className="sx-project-name">{project.name}</div>
            <div className="sx-meta">{project.location} · {project.type.split(',')[0]} · {project.service}</div>
            <p><Highlight value={excerpt} words={words} /></p></div>
        </Link></li>)}</ul>
    </section>}
    {results && results.pages.length > 0 && <section className="sx-sec" aria-labelledby="sx-pages">
      <h2 id="sx-pages">Pages</h2>
      <ul className="sx-list">{results.pages.map((p) => <li key={p.href}>
        <Link href={p.href} className="card sx-page">
          <div className="sx-page-head"><span className="sx-page-title"><Highlight value={p.title} words={words} /></span><span className="sx-meta">{p.kind}</span></div>
          <p><Highlight value={p.excerpt} words={words} /></p>
        </Link></li>)}</ul>
    </section>}
  </div>;
}

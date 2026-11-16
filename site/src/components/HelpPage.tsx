import Link from 'next/link';
import type { ReactNode } from 'react';
import help from '@/data/help-content.json';

type Area = 'help' | 'legal';
const pages = Object.values(help);
export function helpSlugs(area: Area) { return pages.filter((p) => p.area === area).map((p) => p.slug); }
export function helpPage(area: Area, slug: string) { return pages.find((p) => p.area === area && p.slug === slug); }

// The words "contact form" link to the form, and the studio address becomes a mail link.
function linked(value: string): ReactNode[] {
  return value.split(/(contact form|studio@kanlungan\.example)/).map((part, i) => {
    if (part === 'contact form') return <Link key={i} href="/contact" className="lnk hp-link">{part}</Link>;
    if (part === 'studio@kanlungan.example') return <a key={i} href={`mailto:${part}`} className="lnk hp-link">{part}</a>;
    return part;
  });
}

export function HelpPage({ area, slug }: { area: Area; slug: string }) {
  const page = helpPage(area, slug)!;
  const siblings = pages.filter((p) => p.area === area);
  return <div className="hp">
    <nav aria-label={area === 'help' ? 'Help' : 'Legal'} className="hp-nav">
      <ul>{siblings.map((s) => <li key={s.slug}><Link href={`/${area}/${s.slug}`} aria-current={s.slug === slug ? 'page' : undefined}>{s.name}</Link></li>)}</ul>
    </nav>
    <div className="hp-main">
      <h1>{page.title}</h1>
      {page.intro && <p className="hp-intro">{page.intro}</p>}
      <dl className="hp-list">{page.items.map((item) => <div key={item.term} className="hp-row rv">
        <dt>{item.term}</dt>
        <dd>{linked(item.text)}</dd>
      </div>)}</dl>
    </div>
  </div>;
}

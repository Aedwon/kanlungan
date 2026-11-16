import Link from 'next/link';
import { PhotoSlot } from './Photo';
import { serviceOffers, serviceRows, servicesHeading } from '@/data/home-services';

// "Two ways to work with us": two offers compared row by row. Used on Home and the Studio landing page.
// Desktop is one grid so values line up across both columns. Phones stack two cards.
export function ServiceCompare({ variant, id, hideHeading = false }: { variant: 'desktop' | 'mobile'; id: string; hideHeading?: boolean }) {
  const sizes = variant === 'desktop' ? '(min-width: 1280px) 552px, 100vw' : '(min-width: 700px) 50vw, 100vw';
  const photo = (o: (typeof serviceOffers)[number]) => (
    <PhotoSlot name={o.photo} alt={o.alt} position={o.position} className="svc-ph" sizes={sizes} />
  );
  const link = (o: (typeof serviceOffers)[number]) => (
    <Link href={o.href} className="lnk svc-lnk">About {o.name} <span className="arr" aria-hidden="true">→</span></Link>
  );
  return (
    <section className={`svc svc-${variant}`} aria-labelledby={id}>
      <h2 id={id} className={hideHeading ? 'sr' : 'svc-h'}>{servicesHeading}</h2>
      {variant === 'desktop' ? (
        <div className="svc-tbl">
          <div aria-hidden="true" />
          {serviceOffers.map((o) => <div key={o.slug}>{photo(o)}</div>)}
          <div aria-hidden="true" />
          {serviceOffers.map((o) => (
            <div key={o.slug} className="svc-head"><h3 className="svc-h3">{o.name}</h3><p>{o.promise}</p></div>
          ))}
          {serviceRows.map((r) => [
            <div key={`${r.key}-l`} className="svc-rl" aria-hidden="true">{r.label}</div>,
            ...serviceOffers.map((o) => (
              <div key={`${r.key}-${o.slug}`} className="svc-v">
                <span className="sr">{o.name}, {r.label}: </span>
                {o.rows[r.key].map((line) => <span key={line} className="svc-line">{line}</span>)}
              </div>
            )),
          ])}
          <div className="svc-rl svc-lk" aria-hidden="true" />
          {serviceOffers.map((o) => <div key={o.slug} className="svc-lk">{link(o)}</div>)}
        </div>
      ) : (
        <div className="svc-cards">
          {serviceOffers.map((o) => (
            <article key={o.slug} className="svc-card">
              {photo(o)}
              <h3 className="svc-h3">{o.name}</h3>
              <p className="svc-pm">{o.promise}</p>
              <dl>
                {serviceRows.map((r) => (
                  <div key={r.key} className="svc-r">
                    <dt>{r.label}</dt>
                    <dd>{o.rows[r.key].map((line) => <span key={line} className="svc-line">{line}</span>)}</dd>
                  </div>
                ))}
              </dl>
              {link(o)}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

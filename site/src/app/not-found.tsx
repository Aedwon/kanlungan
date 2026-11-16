import Link from 'next/link';
import { copy } from '@/data/copy';
const text = copy['Search, 404, contact, and notify me'];
const links = [['Home', '/'], ['Shop', '/shop'], ['Projects', '/projects'], ['Contact', '/contact']] as const;
export const metadata = { title: 'Page not found' };
export default function NotFound() {
  return <div className="nf">
    <div className="nf-text">
      <h1>{text['404 heading']}</h1>
      <div className="nf-body">
        <p>{text['404 text']}</p>
        <ul>{links.map(([name, href]) => <li key={href}><Link href={href} className="lnk">{name} <span className="arr" aria-hidden="true">→</span></Link></li>)}</ul>
      </div>
    </div>
    <div className="nf-image" role="img" aria-label="An empty room with a bright doorway and a band of light across the floor">
      <div className="nf-room" /><div className="nf-shade" />
    </div>
  </div>;
}

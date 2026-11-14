import Link from 'next/link';
import { categories } from '@/data/navigation';
import { copy, fictionalBrandNotice } from '@/data/copy';
import { MailingList } from './MailingList';
const studio = [
  ['Full-Service Furnishing', '/studio/full-service-furnishing'], ['Interior Design Direction', '/studio/interior-design-direction'], ['Projects', '/projects'], ['About', '/about'],
];
const help = [['Delivery and returns', '/help/delivery-and-returns'], ['Care guide', '/help/care-guide'], ['FAQ', '/help/faq'], ['Contact', '/contact']];
export function Footer() {
  return <footer className="site-footer dk"><div className="footer-columns">
    <div className="footer-studio"><div className="footer-label">Studio</div><ul>{studio.map(([name,href]) => <li key={href}><Link href={href}>{name}</Link></li>)}</ul></div>
    <div className="footer-shop"><div className="footer-label">Shop</div><ul>{categories.map((category) => <li key={category.slug}><Link href={category.href}>{category.name}</Link></li>)}<li><Link href="/shop/collections">Collections</Link></li><li><Link href="/shop/makers">Makers</Link></li></ul></div>
    <div className="footer-help"><div className="footer-label">Help</div><ul>{help.map(([name,href]) => <li key={href}><Link href={href}>{name}</Link></li>)}</ul></div>
    <div className="footer-mailing"><div className="footer-label">Mailing list</div><MailingList label={copy['Mailing list'].Label} button={copy['Mailing list'].Button} /></div>
    <div className="footer-showroom"><div className="footer-label">Showroom</div><address><div>Makati City, Metro Manila. Open by appointment.</div><a href="mailto:studio@kanlungan.example">studio@kanlungan.example</a><a href="tel:+63285550100">+63 2 8555 0100</a></address></div>
  </div><div className="footer-bottom"><p>{fictionalBrandNotice}</p><div><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link></div></div></footer>;
}

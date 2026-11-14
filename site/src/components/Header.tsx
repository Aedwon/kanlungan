'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { categories } from '@/data/navigation';
import { collections } from '@/data/collections';
import { copy } from '@/data/copy';
import { Button } from './Button';
import { Logo } from './Logo';
import { CategoryIcon } from './CategoryIcon';
import { InterfaceIcon } from './InterfaceIcon';
import { ImagePlaceholder } from './ImagePlaceholder';
import { TextLink } from './TextLink';
type Panel = 'shop' | 'studio' | 'menu' | 'mobile-shop' | null;
const services = [
  { name: 'Full-Service Furnishing', href: '/studio/full-service-furnishing', description: copy.Services['Full-Service Furnishing / Short version for cards'] },
  { name: 'Interior Design Direction', href: '/studio/interior-design-direction', description: copy.Services['Interior Design Direction / Short version for cards'] },
];
export function Header({ cartCount = 0 }: { cartCount?: number }) {
  const path = usePathname();
  const router = useRouter();
  const [panel, setPanel] = useState<Panel>(null);
  const [bookingVisibility, setBookingVisibility] = useState({ path, visible: path === '/' });
  const heroVisible = bookingVisibility.path === path ? bookingVisibility.visible : path === '/';
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const mobile = panel === 'menu' || panel === 'mobile-shop';
  function close() { setPanel(null); trigger.current?.focus(); }
  function toggle(next: Panel, element: HTMLElement) {
    trigger.current = element;
    setPanel(panel === next ? null : next);
  }
  useEffect(() => {
    const buttons = document.querySelectorAll('main a[href="/book"]');
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target);
      }
      setBookingVisibility({ path, visible: visible.size > 0 });
    }, { rootMargin: `${window.matchMedia('(min-width: 1280px)').matches ? '-88px' : '-64px'} 0px 0px 0px`, threshold: 0 });
    buttons.forEach((button) => observer.observe(button));
    return () => observer.disconnect();
  }, [path]);
  useEffect(() => {
    if (!panel) return;
    const root = header.current;
    const bodyOverflow = document.body.style.overflow;
    if (mobile) document.body.style.overflow = 'hidden';
    const desktop = window.matchMedia('(min-width: 1280px)');
    const leaveMobile = () => { if (desktop.matches && mobile) setPanel(null); };
    desktop.addEventListener('change', leaveMobile);
    const region = root?.querySelector<HTMLElement>(`[data-panel="${panel}"]`);
    const focusables = () => Array.from(region?.querySelectorAll<HTMLElement>('a[href],button,input') ?? []).filter((el) => el.getClientRects().length > 0);
    if (mobile) focusables()[0]?.focus();
    function keydown(event: KeyboardEvent) {
      if (event.key === 'Escape') { event.preventDefault(); setPanel(null); trigger.current?.focus(); }
      if (event.key === 'Tab' && mobile) {
        const items = focusables(); const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    function outside(event: PointerEvent) { if (!root?.contains(event.target as Node)) setPanel(null); }
    document.addEventListener('keydown', keydown); document.addEventListener('pointerdown', outside);
    return () => { document.body.style.overflow = bodyOverflow; document.removeEventListener('keydown', keydown); document.removeEventListener('pointerdown', outside); desktop.removeEventListener('change', leaveMobile); };
  }, [panel, mobile]);
  const current = (href: string) => path === href || path.startsWith(href + '/');
  return <header className="site-header" ref={header}>
    <Logo />
    <nav className="desktop-nav" aria-label="Primary">
      <div className="nav-studio">
        <button type="button" className="nav-trigger" aria-expanded={panel === 'studio'} aria-controls="studio-panel" data-current={current('/studio')} onClick={(e) => toggle('studio', e.currentTarget)}>Studio</button>
        <div id="studio-panel" data-panel="studio" className="studio-panel header-panel" data-open={panel === 'studio'} inert={panel !== 'studio'}>
          {services.map((service) => <Link key={service.href} href={service.href} className="service-row" onClick={() => setPanel(null)}><span><span className="service-name">{service.name}</span><span className="arr" aria-hidden="true">→</span></span><span className="service-description">{service.description}</span></Link>)}
        </div>
      </div>
      <Link href="/projects" aria-current={current('/projects') ? 'page' : undefined} onClick={() => setPanel(null)}>Projects</Link>
      <button type="button" className="nav-trigger" aria-expanded={panel === 'shop'} aria-controls="shop-panel" data-current={current('/shop')} onClick={(e) => toggle('shop', e.currentTarget)}>Shop</button>
      <Link href="/about" aria-current={current('/about') ? 'page' : undefined} onClick={() => setPanel(null)}>About</Link>
    </nav>
    <div className="header-actions">
      <button type="button" className="ib search-button" aria-label="Search" onClick={() => { setPanel(null); router.push("/search"); }}><InterfaceIcon name="search" /></button>
      <Link href="/cart" className="ib cart-button" aria-label={`Cart, ${cartCount} items`} onClick={() => setPanel(null)}><InterfaceIcon name="cart" /><span>{cartCount}</span></Link>
      <div className="header-book" data-hidden={heroVisible}><Button href="/book" onClick={() => setPanel(null)}>{copy.Home['Hero button']}</Button></div>
      <button type="button" className="ib menu-button" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} aria-controls="mobile-menu" onClick={(e) => toggle('menu', e.currentTarget)}><InterfaceIcon name={mobile ? 'close' : 'menu'} /></button>
    </div>
    <div className="panel-scrim" data-open={panel === 'shop' || panel === 'studio'} onClick={() => setPanel(null)} aria-hidden="true" />
    <div id="shop-panel" data-panel="shop" className="shop-panel header-panel" data-open={panel === 'shop'} inert={panel !== 'shop'}>
      <div className="shop-categories">{categories.map((category) => <Link key={category.slug} href={category.href} className="cat" onClick={() => setPanel(null)}><CategoryIcon name={category.name} /><span>{category.name}</span></Link>)}</div>
      <div className="shop-collections">{collections.map((collection) => <Link key={collection.slug} href={`/shop/collections/${collection.slug}`} onClick={() => setPanel(null)}>{collection.name}</Link>)}</div>
      <div className="shop-feature"><Link href="/shop/collections/quiet-living" className="qa" onClick={() => setPanel(null)}><ImagePlaceholder alt="Quiet Living: low sofa and stone table in soft evening light" className="shop-feature-image im" /><span>Quiet Living</span></Link><TextLink href="/shop/makers" onClick={() => setPanel(null)}>Makers</TextLink></div>
    </div>
    <div id="mobile-menu" className="mobile-menu header-panel" data-panel={panel === 'mobile-shop' ? 'mobile-shop' : 'menu'} data-open={mobile} role={mobile ? 'dialog' : undefined} aria-modal={mobile || undefined} aria-label={panel === 'mobile-shop' ? 'Shop menu' : 'Main menu'} inert={!mobile}>
      <div className="mobile-menu-head">{panel === 'mobile-shop' ? <button type="button" onClick={() => setPanel('menu')} className="menu-back"><InterfaceIcon name="back" />Shop</button> : <Logo />}<button type="button" className="ib" onClick={close} aria-label="Close menu"><InterfaceIcon name="close" /></button></div>
      <nav className="mobile-menu-body" aria-label={panel === 'mobile-shop' ? 'Shop' : 'Primary'}>
        {panel === 'mobile-shop' ? <><div>{categories.map((category) => <Link key={category.slug} href={category.href} className="mobile-category" onClick={() => setPanel(null)}><CategoryIcon name={category.name} /><span>{category.name}</span><InterfaceIcon name="next" /></Link>)}</div><div className="mobile-shop-links"><TextLink href="/shop/collections" onClick={() => setPanel(null)}>Collections</TextLink><TextLink href="/shop/makers" onClick={() => setPanel(null)}>Makers</TextLink></div></> : <>
          <form action="/search" role="search" className="mobile-search" onSubmit={() => setPanel(null)}><label className="sr" htmlFor="mobile-search">Search</label><InterfaceIcon name="search" /><input id="mobile-search" name="q" type="search" placeholder="Search" /></form>
          <Link href="/studio" className="mobile-main-link" onClick={() => setPanel(null)}>Studio</Link>
          {services.map((service) => <Link key={service.href} href={service.href} className="mobile-service-link" onClick={() => setPanel(null)}>{service.name}</Link>)}
          <Link href="/projects" className="mobile-main-link" onClick={() => setPanel(null)}>Projects</Link>
          <button type="button" className="mobile-main-link" onClick={() => setPanel('mobile-shop')}>Shop<InterfaceIcon name="next" /></button>
          <Link href="/about" className="mobile-main-link" onClick={() => setPanel(null)}>About</Link>
        </>}
      </nav><div className="mobile-menu-book"><Button href="/book" onClick={() => setPanel(null)}>{copy.Home['Hero button']}</Button></div>
    </div>
  </header>;
}

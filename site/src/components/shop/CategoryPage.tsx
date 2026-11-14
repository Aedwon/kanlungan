'use client';
import { createElement, useRef, type ReactNode } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { copy } from '@/data/copy';
import type { CommerceProduct } from '@/lib/commerce/types';
import { filterProducts, materialMatches, priceMatches, priceRanges } from '@/lib/commerce/filter';
import { shopTemplate, children, elements, find, text, setText, productList, type ReferenceNode, type Screen } from '@/lib/shopTemplates';
import { ShopReference } from './ShopReference';
function formTemplate(catalog: CommerceProduct[]) {
  const node = find(shopTemplate('category', 'desktop'), 'form');
  const groups = children(node); const row = structuredClone(children(groups[0])[1]);
  const makers = [...new Set(catalog.map((p) => p.maker))];
  const materials = catalog[0]?.category === 'Seating' ? ['Mahogany', 'Acacia', 'Cane and rattan', 'Linen', 'Hinoki cypress'] : [...new Set(catalog.flatMap((p) => p.materials.split(', ').map((m) => m[0].toUpperCase() + m.slice(1))))];
  const values = [makers, materials, ['in-stock', 'made-to-order', 'sold-out', 'one-of-a-kind'], priceRanges];
  const names = ['maker', 'material', 'availability', 'price'];
  const labels: Record<string, string> = { 'in-stock': 'In stock', 'made-to-order': 'Made to order', 'sold-out': 'Sold out', 'one-of-a-kind': 'One of a kind' };
  groups.forEach((group, i) => {
    const heading = children(group)[0];
    group.children = [heading, ...values[i].flatMap((value) => {
      const count = catalog.filter((p) => i === 0 ? p.maker === value : i === 1 ? materialMatches(p, value) : i === 2 ? p.availability === value || (value === 'in-stock' && p.availability === 'one-of-a-kind') : priceMatches(p.price, value)).length;
      if (!count) return [];
      const item = structuredClone(row); const input = find(item, 'input'); input.attrs.name = names[i]; input.attrs.value = value;
      const spans = children(item).filter((n) => n.tag === 'span'); setText(spans[1], labels[value] ?? value); setText(spans[2], String(count));
      return [item];
    })];
  });
  return node;
}
export function CategoryPage({ category, catalog }: { category: { name: string; slug: string }; catalog: CommerceProduct[] }) {
  const search = useSearchParams(); const pathname = usePathname(); const dialog = useRef<HTMLDialogElement>(null); const trigger = useRef<HTMLButtonElement>(null);
  const params = new URLSearchParams(search.toString());
  const visible = filterProducts(catalog, params);
  function update(name: string, value: string, checked?: boolean) {
    const next = new URLSearchParams(search.toString());
    if (checked === undefined) { if (value && value !== 'featured') next.set(name, value); else next.delete(name); }
    else {
      const values = next.getAll(name).filter((v) => v !== value); if (checked) values.push(value);
      next.delete(name); values.forEach((v) => next.append(name, v));
    }
    window.history.pushState(null, '', pathname + (next.size ? '?' + next : '') + window.location.hash);
  }
  function render(node: ReferenceNode | string, scope: string): ReactNode {
    if (typeof node === 'string') return node;
    if (node.tag === 'form') {
      const form = formTemplate(catalog);
      for (const n of elements(form)) for (const key of ['id', 'aria-labelledby']) if (n.attrs[key]) n.attrs[key] = scope + '-' + n.attrs[key];
      return <form {...form.attrs} action={undefined} key={scope} aria-label="Filters" onSubmit={(e) => e.preventDefault()}>{form.children.map((n, i) => render(n, `${scope}-${i}`))}</form>;
    }
    if (node.tag === 'input') return <input {...node.attrs} key={scope} type="checkbox" checked={params.getAll(String(node.attrs.name)).includes(String(node.attrs.value))} onChange={(e) => update(String(node.attrs.name), String(node.attrs.value), e.target.checked)} />;
    if (node.tag === 'select') return <select {...node.attrs} id={scope === 'mobile-sort' ? 'mobile-sort' : String(node.attrs.id)} key={scope} value={params.get('sort') ?? 'featured'} onChange={(e) => update('sort', e.target.value)}><option value="featured">Featured</option><option value="newest">Newest</option><option value="price-asc">Price, low to high</option><option value="price-desc">Price, high to low</option></select>;
    if (node.tag === 'button' && node.attrs['aria-haspopup'] === 'dialog') return <button {...node.attrs} key={scope} ref={trigger} onClick={() => dialog.current?.showModal()}>{node.children.map((n, i) => <ShopReference key={i} node={n} />)}</button>;
    if (node.tag === 'a' && String(node.attrs.href).includes('subcategory=')) {
      const sub = new URL('https://kanlungan.example' + node.attrs.href).searchParams.get('subcategory')!;
      return <a {...node.attrs} key={scope} aria-current={params.get('subcategory') === sub ? 'page' : undefined} onClick={(e) => { e.preventDefault(); update('subcategory', sub); }}>{node.children.map((n, i) => <ShopReference key={i} node={n} />)}</a>;
    }
    if (node.tag === 'a' && node.attrs['data-all']) return <a {...node.attrs} key={scope} aria-current={!params.get('subcategory') ? 'page' : undefined} onClick={(e) => { e.preventDefault(); update('subcategory', ''); }}>{node.children.map((n, i) => <ShopReference key={i} node={n} />)}</a>;
    // Render the surrounding artboard with interactive filter descendants.
    if (!elements(node).some((n) => ['form', 'input', 'select'].includes(n.tag) || n.attrs['aria-haspopup'] === 'dialog' || n.attrs['data-all'] || (n.tag === 'a' && String(n.attrs.href).includes('subcategory=')))) return <ShopReference key={scope} node={node} />;
    const { tag, attrs } = node;
    return createNode(tag, attrs, node.children.map((n, i) => render(n, `${scope}-${i}`)), scope);
  }
  function screen(size: Screen) {
    const node = shopTemplate('category', size); setText(find(node, 'h1'), category.name);
    setText(find(node, 'p'), (copy['Index pages'] as Record<string, string>)[`Category one-liners / ${category.name.replace('Textiles', 'textiles').replace('Objects', 'objects')}`] ?? '');
    const nav = find(node, 'nav'); nav.attrs['aria-label'] = `${category.name} subcategories`;
    const links = children(nav); const subs = [...new Set(catalog.map((p) => p.subcategory))].filter(Boolean);
    nav.children = [null, ...subs].map((sub, i) => {
      const link = structuredClone(links[i ? 1 : 0]);
      link.attrs.href = `/shop/${category.slug}` + (sub ? `?subcategory=${encodeURIComponent(sub)}` : '');
      delete link.attrs['aria-current'];
      const selected = (params.get('subcategory') ?? null) === sub;
      const style = link.attrs.style as Record<string, string>;
      style.outline = selected ? '1px solid #8E4A2C' : ''; style.outlineOffset = selected ? '2px' : '';
      if (!sub) link.attrs['data-all'] = true;
      setText(link, sub ?? `All ${category.name.toLowerCase()}`); return link;
    });
    productList(node, visible, size);
    for (const n of elements(node)) if (text(n) === '6 pieces' && !children(n).length) { setText(n, `${visible.length} ${visible.length === 1 ? 'piece' : 'pieces'}`); n.attrs['aria-live'] = 'polite'; }
    return render(node, size);
  }
  return <>{screen('desktop')}{screen('mobile')}<dialog ref={dialog} className="shop-filter-dialog" onClick={(e) => { if (e.target === e.currentTarget) dialog.current?.close(); }} onClose={() => trigger.current?.focus()}><div className="shop-filter-panel"><div className="shop-filter-title"><h2>Filter and sort</h2><button type="button" className="ib" aria-label="Close filters" onClick={() => dialog.current?.close()}>×</button></div>{render(formTemplate(catalog), 'mobile-filters')}<label className="shop-filter-sort">Sort by{render(find(shopTemplate('category', 'desktop'), 'select'), 'mobile-sort')}</label><button type="button" className="button button-primary" onClick={() => dialog.current?.close()}>{visible.length} {visible.length === 1 ? 'piece' : 'pieces'}</button></div></dialog></>;
}
function createNode(tag: string, attrs: ReferenceNode['attrs'], content: ReactNode[], key: string) { return createElement(tag, { ...attrs, key }, content); }

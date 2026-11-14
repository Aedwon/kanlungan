import type { CSSProperties } from 'react';
import source from '@/data/checkout-templates.json';
import paintings from '@/data/shop-paintings.json';
import { products } from '@/data/products';
import { productPlaceholders } from '@/data/product-placeholders';
import { formatPrice } from './formatPrice';
import { delivery, furniture, mixed, mixedNote, subtotal, type CartLine, type DemoOrder } from './cart';
import type { ReferenceNode, Screen } from './studioTemplates';
export type { ReferenceNode, Screen };
export function nodes(n: ReferenceNode): ReferenceNode[] { return [n, ...n.children.flatMap((c) => typeof c === 'string' ? [] : nodes(c))]; }
export function children(n: ReferenceNode) { return n.children.filter((c): c is ReferenceNode => typeof c !== 'string'); }
export function text(n: ReferenceNode): string { return n.children.map((c) => typeof c === 'string' ? c : text(c)).join(''); }
export function setText(n: ReferenceNode, s: string) { n.children = [s]; }
export function style(n: ReferenceNode) { return (n.attrs.style ??= {}) as CSSProperties; }
export function find(n: ReferenceNode, tag: string) { const result = nodes(n).find((n) => n.tag === tag); if (!result) throw new Error(`Missing ${tag} in artboard`); return result; }
export function flowTemplate(name: string, screen: Screen): ReferenceNode { return structuredClone((source as unknown as Record<string, ReferenceNode>)[`${name}-${screen}`]); }
export function remove(root: ReferenceNode, target: ReferenceNode) { for (const n of nodes(root)) n.children = n.children.filter((c) => c !== target); }
export function leaf(root: ReferenceNode, content: string) { return nodes(root).find((n) => !children(n).length && text(n) === content); }
export function labelValue(root: ReferenceNode, label: string, value: string) {
  const row = nodes(root).find((n) => children(n)[0] && text(children(n)[0]) === label && children(n).length === 2);
  if (row) setText(children(row)[1], value);
}
function paint(image: ReferenceNode, line: CartLine) {
  const p = (paintings as unknown as Record<string, ReferenceNode>)[line.productSlug];
  const fallback = productPlaceholders[line.productSlug];
  image.attrs['aria-label'] = line.name;
  if (line.image) { image.children = []; style(image).backgroundImage = `url("${line.image.replace(/["\\\n\r]/g, '')}")`; style(image).backgroundSize = 'cover'; style(image).backgroundPosition = 'center'; }
  else if (p) image.children = structuredClone(p.children);
  else image.children = [{ tag: 'div', attrs: { className: 'im', style: { position: 'absolute', inset: 0, background: fallback?.background ?? '#E8DFD2' } }, children: [] }];
}
export function lineItem(sample: ReferenceNode, line: CartLine): ReferenceNode {
  const item = structuredClone(sample); const image = nodes(item).find((n) => n.attrs.role === 'img');
  if (image) paint(image, line);
  const link = nodes(item).find((n) => n.tag === 'a');
  const originalName = link ? text(link) : nodes(item).find((n) => style(n).fontFamily && !children(n).length);
  if (link) { setText(link, line.name); link.attrs.href = `/shop/products/${line.productSlug}`; }
  else if (typeof originalName !== 'string' && originalName) setText(originalName, line.name + (line.quantity > 1 && !nodes(item).some((n) => /Qty \d/.test(text(n))) ? ` × ${line.quantity}` : ''));
  const maker = leaf(item, 'Kanlungan Original');
  if (maker) setText(maker, line.maker ?? products.find((p) => p.slug === line.productSlug)?.maker ?? '');
  const options = leaf(item, 'Oat linen · Three-seat 228 cm'); if (options) setText(options, Object.values(line.options).join(' · ') || (!maker ? line.maker ?? products.find((p) => p.slug === line.productSlug)?.maker ?? '' : ''));
  const summaryOptions = leaf(item, 'Oat linen · Three-seat 228 cm · Qty 1'); if (summaryOptions) setText(summaryOptions, [...Object.values(line.options), `Qty ${line.quantity}`].join(' · '));
  for (const n of nodes(item)) {
    if (!children(n).length && /^₱/.test(text(n))) setText(n, formatPrice(line.price * line.quantity));
    const s = text(n);
    if (['Made to order.', 'In stock.'].includes(s)) setText(n, line.leadTimeWeeks !== null ? 'Made to order.' : 'In stock.');
    if (/^(Ready in \d+ weeks\.|Ships in 3 to 7 business days\.)$/.test(s)) setText(n, line.leadTimeWeeks !== null ? `Ready in ${line.leadTimeWeeks} weeks.` : 'Ships in 3 to 7 business days.');
    if (n.attrs.role === 'group' && String(n.attrs['aria-label']).startsWith('Quantity')) { n.attrs['aria-label'] = `Quantity of ${line.name}`; const count = children(n).find((n) => n.tag === 'span'); if (count) setText(count, String(line.quantity)); }
    if (n.tag === 'button') {
      const action = String(n.attrs['aria-label']).split(' ')[0];
      n.attrs['data-cart-action'] = action; n.attrs['data-variant'] = line.variantId; n.attrs['data-quantity'] = line.quantity;
      n.attrs['aria-label'] = `${action === 'Remove' ? 'Remove' : action + ' quantity of'} ${line.name}`;
    }
  }
  return item;
}
export function bindCart(root: ReferenceNode, lines: CartLine[], drawer = false) {
  const list = find(root, 'ul'); const sample = children(list)[0]; list.children = lines.map((l) => lineItem(sample, l));
  labelValue(root, 'Subtotal', formatPrice(subtotal(lines)));
  const note = nodes(root).find((n) => n.tag === 'p' && text(n) === mixedNote); if (note && !mixed(lines)) remove(root, note);
  const prompt = nodes(root).find((n) => n.tag === 'div' && children(n).some((c) => c.tag === 'p' && text(c).startsWith('Furnishing a whole room?')));
  if (prompt && lines.filter(furniture).reduce((n, l) => n + l.quantity, 0) < 4) remove(root, prompt);
  const estimate = leaf(root, 'In Metro Manila, delivery on this order is free.');
  if (estimate) setText(estimate, delivery(lines).total === 0 ? 'In Metro Manila, delivery on this order is free.' : `Metro Manila delivery estimate: ${formatPrice(delivery(lines).total)}.`);
  if (!drawer) { const summary = find(root, 'aside'); summary.children.splice(1, 0, { tag: 'p', attrs: { className: 'vat-note' }, children: ['VAT included'] }); }
  if (drawer && !lines.length) list.children = [{ tag: 'li', attrs: { style: { padding: '32px 0' } }, children: ['Your cart is empty.'] }];
  return root;
}
export function bindSummary(summary: ReferenceNode, lines: CartLine[], fee: number) {
  const list = nodes(summary).find((n) => n.tag === 'ul');
  if (list) { const sample = children(list)[0]; list.children = lines.map((l) => lineItem(sample, l)); }
  else {
    const rows = children(summary).filter((n) => style(n).padding === '8px 0');
    if (rows.length) { const sample = rows[0]; summary.children = summary.children.filter((c) => !rows.includes(c as ReferenceNode)); summary.children.unshift(...lines.map((l) => { const row = structuredClone(sample); setText(children(row)[0], l.name + (l.quantity > 1 ? ` × ${l.quantity}` : '')); setText(children(row)[1], formatPrice(l.price * l.quantity)); return row; })); }
  }
  labelValue(summary, 'Subtotal', formatPrice(subtotal(lines))); labelValue(summary, 'Delivery', fee ? formatPrice(fee) : 'Free'); labelValue(summary, 'Total', formatPrice(subtotal(lines) + fee));
}
export function bindReview(root: ReferenceNode, lines: CartLine[]) {
  const list = find(root, 'ul'); const sample = children(list).find((n) => text(n).includes('Silong Sofa')) ?? children(list)[0];
  list.children = [...lines.filter((l) => l.leadTimeWeeks === null), ...lines.filter((l) => l.leadTimeWeeks !== null)].map((l) => lineItem(sample, l));
  const note = nodes(root).find((n) => n.tag === 'p' && text(n) === mixedNote); if (note && !mixed(lines)) remove(root, note);
}
export function confirmationTemplate(order: DemoOrder, screen: Screen) {
  const root = flowTemplate('confirmation', screen); setText(leaf(root, 'KL-2026-0142')!, order.number);
  const summary = find(root, 'aside'); bindSummary(summary, order.lines, order.delivery);
  const address = leaf(summary, 'Isabel Navarro');
  const paragraph = nodes(summary).find((n) => n.tag === 'p' && text(n).includes('Isabel Navarro'));
  if (paragraph) paragraph.children = order.address.flatMap((s, i) => i ? [{ tag: 'br', attrs: {}, children: [] } as ReferenceNode, s] : [s]);
  if (address) setText(address, order.address[0]);
  setText(leaf(summary, 'Card ending 4242')!, order.payment);
  const lists = nodes(root).filter((n) => n.tag === 'ul');
  lists.forEach((list, i) => { const sample = children(list).find((n) => text(n).includes(i ? 'Silong Sofa' : 'Kapis Pendant'))!; list.children = order.lines.filter((l) => i ? l.leadTimeWeeks !== null : l.leadTimeWeeks === null).map((l) => lineItem(sample, l)); if (!list.children.length) { const group = nodes(root).find((n) => style(n).gridTemplateColumns === '28px minmax(0,1fr)' && nodes(n).includes(list)); if (group) remove(root, group); } });
  const note = leaf(root, 'In-stock items ship first. Made-to-order items follow when they are ready.'); if (note && !mixed(order.lines)) remove(root, note);
  return root;
}

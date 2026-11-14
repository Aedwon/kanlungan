import source from '@/data/shop-templates.json';
import paintings from '@/data/shop-paintings.json';
import { products as seedProducts } from '@/data/products';
import { makers as seedMakers } from '@/data/makers';
import { projects } from '@/data/projects';
import { copy } from '@/data/copy';
import { children, elements, find, hasClass, text, template as studioTemplate, type ReferenceNode, type Screen } from './studioTemplates';
import { availabilityLine, type CommerceProduct, type Collection, type Maker } from './commerce/types';
import { formatPrice } from './formatPrice';
export { children, elements, find, hasClass, text };
export type { ReferenceNode, Screen };
export function shopTemplate(name: string, screen: Screen): ReferenceNode {
  return structuredClone((source as unknown as Record<string, ReferenceNode>)[`${name}-${screen}`]);
}
export function setText(node: ReferenceNode, value: string) { node.children = [value]; }
export function replaceText(node: ReferenceNode, before: string, after: string) {
  if (!before) return;
  for (const n of elements(node)) n.children = n.children.map((c) => typeof c === 'string' ? c.replaceAll(before, after) : c);
}
export function section(node: ReferenceNode, title: string) {
  const result = elements(node).filter((n) => n.tag === 'section' && elements(n).some((c) => /^h[1-3]$/.test(c.tag) && text(c) === title)).at(-1);
  if (!result) throw new Error(`Missing Shop section ${title}`);
  return result;
}
function remove(node: ReferenceNode, target: ReferenceNode) { for (const n of elements(node)) n.children = n.children.filter((c) => c !== target); }
export function productCard(item: ReferenceNode, p: CommerceProduct, screen: Screen): ReferenceNode {
  const node = structuredClone(item);
  const link = elements(node).find((n) => n.tag === 'a' && String(n.attrs.href).startsWith('/shop/products/'))!;
  const before = seedProducts.find((p) => `/shop/products/${p.slug}` === link.attrs.href)!;
  link.attrs.href = `/shop/products/${p.slug}`;
  link.attrs['data-product-slug'] = p.slug;
  const originalName = before.name;
  replaceText(link, originalName, p.name);
  const meta = children(link).at(-1)!;
  const fields = children(meta);
  setText(fields[0], p.name); setText(fields[1], formatPrice(p.price) + (p.priceUnit ? ` ${p.priceUnit}` : ''));
  const detail = fields[2];
  const made = availabilityLine(p, undefined, screen === 'mobile' && !text(detail).includes('Ready in'));
  if (screen === 'desktop') {
    detail.attrs.className = p.availability === 'sold-out' ? '' : 'dt';
    const oldFields = children(detail);
    const makerNode = structuredClone(oldFields[0] ?? detail);
    const stockNode = structuredClone(oldFields[1] ?? oldFields[0] ?? detail);
    makerNode.attrs = { style: { fontSize: '14px', lineHeight: '1.5', color: '#6A584A' } };
    stockNode.attrs = { style: { marginTop: '2px', fontSize: '14px', lineHeight: '1.5', fontWeight: 500, color: p.availability === 'sold-out' ? '#6A584A' : '#8E4A2C' } };
    if (p.availability === 'sold-out') makerNode.attrs.className = 'dt';
    setText(makerNode, p.maker + (p.slug === 'tanghali' ? ' · Paolo Sarmiento' : ''));
    setText(stockNode, made);
    detail.children = [makerNode, stockNode];
  } else setText(detail, made);
  meta.children = fields.slice(0, 3);
  if (p.slug !== before.slug) {
    const image = elements(link).find((n) => n.attrs.role === 'img')!;
    const approved = (paintings as unknown as Record<string, ReferenceNode>)[p.slug];
    image.attrs['aria-label'] = p.name;
    image.children = approved ? structuredClone(approved.children) : [{ tag: 'div', attrs: { className: 'im', style: { position: 'absolute', inset: 0, background: 'var(--color-surface)' } }, children: [] }];
  }
  if (p.images.length) {
    const image = elements(link).find((n) => n.attrs.role === 'img')!;
    image.children = [{ tag: 'img', attrs: { src: p.images[0].url, alt: p.images[0].alt, loading: 'lazy', style: { width: '100%', height: '100%', objectFit: 'cover' } }, children: [] }];
  }
  // Sold-out email is outside the product link.
  for (const form of elements(node).filter((n) => n.tag === 'form')) remove(node, form);
  if (p.availability === 'sold-out') node.children.push({ tag: 'Notify', attrs: { id: `notify-${screen}-${p.slug}` }, children: [] });
  return node;
}
export function bindExistingCards(node: ReferenceNode, catalog: CommerceProduct[], screen: Screen) {
  for (const parent of elements(node)) parent.children = parent.children.flatMap((child) => {
    if (typeof child === 'string' || child.tag !== 'li') return [child];
    const link = elements(child).find((n) => n.tag === 'a' && String(n.attrs.href).startsWith('/shop/products/'));
    if (!link) return [child];
    const p = catalog.find((p) => `/shop/products/${p.slug}` === link.attrs.href);
    return p ? [productCard(child, p, screen)] : [];
  });
}
export function productList(base: ReferenceNode, catalog: CommerceProduct[], screen: Screen) {
  const list = find(base, 'ul');
  const originals = children(list).filter((li) => elements(li).some((n) => n.tag === 'a' && String(n.attrs.href).startsWith('/shop/products/')));
  list.children = catalog.map((p) => productCard(originals.find((li) => elements(li).some((n) => n.attrs.href === `/shop/products/${p.slug}`)) ?? originals[0], p, screen));
}
export function makerTemplate(maker: Maker, catalog: CommerceProduct[], screen: Screen) {
  const node = shopTemplate('maker', screen); const base = seedMakers[0];
  for (const key of ['name', 'place', 'craft', 'story'] as const) replaceText(node, base[key], maker[key]);
  if (maker.slug !== base.slug) {
    const index = shopTemplate('makers', 'desktop');
    const card = elements(index).find((n) => n.tag === 'a' && n.attrs.href === `/shop/makers/${maker.slug}`)!;
    const image = elements(card).find((n) => n.attrs.role === 'img')!;
    const hero = elements(node).find((n) => n.attrs.role === 'img')!;
    hero.attrs['aria-label'] = image.attrs['aria-label']; hero.children = structuredClone(image.children);
  }
  productList(node, catalog.filter((p) => p.maker === maker.name), screen); return node;
}
export function collectionTemplate(collection: Collection, catalog: CommerceProduct[], screen: Screen) {
  const node = shopTemplate('collection', screen);
  replaceText(node, 'Quiet Living', collection.name);
  const intro = elements(children(node)[0]).find((n) => n.tag === 'p')!;
  // Room collections have no authored description; keep this slot empty.
  setText(intro, collection.description ?? '');
  const list = find(node, 'ul'); const items = children(list);
  const prototypes = items.filter((n) => elements(n).some((x) => x.tag === 'a' && String(x.attrs.href).startsWith('/shop/products/')));
  const photos = items.filter((n) => !prototypes.includes(n));
  const ordered = collection.productSlugs.map((slug) => catalog.find((p) => p.slug === slug)).filter((p): p is CommerceProduct => !!p);
  const cards = ordered.map((p) => productCard(prototypes.find((li) => elements(li).some((x) => x.attrs.href === `/shop/products/${p.slug}`)) ?? prototypes[0], p, screen));
  if (screen === 'desktop') list.children = [photos[0], ...cards, ...photos.slice(1)];
  else list.children = [...cards.slice(0, 2), photos[0], ...cards.slice(2), ...photos.slice(1)];
  const seen = section(node, 'Seen in');
  const related = projects.find((project) => project.shopTheProject.some((name) => ordered.some((p) => name.replace(/ \([^)]*\)$/, '') === p.name)));
  if (!related) remove(node, seen);
  else {
    const names = ordered.filter((p) => related.shopTheProject.some((name) => name.replace(/ \([^)]*\)$/, '') === p.name)).map((p) => p.name);
    setText(find(seen, 'p'), names.join(', ') + '.');
    const link = find(seen, 'a'); link.attrs.href = `/projects/${related.slug}`;
    replaceText(link, 'Lilim House', related.name); replaceText(link, 'Antipolo, Rizal', related.location); replaceText(link, 'Residential', related.type.split(',')[0]);
  }
  return node;
}
export function productTemplate(product: CommerceProduct, catalog: CommerceProduct[], collections: Collection[], screen: Screen) {
  const node = shopTemplate('product', screen);
  const h1 = find(node, 'h1'); setText(h1, product.name);
  const details = section(node, 'Details');
  for (const row of children(find(details, 'dl'))) {
    const key = text(find(row, 'dt')); const value = key === 'Materials' ? product.materials : key === 'Dimensions' ? product.dimensions + ' cm' : key === 'Origin' ? product.origin : null;
    if (value && product.slug !== 'silong-sofa') setText(find(row, 'dd'), value);
  }
  const delivery = section(node, 'Delivery and returns');
  if (product.slug !== 'silong-sofa') {
    const paragraphs = elements(delivery).filter((n) => n.tag === 'p');
    setText(paragraphs[0], ['Seating', 'Tables', 'Beds', 'Storage'].includes(product.category) ? copy.Help['Delivery and returns / Furniture'] : copy.Help['Delivery and returns / Small items']);
    setText(paragraphs[1], copy.Help['Delivery and returns / Returns']);
  }
  const makerSection = section(node, 'Kanlungan Original');
  if (product.maker !== 'Kanlungan Original') {
    const maker = seedMakers.find((m) => m.name === product.maker)!;
    setText(find(makerSection, 'h2'), maker.name); setText(find(makerSection, 'p'), maker.story);
    const link = find(makerSection, 'a'); link.attrs.href = `/shop/makers/${maker.slug}`; link.children[0] = maker.name + ' ';
  }
  const seen = section(node, 'Seen in');
  const projectCards = elements(seen).filter((n) => n.tag === 'a' && String(n.attrs.href).startsWith('/projects/'));
  const used = projects.filter((p) => p.shopTheProject.some((name) => name.replace(/ \([^)]*\)$/, '') === product.name));
  const projectContainer = elements(seen).find((n) => projectCards.length && projectCards.every((card) => children(n).includes(card)))!;
  projectContainer.children = used.map((project) => {
    const supplied = projectCards.find((card) => card.attrs.href === `/projects/${project.slug}`);
    const card = structuredClone(supplied ?? projectCards[0]);
    card.attrs.href = `/projects/${project.slug}`;
    const old = supplied ? project : projects[0];
    replaceText(card, old.name, project.name); replaceText(card, old.location, project.location);
    const label = children(card).at(-1)!;
    const fields = children(label);
    const listed = project.shopTheProject.find((name) => name.replace(/ \([^)]*\)$/, '') === product.name)!;
    if (product.slug !== 'silong-sofa') setText(fields.at(-1)!, listed);
    if (!supplied) {
      const index = studioTemplate('projects', screen);
      const projectLink = elements(index).find((n) => n.tag === 'a' && n.attrs.href === `/projects/${project.slug}`)!;
      const image = elements(projectLink).find((n) => n.attrs.role === 'img')!;
      const target = elements(card).find((n) => n.attrs.role === 'img')!;
      const paint = elements(image).find((n) => (n.attrs.style as Record<string, string>)?.background)!;
      const targetPaint = elements(target).find((n) => (n.attrs.style as Record<string, string>)?.background) ?? target;
      (targetPaint.attrs.style as Record<string, string>).background = (paint.attrs.style as Record<string, string>).background;
      target.attrs['aria-label'] = image.attrs['aria-label'];
      for (const note of elements(card).filter((n) => hasClass(n, 'ph'))) setText(note, `Placeholder · ${project.name}`);
    }
    return card;
  });
  if (!used.length) remove(node, seen);
  const pairs = section(node, 'Pairs well with');
  const collection = collections.find((c) => c.slug === 'quiet-living' && c.productSlugs.includes(product.slug)) ?? collections.find((c) => c.productSlugs.includes(product.slug));
  const preferred = product.slug === 'silong-sofa' ? ['batis-coffee-table', 'lambot-wool-rug', 'luad-table-lamp', 'tapayan-vessel'] : collection?.productSlugs.filter((s) => s !== product.slug).slice(0, 4) ?? [];
  productList(pairs, preferred.map((s) => catalog.find((p) => p.slug === s)).filter((p): p is CommerceProduct => !!p), screen);
  const collectionLink = elements(pairs).find((n) => n.tag === 'a' && String(n.attrs.href).startsWith('/shop/collections/'));
  if (collectionLink && collection) collectionLink.attrs.href = `/shop/collections/${collection.slug}`;
  if (!collection) remove(node, pairs);
  // The authored Silong controls are rebound at render time, preserving their exact geometry.
  const buy = elements(node).find((n) => children(n).includes(h1))!;
  buy.tag = 'ProductBuy'; buy.attrs['data-screen'] = screen;
  const bar = elements(node).find((n) => hasClass(n, 'mbar'));
  if (bar) bar.tag = 'ProductBar';
  if (product.slug !== 'silong-sofa' || product.images.length) {
    const gallery = children(node)[0];
    const images = elements(gallery).filter((n) => n.attrs.role === 'img');
    images.forEach((image, index) => {
      const actual = product.images[index];
      image.attrs['aria-label'] = actual?.alt ?? product.name;
      const painting = (paintings as unknown as Record<string, ReferenceNode>)[product.slug];
      image.children = actual ? [{ tag: 'img', attrs: { src: actual.url, alt: actual.alt, style: { width: '100%', height: '100%', objectFit: 'cover' } }, children: [] }]
        : painting ? structuredClone(painting.children) : [{ tag: 'div', attrs: { style: { position: 'absolute', inset: 0, background: 'var(--color-surface)' } }, children: [] }];
      if (!actual && index === 3) {
        const room = elements(shopTemplate('collection', screen)).find((n) => n.attrs.role === 'img')!;
        image.children = structuredClone(room.children);
        if (!image.children.length) image.attrs.style = { ...image.attrs.style as object, background: (room.attrs.style as Record<string, string>).background };
        image.attrs['aria-label'] = 'Placeholder · ' + product.name + ' room context';
      }
    });
  }
  return node;
}

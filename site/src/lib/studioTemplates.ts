import type { CSSProperties } from 'react';
import source from '@/data/studio-templates.json';
import serviceContent from '@/data/service-content.json';
import { copy } from '@/data/copy';
import { projects, type Project } from '@/data/projects';
import { products, type Product } from '@/data/products';

// Structured artboard markup, rendered as React elements, never injected HTML.
export interface ReferenceNode {
  tag: string;
  attrs: Record<string, string | number | boolean | CSSProperties>;
  children: (ReferenceNode | string)[];
}
export type Screen = 'desktop' | 'mobile';
export type Service = 'furnishing' | 'direction';
export function elements(node: ReferenceNode): ReferenceNode[] {
  return [node, ...node.children.flatMap((child) => typeof child === 'string' ? [] : elements(child))];
}
export function text(node: ReferenceNode): string {
  return node.children.map((child) => typeof child === 'string' ? child : text(child)).join('');
}
export function children(node: ReferenceNode): ReferenceNode[] {
  return node.children.filter((child): child is ReferenceNode => typeof child !== 'string');
}
export function find(node: ReferenceNode, tag: string): ReferenceNode {
  const found = elements(node).find((child) => child.tag === tag);
  if (!found) throw new Error(`Missing ${tag} in approved artboard`);
  return found;
}
export function hasClass(node: ReferenceNode, name: string): boolean {
  return String(node.attrs.className ?? '').split(' ').includes(name);
}
export function template(name: string, screen: Screen): ReferenceNode {
  const templates = source as unknown as Record<string, ReferenceNode>;
  const value = templates[`${name}-${screen}`];
  if (!value) throw new Error(`Missing ${name} ${screen} template`);
  return structuredClone(value);
}
function setText(node: ReferenceNode, value: string) { node.children = [value]; }
function replaceText(node: ReferenceNode, before: string, after: string) {
  for (const child of elements(node)) child.children = child.children.map((value) => typeof value === 'string' ? value.replaceAll(before, after) : value);
}
function section(node: ReferenceNode, heading: string): ReferenceNode {
  const found = children(node).find((child) => elements(child).some((n) => /^h[1-3]$/.test(n.tag) && text(n) === heading));
  if (!found) throw new Error(`Missing section: ${heading}`);
  return found;
}
function styles(node: ReferenceNode): CSSProperties { return node.attrs.style as CSSProperties ?? {}; }
export function serviceHref(service: string) {
  return service === 'Interior Design Direction' ? '/studio/interior-design-direction' : '/studio/full-service-furnishing';
}
function projectImage(project: Project, screen: Screen): { background: string; label: string } {
  const index = template('projects', screen);
  const card = elements(index).find((n) => n.tag === 'a' && n.attrs.href === `/projects/${project.slug}`)!;
  const image = elements(card).find((n) => n.attrs.role === 'img')!;
  const paint = elements(image).find((n) => hasClass(n, 'im'))!;
  return { background: String(styles(paint).background), label: String(image.attrs['aria-label']) };
}
function applyProjectImage(node: ReferenceNode, project: Project, screen: Screen) {
  const image = projectImage(project, screen);
  for (const n of elements(node).filter((n) => n.attrs.role === 'img')) {
    n.attrs['aria-label'] = image.label;
    const paint = elements(n).find((n) => hasClass(n, 'im') || hasClass(n, 'par'));
    if (paint) styles(paint).background = image.background;
    else styles(n).background = image.background;
  }
  for (const n of elements(node).filter((n) => hasClass(n, 'ph'))) setText(n, `Placeholder · ${project.name}`);
}
function bindProjectCard(node: ReferenceNode, before: Project, project: Project, screen: Screen) {
  if (before.slug === project.slug) return;
  const link = find(node, 'a');
  link.attrs.href = `/projects/${project.slug}`;
  replaceText(node, before.name, project.name);
  replaceText(node, before.location, project.location);
  replaceText(node, before.type.split(',')[0], project.type.split(',')[0]);
  applyProjectImage(node, project, screen);
}

export function serviceTemplate(service: Service, screen: Screen): ReferenceNode {
  const page = template('service', screen);
  // The furnishing page stays verbatim. Only the second service binds new content.
  if (service === 'furnishing') return page;
  const name = 'Interior Design Direction';
  replaceText(page, 'Full-Service Furnishing', name);
  replaceText(page, copy.Services['Full-Service Furnishing / Promise'], copy.Services['Interior Design Direction / Promise']);
  replaceText(page, copy.Services['Full-Service Furnishing / Who it is for'], copy.Services['Interior Design Direction / Who it is for']);
  const included = find(section(page, 'What is included'), 'ul');
  const item = children(included)[0];
  included.children = serviceContent.direction.included.map((value) => { const n = structuredClone(item); setText(n, value); return n; });
  const process = section(page, 'How a furnishing project works');
  replaceText(process, 'How a furnishing project works', copy['About page']['How the studio works and what it believes / Heading']);
  replaceText(process, '12 to 20 weeks', '5 to 8 weeks');
  replaceText(process, 'Typical time from signed proposal to handover. Made-to-order lead times set most of that.', 'Most projects take 5 to 8 weeks. We include one follow-up call within 60 days of delivery.');
  const list = find(process, 'ol');
  const steps = children(list);
  list.children = serviceContent.direction.process.map((step, index) => {
    const n = structuredClone(steps[index]);
    setText(find(n, 'span'), String(index + 1));
    setText(find(n, 'h3'), step.title);
    const body = find(n, 'div');
    const p = find(body, 'p');
    setText(p, step.text);
    body.children = [find(body, 'h3'), p];
    return n;
  });
  const fees = section(page, 'How fees work');
  replaceText(fees, '₱1,500,000', '₱2,500');
  replaceText(fees, 'Design fee included.', 'Per sqm, minimum ₱150,000.');
  replaceText(fees, 'The design fee is fixed and quoted per project, based on floor area and scope. The furnishing budget is separate. You pay listed prices for the pieces, and we add no hidden markup on shop items.', 'For a 100 sqm home, the fee is ₱250,000.');
  replaceText(fees, 'at design approval', 'before delivery');
  const budget = elements(fees).find((n) => children(n).some((child) => child.tag === 'h3' && text(child) === 'Furnishing budget'))!;
  for (const n of elements(fees)) n.children = n.children.filter((child) => child !== budget);
  const recent = section(page, 'Recent projects');
  const cards = elements(recent).filter((n) => n.tag === 'a' && String(n.attrs.href).startsWith('/projects/'));
  bindProjectCard(cards[0], projects[0], projects[4], screen);
  for (const n of elements(recent)) n.children = n.children.filter((child) => !cards.slice(1).includes(child as ReferenceNode));
  const faq = section(page, 'Questions we are often asked');
  const entries = serviceContent.direction.faq;
  const details = elements(faq).filter((n) => n.tag === 'details');
  details.forEach((n, index) => {
    const { question, answer } = entries[index];
    setText(elements(n).find((child) => hasClass(child, 'fq-q'))!, question);
    setText(find(n, 'p'), answer);
  });
  const closing = children(page).at(-1)!;
  replaceText(closing, copy.Home['Closing text'], 'A discovery call takes 30 minutes and costs nothing. From ₱2,500 per square meter. Minimum fee ₱150,000.');
  // Use the approved Hardin painting for this service's hero, and the approved
  // drafting-table painting for the included scope. No new visual is invented.
  const hardin = projectImage(projects[4], screen);
  const hero = children(page)[0];
  const heroImage = elements(hero).find((n) => n.attrs.role === 'img')!;
  styles(heroImage).background = hardin.background;
  heroImage.attrs['aria-label'] = hardin.label;
  const includedImage = elements(section(page, 'What is included')).find((n) => n.attrs.role === 'img')!;
  const studio = template('studio', screen);
  const plans = elements(studio).find((n) => String(n.attrs['aria-label'] ?? '').includes('plans and a pencil'))!;
  const plansPaint = elements(plans).find((n) => styles(n).background);
  const targetPaint = elements(includedImage).find((n) => hasClass(n, 'par')) ?? includedImage;
  styles(targetPaint).background = styles(plansPaint!).background;
  includedImage.attrs['aria-label'] = plans.attrs['aria-label'];
  for (const n of elements(includedImage).filter((n) => hasClass(n, 'ph'))) setText(n, 'Placeholder · Plans and a pencil on a warm wood table, side light');
  return page;
}

// Preserve catalog variants used by a project, including their listed prices.
export function projectProducts(project: Project): Product[] {
  return project.shopTheProject.map((name) => {
    const baseName = name.replace(/ \([^)]*\)$/, '');
    const product = products.find((p) => p.name === baseName);
    if (!product) throw new Error(`Missing catalog product: ${name}`);
    const value = structuredClone(product);
    if (name.includes('(two-seat)')) value.price = product.variants.find((v) => v.name === 'Size')!.choices.find((c) => c.label.startsWith('Two-seat'))!.price!;
    if (name.includes('(260 cm)')) value.price = product.variants.find((v) => v.name === 'Size')!.choices.find((c) => c.label.startsWith('260'))!.price!;
    if (name.includes('(170 × 240)')) value.price = product.variants.find((v) => v.name === 'Size')!.choices.find((c) => c.label.startsWith('170'))!.price!;
    value.name = name;
    return value;
  });
}
export function projectTemplate(project: Project, screen: Screen): ReferenceNode {
  const page = template('project', screen);
  const sections = children(page);
  setText(find(sections[0], 'h1'), project.name);
  const facts: Record<string, string> = { Location: project.location, Type: project.type, 'Floor area': project.floorArea, Service: project.service, Year: String(project.year), Scope: project.scope };
  for (const row of children(find(page, 'dl'))) {
    const value = facts[text(find(row, 'dt'))];
    const dd = find(row, 'dd');
    if (text(find(row, 'dt')) === 'Service') {
      const link = find(dd, 'a');
      link.attrs.href = serviceHref(project.service);
      link.children[0] = project.service + ' ';
    } else setText(dd, value);
  }
  setText(find(section(page, 'The brief'), 'p'), project.brief);
  const paragraphs = project.approachExpanded.split('\n\n');
  setText(find(section(page, 'The approach'), 'p'), paragraphs[0]);
  setText(elements(page).find((n) => hasClass(n, 'gw-t'))!, paragraphs[1]);
  const figures = elements(section(page, 'Gallery')).filter((n) => n.tag === 'figure');
  figures.forEach((figure, index) => {
    const caption = find(figure, 'figcaption');
    const label = find(caption, 'span');
    const value = project.galleryCaptions[index];
    const split = value.indexOf('.');
    setText(label, value.slice(0, split + 1));
    caption.children = [label, value.slice(split + 1)];
    const note = elements(figure).find((n) => hasClass(n, 'ph'));
    if (note) setText(note, `Placeholder · ${value.slice(0, split)}`);
  });
  // The supplied Lilim artboard is unchanged. Other project photography remains
  // clearly labeled, using that project's approved index painting as a stand-in.
  if (project.slug !== 'lilim-house') {
    const paint = projectImage(project, screen);
    for (const target of [sections[0], section(page, 'The approach'), elements(page).find((n) => hasClass(n, 'gw-track'))!]) applyProjectImage(target, project, screen);
    for (const figure of figures) {
      const image = children(figure)[0];
      styles(children(image)[0]).background = paint.background;
    }
  }
  const palette = find(section(page, 'Material palette'), 'ul');
  const originals = children(palette);
  const materialNames = project.materialPalette.split(', ');
  palette.children = materialNames.map((material, index) => {
    const known = originals.find((n) => text(children(n).at(-1)!).toLowerCase() === material.toLowerCase());
    const n = structuredClone(known ?? originals[index]);
    const label = material[0].toUpperCase() + material.slice(1);
    setText(children(n).at(-1)!, label);
    const image = elements(n).find((n) => n.attrs.role === 'img')!;
    image.attrs['aria-label'] = label + ' swatch';
    const note = elements(image).find((n) => hasClass(n, 'ph'));
    if (note) setText(note, `Placeholder · ${label} swatch`);
    if (!known) styles(children(image)[0]).background = 'var(--color-surface)';
    return n;
  });
  const shop = section(page, 'Shop the project');
  const catalog = projectProducts(project);
  const list = find(shop, 'ol');
  const productItems = children(list);
  list.children = catalog.map((p, index) => {
    const li = structuredClone(productItems[index]);
    li.children = [{ tag: 'ProductCard', attrs: { productSlug: p.slug, productName: p.name, price: p.price, number: index + 1 }, children: [] }];
    return li;
  });
  const pins = elements(shop).filter((n) => hasClass(n, 'pin'));
  for (const n of elements(shop)) n.children = n.children.filter((child) => !pins.slice(catalog.length).includes(child as ReferenceNode));
  pins.slice(0, catalog.length).forEach((pin, index) => {
    const p = catalog[index];
    pin.attrs.href = `/shop/products/${p.slug}`;
    if (project.slug !== 'lilim-house') pin.attrs['aria-label'] = `${index + 1}, ${p.name}, ${p.maker}, ₱${p.price.toLocaleString('en-PH')}, ${p.availabilityText}`;
    // The original pin includes styled tooltip fields. Keep those measurements.
    const tip = elements(pin).find((n) => hasClass(n, 'tip'));
    if (tip && project.slug !== 'lilim-house') {
      const fields = children(tip);
      setText(fields[0], p.name);
      setText(fields[1], p.maker);
      setText(fields[2], `₱${p.price.toLocaleString('en-PH')}`);
      setText(fields[3], p.leadTimeWeeks ? `Made to order · ${p.leadTimeWeeks} weeks` : 'In stock');
    }
  });
  if (project.slug !== 'lilim-house') {
    const room = elements(shop).find((n) => n.attrs.role === 'img')!;
    room.attrs['aria-label'] = `${project.name}. ${project.imageNotes}`;
    const first = children(room)[0];
    first.attrs.style = { position: 'absolute', inset: 0, background: projectImage(project, screen).background };
    room.children = [first];
  }
  const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
  bindProjectCard(section(page, 'Next project'), projects[1], next, screen);
  return page;
}

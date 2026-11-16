// Maps placeholder slots (by their accessible label) to approved photographs.
// Slots with no fitting image are not listed here and stay as placeholders.
import { products } from './products';
import { projects } from './projects';
import { projectPages } from './project-pages';
import productManifest from './product-images.json';

export interface SlotPhoto { name: string; alt: string; position?: string }

const productNames = new Set(Object.keys(productManifest));
const lcFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

// The studio shot for a product: <first word of slug>-studio, with Silong's approved front frame.
export function productStudioName(slug: string): string | undefined {
  if (slug === 'silong-sofa') return 'silong-studio-front';
  const name = `${slug.split('-')[0]}-studio`;
  return productNames.has(name) ? name : undefined;
}
// Alt text from the catalog: the product name and its one-line description.
export function productAlt(product: { name: string; description: string }) {
  return `${product.name}, ${lcFirst(product.description.replace(/\.$/, ''))}`;
}

const room = (name: string, alt: string, position?: string): SlotPhoto => ({ name, alt, position });
const roomSlots: Record<string, SlotPhoto> = {
  // Silong gallery
  'Silong Sofa, front, oat linen on a mahogany frame': room('silong-studio-front', 'Silong Sofa, front view, oat linen on a mahogany frame'),
  'Silong Sofa, three-quarter view': room('silong-studio-three-quarter', 'Silong Sofa, three-quarter view on a pale warm backdrop'),
  'Silong Sofa, mahogany leg and linen cushion edge': room('silong-detail', 'Silong Sofa, close view of the mahogany arm and the linen seat cushion'),
  'Silong Sofa in the Lilim House living room, low beside the open terrace doors': room('lilim-hero-B-layered', 'Silong Sofa in the Lilim House living room, low beside the open terrace doors'),
  'Oat linen weave in raking light': room('silong-fabric', 'Oat linen weave in soft side light'),
  // Rooms and details
  'Cane weave in raking window light': room('lilim-material-detail', 'Cane weave on a lounge chair beside a honed marble edge, in soft window light'),
  'Oat linen draped in shade': room('silong-fabric', 'Oat linen in soft shade, a single edge of light'),
  'Terrace bench under deep eaves with greenery behind': room('lilim-entry', 'Lilim House entry: a wood bench by the open front door, greenery beyond'),
  'Quiet room detail: linen curtain in soft daylight, a low stool and a stoneware vase': room('tanaw-dressing-corner', 'Tanaw Residence dressing corner: a sheer linen curtain, a floor mirror and a wood chair in soft daylight'),
  'Quiet room detail: plans and a pencil on a warm wood drafting table in side light': room('hardin-book', 'A design book open to a floor plan, with paint swatches and a pencil on a warm wood table'),
  'Low sofa, stone coffee table and stoneware lamp in soft shaded daylight': room('lilim-stone-table', 'Lilim House living room: a low sofa, a stone coffee table and a stoneware lamp in soft shaded daylight'),
  'Low linen sofa beside a lit lamp, a stoneware vessel and a framed print at evening': room('lilim-stone-table', 'A low sofa beside a lit lamp, with a stone table and a framed print in evening light'),
  'Living room in soft shaded daylight: a low linen sofa, a stone coffee table with a stoneware vessel, a brass lamp and a wool rug': room('lilim-shop-room', 'Lilim House living room in soft shaded daylight: a low sofa, a stone coffee table and a cane lounge chair'),
  'Wood dining table with cane chairs in morning light through a linen curtain': room('lilim-dining-morning', 'Lilim House dining table with cane chairs in morning light'),
  'Living room with the Silong Sofa and Kapis Pendant in afternoon light': room('lilim-shop-room', 'Lilim House living room in afternoon light: a low sofa, a stone table and a woven pendant over the dining table'),
  'A desk by a window with a notebook and a pen in soft daylight': room('hardin-book', 'A design notebook open on a wood desk, with a pencil and a cup of coffee in soft daylight'),
  'A finished living room in warm evening light': room('tanaw-hero', 'Tanaw Residence living room at dusk, warm lamps lit and the city beyond the glass'),
  'A calm studio room with a long table and a pendant in soft daylight': room('hardin-dining', 'A calm dining room with a long wood table and a pendant in soft daylight'),
  'Material samples on a long table in the Makati showroom': room('hardin-moodboard', 'Material samples laid out together: cane, wool, linen, terracotta and stone'),
  'Lilim House living room in shaded daylight, low sofa, deep eaves, greenery through wide openings': room('lilim-hero-B-layered', 'Lilim House living room in shaded daylight: a low sofa, deep eaves and greenery through wide openings'),
  'Lilim House living room in shaded daylight, low mahogany and linen sofa, deep eaves, greenery through wide openings': room('lilim-shop-room', 'Lilim House living room in shaded daylight: a low sofa, a stone table and wide openings to the greenery'),
  // The closing call-to-action panel, so it never repeats the terrace card on the same page.
  'Lilim House terrace bench in shaded daylight with greenery behind': room('lilim-exterior-dusk', 'Lilim House at dusk, warm lamps lit inside and the garden in front'),
  // Interior Design Direction hero: the planned room, a deliverable of that service.
  'Hardin Apartment planned living room render': room('hardin-render', 'Hardin Apartment, a planned living room render: a two-seat sofa, a wool rug and a lamp by the window'),
  // Woven Forms collection card
  'Close crop of cane weave on a rattan lounge chair': room('lilim-material-detail', 'Cane weave on a rattan lounge chair beside a honed marble edge'),
};
// Project cards use each project's card photograph.
const cardLabels: Record<string, string> = {
  'lilim-house': 'Lilim House terrace with a bench in shaded daylight|Lilim House terrace with a bench in shaded daylight, greenery behind',
  'tanaw-residence': 'Tanaw Residence city skyline at dusk through full-height windows, warm lamps inside|Tanaw Residence skyline at dusk through full-height windows',
  'dalampasigan-inn': 'Dalampasigan Inn bright coastal guest room in daylight, pale limewash walls, reed mat, open window|Dalampasigan Inn bright coastal guest room, pale limewash walls, reed mat, open window',
  'pahinga-villas': 'Pahinga Villas bedroom among coconut palms, low bed with white linen, doors open to the grove|Pahinga Villas bedroom with a low bed in white linen and open sliding doors to the coconut grove',
  'hardin-apartment': 'Hardin Apartment living room with a clay linen sofa, a rug and a warm lamp in soft daylight|Hardin Apartment living room with a two-seat sofa, a lamp and a balcony garden|Hardin Apartment living room with plants and a small balcony garden',
};
for (const [slug, labels] of Object.entries(cardLabels)) {
  const project = projects.find((p) => p.slug === slug);
  if (!project || !projectPages[slug]) continue;
  for (const label of labels.split('|')) roomSlots[label] = room(projectPages[slug].card, `${project.name}, ${project.location}`);
}

const byLength = [...products].sort((a, b) => b.name.length - a.name.length);
export function slotPhoto(label: string): SlotPhoto | undefined {
  if (roomSlots[label]) return roomSlots[label];
  const product = byLength.find((p) => label === p.name || label.startsWith(`${p.name},`) || label.startsWith(`${p.name} on a pale`));
  const name = product && productStudioName(product.slug);
  return product && name ? room(name, productAlt(product)) : undefined;
}

// The photograph for a placeholder node: an explicit data-photo, else the slot map. Nodes that already hold an img keep it.
export function nodePhoto(attrs: Record<string, unknown>, hasImg: boolean): SlotPhoto | undefined {
  if (hasImg || attrs.role !== 'img') return undefined;
  const label = String(attrs['aria-label'] ?? '');
  if (attrs['data-photo']) return { name: String(attrs['data-photo']), alt: label };
  return slotPhoto(label);
}

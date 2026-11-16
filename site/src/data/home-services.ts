import { formatPrice } from '@/lib/formatPrice';

// "Two ways to work with us". Names and promises: docs/content/copy.md (Services).
// Prices, scope and durations: docs/concept/services.md. Starting prices are set here, in one place.
export const servicesHeading = 'Two ways to work with us';
export const serviceRows = [
  { key: 'get', label: 'What you get' },
  { key: 'who', label: 'Who it is for' },
  { key: 'how', label: 'How long' },
  { key: 'price', label: 'Starts at' },
] as const;
export type ServiceRowKey = (typeof serviceRows)[number]['key'];
export interface ServiceOffer {
  slug: string; name: string; promise: string; href: string;
  photo: string; alt: string; position: string;
  rows: Record<ServiceRowKey, string[]>;
}
export const serviceOffers: ServiceOffer[] = [
  {
    slug: 'full-service-furnishing', name: 'Full-Service Furnishing', promise: 'We design, source, deliver, and style every room.',
    href: '/studio/full-service-furnishing', photo: 'lilim-dining-morning', position: '50% 72%',
    alt: 'A dark oak dining table in morning light with a bowl of limes, woven-seat chairs and a capiz pendant, the room opening to a long hall beyond',
    rows: {
      get: ['Furniture, lighting, rugs, and art', 'Delivery, installation, and styling'],
      who: ['A finished, empty home, condo, or small hotel'],
      how: ['12 to 20 weeks'],
      price: [`From ${formatPrice(500000)}, design fee included`],
    },
  },
  {
    slug: 'interior-design-direction', name: 'Interior Design Direction', promise: 'We design the space. You bring it to life.',
    href: '/studio/interior-design-direction', photo: 'hardin-book', position: '50% 50%',
    alt: 'A design book open on a wood table beside fabric swatches, a paint card, a tape measure and a pencil, showing a room render and a floor plan',
    rows: {
      get: ['Layouts, moodboards, and renders', 'Specifications and a sourcing list'],
      who: ['You buy and install yourself, or over time'],
      how: ['5 to 8 weeks'],
      price: [`From ${formatPrice(2500)} per sqm, minimum ${formatPrice(150000)}`],
    },
  },
];

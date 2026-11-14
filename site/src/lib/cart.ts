import { products } from '@/data/products';
export interface CartLine { variantId: string; productSlug: string; name: string; options: Record<string, string>; price: number; leadTimeWeeks: number | null; quantity: number; category?: string; maker?: string; oneOfAKind?: boolean; image?: string }
export const demoNotice = 'Kanlungan is a fictional brand. This is a demonstration. No payment is taken and no order is placed.';
export const mixedNote = 'Your order has in-stock and made-to-order items. In-stock items ship first. Made-to-order items follow when they are ready.';
export const cartKey = 'kanlungan-cart-v1';
export function validLines(value: unknown): value is CartLine[] {
  return Array.isArray(value) && value.every((l) => l && typeof l.variantId === 'string' && typeof l.productSlug === 'string' && typeof l.name === 'string' && Number.isFinite(l.price) && l.price >= 0 && Number.isInteger(l.quantity) && l.quantity > 0 && l.options && typeof l.options === 'object' && Object.values(l.options).every((v) => typeof v === 'string') && (l.leadTimeWeeks === null || (Number.isFinite(l.leadTimeWeeks) && l.leadTimeWeeks > 0)) && ['category', 'maker', 'image'].every((k) => l[k] === undefined || typeof l[k] === 'string') && (l.oneOfAKind === undefined || typeof l.oneOfAKind === 'boolean'));
}
export function furniture(line: CartLine) { return ['Seating', 'Tables', 'Beds', 'Storage'].includes(line.category ?? products.find((p) => p.slug === line.productSlug)?.category ?? ''); }
export function unique(line: CartLine) { return line.oneOfAKind || products.find((p) => p.slug === line.productSlug)?.availability === 'one-of-a-kind'; }
export function subtotal(lines: CartLine[]) { return lines.reduce((n, l) => n + l.price * l.quantity, 0); }
export function mixed(lines: CartLine[]) { return lines.some((l) => l.leadTimeWeeks !== null) && lines.some((l) => l.leadTimeWeeks === null); }
export function leadTime(line: CartLine) { return line.leadTimeWeeks !== null ? `Made to order. Ready in ${line.leadTimeWeeks} weeks.` : 'In stock. Ships in 3 to 7 business days.'; }
// Explicit demonstration rates, not freight quotes. Metro Manila and courier follow shop.md.
export const regionRates: Record<string, number> = {
  'Metro Manila': 2500, 'Cordillera Administrative Region': 4500, 'Ilocos Region': 4500, 'Cagayan Valley': 4500, 'Central Luzon': 3500, 'Calabarzon': 3500, 'Mimaropa': 5500, 'Bicol Region': 4500, 'Western Visayas': 6500, 'Negros Island Region': 6500, 'Central Visayas': 6500, 'Eastern Visayas': 6500, 'Zamboanga Peninsula': 8500, 'Northern Mindanao': 8500, 'Davao Region': 8500, 'Soccsksargen': 8500, 'Caraga': 8500, 'Bangsamoro Autonomous Region in Muslim Mindanao': 8500,
};
export function delivery(lines: CartLine[], region = 'Metro Manila') {
  const large = subtotal(lines.filter(furniture)); const small = subtotal(lines.filter((l) => !furniture(l)));
  const whiteGlove = large ? region === 'Metro Manila' && large > 50000 ? 0 : regionRates[region] ?? 2500 : 0;
  const courier = small && small <= 10000 ? 350 : 0;
  return { whiteGlove, courier, total: whiteGlove + courier };
}
export interface DemoOrder { number: string; lines: CartLine[]; delivery: number; region: string; payment: string; address: string[] }

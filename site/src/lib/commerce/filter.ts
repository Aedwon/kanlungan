import type { CommerceProduct } from './types';
import { newPieceSlugs } from '@/data/products';
export { newPieceSlugs } from '@/data/products';
export const priceRanges = ['Under ₱25,000', '₱25,000 to ₱100,000', 'Above ₱100,000'];
export function materialMatches(p: CommerceProduct, value: string) {
  return value === 'Cane and rattan' ? /cane|rattan/i.test(p.materials) : p.materials.toLowerCase().includes(value.toLowerCase());
}
export function priceMatches(price: number, value: string) {
  return value === priceRanges[0] ? price < 25000 : value === priceRanges[1] ? price >= 25000 && price <= 100000 : value === priceRanges[2] ? price > 100000 : false;
}
export function filterProducts(products: CommerceProduct[], params: URLSearchParams) {
  const selected = (name: string, match: (value: string, product: CommerceProduct) => boolean, p: CommerceProduct) => !params.getAll(name).length || params.getAll(name).some((value) => match(value, p));
  const result = products.filter((p) =>
    (!params.get('subcategory') || params.get('subcategory') === p.subcategory) &&
    selected('maker', (v, p) => v === p.maker, p) && selected('material', (v, p) => materialMatches(p, v), p) &&
    selected('availability', (v, p) => v === p.availability || (v === 'in-stock' && p.availability === 'one-of-a-kind'), p) &&
    selected('price', (v, p) => priceMatches(p.price, v), p) &&
    (!params.get('min') || p.price >= Number(params.get('min'))) && (!params.get('max') || p.price <= Number(params.get('max'))));
  const sort = params.get('sort');
  if (sort === 'price' || sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sort === 'newest') result.sort((a, b) => {
    if (a.createdAt && b.createdAt) return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    const rank = (p: CommerceProduct) => { const i = newPieceSlugs.indexOf(p.slug); return i < 0 ? newPieceSlugs.length : i; };
    return rank(a) - rank(b);
  });
  return result;
}

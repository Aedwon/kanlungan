import type { Product, Availability } from '@/data/products';
import type { Collection } from '@/data/collections';
import type { Maker } from '@/data/makers';
export type { Collection, Maker, Availability };
export interface Variant {
  id: string;
  options: Record<string, string>;
  price: number;
  leadTimeWeeks: number | null;
  available: boolean;
}
export interface CommerceProduct extends Product {
  id: string;
  resolvedVariants: Variant[];
  createdAt: string | null;
  oneOfAKind: boolean;
  images: { url: string; alt: string }[];
}
export interface CommerceProvider {
  getProducts(): Promise<CommerceProduct[]>;
  getProduct(slug: string): Promise<CommerceProduct | undefined>;
  getCollections(): Promise<Collection[]>;
  getCollection(slug: string): Promise<Collection | undefined>;
  getProductsByCategory(category: string): Promise<CommerceProduct[]>;
  getMakers(): Promise<Maker[]>;
  getMaker(slug: string): Promise<Maker | undefined>;
}
export function availabilityLine(product: CommerceProduct, variant?: Variant, compact = false) {
  if (product.availability === 'sold-out' || variant?.available === false) return 'Sold out.';
  if (product.availability === 'made-to-order') return compact
    ? `Made to order · ${variant?.leadTimeWeeks ?? product.leadTimeWeeks} weeks`
    : `Made to order. Ready in ${variant?.leadTimeWeeks ?? product.leadTimeWeeks} weeks.`;
  if (product.oneOfAKind) return compact ? 'In stock · One of a kind' : 'In stock. One of a kind.';
  return compact ? 'In stock' : 'In stock. Ships in 3 to 7 business days.';
}
export function defaultVariant(product: CommerceProduct): Variant {
  return product.resolvedVariants.find((v) => v.price === product.price && v.available)
    ?? product.resolvedVariants.find((v) => v.available) ?? product.resolvedVariants[0];
}

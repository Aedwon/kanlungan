import { products } from '@/data/products';
import { collections } from '@/data/collections';
import { makers } from '@/data/makers';
import { categories } from '@/data/navigation';
import type { CommerceProduct, CommerceProvider, Variant } from './types';
export function localProduct(product: (typeof products)[number]): CommerceProduct {
  const availability = product.slug === 'kiso-stool' ? 'sold-out' : product.availability;
  let variants: Variant[] = [{ id: product.slug, options: {}, price: product.price, leadTimeWeeks: product.leadTimeWeeks, available: availability !== 'sold-out' }];
  for (const option of product.variants) variants = variants.flatMap((variant) => option.choices.map((choice) => ({
    ...variant, options: { ...variant.options, [option.name]: choice.label }, price: choice.price ?? variant.price,
  })));
  variants.forEach((v, i) => { v.id = `local:${product.slug}:${i}`; });
  return { ...product, availability, availabilityText: availability === 'sold-out' ? 'Sold out.' : product.availabilityText, id: `local:${product.slug}`, resolvedVariants: variants, createdAt: null, oneOfAKind: availability === 'one-of-a-kind', images: [] };
}
export const localProvider: CommerceProvider = {
  async getProducts() { return products.map(localProduct); },
  async getProduct(slug) { const p = products.find((p) => p.slug === slug); return p && localProduct(p); },
  async getCollections() { return structuredClone(collections); },
  async getCollection(slug) { return structuredClone(collections.find((c) => c.slug === slug)); },
  async getProductsByCategory(category) {
    const name = categories.find((c) => c.slug === category)?.name ?? category;
    return products.filter((p) => p.category.toLowerCase() === name.toLowerCase()).map(localProduct);
  },
  async getMakers() { return structuredClone(makers); },
  async getMaker(slug) { return structuredClone(makers.find((m) => m.slug === slug)); },
};

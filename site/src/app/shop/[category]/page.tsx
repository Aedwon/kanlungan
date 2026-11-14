import { notFound } from 'next/navigation';
import { categories } from '@/data/navigation';
import { ShopCategoryPage, shopData } from '@/components/shop/ShopPages';
export function generateStaticParams() { return categories.map((c) => ({ category: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) { const { category } = await params; return { title: categories.find((c) => c.slug === category)?.name ?? 'Shop' }; }
export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params; const category = categories.find((c) => c.slug === slug); if (!category) notFound();
  const { products } = await shopData(); return <ShopCategoryPage category={category} products={products.filter((p) => p.category.toLowerCase() === category.name.toLowerCase())} />;
}

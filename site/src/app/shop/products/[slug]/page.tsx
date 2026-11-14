import { notFound } from 'next/navigation';
import { ShopProductPage, shopData } from '@/components/shop/ShopPages';
export async function generateStaticParams() { return (await shopData()).products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: (await shopData()).products.find((p) => p.slug === slug)?.name ?? 'Product' }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const { products, collections } = await shopData(); const product = products.find((p) => p.slug === slug); if (!product) notFound();
  return <ShopProductPage product={product} products={products} collections={collections} />;
}

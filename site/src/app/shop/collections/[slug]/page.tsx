import { notFound } from 'next/navigation';
import { CollectionPage, shopData } from '@/components/shop/ShopPages';
export async function generateStaticParams() { return (await shopData()).collections.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: (await shopData()).collections.find((c) => c.slug === slug)?.name ?? 'Collection' }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const { collections, products } = await shopData(); const collection = collections.find((c) => c.slug === slug); if (!collection) notFound();
  return <CollectionPage collection={collection} products={products} />;
}

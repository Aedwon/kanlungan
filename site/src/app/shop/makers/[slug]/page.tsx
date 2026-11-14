import { notFound } from 'next/navigation';
import { MakerPage, shopData } from '@/components/shop/ShopPages';
export async function generateStaticParams() { return (await shopData()).makers.map((m) => ({ slug: m.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: (await shopData()).makers.find((m) => m.slug === slug)?.name ?? 'Maker' }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const { makers, products } = await shopData(); const maker = makers.find((m) => m.slug === slug); if (!maker) notFound();
  return <MakerPage maker={maker} products={products} />;
}

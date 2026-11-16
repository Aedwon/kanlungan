import { notFound } from 'next/navigation';
import { HelpPage, helpPage, helpSlugs } from '@/components/HelpPage';
export function generateStaticParams() { return helpSlugs('help').map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: helpPage('help', slug)?.title ?? 'Help' }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!helpPage('help', slug)) notFound();
  return <HelpPage area="help" slug={slug} />;
}

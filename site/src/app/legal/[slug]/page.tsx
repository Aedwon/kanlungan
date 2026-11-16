import { notFound } from 'next/navigation';
import { HelpPage, helpPage, helpSlugs } from '@/components/HelpPage';
export function generateStaticParams() { return helpSlugs('legal').map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return { title: helpPage('legal', slug)?.title ?? 'Legal' }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!helpPage('legal', slug)) notFound();
  return <HelpPage area="legal" slug={slug} />;
}

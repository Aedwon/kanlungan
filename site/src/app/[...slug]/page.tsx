import { notFound } from 'next/navigation';
import { routes } from '@/data/routes';
export function generateStaticParams() { return Object.keys(routes).filter((path) => !/^\/(studio|projects|about)(\/|$)/.test(path)).map((path) => ({ slug: path.slice(1).split('/') })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return { title: routes['/' + slug.join('/')] ?? 'Kanlungan' };
}
export default async function StubPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const title = routes['/' + slug.join('/')];
  if (!title) notFound();
  return <div className="stub"><h1>{title}</h1></div>;
}

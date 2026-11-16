import { Suspense } from 'react';
import { SearchView } from '@/components/SearchView';
export const metadata = { title: 'Search' };
async function Results({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  return <SearchView query={Array.isArray(q) ? q[0] ?? '' : q ?? ''} />;
}
export default function Page({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  return <Suspense fallback={<SearchView query="" />}><Results searchParams={searchParams} /></Suspense>;
}

import { NextResponse, type NextRequest } from 'next/server';
import { products } from '@/data/products';

// Streamed pages answer 200 even after notFound(), so unknown product slugs get a real 404 status here.
const known = new Set(products.map((p) => p.slug));
export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.replace(/^\/shop\/products\//, '').replace(/\/$/, '');
  if (!known.has(slug)) return NextResponse.rewrite(new URL('/shop/products/not-found', request.url), { status: 404 });
  return NextResponse.next();
}
export const config = { matcher: '/shop/products/:slug' };

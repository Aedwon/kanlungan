import { NextResponse } from 'next/server';
import { shopifyActive, storefrontCart } from '@/lib/commerce/storefrontCart';
export async function POST(request: Request) {
  if (request.headers.get('origin') && request.headers.get('origin') !== new URL(request.url).origin) return NextResponse.json({ error: 'Invalid origin.' }, { status: 403 });
  if (!shopifyActive()) return NextResponse.json({ provider: 'local' });
  try {
    const input = await request.json();
    if (!['load', 'add', 'set', 'clear'].includes(input.action) || (input.id && (typeof input.id !== 'string' || input.id.length > 500)) || (!['load', 'clear'].includes(input.action) && (typeof input.variantId !== 'string' || !input.variantId.startsWith('gid://shopify/ProductVariant/') || !Number.isInteger(input.quantity) || input.quantity < 0 || input.quantity > 999))) return NextResponse.json({ error: 'Invalid cart request.' }, { status: 400 });
    return NextResponse.json({ provider: 'shopify', ...await storefrontCart(input) });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'The cart could not be updated.' }, { status: 502 }); }
}

'use client';
import { useCart } from '@/components/CartProvider';
import { bindCart, flowTemplate, type Screen } from '@/lib/flowTemplates';
import { FlowReference } from './FlowReference';
export function CartPage() {
  const { lines, ready, busy, error } = useCart();
  return <div aria-busy={!ready || busy}>{error && <p role="alert" className="commerce-error">{error}</p>}{(['desktop', 'mobile'] as Screen[]).map((screen) => <FlowReference key={screen} node={lines.length ? bindCart(flowTemplate('cart', screen), lines) : flowTemplate('cart-empty', screen)} />)}</div>;
}

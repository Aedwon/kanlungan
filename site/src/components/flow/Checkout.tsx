'use client';
import { useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/CartProvider';
import { delivery, furniture, regionRates, type DemoOrder } from '@/lib/cart';
import { formatPrice } from '@/lib/formatPrice';
import { validateCheckout, type Values } from '@/lib/formValidation';
import { bindReview, bindSummary, children, confirmationTemplate, find, flowTemplate, leaf, nodes, remove, setText, style, type Screen } from '@/lib/flowTemplates';
import { FlowReference, focusErrors } from './FlowReference';
const initial = { region: 'Metro Manila', pay: 'card', furniture: 'White-glove delivery', small: 'Courier delivery' };
const cardNames = ['cardnumber', 'cardname', 'cardexp', 'cardcvc'];
export function Checkout() {
  const cart = useCart(); const router = useRouter(); const submitting = useRef(false);
  const [values, setValues] = useState<Values>(initial); const [errors, setErrors] = useState<Values>({});
  const fees = delivery(cart.lines, values.region);
  function change(name: string, value: string) {
    setValues((v) => ({ ...v, ...(name === 'pay' ? Object.fromEntries(cardNames.map((n) => [n, ''])) : {}), [name]: value }));
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!cart.ready || cart.busy || submitting.current) return;
    const next = validateCheckout(values); if (!Object.hasOwn(regionRates, values.region)) next.region = 'Choose a delivery region.';
    setErrors(next);
    setValues((v) => ({ ...v, ...Object.fromEntries(cardNames.map((name) => [name, ''])) }));
    if (Object.keys(next).length) { focusErrors(event.currentTarget); return; }
    submitting.current = true;
    const digits = new Uint32Array(1); crypto.getRandomValues(digits);
    const order: DemoOrder = { number: `KL-2026-${String(digits[0] % 10000).padStart(4, '0')}`, lines: structuredClone(cart.lines), delivery: fees.total, region: values.region, payment: values.pay === 'bank' ? 'Bank transfer' : values.pay === 'ewallet' ? 'E-wallet' : 'Card', address: [values.fullname, values.address, `${values.barangay}, ${values.city}`, `${values.region} ${values.postal}`] };
    if (!await cart.clear()) { submitting.current = false; return; }
    cart.saveOrder(order); setValues(initial); router.push('/checkout/confirmation');
  }
  if (!cart.lines.length) return <>{(['desktop', 'mobile'] as Screen[]).map((screen) => <FlowReference key={screen} node={flowTemplate('cart-empty', screen)} />)}</>;
  return <>{(['desktop', 'mobile'] as Screen[]).map((screen) => {
    const root = flowTemplate('checkout', screen);
    const review = nodes(root).find((n) => n.tag === 'section' && n.attrs['aria-labelledby'] === `step-5-${screen}`)!;
    bindReview(review, cart.lines);
    const summary = screen === 'desktop' ? find(root, 'aside') : find(root, 'details'); bindSummary(summary, cart.lines, fees.total);
    for (const n of nodes(root)) if (n.tag === 'label') { delete style(n).outline; delete style(n).outlineOffset; }
    const region = nodes(root).find((n) => n.tag === 'select' && n.attrs.name === 'region')!;
    region.children = Object.keys(regionRates).map((region) => ({ tag: 'option', attrs: { value: region }, children: [region] }));
    const methods = nodes(root).find((n) => n.tag === 'section' && n.attrs['aria-labelledby'] === `step-3-${screen}`)!;
    const groups = nodes(methods).filter((n) => n.tag === 'fieldset');
    groups.forEach((group, i) => {
      const lines = cart.lines.filter((l) => i === 0 ? furniture(l) : !furniture(l));
      if (!lines.length) { remove(methods, group); return; }
      const names = leaf(group, i ? 'Kapis Pendant, Hablon Cushion' : 'Silong Sofa, Hain Dining Chair'); if (names) setText(names, lines.map((l) => l.name).join(', '));
      setText(leaf(group, 'Free')!, (i ? fees.courier : fees.whiteGlove) ? formatPrice(i ? fees.courier : fees.whiteGlove) : 'Free');
    });
    if (cart.lines.some(furniture) && values.region !== 'Metro Manila') methods.children.push({ tag: 'RegionRates', attrs: { region: values.region }, children: [] });
    const payment = nodes(root).find((n) => n.tag === 'section' && n.attrs['aria-labelledby'] === `step-4-${screen}`)!;
    const cardFields = nodes(payment).find((n) => children(n).some((c) => nodes(c).some((k) => k.tag === 'input' && k.attrs.name === 'cardnumber')) && style(n).display === 'grid');
    if (values.pay !== 'card' && cardFields) remove(payment, cardFields);
    // The artboard depicts completed sample steps. Initial empty forms show neutral markers.
    for (const section of nodes(root).filter((n) => n.tag === 'section')) {
      const header = children(section)[0]; const marker = header ? children(header)[0] : undefined;
      if (marker?.attrs['aria-label'] && String(marker.attrs['aria-label']).includes('Step')) { const number = String(marker.attrs['aria-label']).match(/\d/)?.[0] ?? ''; marker.children = [number]; delete marker.attrs.role; delete marker.attrs['aria-label']; style(marker).background = undefined; style(marker).color = '#6A584A'; style(marker).border = '1px solid #6A584A'; }
    }
    return <FlowReference key={screen} node={root} screen={`checkout-${screen}`} form={{ values, errors, change, submit, busy: !cart.ready || cart.busy }} />;
  })}</>;
}
export function Confirmation() {
  const { order, ready } = useCart();
  if (!order) return <div className="flow-page contact-confirmation" aria-busy={!ready}><h1>Your cart is empty.</h1><Link className="lnk" href="/shop">Continue shopping →</Link></div>;
  return <>{(['desktop', 'mobile'] as Screen[]).map((screen) => <FlowReference key={screen} node={confirmationTemplate(order, screen)} />)}</>;
}

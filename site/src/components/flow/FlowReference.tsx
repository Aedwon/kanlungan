'use client';
import { createElement, type ReactNode, type FormEvent } from 'react';
import Link from 'next/link';
import { useCart } from '@/components/CartProvider';
import { regionRates, unique } from '@/lib/cart';
import { formatPrice } from '@/lib/formatPrice';
import type { Values } from '@/lib/formValidation';
import { children, flowTemplate, nodes, setText, type ReferenceNode } from '@/lib/flowTemplates';
export interface FormState { values: Values; errors: Values; change: (name: string, value: string) => void; submit: (event: FormEvent<HTMLFormElement>) => void; busy?: boolean }
export function ErrorSummary({ errors, screen }: { errors: Values; screen: string }) {
  if (!Object.keys(errors).length) return null;
  const source = flowTemplate('booking-error', 'desktop');
  const form = nodes(source).find((n) => n.tag === 'form')!;
  const box = structuredClone(children(form)[0]);
  const heading = nodes(box).find((n) => n.tag === 'h2')!; setText(heading, `${Object.keys(errors).length} fields need your attention.`);
  const list = nodes(box).find((n) => n.tag === 'ul')!; const sample = children(list)[0];
  list.children = Object.entries(errors).map(([name, error]) => { const item = structuredClone(sample); const link = nodes(item).find((n) => n.tag === 'a')!; setText(link, error); link.attrs.href = `#${screen.startsWith('contact-') || screen.startsWith('checkout-') ? name : 'f-' + name}-${screen.replace(/^(checkout|contact)-/, '')}`; return item; });
  box.attrs.className = 'form-error-summary'; box.attrs.role = 'alert'; box.attrs.tabIndex = -1;
  return <FlowReference node={box} />;
}
export function FlowReference({ node, form, screen = '', close }: { node: ReferenceNode | string; form?: FormState; screen?: string; close?: () => void }): ReactNode {
  const cart = useCart();
  if (typeof node === 'string') return node;
  const { tag, attrs } = node;
  if (tag === 'option') return <option {...attrs} value={String(attrs.value ?? node.children.join(''))}>{node.children.join('')}</option>;
  if (tag === 'RegionRates') return <details className="region-rates"><summary>Flat demo delivery rates by region</summary><table><caption>Demo rates for white-glove delivery</caption><tbody>{Object.entries(regionRates).filter(([name]) => name !== 'Metro Manila').map(([name, fee]) => <tr key={name} aria-current={name === attrs.region ? 'true' : undefined}><th scope="row">{name}</th><td>{formatPrice(fee)}</td></tr>)}</tbody></table></details>;
  const content = node.children.map((n, i) => <FlowReference key={i} node={n} form={form} screen={screen} close={close} />);
  if (tag === 'form') return <form {...attrs} action={undefined} noValidate onSubmit={form?.submit}><ErrorSummary errors={form?.errors ?? {}} screen={screen} />{content}{cart.error && screen.startsWith('checkout') && <p role="alert">{cart.error}</p>}</form>;
  if (tag === 'a') return <Link {...attrs} href={String(attrs.href)} onClick={(event) => { if (String(attrs.href).startsWith('#')) { const el = document.getElementById(String(attrs.href).slice(1)); if (el) { event.preventDefault(); if (el.tagName === 'FIELDSET') el.querySelector<HTMLInputElement>('input')?.focus(); else el.focus(); } } else close?.(); }}>{content}</Link>;
  if (tag === 'button') {
    const action = attrs['data-cart-action']; const id = String(attrs['data-variant']); const quantity = Number(attrs['data-quantity']);
    const line = cart.lines.find((l) => l.variantId === id);
    if (action) return <button {...attrs} disabled={cart.busy || (action === 'Increase' && !!line && unique(line)) || (action === 'Decrease' && quantity <= 1)} onClick={() => cart.setQuantity(id, action === 'Remove' ? 0 : quantity + (action === 'Increase' ? 1 : -1))}>{content}</button>;
    if (String(attrs['aria-label']).includes('Close')) return <button {...attrs} onClick={close}>{content}</button>;
    return <button {...attrs} disabled={form?.busy}>{content}</button>;
  }
  if (['input', 'textarea', 'select'].includes(tag) && form) {
    const name = String(attrs.name); const radio = attrs.type === 'radio'; const error = form.errors[name];
    const errorId = `error-${name}-${screen}`;
    const props: Record<string, unknown> = { ...attrs, name: `${name}-${screen}`, 'aria-invalid': !!error, 'aria-describedby': [attrs['aria-describedby'], error ? errorId : ''].filter(Boolean).join(' ') || undefined, onChange: (e: { target: { value: string } }) => form.change(name, e.target.value), ...(radio ? { checked: form.values[name] === attrs.value } : { value: form.values[name] ?? '' }) };
    if (name.startsWith('card')) { props.autoComplete = 'off'; delete props.name; }
    const control = createElement(tag, props, tag === 'select' ? content : undefined);
    return <>{control}{error && !radio && <span id={errorId} className="field-error">{error}</span>}</>;
  }
  if (tag === 'fieldset' && form) {
    const name = String(attrs.id).replace(/^f-/, '').replace(/-(desktop|mobile)$/, ''); const error = form.errors[name];
    return <fieldset {...attrs} aria-invalid={!!error} aria-describedby={[attrs['aria-describedby'], error ? `error-${name}-${screen}` : ''].filter(Boolean).join(' ') || undefined}>{content}{error && <span className="field-error" id={`error-${name}-${screen}`}>{error}</span>}</fieldset>;
  }
  return ['input', 'img', 'hr', 'br', 'col'].includes(tag) ? createElement(tag, attrs) : createElement(tag, attrs, content);
}
export function focusErrors(form: HTMLFormElement) { requestAnimationFrame(() => form.querySelector<HTMLElement>('.form-error-summary')?.focus()); }
export function focusConfirmation() { requestAnimationFrame(() => { const heading = Array.from(document.querySelectorAll<HTMLElement>('.flow-page h1')).find((h) => h.getClientRects().length); heading?.setAttribute('tabindex', '-1'); heading?.focus(); window.scrollTo(0, 0); }); }

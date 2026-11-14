'use client';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { useCart } from '@/components/CartProvider';
import { bindCart, flowTemplate, type Screen } from '@/lib/flowTemplates';
import { FlowReference } from './FlowReference';
export function CartDrawer({ open, onClose, returnFocus }: { open: boolean; onClose: () => void; returnFocus: RefObject<HTMLElement | null> }) {
  const { lines, error, busy } = useCart(); const root = useRef<HTMLDivElement>(null);
  const [present, setPresent] = useState(false);
  const visible = open || present; const closing = !open;
  useEffect(() => {
    if (open) { const frame = requestAnimationFrame(() => setPresent(true)); return () => cancelAnimationFrame(frame); }
    const timer = setTimeout(() => { setPresent(false); }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 200);
    return () => clearTimeout(timer);
  }, [open]);
  useEffect(() => {
    if (!visible) return;
    const restoreFocus = returnFocus.current;
    const previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    const background = document.querySelector<HTMLElement>('.pg'); const previousInert = background?.inert;
    if (background) background.inert = true;
    const focusable = () => Array.from(root.current?.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],input') ?? []).filter((n) => n.getClientRects().length);
    focusable()[0]?.focus();
    const trap = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); }
      if (event.key === 'Tab') { const items = focusable(); const first = items[0]; const last = items.at(-1); if (event.shiftKey && (document.activeElement === first || !root.current?.contains(document.activeElement))) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && (document.activeElement === last || !root.current?.contains(document.activeElement))) { event.preventDefault(); first?.focus(); } }
    };
    const focus = (event: FocusEvent) => { if (!root.current?.contains(event.target as Node)) focusable()[0]?.focus(); };
    document.addEventListener('keydown', trap); document.addEventListener('focusin', focus);
    return () => { document.body.style.overflow = previousOverflow; if (background) background.inert = previousInert ?? false; document.removeEventListener('keydown', trap); document.removeEventListener('focusin', focus); restoreFocus?.focus(); };
  }, [visible, onClose, returnFocus]);
  if (!visible) return null;
  return <div ref={root} className="cart-modal" data-closing={closing} aria-busy={busy}><div className="cart-scrim" onClick={onClose} aria-hidden="true" />{(['desktop', 'mobile'] as Screen[]).map((screen) => <FlowReference key={screen} node={bindCart(flowTemplate('cart-drawer', screen), lines, true)} close={onClose} />)}{error && <p className="cart-error" role="alert">{error}</p>}</div>;
}

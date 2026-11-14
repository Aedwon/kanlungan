'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import type { CommerceProduct, Variant } from '@/lib/commerce/types';
import { formatPrice } from '@/lib/formatPrice';
export interface CartLine { variantId: string; productSlug: string; name: string; options: Record<string, string>; price: number; leadTimeWeeks: number | null; quantity: number }
interface Cart { lines: CartLine[]; count: number; add: (product: CommerceProduct, variant: Variant) => void }
const Context = createContext<Cart | null>(null);
const key = 'kanlungan-cart-v1';
function valid(value: unknown): value is CartLine[] {
  return Array.isArray(value) && value.every((line) => line && typeof line.variantId === 'string' && typeof line.productSlug === 'string' && typeof line.name === 'string' && Number.isFinite(line.price) && line.price >= 0 && Number.isInteger(line.quantity) && line.quantity > 0 && line.options && typeof line.options === 'object' && Object.values(line.options).every((v) => typeof v === 'string') && (line.leadTimeWeeks === null || Number.isFinite(line.leadTimeWeeks)));
}
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [toast, setToast] = useState<CartLine | null>(null);
  const loaded = useRef(false); const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const load = () => { try { const value: unknown = JSON.parse(localStorage.getItem(key) ?? '[]'); if (valid(value)) setLines(value); } catch { /* Storage can be unavailable. The in-memory cart still works. */ } };
    load(); loaded.current = true;
    const sync = (event: StorageEvent) => { if (event.key === key) load(); };
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener('storage', sync); if (timer.current) clearTimeout(timer.current); };
  }, []);
  function add(product: CommerceProduct, variant: Variant) {
    if (!variant.available || product.availability === 'sold-out') return;
    const line: CartLine = { variantId: variant.id, productSlug: product.slug, name: product.name, options: variant.options, price: variant.price, leadTimeWeeks: variant.leadTimeWeeks, quantity: 1 };
    setLines((current) => {
      const existing = current.find((l) => l.variantId === variant.id);
      const next = existing ? current.map((l) => l.variantId === variant.id ? { ...line, quantity: product.oneOfAKind ? 1 : l.quantity + 1 } : l) : [...current, line];
      if (loaded.current) { try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* Keep the current cart when storage is full or disabled. */ } }
      return next;
    });
    setToast(line); if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 6000);
  }
  return <Context.Provider value={{ lines, count: lines.reduce((sum, l) => sum + l.quantity, 0), add }}>{children}
    {toast && <div className="cart-toast" role="status"><svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="#4C5E3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="24" height="24" rx="2" /><path d="M8 14.5l4 4 8-9" /></svg><div className="cart-toast-content"><div className="cart-toast-title">Added to your cart.</div><div className="cart-toast-meta">{toast.name}, {formatPrice(toast.price)}</div><Link className="lnk" href="/cart" onClick={() => setToast(null)}>Your cart <span className="arr" aria-hidden="true">→</span></Link></div><button className="ib" type="button" aria-label="Dismiss" onClick={() => setToast(null)}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button></div>}
  </Context.Provider>;
}
export function useCart() { const value = useContext(Context); if (!value) throw new Error('CartProvider is missing'); return value; }

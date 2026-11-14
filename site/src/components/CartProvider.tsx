'use client';
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import type { CommerceProduct, Variant } from '@/lib/commerce/types';
import { cartKey, unique, validLines, type CartLine, type DemoOrder } from '@/lib/cart';
import { CartDrawer } from './flow/CartDrawer';
export type { CartLine } from '@/lib/cart';
interface Cart { lines: CartLine[]; count: number; ready: boolean; busy: boolean; error: string; open: () => void; close: () => void; add: (product: CommerceProduct, variant: Variant) => void; setQuantity: (id: string, quantity: number) => void; clear: () => Promise<boolean>; order: DemoOrder | null; saveOrder: (order: DemoOrder) => void }
const Context = createContext<Cart | null>(null);
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]); const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false); const [error, setError] = useState('');
  const [opened, setOpened] = useState(false); const [order, setOrder] = useState<DemoOrder | null>(null);
  const linesRef = useRef<CartLine[]>([]); const remote = useRef(false); const id = useRef('');
  const queue = useRef<Promise<void>>(Promise.resolve()); const returnFocus = useRef<HTMLElement | null>(null);
  const persist = useCallback((next: CartLine[]) => { linesRef.current = next; setLines(next); try { localStorage.setItem(cartKey, JSON.stringify(next)); } catch { /* In-memory fallback. */ } }, []);
  const send = useCallback(async (action: string, variantId?: string, quantity?: number) => {
    const response = await fetch('/api/cart', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, id: id.current || undefined, variantId, quantity }) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error ?? 'The cart could not be updated. Please try again.');
    if (result.provider === 'shopify') {
      remote.current = true; id.current = result.id;
      if (!validLines(result.lines)) throw new Error('The cart response could not be read.');
      persist(result.lines);
      try { localStorage.setItem('kanlungan-storefront-cart', result.id); } catch { /* In-memory fallback. */ }
    }
  }, [persist]);
  function enqueue(action: string, variantId: string, quantity: number) {
    setBusy(true); setError('');
    queue.current = queue.current.then(async () => { try { await send(action, variantId, quantity); } catch (e) { setError(e instanceof Error ? e.message : 'The cart could not be updated.'); } }).finally(() => setBusy(false));
  }
  useEffect(() => {
    let active = true;
    async function load() {
      try { const stored = JSON.parse(localStorage.getItem(cartKey) ?? '[]'); if (validLines(stored)) persist(stored); id.current = localStorage.getItem('kanlungan-storefront-cart') ?? ''; } catch { /* In-memory fallback. */ }
      try { await send('load'); } catch (e) { if (active) setError(e instanceof Error ? e.message : 'The cart could not be loaded.'); }
      if (active) setReady(true);
    }
    function restoreOrder() { try { const previous = JSON.parse(sessionStorage.getItem('kanlungan-demo-order') ?? 'null'); if (previous && /^KL-2026-\d{4}$/.test(previous.number) && validLines(previous.lines) && typeof previous.delivery === 'number' && previous.delivery >= 0 && typeof previous.payment === 'string' && typeof previous.region === 'string' && Array.isArray(previous.address) && previous.address.every((v: unknown) => typeof v === 'string')) setOrder(previous); } catch { /* In-memory fallback. */ } }
    restoreOrder(); void load();
    const sync = (event: StorageEvent) => { if (event.key === cartKey && !remote.current) { try { const next = JSON.parse(event.newValue ?? '[]'); if (validLines(next)) { linesRef.current = next; setLines(next); } } catch { /* Ignore invalid storage. */ } } };
    window.addEventListener('storage', sync);
    return () => { active = false; window.removeEventListener('storage', sync); };
  }, [persist, send]);
  function open() { returnFocus.current = document.activeElement as HTMLElement; setOpened(true); }
  const close = useCallback(() => setOpened(false), []);
  function add(product: CommerceProduct, variant: Variant) {
    if (!ready || busy || !variant.available || product.availability === 'sold-out') return;
    open();
    if (remote.current || variant.id.startsWith('gid://shopify/')) { enqueue('add', variant.id, 1); return; }
    const line: CartLine = { variantId: variant.id, productSlug: product.slug, name: product.name, options: variant.options, price: variant.price, leadTimeWeeks: product.availability === 'made-to-order' ? variant.leadTimeWeeks : null, quantity: 1, category: product.category, maker: product.maker, oneOfAKind: product.oneOfAKind, image: product.images[0]?.url };
    const existing = linesRef.current.find((l) => l.variantId === variant.id);
    persist(existing ? linesRef.current.map((l) => l.variantId === variant.id ? { ...line, quantity: product.oneOfAKind ? 1 : l.quantity + 1 } : l) : [...linesRef.current, line]);
  }
  function setQuantity(variantId: string, quantity: number) {
    if (!Number.isInteger(quantity) || quantity < 0 || quantity > 999 || busy) return;
    if (remote.current) { enqueue('set', variantId, quantity); return; }
    persist(linesRef.current.flatMap((l) => l.variantId !== variantId ? [l] : quantity ? [{ ...l, quantity: unique(l) ? 1 : quantity }] : []));
  }
  async function clear() {
    if (remote.current) { setBusy(true); try { await send('clear'); } catch (e) { setError(e instanceof Error ? e.message : 'The cart could not be cleared.'); return false; } finally { setBusy(false); } }
    persist([]); id.current = ''; try { localStorage.removeItem('kanlungan-storefront-cart'); } catch { /* In-memory fallback. */ } return true;
  }
  function saveOrder(next: DemoOrder) { setOrder(next); try { sessionStorage.setItem('kanlungan-demo-order', JSON.stringify(next)); } catch { /* In-memory confirmation survives navigation. */ } }
  return <Context.Provider value={{ lines, count: lines.reduce((n, l) => n + l.quantity, 0), ready, busy, error, add, setQuantity, clear, open, close, order, saveOrder }}>{children}<CartDrawer open={opened} onClose={close} returnFocus={returnFocus} /></Context.Provider>;
}
export function useCart() { const value = useContext(Context); if (!value) throw new Error('CartProvider is missing'); return value; }

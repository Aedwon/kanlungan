'use client';
import { useEffect } from 'react';

// Drives every [data-wipe] track from scroll position. It sets --p (0 to 1) and --sc (scrim, 0 to 1 over the first 20%)
// on the sticky pin. The track's --range (px) is the scroll distance of the wipe. The sticky pin inside it sets the start.
export function ScrollWipe() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let ticking = false;
    const update = () => {
      ticking = false;
      document.querySelectorAll<HTMLElement>('[data-wipe]').forEach((track) => {
        const pin = track.querySelector<HTMLElement>('[data-wipe-pin]');
        if (!pin || reduce.matches || track.getClientRects().length === 0) {
          pin?.style.removeProperty('--p'); pin?.style.removeProperty('--sc'); return;
        }
        const range = parseFloat(getComputedStyle(track).getPropertyValue('--range')) || 560;
        const stick = parseFloat(getComputedStyle(pin).top) || 0;
        const p = Math.min(1, Math.max(0, (stick - track.getBoundingClientRect().top) / range));
        pin.style.setProperty('--p', String(p));
        pin.style.setProperty('--sc', String(Math.min(1, p / 0.2)));
      });
    };
    const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    reduce.addEventListener('change', request);
    update();
    return () => { window.removeEventListener('scroll', request); window.removeEventListener('resize', request); reduce.removeEventListener('change', request); };
  }, []);
  return null;
}

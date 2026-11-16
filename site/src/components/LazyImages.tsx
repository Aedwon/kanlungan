'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Starts lazy photographs well before they scroll into view, at the width the slot really shows.
// Native lazy loading (and IntersectionObserver) treat an image as hidden while a reveal animation
// clips its ancestor, so photos inside clipped panels load late or not at all. This checks layout
// position instead, which ignores clipping: any lazy image within 2000px of the viewport gets an
// exact sizes value (so the browser picks a fitting file) and then loads eagerly.
const AHEAD = 2000;

export function LazyImages() {
  const path = usePathname();
  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight + AHEAD;
      document.querySelectorAll<HTMLImageElement>('picture > img[loading="lazy"]').forEach((img) => {
        const box = img.getBoundingClientRect();
        if (box.width === 0 && box.height === 0) return; // not rendered (for example the other breakpoint)
        if (box.top > limit || box.bottom < -AHEAD) return;
        const source = img.parentElement?.querySelector('source');
        if (source) source.sizes = `${Math.ceil(box.width)}px`;
        img.loading = 'eager';
      });
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(check); };
    check();
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request);
    const mo = new MutationObserver(request);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { removeEventListener('scroll', request); removeEventListener('resize', request); mo.disconnect(); if (frame) cancelAnimationFrame(frame); };
  }, [path]);
  return null;
}

'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Starts lazy photographs well before they scroll into view, at the width the slot really shows.
// Native lazy loading starts late on fast scrolls. Here each image near the viewport gets an exact
// sizes value (so the browser picks a fitting file) and then loads eagerly. Hidden images never load.
export function LazyImages() {
  const path = usePathname();
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const img = entry.target as HTMLImageElement;
        io.unobserve(img);
        const width = Math.ceil(img.getBoundingClientRect().width);
        const source = img.parentElement?.querySelector('source');
        if (source && width > 0) source.sizes = `${width}px`;
        img.loading = 'eager';
      }
    }, { rootMargin: '2000px 0px' });
    const scan = () => document.querySelectorAll<HTMLImageElement>('picture > img[loading="lazy"]').forEach((img) => {
      if (!seen.has(img)) { seen.add(img); io.observe(img); }
    });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [path]);
  return null;
}

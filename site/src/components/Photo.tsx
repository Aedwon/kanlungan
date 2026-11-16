import type { CSSProperties } from 'react';
import manifest from '@/data/project-images.json';

type Entry = { dir: string; width: number; height: number; widths: number[]; jpegWidth: number };
const images = manifest as Record<string, Entry>;
const base = '/images/projects';

export function photoSize(name: string) {
  const entry = images[name];
  if (!entry) throw new Error(`Missing exported image: ${name}`);
  return { width: entry.width, height: entry.height, ratio: entry.width / entry.height };
}

// A real photograph: WebP at several widths with a JPEG fallback.
export function Photo({ name, alt, sizes = '100vw', priority = false, className, style }: {
  name: string; alt: string; sizes?: string; priority?: boolean; className?: string; style?: CSSProperties;
}) {
  const entry = images[name];
  if (!entry) throw new Error(`Missing exported image: ${name}`);
  const dir = `${base}/${entry.dir}`;
  const srcSet = entry.widths.map((w) => `${dir}/${name}-${w}.webp ${w}w`).join(', ');
  return <picture>
    <source type="image/webp" srcSet={srcSet} sizes={sizes} />
    <img src={`${dir}/${name}.jpg`} alt={alt} width={entry.width} height={entry.height} className={className} style={style}
      loading={priority ? 'eager' : 'lazy'} decoding={priority ? 'sync' : 'async'} fetchPriority={priority ? 'high' : undefined} />
  </picture>;
}

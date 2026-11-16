import type { CSSProperties } from 'react';
import projectManifest from '@/data/project-images.json';
import productManifest from '@/data/product-images.json';

type Entry = { dir?: string; width: number; height: number; widths: number[]; jpegWidth: number; blur?: string };
const projectImages = projectManifest as Record<string, Entry>;
const productImages = productManifest as Record<string, Entry>;

// Project frames live in /images/projects/<project>/, product studio shots in /images/products/.
function resolve(name: string) {
  const project = projectImages[name];
  if (project) return { ...project, base: `/images/projects/${project.dir}` };
  const product = productImages[name];
  if (product) return { ...product, base: '/images/products' };
  throw new Error(`Missing exported image: ${name}`);
}

export function photoSize(name: string) {
  const { width, height } = resolve(name);
  return { width, height, ratio: width / height };
}

// A real photograph: WebP at several widths with a JPEG fallback.
export function Photo({ name, alt, sizes = '100vw', priority = false, className, style }: {
  name: string; alt: string; sizes?: string; priority?: boolean; className?: string; style?: CSSProperties;
}) {
  const entry = resolve(name);
  const srcSet = entry.widths.map((w) => `${entry.base}/${name}-${w}.webp ${w}w`).join(', ');
  return <picture>
    <source type="image/webp" srcSet={srcSet} sizes={sizes} />
    <img src={`${entry.base}/${name}.jpg`} alt={alt} width={entry.width} height={entry.height} className={className}
      style={entry.blur ? { backgroundImage: `url(${entry.blur})`, backgroundSize: 'cover', ...style } : style}
      loading={priority ? 'eager' : 'lazy'} decoding={priority ? 'sync' : 'async'} fetchPriority={priority ? 'high' : undefined} />
  </picture>;
}

// A photograph that fills a positioned slot, cropped to the slot's own aspect ratio.
export function PhotoSlot({ name, alt, className, style, sizes = '(min-width: 1280px) 600px, 100vw', position }: {
  name: string; alt: string; className?: string; style?: CSSProperties; sizes?: string; position?: string;
}) {
  return <div className={`${className ?? ''} photo-host`} style={{ ...style, background: 'none' }}>
    <Photo name={name} alt={alt} sizes={sizes} style={position ? { objectPosition: position } : undefined} />
  </div>;
}

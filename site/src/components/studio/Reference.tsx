import { createElement, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { children, hasClass, text, type ReferenceNode } from '@/lib/studioTemplates';
import { ProjectFilterButton } from './ProjectFilters';
import { PhotoSlot } from '@/components/Photo';
import { nodePhoto } from '@/data/image-slots';
import { projects } from '@/data/projects';
import { projectPages } from '@/data/project-pages';

// Project cards show the project's real photograph in place of the painted placeholder.
function projectOf(href: unknown) {
  const slug = typeof href === 'string' ? href.match(/^\/projects\/([^/]+)$/)?.[1] : undefined;
  return projects.find((p) => p.slug === slug);
}
function paintCards(node: ReferenceNode | string, project: (typeof projects)[number]) {
  if (typeof node === 'string') return;
  if (node.attrs.role === 'img') { node.attrs['data-photo'] = projectPages[project.slug].card; node.attrs['aria-label'] = `${project.name}, ${project.location}`; return; }
  node.children.forEach((child) => paintCards(child, project));
}
// Shared sections retain the reference's individual geometry and composition.
export function ClosingCallToAction({ node }: { node: ReferenceNode }) {
  return <Reference node={node} />;
}
export function Reference({ node }: { node: ReferenceNode | string }): ReactNode {
  if (typeof node === 'string') return node;
  // Caption badges from the painted placeholders never render over real photographs.
  if (node.children.length > 0 && node.children.every((c) => typeof c === 'string') && node.children.join('').startsWith('Placeholder ·')) return null;
  const { tag, attrs } = node;
  if (tag === 'a') { const project = projectOf(attrs.href); if (project) paintCards(node, project); }
  const content = node.children.map((child, index) => <Reference key={index} node={child} />);
  if (tag === 'a') {
    const { href, className, ...rest } = attrs;
    if (hasClass(node, 'btn-p')) return <Button {...rest} href={String(href)} className={String(className)}>{content}</Button>;
    return <Link {...rest} href={String(href)} className={className as string}>{content}</Link>;
  }
  const photo = nodePhoto(attrs, node.children.some((c) => typeof c !== 'string' && c.tag === 'img'));
  if (photo) return <PhotoSlot name={photo.name} alt={photo.alt} position={photo.position} className={attrs.className as string} style={attrs.style as CSSProperties} sizes="(min-width: 1280px) 1184px, 100vw" />;
  if (attrs.role === 'img') {
    return <ImagePlaceholder className={attrs.className as string} style={attrs.style as CSSProperties} alt={String(attrs['aria-label'])}>{content}</ImagePlaceholder>;
  }
  if (tag === 'ProductCard') {
    const product = products.find((p) => p.slug === attrs.productSlug)!;
    return <ProductCard product={{ ...product, name: String(attrs.productName), price: Number(attrs.price) }} number={Number(attrs.number)} variant="project" />;
  }
  if (tag === 'button' && hasClass(node, 'flt')) return <ProjectFilterButton style={attrs.style as CSSProperties} className={String(attrs.className)}>{text(node)}</ProjectFilterButton>;
  if (tag === 'li' && attrs['data-project-type']) return createElement(tag, attrs, content);
  // Void elements must not receive an empty children array.
  return ['col', 'br', 'hr', 'input', 'img'].includes(tag) ? createElement(tag, attrs) : createElement(tag, attrs, content);
}
export function ReferencePage({ node, replace }: { node: ReferenceNode; replace?: Record<number, ReactNode> }) {
  const sections = children(node);
  const last = sections.at(-1);
  return <div {...node.attrs}>{sections.map((section, index) => replace?.[index] ? <div key={index} style={{ display: 'contents' }}>{replace[index]}</div> : section === last && text(section).includes('Book a discovery call')
    ? <ClosingCallToAction key={index} node={section} /> : <Reference key={index} node={section} />)}</div>;
}

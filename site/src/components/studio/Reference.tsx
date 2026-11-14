import { createElement, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { children, hasClass, text, type ReferenceNode } from '@/lib/studioTemplates';
import { ProjectFilterButton } from './ProjectFilters';

// Shared sections retain the reference's individual geometry and composition.
export function ClosingCallToAction({ node }: { node: ReferenceNode }) {
  return <Reference node={node} />;
}
export function Reference({ node }: { node: ReferenceNode | string }): ReactNode {
  if (typeof node === 'string') return node;
  const { tag, attrs } = node;
  const content = node.children.map((child, index) => <Reference key={index} node={child} />);
  if (tag === 'a') {
    const { href, className, ...rest } = attrs;
    if (hasClass(node, 'btn-p')) return <Button {...rest} href={String(href)} className={String(className)}>{content}</Button>;
    return <Link {...rest} href={String(href)} className={className as string}>{content}</Link>;
  }
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
export function ReferencePage({ node }: { node: ReferenceNode }) {
  const sections = children(node);
  const last = sections.at(-1);
  return <div {...node.attrs}>{sections.map((section, index) => section === last && text(section).includes('Book a discovery call')
    ? <ClosingCallToAction key={index} node={section} /> : <Reference key={index} node={section} />)}</div>;
}

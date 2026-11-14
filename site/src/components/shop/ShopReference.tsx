'use client';
import { createContext, createElement, useContext, useState, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { NotifyMe } from '@/components/NotifyMe';
import { useCart } from '@/components/CartProvider';
import { availabilityLine, defaultVariant, type CommerceProduct, type Variant } from '@/lib/commerce/types';
import { children, elements, find, hasClass, setText, text, type ReferenceNode } from '@/lib/shopTemplates';
import { formatPrice } from '@/lib/formatPrice';
import { makers } from '@/data/makers';
interface ProductState { product: CommerceProduct; variant: Variant; choose: (name: string, value: string) => void }
const ProductContext = createContext<ProductState | null>(null);
export function ProductScreens({ product, nodes }: { product: CommerceProduct; nodes: ReferenceNode[] }) {
  const [variantId, setVariantId] = useState(defaultVariant(product).id);
  const variant = product.resolvedVariants.find((v) => v.id === variantId) ?? defaultVariant(product);
  const choose = (name: string, value: string) => {
    const options = { ...variant.options, [name]: value };
    const next = product.resolvedVariants.find((v) => Object.entries(options).every(([k, val]) => v.options[k] === val));
    if (next) setVariantId(next.id);
  };
  return <ProductContext.Provider value={{ product, variant, choose }}>{nodes.map((node, i) => <ShopReference key={i} node={node} />)}</ProductContext.Provider>;
}
function Buy({ node }: { node: ReferenceNode }) {
  const { product, variant } = useContext(ProductContext)!;
  const screen = node.attrs['data-screen'];
  const value = structuredClone(node); value.tag = 'div';
  const fields = children(value);
  const maker = makers.find((m) => m.name === product.maker);
  fields[1].children = maker ? [{ tag: 'a', attrs: { href: `/shop/makers/${maker.slug}` }, children: [maker.name] }] : [{ tag: 'span', attrs: {}, children: [product.maker] }];
  setText(fields[2], formatPrice(variant.price) + (product.priceUnit ? ` ${product.priceUnit}` : '')); fields[2].attrs['aria-live'] = 'polite';
  setText(fields[3], product.description);
  const optionBlocks = fields.filter((f) => elements(f).some((n) => n.attrs.role === 'group'));
  const buttons = elements(value).filter((n) => n.tag === 'button' && text(n) === 'Add to cart');
  const availability = fields.find((f) => text(f) === 'Made to order. Ready in 10 weeks.')!;
  setText(availability, availabilityLine(product, variant)); availability.attrs['aria-live'] = 'polite';
  const newOptions = product.variants.toSorted((a, b) => Number(a.name === 'Size') - Number(b.name === 'Size')).map((option) => {
    const swatch = option.name === 'Fabric' && product.slug === 'silong-sofa';
    const block = structuredClone(optionBlocks[swatch ? 0 : 1]);
    const group = elements(block).find((n) => n.attrs.role === 'group')!;
    group.attrs['aria-label'] = option.name;
    const heading = children(block)[0];
    heading.attrs.id = `${product.slug}-${option.name.toLowerCase()}-${screen}`;
    if (swatch) { const spans = children(heading); setText(spans[0], option.name); delete spans[0].attrs.id; setText(spans[1], variant.options[option.name]); }
    else setText(heading, option.name);
    const originals = children(group);
    group.children = option.choices.map((choice, i) => {
      const button = structuredClone(originals[swatch ? i : 0]);
      const selected = variant.options[option.name] === choice.label;
      button.attrs['data-option-name'] = option.name; button.attrs['data-option-value'] = choice.label;
      button.attrs['aria-pressed'] = selected;
      button.attrs['aria-label'] = choice.label;
      const style = button.attrs.style as CSSProperties;
      style.outline = selected ? '1px solid #8E4A2C' : undefined; style.outlineOffset = selected ? '4px' : undefined;
      if (!swatch) {
        const matching = product.resolvedVariants.find((v) => v.options[option.name] === choice.label && Object.entries(variant.options).every(([key, value]) => key === option.name || v.options[key] === value));
        setText(button, choice.label + (matching && matching.price !== product.price ? ` · ${formatPrice(matching.price)}` : ''));
      }
      return button;
    });
    return block;
  });
  const firstOption = value.children.indexOf(optionBlocks[0]);
  value.children = value.children.filter((n) => !optionBlocks.includes(n as ReferenceNode));
  value.children.splice(firstOption, 0, ...newOptions);
  const sold = product.availability === 'sold-out' || !variant.available;
  buttons.forEach((button) => { button.tag = sold ? 'Notify' : 'AddButton'; if (sold) button.attrs = { id: `notify-product-${product.slug}-${screen}` }; });
  const ask = fields.at(-1)!;
  if (product.availability !== 'made-to-order') value.children = value.children.filter((n) => n !== ask);
  else find(ask, 'a').attrs.href = `/contact?subject=${encodeURIComponent(product.name)}`;
  return <ShopReference node={value} />;
}
function Bar({ node }: { node: ReferenceNode }) {
  const { product, variant } = useContext(ProductContext)!;
  if (product.availability === 'sold-out' || !variant.available) return null;
  const value = structuredClone(node); value.tag = 'div';
  const labels = children(children(value)[0]);
  setText(labels[0], formatPrice(variant.price)); setText(labels[1], availabilityLine(product, variant, true));
  find(value, 'button').tag = 'AddButton'; return <ShopReference node={value} />;
}
function AddButton({ node }: { node: ReferenceNode }) {
  const { product, variant } = useContext(ProductContext)!;
  const { add } = useCart();
  return <button {...node.attrs} type="button" onClick={() => add(product, variant)} disabled={!variant.available}>Add to cart</button>;
}
function ArtboardForm({ node }: { node: ReferenceNode }) {
  const [submitted, setSubmitted] = useState(false);
  const value = structuredClone(node);
  for (const input of elements(value).filter((n) => n.tag === 'input')) { input.attrs.required = true; input.attrs.readOnly = submitted; }
  const button = find(value, 'button'); button.attrs.disabled = submitted;
  return <form {...value.attrs} action={undefined} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>{value.children.map((n, i) => <ShopReference key={i} node={n} />)}{submitted && <p role="status">Thank you. We will email you once when this piece is available again.</p>}</form>;
}
export function ShopReference({ node }: { node: ReferenceNode | string }): ReactNode {
  const productState = useContext(ProductContext);
  if (typeof node === 'string') return node;
  const content = node.children.map((n, i) => <ShopReference key={i} node={n} />);
  if (node.tag === 'ProductBuy') return <Buy node={node} />;
  if (node.tag === 'ProductBar') return <Bar node={node} />;
  if (node.tag === 'AddButton') return <AddButton node={node} />;
  if (node.tag === 'Notify') return <NotifyMe id={String(node.attrs.id)} />;
  if (node.tag === 'form') return <ArtboardForm node={node} />;
  if (node.tag === 'button' && node.attrs['data-option-name']) return <button {...node.attrs} type="button" onClick={() => productState?.choose(String(node.attrs['data-option-name']), String(node.attrs['data-option-value']))}>{content}</button>;
  if (node.tag === 'a') {
    const { href, className, ...attrs } = node.attrs;
    if (hasClass(node, 'btn-p')) return <Button {...attrs} href={String(href)} className={String(className)}>{content}</Button>;
    return <Link {...attrs} href={String(href)} className={className as string}>{content}</Link>;
  }
  if (node.attrs.role === 'img') return <ImagePlaceholder className={node.attrs.className as string} style={node.attrs.style as CSSProperties} alt={String(node.attrs['aria-label'])}>{content}</ImagePlaceholder>;
  if (['img', 'input', 'br', 'hr', 'col'].includes(node.tag)) return createElement(node.tag, node.attrs);
  return createElement(node.tag, node.attrs, content);
}

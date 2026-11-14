import { Suspense } from 'react';
import { getProducts, getCollections, getMakers } from '@/lib/commerce';
import { copy } from '@/data/copy';
import { originalProductSlugs, newPieceSlugs } from '@/data/products';
import { shopTemplate, bindExistingCards, productList, children, elements, find, setText, replaceText, section, makerTemplate, collectionTemplate, productTemplate, type ReferenceNode, type Screen } from '@/lib/shopTemplates';
import type { CommerceProduct, Collection, Maker } from '@/lib/commerce/types';
import { ShopReference, ProductScreens } from './ShopReference';
import { CategoryPage } from './CategoryPage';
const screens: Screen[] = ['desktop', 'mobile'];
export async function shopData() {
  'use cache';
  const [products, collections, makers] = await Promise.all([getProducts(), getCollections(), getMakers()]);
  return { products, collections, makers };
}
export async function ShopPage() {
  const { products } = await shopData();
  return <>{screens.map((screen) => { const node = shopTemplate('shop', screen);
    for (const [heading, slugs] of [['Kanlungan Originals', originalProductSlugs], ['New pieces', newPieceSlugs]] as const) {
      productList(section(node, heading), slugs.map((slug) => products.find((p) => p.slug === slug)).filter((p): p is CommerceProduct => !!p), screen);
    }
    bindExistingCards(node, products, screen); return <ShopReference key={screen} node={node} />; })}</>;
}
export function ShopCategoryPage({ category, products }: { category: { name: string; slug: string }; products: CommerceProduct[] }) {
  return <Suspense fallback={null}><CategoryPage category={category} catalog={products} /></Suspense>;
}
export function MakerPage({ maker, products }: { maker: Maker; products: CommerceProduct[] }) {
  return <>{screens.map((screen) => <ShopReference key={screen} node={makerTemplate(maker, products, screen)} />)}</>;
}
export function CollectionPage({ collection, products }: { collection: Collection; products: CommerceProduct[] }) {
  return <>{screens.map((screen) => <ShopReference key={screen} node={collectionTemplate(collection, products, screen)} />)}</>;
}
export function ShopProductPage({ product, products, collections }: { product: CommerceProduct; products: CommerceProduct[]; collections: Collection[] }) {
  return <ProductScreens product={product} nodes={screens.map((screen) => productTemplate(product, products, collections, screen))} />;
}
function indexIntro(name: string, intro: string, screen: Screen) {
  const node = shopTemplate('category', screen); const first = children(node)[0];
  const title = find(first, 'h1'); setText(title, name); setText(find(first, 'p'), intro);
  const nav = find(first, 'nav');
  for (const n of elements(first)) n.children = n.children.filter((c) => c !== nav);
  return first;
}
export async function MakersPage() {
  const { makers } = await shopData();
  const desktop = shopTemplate('makers', 'desktop');
  const list = find(desktop, 'ul'); list.children = children(list).filter((li) => makers.some((m) => elements(li).some((n) => n.attrs.href === `/shop/makers/${m.slug}`)));
  const mobile = shopTemplate('shop', 'mobile');
  const body = section(mobile, 'Made by people we know'); const mobileList = find(body, 'ul');
  const sample = children(mobileList)[0];
  mobileList.children = makers.map((maker) => {
    const n = structuredClone(sample);
    const card = elements(desktop).find((n) => n.tag === 'a' && n.attrs.href === `/shop/makers/${maker.slug}`)!;
    const image = elements(n).find((n) => n.attrs.role === 'img')!; const source = elements(card).find((n) => n.attrs.role === 'img')!;
    image.attrs['aria-label'] = source.attrs['aria-label']; image.children = structuredClone(source.children);
    const link = find(n, 'a'); link.attrs.href = `/shop/makers/${maker.slug}`;
    for (const [before, after] of [['Lilok Workshop', maker.name], ['Betis, Pampanga', maker.place], ['Solid hardwood furniture and carving', maker.craft]]) replaceText(n, before, after);
    return n;
  });
  body.children = [mobileList]; mobile.children = [indexIntro('Makers', copy['Index pages']['Makers index intro'], 'mobile'), body];
  return <><ShopReference node={desktop} /><ShopReference node={mobile} /></>;
}
export async function CollectionsPage() {
  const { collections } = await shopData();
  return <>{screens.map((screen) => {
    const node = shopTemplate('shop', screen); const base = section(node, 'Collections');
    const sections: ReferenceNode[] = ['Room-based', 'Mood and lifestyle', 'Material-based'].map((type) => {
      const s = structuredClone(base); setText(find(s, 'h2'), type);
      // The index uses the approved collection cards and group order from the architecture.
      for (const n of elements(s)) n.children = n.children.filter((c) => typeof c === 'string' || !(c.tag === 'a' && c.attrs.href === '/shop/collections'));
      const list = find(s, 'ul'); const prototypes = children(list);
      list.children = collections.filter((c) => c.type === type).map((collection, i) => {
        const n = structuredClone(prototypes[i % prototypes.length]); const link = find(n, 'a');
        const old = ['Quiet Living', 'Slow Mornings', 'Woven Forms'][i % prototypes.length];
        replaceText(n, old, collection.name); link.attrs.href = `/shop/collections/${collection.slug}`;
        const desc = elements(link).find((n) => !children(n).length && ['Soft light, low furniture, and nothing that asks for attention.', 'Pieces for the first hour of the day.', 'Cane, rattan, and reed, woven by hand.'].includes(n.children.join('')));
        if (desc) setText(desc, collection.description ?? '');
        return n;
      });
      return s;
    });
    node.children = [indexIntro('Collections', copy['Index pages']['Collections index intro'], screen), ...sections];
    return <ShopReference key={screen} node={node} />;
  })}</>;
}

// Focused checks at delivery, form, artboard binding, and Storefront boundaries.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const externalRequire = createRequire(import.meta.url); const memo = new Map();
function load(name) {
  let file = name.startsWith('@/') ? path.join(root, 'src', name.slice(2)) : name;
  if (!path.extname(file)) file += fs.existsSync(file + '.ts') ? '.ts' : '.tsx';
  if (memo.has(file)) return memo.get(file).exports;
  if (file.endsWith('.json')) return JSON.parse(fs.readFileSync(file, 'utf8'));
  const m = { exports: {} }; memo.set(file, m);
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  new Function('require', 'module', 'exports', source)((id) => id === '@/components/CartProvider' ? { useCart: () => ({ lines: [], busy: false, error: '', setQuantity() {} }) } : id === 'server-only' ? {} : id.startsWith('@/') ? load(id) : id.startsWith('.') ? load(path.resolve(path.dirname(file), id)) : externalRequire(id), m, m.exports);
  return m.exports;
}
const cart = load('@/lib/cart'); const templates = load('@/lib/flowTemplates'); const validation = load('@/lib/formValidation');
const furniture = { variantId: 'sofa', productSlug: 'silong-sofa', name: 'Silong Sofa', options: { Fabric: 'Oat linen', Size: 'Three-seat 228 cm' }, price: 50000, quantity: 1, category: 'Seating', maker: 'Kanlungan Original', leadTimeWeeks: 10 };
const small = { ...furniture, variantId: 'cushion', productSlug: 'hablon-cushion', name: 'Hablon Cushion', category: 'Rugs and Textiles', options: { Color: 'Indigo' }, price: 10000, leadTimeWeeks: null, maker: 'Habol Textiles' };
assert.equal(cart.delivery([furniture]).total, 2500);
assert.equal(cart.delivery([{ ...furniture, price: 50001 }]).total, 0);
assert.equal(cart.delivery([small]).total, 350);
assert.equal(cart.delivery([{ ...small, price: 10001 }]).total, 0);
assert.equal(cart.delivery([furniture, small]).total, 2850);
assert.equal(cart.delivery([furniture, small], 'Davao Region').total, 8850);
assert.equal(cart.delivery([]).total, 0);
assert.equal(Object.keys(cart.regionRates).length, 18);
assert(cart.mixed([furniture, small])); assert(!cart.mixed([small]));
assert(!cart.validLines([{ ...small, quantity: 0 }])); assert(!cart.validLines([{ ...small, price: -1 }]));
assert.deepEqual(Object.keys(validation.validateBooking({})), ['name', 'email', 'mobile', 'service', 'property', 'location', 'budget']);
const booking = { name: 'Visitor', email: 'visitor@example.com', mobile: '0917 123 4567', service: 'Not sure yet', property: 'House', location: 'Makati', budget: 'Not sure yet' };
assert.deepEqual(validation.validateBooking(booking), {});
assert(validation.validateBooking({ ...booking, area: '-1' }).area); assert(validation.validateBooking({ ...booking, area: 'abc' }).area);
assert.equal(validation.validateBooking({ ...booking, email: 'invalid' }).email, validation.bookingErrors.email);
assert(validation.validateContact({ name: 'Visitor', email: 'visitor@example.com', subject: 'Silong Sofa', message: 'Question' }).message === undefined);
const checkout = { ...booking, fullname: 'Visitor', address: '14 Street', barangay: 'Poblacion', city: 'Makati', postal: '1210', region: 'Metro Manila', pay: 'bank' };
assert.deepEqual(validation.validateCheckout(checkout), {});
const card = { ...checkout, pay: 'card', cardnumber: '4242 4242 4242 4242', cardname: 'Visitor', cardexp: '08 / 28', cardcvc: '123' };
assert.deepEqual(validation.validateCheckout(card, new Date('2026-11-14')), {});
assert(validation.validateCheckout({ ...card, cardexp: '10 / 26' }, new Date('2026-11-14')).cardexp);
assert(validation.validateCheckout({ ...card, cardnumber: 'abc', cardcvc: 'ab' }).cardnumber);
for (const screen of ['desktop', 'mobile']) {
  for (const lines of [[small], [furniture, small], [{ ...furniture, quantity: 4 }]]) {
    const root = templates.bindCart(templates.flowTemplate('cart', screen), lines);
    assert.equal(templates.nodes(templates.find(root, 'ul')).filter((n) => n.tag === 'li').length, lines.length);
    assert.equal(templates.text(root).includes('Furnishing a whole room?'), lines.filter(cart.furniture).reduce((s, l) => s + l.quantity, 0) >= 4);
    assert.equal(templates.text(root).includes(cart.mixedNote), cart.mixed(lines));
    assert(templates.text(root).includes('VAT included'));
    const drawer = templates.bindCart(templates.flowTemplate('cart-drawer', screen), lines, true);
    assert(templates.text(drawer).includes(lines[0].name));
    assert(templates.nodes(drawer).filter((n) => n.tag === 'button' && n.attrs['data-cart-action']).every((n) => n.attrs['data-variant']));
  }
  const single = templates.bindCart(templates.flowTemplate('cart', screen), [small]);
  assert(!templates.text(single).includes('Silong Sofa')); assert(!templates.text(single).includes('Three-seat')); assert(templates.text(single).includes('Habol Textiles'));
  const checkoutRoot = templates.flowTemplate('checkout', screen); const summary = templates.find(checkoutRoot, screen === 'desktop' ? 'aside' : 'details');
  templates.bindSummary(summary, [{ ...small, quantity: 3 }], 350);
  assert(!templates.text(summary).includes('Silong Sofa')); assert(!templates.text(summary).includes('Oat linen')); assert(templates.text(summary).includes('Qty 3'));
  const review = templates.nodes(checkoutRoot).find((n) => n.tag === 'section' && n.attrs['aria-labelledby'] === `step-5-${screen}`); templates.bindReview(review, [small]); assert(!templates.text(review).includes('Silong Sofa'));
  const order = { number: 'KL-2026-0001', lines: [small], delivery: 350, region: 'Metro Manila', payment: 'Bank transfer', address: ['Visitor', '14 Street', 'Poblacion, Makati', 'Metro Manila 1210'] };
  const confirmation = templates.confirmationTemplate(order, screen);
  assert(templates.text(confirmation).includes('KL-2026-0001')); assert(templates.text(confirmation).includes(cart.demoNotice)); assert(!templates.text(confirmation).includes('Isabel')); assert(!templates.text(confirmation).includes('4242')); assert(!templates.text(templates.find(confirmation, 'aside')).includes('Silong Sofa')); assert(!templates.nodes(confirmation).filter((n) => n.tag === 'ul').some((n) => templates.text(n).includes('Silong Sofa'))); assert(!templates.text(confirmation).includes('Hain Dining Chair'));
  const allIds = ['booking', 'checkout', 'confirmation'].flatMap((name) => templates.nodes(templates.flowTemplate(name, screen)).map((n) => n.attrs.id).filter(Boolean));
  assert.equal(new Set(allIds).size, allIds.length);
}
console.log('PASS: delivery thresholds and mixed shipments; 18 demo regions; booking/contact/payment validation; both cart/drawer/review/confirmation bindings; furniture prompt threshold; quantities, options, prices, notices, and IDs.');
const { storefrontCart } = load('@/lib/commerce/storefrontCart');
const savedFetch = global.fetch; process.env.SHOPIFY_STORE_DOMAIN = 'fixture.myshopify.com'; process.env.SHOPIFY_STOREFRONT_PUBLIC_TOKEN = 'fixture';
const remoteLine = { id: 'line-1', quantity: 1, merchandise: { id: 'gid://shopify/ProductVariant/1', availableForSale: true, price: { amount: '186000', currencyCode: 'PHP' }, selectedOptions: [{ name: 'Fabric', value: 'Oat linen' }], metafield: { value: '12' }, product: { handle: 'silong-sofa', title: 'Silong Sofa', vendor: 'Kanlungan Original', productType: 'Seating', images: { nodes: [] }, availability: { value: 'made-to-order' }, weeks: { value: '10' }, unique: { value: 'false' } } } };
const remoteCart = { id: 'cart-1', lines: { nodes: [remoteLine], pageInfo: { hasNextPage: false } } };
let mutation; let variables;
global.fetch = async (url, options) => {
  assert(url.endsWith('/api/2026-01/graphql.json')); assert.equal(options.cache, 'no-store'); const req = JSON.parse(options.body);
  assert(!req.query.includes('checkoutUrl')); assert(!options.body.includes('4242'));
  if (req.query.startsWith('query Cart')) return { ok: true, json: async () => ({ data: { cart: remoteCart } }) };
  mutation = req.query; variables = req.variables;
  const field = req.query.includes('cartLinesUpdate') ? 'cartLinesUpdate' : req.query.includes('cartLinesAdd') ? 'cartLinesAdd' : req.query.includes('cartLinesRemove') ? 'cartLinesRemove' : 'cartCreate';
  return { ok: true, json: async () => ({ data: { [field]: { cart: field === 'cartLinesRemove' ? { ...remoteCart, lines: { ...remoteCart.lines, nodes: [] } } : remoteCart, userErrors: [] } } }) };
};
try {
  assert.equal((await storefrontCart({ action: 'load', id: 'cart-1' })).lines[0].leadTimeWeeks, 12);
  await storefrontCart({ action: 'add', id: 'cart-1', variantId: remoteLine.merchandise.id, quantity: 1 }); assert(mutation.includes('cartLinesUpdate')); assert.equal(variables.lines[0].quantity, 2);
  await storefrontCart({ action: 'set', id: 'cart-1', variantId: remoteLine.merchandise.id, quantity: 3 }); assert.equal(variables.lines[0].quantity, 3);
  await storefrontCart({ action: 'set', id: 'cart-1', variantId: remoteLine.merchandise.id, quantity: 0 }); assert(mutation.includes('cartLinesRemove')); assert.deepEqual(variables.lines, ['line-1']);
  await storefrontCart({ action: 'add', id: 'cart-1', variantId: 'gid://shopify/ProductVariant/2', quantity: 1 }); assert(mutation.includes('cartLinesAdd'));
  assert.deepEqual((await storefrontCart({ action: 'clear', id: 'cart-1' })).lines, []);
  await storefrontCart({ action: 'load' }); assert(mutation.includes('cartCreate'));
  global.fetch = async () => ({ ok: true, json: async () => ({ errors: [{ message: 'Fixture error' }] }) });
  await assert.rejects(storefrontCart({ action: 'load', id: 'cart-1' }), /could not be updated/);
} finally { global.fetch = savedFetch; }
console.log('PASS: mocked Storefront create/load/add/update/remove/clear; variant lead-time override; GraphQL errors; no hosted checkout or payment data in cart requests.');

const { FlowReference } = load('@/components/flow/FlowReference');
const errors = validation.validateBooking({});
const rendered = renderToStaticMarkup(React.createElement(FlowReference, { node: templates.flowTemplate('booking', 'desktop'), screen: 'desktop', form: { values: {}, errors, change() {}, submit() {} } }));
for (const name of Object.keys(errors)) assert(rendered.includes(`href="#f-${name}-desktop"`));
const ids = [...rendered.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(ids.length, new Set(ids).size);
for (const match of rendered.matchAll(/aria-describedby="([^"]+)"/g)) for (const id of match[1].split(' ')) assert(ids.includes(id), `Missing error/helper ${id}`);
const payment = renderToStaticMarkup(React.createElement(FlowReference, { node: templates.flowTemplate('checkout', 'desktop'), screen: 'checkout-desktop', form: { values: initialValues(), errors: {}, change() {}, submit() {} } }));
function initialValues() { return { region: 'Metro Manila', pay: 'card', furniture: 'White-glove delivery', small: 'Courier delivery' }; }
for (const field of ['cardnumber', 'cardname', 'cardexp', 'cardcvc']) { const input = payment.match(new RegExp(`<input[^>]+id="${field}-desktop"[^>]*>`))?.[0]; assert(input); assert(!/\bname=/.test(input)); assert(input.includes('autoComplete="off"')); }
console.log('PASS: rendered booking error links, unique field IDs, helper/error descriptions, and demo card fields without native submission names or autofill.');

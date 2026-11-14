# Wave 4 implementation report

Implemented under the assigned `site/` directory in `/Users/aedwon/Documents/Projects/kanlungan-wave4`. No Git commands, external publication, or changes outside `site/`. No dependencies added. No agents dispatched. No server started.

## Built

- Cart drawer opens from Add to cart and the header cart control, replacing the wave 3 toast. It traps focus, makes the page inert, locks background scrolling, closes with Escape or the scrim, and restores focus after exit. Enter: 400ms cubic-bezier(0.22, 0.61, 0.36, 1). Exit: 200ms cubic-bezier(0.55, 0, 1, 0.45). Reduced motion disables animation.
- `/cart` supports variant options, quantity changes, remove, item lead times, conditional mixed-order copy, Metro Manila delivery estimates, subtotal, VAT included, empty state, and the furnishing prompt only at four furniture units. Furniture means Seating, Tables, Beds, and Storage. Quantities count as pieces.
- `/checkout` is guest only, with all five steps on one page and the supplied desktop sticky summary/mobile disclosure. Furniture and small-item subtotals are separate for fee eligibility. Thresholds are strictly above ₱50,000 and ₱10,000. Both shipment fees apply to mixed carts when applicable.
- Outside Metro Manila, furniture rates use the explicitly labeled flat demo table: Central Luzon and Calabarzon ₱3,500; Cordillera, Ilocos, Cagayan Valley, and Bicol ₱4,500; Mimaropa ₱5,500; Visayas regions ₱6,500; Mindanao regions ₱8,500. All 18 region choices include Metro Manila. These are demonstration values authorized by the brief, not real freight quotes.
- Payment offers Card, Bank transfer, and E-wallet. Card values stay in transient component state, never enter a cart request, order record, or browser storage, and clear on every submit and payment-method change. Card inputs have autocomplete off and omit native submission names. Card number, expiry, cardholder name, and security-code formats are checked. The required demo notice appears verbatim at payment and confirmation.
- Place order generates `KL-2026-XXXX` with random digits, clears the local or Storefront cart, saves the non-card demo summary in sessionStorage with an in-memory fallback, and navigates to `/checkout/confirmation`. Confirmation includes the actual order number, prices, address, payment type, shipment groups, and each item's lead time. It does not send email or place a real order.
- `/book` has all 11 fields, exact helpers and booking errors, required-field and optional floor-area validation, a focused linked error summary, starting prices, and both submitted artboards. `/contact` validates all four fields and reads the product subject query. Neither inquiry form transmits or persists its data.
- Shopify mode uses server-side Storefront create/read/add/update/remove/clear mutations. No Shopify checkout URL is requested or used. API requests contain cart identifiers and product quantities only. The singular header label is `Cart, 1 item`.

## Files and measured sizes

UTF-8 source bytes, not rendered measurements. The report itself is additional documentation. Build artifacts and caches remain inside `site/`. The build regenerated tokens using the existing script.

| File, relative to site/ | Bytes |
|---|---:|
| `README.md` | 10,098 |
| `scripts/transcribe-checkout.py` | 2,846 |
| `scripts/verify-wave4.mjs` | 11,817 |
| `src/app/[...slug]/page.tsx` | 754 |
| `src/app/globals.css` | 2,143 |
| `src/app/api/cart/route.ts` | 1,158 |
| `src/app/book/page.tsx` | 267 |
| `src/app/cart/page.tsx` | 159 |
| `src/app/checkout/page.tsx` | 158 |
| `src/app/checkout/confirmation/page.tsx` | 176 |
| `src/app/contact/page.tsx` | 264 |
| `src/components/CartProvider.tsx` | 6,515 |
| `src/components/Header.tsx` | 9,775 |
| `src/components/shop/ShopReference.tsx` | 8,096 |
| `src/components/flow/CartDrawer.tsx` | 2,935 |
| `src/components/flow/CartPage.tsx` | 577 |
| `src/components/flow/Checkout.tsx` | 5,771 |
| `src/components/flow/FlowReference.tsx` | 5,843 |
| `src/components/flow/InquiryForms.tsx` | 1,945 |
| `src/data/checkout-templates.json` | 303,428 |
| `src/lib/cart.ts` | 3,254 |
| `src/lib/flowTemplates.ts` | 9,017 |
| `src/lib/formValidation.ts` | 2,630 |
| `src/lib/commerce/storefrontCart.ts` | 5,253 |
| `src/styles/checkout-reference.css` | 76,628 |
| `src/styles/checkout.css` | 3,719 |
| `docs/wave-4-lint-output.txt` | 29 |
| `docs/wave-4-build-output.txt` | 2,723 |
| `docs/wave-4-checks-output.txt` | 527 |

## Verification evidence

Before each npm invocation, from the worktree root, `export npm_config_cache="$PWD/site/.npm-cache"` ran before changing into `site/`. Final lint and build exited 0. The focused checks exited 0. Earlier validation caught lifecycle lint errors, dynamic element typing, and a controlled-textarea render error; each was corrected before these final runs.

`npm run lint`, actual complete output:

```text
> site@0.1.0 lint
> eslint
```

`npm run build`, actual final output:

```text
> site@0.1.0 prebuild
> npm run tokens


> site@0.1.0 tokens
> node scripts/build-tokens.mjs

Generated 134 CSS custom properties.

> site@0.1.0 build
> next build

▲ Next.js 16.4.6 (Turbopack)
✓ Running next.config.ts took 14ms
- Cache Components enabled
- Partial Prefetching enabled

  Creating an optimized production build ...
✓ Compiled successfully in 139ms
  Running TypeScript ...
  Finished TypeScript in 1041ms ...
  Collecting page data using 9 workers ...
  Generating static pages using 9 workers (0/99) ...
  Generating static pages using 9 workers (24/99) 
  Generating static pages using 9 workers (49/99) 
  Generating static pages using 9 workers (74/99) 
✓ Generating static pages using 9 workers (99/99) in 751ms
  Finalizing page optimization ...

Route (app)                                   Revalidate  Expire
┌ ○ /
├ ○ /_not-found
├   /[...slug]
│ ├ ◐ /[...slug]
│ ├ ○ /search
│ ├ ○ /help
│ └ ◐ [+7 more paths]
├ ○ /about
├ ƒ /api/cart
├ ○ /book
├ ○ /cart
├ ○ /checkout
├ ○ /checkout/confirmation
├ ○ /contact
├ ○ /icon.svg
├ ○ /projects
├   /projects/[slug]
│ ├ ◐ /projects/[slug]
│ ├ ○ /projects/lilim-house
│ ├ ○ /projects/tanaw-residence
│ └ ◐ [+3 more paths]
├ ○ /shop                                            15m      1y
├   /shop/[category]
│ ├ ◐ /shop/[category]
│ ├ ○ /shop/seating                                  15m      1y
│ ├ ○ /shop/tables                                   15m      1y
│ └ ◐ [+6 more paths]
├ ○ /shop/collections                                15m      1y
├   /shop/collections/[slug]
│ ├ ◐ /shop/collections/[slug]
│ ├ ○ /shop/collections/living-room                  15m      1y
│ ├ ○ /shop/collections/dining-room                  15m      1y
│ └ ◐ [+5 more paths]
├ ○ /shop/makers                                     15m      1y
├   /shop/makers/[slug]
│ ├ ◐ /shop/makers/[slug]
│ ├ ○ /shop/makers/lilok-workshop                    15m      1y
│ ├ ○ /shop/makers/sulihiya-studio                   15m      1y
│ └ ◐ [+8 more paths]
├   /shop/products/[slug]
│ ├ ◐ /shop/products/[slug]
│ ├ ○ /shop/products/silong-sofa                     15m      1y
│ ├ ○ /shop/products/dapithapon-lounge-chair         15m      1y
│ └ ◐ [+34 more paths]
├ ○ /studio
├ ○ /studio/full-service-furnishing
└ ○ /studio/interior-design-direction


○  (Static)             prerendered as static content
◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content
ƒ  (Dynamic)            server-rendered on demand
```

`node site/scripts/verify-wave4.mjs`, actual final output:

```text
PASS: delivery thresholds and mixed shipments; 18 demo regions; booking/contact/payment validation; both cart/drawer/review/confirmation bindings; furniture prompt threshold; quantities, options, prices, notices, and IDs.
PASS: mocked Storefront create/load/add/update/remove/clear; variant lead-time override; GraphQL errors; no hosted checkout or payment data in cart requests.
PASS: rendered booking error links, unique field IDs, helper/error descriptions, and demo card fields without native submission names or autofill.
```

`grep -rn "—" site/src | wc -l`, actual final output:

```text
       0
```

The focused checks cover exact fee boundaries and mixed fees; the furniture prompt threshold; booking/contact/payment validation; cart, drawer, review, and confirmation bindings on both screen sizes; elimination of illustrative customer/card data from dynamic summaries; rendered error links and helper IDs; and mocked Storefront create/read/add/update/remove/clear, variant lead-time override, and GraphQL failures. They do not exercise browser events.

## Gaps, adaptations, and source discrepancies

- The drawer artboards use `rgba(46,33,26,.55)` for their scrim, while `docs/design/visual-system.md` specifies `.4`. The implementation preserves `.55` under the documented artboard precedence rule. Drawer enter and exit timing/easings follow the visual-system values exactly. Flagged for the lead's review.
- No Contact mobile or Contact submitted artboard exists. Mobile stacks the existing desktop content and form using approved mobile gutters/type/spacing. The submitted state reuses existing copy: "Thank you. We have your details." and "We reply within two business days." No new claim of message delivery is added.
- Contact subject/message errors and checkout address/card-format errors have no authored entries in copy.md. Concise field-specific validation messages are supplied in `src/lib/formValidation.ts`; these need the lead's copy review. Booking errors and helpers are verbatim.
- Empty form fields start blank rather than displaying the artboards' sample personal/card data. Sample completed checkout markers are neutral until the visitor supplies their details. Selected radio rings reflect actual selections. Region options expand the five illustrative choices to the disclosed demo table. These are functional state adaptations.
- VAT included is added to the cart summary as requested. The error summary uses the authored numeric "{n} fields need your attention." pattern rather than the illustrative "Three" word in the error artboard.
- Photography remains the supplied paintings/placeholders, with existing Shopify product images used when available. Confirmation retains its approved room placeholder regardless of cart contents.
- There is no submitted form service, email integration, payment processor, real regional freight quotation, or real order creation. These are the requested browser-only demo flows.

## Not verified

No local server was started because the brief assigns no port. No browser was opened. Pixel comparison, screenshots, responsive layout measurement, focus trapping/restoration and error-summary focus in a browser, keyboard/touch interactions, native history/query navigation, drawer enter/exit timing, reduced-motion behavior, overflow on small screens, cart persistence across reloads/tabs, and complete client submission journeys remain for the lead's rendered review.

No live Storefront endpoint was exercised. Authentication, actual store inventory constraints, cart expiration, real network recovery, live API mutations, and multi-tab Shopify reconciliation are unverified. Storefront verification uses mocked responses. Card clearing and the absence of network transmission are supported by code paths and render checks, not a browser network trace. SessionStorage-disabled behavior is implemented but not browser-tested.

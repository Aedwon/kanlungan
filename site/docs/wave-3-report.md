# Wave 3 implementation report

Implemented 60 Shop routes under `site/` on the assigned `build/wave-3` worktree. No commit, push, or branch operation was run. No files outside `site/` were changed. No dependencies were added.

## Files and measured sizes

UTF-8 source bytes, not rendered measurements. The report itself is additional documentation. Build output and lint output are retained verbatim beside this report. Token generation ran during the build without changing the generated token file.

| File | Bytes |
|---|---:|
| `.env.example` | 55 |
| `.gitignore` | 535 |
| `README.md` | 8,726 |
| `docs/wave-3-build-output.txt` | 2,562 |
| `docs/wave-3-lint-output.txt` | 29 |
| `scripts/build-shopify-csv.mjs` | 3,333 |
| `scripts/transcribe-shop.py` | 4,437 |
| `scripts/verify-commerce.mjs` | 7,456 |
| `scripts/verify-shop-output.py` | 3,494 |
| `shopify/README.md` | 6,788 |
| `shopify/products.csv` | 18,589 |
| `src/app/[...slug]/page.tsx` | 727 |
| `src/app/globals.css` | 2,065 |
| `src/app/layout.tsx` | 1,094 |
| `src/app/shop/[category]/page.tsx` | 879 |
| `src/app/shop/collections/[slug]/page.tsx` | 799 |
| `src/app/shop/collections/page.tsx` | 145 |
| `src/app/shop/makers/[slug]/page.tsx` | 744 |
| `src/app/shop/makers/page.tsx` | 130 |
| `src/app/shop/page.tsx` | 128 |
| `src/app/shop/products/[slug]/page.tsx` | 803 |
| `src/components/CartProvider.tsx` | 4,058 |
| `src/components/Header.tsx` | 9,682 |
| `src/components/shop/CategoryPage.tsx` | 8,127 |
| `src/components/shop/ShopPages.tsx` | 5,521 |
| `src/components/shop/ShopReference.tsx` | 8,065 |
| `src/data/shop-paintings.json` | 29,616 |
| `src/data/shop-templates.json` | 324,087 |
| `src/lib/commerce/filter.ts` | 2,077 |
| `src/lib/commerce/index.ts` | 906 |
| `src/lib/commerce/local.ts` | 1,932 |
| `src/lib/commerce/shopify.ts` | 7,736 |
| `src/lib/commerce/types.ts` | 1,817 |
| `src/lib/shopTemplates.ts` | 13,935 |
| `src/styles/shop-reference.css` | 55,319 |
| `src/styles/shop.css` | 2,928 |

Commerce: `src/lib/commerce/` holds the seven-method interface, common resolved variant types, local provider, Storefront fetch provider, and URL-filter logic. The configured Shopify provider maps PHP variant prices and variant lead-time metafields, product metafields, images, and collection membership. Pagination, GraphQL errors, invalid currency, missing variants, and over-limit collections/variants are checked. Makers' stories remain local in both providers.

Views: `src/components/shop/`, `src/lib/shopTemplates.ts`, `src/data/shop-*.json`, and `src/styles/shop*.css` bind the approved markup to catalog content. The source CSS is scoped, retaining motion and gradients. Explicit App Router files replace Shop catch-all stubs. Existing header Shop menus are retained. `CartProvider.tsx`, `Header.tsx`, and `layout.tsx` connect persistent variant lines, the header count, and the T-components toast.

Import: `scripts/build-shopify-csv.mjs` generates all option combinations into `shopify/products.csv`. `shopify/README.md` lists the exact product, variant, and collection metafield definitions, the seven automated collection rules, publication/access requirements, and import steps. `.env.example` is explicitly included by `.gitignore`.

## Verification evidence

Before every npm command, from the repository root, `export npm_config_cache="$PWD/site/.npm-cache"` was run, then the command ran inside `site/`. Final lint and build both exited 0. The first build caught a missing helper import, which was corrected. Production HTML checks caught a duplicate Fabric label ID, which was corrected and rebuilt. A final content-gap change also exposed an overly broad mobile section lookup; the section lookup was corrected and both focused checks and the production build were rerun. Final output follows.

`npm run lint`, complete output:

```text
> site@0.1.0 lint
> eslint
```

`npm run build`, actual output:

```text
> site@0.1.0 prebuild
> npm run tokens


> site@0.1.0 tokens
> node scripts/build-tokens.mjs

Generated 134 CSS custom properties.

> site@0.1.0 build
> next build

▲ Next.js 16.4.6 (Turbopack)
✓ Running next.config.ts took 21ms
- Cache Components enabled
- Partial Prefetching enabled

  Creating an optimized production build ...
✓ Compiled successfully in 321ms
  Running TypeScript ...
  Finished TypeScript in 912ms ...
  Collecting page data using 9 workers ...
  Generating static pages using 9 workers (0/94) ...
  Generating static pages using 9 workers (23/94) 
  Generating static pages using 9 workers (46/94) 
  Generating static pages using 9 workers (70/94) 
✓ Generating static pages using 9 workers (94/94) in 731ms
  Finalizing page optimization ...

Route (app)                                   Revalidate  Expire
┌ ○ /
├ ○ /_not-found
├   /[...slug]
│ ├ ◐ /[...slug]
│ ├ ○ /book
│ ├ ○ /contact
│ └ ◐ [+12 more paths]
├ ○ /about
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
│ └ ◐ [+30 more paths]
├ ○ /studio
├ ○ /studio/full-service-furnishing
└ ○ /studio/interior-design-direction


○  (Static)             prerendered as static content
◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content
```

`node scripts/build-shopify-csv.mjs`, actual output:

```text
Wrote shopify/products.csv: 32 products, 59 variant rows (60 rows including header).
```

`grep -rn "—" site/src site/shopify | wc -l`, from the worktree root, actual output:

```text
       0
```

`node scripts/verify-commerce.mjs`, actual output:

```text
PASS: 32 local products, 59 variants, 7 collections, 10 makers; base and option prices; all project cross-links in both screens; URL filter combinations and sorts; Shopify mapping, variant lead-time override, PHP validation, pagination, and GraphQL error handling.
```

`python3 scripts/verify-shop-output.py`, actual output:

```text
PASS: 60 Shop routes; both product headings and every option control; collection and maker product memberships; unique IDs and label references; all internal links resolve; fictional notice on every page.
```

A separate standard-library CSV round-trip check also exited 0:

```text
PASS: CSV round-trip: 32 handles, all 59 option combinations and prices, base-price ordering, Kiso quantity 0, Tanghali quantity 1.
```

## Gaps and adaptations requiring the lead's rendered review

- The reference set has no Collections index, Makers mobile artboard, or open mobile filter sheet. The Collections index groups the existing collection cards in the architecture's order. Makers mobile extends the supplied mobile Shop maker list to all ten makers. The mobile filter sheet uses the approved filter controls, panel colors, square shape, spacing, and scrim in a native modal dialog. These adaptations have not been visually approved; they are ready for the lead to render.
- Tuntungan Stool has no membership in any seed collection. Its Pairs well with section is omitted, because inventing a relationship would violate the content source. The lead must assign a source collection before that requirement can be completed for this product.
- Living Room, Dining Room, and Bedroom have no authored description. Their description slots are empty. Nothing was invented. Other collection descriptions retain the authored text.
- Photography is pending. The supplied reference paintings are preserved where provided. Additional product galleries reuse the product's approved painting, or a labeled surface placeholder when no painting exists, plus an approved room placeholder. Additional collection pages reuse the approved room inserts. Extra project links use the project's approved index painting. These are placeholders, not newly generated photographs. Remote Shopify images replace product card and gallery placeholders when present.
- Kiso Stool is consistently sold out as explicitly requested. This overrides its older in-stock seed record without editing the out-of-scope content source. CSV inventory is 0. Tanghali is one of a kind with CSV inventory 1 and a maximum local cart quantity of one. Other seed products are untracked rather than assigned invented stock quantities.
- The seed does not define variant-specific lead times or publication dates. Local variants inherit product lead times. Shopify variant lead times override product values and are covered by a mock-response check. Local Newest prioritizes the authored New pieces order, retaining catalog order afterward. Shopify Newest uses creation dates.
- Notification forms keep the foundation's local validation and confirmation; they do not send email. The authorized cart is localStorage state in this wave. Storefront cart, drawer, checkout, and form-service integration remain for later waves.
- Shopify responses use a five-minute fetch revalidation; the current Next route cache reports 15-minute revalidation. After configuring the two variables, restart/rebuild the site. Store changes can take up to the route cache interval to appear.

## Not verified

No browser was opened and no server was started because the brief assigned no port. Pixel comparison, responsive screenshots, keyboard/touch interactions, mobile modal focus, filter history in a browser, cart clicks/persistence across reloads/tabs, toast timing, scroll choreography, reduced-motion behavior, and full contrast measurements remain unverified. Generated HTML and focused logic checks verify structure and data, not these browser behaviors.

No live Shopify token or store was supplied. A real CSV import, metafield permissions, channel publication, inventory-location behavior, and authenticated Storefront responses were not tested. Shopify reads were exercised using mocked responses only. Shopify account creation and public release remain with the lead. No external service was modified.

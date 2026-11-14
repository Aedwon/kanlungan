# Kanlungan: wave 1

Next.js 16 foundation for the fictional Kanlungan studio and shop. Home follows the approved desktop and mobile templates. Other site-map destinations render title stubs within the shared header and footer.

From the repository root, set the writable npm cache before running npm:

```sh
export npm_config_cache="$PWD/site/.npm-cache"
cd site
npm run tokens
npm run lint
npm run build
```

`npm run build` also regenerates the CSS tokens automatically. No dependencies were added to the lead's scaffold.

- `src/components/`: header states, footer, buttons, text links, category icons, product cards, accessible gradient placeholders, and Home sections.
- `src/data/`: typed transcription of all 36 products and variants, 7 collections, 5 projects and galleries, 10 makers, copy, and navigation routes.
- `src/styles/`: generated tokens, exact Home reference measurements and choreography, shared responsive component styles.
- `scripts/build-tokens.mjs`: generates CSS custom properties from `../design/tokens/tokens.json`.
- `scripts/transcribe-reference.py`: reproducible one-time transcription of the approved HTML and Markdown sources. Uses only the Python standard library. It regenerates the Home components, reference CSS, category icons, and data files.

The desktop and mobile Home structures are both server-rendered, with CSS selecting the appropriate structure at 1280px. The mobile reference's fixed 350px text width and quarter-width collection offsets are fluid, retaining their 390px measurements. All original gradient placeholders are preserved. Product cards share one implementation across both structures.

The booking button uses an IntersectionObserver to hide the header booking action while the Home hero action is visible, including in browsers without scroll-driven animation support. Other choreography uses the reference's CSS scroll timelines inside feature queries. Reduced motion disables animations and transitions.

Mailing-list and Notify me forms validate email locally and transmit nothing. Commerce, form integrations, and completed destination pages belong to later waves. Cart count defaults to zero and accepts a count prop.

The footer's showroom phone number comes from the approved Home templates. The reference images describe Kapis as spun brass and depict Aparador as a low cabinet; the typed catalog preserves the source descriptions of a capiz-shell drum and a tall cane-door cabinet. Placeholder drawings remain as approved pending the photography swap.

Verification is limited to lint, production build and static generation, content-reference checks, generated HTML link checks, and the requested em-dash scan. Browser rendering, keyboard interaction, responsive screenshots, scroll choreography, and full contrast measurement still need the lead's rendered review. No local server was started.

## Wave 2: Studio pages

Implemented Studio, both service pages, Projects with All / Residential / Hospitality filtering, all five project detail pages, and About. The explicit routes replace the foundation catch-all stubs. The five project slugs are generated statically; unknown slugs resolve through `notFound()`.

- `src/components/studio/`: shared artboard renderer and closing section, service and project page templates, and client project filters.
- `src/lib/studioTemplates.ts`: binds the approved templates to service and project content, including all ten gallery captions, expanded approaches, material lists, project products with variant prices, and the five-project next-link cycle.
- `src/data/studio-templates.json`, `service-content.json`, and `project-product-placeholders.ts`: faithful template markup, service scope/process/FAQ transcription, and the project artboard's ten product paintings.
- `src/styles/studio-reference.css`: isolated desktop and mobile reference choreography. `studio.css` supplies responsive visibility, filter behavior, focus disclosure, and shared product-card integration.
- `scripts/transcribe-studio.py`: regenerates those data files and reference CSS from the approved artboards and Markdown sources, using only the Python standard library.

The project filter uses `?type=residential` or `?type=hospitality`; All removes the parameter. Other query parameters and the hash survive changes. Native history updates integrate with Next's search-parameter hook, including back and forward navigation. The static fallback contains all projects. The service FAQs use native `details` / `summary`, with a distinct named accordion group for each responsive structure. Fee bars retain `animation-range: entry 0% cover 50%`. The shared header observes page booking actions and hides its booking action whenever one is visible.

No copy is missing. Photography remains a planned placeholder. Lilim retains the supplied detail artboard's paintings. The other four detail pages reuse their own approved index painting in the room and gallery slots, with their own captions. Materials without an approved swatch use the existing surface color as a labeled placeholder. Products without a supplied painting use the shared card's surface placeholder. Their room pins retain the template coordinates until final photography determines placement. The second service uses the approved Hardin painting and drafting-table painting within the service template. No new photograph, material color, or layout was designed.

Wave 2 verification: lint, production build and static generation, em-dash scan, and generated-HTML checks for both responsive structures, each project's facts and expanded approach, ten exact captions, all project products, variant prices, resolved links, next-project cycle, and six native FAQ entries per service. Browser rendering, measured visual comparison, keyboard and touch interaction, history navigation, reduced-motion behavior, and scroll choreography still require the lead's rendered review. No server was started. No Git commands were run, and no files outside `site/` were changed.

See [the wave 2 implementation report](docs/wave-2-report.md) for the exact file inventory, measured source sizes, and command output.

## Wave 3: Shop

Implemented the Shop landing, all eight categories, Collections and all seven details, Makers and all ten details, and all 36 product pages. Shop routes replace their catch-all stubs. See [the wave 3 report](docs/wave-3-report.md) for files, measurements, actual verification output, and remaining review items.

`src/lib/commerce/` exposes the same seven methods through local and Shopify providers. Local typed content is the default. Set both variables from `.env.example` to use the `2026-01` Storefront API. Product/collection data is cached through Next's cache; maker stories remain local. The CSV generator, metafield definitions, collection rules, and setup steps are documented in [shopify/README.md](shopify/README.md).

Category filters use repeated `maker`, `material`, `availability`, and `price` URL parameters, plus `subcategory` and `sort`. Price labels match the reference ranges. Numeric `min` and `max` parameters are also supported. Sort accepts `featured`, `newest`, `price-asc` (or `price`), and `price-desc`. Changes preserve other parameters and the hash; native history integrates with Next's search-parameter hook. Local Newest prioritizes the authored New pieces list because the seed has no publication dates. Shopify Newest uses `createdAt`.

`CartProvider` stores a versioned cart in localStorage, groups lines by variant ID, restores the header count, and shows the approved added-to-cart toast. Cart state remains usable when storage is unavailable. Tanghali is limited to one in the local cart. The sold-out Kiso demo cannot be added and offers Notify me. Notification forms retain the existing local-only validation and confirmation behavior; they transmit nothing. The cart drawer, Storefront cart, and checkout belong to wave 4.

Shop templates and CSS are transcribed by `scripts/transcribe-shop.py`, using the existing parser and scoping utility from wave 2. Supplied artboard geometry and motion are retained, including product swatches, the mobile gallery and buy bar, collection room inserts, and progressive card details. Unprovided index/mobile interactions reuse approved elements; the report identifies those adaptations for the lead's rendered review. Photography remains labeled placeholders.

Additional focused checks, after building:

```sh
node scripts/verify-commerce.mjs
python3 scripts/verify-shop-output.py
node scripts/build-shopify-csv.mjs
```

No dependencies were added. No local server was started; browser interaction, visual comparison, and live Shopify import/API reads remain unverified.

## Wave 4: Cart, demo checkout, and inquiries

Implemented the cart drawer, `/cart`, `/checkout`, `/checkout/confirmation`, `/book`, and `/contact`. The header cart opens the drawer and uses the singular item label when appropriate. Adding a product opens the drawer in place of the wave 3 toast. Quantity and remove controls update the local cart or the Storefront cart through `/api/cart`. Checkout stays on this site for both providers.

Checkout calculates furniture and courier fees separately. Metro Manila and courier thresholds follow the Shop rules. Outside Metro Manila, a disclosed demonstration table supplies flat regional furniture rates. Card fields validate format in memory, have autofill disabled and no native submission names, and clear on every submit and payment-method change. Only the non-card order summary is saved to sessionStorage. Inquiry forms keep their data in component memory and send nothing.

`scripts/transcribe-checkout.py` retains the 16 supplied wave 4 artboards and scopes their CSS. `scripts/verify-wave4.mjs` checks delivery boundaries, validation, dynamic template data, rendered field/error relationships, and mocked Storefront mutations. See [the wave 4 report](docs/wave-4-report.md) for file sizes, actual outputs, source discrepancies, content gaps, and unverified browser/live-store behavior. No dependencies were added.

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
- `src/data/`: typed transcription of all 32 products and variants, 7 collections, 5 projects and galleries, 10 makers, copy, and navigation routes.
- `src/styles/`: generated tokens, exact Home reference measurements and choreography, shared responsive component styles.
- `scripts/build-tokens.mjs`: generates CSS custom properties from `../design/tokens/tokens.json`.
- `scripts/transcribe-reference.py`: reproducible one-time transcription of the approved HTML and Markdown sources. Uses only the Python standard library. It regenerates the Home components, reference CSS, category icons, and data files.

The desktop and mobile Home structures are both server-rendered, with CSS selecting the appropriate structure at 1280px. The mobile reference's fixed 350px text width and quarter-width collection offsets are fluid, retaining their 390px measurements. All original gradient placeholders are preserved. Product cards share one implementation across both structures.

The booking button uses an IntersectionObserver to hide the header booking action while the Home hero action is visible, including in browsers without scroll-driven animation support. Other choreography uses the reference's CSS scroll timelines inside feature queries. Reduced motion disables animations and transitions.

Mailing-list and Notify me forms validate email locally and transmit nothing. Commerce, form integrations, and completed destination pages belong to later waves. Cart count defaults to zero and accepts a count prop.

The footer's showroom phone number comes from the approved Home templates. The reference images describe Kapis as spun brass and depict Aparador as a low cabinet; the typed catalog preserves the source descriptions of a capiz-shell drum and a tall cane-door cabinet. Placeholder drawings remain as approved pending the photography swap.

Verification is limited to lint, production build and static generation, content-reference checks, generated HTML link checks, and the requested em-dash scan. Browser rendering, keyboard interaction, responsive screenshots, scroll choreography, and full contrast measurement still need the lead's rendered review. No local server was started.

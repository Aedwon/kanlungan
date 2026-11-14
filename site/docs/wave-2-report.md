# Wave 2 implementation report

Implemented all ten requested routes under `site/`, using the approved desktop and mobile artboards. No Git commands were run. No files outside `site/` were changed.

## Files and measured source sizes

Sizes are UTF-8 bytes, not rendered measurements. The report itself is additional documentation. Token generation also ran during the build.

| File | Bytes |
|---|---:|
| `README.md` | 6,155 |
| `scripts/transcribe-studio.py` | 7,718 |
| `src/components/studio/ProjectFilters.tsx` | 1,394 |
| `src/components/studio/Reference.tsx` | 2,518 |
| `src/components/studio/StudioPages.tsx` | 1,498 |
| `src/lib/studioTemplates.ts` | 14,668 |
| `src/styles/studio-reference.css` | 78,268 |
| `src/styles/studio.css` | 1,560 |
| `src/data/studio-templates.json` | 403,674 |
| `src/data/service-content.json` | 5,295 |
| `src/data/project-product-placeholders.ts` | 9,362 |
| `src/app/studio/page.tsx` | 134 |
| `src/app/studio/full-service-furnishing/page.tsx` | 205 |
| `src/app/studio/interior-design-direction/page.tsx` | 206 |
| `src/app/projects/page.tsx` | 140 |
| `src/app/projects/[slug]/page.tsx` | 765 |
| `src/app/about/page.tsx` | 200 |
| `src/components/Header.tsx` | 9,639 |
| `src/components/ProductCard.tsx` | 2,722 |
| `src/app/globals.css` | 1,995 |
| `src/app/[...slug]/page.tsx` | 722 |

## Verification evidence

Commands were run from the assigned worktree. Before each npm command the cache was set with `export npm_config_cache="$PWD/site/.npm-cache"`, then the command ran in `site/`. Both final commands exited 0.

`npm run lint`, actual complete output:

```text
> site@0.1.0 lint
> eslint
```

`npm run build`, actual tail:

```text
> next build

▲ Next.js 16.4.6 (Turbopack)
✓ Running next.config.ts took 61ms
- Cache Components enabled
- Partial Prefetching enabled

  Creating an optimized production build ...
✓ Compiled successfully in 244ms
  Running TypeScript ...
  Finished TypeScript in 904ms ...
  Collecting page data using 9 workers ...
  Generating static pages using 9 workers (0/90) ...
  Generating static pages using 9 workers (22/90) 
  Generating static pages using 9 workers (44/90) 
  Generating static pages using 9 workers (67/90) 
✓ Generating static pages using 9 workers (90/90) in 480ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
├ ○ /_not-found
├   /[...slug]
│ ├ ◐ /[...slug]
│ ├ ○ /shop
│ ├ ○ /shop/collections
│ └ ◐ [+72 more paths]
├ ○ /about
├ ○ /icon.svg
├ ○ /projects
├   /projects/[slug]
│ ├ ◐ /projects/[slug]
│ ├ ○ /projects/lilim-house
│ ├ ○ /projects/tanaw-residence
│ └ ◐ [+3 more paths]
├ ○ /studio
├ ○ /studio/full-service-furnishing
└ ○ /studio/interior-design-direction


○  (Static)             prerendered as static content
◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content

```

`grep -rn "—" site/src | wc -l`, actual output:

```text
       0
```

Generated-HTML checks passed for both desktop and mobile: every project's facts, brief, both expanded approach paragraphs, ten exact gallery captions, all Shop the project products, the next-project cycle, resolved links, and six native FAQ entries on each service. Checked the project variant prices of ₱158,000 for the two-seat Silong Sofa, ₱58,000 for the 170 × 240 Lambot Wool Rug, and ₱214,000 for the 260 cm Hapag Dining Table.

## Gaps and deviations

No copy is missing. Final photography is pending as planned. Lilim keeps the supplied detail artboard paintings. The other four detail pages use their own approved index painting for room and gallery slots, carrying their own gallery captions. Unsupplied material swatches and product paintings use the existing surface placeholder. Room pins retain the template coordinates pending final photography. Interior Design Direction binds its own supplied content to the shared service template and uses the approved Hardin and drafting-table paintings.

Desktop and mobile FAQ groups have distinct names so the hidden responsive accordion cannot close the visible one. The shared header uses an IntersectionObserver for booking-button visibility, including browsers without scroll-driven animation support. Project filters use the `type` URL parameter and preserve other query parameters and the hash. Styling and motion are transcribed directly and scoped to each template to avoid collisions with Home.

## Not verified

Browser rendering, pixel measurements or screenshot comparison, keyboard and touch behavior, URL filter interaction and back/forward history in a browser, scroll choreography, reduced-motion behavior, and a full contrast audit. No server was started because the brief assigned no port. The required lint, production build, static output, content checks, and em-dash scan are complete. Rendered review remains with the lead.

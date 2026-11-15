# Handoff

Written 2026-11-16 by the lead agent, because Claude weekly usage is running low. Read `AGENTS.md`, `SUBAGENTS.md`, and `README.md` first. This file says where the work stands and what to do next.

## Where things stand

| Area | State |
|---|---|
| Concept, content, design (steps 1 to 6) | Done. Locked visual system: `docs/design/visual-system.md`. Templates: `design/round-2-templates/`. Tokens: `design/tokens/tokens.json`. |
| Stack (step 7) | Decided: Next.js 16 on Vercel Hobby, headless Shopify on a free Partner dev store, the site's own demo checkout. Target cost ₱0. |
| Site build | Waves 1 to 4 merged in `site/`: foundation and Home, studio pages, shop with commerce layer, cart, demo checkout, booking, contact. Works on the local catalog. |
| Catalog | 36 products after the material-range decision (two woods, three finishes, four non-wood pieces). Shopify import file: `site/shopify/products.csv` with setup steps in `site/shopify/README.md`. |
| Photography | Lilim House: all 11 shots done and approved. Product studio masters: all 36 done. Four new product references approved. Other four projects: not done (see below). |
| Wave 5 | Not started: search, help and legal pages, 404, photo swap, accessibility and performance pass, Vercel deploy. |

## Open work, in order

1. **Decide styling and 60-30-10.** Fable 5.2 answered; the full recommendation is in `docs/build/consults/2026-11-16-styling-and-60-30-10.md`. Next: run its three-frame pilot (Lilim g05, Tanaw hero, Pahinga hero) and show Aedwon. If he approves, apply the wording to the locked files on branch `content/project-signatures`, then regenerate the frames it lists.
2. **Merge branch `content/project-signatures`** after Aedwon approves the five-project comparison. It holds the per-project photo signatures (Imagery rule change in `visual-system.md`, Global style in `image-briefs.md`, a Signature section in each scene bible, updated plans) and four provisional anchors: `tanaw-hero`, `dalampasigan-hero`, `pahinga-hero`, `hardin-hero`. Aedwon reviewed the comparison and found the projects distinct; the open styling question may change the anchors.
3. **Regenerate the four projects' photos** under the signatures (and the styling decision): 10 shots each for Tanaw, Dalampasigan, Pahinga, Hardin. Anchors first, then the rest. Use `docs/build/prompts/photo-project-batch.md` (replace `{PROJECT}`, `{BIBLE}`, `{PREFIX}`). Show each batch as a contact sheet before moving on.
   - Also generate the four variant studio shots in `image-briefs.md`: `kumot-indigo-studio`, `kumot-rust-studio`, `tabing-white-studio`, `silong-two-seat-clay-studio`.
   - Product detail shots (`*-detail`) are not generated yet.
4. **Wave 5** (see `docs/build/plan.md`). Swap the gradient placeholders for photos in `design/photography/`, keyed by shot id in `image-briefs.md`.
5. **Shopify connection** needs Aedwon: Partner account, dev store, Headless channel, public Storefront token in `site/.env.local` (never committed). Then import `site/shopify/products.csv` and create the metafields and collections listed in `site/shopify/README.md`.
6. **Before public release:** check invented names against real businesses and check price realism (`docs/decisions.md`).

## Stale branches and local files

- `design/photo-tanaw` (pushed, not merged): the first Tanaw batch in the old warm style. Superseded by the signatures; do not merge. Keep it until Aedwon approves deleting it.
- The main checkout at `/Users/aedwon/Documents/Projects/kanlungan` is on `design/photo-tanaw` and has uncommitted old-style Dalampasigan images and a modified `tanaw-hero.png`. They are composition references only. Do not commit them.
- Worktrees: `../kanlungan-sig` (content/project-signatures), `../kanlungan-wave4` (merged, can be removed), `../kanlungan-handoff` (this branch).

## How to run work

- Usage limits: `AGENTS.md` "Usage limits" (at most two Claude subagents at once). Prefer Codex for building and image generation.
- Run Codex through `codex-pick` only, one job at a time, with stdin closed, from a worktree:

```bash
codex-pick exec --skip-git-repo-check -m gpt-6.1-sol --sandbox workspace-write -c sandbox_workspace_write.network_access=true "$(cat prompt.md)" < /dev/null
```

- Codex cannot run git or write the global npm cache in its sandbox. Tell it not to run git (the lead fetches, commits, and pushes), and to use `export npm_config_cache="$PWD/site/.npm-cache"`.
- The image tool takes at most five reference images. Allow Codex to combine references into a temporary contact sheet under `design/photography/_refs/` and delete it after.
- Image generation follows `docs/content/scene-bibles/README.md`: plan, surfaces, placement, light, cameras, signature. Check each image against its bible's checklist. Aedwon approves anchors; regenerate rather than retouch.
- Verify every build wave yourself: `npm run lint`, `npm run build`, then render key pages in the browser at 1440 and 390 and test interactions. Merge your own PR after checks.
- Prompt templates used so far: `docs/build/prompts/`.

## Aedwon's preferences learned in this session

- Short replies, outcome first. Do not re-show work he has already seen.
- Visual choices are shown as rendered options; he picks. Keep picks exactly.
- Rules he sets for this project stay in this project's files, never in his global instructions.
- He wants consistency (scene bibles) and distinct projects (signatures), and realistic, not overdone, photography.
- Copy rules: no eyebrows, no numbered sections except real lists, no redundancy, progressive disclosure.

## The open consult question (for rerunning)

> "i'm thinking of adding a 60 30 10 rule to the picture treatments, idk if that's good though, cuz that's a practice in web design, but idk for photography in general. and i also would like some plants or more decor (like ornaments, plants) in the sample pics, because after all, this is interior design"

Note for the answer: 60-30-10 originates in interior decorating. The current rules ("empty rooms", "sparse", "nothing unlisted appears") are what keep the rooms bare.

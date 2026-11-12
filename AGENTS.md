# Kanlungan: agent instructions

Read this file first in every session. Then read `README.md` for current status and the document map.

## What this project is

Kanlungan is a fictional premium interior design studio with a secondary curated furniture and homeware shop. It is a portfolio project owned by Aedwon. It must demonstrate two things: high-end editorial and brand design, and credible e-commerce functionality.

The project is in the concept and design phase. There is no application code yet.

## Source of truth

| Topic | File |
|---|---|
| Status, planning sequence, document map | `README.md` |
| Brand, positioning, verbal identity | `docs/concept/brand.md` |
| Services, process, pricing model | `docs/concept/services.md` |
| Shop scope, assortment, merchandising | `docs/concept/shop.md` |
| Conversion goals, forms, checkout demo behavior | `docs/concept/conversion.md` |
| Site map, navigation, page structures, journeys | `docs/concept/site-architecture.md` |
| Fictional makers | `docs/content/makers.md` |
| Seed product catalog and collections | `docs/content/catalog.md` |
| Fictional projects (case studies) | `docs/content/projects.md` |
| Voice and key copy | `docs/content/copy.md` |
| Brief for the design mockup work | `docs/design/design-brief.md` |
| Decisions made by an agent on delegation, open questions | `docs/decisions.md` |

Each fact lives in one file. Link to it instead of repeating it. If two files disagree, the `docs/concept/` file wins over `docs/content/` and `docs/design/`.

## Decision status

Every section in `docs/concept/` carries one of these labels:

- **Locked by Aedwon.** Do not change it. If you think it is wrong, say so and wait for his answer.
- **Decided on delegation.** An agent decided it because Aedwon asked the agent to decide. Treat it as the working answer. Aedwon may revise it. You may propose a change with a reason, but do not change it silently.
- **Open.** Not decided. Do not invent an answer inside a deliverable. Present options with costs and a recommendation, then record the answer.

When a decision changes, update the concept file and add one line to `docs/decisions.md`.

## Rules for all work

- **Fictional only.** Kanlungan, its makers, artists, clients, and projects are invented. Do not use real brands, real designers, real product names, or real client names. Real place names are fine.
- **Fictional names are not yet checked.** See `docs/decisions.md`. Before any public release, check each invented name against real businesses.
- **Studio first, shop second.** In every layout and every piece of copy, the studio leads and the shop supports it.
- **Filipino identity stays subtle.** Express it through materials, craft, climate, and spatial sense. Do not use decorative cultural motifs, tourist imagery, or flag colors.
- **Imagery may be AI-generated.** It must look like real photography of plausible rooms and products. Do not show real people's likenesses or real brand logos.
- **Currency is Philippine pesos**, written `₱186,000`. No discounts, sale badges, or strike-through prices anywhere.
- **Use the seed content.** Mockups and prototypes use the products, makers, projects, and copy in `docs/content/`. Do not use lorem ipsum. If you need content that does not exist, add it to the content file first.
- **American spelling.** No em dashes in new text.
- **Every public page carries the fictional-brand notice** defined in `docs/content/copy.md`.

## Rules for visual and UX decisions

- Aedwon judges visual work by seeing it. Present every visual or UX choice as rendered options, not as a description.
- Give each option a cost and state a recommendation. Aedwon picks.
- After he picks, preserve the selected option exactly: same type, color, spacing, layout, and motion. Do not "improve" it during later work.
- Record the selection in `docs/design/visual-system.md` (create it when the first selection is made).

## Order of work

Follow the planning sequence in `README.md`. Do not choose a tech stack, e-commerce platform, or framework before the design direction is approved. Step 7 covers that.

## Where things go

- `docs/` holds concept, content, and briefs.
- `design/` holds design outputs: mockups, exported screens, generated images, and tokens. Create it when the first output exists. Use one subfolder per round, for example `design/round-1-directions/`.
- Do not create planning or analysis files outside these folders.

## Git

- Fetch and compare with `origin/main` before you edit. If local and remote differ unexpectedly, stop and report it.
- Work on a short-lived branch and merge to `main` through a pull request.
- One commit per coherent decision or deliverable. Message style: `Lock <decision>` for concept decisions, `docs: <change>` for other document changes, `design: <change>` for design outputs.
- Do not force-push, rebase shared history, or delete branches without Aedwon's approval.

## Communication with Aedwon

- Keep chat replies short. Lead with the outcome. Put detail in the documents.
- Give options with costs and a recommendation. He picks.
- Push back plainly when something is wrong.

# Design brief: Kanlungan mockups

This brief starts planning steps 5 and 6: the visual system and the core page templates. It is written for a design agent that has not seen earlier conversations.

## Read first

1. `AGENTS.md`
2. `docs/concept/brand.md`
3. `docs/concept/site-architecture.md`
4. `docs/concept/conversion.md`
5. `docs/concept/shop.md`, sections "Availability model" to "Links between the shop and the studio"
6. `docs/content/` (all four files). This is the content for every mockup.

## The job

Design a website for Kanlungan, a fictional premium interior design studio with a small curated shop. The site must work as a portfolio piece that shows two skills at once:

- **Editorial and brand design.** The studio pages should feel like a well-made design publication.
- **Credible e-commerce.** The shop pages should feel like a real, usable store.

Both halves must clearly belong to one brand. The studio leads. The shop supports it.

## What is fixed

Do not redesign these. They are decided in the concept files.

- Page list, navigation, and the order of sections on each page
- Button labels and key copy
- Products, makers, projects, prices, and availability states
- What the site does not have: accounts, reviews, wishlists, pop-ups, discounts, live chat

If a fixed item blocks a good design, say so and propose a change. Do not change it silently.

## What is open

These are yours to propose and Aedwon's to choose.

- Typography
- Color
- Spacing, grid, and radii
- Imagery and product photography direction
- Motion
- Logo or wordmark treatment
- Layout of every section

## Direction and guardrails

The brand direction is **warm modern Filipino**. The brand idea is refuge: safety, rest, belonging, and spaces people want to return to.

Aim for:

- Calm, generous layouts with room around images and text
- Warmth that comes from materials: wood, cane, linen, stone, clay, brass
- Large, quiet photography that carries the page
- Typography with character and restraint
- An interface that almost disappears on the shop pages, so products lead
- Filipino identity shown through materials, craft, light, and climate

Avoid:

- Decorative cultural motifs, weave patterns used as graphics, tourist imagery, or flag colors
- Stark black-and-white minimalism that could belong to any Scandinavian brand
- Cold gray palettes, pure white backgrounds, and pure black text
- Loud luxury signals: gold gradients, heavy serif capitals, glossy effects
- Generic e-commerce template looks: badge clutter, dense grids, promotional banners
- Beige everywhere with no contrast or point of view

These guardrails narrow the field. They do not pick the answer. Show real range inside them.

## How to work with Aedwon

Aedwon judges visual work by seeing it, not by reading about it.

- Present every visual or UX choice as rendered options.
- Give each option a short name, its cost or risk, and your recommendation.
- Wait for his choice before building on it.
- After he chooses, keep the chosen option exactly as shown: same type, color, spacing, layout, and motion.
- Record each choice in `docs/design/visual-system.md`.

## Round 1: visual directions

Goal: choose one visual direction.

Produce **three distinct directions**. Render each one on the same content so they can be compared fairly:

- The Home page, sections 1 to 6, at desktop width (1440 px)
- The same Home sections at mobile width (390 px)
- One Product detail page at desktop width, for the Silong Sofa

Each direction must define and show:

- A type pairing with sizes for headings, body, and labels
- A color palette with background, surface, text, accent, and line colors
- Image treatment: crop, light, and color grade
- Button, link, and product card styles
- One example of motion, described or shown, such as how the hero or a product card behaves

The three directions must differ in a way a non-designer can see at a glance. Changing only the accent color does not count.

Use the seed content: Lilim House for the hero, the featured projects and pieces listed in `docs/content/catalog.md` and `docs/content/projects.md`, and the copy in `docs/content/copy.md`.

Stop after round 1 and wait for Aedwon's choice. He may pick one direction or ask for a mix.

## Round 2: core templates

Goal: apply the chosen direction to the main templates.

Design these at desktop and mobile widths, in this order:

1. Home, complete
2. Project detail (Lilim House)
3. Product detail (Silong Sofa, with fabric and size options)
4. Service page (Full-Service Furnishing)
5. Shop landing
6. Category (Seating, with filters and all card states)
7. Book a discovery call, including the confirmation state
8. Collection detail (Quiet Living)
9. Cart drawer, cart page, checkout, and order confirmation

Then, if time allows: Projects index, About, Maker detail, Studio, 404.

Show these states at least once:

- Product: in stock, made to order, sold out with "Notify me," one of a kind
- Header: default, Shop panel open, mobile menu open
- Form: empty, error, submitted
- Cart: empty, mixed in-stock and made-to-order items

## Round 3: visual system document

After round 2 is approved, write `docs/design/visual-system.md` with the final tokens: type scale, colors, spacing, radii, grid, image rules, and motion rules. This closes step 5 and prepares step 7.

## Requirements for every screen

- Real content from `docs/content/`. No lorem ipsum.
- Text contrast meets WCAG AA.
- Touch targets are at least 44 px on mobile.
- The fictional-brand notice is in the footer.
- Prices follow the format `₱186,000`.
- The booking button is reachable in one click from every page.
- Images look like real photography of plausible rooms and products. No real people's likenesses and no real brand logos.

## Imagery

Images may be AI-generated. Until an imagery direction is chosen, placeholder images are acceptable in round 1 if they match the intended crop, light, and tone. Each project in `docs/content/projects.md` has image notes. Propose the imagery direction as part of each visual direction.

## Where outputs go

- `design/round-1-directions/`
- `design/round-2-templates/`
- `docs/design/visual-system.md`

Commit each round on a branch and open a pull request, as `AGENTS.md` describes.

## Known gaps

Invented names and prices are not yet checked against real businesses. See `docs/decisions.md`. This does not block design work. Use the seed content as written.

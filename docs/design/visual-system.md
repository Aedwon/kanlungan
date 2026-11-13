# Visual system

Status: **Locked by Aedwon** on 2026-11-13.

Aedwon chose direction **D** in round 1: the colors and imagery of direction A (Shaded Room), the layout of direction B (Lamplight), and Newsreader typography. Keep it exactly as shown. Do not adjust type, color, spacing, layout, or motion during later work. If something seems wrong, raise it and wait for his answer.

## Reference

- Templates (round 2): `design/round-2-templates/`, every page on desktop and mobile, with the header states and the component library (`T-components.dc.html`).
- Machine-readable tokens: `design/tokens/tokens.json` (W3C design tokens format).

The rendered artboards are the source of truth. This file records the tokens they use. If the two disagree, the artboards win. Raise the conflict.

- `design/round-1-directions/D-spec.dc.html`: token sheet
- `design/round-1-directions/D-home-desktop.dc.html`, `D-home-mobile.dc.html`: Home sections 1 to 6
- `design/round-1-directions/D-product-desktop.dc.html`: Silong Sofa product page
- Live canvas: https://claude.ai/artifact/QKQZZB7YghP4tLUDWLCyRD (row D)

Rows A, B, C, and D2 on the canvas were not chosen. Do not use them as a reference.

## Character

Light, warm, and calm. Full-bleed, cinematic layout in a daylight palette. The studio pages read as editorial. The shop interface stays quiet so products lead.

## Typography

- **Display:** Newsreader, weight 300, and 300 italic for project names
- **Body and labels:** Hanken Grotesk, weights 400 and 500

Type scale "Snap", approved by Aedwon on 2026-11-14. Reference: `design/system-refinement/DS-type.dc.html`, Option 1.

| Token | Desktop | Mobile | Line height | Tracking | Family and weight | Used for |
|---|---|---|---|---|---|---|
| type.display | 112 | 52 | 1.0 | -0.02em | Newsreader 300 | Hero heading |
| type.h1 | 56 | 36 | 1.05 | -0.02em | Newsreader 300 | Section headings, product name |
| type.h2 | 44 | 30 | 1.15 | -0.015em | Newsreader 300 | Statement, closing heading |
| type.h3 | 30 | 24 | 1.2 | 0 | Newsreader 300 | Price, project names (italic) |
| type.h4 | 24 | 20 | 1.3 | 0 | Newsreader 400 | Service titles, subsections |
| type.title | 20 | 18 | 1.3 | 0 | Newsreader 400 | Product card name, collection name |
| type.body | 17 | 17 | 1.6 | 0 | Hanken Grotesk 400 | Running text |
| type.ui | 15 | 15 | 1.4 | 0 | Hanken Grotesk 500 | Buttons, navigation, options |
| type.small | 14 | 14 | 1.5 | 0 | Hanken Grotesk 400 | Meta, availability, footer |
| type.label | 12 | 12 | 1.4 | 0.08em | Hanken Grotesk 500 | Labels, captions |

Use no other sizes. One exception: **type.figure**, Newsreader 300 at 88px desktop, line height 1.1, tracking -0.02em, for the large "From" price in the service panels and service page. On mobile it uses type.h1.

Labels are sentence case. Never use uppercase.

## Color

| Role | Hex |
|---|---|
| Background | `#F2ECE3` |
| Surface (raised panels, product image ground) | `#E8DFD2` |
| Text | `#2E211A` |
| Muted text | `#6A584A` |
| Accent (clay) | `#8E4A2C` |
| Line | `#D3C4B1` |
| Control border (unselected options) | `#6A584A` |
| Deep panel (footer) | `#3A2A20`, with `#F2ECE3` text |
| Footer button | `#F2ECE3` fill, `#2E211A` text (approved 2026-11-14, replaces clay for contrast) |
| Light text on clay and on images | `#F7F2EA` |

Only the footer and text over images are dark. Clay is the primary button fill and is used for small accents. Do not add more accents.

## Imagery

- **Crop:** full-bleed 21:9 and 16:9 for rooms, 3:4 for projects, 1:1 for products
- **Light:** shaded daylight under deep eaves, with a bright, pale opening band
- **Color grade:** warm umber floors, olive-green foliage, low contrast, lifted blacks
- **Text over images:** a warm umber scrim (based on `#2E211A`) rises from the bottom edge, so `#F7F2EA` text passes 4.5:1
- **Exception:** Tanaw Residence is shot at dusk, in the same warm grade

## Components

- **Primary button:** clay fill, `#F7F2EA` text, radius 2px, Hanken Grotesk 500 at 15px, padding 18px 30px. Hover `#733A22`. Focus: 2px `#2E211A` outline, offset 3px.
- **Footer button:** `#F2ECE3` fill, `#2E211A` text. Hover `#E8DFD2`.
- **Current page in navigation:** a thin underline under the nav item.
- **Secondary button on images:** 1px `#F7F2EA` outline, transparent fill, same shape
- **Text link:** text followed by "→". The arrow shifts 4px on hover.
- **Product card:** a 1:1 image on surface, then the name in Newsreader 400 at type.title (approved 2026-11-14), the maker in muted text, the price, and a small sentence-case availability line in clay
- **Option swatches:** square with 2px radius. The selected swatch has a 1px clay ring set 4px off it.

## Layout

Status: **Locked by Aedwon** on 2026-11-14. The Home layout combines sections he picked from the layout options round. Reference: `design/round-2-templates/T-home-desktop.dc.html` and `T-home-mobile.dc.html` (sections 1 to 9). The `design/combined/M-home` files and the earlier direction D Home are superseded.

| Home section | Source | Behavior |
|---|---|---|
| Header and hero | "Clean threshold" (`design/combined/Hero-options.dc.html`) | Heading at type.display on limewash, left. A framed Lilim House window on the right grows to full bleed on scroll, and the text turns light where the window passes. The header booking button hides while the hero button shows. |
| Statement | Layout 3 | The statement stays pinned on the left while three tall images scroll past on the right. No shadow stripes. |
| Recent projects | Layout 3 | Full-width project cards stack and slide over each other as you scroll. |
| Two ways to work with us | Layout 1 | Two tall panels. A room image is revealed from the bottom on hover. Large "From" price, a short qualifier under it. |
| Shop introduction and collections | Layout 2 | Three collection images of different sizes, placed like a plan. No grid lines. Descriptions show on hover. |
| From the shop | Layout 1 | One wide Lilim House room image with six numbered pins on the featured pieces, plus a matching numbered list. |
| Footer | Layout 1 | Deep panel, light button. |

Mobile: single column, the same order, with no hover dependence. Touch targets are at least 44px.

### Copy rules

Aedwon set these on 2026-11-14. They apply to every page.

- No eyebrows: no small labels above headings.
- No numbered sections or indices. Numbers are only for real lists, such as the shop-the-room pins.
- No redundancy: never repeat on screen what is already there, including a second identical button or link.
- No hint text such as "Scroll", "Drag", or "Hover to see".
- Progressive disclosure: secondary details (maker, availability on cards, collection descriptions, image notes) show on hover or focus on desktop. On mobile, show what a buyer needs, such as price and lead time.

## Spacing and radii

- **Radius:** 2px on every element. No pills and no circles.
- **Spacing scale:** 4, 8, 16, 24, 32, 48, 64, 96, 128, 160px
- **Desktop:** page gutter 64px. Sections are 120px or more apart.

## Motion

- **Scroll choreography:** uses CSS scroll-driven animation inside `@supports (animation-timeline: view())`. At rest, without support, every page shows its finished state.
- **Ambient light drift:** the logo mark and any light band drift `translateX` over 12s, ease-in-out, infinite, alternating. Transform only.
- **Product card hover:** the image brightness rises to 1.05 over 0.4s. The maker and availability lines appear (progressive disclosure). "Sold out." stays visible at rest. On mobile, cards show name, price, and lead time.
- **Drawers and panels:** open with ease.enter, cubic-bezier(0.22, 0.61, 0.36, 1), 400ms. Close with ease.exit, cubic-bezier(0.55, 0, 1, 0.45), 200ms. Overlay scrim rgba(46, 33, 26, 0.4).
- **Links:** the arrow shifts over 0.25s. Button color changes over 0.2s.
- Never fade page content in from opacity 0.
- Under `prefers-reduced-motion: reduce`, disable all of the above.

## Logo

Status: **Locked by Aedwon** on 2026-11-14. Option "Afternoon" from logo round 2.

Reference: `design/identity/Logo-fable.dc.html`, section "Afternoon". The board is the source of truth. Keep the mark, proportions, colors, and motion exactly as shown.

- **Idea:** a square room and the light that crosses it. Window light runs down the wall, bends at the floor, and warms the wood.
- **Mark:** a square tile on a 100-unit grid, radius about 2% (2px at 104px). The tile is `#3A2A20`, and the floor below the 46-unit line is darkened 20%. Two window panes in `#F2ECE3` (light) sit above the floor line. Their light falls onto the floor as two slanted clay `#8E4A2C` shapes.
- **Wordmark:** "Kanlungan" in Newsreader 300, letter spacing -0.015em, set to the right of the tile. Text is `#2E211A` on light and `#F2ECE3` on the deep panel.
- **Small sizes:** at 32px the tile keeps two panes. At 16px it keeps one pane.
- **States:** the mark has morning, noon, and afternoon light states (see the board). Afternoon is the default.
- **Motion:** the light drifts horizontally, 12s, ease-in-out, alternating, transform only, matching the hero's moving shade. Disabled under `prefers-reduced-motion`.

## Not yet decided

- Final photography. The mockups use labeled placeholders that follow the imagery rules above.

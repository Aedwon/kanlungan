# Visual system

Status: **Locked by Aedwon** on 2026-11-13.

Aedwon chose direction **D** in round 1: the colors and imagery of direction A (Shaded Room), the layout of direction B (Lamplight), and Newsreader typography. Keep it exactly as shown. Do not adjust type, color, spacing, layout, or motion during later work. If something seems wrong, raise it and wait for his answer.

## Reference

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

Use no other sizes.

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

- **Primary button:** clay fill, `#F7F2EA` text, radius 2px, Hanken Grotesk 500 at 15px, padding 18px 30px
- **Secondary button on images:** 1px `#F7F2EA` outline, transparent fill, same shape
- **Text link:** text followed by "→". The arrow shifts 4px on hover.
- **Product card:** a 1:1 image on surface, then the name in Newsreader 400 at type.title (approved 2026-11-14), the maker in muted text, the price, and a small sentence-case availability line in clay
- **Option swatches:** square with 2px radius. The selected swatch has a 1px clay ring set 4px off it.

## Layout

- Hero: a full-bleed image with the heading at the bottom left over it. The body text and buttons sit at the bottom right.
- Recent projects: three tall 3:4 images, edge to edge, with labels over the images
- Services: two raised surface panels side by side
- Shop introduction: calmer than the studio sections, opened by a thin rule
- Collections: three landscape images
- Featured pieces: three columns, two rows
- Mobile: single column. Products sit in two columns. Touch targets are at least 44px.

## Spacing and radii

- **Radius:** 2px on every element. No pills and no circles.
- **Spacing scale:** 4, 8, 16, 24, 32, 48, 64, 96, 128, 160px
- **Desktop:** page gutter 64px. Sections are 120px or more apart.

## Motion

- **Hero, "moving shade":** a soft diagonal light band drifts across the hero image. It uses `translateX` from -14% to 14% over 12s, ease-in-out, infinite, alternating. It animates transform only.
- **Product card hover:** the image brightness rises to 1.05 over 0.4s. The availability line slides up 0.3s to reveal "View piece →".
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

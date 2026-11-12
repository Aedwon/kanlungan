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

| Role | Family | Size / line height | Weight | Tracking |
|---|---|---|---|---|
| H1 (hero) | Newsreader | 112px / 1.0 | 300 | -0.02em |
| H2 | Newsreader | 56px / 1.05 | 300 | -0.02em |
| H3 | Newsreader | 24px / 1.3 | 400 | 0 |
| Project name | Newsreader italic | 28px / 1.25 | 300 | 0 |
| Body | Hanken Grotesk | 17px / 1.6 | 400 | 0 |
| Small | Hanken Grotesk | 14px / 1.5 | 400 | 0 |
| Label | Hanken Grotesk | 12px / 1.4 | 500 | 0.08em |

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
- **Product card:** a 1:1 image on surface, then the name at 18px, the maker in muted text, the price, and a small sentence-case availability line in clay
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

## Not yet decided

- Logo or wordmark. The mockups use "Kanlungan" set in Newsreader as a stand-in.
- Final photography. The mockups use labeled placeholders that follow the imagery rules above.

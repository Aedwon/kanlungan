# Decisions and open questions

Decisions locked by Aedwon before 2026-11-13 are recorded in the Git history and marked "Locked by Aedwon" in `docs/concept/`.

This file lists what an agent decided on delegation, and what still needs Aedwon's answer.

## Decided on delegation

On 2026-11-13 Aedwon asked the agent to decide every remaining concept question so design work could start. Each item below is the working answer. Aedwon may revise any of them.

| Decision | Answer | File |
|---|---|---|
| Name of the design-only service | Interior Design Direction, now final | `docs/concept/services.md` |
| Tagline | Spaces to come home to. | `docs/concept/brand.md` |
| Audience | Homeowners, hospitality owners, design-led shoppers | `docs/concept/brand.md` |
| Fictional business facts | Founded 2019, Makati showroom by appointment, team of 12, no named founder | `docs/concept/brand.md` |
| Voice | Calm, plain, specific, warm | `docs/content/copy.md` |
| Service process | Six steps for furnishing, five for design direction | `docs/concept/services.md` |
| Service pricing model | Furnishing from ₱1,500,000 including design fee. Design direction from ₱2,500 per sqm, minimum ₱150,000. Free 30-minute discovery call. | `docs/concept/services.md` |
| Service area | Furnishing across the Philippines. Design direction anywhere. | `docs/concept/services.md` |
| Availability model | Mixed: furniture and Originals made to order, small items in stock | `docs/concept/shop.md` |
| Price positioning | Premium, in pesos, VAT included, no discounts ever | `docs/concept/shop.md` |
| Variants | At most two option types per product. No free-form customization. | `docs/concept/shop.md` |
| Shop and studio links | Shop the project, Seen in, furnishing prompt, maker pages. No trade or loyalty program. | `docs/concept/shop.md` |
| Delivery and returns | Philippines only. 14-day returns on in-stock items only. | `docs/concept/shop.md` |
| Conversion goals | Primary: discovery call booking. Secondary: shop purchase. Supporting: mailing list. | `docs/concept/conversion.md` |
| Booking form | Eleven fields, with budget range required | `docs/concept/conversion.md` |
| Checkout demo behavior | Full guest checkout interface. No real payment. Notice on payment and confirmation. | `docs/concept/conversion.md` |
| Excluded features | No accounts, reviews, wishlists, live chat, pop-ups, or discount codes | `docs/concept/conversion.md` |
| Site map and navigation | Four main links plus one booking button. No journal. | `docs/concept/site-architecture.md` |
| Page structures | Section order for every template, including Home | `docs/concept/site-architecture.md` |
| Project page structure | Nine sections, including Shop the project | `docs/concept/site-architecture.md` |
| Seed makers | Eight Philippine, two international | `docs/content/makers.md` |
| Seed catalog | 32 products, seven collections | `docs/content/catalog.md` |
| Seed projects | Five projects: three residential, two hospitality. Pahinga Villas added 2026-11-13. | `docs/content/projects.md` |
| Steps 5 and 6 run together | Visual system is chosen through rendered directions on real pages | `README.md` |
| 2026-11-14: Remaining site copy (FAQs, help, about, studio, checkout, captions) | Written for every page so designers can mock up without placeholder text | `docs/content/copy.md`, `docs/content/projects.md` |

## Locked by Aedwon after delegation

| Date | Decision | File |
|---|---|---|
| 2026-11-13 | Add a **Beds** category (bed frames, daybeds), sold without mattresses | `docs/concept/shop.md` |
| 2026-11-13 | Visual direction D: Shaded Room colors and imagery, Lamplight layout, Newsreader type | `docs/design/visual-system.md` |
| 2026-11-14 | Logo: "Afternoon" (room tile with window light, beside a Newsreader wordmark) | `docs/design/visual-system.md` |
| 2026-11-14 | Type scale "Snap" (10 sizes); light footer button; Newsreader product card names | `docs/design/visual-system.md` |

## Open questions for Aedwon

None.

## Before public release

These checks do not block design work. Aedwon delegated the call on 2026-11-13, and the agent deferred both to the point just before the site goes public.

1. **Check fictional names.** No invented maker, artist, product, or project name has been checked against real businesses, products, or people. Check each one and rename any that collide. Names may still change during design, so checking now would be wasted work.
2. **Check pricing realism.** Service fees and product prices are plausible estimates, not researched figures. Compare them with real Philippine studios and shops.

## Deliberately not decided

These wait for later steps in the planning sequence.

- Final photography: later in the design work
- Tech stack, e-commerce platform, and how the demo payment works: step 7

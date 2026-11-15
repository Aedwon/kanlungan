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
| Seed catalog | 36 products, seven collections | `docs/content/catalog.md` |
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
| 2026-11-14 | Image briefs for AI-generated photography: 135 shots, 32 product consistency sheets (written by Codex, reviewed by the lead) | `docs/content/image-briefs.md` |
| 2026-11-14 | Commerce: headless Shopify dev store (free) with the site's own demo checkout; no Shopify hosted checkout | `docs/concept/conversion.md` |
| 2026-11-14 | Stack: Next.js on Vercel's free Hobby tier, reading the Shopify Storefront API | `README.md` |

### Approved catalog and material range, 2026-11-14

Advisor recommendation approved by Aedwon. The detailed approved decision supersedes earlier catalog and image-brief counts.

| Date | Decision | File |
|---|---|---|
| 2026-11-14 | Hardwood range: Plantation mahogany and acacia only, in natural, bleached, or ebonized finishes; no molave or narra. Kiso remains hinoki. | `docs/concept/shop.md` |
| 2026-11-14 | Catalog expansion: Add Yakap Sofa, Unan Bed, Salo Dining Table, and Bakal Side Table, with the approved prices, dimensions, origins, availability, and variants. Seed total: 36 products. | `docs/content/catalog.md` |
| 2026-11-14 | Hain, Hapag, and Himlay finishes: Mahogany, Ebonized mahogany, Acacia, Bleached acacia; natural mahogany default, prices unchanged. | `docs/content/catalog.md` |
| 2026-11-14 | Sulok finishes: Natural, Bleached, Ebonized on acacia. | `docs/content/catalog.md` |
| 2026-11-14 | Baul material and finishes: Acacia replaces mahogany; Natural, Bleached, Ebonized. | `docs/content/catalog.md` |
| 2026-11-14 | Pasilyo finish: Ebonized plantation mahogany with natural cane, no options. | `docs/content/catalog.md` |
| 2026-11-14 | Salamin frame: Bleached acacia replaces mahogany. | `docs/content/catalog.md` |
| 2026-11-14 | Estante materials and options: Blackened steel frame, acacia shelves, brass fittings; Natural or Bleached shelves, price unchanged. | `docs/content/catalog.md` |
| 2026-11-14 | Preserved products and imagery: Silong, Aparador, Batis, Bangko, Tuntungan, Kiso, Dapithapon, Duyan, Lilim House, and approved photographs stay unchanged. | `docs/content/catalog.md` |
| 2026-11-14 | Tanaw material read and sourcing: Bleached acacia floors and joinery; sand two-seat Yakap, Ø110 Salo with four bleached Hain chairs, queen sand Unan, Bakal bedside, bleached Baul and Sulok, bleached Estante shelves. Black comes only from steel. | `docs/content/projects.md` |
| 2026-11-14 | Dalampasigan material read: Natural oiled honey acacia for Himlay, Hain, and Hapag 260; architecture, Bangko, and Tuntungan unchanged. | `docs/content/projects.md` |
| 2026-11-14 | Pahinga material read: Ebonized mahogany architecture and Himlay, ebonized acacia Sulok, honey rattan, white linen; honed cream limestone replaces interior mahogany floorboards. | `docs/content/projects.md` |
| 2026-11-14 | Hardin later sourcing: Keep clay Silong and hinoki Kiso; ebonized Pasilyo, oat queen Unan bedroom render, and Bakal in later stages. Mix the woods on purpose. | `docs/content/projects.md` |
| 2026-11-14 | Collection membership: Add the four new pieces to the approved room, Quiet Living, and Stone and Clay collections; seven collections remain. | `docs/content/catalog.md` |
| 2026-11-14 | Shop featured sets: Originals: Silong, Yakap, Hapag, Unan, Sinag, Lambot. New pieces replace Bato and Pasilyo with Salo and Bakal. Home featured pieces unchanged. | `docs/content/catalog.md` |
| 2026-11-14 | Maker stories: Tanso also makes small metal tables; Marmol casts marble offcuts into terrazzo; Kanlungan carries one Okabe piece. | `docs/content/makers.md` |
| 2026-11-14 | Pale floor imagery exception: Tanaw bleached acacia floors and Pahinga cream limestone floors may be pale instead of warm umber. | `docs/design/visual-system.md` |
| 2026-11-14 | Photography coverage after catalog expansion: 143 canonical shot entries and 36 product consistency sheets; new featured pieces receive studio and detail briefs, existing approved photos unchanged. | `docs/content/image-briefs.md` |

### Approved project photography signatures, 2026-11-15

Advisor recommendation approved by Aedwon. The studio is recognized by what it puts in a room and how the photograph is disciplined. Each project is recognized by its shell, its light, and at most one color. At thumbnail size, any single frame must be assignable to its project without a caption.

| Date | Change | File |
|---|---|---|
| 2026-11-15 | Restrict the house look to Lilim, the Home hero, and scenes belonging to no project; replace the earlier Tanaw dusk and pale-floor exceptions with project-owned photography. | `docs/design/visual-system.md` |
| 2026-11-15 | Keep true material color, matte surfaces, empty rooms, a level camera, one natural exposure, and at most one dyed textile color in every photograph; retain crops, people rules, and the negative list. | `docs/content/image-briefs.md` |
| 2026-11-15 | Every scene bible owns a Signature section; add the five-project thumbnail identification check. | `docs/content/scene-bibles/README.md` |
| 2026-11-15 | Lilim keeps its approved house look, shell, oat textiles, sparse styling, and existing cameras unchanged. | `docs/content/scene-bibles/lilim-house.md` |
| 2026-11-15 | Tanaw uses gray-white matte plaster, bleached acacia, sand textiles and Natural Hablon, low-key 4000 K blue hour, amber lamp pools under a third of the frame, and true blacks. | `docs/content/scene-bibles/tanaw-residence.md` |
| 2026-11-15 | Dalampasigan uses chalk-white limewash, seamless pale sand-gray burnished cement, white cotton, hard sun at 9:00 am in breakfast/corridor and 3:00 pm in west-facing spaces, high-key 5500 K, lamps off. | `docs/content/scene-bibles/dalampasigan-inn.md` |
| 2026-11-15 | Assign Kumot Indigo to Dalampasigan room A (hero, g04, g05), Kumot Rust to room B (g06); never share a frame. | `docs/content/scene-bibles/dalampasigan-inn.md` |
| 2026-11-15 | Pahinga replaces cane ceiling panels with ebonized mahogany boards and adds the same boards to the headboard wall; other walls chalk-white, white textiles, dark-interior exposure, neutral green bounce, dusk only C7/C10. | `docs/content/scene-bibles/pahinga-villas.md` |
| 2026-11-15 | Hardin uses matte brick-bond mahogany parquet, moss-gray living/entry walls, off-white bedroom, white ceiling, soft neutral 4:00 pm light after rain, and Luad as the one warm point; staged furnishings stay fixed. | `docs/content/scene-bibles/hardin-apartment.md` |
| 2026-11-15 | Apply Tanaw's 110 cm cameras, 35mm anchors and 50mm vignettes at fixed positions/headings; record every lens/height change and the limit on square-on framing. | `docs/content/scene-bibles/tanaw-residence.md` |
| 2026-11-15 | Apply Dalampasigan's 35mm cameras, 150 cm shared/exterior and 115 cm guest-room heights; room A and B keep the same translated view; fixed oblique headings limit square-on framing. | `docs/content/scene-bibles/dalampasigan-inn.md` |
| 2026-11-15 | Apply Pahinga's 35mm cameras at 95 to 100 cm without changing positions or headings; retain mapped exterior and wall-detail subjects. | `docs/content/scene-bibles/pahinga-villas.md` |
| 2026-11-15 | Apply Hardin's 50mm, 120 cm room cameras at fixed positions/headings; keep studio-table heights and pitches, recording the limit on true overhead book views. | `docs/content/scene-bibles/hardin-apartment.md` |
| 2026-11-15 | Rewrite all 40 non-Lilim project prompts to their own signatures and updated camera measurements. Lilim and existing product shot entries remain unchanged. | `docs/content/image-briefs.md` |
| 2026-11-15 | Add Kumot Indigo, Kumot Rust, Tabing White, and Two-seat Clay Silong studio references on the same #E8DFD2 ground; 147 canonical shots, 36 product consistency sheets. Catalog variants remain unchanged. | `docs/content/image-briefs.md` |
| 2026-11-15 | Update only the four affected project material palettes to agree with the approved shell changes. | `docs/content/projects.md` |
| 2026-11-15 | Update plan text labels for project surfaces, textile colors, and light; regenerate the four SVG maps from the existing geometry and updated bible cameras. | `design/photography/plans/draw_plans.py` |

## Open questions for Aedwon

None.

## Before public release

These checks do not block design work. Aedwon delegated the call on 2026-11-13, and the agent deferred both to the point just before the site goes public.

1. **Check fictional names.** No invented maker, artist, product, or project name has been checked against real businesses, products, or people. Check each one and rename any that collide. Names may still change during design, so checking now would be wasted work.
2. **Check pricing realism.** Service fees and product prices are plausible estimates, not researched figures. Compare them with real Philippine studios and shops.

## Deliberately not decided

These wait for later steps in the planning sequence.

- Final photography: later in the design work

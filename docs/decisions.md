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
| 2026-11-16 | Project imagery shows a transformation: each case study pairs a plain as-handed-over shell with the furnished result from the same camera, for a drag-bar before and after. Approach and Fable's recommendations accepted; details in `docs/build/consults/2026-11-16-ground-up-rethink.md`. | `docs/build/consults/` |
| 2026-11-16 | Lilim direction: Shade and Stone (round 3 test B). Warmth comes only from light sources such as lamps and low sun; areas away from them stay neutral to cool. The palette answers the site: a green-surrounded site takes a restrained, near-colorless interior; a site with little green outside (a condo) may take a warmer, collected palette. | `design/round-3-interiors/` |

### Interiors rethink, 2026-11-16

Written by Fable 5.2 as step 2 of the rethink Aedwon accepted. One line per change.

| Date | Decision | Status | File |
|---|---|---|---|
| 2026-11-16 | The studio's hand is constant: premium and edited, a dark and pale composition, one leading piece, and layered, motivated light. The palette and the sourcing mix change by site. | Locked by Aedwon | `docs/design/studio-hand.md` |
| 2026-11-16 | Calibration before the rule is fixed: the palette and sourcing calls for Tanaw, Dalampasigan, Pahinga, and Hardin stay provisional until Aedwon has judged four more before-and-after cases. Lilim stays Shade and Stone. | Locked by Aedwon | `docs/build/consults/2026-11-16-calibration-set.md` |
| 2026-11-16 | Signature moves and ten rules for the room, each with a test by eye | Decided on delegation | `docs/design/studio-hand.md` |
| 2026-11-16 | Provisional calls: Tanaw and Hardin Collected, Pahinga Shade and Stone, Dalampasigan restrained guest rooms with Collected shared rooms | Decided on delegation, provisional | `docs/design/studio-hand.md` |
| 2026-11-16 | Photography rules replace "Consistency system" and "Global style": ten rules, motivated light, color from the room and the site, no grade | Decided on delegation; the two principles are locked | `docs/content/image-briefs.md` |
| 2026-11-16 | Lamps may be lit from late afternoon, not only at dusk, as in the image Aedwon picked. One global correction toward neutral is allowed; a correction that warms a frame is not. | Decided on delegation | `docs/content/image-briefs.md` |
| 2026-11-16 | Pairing method: before first, after as an edit of it, registration, and eight checks including a neutral patch check for warm drift | Decided on delegation | `docs/content/image-briefs.md` |
| 2026-11-16 | Imagery section rewritten. Removed: shaded daylight as the light for all imagery, the warm low-contrast grade, the Tanaw dusk exception, and the pale floor exception. | Reopened by Aedwon; wording decided on delegation | `docs/design/visual-system.md` |
| 2026-11-16 | Project design files replace scene bibles, one project at a time. The Lilim House bible is superseded. The old bibles are not edited. | Decided on delegation | `docs/content/project-designs/README.md` |
| 2026-11-16 | Lilim shell: plain contractor finish. The view faces east, and the great room is about 5.5 by 15 m, both read from the approved before. The old plan is replaced. | Decided on delegation | `docs/content/project-designs/lilim-house.md` |
| 2026-11-16 | Lilim design under Shade and Stone: concept, plan, palette, lighting, sourcing, styling, and a shot list of three pairs and nine story frames | Decided on delegation; rendered frames pending Aedwon's review | `docs/content/project-designs/lilim-house.md` |
| 2026-11-16 | Lilim custom and found pieces: a stone table by Marmol Atelier, a commissioned work by Ines Dalisay, a woven panel by Tikog Loom, an old sideboard, and the family's jar and chest. No catalog product is added and no new name is invented. | Decided on delegation | `docs/content/project-designs/lilim-house.md` |
| 2026-11-16 | Lilim public copy rewritten: brief, approach, material palette, 14 shop pieces, 12 provisional captions, a duration, and a handover line. Batis moves to the terrace and Aparador to the children's room. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Product sheets: Lilim uses the Silong in charcoal linen and the Hapag, Hain, and Himlay in ebonized mahogany. All are existing catalog options. | Decided on delegation | `docs/content/image-briefs.md` |
| 2026-11-16 | The eleven old Lilim shot entries are superseded and kept only as a record of where each image is used | Decided on delegation | `docs/content/image-briefs.md` |

### Round 4 calibration, 2026-11-16

Aedwon judged four more rooms, each with two ruled afters and one unruled after. Images: `design/round-4-calibration/`. This table supersedes rows above where they conflict: the two named directions, the site rule for palettes, the provisional calls for four projects, the rule that ceiling lights stay off, and the Lilim shot list of three pairs.

| Date | Decision | Status | File |
|---|---|---|---|
| 2026-11-16 | Starting images picked: condo C (unruled), beach inn A (quiet, white and honey wood), villa B (warm woods and deep color), apartment A (warm, small, personal) | Locked by Aedwon | `docs/design/studio-hand.md` |
| 2026-11-16 | Requirements from his comments: screens and other real-life things in the rooms; evening rooms lit; outlets the same before and after; no curtain under an air conditioner; a case study shows a whole home, with beds and a kitchen; the camera does not repeat one recipe; lamp shapes do not repeat across homes | Locked by Aedwon | `docs/design/studio-hand.md`, `docs/content/image-briefs.md` |
| 2026-11-16 | Named directions removed. The constant is five standards (truthful light, edited and lived in, one leading piece, proportion, quality) and a point of view. The design is made for each room. This replaces "the palette answers the site" and the five-part constant hand, both locked earlier the same day. | Decided on delegation; needs Aedwon's confirmation | `docs/design/studio-hand.md` |
| 2026-11-16 | Motivated light stands. Added: a room is lit as lived. Ceiling lights get warm bulbs and may be on low in the evening. Evening frames are exposed as lit rooms. | Motivated light locked; the addition decided on delegation | `docs/design/studio-hand.md`, `docs/content/image-briefs.md` |
| 2026-11-16 | Realism rules: real things have a place, fixed services do not move, everything must physically work, finished means lived in | Decided on delegation | `docs/design/studio-hand.md` |
| 2026-11-16 | Whole-home coverage: seven kinds of room in every case study. 18 pairs and about 55 furnished frames across five projects. | Decided on delegation; counts for four projects provisional | `docs/design/studio-hand.md` |
| 2026-11-16 | No two homes alike: no default kit, no repeated hero objects, lamp shapes, art, vessels, or camera recipes across projects, unless Aedwon declares a signature. A portfolio register is filled before any design. A shop piece shows in at most two projects. | Decided on delegation | `docs/design/studio-hand.md` |
| 2026-11-16 | Photography rules revised to 14 rules, with camera variety, lit as lived, and real things in the frame. A services check added to the pairing method. Product references are attached only for pieces in the frame. | Decided on delegation | `docs/content/image-briefs.md` |
| 2026-11-16 | Review before Aedwon sees an image: a nine-part list the lead runs on every image and set | Decided on delegation | `docs/content/image-briefs.md` |
| 2026-11-16 | Imagery section revised again to match | Decided on delegation | `docs/design/visual-system.md` |
| 2026-11-16 | Lilim House: the fourth bedroom is the family room, with the screen and the books. The great room has no screen. Kitchen, main bath, and entry added. Five pairs and nine story frames. Each lamp shape appears once. Scope reads "Living, dining, kitchen, family room, three bedrooms, covered terrace." | Decided on delegation; rendered frames pending Aedwon's review | `docs/content/project-designs/lilim-house.md`, `docs/content/projects.md` |
| 2026-11-16 | Design files gain two sections: rooms and coverage, and real things and fixed services | Decided on delegation | `docs/content/project-designs/README.md` |

## Open questions for Aedwon

1. **Confirm the revised hand.** He locked "the palette answers the site" and a five-part constant hand on 2026-11-16. His round 4 picks did not follow the site rule, so both are replaced by standards, a point of view, and a design made for each room. Recommendation: confirm. Cost of not confirming: the villa he picked breaks the rule as written.
2. **A screen in the Lilim great room.** Options: none, with the screen in the family room (recommended, and it keeps the image he picked), or one on the sideboard in the middle of the room (costs a dark rectangle in the hero).
3. **A locked sentence now contradicts the Lilim redesign.** `docs/concept/shop.md`, Material range, says "Silong Sofa and Lilim House stay unchanged. Approved photographs stay unchanged." Recommendation: remove it and add that the two-wood range limits shop products only. Cost: one sentence. Not edited yet.
4. **Home featured pieces.** The Aparador Cabinet is no longer in the Lilim great room, so the Home "From the shop" image cannot pin it. Options: swap it for the Sinag Floor Lamp (recommended, one line in the catalog and the site data), or put the Aparador back in the great room (costs the restraint of the picked image). Needed before the pinned-room frame is made.
5. **Signatures.** No object is declared a studio signature, so nothing may repeat across projects. He may declare one.

Pending his review from rendered images, not yet questions: the Lilim hero after, how full the family room should be, the evening light level, the composition of the commissioned work, the pendant at catalog size, the old sideboard, the woven panel, and which pair is the phone hero. Each is marked in the Lilim design file.

## Before public release

These checks do not block design work. Aedwon delegated the call on 2026-11-13, and the agent deferred both to the point just before the site goes public.

1. **Check fictional names.** No invented maker, artist, product, or project name has been checked against real businesses, products, or people. Check each one and rename any that collide. Names may still change during design, so checking now would be wasted work.
2. **Check pricing realism.** Service fees and product prices are plausible estimates, not researched figures. Compare them with real Philippine studios and shops.

## Deliberately not decided

These wait for later steps in the planning sequence.

- Final photography: later in the design work

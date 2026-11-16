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
| 2026-11-16 | Lilim design under Shade and Stone: concept, plan, palette, lighting, sourcing, styling, and a shot list of three pairs and nine story frames | Decided on delegation; rendered frames approved by Aedwon 2026-11-16 | `docs/content/project-designs/lilim-house.md` |
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
| 2026-11-16 | Lilim House: the fourth bedroom is the family room, with the screen and the books. The great room has no screen. Kitchen, main bath, and entry added. Five pairs and nine story frames. Each lamp shape appears once. Scope reads "Living, dining, kitchen, family room, three bedrooms, covered terrace." | Decided on delegation; rendered frames approved by Aedwon 2026-11-16 | `docs/content/project-designs/lilim-house.md`, `docs/content/projects.md` |
| 2026-11-16 | Design files gain two sections: rooms and coverage, and real things and fixed services | Decided on delegation | `docs/content/project-designs/README.md` |

### Round 5 calibration and Lilim gate 1, 2026-11-16

Aedwon judged five more rooms, each with three afters at different levels of character. Images: `design/round-5-calibration/`.

| Date | Decision | Status | File |
|---|---|---|---|
| 2026-11-16 | Round 5 picks: kitchen B (layered), bedroom A or C, bath B (layered), family room A (quiet, "could use some wall art"), dining B (layered) | Locked by Aedwon | `docs/design/studio-hand.md` |
| 2026-11-16 | No screen in the Lilim great room | Locked by Aedwon | `docs/content/project-designs/lilim-house.md` |
| 2026-11-16 | His note that every after got warmer is confirmed by measurement. A shell color correction is part of the pipeline, and prompts never ask for warmth. | Locked by Aedwon (the fault); the method decided on delegation | `docs/content/image-briefs.md` |
| 2026-11-16 | The point of view gains three lines: layered and lived in with a studio's hand; character, never overbearing; no bare room. Rooms for rest are the calmest. | Decided on delegation, from his picks | `docs/design/studio-hand.md` |
| 2026-11-16 | The camera is set from a line drawing and described by the edges of the frame, because words did not hold it in round 5. Small rooms may use 24mm to 28mm. | Decided on delegation | `docs/content/image-briefs.md` |
| 2026-11-16 | Lilim House is layered: the family's things are out, each room has something on a wall, pattern and color come in small doses. The family room gains six framed children's drawings and a low daybed under the window. | Decided on delegation; rendered frames approved by Aedwon 2026-11-16 | `docs/content/project-designs/lilim-house.md` |
| 2026-11-16 | Lilim gate 1: eight images in `design/lilim/`. Two living room afters at two levels of layering, and the family room, dining, and kitchen pairs. Three line drawings made for the new cameras. No boards at this gate. | Decided on delegation | `docs/build/consults/2026-11-16-lilim-gate-1.md` |
| 2026-11-16 | The revised studio hand is confirmed: standards, a point of view, and a design made for each room replace "the palette answers the site" and the five-part constant hand. Aedwon confirmed it from the gate 1 images, not the text. | Locked by Aedwon | `docs/design/studio-hand.md` |
| 2026-11-16 | The Lilim living room is the layered level (`lilim-hero-B-layered.png`). | Locked by Aedwon | `docs/content/project-designs/lilim-house.md` |
| 2026-11-16 | Shop Material range: "Silong Sofa and Lilim House stay unchanged" is removed. The two-wood range limits shop products only. | Locked by Aedwon | `docs/concept/shop.md` |
| 2026-11-16 | Home featured pieces: the Sinag Floor Lamp replaces the Aparador Cabinet, which is no longer in the Lilim great room. The site pins change with the new `lilim-shop-room` frame. | Locked by Aedwon | `docs/content/catalog.md` |
| 2026-11-16 | Tanaw Residence has a design file, built from the image Aedwon picked. Concept: a lit room above the city, with the couple's records, books, and pictures in natural mahogany against white walls. Four pairs and seven story frames. | Decided on delegation; rendered frames approved by Aedwon 2026-11-16 | `docs/content/project-designs/tanaw-residence.md` |
| 2026-11-16 | Tanaw living room layout: the screen and a 280 cm record console stand on the left wall, where the only two sockets are. The sofa moves to the right wall and faces the screen. This reverses the picked image. | Decided on delegation; rendered hero approved by Aedwon 2026-11-16 | `docs/content/project-designs/tanaw-residence.md` |
| 2026-11-16 | Tanaw hero camera: the approved round 4 before is kept, although the portfolio register asked for a different recipe. An approved before is not regenerated. The other three projects must not use that recipe. | Decided on delegation | `docs/content/project-designs/tanaw-residence.md` |
| 2026-11-16 | Tanaw shell beyond the approved before: one main room 4.5 by 11.7 m with the developer's kitchen and the front door at its east end, a main bedroom, a windowless main bath with a wall light point, and a study that takes a guest. All glass faces west. No balcony. | Decided on delegation | `docs/content/project-designs/tanaw-residence.md` |
| 2026-11-16 | Tanaw has no outside frame. The unit has no balcony, the city fills the hero, and city exteriors are the frames most likely to look rendered. | Decided on delegation | `docs/content/project-designs/tanaw-residence.md` |
| 2026-11-16 | Tanaw shop list: Yakap Sofa (oat), Estante Shelving, Baul Credenza, Salo Dining Table, Unan Bed (sand), Hablon Cushion, Tanghali, Salamin Floor Mirror, Bato Object, Tala Wall Light. Hain, Bakal, Sulok, Sinag, Luad, and Amihan No. 3 leave it, under the rule that a shop piece shows in at most two projects and no lamp shape repeats. The Tala Wall Light moves to the bath, at an existing wall point. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Tanaw copy: "Bleached acacia floors and joinery," "storage is tall and closed," and "one wood tone, one linen color" are removed. Duration is 14 weeks with 4 days on site. Eleven captions replace ten. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Tanaw images: fourteen prompts in three jobs that can run at the same time. Four line drawings made. | Decided on delegation | `docs/build/consults/2026-11-16-tanaw-gate-1.md` |
| 2026-11-16 | Dalampasigan Inn has a design file, built from the image Aedwon picked. Concept: a plain inn made ready, with white linen, honey acacia, and reed in every room, the sea as the only color where there is sea, and one long table downstairs. Three pairs and seven story frames. | Decided on delegation | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan guest rooms have no screen, by the owners' brief: the rooms face the sea or the garden and guests are out all day. The inn's one screen is in the breakfast room, on a stand at a socket. | Decided on delegation, approved by Aedwon 2026-11-16 | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan lobby and breakfast room are fuller than the guest rooms and lit in the evening. The fans keep the ceiling, so no pendant hangs anywhere. Every tube light stays in place with a soft white tube, and every added lamp stands on something. | Decided on delegation | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan guest room, corrections to the picked image: both left wall sockets stay where the before has them, with the bed in front of the farther one. One curtain track stops at the air conditioner and both panels stack at the left. The clothes rail moves to the left wall, so the right wall socket stays in view. | Decided on delegation, approved by Aedwon 2026-11-16 | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan guest room, changes forced by the portfolio register: a graphite drawing replaces the reed panel over the bed, and a pair of reed lamps replaces the black-stem lamp, because the Lilim main bedroom has a woven panel and that lamp shape. The Habi Wall Piece moves to the lobby. | Decided on delegation, approved by Aedwon 2026-11-16 | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan repeated room: eight sea-side rooms in undyed cotton, four garden-side rooms with the same throw and cushion in indigo. The garden-side frame is generated as an edit of the approved hero, so the two match. | Decided on delegation | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan leading piece: a 420 cm breakfast table in oiled acacia, made for the room in two halves, with Bangko Benches on one side and seven Hain Dining Chairs on the other. It replaces the Hapag Dining Table. | Decided on delegation | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan hero camera: the approved round 4 before is kept, although it is the same recipe as the Tanaw hero. An approved before is not regenerated. The breakfast room pair can lead the page if Aedwon wants the heroes to differ more. | Decided on delegation | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan shell beyond the approved before: a two-storey older inn with eight sea-side and four garden-side rooms, a lobby and a breakfast room on the street side, an upper corridor, and the owners' baths and kitchen. Cream tile, aluminum windows, tube lights, and fans throughout. No beach frame; the exterior is the street front at sunrise. | Decided on delegation | `docs/content/project-designs/dalampasigan-inn.md` |
| 2026-11-16 | Dalampasigan shop list: Himlay Bed (acacia), Tuntungan Stool, Bangko Bench, Banig Rug, Kumot Throw, Hain Dining Chair (acacia), Bilao Tray, Habi Wall Piece. The Hapag Dining Table and the Lenta Pendant leave it. The Lenta repeats the Lilim kitchen pendant, and no pendant can hang under the fans. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Dalampasigan copy: a takeover of an older inn replaces "the owners finished building." The limewash, the serving counter, and the pendant are removed as studio work. Duration is 16 weeks with 9 days on site. Ten captions, in the new gallery order. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Dalampasigan images: twelve prompts in three jobs that can run at the same time. Four line drawings made. | Decided on delegation | `docs/build/consults/2026-11-16-dalampasigan-gate-1.md` |
| 2026-11-16 | Pahinga starting image: the design file follows `pahinga-bedroom-B-collected.png`, which the studio hand records as Aedwon's pick. The dispatch brief named image C. The studio hand wins. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga plant and vessel: a bird's nest fern in a tall cylinder planter of dark woven nito vine replaces the taro in a dark jar of the picked image, because Lilim has giant taro in black jars. No exception to the register is argued. A staghorn fern on a board is in the bath. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga changes forced by the portfolio register: a pair of mahogany and abaca cloth box lanterns replaces the green jar lamps, which repeat the Lilim lamp shape. Still life paintings by Paolo Sarmiento replace the landscape, which pictured the grove and repeated Tanaw's kind of art. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga four-post bed and the fan: the frame is 1.90 m tall and the fan blades turn at about 2.35 m. The nearer foot post stands under the edge of the fan's sweep. This is an exception to the studio hand's general rule that no bed frame stands under a fan, taken from its Pahinga section. Aedwon decides whether it stands. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga bedroom corrections to the picked image: both left wall sockets stay where the before has them, with the bed in front of the farther one. The bed is its real length, 2.03 m, and stands 85 cm from the sliding doors. The chest and the painting move clear of the air conditioner. The right curtain stack stops at the door frame, clear of the unit. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga overlaps kept from the picked image: an old chest (Lilim has one at a bed foot), a cane headboard (Lilim and Dalampasigan), and ebonized Sulok Side Tables at the bed (Lilim). Each is flagged for Aedwon. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga eight villas: the bed, settee, tables, lamps, and cloth are the same in all eight. Each villa has its own old chest and its own two paintings. No frame shows two villas. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga screen: each villa has a 55 inch television on a console in the sitting half of the room, at a socket, 2.9 m from a cane settee. It does not face the bed. The pavilion has none. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga terrace: all terrace furniture stands in front of the bath wall, south of the sliding doors. The slab in front of the doors stays clear, so the hero keeps the view of its approved before and the image jobs stay independent. One rattan pendant hangs at the existing ceiling point. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga shell beyond the approved before: a bedroom about 7.0 by 4.2 m with the entry in the west wall, a bath to the south with a dressing niche, a terrace about 7.5 by 5.0 m on two columns, and a reception pavilion of 6.0 by 8.0 m with two fans and six downlights. The villas face east. The hero camera was fitted to the approved before. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga hero camera: the approved round 4 before is kept, although it is the same recipe as the Tanaw and Dalampasigan heroes. The terrace pair can lead the page if Aedwon wants the heroes to differ more. | Decided on delegation | `docs/content/project-designs/pahinga-villas.md` |
| 2026-11-16 | Pahinga shop list: Dapithapon Lounge Chair, Sulok Side Table (ebonized), Bakal Side Table, Hablon Cushion (moss, rust), Kumot Throw (rust), Aparador Cabinet. The Himlay, Duyan, Kapis, Luad, Tabing, Tapayan, and Habi leave it. The Tabing Linen Curtain is now on no project's list. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Pahinga copy: the ebonized board ceiling and wall, the limestone floor, and all built-ins are removed as studio work. "Very little else" becomes "few things, all of them complete." Duration is 20 weeks with 8 days on site. Nine captions, in the new gallery order. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Pahinga images: eleven prompts in three jobs that can run at the same time. Three line drawings made, and one check drawing of the hero camera. | Decided on delegation | `docs/build/consults/2026-11-16-pahinga-gate-1.md` |
| 2026-11-16 | Hardin design file written from Aedwon's pick (round 4 image A). The owner is a book editor who did the work herself over 12 months, in three stages, after a 7-week design service. Photographed a year on. Nothing is custom and nothing is built. | Decided on delegation | `docs/content/project-designs/hardin-apartment.md` |
| 2026-11-16 | Hardin painted wall: the long north wall of the living and dining room. Working color is a muted gray-green, about `#98A28E`. Alternatives are gray-blue and pale clay plaster. An optional job renders both. | Working choice on delegation. The color is Aedwon's to pick. | `docs/content/project-designs/hardin-apartment.md` |
| 2026-11-16 | Hardin has no television. The owner watches on a laptop. The console wall and its socket stay free for a screen. | Decided on delegation, pending Aedwon's review | `docs/content/project-designs/hardin-apartment.md` |
| 2026-11-16 | Hardin replacements, so that no project repeats another: a crook floor lamp for the jar lamp, an umbrella plant and a herb balcony for the pothos, fern, and potted trees, and abstract prints for the landscape. One curtain stacks on the left, and the corner by the balcony door stays clear, so the door can open. | Decided on delegation | `docs/content/project-designs/hardin-apartment.md` |
| 2026-11-16 | Hardin exception to flag: the same paper shade hangs at all three ceiling points. The studio hand allows a lamp shape to repeat in one home only as a pair. | Decided on delegation, pending Aedwon's review | `docs/content/project-designs/hardin-apartment.md` |
| 2026-11-16 | Hardin coverage: three pairs (living room, bedroom, balcony), one render against the hero photograph, seven story frames, and a drawn plan. The bedroom render and the sourcing list are dropped as images. | Decided on delegation | `docs/content/project-designs/hardin-apartment.md` |
| 2026-11-16 | Hardin shop list: Silong Sofa (two-seat, clay), Lambot Wool Rug, Pasilyo Console Table, Unan Bed (queen, oat), Bakal Side Table, Kiso Stool, Tabing Linen Curtain (oat), Amihan No. 3, Bato Object. The Luad Table Lamp leaves it. The Tabing and Amihan No. 3 now have a project. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Hardin copy: "refinished" and the built-in bedroom storage are removed. The entry gains Duration and As handed over, as the other four have. Twelve captions, in the new gallery order. | Decided on delegation | `docs/content/projects.md` |
| 2026-11-16 | Hardin images: thirteen prompts in three jobs that can run at the same time, and two optional prompts for the wall color. Three line drawings made, and one check drawing of the hero camera. | Decided on delegation | `docs/build/consults/2026-11-16-hardin-gate-1.md` |
| 2026-11-16 | Hardin painted wall color: A, gray-green, about `#98A28E`. | Picked by Aedwon from rendered options | `docs/content/project-designs/hardin-apartment.md` |
| 2026-11-16 | Home hero: the growing Lilim window reveals the before-and-after on scroll, from the empty room to the furnished room. No handle. The reveal motion is pending a rendered prototype. | Picked by Aedwon (option 1 of 3) | `docs/design/visual-system.md` |
| 2026-11-16 | Lilim hero before rebuilt from the approved furnished image, so the column, glass, view and light match pixel for pixel. Used by the home hero reveal and the Lilim living room slider. The earlier before is kept in `design/lilim/raw/`. | Decided on delegation, for Aedwon's request for a seamless hero | `design/lilim/lilim-hero-before.png` |
| 2026-11-16 | Project pages: layout B (room-by-room chapters with a sticky room index), slider A (drag handle) for every pair after the hero, and the home hero wipe for the hero pair. | Picked by Aedwon from rendered options | `docs/design/visual-system.md` |
| 2026-11-16 | Name check before release: about 54 names searched; one collision and three near misses renamed. Tala Wall Light becomes Sulo Wall Light (Tala is a real lighting brand). Kiso Stool becomes Asa Stool (Kiso is a real furniture line). Habi Wall Piece becomes Hibla Wall Piece (HABI is the Philippine textile council). The painter Paolo Sarmiento becomes Paolo Vergara (Sarmiento is a known painter family). Prices are plausible at the premium end. A trademark search is still advised before any commercial use. Renames apply after build wave 5a. | Decided on delegation | `docs/content/catalog.md` |

## Open questions for Aedwon

1. **Signatures.** No object is declared a studio signature, so nothing may repeat across projects. He may declare one.

Pending his review from rendered images, not yet questions: the evening light level, the composition of the commissioned work, the pendant at catalog size, the old sideboard, the woven panel, and which pair is the phone hero. Each is marked in the Lilim design file.

## Before public release

These checks do not block design work. Aedwon delegated the call on 2026-11-13, and the agent deferred both to the point just before the site goes public.

1. **Check fictional names.** No invented maker, artist, product, or project name has been checked against real businesses, products, or people. Check each one and rename any that collide. Names may still change during design, so checking now would be wasted work.
2. **Check pricing realism.** Service fees and product prices are plausible estimates, not researched figures. Compare them with real Philippine studios and shops.

## Deliberately not decided

These wait for later steps in the planning sequence.

- Final photography: later in the design work

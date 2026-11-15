# Consult: rethink Kanlungan's interiors from the ground up (Fable 5.2, 2026-11-16)

Status: **Recommendation, not approved.** Nothing in the repository has changed. Every visual and UX choice here is Aedwon's to make from rendered options. This consult supersedes `consult-fundamentals.md` (same scratchpad) and the unapproved `docs/build/consults/2026-11-16-styling-and-60-30-10.md`.

Real studios and publications named here are calibration points for this consult only. They must never enter project files. I cite them from memory and have not verified them.

Inputs from Aedwon:

- On the 11 approved Lilim House photos: "looks monotonous AF. i would personally not hire this studio."
- "the overall space doesn't even look like it was designed by an interior decorator, much less a studio."
- "if we have to rethink things from the ground up even the rules, let's do that."
- "Kanlungan takes built, empty homes and hospitality spaces to move-in or guest-ready... so then the pictures should reflect that. i'm thinking of a before and after kind of hero section for the case studies (where users can drag a vertical bar to show more/less of the before-after). they must have the reaction: wow you did magic on that space! you absolutely transformed it. i will hire you. be ambitious. go boil the ocean."

## 0. Decision summary

1. The coordinator's read is right. Nobody designed these interiors. The pipeline runs backward: catalog, then product-tour captions, then shot list, then locked positions. No step asks for a design.
2. The service is a transformation, and no image shows one. Worse, each project's identity was built from its shell (floors, ceilings, joinery). The locked service says the shell is the client's. Kanlungan's authorship is everything placed inside it.
3. The before-and-after idea is the right organizing idea for the whole system. It forces the shell to be honest and plain, and it puts all the visible credit on the studio.
4. The current Lilim shell is too beautiful empty. Its mahogany and cane are the architect's. I recommend a plain, contractor-finished shell for Lilim and plainer shells for the other four. The warm catalog then contrasts with the shell, which also fixes the wood-on-wood problem.
5. Aedwon picks a studio hand from three rendered afters of one shared before: **Collected**, **Shade and Stone**, or **Garden Color**. I recommend Collected.
6. Pairing method: generate the empty before first, then derive the after by editing it. Both frames share the same hour and light. Verify alignment with fixed landmarks and an overlay. I have not tested this generator in either order, so step 1 includes one reverse-order pair as a check.
7. The scene bibles are replaced by one design file per project, written in a designer's order and starting with "As handed over." Fourteen rules remain.
8. The project page becomes a story: slider hero, brief with the handover, the moves, the gallery, materials and sources, Shop the project. It stays at nine sections. The slider is a UX choice to judge from rendered options.
9. This reopens eight locked or approved items (section 8). The service scope is not reopened. Paint stays out unless the test shows a need.
10. Cost of the ambitious version: about 130 to 160 image generations, 9 substantive documents, two small scripts, one design round for the slider and project page, and site build work. First spend: 6 to 10 generations with no file changes.

## 1. Diagnosis

### 1.1 What the images show

I viewed all 11 Lilim frames, the four provisional anchors, and all 37 product studio shots.

Lilim House, as built by our documents:

| Fact | Count |
|---|---|
| Great room floor area | 120 sqm (8 by 15 m) |
| Loose pieces in that room | 9 furniture pieces, 1 vessel, 1 pendant |
| Light fittings in the whole house | 1 |
| Lamps, artworks, curtains, cushions, throws, indoor plants | 0 |
| Bedside tables | 0 |
| Furniture woods | 1, the same mahogany as the floor, rafters, posts, and frames |

Three things follow.

- **The architect is the only designer in the pictures.** The cane ceiling, the eave, and the valley are the best things in every frame. Empty, this house would still be handsome. Kanlungan added nine pieces of furniture to it.
- **The furniture matches the building.** Mahogany on mahogany under mahogany. A decorator's first move is to not match the floor.
- **The layout is storage, not a room.** One sofa and one chair three meters apart is not a conversation group. The children's room is two cots on a bare floor.

The provisional anchors confirm the read. Pahinga is the most convincing because it alone has value contrast, a wall piece, a lamp, and a curtain. Dalampasigan reads as a catalog shot of a bed. Tanaw and Hardin each show a sofa, a lamp, and a blank surface.

### 1.2 Check of the coordinator's read

| Claim | Verdict |
|---|---|
| Nobody designed the interiors; the system puts catalog furniture into architecture | Right. The pipeline has no step where design could happen. |
| No concept, no point of view | Right. Every "approach" is a maintenance or logistics argument. |
| No layered lighting, art, or textiles | Right for Lilim, Tanaw, and Hardin. Pahinga has one of each. |
| No contrast of materials, no statement piece | Right. The approved material reads require one wood family per project. |
| Conversational layouts are missing | Right. |
| One catalog in one or two woods makes each project a single-brand showroom | Right, and it is a rule, not an accident. |

Additions:

- The fault is the direction of the pipeline. Shop first, project second. It must run the other way.
- The projects were made distinct by their architecture. The scene-bibles README says: "Each project is recognized by its shell, its light, and at most one color." The studio does not author the shell.
- The catalog is tonally uniform. By my count from the studio shots, about 28 of 36 products are honey or red-brown wood, cane, rattan, reed, or oat textile. That is fine for a base layer in a plain room. It disappears in a mahogany house.
- With a furnishing-only service, Kanlungan's nearest neighbor is a home stager. The current images do not even reach staging. The studio must visibly exceed it.
- The design brief already warned against this result: "Beige everywhere with no contrast or point of view." No rule enforced it on the photography.

### 1.3 Root causes in the process and rules

| # | Root cause | Evidence |
|---|---|---|
| 1 | **The pipeline runs backward.** Catalog, captions, shot list, placement, image. | `projects.md` was written by picking 8 to 13 catalog items per project. `image-briefs.md`: "Gallery numbers refer directly to the ten captions." |
| 2 | **Captions are a product tour, so frames are product placements.** | About 31 of the 50 gallery captions exist to name a catalog product. Example: "Guest room. A Tuntungan Stool used as a bedside table." |
| 3 | **Briefs and approaches are operational.** No client has a life. No approach says how the place should feel. | Lilim: "hold up to children." Tanaw: "move in once." Dalampasigan: "ready for guests in one season." Pahinga: "easy to maintain." Hardin: "buy toward over a year." |
| 4 | **Uniformity is locked in.** | Two woods only (`shop.md`). One wood family per project (material reads, 2026-11-14). One textile color, one light, one lens per project (Signatures, 2026-11-15). |
| 5 | **The service is a transformation, and the system has no "before."** | No document describes any space as handed over. Nothing shows what Kanlungan changed. |
| 6 | **The Signatures gave the studio credit for architecture.** | See 1.4. Floors, ceilings, wall cladding, and joinery were chosen as each project's identity. The locked service excludes all of them. |
| 7 | **The scene bibles optimize for sameness between frames, not for a good room.** | "Nothing is added that the table does not list." "No other pendants, lamps, or seating." The review checklist never asks if the room is good. |
| 8 | **The first generated image became the design.** | Lilim bible: "this bible was drawn to agree with" the approved hero. By the bible's own numbers, camera C1 stands behind the sofa and would see its back. The hero shows its front. The lead should check this. The coordinates give a false sense of control. |
| 9 | **Brand words were read as "empty."** | "Restraint," "subtle," "calm." Then: "empty rooms," "sparse; one book, one bowl," "barest of the five." |
| 10 | **My earlier advice would have made it worse.** | I proposed "any visible object of a type the shop sells is the catalog product," and I let "project joinery" stand. Both are withdrawn. |

### 1.4 Scope conflicts: built-ins and architecture credited to the studio

The locked scope: furniture, lighting and decorative fixtures, rugs, curtains, textiles, art, decor, sourcing, delivery, installation, styling. Not construction, renovation, built-in cabinetry, plumbing, electrical work, or architectural design.

The working test: **loose is ours, fixed is the client's.** Custom freestanding furniture is in scope. Anything fastened to or part of the building is not, except curtains on tracks, art on walls, and decorative fittings at existing electrical points.

Current conflicts (bibles are in worktree `kanlungan-sig`):

| Project | Conflict | Where |
|---|---|---|
| Tanaw | "Bleached acacia floors and joinery." "Built-in storage, kitchen, guest bed frame, and desk: matte bleached acacia, one finish throughout." Site feature: "wall of tall closed joinery." Four wardrobes and storage walls, an entry ledge, and wired wall lamps listed as studio pieces. The approach text credits the studio: "Storage is tall and closed." | `decisions.md` (Tanaw material read); `tanaw-residence.md`; `projects.md` |
| Pahinga | "Ebonized mahogany boards on the ceiling ... and on the headboard wall." "Honed cream limestone" floor chosen as the studio's material read. "Sliding frames, posts, shelf, desk, built-ins: ebonized plantation mahogany." A closed wardrobe and a fixed low shelf. The approach text: "Frames, posts, rafters, and built-ins are ebonized mahogany." | `decisions.md` (Pahinga material read); `pahinga-villas.md`; `projects.md` |
| Dalampasigan | "Seamless burnished cement ... replacing the 60 × 60 cm gray tile." "Doors, shutters, window frames, built-in serving counter: natural oiled honey acacia." A fixed wall reading light in each room. | `dalampasigan-inn.md` |
| Hardin | "Mahogany parquet blocks ... refinished." "Bedroom joinery: closed storage in mahogany." A moss-gray painted wall. | `hardin-apartment.md`; `hardin-hero.png` |
| Lilim | No studio built-ins. The whole identity is the architect's shell. The terrace bench and children's beds are loose custom pieces and are fine. | `lilim-house.md` |

Hardin is a special case. It is Interior Design Direction, which includes "color and lighting direction," and the client executes. A painted wall is in scope there as direction. Refinishing a floor is the client's own renovation and should not be the project's signature.

In my proposals below, nothing fixed is credited to the studio. Where a project needs storage, it is freestanding.

### 1.5 What does not cause it

- **Brand positioning.** Warm modern Filipino, subtle identity, refuge, studio first. Refuge means a room that holds you, not a room with nothing in it.
- **The furnishing-only service.** It is not a handicap. It is the pitch: nothing was built, and the room is unrecognizable.
- **Site templates, mostly.** The warm paper page is a good ground for richer photographs. The project page needs a new hero and a new story order (section 6). That is an addition, not a fault in the template.
- **Sound parts of the old system.** Product consistency sheets, the 37 product masters, anchor-then-reference generation, the plan drawings as a method, and the photography fundamentals in section 3(b) of `consult-fundamentals.md`.

## 2. What the work must look like

### 2.1 Design intent per project

A portfolio project answers three questions a visitor can sense without reading:

1. **Who lives here?** The client has books, art, inherited pieces, habits.
2. **What is the one idea?** One sentence about how the place should feel. "An apartment made for the evening." Not "storage is tall and closed."
3. **What did the studio do?** The visitor can point to decisions. With a before beside the after, this becomes impossible to miss.

### 2.2 A recognizable hand across projects

A hand is a set of decisions that repeat while the palette changes. It is not a set of products that repeat. Calibration points:

- Axel Vervoordt: old and raw beside refined, with emptiness placed on purpose.
- Rose Uniacke: pale, quiet rooms anchored by antiques and large lighting.
- Studio Shamshiri and Nickey Kehoe: warm modern rooms built from vintage, custom, and craft.
- Geoffrey Bawa's houses: tropical modern shells filled with art, textiles, and antiques.
- In the Philippines: the modern tropical work of Budji Layug and Royal Pineda, and the antique-and-modern mixing of Eric Paras.

You can cover the furniture credits and still name the studio. That is the bar.

### 2.3 Variety between projects

The hand stays. These change with client and site: the key color, the lead wood, the mood, the density, and the hour. Target for Kanlungan: one generous family house, one dark evening apartment, one bright social inn, one spare private retreat, one small personal apartment.

### 2.4 How studios show their own product lines

- **Own pieces are a minority in any room.** They sit among custom pieces, vintage finds, other makers, and art. This is my estimate from published credit lists, not a measured figure.
- **Products come out of projects.** Christian Liaigre's furniture began as pieces for commissions. Karimoku Case releases each collection out of one architecture project. "First made for Lilim House" is more credible than a room furnished from the shop.
- **The same piece recurs in different dress.** One sofa, three fabrics, three houses.
- **Credits are mixed and specific.** "Sofa: Kanlungan. Low table: antique, found in Pampanga. Painting: commissioned."
- **The shop is a subset of the studio's taste.** Nickey Kehoe, Rose Uniacke, and Shoppe Amber Interiors sell their own collections beside found pieces and makers' work.

### 2.5 Editorial photography practice

- A feature tells a house in 8 to 12 frames by leaving most of it out.
- Roughly a third wide, a third medium, a third detail. Vignettes carry the design.
- Each room gets its best hour. Dusk frames use lamps.
- A stylist works to camera: branches, fruit, books, a throw.
- Light has a direction. Whites are white. Verticals are straight.

### 2.6 Before and after, done well

What makes a pair land:

- **The before is honest and unremarkable.** Clean, empty, sound, and plain. Not dirty, not dark, not under construction. A doctored before is easy to smell and costs trust.
- **The camera is identical.** Walls, windows, and view coincide. This is rare in real practice, because the before is usually a site-visit snapshot. We can do it exactly, and that is what makes a drag bar feel like magic.
- **Only the studio's work differs.** I recommend the same hour and weather in both frames. The change in light then comes only from Kanlungan's lamps and curtains. The pair reads as one photograph in which a home appears.
- **The after is authored, not staged.** A stager adds a sofa, a rug, and a plant. A studio adds a plan, a lighting scheme, tailored curtains, custom and found pieces, and art. The hand in section 3 is the difference.

Transforming without building: the tools that do the heavy work.

| Tool | Effect |
|---|---|
| Large rugs and mats | The contractor's floor disappears |
| Full-height curtains on a ceiling track, wall to wall | The room grows taller. Aluminum frames soften. Hard light turns soft. |
| Lamps at three heights; ceiling grid off; one decorative fitting at the existing point | Flat overhead light becomes pools of warm light |
| Wall-scale loose pieces: large art, textile hangings, tall cabinets, shelving, folding screens | Blank walls gain depth and color without paint |
| Furniture that makes architecture: a four-poster bed, a long table, a daybed across a window | A box gains structure |
| One heavy old piece | A new room gains age |
| Tree-scale plants | A hard room gains life |

## 3. Directions for the studio hand

Three options for what a Kanlungan interior is. All three are afters of one shared before, so they are also the first test of the before-and-after idea.

The test room is the Lilim House living room, redrawn as a plain contractor-finished shell (see section 7 for why). The plan, the deep eave, and the valley view stay. Nothing fixed changes between the before and any after.

Common to all three afters: a conversation layout, a rug that holds the group, full-height curtains, lamps, art, a plant, and the same hour as the before. They differ in the hand. Aedwon may mix them.

### Direction A: Collected

**Thesis.** A Kanlungan home looks gathered over years, not delivered in one truck. The studio's own pieces are the quiet base. Around them sit old Philippine hardwood furniture, mid-century pieces, handloomed textiles, books, and art. Old against new, dark against pale, rough against fine. Refuge here means belonging.

| Lever | Move |
|---|---|
| Material contrast | One old, dark piece in every room, with real wear. At least three woods per room. |
| Color strategy | Earth base (bone, oat, tobacco, black-brown). Two deep colors per project from the site, in small to medium doses. Lilim: moss and oxblood. |
| Lighting | Lamps at three heights. Linen and paper shades. One pendant at most. |
| Art and objects | One large painting hung low. Books in stacks. Stoneware jars with cut branches. |
| Sourcing mix (by piece count) | About 35 percent catalog, 25 percent custom, 25 percent vintage and antique, 15 percent art and objects |

**Guardrail.** Old furniture and craft are materials, not motifs. No religious figures, tribal carvings, baskets on walls, or heritage displays.

**Cost.** Highest continuity burden, because found pieces have no reference shots. One sourcing board per project holds them steady. "Shop the project" shrinks to five or six pieces. No catalog changes. Risk of clutter, controlled by the edit rule.

### Direction B: Shade and Stone

**Thesis.** A Kanlungan room is a composition in dark and pale. Few pieces, each large and exact. Stone and heavy linen against black wood and steel. One monumental piece per room. Almost no color; the garden is the only green. Refuge here means stillness.

| Lever | Move |
|---|---|
| Material contrast | A black anchor and a white anchor in every room. Honey cane or mahogany once, as the warm note. |
| Color strategy | Bone, ivory, charcoal, black. No accent color. |
| Lighting | Low pools of lamp light. Sculptural fittings. Dusk is the signature hour. |
| Art and objects | One very large monochrome work per room. Single sculptural objects. |
| Sourcing mix | About 45 percent custom, 35 percent catalog in ebonized and charcoal variants, 10 percent vintage, 10 percent art |

**Cost.** Lowest continuity burden. Needs four to six variant studio shots. It is the closest to what Aedwon rejected, and in a white contractor shell it has the least to push against. It can read as a generic resort.

### Direction C: Garden Color

**Thesis.** A Kanlungan room commits to color taken from its site. Shade makes deep colors glow, so the studio uses them at scale: a moss sofa, a striped rug, a lacquered table, a painted cabinet. Wood and cane become the neutrals. Pattern is welcome. Refuge here means richness.

| Lever | Move |
|---|---|
| Material contrast | Lacquer and paint on loose pieces against raw wood and cane |
| Color strategy | One deep color at the largest scale (Lilim: moss). A second, opposing color in a smaller dose. Black as punctuation. |
| Lighting | Lamps with colored ceramic bases. Lamp-lit color in the evening. |
| Art and objects | Paintings in full color. Stripes and checks on at least two textiles. |
| Sourcing mix | About 40 percent catalog in new colors, 25 percent custom upholstery and lacquer, 20 percent vintage, 15 percent art |

**Cost.** Largest catalog change: new fabric colors and six to eight variant shots. The cap of four choices per option needs a ruling. Color drifts between generated frames, so each project needs a material board as a color reference. It gives the biggest visible jump from a white before.

### Recommendation

**Direction A, Collected.**

- It is the clearest difference between a studio and a stager. Old, custom, and found pieces cannot come from a staging warehouse.
- It fits the locked brand: belonging, craft, and Filipino identity through old furniture and materials, with no motifs.
- It needs no catalog changes. In a plain shell, the quiet catalog is the right base.
- Its cost is continuity work, which the new pipeline handles.

Whichever wins, keep one discipline from B: every room holds a true dark, a clean pale, and one piece that leads. The rules in section 5 include it.

### The test prompts

Six generations: one before, three afters, and two checks. A second attempt at each is allowed. Judge the hand and the transformation, not product accuracy. Catalog pieces may drift in this test.

Catalog references are in `/Users/aedwon/Documents/Projects/kanlungan/design/photography/`. Attach references in the listed order. The prompts call them image 1 to image 5.

Output folder: `design/round-3-interiors/`. Show the results in one visual companion page: the current hero for memory, then each after with a working drag bar over the before.

#### Prompt 0: the shared before

No reference images. Save as `lilim-living-before.png`. Aedwon should glance at it before the afters run. The question is: is this honestly plain?

```text
Create one photograph: a plain, accurate documentation photo of an empty, newly finished house interior on handover day. Aspect 21:9. Full-frame camera, 35mm lens, camera level at 1.2 m, all verticals straight, about f/8.

The room is the great room of a new hillside house in Antipolo, Philippines, seen from an inside corner, looking diagonally down its length. It is about 8 m wide and 15 m long with a flat ceiling 2.8 m high.
- Left: one long, unbroken wall of flat white painted plaster running away from the camera.
- Far end: a white wall with one tall window onto green planting, and one white split-type air conditioner mounted high.
- Right: a long wall of floor-to-ceiling sliding glass doors in slim dark bronze aluminum frames, standing open onto a covered terrace with a deep, flat white roof overhang. Three plain square white concrete columns stand along the door line. Beyond the terrace, treetops and a green valley under a soft sky.
- Floor: large pale gray matte porcelain tiles with barely visible joints, the same inside and on the terrace.
- Ceiling: flat white board with six small recessed downlights, switched off, and two ceiling light points. The near one is capped. The far one holds a single bare bulb in a plain holder, switched off.
- Small fixed details: white switch plates and two sockets on the left wall. Manufacturer stickers on two glass panels.

The room is completely empty and clean. No furniture, curtains, rugs, lamps, plants, or objects. No tools, ladders, dust sheets, or debris.

Light: about 4:45 pm in the dry season. Low sun lights the treetops and the outer edge of the terrace. The interior is in open shade under the deep roof: even, soft, and a little flat. Correct exposure. Neutral white balance.

The room looks bare, echoing, and unremarkable, but new, clean, and sound. It is not dirty, damaged, dark, or under construction. A real photograph, not a render. No people. No readable text. No logos.
```

#### Shared rules for the three afters

Each after prompt below already contains these lines. They are listed once here so a reviewer can check them.

- Image 1 is the before. Nothing fixed moves, changes finish, appears, or disappears.
- The camera, lens, and crop are identical.
- The hour and the daylight are identical. Lamps are the only new light.
- The stickers on the glass are gone. That is cleaning, not construction.

#### Prompt A, Collected

References: (1) `design/round-3-interiors/lilim-living-before.png`, (2) `silong-studio-three-quarter.png`, (3) `dapithapon-studio.png`, (4) `luad-studio.png`, (5) `tapayan-studio.png`. Save as `lilim-living-A-collected.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 21:9 crop.

Do not change anything fixed. Every wall, column, door frame, glass panel, ceiling line, downlight, ceiling point, floor tile, the far window, the air conditioner, the switch plates, the sockets, and the valley view stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built. The recessed downlights stay off. Remove only the stickers from the glass.

Light: the same hour and daylight as image 1, about 4:45 pm, the interior in open shade. Add only the light of the lamps named below, which are on and glow softly. Neutral white balance: white walls read white, foliage reads fresh green, wood reads warm brown. One natural exposure with true darks. No HDR.

The room now looks collected over years by a family with a good eye. New pieces sit with old ones.
- Curtains: full-height natural oat linen curtains on a slim ceiling track along the whole door wall, drawn open and gathered in front of each column.
- Rug: one large hand-tufted wool rug in warm ivory, about 3 by 4 m, under the whole seating group in the near half of the room.
- Sofa, left foreground, in three-quarter front view, its back toward the long left wall: exactly the sofa in image 2, oat linen. On it, two moss green handloomed cotton cushions, one cushion in a narrow rust and natural stripe, and a natural cotton throw folded over the near arm.
- Low table in front of the sofa: an antique Philippine hardwood low table with one thick plank top, about 150 by 80 cm, black-brown with worn pale edges. On it, a stack of three large books, a shallow pale celadon bowl of green calamansi, and one small brass dish. Half the top stays clear.
- Facing the sofa, with their backs to the terrace: the rattan and cane lounge chair in image 3, and beside it a mid-century lounge chair with a dark hardwood frame, a woven cane seat and back, and a loose seat cushion in oxblood linen. A small blackened steel drinks table stands between them.
- At the far end of the sofa: a small ebonized wood side table carrying the stoneware lamp in image 4, lit.
- Against the long left wall, behind the sofa: a long, low antique hardwood chest, dark and worn, about 180 cm wide. On it, the stoneware vessel in image 5 holding tall cut green branches, a small brass lamp with a dark green shade, lit, and a short stack of books. Above it hangs one large abstract painting, about 150 cm wide, in moss green, bone white, and black, in a thin dark wood frame, hung low.
- Beside the nearest column: one large giant taro plant in an old dark brown glazed stoneware jar.
- Far background, the dining area: a long solid mahogany dining table with six cane-seat wood chairs. A capiz shell drum pendant with a brass frame hangs from the far ceiling point in place of the bare bulb, lit.
Palette: white walls, oat, black-brown, and mahogany, with moss green as the main color and oxblood as the small second color.

The seating forms one conversation group on the rug. Every seat is within about 2.5 m of the others and within reach of a table. A clear path runs from the foreground to the terrace doors. Everything looks lived in and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No religious figures, tribal carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

#### Prompt B, Shade and Stone

References: (1) `design/round-3-interiors/lilim-living-before.png`, (2) `silong-studio-three-quarter.png`, (3) `dapithapon-studio.png`, (4) `luad-studio.png`, (5) `sinag-studio.png`. Save as `lilim-living-B-shade-and-stone.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 21:9 crop.

Do not change anything fixed. Every wall, column, door frame, glass panel, ceiling line, downlight, ceiling point, floor tile, the far window, the air conditioner, the switch plates, the sockets, and the valley view stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built. The recessed downlights stay off. Remove only the stickers from the glass.

Light: the same hour and daylight as image 1, about 4:45 pm, the interior in open shade. Add only the light of the lamps named below, which are on and glow softly. Neutral white balance: white walls read white, foliage reads fresh green, wood reads warm brown. One natural exposure with true darks. No HDR.

The room is now a composition in dark and pale. Few pieces, each large and exact. Almost no color. The garden is the only green.
- Curtains: full-height heavy ivory linen curtains on a slim ceiling track along the whole door wall, drawn open and gathered in front of each column.
- Rug: one very large plain ivory wool rug, thick and matte, about 3.5 by 4.5 m, covering most of the floor in the near half of the room.
- Sofa, left foreground, in three-quarter front view, its back toward the long left wall: the sofa in image 2 with the same wood frame, upholstered in charcoal linen. Two large plain ivory wool cushions. Nothing else on it.
- Low table, the statement piece: one slab of honed gray-white marble with soft gray veining, about 200 by 110 cm and 10 cm thick, on a recessed blackened steel plinth, top 32 cm high. On it, only one wide, shallow black stoneware bowl and one large book.
- Facing the sofa, with its back to the terrace: a long backless daybed bench in ebonized wood with one ivory linen seat pad and one bolster, about 200 cm long, low enough that the valley shows over it. At its far end, the rattan and cane lounge chair in image 3, angled toward the sofa. It is the only honey-colored piece.
- At the far end of the sofa: a small cylindrical blackened steel side table carrying the stoneware lamp in image 4, lit.
- On the long left wall, behind the sofa: one very large abstract ink painting, about 200 by 150 cm, broad black brush forms on bone white, in a thin black frame, hung low. On the floor beside it, one large old unglazed dark stoneware jar, about 70 cm tall, empty.
- Beside the nearest column: the brass floor lamp in image 5, lit, and one tall, sparse small tree with a bare trunk in a large matte black pot.
- Far background, the dining area: a long ebonized wood dining table with six ebonized cane-seat chairs. A capiz shell drum pendant with a brass frame hangs from the far ceiling point in place of the bare bulb, lit.
Palette: white, ivory, charcoal, and black, with mahogany and honey cane as the only warm notes.

The seating forms one conversation group on the rug. Every seat is within about 2.5 m of the others and within reach of a table. A clear path runs from the foreground to the terrace doors. Everything looks lived in and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No religious figures, tribal carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

#### Prompt C, Garden Color

References: (1) `design/round-3-interiors/lilim-living-before.png`, (2) `silong-studio-three-quarter.png`, (3) `dapithapon-studio.png`, (4) `luad-studio.png`. Four references. Save as `lilim-living-C-garden-color.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 21:9 crop.

Do not change anything fixed. Every wall, column, door frame, glass panel, ceiling line, downlight, ceiling point, floor tile, the far window, the air conditioner, the switch plates, the sockets, and the valley view stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built. The recessed downlights stay off. Remove only the stickers from the glass.

Light: the same hour and daylight as image 1, about 4:45 pm, the interior in open shade. Add only the light of the lamps named below, which are on and glow softly. Neutral white balance: white walls read white, foliage reads fresh green, wood reads warm brown. One natural exposure with true darks. No HDR.

The room now commits to color taken from the garden. Deep, muted colors at large scale. Wood and cane act as the neutrals. Pattern is welcome.
- Curtains: full-height unlined linen curtains in deep tobacco brown on a slim ceiling track along the whole door wall, drawn open and gathered in front of each column.
- Rug: one large flat-woven wool rug, about 3 by 4 m, in broad stripes of bone and tobacco brown with a thin ink blue line, under the whole seating group in the near half of the room.
- Sofa, left foreground, in three-quarter front view, its back toward the long left wall: the sofa in image 2 with the same mahogany frame, upholstered in deep moss green linen. On it, two cushions in a brick red and bone check and one plain ochre cushion.
- Low table in front of the sofa: a low rectangular table, about 140 by 90 cm, lacquered deep oxblood red with a soft satin surface, not glossy. On it, a stack of books, a pale green glazed bowl of green mangoes, and a small brass tray. Half the top stays clear.
- Facing the sofa, with their backs to the terrace: a pair of the rattan and cane lounge chairs in image 3, their seat cushions covered in bone linen with a narrow brick red stripe. A small blackened steel drinks table stands between them.
- At the far end of the sofa: a small ebonized wood side table carrying the stoneware lamp in image 4, lit.
- Against the long left wall, behind the sofa: a long, low freestanding wood cabinet painted deep green-black. On it, a lamp with a deep green glazed ceramic base and an ivory shade, lit, a stack of books, and a tall glass vase of large cut ginger leaves. Above it hangs one large painting, about 160 cm wide, a loose abstract landscape in brick red, moss, ochre, pale clay pink, and bone, in a thin dark frame.
- Beside the nearest column: one large giant taro plant in a big terracotta pot.
- Far background, the dining area: a long solid mahogany dining table with six cane-seat wood chairs. A capiz shell drum pendant with a brass frame hangs from the far ceiling point in place of the bare bulb, lit.
Palette: moss green as the main color, oxblood and brick as the second color, white walls, tobacco, and black, with ochre used once.

The seating forms one conversation group on the rug. Every seat is within about 2.5 m of the others and within reach of a table. A clear path runs from the foreground to the terrace doors. Everything looks lived in and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No religious figures, tribal carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

#### Check 1: is the current Lilim shell too beautiful empty?

Reference: (1) `lilim-hero.png`. Save as `lilim-living-current-shell-empty.png`. This shows Aedwon the handsome shell with nothing in it, beside the plain before.

```text
Edit image 1. Remove every piece of furniture, the rug, the vessels, the bowl, and every pendant. Show the same room completely empty, from the identical camera position, lens, and crop. Keep every wall, post, door frame, the cane and rafter ceiling, the mahogany floor, the terrace, and the valley view exactly where they are. Continue the floorboards and walls naturally where furniture stood. Keep the same light. Neutral white balance. A real photograph. No people.
```

#### Check 2: the reverse order

Reference: (1) the after Aedwon likes most. Save as `lilim-living-before-reverse.png`. Compare its alignment score with the before-first pair (section 4.3).

```text
Edit image 1. Remove everything that is not part of the building: all furniture, rugs, curtains and their track, lamps, pendant, art, plants, and objects. Show the same room completely empty, from the identical camera position, lens, and crop. Keep every wall, column, door frame, glass panel, ceiling line, downlight, floor tile, the far window, the air conditioner, switch plates, sockets, and the view exactly where they are. Put a single bare bulb in a plain holder at the far ceiling point, switched off. Continue the tiles and walls naturally where things stood. Keep the same hour and daylight, with no lamp light. A real photograph. No people.
```

What Aedwon judges:

1. Is the before honestly plain? Does the handsome current shell, empty, kill the effect?
2. Dragging the bar, does he feel "you transformed it"?
3. Which after would he hire?
4. In that after, can he point to what a stager would not have done?
5. Is the density right? Does it still read as Kanlungan?
6. Does he want a mix?

## 4. The pairing technique

### 4.1 Order: before first

**Recommendation: generate the empty before first. Derive the after by editing it.**

| Reason | Detail |
|---|---|
| The before is the clean shell anchor | An empty room is the best architecture reference for every later frame of that space. It carries no furniture to leak into other frames. |
| It enforces the scope | The after can only add. If a molding, a beam, or a better floor appears, the frame fails. |
| It follows the truth | The handover exists first. Aedwon can approve "honestly plain" before any design spend. |
| It avoids the old mistake | With after first, the first generated image becomes the design again, with no shell behind it. |
| The edit is the easier one to check | "Add things to this photo" fails visibly. "Remove everything" must invent what was hidden, and tends to leave ghosts and flattering light. |

Uncertainty: I have not tested this generator in either order, and I do not know if the Codex image tool accepts an edit mask. Check 2 in section 3 costs one generation and settles the order with numbers. If the tool accepts a mask, protect the ceiling, the walls above 2 m, and the window wall.

### 4.2 Method

1. **Fix the shell on paper.** The design file's "As handed over" section lists finishes, fixed items, and 8 to 12 landmarks for each pair camera: column edges, door heads, the wall-ceiling corner, the window, switch plates, the air conditioner.
2. **Draw the camera's view.** Hardened step. Extend the existing plan script to project the shell from the pair camera into a perspective line drawing. The rooms are boxes with rectangular openings, so this is simple geometry. The drawing is a reference image for the before and a ruler for both frames.
3. **Generate the before.** Text plus the line drawing. Same hour as the planned after. Ceiling lights off by day, on at dusk.
4. **Aedwon or the lead approves the before.** Honest, plain, clean.
5. **Generate the after as an edit of the before.** References: the before, the material board, the sourcing board, and up to two catalog masters.
6. **Register.** Compute one perspective transform from matched points on fixed architecture and warp the before onto the after. Never warp the after. Crop both to the shared area.
7. **Verify** (4.3). If it fails, regenerate the after. Do not retouch geometry.
8. **Cut every crop from the registered master pair.** 21:9, 16:9, and 3:4 each use the same crop box on both frames. Export the two files at identical pixel size.

Fallback if the after drifts when the light changes: keep the hour identical, which is already the default. If drift persists, generate in two edits: furniture and curtains first with lamps off, then lamps on.

### 4.3 How to verify alignment

| Check | How | Pass |
|---|---|---|
| Landmarks | Mark the listed landmarks in both frames after registration | Each within about 0.3 percent of image width (6 px at 2000 px) |
| Size of the correction | Corner displacement of the transform before warping | Under about 3 percent of width. Beyond that, regenerate. |
| Structure count | Count columns, door panels, downlights, sockets | Identical |
| Overlay | Blend the two frames at 50 percent | Fixed edges are single, not doubled |
| Difference | Subtract one from the other | Only furnishings, curtains, and lamp light remain |
| Slider | Drag the real bar to 25, 50, and 75 percent | Every line that crosses the bar continues unbroken, including the view |
| Wireframe | Lay the perspective drawing over both | Both follow it |

The thresholds are my proposals, not standards. Tune them after the first pairs.

Tooling note: this machine has Pillow and numpy but not OpenCV. The registration script needs OpenCV in a virtual environment, or a numpy-only version. It is a small implementation-layer job.

### 4.4 Design the shell for the slider

Some shells cannot be aligned by any generator. Choose shells and cameras with this in mind.

- **Few, large, fixed landmarks.** Columns, door frames, one window, a wall-ceiling line.
- **No regular mid-scale grids in view.** Rafters at 60 cm, strong tile joints, louvers, and jalousie slats will not match line for line. The current Lilim cane-and-rafter ceiling would fail on this alone.
- **Calm views behind the glass.** Sky, hills, and treetops forgive small drift. A skyline of distinct towers does not, so Tanaw's pair needs the same hour in both frames and a tower check.
- **The bar's resting position crosses simple structure.** Not a tree line or a tiled floor in the foreground.

## 5. The new system

### 5.1 Pipeline

| Step | Output | Who decides |
|---|---|---|
| 1. Brief and handover | Client, how they live, site, what they asked. The shell as handed over, with one asset. | Agent, on delegation |
| 2. Before frames | The pair cameras, empty | **Aedwon checks the hero before: honestly plain?** |
| 3. Concept | One sentence, the palette, the statement piece per room. Shown as a material board and the hero pair. | **Aedwon, by dragging the bar** |
| 4. Design documents | Plan, lighting, sourcing schedule, styling | Agent |
| 5. Shot list | Three pairs and the story frames | Agent |
| 6. Images | The rest in one batch, as a contact sheet | **Aedwon approves the set** |
| 7. Copy | Brief, moves, captions with credits, "Shop the project" | Agent, on delegation |

Captions come last. They describe pictures. They no longer drive them.

### 5.2 Documents

| Document | Holds | Status after the change |
|---|---|---|
| `docs/concept/studio-hand.md` (new) | The chosen direction: thesis, signature moves, sourcing mix, guardrail, the transformation tools, and the pair Aedwon picked. One page. | Locked by Aedwon when he picks |
| `docs/content/project-designs/<project>.md` (five; replaces the scene bibles) | Nine sections, below | Before and concept approved by Aedwon; the rest decided on delegation |
| `docs/content/image-briefs.md` | Photography rules (replaces Global style), the pairing method, product consistency sheets, shots that belong to no project | Rewritten in part |
| `docs/content/projects.md` | Public facts and copy for each project page | Rewritten after each project's images are approved |
| `docs/concept/site-architecture.md`, Project detail | The new page story (section 6) | Edited; decided on delegation |
| `docs/design/visual-system.md`, Imagery | Crops, the text scrim, the slider once chosen, links to the studio hand and photography rules | Three lines removed |
| `design/photography/boards/` (new) | One material board and one sourcing board per project | New |
| `design/photography/plans/` | A shell plan and a furniture plan per project. A perspective line drawing per pair camera. | Redrawn |

The nine sections of a project design file:

1. **Brief.** One paragraph. Facts link to `projects.md`.
2. **As handed over.** The shell: finishes, fixed items, what the unit came with, its one asset, and the landmarks for each pair camera. Everything here is the client's.
3. **Concept.** One sentence. Three mood words. The statement piece per room. The three to five moves. How this project differs from the other four.
4. **Palette and materials.** Dominant, secondary, accent. Woods, metals, stone, textiles, pattern. A generated flat-lay material board is the color reference for every frame.
5. **Plan.** The furniture plan by room: groups, rug sizes, paths. A drawing and a short list. No coordinates to the centimeter.
6. **Lighting.** Each room's sources by height. What goes at each existing point. Which lamps are on in which frame.
7. **Sourcing schedule.** Every piece: room, item, source type (Kanlungan Original, maker, custom, found, art, client's own), a one-line description, loose or fixed, and its reference image. Nothing may be marked fixed except curtains, hung art, and fittings at existing points. This schedule decides "Shop the project."
8. **Styling.** Loose objects by surface, plants by species and place, one sign of life per room.
9. **Shot list.** Three pairs (hero plus two) and the story frames. Each has a subject, a type, an orientation, an hour, a standpoint in words, and a lens.

Reference budget for a generation (five images): the approved before of that space, the material board, the sourcing board, and up to two catalog masters. The handoff already allows combining product masters into one temporary sheet.

### 5.3 The rules that remain

Fourteen rules. Nine for the room, five for the photograph.

| # | Rule | Principle |
|---|---|---|
| 1 | The shell is the client's. Nothing fixed is added, removed, or refinished. Kanlungan brings loose pieces, curtains, art, and fittings at existing points. | Honest scope |
| 2 | Write the concept before choosing a piece. One sentence about how the place should feel. | Unity of intent |
| 3 | Complete the layers: furniture, lighting, textiles, art and objects, plants. A missing layer needs a written reason. | Layering |
| 4 | Do not match. No furniture wood matches the floor. Every room holds a true dark, a clean pale, and one color that is not brown. | Contrast |
| 5 | Mix the sources. A visitor must not be able to furnish the room from the shop alone. Guide: catalog pieces are a third to a half of the pieces in a room. | Curation is what a studio sells |
| 6 | Seats converse. Main seats sit within about 2.5 m of each other. Every seat and every bed has a surface and a light in reach. | Function |
| 7 | Light in layers. Each main room has at least three light sources at different heights. The contractor's ceiling grid is off. | Lighting design |
| 8 | One thing leads, at the right size. The rug holds the whole seating group. Art is about two thirds the width of what it hangs over. | Emphasis, scale |
| 9 | Edit. Fewer, larger pieces. Remove anything the frame does not miss. | Restraint |
| 10 | Keep the camera level and the verticals straight. Rooms at 35mm to 50mm. Vignettes and details at 50mm to 85mm, at the height of the subject. | Truthful proportion |
| 11 | Light has a direction and whites are white. Shoot each room at its best hour. | Natural light |
| 12 | The gallery is a story. One subject per frame. About a third each of wide, medium, and detail. Neighbors differ in scale or light. Not every room is shown. | Rhythm, editing |
| 13 | Continuity. The same shell and the same pieces in every frame, held by reference images. Loose styling may move to camera. | Truth |
| 14 | Pairs are fair and aligned. Same camera, same hour. The before is clean, empty, sound, and correctly exposed. Fixed landmarks coincide. | Honest comparison |

The project-wide rules in `AGENTS.md` stay as they are.

The review checklist becomes the **hiring test**:

1. Dragging the bar, do you feel the space was transformed?
2. Would you hire this studio from the after?
3. Can you say the one idea?
4. Can you point to what a stager would not have done?
5. Could you furnish this room from the shop alone? The answer must be no.
6. Did anything fixed change? The answer must be no.
7. Does the frame differ from its gallery neighbors, and the project from the other four?

The alignment check and the continuity check run before the hiring test. They are bulk-layer jobs.

### 5.4 What to delete

Rules:

| Rule | Where |
|---|---|
| "Color grade: warm umber floors, olive-green foliage, low contrast, lifted blacks" | `visual-system.md`, Imagery |
| "Light: shaded daylight under deep eaves, with a bright, pale opening band" as a rule for all imagery | `visual-system.md`, Imagery |
| The Tanaw dusk exception and the pale floor exception | `visual-system.md`, Imagery |
| "Default to empty rooms"; "Keep rooms empty" | `image-briefs.md`; scene-bibles README |
| "Include two or three quiet physical details ... a little settled dust" | `image-briefs.md` |
| "Dyed textile color ... one color per frame. Indigo and rust never share a frame." | `image-briefs.md` |
| "symmetrical showroom staging" and "perfect mirror symmetry" as bans | `image-briefs.md` |
| "Gallery numbers refer directly to the ten captions"; "Each Prompt is 80 to 150 words" | `image-briefs.md`, Shot list |
| "Nothing is added that the table does not list"; "Only these pieces appear"; "No other pendants, lamps, or seating" | README and every bible |
| "Every shot of the project uses this light" | README |
| "Each project is recognized by its shell, its light, and at most one color" | README |
| "clear floors"; "two or three quiet signs of use" | README |
| Every Signature table, including every floor, ceiling, wall cladding, and joinery row | All five bibles |
| Placement tables and camera tables with coordinates | All five bibles |
| The shop rule, the "project joinery" allowance, and the nine styling tests as worded | `consult-fundamentals.md`; never applied |

Documents and assets:

| Item | Action |
|---|---|
| `docs/content/scene-bibles/` (README and five bibles) | Replace with `docs/content/project-designs/` |
| The project shot entries in `image-briefs.md` (about 55 of the 143) | Delete. They move to the design files in new form. |
| `docs/build/consults/2026-11-16-styling-and-60-30-10.md` | Delete or mark superseded |
| `docs/build/prompts/photo-project-batch.md` | Rewrite for pairs and the new reference budget |
| `docs/build/handoff.md`, open work items 1 to 3 | Replace |
| Gallery captions, "Approach," "Material palette," and "Shop the project" for all five projects | Rewrite after design |
| The five shell plans | Redraw to the plain shells in section 7 |
| The 11 Lilim photos and the four provisional anchors | Retire when replacements are approved. File deletion needs Aedwon's approval. |
| Branch `content/project-signatures` | Do not merge |

What survives untouched: the 37 product studio shots, the product consistency sheets, the catalog, the makers, the brand, and the site outside the project page.

### 5.5 Catalog, material range, and shop credibility

- **Material range.** Two woods stay as the range for shop products. The range does not limit a project. Custom and found pieces may be any material, including old hardwoods.
- **Catalog.** No change under Direction A. Variants only under B or C. No new products.
- **Plain shells help the catalog.** Warm wood, cane, and oat linen stand out against white walls and pale floors. In the mahogany house they vanished.
- **Shop credibility, restated.** The shop is credible when its pieces are seen working in mixed rooms, when captions credit every source, and when a product page says where the piece was first made. Each project shows five to seven catalog pieces. Across five projects every featured product still appears, so "Seen in" keeps working.
- **Optional later.** A few found, one-of-a-kind pieces in the shop would suit Direction A and use the existing "One of a kind" and "Sold out" states. I do not recommend it now.

## 6. The case-study page

### 6.1 The story

The page still has nine sections. Four change.

| # | Now (`site-architecture.md`) | Proposed | What it carries |
|---|---|---|---|
| 1 | Hero image and project name | **Before-and-after hero** and project name | The hero pair with a drag bar. See 6.2. |
| 2 | Facts | Facts, plus two | Location, type, floor area, service, year, scope. Add: weeks from brief to handover, and days on site. |
| 3 | The brief | **The brief and the handover** | Who the client is and what they asked. One sentence on the space as received. A second before frame, shown plain. |
| 4 | The approach, as text mixed with images | **The moves** | Three to five decisions, each one sentence with one image: a small pair, a detail, or the furniture plan. Example: "We hung linen from the ceiling line, wall to wall." This is where the visitor learns what the studio did. One line states that nothing was built. |
| 5 | Gallery of 8 to 12 images | Gallery of 8 to 12 images | The after story: wide, medium, detail. It may hold one more pair. |
| 6 | Material palette, four to six materials | **Materials and sources** | The material board image with four to six named materials. Then mixed credits: Kanlungan, makers, custom, found, art. |
| 7 | Shop the project | Shop the project | Five to seven pieces. Unchanged in form. |
| 8 | Next project | Next project | Unchanged |
| 9 | Closing call to action | Closing call to action | Unchanged |

Hardin, as Interior Design Direction, adds a second kind of pair in its moves: the studio's render against the owner's finished room. It proves that the design book works when the client executes.

`site-architecture.md` is decided on delegation, so the section list can change on delegation. The rendered template is another matter. `T-project-desktop` and `T-project-mobile` were built to the old list. The new sections 1, 3, 4, and 6 are visual and UX choices. They go to Aedwon as rendered options.

### 6.2 The slider: described, not decided

What any version needs:

- Two images of identical size, the after underneath, the before clipped by the bar.
- A handle of at least 44 px, draggable by mouse and touch, movable by arrow keys, announced as a slider.
- Small sentence-case labels, "Before" and "After," on a scrim. These are labels, not hints. The copy rules forbid hint text, so the handle must explain itself by its shape.
- On touch screens, only the handle drags. The rest of the image scrolls the page.
- The after loads first. The before loads behind it.
- Reduced motion: no automatic movement.
- The 3:4 mobile crop comes from the same registered pair.

Options to render for Aedwon:

| Option | Behavior | Cost or risk |
|---|---|---|
| S1. Plain drag bar | Rests at the middle. The visitor drags. | Simplest. Some visitors never touch it. |
| S2. Reveal, then drag | Opens on the before. As the page loads or scrolls, the bar sweeps once to show the after, then stays draggable. | Uses the scroll motion already in the visual system. Needs a careful reduced-motion state. I recommend rendering this one first. |
| S3. Split by default | Rests at a third, so both states show at once. Drag for more. | Clearest at a glance. Weakest single image. |

Other places the idea could go. Each is an option to render, not a decision:

- **Home hero.** The framed Lilim window already grows to full bleed on scroll. It could fill with furniture as it grows: empty room to finished home in one scroll. It states the service in two seconds. The Home layout is locked, so this needs Aedwon's approval.
- **Full-Service Furnishing page hero.** The service is the transformation. A pair belongs here.
- **Project cards.** A hover or scroll reveal of the before. Desktop only, so it is the weakest of the three.

## 7. The projects

### 7.1 Are the current sites too beautiful empty?

| Project | Empty, as now specified | Verdict |
|---|---|---|
| Lilim House | Mahogany floors, cane-and-rafter ceiling, mahogany posts and frames, a valley view | **Too beautiful.** The empty house is already the picture. The ceiling also cannot be aligned across a pair. |
| Pahinga Villas | Ebonized board ceiling and wall, cream limestone floor | **Too beautiful,** and those finishes were credited to the studio. |
| Dalampasigan Inn | White limewash, burnished cement, honey acacia louvered shutters, a sea horizon | Pleasant. The shutters carry it, and louvers will not align. |
| Tanaw Residence | Pale plaster, bleached acacia floors and joinery, a glass wall | The glass wall is honest for a condo. The floors and joinery are not plain, and they were credited to the studio. |
| Hardin Apartment | Refinished mahogany parquet, a moss-gray wall | Parquet suits an older Makati unit. Bare and unrefinished, it is an honest before. |

### 7.2 Proposal: keep the five, plain the shells, give each one asset

Every site, client type, size, and service stays. Every shell becomes what such a client is really handed. Each keeps one asset, and the design is built to make that asset felt. The concept lines are seeds. The chosen hand shapes the final ones.

| Project | As handed over | The asset | Brief and program changes | Concept seed | Hero pair |
|---|---|---|---|---|---|
| **Lilim House**, Antipolo, 320 sqm, family of five, Full-Service Furnishing | A new contractor-finished house. White painted walls, pale porcelain tile, flat white ceilings with downlights, bronze aluminum sliding doors, white concrete columns. Bare bulbs at two points. | The deep eave and the valley | The family brings a few old family pieces, books, and the children's art. Zone the 120 sqm great room into three: seating, dining, reading corner. Drop the hallway frame. | The generous one. "The old family house, moved up the hill." | Living room, late afternoon |
| **Tanaw Residence**, BGC, 118 sqm, a couple | A bare developer unit. White walls, wood-look vinyl plank, a dropped ceiling edge with downlights, a split air conditioner, the developer's white laminate kitchen and wardrobes. | The skyline through the glass | They come home after dark and collect books and records. Delete "one wood tone, one linen color." The developer's built-ins stay as found. Added storage is freestanding. No paint: the dark comes from the hour, heavy curtains, deep rugs, and lamps. | The dark one. "An apartment made for the evening." | Living room, dusk. Before: downlights on, glare on white walls. After: lamps only. Likely the strongest pair of the five. |
| **Dalampasigan Inn**, San Juan, La Union, 12 rooms | An older beach inn bought by new owners, who cleared and repainted it before Kanlungan arrived. Cream ceramic tile, aluminum sliding windows, a fluorescent tube and a ceiling fan in each room, a tiled reception counter. | Sea light and a strip of sea | A takeover replaces "the owners finished building." Two room characters, sea side and garden side. The story moves to the shared rooms: a lobby that works as a living room, and a breakfast room that works at night. | The bright one. "A beach house shared by friends." Sun-faded color and stripes. | Guest room, morning. Second pair: lobby. |
| **Pahinga Villas**, Panglao, eight villas | New, plainly built villas. White plastered walls, cream tile, a flat ceiling with one fan, aluminum sliding doors, a bare concrete terrace. | The coconut grove at the door | "Very little else" becomes "few things, all of them complete." A four-poster bed with white netting gives the box its structure. Each villa gets a place to sit, write, and leave a bag. The terrace becomes an outdoor room. | The spare one. "A private house for a week." Black, white, and palm green, all of it loose. | Bedroom, late morning. Second pair: terrace. |
| **Hardin Apartment**, Legazpi Village, 74 sqm, first-time owner, Interior Design Direction | An older one-bedroom unit, emptied. Worn parquet, white walls, old aluminum windows, a bare balcony, one ceiling point per room. | The parquet and the balcony | Photograph the finished apartment a year on, with all three stages in place. The owner's books, plants, and one inherited chair are part of the design. The owner paints one wall, on the studio's direction. Keep the design book, plan, and moodboard frames. | The personal one. "A first home, bought slowly." | Living room, overcast afternoon. Plus a render-against-photo pair. |

Range after the changes:

| Project | Mood | Key color | Before type |
|---|---|---|---|
| Lilim House | Generous, family | Moss | New house, contractor finish |
| Tanaw Residence | Dark, intimate | Ink blue and amber | Developer condo |
| Dalampasigan Inn | Bright, social | Indigo and faded coral | Tired inn, cleared |
| Pahinga Villas | Spare, private | Black and white | Bare new villa |
| Hardin Apartment | Small, personal | Clay and leaf green | Old apartment, emptied |

Tradeoffs Aedwon should know:

- **A plain shell lowers the ceiling on pure beauty and raises the transformation.** The after of a tiled white house will not look like a mahogany pavilion. It will look like something Kanlungan made. I think that trade is right for this brand, and the test in section 3 lets him see it.
- **Lilim's look changes on the Home page.** The hero keeps its eave, shade, and valley. It loses the cane ceiling and mahogany floor. If he will not give those up, the alternative is to keep the handsome shell and make Tanaw the flagship transformation. I do not recommend it, because the Home page then leads with the architect's work.
- **Two of five projects are beach hospitality.** Their befores and moods now differ, so I recommend keeping both. If he wants more range, move Pahinga to a highland lodge among pines. Cost: one new shell and a rewritten project.

Gallery size: nine after frames per project, including three that belong to pairs. Lilim gets twelve because it also feeds Home.

## 8. Locked decisions this reopens

Aedwon must approve each.

| # | Decision | File | Reason |
|---|---|---|---|
| 1 | Imagery, locked 2026-11-13: "Light: shaded daylight under deep eaves, with a bright, pale opening band" and "Color grade: warm umber floors, olive-green foliage, low contrast, lifted blacks," with the Tanaw dusk exception and the pale floor exception of 2026-11-14 | `docs/design/visual-system.md`, Imagery | One light and one warm, low-contrast grade for all imagery cause the monotony. Crop and scrim lines stay. |
| 2 | Material range, locked 2026-11-14: "Silong Sofa and Lilim House stay unchanged. Approved photographs stay unchanged." Add that the two-wood range limits shop products only. | `docs/concept/shop.md`, Material range | Lilim House is being redesigned. A project limited to the shop's two woods cannot be mixed. |
| 3 | "Preserved products and imagery ... Lilim House, and approved photographs stay unchanged." | `docs/decisions.md`, 2026-11-14 table | Same as item 2 |
| 4 | The four approved material reads: Tanaw ("Bleached acacia floors and joinery"), Dalampasigan (natural honey acacia), Pahinga ("Ebonized mahogany architecture ... honed cream limestone replaces interior mahogany floorboards"), Hardin later sourcing | `docs/decisions.md`; `docs/content/projects.md` | They fix one wood family per project. Two of them credit the studio with floors, architecture, and joinery, which the locked service excludes. |
| 5 | Lilim House scene bible, approved 2026-11-14; its Signature, approved 2026-11-15; the 11 approved Lilim photographs | `docs/content/scene-bibles/lilim-house.md` (worktree `kanlungan-sig`); `design/photography/lilim-*.png` | Aedwon rejected the photographs. The shell is too beautiful empty and cannot be aligned across a pair. |
| 6 | The Signatures approved 2026-11-15 for Tanaw, Dalampasigan, Pahinga, and Hardin, and the five-project comparison Aedwon reviewed | `docs/content/scene-bibles/*.md` on branch `content/project-signatures` | They make each project distinct through its shell, and they set styling to "sparse" or "barest." |
| 7 | Image briefs, locked 2026-11-14 ("135 shots, 32 product consistency sheets") and "Photography coverage ... 143 canonical shot entries" | `docs/decisions.md`; `docs/content/image-briefs.md` | Project shot entries are rewritten as pairs and story frames. Product sheets and product shots stay. |
| 8 | "Home featured pieces unchanged" and the six pinned pieces in the Home "From the shop" room image | `docs/decisions.md`, 2026-11-14; `docs/content/catalog.md`, Featured sets | The layout stays. The Lilim image inside it changes, and the six pinned pieces may change with Lilim's sourcing. |

Only if he chooses the matching option:

| # | Decision | File | Trigger |
|---|---|---|---|
| 9 | Home layout, locked 2026-11-14: the hero behavior | `docs/design/visual-system.md`, Layout | Only if the Home hero gains the empty-to-furnished scroll (6.2) |
| 10 | Catalog variants, including the finishes locked 2026-11-14 and the cap of two to four choices per option | `docs/content/catalog.md`; `docs/concept/shop.md` | Only for Direction B or C |
| 11 | Service direction, locked: add "paint and wallcovering" to the Full-Service scope | `docs/concept/services.md` | Only if the test afters look like staging in white boxes. I do not recommend it now. "Nothing was built or painted" is a stronger claim, and wall-scale loose pieces do the work. |

Not reopened: the service scope, everything in `docs/concept/brand.md`, the shop direction, the conversion goals, the type, color, logo, and motion of the visual system, the stack, and the project-wide rules in `AGENTS.md`.

Decided on delegation, so changeable without reopening, but reported here: `docs/content/projects.md`, the Project detail section list in `docs/concept/site-architecture.md`, the scene-bibles README, and captions in `docs/content/copy.md`. `AGENTS.md` needs two rows of its source-of-truth table updated. The rendered project template needs a new round of options.

## 9. Sequence and cost

### 9.1 Complexity: Aedwon chooses

| Level | Scope | Images | Other work |
|---|---|---|---|
| Minimal | One hero pair per project. Nine after frames each. Slider on the project hero only. | About 90 to 105 | Project hero redesign and one component |
| Balanced | Hero pair plus one more pair per project. A handover frame in the brief. Slider on the project hero and the service page. | About 100 to 120 | The above, plus the service page hero |
| **Ambitious (recommended, as he asked)** | Three pairs per project. An installation-day frame per project. Hardin's render-against-photo pair. Perspective line drawings for every pair camera. The full page story in section 6. The Home hero scroll option rendered for his decision. | About 130 to 160 | Two small scripts, a full project-page design round, slider options, site build of the page and component |

Pairs are cheap in images: about 10 to 15 generations per project separate minimal from ambitious. The real cost of ambition is design and build work on the page. It is gated, so spending stops early if step 1 fails.

### 9.2 Order

Run one Codex image job at a time through `codex-pick`. At most one Claude subagent is needed at any point.

| Step | Work | Images | Documents and build | Gate |
|---|---|---|---|---|
| 1 | Direction and transformation test from section 3: one before, three afters, two checks, shown with a working drag bar | 6, up to 10 | A throwaway comparison page. No project files change. | **Aedwon: plain shell yes or no; direction; does the bar feel like magic** |
| 2 | Prove one project end to end on Lilim: studio hand, Lilim design file, shell and furniture plans, line drawings, alignment script, both boards, three final pairs, three more story frames | 14 to 20 | 2 documents, 2 scripts | **Hiring test on the Lilim pairs** |
| 3 | Slider and project-page round: options S1 to S3 and the new sections 3, 4, and 6, on Lilim's real images, desktop and mobile | 0 | One design round | **Aedwon picks the slider and the page** |
| 4 | Lock the system: photography rules, deletions in 5.4, reopened decisions recorded, site-architecture and handoff updated | 0 | 1 rewrite, 6 small edits | Aedwon approves the reopened items |
| 5 | Finish Lilim: remaining frames, installation frame, the Home pinned-room frame, copy | 8 to 12 | Lilim copy | Contact sheet |
| 6 | Tanaw, then Dalampasigan, then Pahinga, then Hardin. One at a time: design file, before for approval, boards, hero pair for approval, then the rest. | About 22 per project, 85 to 95 in all | 4 design files, 4 copy rewrites, 4 shell plans | Before, hero pair, and contact sheet per project |
| 7 | Build: slider component, project page, service page hero, photo swap, accessibility pass | 0 | Site work, wave 5 | Lead verifies in the browser at 1440 and 390 |
| 8 | Variant studio shots, only for B or C | 4 to 8 | Catalog edit | None |

Totals for the ambitious level:

- **Images:** about 130 to 160 generations with retries. Pair frames fail more often than single frames, because alignment is strict. The plan before this consult was about 45.
- **Documents:** 9 substantive (studio hand, photography rules, five design files, `projects.md`, the project-page section of `site-architecture.md`) and about 6 small edits.
- **Who does what:** the lead writes the studio hand and the Lilim design file, because they set the pattern. An implementation-layer agent writes the two scripts, then drafts the other four design files one at a time. Codex generates. A bulk-layer agent runs the alignment and continuity checks. The lead and Aedwon run the hiring test.

Tanaw goes first among the four. It is the furthest from Lilim and likely the strongest pair. If the hand fails there, fix it before spending on the other three.

Cheaper stopping points, and what they give up:

- Stop after step 5. Lilim alone is redone, with its slider. Saves about 90 generations. The portfolio shows one transformed project.
- Stop after Tanaw. Two projects, one house and one condo, cover the main audience. Saves about 65 generations.

## 10. Decisions Aedwon needs to make

1. Run step 1. It costs 6 to 10 generations and changes no project files.
2. After seeing it: plain shells, yes or no. This is the largest call, because it changes Lilim's look on Home.
3. The direction, or a mix.
4. Complexity level for the rest. I recommend ambitious, gated as in 9.2.
5. The reopened items in section 8, items 1 to 8.
6. Dalampasigan as a takeover of an older inn (recommended), or a new build as now.
7. Pahinga on the beach (recommended), or in the highlands.
8. Later, from rendered options: the slider, the project-page sections, and whether Home and the service page carry a pair.

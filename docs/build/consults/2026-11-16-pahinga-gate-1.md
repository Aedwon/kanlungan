# Pahinga Villas, gate 1: the whole set, eleven images (Fable 5.2, 2026-11-16)

Status: **Prompts for every Pahinga image.** They follow `docs/content/project-designs/pahinga-villas.md`, `docs/design/studio-hand.md`, the photography rules in `docs/content/image-briefs.md`, and the pattern of the Dalampasigan gate file. Images go to `design/pahinga/`.

The set is two new befores and nine furnished frames. With the approved villa bedroom before, that is three pairs and six story frames.

## 1. Three jobs

The three jobs share no room, so they can run at the same time on three Codex accounts (`CODEX_PICK_PARALLEL=1`). Inside a job, run the images in the order given.

| Job | # | File in `design/pahinga/` | What it is | Needs first |
|---|---|---|---|---|
| **1. Villa bedroom** | 1.1 | `pahinga-hero.png` | P1 after, late morning, 16:9 | `pahinga-hero-before.png`, already there |
| | 1.2 | `pahinga-sitting-corner.png` | The other half of the room, evening, 16:9 | Drawing |
| | 1.3 | `pahinga-bedside.png` | The side table and the lantern, night, 3:4 | 1.1, checked |
| **2. Terrace and grove** | 2.1 | `pahinga-terrace-before.png` | P2 before, low morning sun, 16:9 | Drawing |
| | 2.2 | `pahinga-terrace.png` | P2 after | 2.1, checked |
| | 2.3 | `pahinga-daybed.png` | The daybed in the afternoon, 3:4 | 2.2, checked |
| | 2.4 | `pahinga-grove.png` | One villa in the grove, late afternoon, 16:9 | 2.2, checked |
| **3. Reception and bath** | 3.1 | `pahinga-reception-before.png` | P3 before, evening, 16:9 | Drawing |
| | 3.2 | `pahinga-reception.png` | P3 after | 3.1, checked |
| | 3.3 | `pahinga-welcome.png` | The drinks table, afternoon, 3:4 | 3.2, checked |
| | 3.4 | `pahinga-bath.png` | The villa bath, soft morning, 3:4 | Nothing |

"Checked" means the lead has looked at that image against its drawing and its edge list. A job may make an independent frame while it waits. In job 1, make 1.2 while 1.1 is checked. In job 3, make 3.4 while 3.1 is checked.

`pahinga-hero-before.png` is a copy of the approved `design/round-4-calibration/pahinga-bedroom-before.png`. It is not regenerated.

The jobs stay independent because of one design decision: all terrace furniture stands in front of the bath wall, where the hero camera cannot see it. The hero keeps the bare slab of its before. Job 2 never needs the hero.

Expect 15 to 24 generations.

## 2. The pipeline for every image

1. **Check the drawing.** The drawings are in `design/pahinga/drawings/`, made by `draw_views.py`. Run `python3 draw_views.py` to make them again and to print the percents used below. `hero-check.png` is the fitted hero camera with the furniture layout. It is for the lead's checks only and is not a reference for any prompt.
2. **Generate the before** with the drawing as image 1.
3. **Check the before against the drawing** and count its sockets, fans, and lights. If a socket has drifted, the lead may move it in the before. If the camera is wrong, regenerate.
4. **Generate the after as an edit of the before.**
5. **Run the shell color correction** (`design/tools/pairfix.py`) on every after and story frame.
6. **Register and check alignment,** as the pairing method sets out.
7. **Run the review list** in the image briefs on every image and on the set, starting with item 0, realism.
8. **Show Aedwon,** and say what was checked, what was regenerated, and what is left for his eye.

**Fallbacks if a pair drifts.** Move a socket by pixels in the before. Or make the before by emptying the approved after. The befores here are easy to empty: every piece stands on the floor, nothing is built, and each after names its loose pieces.

## 3. How these prompts hold the camera, the fixed details, and the look

The Lilim, Tanaw, and Dalampasigan lessons are built in.

- **A drawing sets each new camera.** Each prompt lists the frame by its edges, in percent from the left and from the top. The numbers come from the script. The hero's numbers are measured on the approved before.
- **Each after lists every fixed item by count and place,** names each socket, and says the camera does not move. The hero names both left wall sockets by position, because Aedwon caught them moving.
- **Sockets have a type.** Every socket is a white Philippine double socket with round holes, as in the approved before. No prompt allows a square three-pin socket.
- **The frame and the fan have heights.** The hero gives the top of the bed frame and the fan by position, and asks for clear ceiling between them.
- **The sliding doors keep their state.** Two closed panels and an open middle, at the same percents.
- **No prompt asks for warmth.** The words "warm," "cozy," "golden," and "glow" are not used for light. Each after says the walls and ceiling keep the color of image 1.
- **Realism first.** Each prompt asks for a real photograph of a place that is well kept. None asks for dirt, stains, or damage. The frames that look outdoors, 2.1 to 2.4, carry a realism block for the outside and take the approved before as a real-looking reference of the same grove.
- **Glass reflects only what faces it.** Night frames have no glass in view. The terrace pair has no glass in view. The grove frame says what the glass may show.
- **A piece seen in two frames matches.** Each story frame takes the approved after of its room as image 1.
- **One villa only.** No frame shows two villas. If a later frame must, generate the second villa from the first.
- **No lamp shape repeats** across the rooms, and none repeats a shape from the three finished projects. Nothing from them returns: no stone slab table, no ink-band art, no capiz, no rattan daybed, no taro jars, no storage jar, no record console, no paper lantern, no landscape painting, no long acacia table, no reed lamp, no graphite drawing, no calamansi tree.
- **Hosted, not cluttered.** Each frame holds one or two signs that a guest is expected or has just arrived.
- **Furnishing only.** Every prompt forbids paint, built pieces, and new architecture.

The drawings are wireframes. Lines behind an object show through it. The prompts say so.

### The cameras with a drawing

The villa has its origin at the southwest corner of the bedroom. The pavilion has its own. x runs east and y runs north.

| View | Drawing | Camera | Heading | Height | Lens | Shape |
|---|---|---|---|---|---|---|
| Terrace, P2 | `drawings/terrace-p2.png` | On the terrace, 3.2 m out from the front wall, in front of the sliding doors | South-southwest, 197 degrees | 1.25 m | 24mm | 16:9 |
| Reception, P3 | `drawings/reception-p3.png` | In the southeast corner, 0.5 m from each wall | Northwest, 315 degrees | 1.3 m | 24mm | 16:9 |
| Sitting corner | `drawings/sitting-corner.png` | Beside the foot of the bed, 4.3 m from the west wall | West, 268 degrees | 1.2 m | 24mm | 16:9 |

### Reference images

At most two shop references per image, and only for a piece that leads in that frame. Shop references are in `design/photography/`.

| Image | References, in order |
|---|---|
| 1.1 | (1) `pahinga-hero-before.png`, (2) `design/round-4-calibration/pahinga-bedroom-B-collected.png` as the look, (3) `sulok-studio.png`, (4) `dapithapon-studio.png` |
| 1.2 | (1) `drawings/sitting-corner.png`, (2) `pahinga-hero-before.png` for the finishes, (3) `sulok-studio.png` |
| 1.3 | (1) `pahinga-hero.png`, (2) `sulok-studio.png` |
| 2.1 | (1) `drawings/terrace-p2.png`, (2) `pahinga-hero-before.png` for the finishes and the grove |
| 2.2 | (1) `pahinga-terrace-before.png`, (2) `dapithapon-studio.png`, (3) `bakal-studio.png` |
| 2.3 | (1) `pahinga-terrace.png`, (2) `bakal-studio.png` |
| 2.4 | (1) `pahinga-terrace.png`, (2) `pahinga-hero-before.png` for the grove and the building's finishes |
| 3.1 | (1) `drawings/reception-p3.png`, (2) `pahinga-hero-before.png` for the finishes |
| 3.2 | (1) `pahinga-reception-before.png`, (2) `aparador-studio.png`, (3) `dapithapon-studio.png` |
| 3.3 | (1) `pahinga-reception.png` |
| 3.4 | (1) `pahinga-hero-before.png` for the finishes |

## Job 1: villa bedroom

### Prompt 1.1: the hero, a villa bedroom in late morning

References: (1) `design/pahinga/pahinga-hero-before.png`, (2) `design/round-4-calibration/pahinga-bedroom-B-collected.png`, (3) `sulok-studio.png`, (4) `dapithapon-studio.png`. Save as `pahinga-hero.png`.

Must match: image 1 for everything fixed.

```text
Edit image 1 into the same room after an interior design studio has furnished it as the bedroom of a private villa in a coconut grove. It is a photograph for a design magazine, taken late in the morning. The villa is ready for a guest.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1. Check it by these marks, measured from the left as a share of the width and from the top as a share of the height:
- On the long left wall, two white double sockets with round holes, low. The nearer one is at about 10 percent across and 75.5 percent down. The farther one is at about 26.5 percent across and 66.5 percent down.
- The far left corner of the room is at about 33.5 percent across.
- The sliding doors, in a plain silver aluminum frame, run from about 34 to 72.5 percent across and from 29.5 to 70.5 percent down. The left glass panel is closed, from about 35 to 44 percent. The middle is open, from about 45 to 60.5 percent. The right glass panel is closed, from about 61 to 71.5 percent.
- The far right corner is at about 74 percent across.
- The white air conditioner is high on the right wall, from about 74 to 80 percent across and 9 to 23 percent down.
- On the right wall, one white flush door in a white frame, from about 84.5 to 94 percent across, with a steel lever handle at about 86 percent across and 59 percent down. Then one white switch plate with three switches, at about 97 percent across and 39.5 to 47 percent down.
- On the ceiling, one white ceiling fan with three blades. Its hub is at about 42.5 percent across and 12.5 percent down, and its blade tips reach from about 32.5 to 51.5 percent across. Two small recessed downlights, at about 36 percent across and 20 percent down, and at about 64.5 percent across and 18 percent down.
- Through the doors: a bare concrete terrace with dappled sun, a flat white roof, and one white column at about 40 to 41.5 percent across.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: the left wall, the far wall, the right wall, the white ceiling, the cream floor tile and its joints, the white baseboard, the sliding door frame, its two closed panels and its open middle, the air conditioner, the ceiling fan, both downlights, the door, its frame, and its lever handle, and the switch plate. THE TWO SOCKETS ON THE LEFT WALL DO NOT MOVE. The nearer one stays at 10 percent across and 75.5 percent down and stays in plain view on clear white wall. The farther one stays at 26.5 percent across, and the bed now stands in front of it and hides it. Do not draw a socket at any other place. Every socket is a white double socket with round holes, never a square three-pin socket. Do not add, move, or delete any socket, switch, light, fan, or cooling unit. No wall is painted. Nothing is built. THE TERRACE AND THE VIEW THROUGH THE DOORS STAY EXACTLY AS IN IMAGE 1: the same bare concrete slab with the same dappled sun, the same white column, the same tree trunks, the same undergrowth. No furniture, plant, or lamp stands on the terrace.

LIGHT. The same hour and daylight as image 1, about 10:30 in the morning. Bright, even daylight from the doors. No direct sun enters the room. The downlights are off. Both bedside lanterns are off, because it is a bright morning. The fan is still. THE WHITE WALLS AND THE CEILING KEEP EXACTLY THE COLOR AND BRIGHTNESS THEY HAVE IN IMAGE 1, white, not cream, not yellow, not darker. No color cast over the frame. One natural exposure with true darks and clean whites. The view stays brighter than the room and keeps its detail. No HDR.

THE GLASS. As in image 1, the two closed panels are clear glass and show the terrace and the grove. They reflect nothing.

THE DESIGN. Follow image 2 for the mood and for the look of the bed, the white netting, the bed linen, the cushions, the rust throw, the striped rug, the brown curtains, the cane chair, and the old chest: a white room with red-brown mahogany, honey cane, oat linen, and cloth in tobacco brown, rust, and moss green. Do not copy image 2's lamps, its plant, its jar, its painting, its bedside tables, its sockets, the size of its bed, or the position of anything. The layout is this.

The bed, on the left:
- One four-post bed in natural red-brown mahogany, queen size, with its head against the left wall. It is 165 cm wide and 203 cm long. It has four plain square posts and four plain top rails. THE TOP RAILS ARE 1.90 M ABOVE THE FLOOR, WELL BELOW THE CEILING FAN. The post at the head nearer the camera stands at about 16.5 percent across, from 30.5 to 80 percent down. The post at the foot nearer the camera stands at about 45 percent across, from 28.5 to 83 percent down. The far foot post is at about 50.5 percent across and the far head post at about 29.5 percent across.
- THE WHOLE CEILING FAN STAYS IN VIEW, EXACTLY AS IN IMAGE 1. No post, rail, or netting touches it, crosses it, or hides any part of it. A clear band of white ceiling and wall, at least 12 percent of the frame height, lies between the blades and the top of the bed frame.
- The headboard is low, a mahogany frame with one panel of woven honey-colored cane, against the left wall. Its top is at about 51 percent down.
- White cotton netting hangs inside the frame. It is gathered and tied back at each of the four posts with a cotton tape. It hangs below the top rails. Nothing is draped over the top.
- The bed is made for a guest: an oat linen cover pulled smooth, two oat pillows, two moss green cotton cushions, one long cushion in narrow rust and cream stripes, and one rust cotton throw folded in a band across the foot.
- The foot of the bed stands in front of the left part of the open doors. The right half of the open middle, from about 52 to 60.5 percent across, stays a clear view of the terrace and the grove.

Beside the bed, on the left wall:
- From about 12 to 21.5 percent across, between the nearer socket and the bed: one small side table like image 3, in black-stained wood, with one shelf. Its top is at about 68 percent down. It does not cover the socket. On it, a small lantern and a glass water bottle with a glass turned over its neck. The lantern's thin cord runs to the nearer socket, where one white plug sits.
- From about 31 to 34 percent across, on the far side of the bed: a second side table, the same. On it, a second lantern, the same, and one book.
- The two lanterns are a pair. Each is a standing box lantern, 38 cm tall and 18 cm square: a plain square frame of red-brown mahogany on four short feet, with four panels of cream woven abaca cloth. Both are switched off. No jar-shaped lamp, no ceramic lamp, and no cone shade.

At the doors:
- Curtains: plain tobacco brown linen on one slim white track on the ceiling. Two panels, drawn open. The left one hangs in a stack from about 34 to 40 percent across, from the ceiling to the floor, behind the far side of the bed. The right one hangs in a stack from about 67.5 to 72 percent across, in front of the right end of the glass. THE RIGHT STACK STOPS AT 72 PERCENT. It does not reach the corner, and it does not hang under, beside, or in front of the air conditioner. The air conditioner stays fully in view.
- In front of the right closed panel, from about 62 to 71.5 percent across: the rattan lounge chair in image 4, with its woven cane back, turned toward the room. Its top is at about 58.5 percent down. On it, one rust cotton cushion and a folded newspaper. It does not stand in the open middle.

Along the right wall, from the doors toward the camera:
- From about 72 to 78 percent across: one bird's nest fern in a planter. The planter is a plain upright cylinder, 45 cm across and 55 cm tall, woven in dark brown vine, with its top at about 65 percent down. The fern is a rosette of long, broad, undivided, glossy green fronds with wavy edges, rising to about 46 percent down. It is not a palm, not a taro, and not a rubber tree. It has no flowers.
- From about 74 to 85 percent across: one old chest in dark worn hardwood, 100 cm long, with a small iron lock plate, standing against the right wall. Its top is at about 66 to 71 percent down. It is seen almost end-on. On it, a straw hat and one folded beach towel. It ends short of the door frame.
- On the right wall above the chest, from about 81 to 85 percent across and 28 to 48 percent down, seen at a steep angle: one oil painting in a thin mahogany frame, 85 cm wide and 65 cm tall. It is a still life: a bowl, a bottle, and two fruits on a table, in rust, ochre, moss green, and off-white on a gray-brown ground. It does not picture trees, palms, a garden, or a landscape. It hangs to the left of the air conditioner, not under it.
- Nothing stands in front of the door. The switch plate stays in plain view.

On the floor:
- One flat handwoven abaca rug, 2 by 3 m, in wide stripes of tobacco brown and cream, as in image 2. It lies under the lower part of the bed and reaches past its foot toward the right. Its near edge runs from about 17 percent across, 85 percent down, to about 70 percent across, 92 percent down.
- The floor in front of the camera and along the right side is clear cream tile.

Palette: white walls, cream tile, red-brown mahogany, honey cane, black-stained side tables, oat linen, white netting, tobacco brown, rust, moss green, and the green of the fern. No other color.

Everything is ready and well kept: linen with one fold line, real wood grain, a slight variation in the cane, a soft dent in one pillow. A private villa, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text. No logos. No television in this view. No copy of any recognizable designer bed, lamp, or chair: plain, anonymous forms. No flowers. No palms or coconuts indoors. No shells, driftwood, baskets on walls, carvings, or souvenirs. No canopy cloth over the bed. No pendant. No new walls, windows, moldings, beams, shelves, or ceiling features.
```

### Prompt 1.2: the sitting corner in the evening

References: (1) `design/pahinga/drawings/sitting-corner.png`, (2) `design/pahinga/pahinga-hero-before.png`, (3) `sulok-studio.png`. Save as `pahinga-sitting-corner.png`.

This frame looks the other way down the same room. Nothing in it is in the hero frame, so it does not wait for 1.1. If 1.1 is already checked, add `pahinga-hero.png` as a last reference for the wood, the cane, and the cloth colors only.

```text
Create one photograph for a design magazine: the sitting half of a villa bedroom in a coconut grove in Panglao, Bohol, Philippines, in the evening. Aspect 16:9. Full-frame camera, 24mm lens, camera level at 1.2 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the two corners, the floor lines, the ceiling lines, the door, and the three small plates. The drawing is a wireframe. Do not draw its lines in the photograph. Build the room so that its real edges fall on them.

IMAGE 2 SHOWS THE SAME ROOM, EMPTY, SEEN THE OTHER WAY. Use it for the finishes only: the same smooth white painted walls with a low white baseboard, the same cream floor tile, 60 cm square, with thin joints, the same flat white ceiling, the same kind of plain white flush door with a steel lever handle, the same white switch plates and white double sockets with round holes. Image 3 is the small side table. Do not copy image 2's camera, its sliding doors, or its light.

THE FRAME. The camera looks at the end wall of the room. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to 14.5 percent: the left side wall, plain white, running away from the camera.
- At 14.5 percent: the left corner. Its top is at 9.5 percent down and its foot at 82.5 percent down.
- From 14.5 to 79 percent: the end wall, plain white, facing the camera. In it, one white flush door in a white frame, closed, from 25 to 38.5 percent across, with its head at 25.5 percent down and a steel lever handle on its left side. One white switch plate at 22 percent across, 48 percent down. One white double socket, low, at 71 percent across, 74 percent down.
- At 79 percent: the right corner. Its top is at 8 percent down and its foot at 83.5 percent down.
- From 79 percent to the right edge: the right side wall, plain white.
- Top: the flat white ceiling. Bottom: cream floor tile.
There is no window, no glass, and no outside view in the frame. The sliding doors are behind the camera. The ceiling fan is behind the camera and is not in the frame.

THE DESIGN.
- Against the left side wall, in the corner, from about 3.5 to 20 percent across: one low console in red-brown mahogany, 150 cm long and 55 cm high, with two sliding doors of woven honey-colored cane. Its top is at about 68 to 77 percent down. It is seen at a steep angle.
- On the console: one television, 55 inches, switched off, a matte dark rectangle from the left edge to about 15 percent across and from 47 to 69 percent down. It shows only one faint, small, soft reflection of a lamp. No picture, no logo. Beside it on the console: a small wooden tray with a plain kettle, two stoneware cups, and two glasses, a remote, a pair of sunglasses, and a paperback.
- On the floor inside the door, at about 29 percent across: a small plain door mat with one pair of leather sandals on it. Beside the console, a canvas tote bag.
- On the end wall, from about 51 to 63 percent across and 28 to 55 percent down: one oil painting in a thin mahogany frame, 80 cm wide and 100 cm tall, upright. It is a still life: a jug, a folded cloth, and three small fruits on a table, in rust, ochre, moss green, and off-white on a gray-brown ground. It does not picture a landscape, trees, or the sea.
- In the right corner, at about 77 percent across: the small side table in image 3, in black-stained wood, with its top at about 70.5 percent down. On it, one lamp, switched on: a base cut from one piece of smooth cream stone, shaped like a tall rounded pebble, with a narrow cone shade of rust-colored cotton. About 45 cm tall. Its cord runs to the socket at 71 percent, where one white plug sits.
- Against the right side wall, from about 67 percent across to the right edge: one two-seat settee, 140 cm long, with a plain square frame of red-brown mahogany, a back and sides of woven honey-colored cane, and loose seat cushions in oat linen. It faces left, toward the television. Its near end is cropped by the right edge and the bottom of the frame. On it, one moss green cushion with a dent in it, and a light cotton shawl over the far arm.
- In front of the settee, at about 52 percent across and 81 percent down: one low round table in mahogany, 70 cm across, on three square legs. On it, two glasses, a small bowl of peanuts, and a deck of cards.
- Under the low table: one flat handwoven abaca rug in plain cream, about 1.6 by 2.3 m. Its near edge is cropped by the bottom of the frame.
- A clear walk of cream tile runs from the door toward the camera, between the console and the rug.

LIGHT. About 8:00 pm, dark outside. The lamp in the corner is on. Two recessed downlights in the ceiling, above the top of the frame, are on low with soft white bulbs. Two bedside lanterns behind the camera are on. Together they light this half of the room evenly and comfortably: a person could read on the settee. It is not dim. THE WHITE WALLS AND THE CEILING READ WHITE, not cream, not yellow, not orange, everywhere more than 1 m from the lamp. The lamp's light is soft white, a little brighter on the two walls right beside it. No color cast over the frame. One natural exposure with true darks. No HDR.

A room that a guest is using, well kept: a dented cushion, a shawl left on the arm, real wood grain, a slight variation in the cane. A private villa, clean and cared for. A real photograph with fine grain, not a render. The door is left of center and the painting right of center, so the frame is not symmetrical. No people. No readable text on any book, card, or device. No logos. No copy of any recognizable designer settee, lamp, or table: plain, anonymous forms. No window and no glass. No pendant and no ceiling fan in the frame. No flowers. No plants in this half of the room. No palms, coconuts, shells, driftwood, baskets on walls, carvings, or souvenirs. No built shelves, niches, moldings, or wall lights. No square three-pin sockets.
```

### Prompt 1.3: the bedside at night

References: (1) `design/pahinga/pahinga-hero.png`, (2) `sulok-studio.png`. Save as `pahinga-bedside.png`. Start only after image 1.1 is checked.

Must match 1.1: the bed post, the cane headboard, the side table, the lantern, the netting, the linen, the moss cushion.

```text
Create one photograph for a design magazine: a close view of one bedside in the same villa bedroom as image 1, at night. Aspect 3:4, upright. Full-frame camera, 85mm lens, camera level at 0.8 m, all verticals straight, about f/4.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS ROOM, taken in the morning. In it, a four-post mahogany bed stands with its cane headboard against the left wall, with a small black side table and a box lantern on each side. Use image 1 for every piece and every finish. Each piece below looks exactly as it does in image 1: the same form, color, size, and material. Image 2 is the side table. Do not copy image 1's framing. This is a different standpoint.

THE CAMERA. It stands near the foot of the bed, about 2.4 m from the wall, and looks at the wall and the bedside nearer the room's entry. No window and no glass are in the frame. By position:
- The whole background is the plain smooth white wall, with a low white baseboard and a strip of cream floor tile along the bottom.
- Left of the middle, standing against the wall: the small side table in image 2, in black-stained wood, with one shelf, 50 cm high.
- On the table: the box lantern from image 1, 38 cm tall, a plain square frame of red-brown mahogany on four short feet with four panels of cream woven abaca cloth. It is switched on, and its cloth panels are evenly lit from inside. Beside it: a glass of water, a pair of reading glasses, and a phone lying face down on a thin white charging cable.
- On the wall to the left of the table, low, about 30 cm above the floor: one white double socket with round holes, with two white plugs in it, the lantern's and the phone charger's.
- To the right of the table: one square mahogany bed post, running out of the top of the frame. A fall of white cotton netting hangs straight down from above, inside the post, to the mattress. It is let down for the night.
- Filling the right third of the frame, behind the netting and partly seen through it: the edge of the woven cane headboard in its mahogany frame, one oat pillow, one moss green cushion, and the oat linen cover turned down. A paperback lies face down on the cover at the open edge of the netting.
- At the lower edge: the corner of the striped abaca rug, tobacco brown and cream, on the cream tile.

LIGHT. About 9:30 pm. The lantern is the main light. It gives soft white light that falls on the table, the netting, the pillow, and the wall right beside it. The second lantern, out of the frame to the right, is also on, so the shadows are open and the headboard is readable through the netting. The ceiling lights are off. THE WHITE WALL READS WHITE away from the lantern, not cream, not orange. No color cast over the frame. One natural exposure. No HDR.

Everything looks ready and well kept: soft folds in the netting, real cane with slight variation, real wood grain. A real photograph with fine grain, not a render. No people. No readable text on the book or the phone. No logos. No copy of any recognizable designer lamp: plain, anonymous forms. No jar-shaped lamp and no cone shade. No flowers. No plants. No square three-pin sockets.
```

## Job 2: terrace and grove

### The realism block for the outside

Prompts 2.1 to 2.4 each carry this block. It is written into each prompt below, so nothing has to be pasted.

- A real coconut grove, photographed, not drawn. Gray trunks of different thickness, some leaning. Fronds in muted, true greens of several tones, some yellowing, a few brown and hanging. Undergrowth and rough grass with bare patches and fallen fronds.
- Pale sky with haze, seen in pieces between the fronds.
- Fine sensor grain. Muted, true color. Nothing neon, nothing evenly green, nothing symmetrical.
- The building is plain, new, and kept: clean paint, a swept slab. No stains, cracks, rubbish, or tools.

### Prompt 2.1: the terrace before

References: (1) `design/pahinga/drawings/terrace-p2.png`, (2) `design/pahinga/pahinga-hero-before.png`. Save as `pahinga-terrace-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of the empty covered terrace of a new villa in a coconut grove, early in the morning. Aspect 16:9. Full-frame camera, 24mm lens, camera level at 1.25 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the corner of the white wall, the foot of the wall, the edge of the floor slab, the edge of the roof, the small high window, the small plate low on the wall, the round ceiling light, and the column at the left edge. The drawing is a wireframe. Do not draw its lines in the photograph. Build the terrace so that its real edges fall on them.

IMAGE 2 IS A PHOTOGRAPH OF THIS SAME VILLA, taken from inside its bedroom, looking out through the sliding doors at this terrace and this grove. Use it for the finishes and the place: the same smooth white painted wall, the same bare pale gray concrete terrace slab, the same flat white terrace roof, the same white square column, the same coconut grove with gray trunks, low green undergrowth, and rough grass. Match its photographic quality. Do not copy its camera or its room.

THE FRAME. The camera stands on the terrace and looks along it toward its end. Measured from the left as a share of the width, and from the top as a share of the height:
- From 68.5 percent to the right edge: the front wall of the villa, plain smooth white, running toward the camera on the right. It is unbroken white wall to the right edge of the frame. High in it, from 74 to 81.5 percent across and 26 to 37 percent down: one small window of frosted glass louvers in a silver aluminum frame. Low in it, at 87.5 percent across and 74 percent down: one small white outdoor socket with a closed cover.
- At 68.5 percent: the end of that wall, a sharp vertical corner, from 18 percent down to 76 percent down. Beyond it the terrace is open.
- From the left edge to 68.5 percent: the open end and the open side of the terrace, with the grove beyond.
- At the left edge, from about 1 to 5 percent across: one white square column from the floor to the roof.
- Bottom: the bare concrete slab. Its far edge runs from the foot of the wall corner, at 68.5 percent across and 76 percent down, to the left edge of the frame at about 85 percent down. Beyond the edge: rough grass, a little lower than the slab.
- Top: the flat white underside of the roof. Its far edge runs from the top of the wall corner, at 68.5 percent across and 18 percent down, to the left edge of the frame at about 8 percent down. On it, at 43 percent across and 6 percent down: one plain round white ceiling light, switched off.
THERE IS NO GLASS IN THE FRAME. The villa's sliding doors are out of the frame, to the right of the right edge. No door, no window but the small louver window, and no reflection.

The villa is in Panglao, Bohol, Philippines. The terrace is completely empty and swept. No furniture, rugs, lamps, plants in pots, or objects.

LIGHT. About 7:00 in the morning, a clear day. The sun is low in the east, to the left of the camera and a little behind it. It comes in under the roof between the palm trunks. It lays long, soft-edged, broken patches of direct sun across the concrete slab and onto the white wall, up to about head height. Above head height the wall is in the shade of the roof. The patches are shaped by palm fronds and trunks. The underside of the roof is in shade. The grove beyond the terrace is partly in sun and partly in long shadow. Correct exposure. Neutral white balance: the wall in shade reads white to faintly cool, and the sunlit patches are brighter and a little yellow-white, as low sun is. No color cast over the frame. One natural exposure. The grove keeps its detail. No HDR.

REALISM OUTSIDE. A real coconut grove, photographed, not drawn. Gray trunks of different thickness, some leaning, at uneven spacing. Fronds in muted, true greens of several tones, some yellowing, a few brown and hanging. Low undergrowth and rough grass with bare sandy patches and two or three fallen fronds. Pale sky with haze, seen in pieces between the fronds. Fine sensor grain. Muted true color. Nothing neon, nothing evenly green, nothing symmetrical. The building is plain, new, and kept: clean paint and a swept slab. No stains, cracks, rubbish, or tools.

No people. No readable text. No logos. No other building in the frame. No sea, no beach, no pool. No flowers. No drawn lines. No railing, steps, planters, pergola, timber, or stone.
```

### Prompt 2.2: the terrace after

References: (1) `design/pahinga/pahinga-terrace-before.png`, (2) `dapithapon-studio.png`, (3) `bakal-studio.png`. Save as `pahinga-terrace.png`.

```text
Edit image 1 into the same terrace after an interior design studio has furnished it as the outdoor room of a private villa. It is a photograph for a design magazine, taken early in the morning, just after breakfast has been carried out.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1: the corner of the white wall stays at 68.5 percent of the width from the left, the small louver window stays from 74 to 81.5 percent, the column stays at the left edge, and the edge of the slab and the edge of the roof stay where they are.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: the white wall and its corner, the louver window, the outdoor socket at 87.5 percent, the concrete slab and its edge, the white roof and its edge, the column, and every tree trunk, frond, and patch of grass in the grove. The round ceiling light at 43 percent across is the one thing that changes: a hanging lamp now hangs from that same point, as described below. Do not add any socket, switch, light, door, or window. No wall is painted. Nothing is built. No glass is in the frame.

LIGHT. The same minute as image 1, about 7:00 in the morning. The same low sun from the left. THE PATCHES OF SUN ON THE WALL AND THE SLAB FALL EXACTLY WHERE THEY FALL IN IMAGE 1. The same sun now also falls on the furniture inside those patches, and each piece casts a long soft shadow that points to the right, toward the wall. No lamp is on, because the sun is on the terrace. THE WHITE WALL AND THE ROOF KEEP EXACTLY THE COLOR AND BRIGHTNESS THEY HAVE IN IMAGE 1 wherever the sun does not strike. No color cast over the frame. One natural exposure with true darks and a clean bright. No HDR.

THE DESIGN. An outdoor room in front of the white wall.

- Against the white wall, under the louver window, from about 59.5 to 90 percent across: one low daybed made for the villa. It is a plain platform of red-brown mahogany slats, 200 cm long and 90 cm deep, with a plain mahogany back rail along the wall, and one thick flat mattress cushion in oat-colored cotton canvas. The top of its back rail is at about 61 to 66.5 percent down. On it, two round bolsters, one rust and one moss green, and one folded cotton blanket. It is wood, not rattan and not cane.
- Beside the daybed's far end, from about 53 to 57 percent across: the rattan lounge chair in image 2, with its woven cane back, turned toward the daybed. Its top is at about 62 percent down.
- In front of the daybed, at about 62.5 percent across: the small round black steel drinks table in image 3, 50 cm high, with nothing on it.
- Under the daybed and the drinks table: one flat handwoven abaca rug in plain cream, about 2 by 2.3 m. Its near corner is cropped by the bottom of the frame.
- Left of center, from about 36 to 51 percent across: one square dining table in red-brown mahogany, 80 cm square and 74 cm high, on four square legs. Its top is at about 63 to 66.5 percent down and its feet are at about 88 to 90 percent down.
- At the table: two plain folding chairs with a mahogany frame and a woven cane seat and back. One is on the side nearer the camera, seen from behind, pulled out a little. One is on the far side, facing the camera.
- On the table: a plain mahogany tray with two handles, just set down. On and around it: two plates of cut mango and papaya, two stoneware cups, a plain steel coffee pot, a small jug of milk, a small basket of bread rolls under a cloth, and two folded napkins.
- Over the table, hanging from the ceiling point at 43 percent across: one hanging lamp, a deep bell of open-weave natural rattan, 45 cm across and 40 cm tall, on a plain cord. Its top is at about 21.5 percent down and its rim at about 35.5 percent down. A small white ceiling cup covers the point. It is switched off.
- The slab to the left of the table and all along the left of the frame stays bare concrete. The outdoor socket at 87.5 percent stays in view beside the daybed.

Palette: white wall, gray concrete, red-brown mahogany, honey cane and rattan, oat canvas, cream abaca, rust, moss green, one small black table, and the colors of the fruit. No other color.

REALISM OUTSIDE. The grove stays exactly as in image 1: a real coconut grove, photographed, with gray trunks, muted true greens in several tones, some yellowing fronds, rough grass, and hazy sky between the fronds. Fine sensor grain. Nothing neon, nothing evenly green.

Everything looks in use and well kept: a chair pulled out, a cloth half over the bread, real wood grain, a slight sag in the canvas cushion. A private villa, clean and cared for. A real photograph, not a render. No people. No readable text. No logos. No copy of any recognizable designer chair, table, daybed, or lamp: plain, anonymous forms. No flowers. No plants in pots. No palms in pots, no taro, no jars. No lanterns on the floor. No candles. No hammock. No coconuts, shells, driftwood, or souvenirs. No other building. No railing, steps, planters, pergola, or screens. No glass.
```

### Prompt 2.3: the daybed in the afternoon

References: (1) `design/pahinga/pahinga-terrace.png`, (2) `bakal-studio.png`. Save as `pahinga-daybed.png`. Start only after image 2.2 is checked.

Must match 2.2: the daybed, its cushion, both bolsters, the drinks table, the rug, the wall, the louver window.

```text
Create one photograph for a design magazine: a close view of the daybed on the same villa terrace as image 1, in the afternoon. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 1.0 m, all verticals straight, about f/5.6.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS TERRACE, taken in the early morning. In it, a low wooden daybed stands against the white wall under a small louver window, with a small round black table in front of it and a cream rug under it. Use image 1 for every piece and every finish. Each piece below looks exactly as it does in image 1: the same form, color, size, and material. Image 2 is the small black table. Do not copy image 1's framing or its light. This is a different standpoint.

THE CAMERA. It stands about 2.5 m from the wall, where the dining table is, and looks at the wall and the daybed at a slight angle from the left. No glass door is in the frame. By position:
- The whole background is the plain smooth white wall. Near the top of the frame, cropped by it: the lower edge of the small louver window in its aluminum frame.
- Across the middle and lower part of the frame: the daybed, a low platform of red-brown mahogany slats with a plain back rail along the wall and a thick flat mattress cushion in oat-colored cotton canvas. Its right end runs out of the frame.
- On the daybed: the rust bolster pushed into the corner against the back rail, with a dent in it. The moss green bolster lying flat. A paperback open and face down on the cushion. A straw hat. A light cotton blanket, half unfolded.
- In front of the daybed, left of the middle: the small round black steel drinks table in image 2. On it, a glass of iced water and a small plate with a half-eaten slice of cake and a fork.
- Low on the wall at the left: one small white outdoor socket with a closed cover.
- Bottom: the cream abaca rug, and a strip of gray concrete at the lower left. One pair of sandals on the concrete beside the rug.

LIGHT. About 4:30 in the afternoon. The sun is behind the villa, so the whole terrace is in open shade. The light is soft, even, and neutral, and comes from the left, from the open side of the terrace. No direct sun and no lamp. THE WHITE WALL READS WHITE, not cream, not yellow, not blue. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

A daybed that a guest has just left, well kept: a dented bolster, a page corner lifted, drops of water on the glass, real wood grain. A real photograph with fine grain, not a render. No people. No readable text on the book. No logos. No flowers. No plants. No lantern, no candle, no jar. No coconuts, shells, or souvenirs.
```

### Prompt 2.4: one villa in the grove

References: (1) `design/pahinga/pahinga-terrace.png`, (2) `design/pahinga/pahinga-hero-before.png`. Save as `pahinga-grove.png`. Start only after image 2.2 is checked.

The building is the owners'. Kanlungan's work shows only as the terrace furniture, the pendant, and the curtains. No drawing is made for this frame. If job 1 has a checked `pahinga-hero.png`, add it as image 3 and add one line to the prompt: "Image 3 is the bedroom behind the sliding doors. Use it only for the bed and the curtains seen through the open doors."

Must match 2.2: the daybed, the table and two chairs, the lounge chair, the pendant, the rug. Must match the hero before: the sliding door frame with two closed panels and an open middle, the column, the grove.

```text
Create one photograph for a design magazine: one small, plain, new, single-storey villa in a coconut grove, late in the afternoon. Panglao, Bohol, Philippines. Aspect 16:9. Full-frame camera, 35mm lens, camera level at 1.5 m, all verticals straight, about f/8.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS VILLA'S TERRACE, taken from on the terrace. Use it for the terrace furniture, which must look exactly the same here: the low mahogany daybed with an oat cushion against the white wall under the small louver window, the square mahogany table with two folding cane chairs, the rattan lounge chair, the small black table, the cream rug, and the bell-shaped rattan hanging lamp over the table. IMAGE 2 IS A PHOTOGRAPH TAKEN FROM INSIDE THIS VILLA, looking out. Use it for the building's finishes and for the place: the same silver aluminum sliding doors, the same white walls, the same white square column, the same flat white roof, the same bare concrete terrace, and the same coconut grove. Match its photographic quality. Do not copy its camera.

THE BUILDING. An ordinary new Philippine villa, not a designed pavilion. One plain white box with a flat roof, about 7.5 m wide across its front. The flat white roof runs forward over a deep covered terrace, about 5 m deep, and rests on two plain white square columns at the terrace's outer corners. The terrace floor is a bare concrete slab, one low step above the grass. It is seen at an angle from its right, so the front runs away from the camera to the left.
- The front wall, under the terrace roof, from the right: a plain white wall with one small high louver window, with the daybed against it. Then, to the left, a wide set of aluminum sliding doors in clear glass: the right panel closed, the middle open, the left panel closed.
- Inside, at each end of the sliding doors: a narrow stack of plain tobacco brown linen curtain, drawn open.
- Through the open middle of the doors, small and partly in shadow: the square posts of a mahogany four-post bed with white netting tied back, and one small box-shaped cloth lantern, switched on.
- On the side of the villa that faces the camera: a plain white wall with one small high window, and one white outdoor air conditioning unit on a low concrete pad, with its pipe running up the wall.

THE FRAME. Measured from the left as a share of the width:
- From the left edge to about 14 percent: the gray trunk of one coconut palm close to the camera, a little out of focus, leaning slightly.
- From about 22 to 80 percent: the villa, with its terrace toward the left and its side wall toward the right.
- From about 80 percent to the right edge: more trunks, undergrowth, and the grove going back.
- Top: palm fronds against a bright hazy sky. The roof of the villa is below the fronds.
- Bottom: rough grass with bare sandy patches, and a path of plain flat stepping stones that curves from the lower right to the terrace.
ONLY ONE VILLA IS IN THE FRAME. No other building, roof, or wall shows anywhere.

THE TERRACE, all loose pieces, as in image 1: the daybed against the white wall, the square table with two chairs in front of it, the lounge chair, the small black table, the cream rug, and the rattan bell lamp hanging over the table. On the table: two glasses and a jug. On the daybed: a paperback and a straw hat. The slab in front of the sliding doors is bare.

LIGHT. About 5:15 in the afternoon, a clear day. The sun is low and behind the villa, beyond its roof and to the left. The front of the villa and the terrace are in open shade. The tops of the palms are lit from behind, with bright edges on the fronds, and long shadows of trunks lie across the grass toward the camera. The rattan lamp over the table is switched on and gives a small, soft white light that lights the table top and a little of the wall beside it. The lantern inside is on. The sky is bright and pale, not blown out, and not orange. The white walls in shade read white to faintly blue. No color cast over the frame. One natural exposure with true darks and a clean bright. No lens flare streaks. No HDR.

THE GLASS. Each closed panel reflects only what faces it: the pale sky and the trunks and fronds of the grove in front of the villa, mirrored. The reflection is strongest on the panel seen at the steepest angle. Behind the reflection, dimly: the brown curtain and a white wall. No panel is a blank blue or black sheet. No panel shows a brightly lit room.

REALISM. This is a real photograph of a real, modest building, not an architectural render. Fine sensor grain. Muted, true color. A real coconut grove: gray trunks of different thickness at uneven spacing, some leaning, fronds in several greens with some yellowing and a few brown and hanging, low undergrowth, fallen fronds on the grass. Fronds and one trunk overlap the building unevenly. The camera is off the building's axis and nothing is symmetrical. Small true details: the outdoor unit and its pipe, a rain downpipe at one corner, a garden tap by the wall, uneven stepping stones. The building is new and kept: clean paint, clean glass, a swept terrace. No stains, cracks, peeling paint, rubbish, or tools.

No people. No readable text. No sign. No logos. No cars. No sea, beach, or pool. No flowers in bloom. No hammock. No lanterns on the ground, torches, or string lights. No taro, no jars, no plants in pots. No pitched roof, thatch, timber cladding, deck, pergola, screens, or stone walls.
```

## Job 3: reception and bath

### Prompt 3.1: the reception pavilion before

References: (1) `design/pahinga/drawings/reception-p3.png`, (2) `design/pahinga/pahinga-hero-before.png`. Save as `pahinga-reception-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of the empty reception room of a new small resort, in the evening. Aspect 16:9. Full-frame camera, 24mm lens, camera level at 1.3 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the corner, the floor lines, the ceiling lines, the air conditioner, the five small plates low on the walls, the ceiling fan, the blades of a second fan at the top edge, and the small round downlights. The drawing is a wireframe. Do not draw its lines in the photograph. Build the room so that its real edges fall on them.

IMAGE 2 SHOWS A VILLA BEDROOM AT THE SAME RESORT. Use it for the finishes only: the same smooth white painted walls with a low white baseboard; the same cream floor tile, 60 cm square, with thin joints; the same flat white ceiling; the same kind of white ceiling fan with three blades, recessed downlight, and white air conditioner; the same white double sockets with round holes. Do not copy its camera, its sliding doors, its view, or its light.

THE FRAME. The camera looks across a large room into its far corner. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to 60.5 percent: one long plain white wall, running away from the camera to the right. Low on it, three white double sockets, at about 9 percent across, 73.5 percent down; at about 37 percent across, 67.5 percent down; and at about 53.5 percent across, 64 percent down. High on it, from about 43.5 to 50 percent across, at about 27 to 32 percent down: one white split-type air conditioner.
- At 60.5 percent: the vertical corner where two walls meet. Its top is at 29.5 percent down and its foot is at 67 percent down.
- From 60.5 percent to the right edge: the end wall, plain white, facing the camera at an angle. Low on it, two white double sockets, at about 68 percent across, 63.5 percent down, and at about 85.5 percent across, 66.5 percent down. It has no door and no window in the frame.
- Top: the flat white ceiling. One white ceiling fan with three blades, its hub at about 73 percent across and 21.5 percent down. The blade tips of a second, nearer fan show at the very top edge, from about 27 to 55 percent across. Three small recessed downlights: at about 45.5 percent across, 14 percent down; at about 64.5 percent across, 23.5 percent down; and at about 98 percent across, 12.5 percent down.
- Bottom: cream floor tile, open and empty, filling the lower third of the frame.
There is no window, no glass, no door, and no outside view in the frame. The room's sliding doors are in the wall behind the camera's right shoulder.

The resort is in Panglao, Bohol, Philippines. The room is completely empty and clean, newly finished. No furniture, counter, rugs, lamps, plants, signs, or objects.

LIGHT. About 6:30 pm, dark outside. The downlights are on and give flat, cool-white light, with a soft pool on the floor under each. The fans are still. Correct exposure. Neutral white balance: the walls read white to faintly cool.

REALISM. A real photograph of a real room, not a render. Fine sensor grain. Muted true color. A new building: smooth paint, thin regular tile joints, a slight unevenness in the light on the long wall. The room is clean and sound: no dirt, stains, cracks, or damage. No people. No readable text. No logos. No drawn lines. No square three-pin sockets.
```

### Prompt 3.2: the reception pavilion after

References: (1) `design/pahinga/pahinga-reception-before.png`, (2) `aparador-studio.png`, (3) `dapithapon-studio.png`. Save as `pahinga-reception.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it as the reception room of a small resort of eight private villas. It is a photograph for a design magazine, taken in the evening, as guests arrive.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1: the corner where the two walls meet stays at 60.5 percent of the width from the left, the air conditioner stays from 43.5 to 50 percent, and the far ceiling fan's hub stays at 73 percent.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: both walls, the white ceiling, the cream floor tile, the air conditioner, the ceiling fan and the blade tips of the second fan, the three downlights, three double sockets low on the left wall at about 9, 37, and 53.5 percent, and two double sockets low on the end wall at about 68 and 85.5 percent. The socket at 85.5 percent is now behind the cabinet, which hides it. The other four stay in view, or show between the legs of a piece. Do not draw a socket at any other place. Every socket is a white double socket with round holes. Do not add any socket, switch, fan, light, door, or window. No wall is painted. Nothing is built. No counter is built. NO PENDANT OR HANGING LAMP: nothing hangs from the ceiling but the fans.

LIGHT. The same hour as image 1, about 6:30 pm. The downlights now have soft white bulbs and are on low. Two lamps are on. Together they light the room evenly and comfortably, the way a small resort lights its reception in the evening: the ceiling is visible, the corners are readable, and a person could read the register. It is not dim. THE WHITE WALLS AND THE CEILING KEEP THE COLOR THEY HAVE IN IMAGE 1, white, not cream, not yellow, not orange, everywhere more than 1 m from a lit lamp. Each lamp gives soft white light that is a little brighter on what is right beside it. No color cast over the frame. One natural exposure with true darks. No HDR.

THE DESIGN. Guests check in sitting down, at a table, as in a private house.

In the right half of the room:
- From about 56 to 86.5 percent across: one long writing table made for the room, in natural red-brown mahogany, 200 cm long, 90 cm deep, and 75 cm high, a plain top on four square legs. It stands free in the room, parallel to the end wall and about 2.4 m in front of it. Its top is at about 61 to 66 percent down. It is a loose table, not a counter.
- Behind the table, between it and the end wall, at about 75.5 percent across: one armchair with a plain square mahogany frame and a woven cane seat and back, facing the camera.
- In front of the table, on the side nearer the camera, at about 57 and 70 percent across: two more armchairs, the same, seen from behind, facing the table.
- On the table, at its left end, at about 62.5 percent across: one lamp about 40 cm tall, with a smooth turned ball of red-brown mahogany as its base and a drum shade of moss green cotton. It is switched on. It has no cord: it is a rechargeable lamp.
- On the table: a guest register lying open with a pen, a shallow mahogany tray with seven brass keys, each on a short loop of natural cord, a plain card terminal with no logo, and a small bell.
- Against the end wall, behind the table, from about 76 to 87 percent across: the tall cabinet in image 2, in natural mahogany with woven cane door panels, 110 cm wide and 170 cm tall. Its top is at about 43 percent down. Its doors are closed. The same piece, unchanged.
- Against the end wall, to the left of the cabinet, from about 60.5 to 71 percent across: one side table in the same mahogany, 150 cm long and 85 cm high, on square legs, with one slatted shelf low down, open below. On it: a plain clear glass jug of water with ice and green pandan leaves, six plain glasses, two of them filled, and a small wooden tray of rolled white hand towels. On its shelf: a stack of folded white beach towels. The socket at 68 percent shows below it.

In the left half of the room:
- Against the long left wall, from about 16.5 to 39.5 percent across: one settee, 160 cm long, with a plain square mahogany frame, a back and sides of woven honey-colored cane, and loose seat cushions in oat linen. On it, one rust cushion and one moss green cushion.
- On the left wall above the settee, from about 16 to 34.5 percent across and 32 to 54 percent down: one large oil painting in a thin mahogany frame, 160 cm wide and 110 cm tall. It is a still life: a few plain things on a long table, two bowls, a bottle, a folded cloth, and some small fruits, in rust, ochre, moss green, and off-white on a gray-brown ground. It does not picture a landscape, palms, a beach, or the sea.
- At about 11.5 percent across, by the left wall: one floor lamp, 160 cm tall, standing on three slim straight mahogany legs, with a tall cone-shaped shade of natural woven raffia cloth. It is switched on. Its cord runs to the socket at 9 percent.
- At about 42.5 percent across, by the left wall: one bird's nest fern in a plain upright cylinder planter woven in dark brown vine, 55 cm tall. The fern is a rosette of long, broad, undivided, glossy green fronds with wavy edges, rising to about 50 percent down. It is not a palm and not a taro. No flowers. The socket at 37 percent shows on the wall between the settee and the fern.
- In front of the settee: one low round mahogany table, 70 cm across, on three square legs, and two rattan lounge chairs like image 3, with woven cane backs, facing the settee and seen from behind and from the side. On the low table, a small stack of two books.
- Under that group: one flat handwoven abaca rug in plain cream, about 2.5 by 2.4 m.
- On the floor beside the settee: one guest's canvas bag.
- The wall under the air conditioner stays bare. The socket at 53.5 percent stays in view.

Palette: white walls, cream tile, red-brown mahogany, honey cane and rattan, oat linen, cream abaca, rust, moss green, the green of the fern, and small brass keys. No other color.

A walk at least 1 m wide stays clear between the two groups, from the camera to the table. Everything looks in use and well kept: a pen left on the open register, one key missing from the tray, real wood grain, chairs that are not perfectly in line. A small resort, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text on the register, the keys, or any device. No signs. No logos. No television. No copy of any recognizable designer chair, lamp, or table: plain, anonymous forms. No flowers. No palms, coconuts, shells, driftwood, or pictures of the sea. No religious figures, carvings, baskets on walls, or souvenirs. No taro, no jars. No new walls, windows, counters, shelves fixed to the wall, moldings, or ceiling features. No square three-pin sockets.
```

### Prompt 3.3: the welcome table

Reference: (1) `design/pahinga/pahinga-reception.png`. Save as `pahinga-welcome.png`. Start only after image 3.2 is checked.

Must match 3.2: the side table, the jug, the glasses, the towel tray, the cabinet's edge, the wall.

```text
Create one photograph for a design magazine: the drinks table in the same reception room as image 1, in the afternoon, when guests check in. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 1.2 m, all verticals straight, about f/5.6.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS ROOM, taken in the evening. In it, a long mahogany side table stands against the end wall, to the left of a tall cabinet with cane doors, with a glass jug, glasses, and a tray of rolled towels on it. Use image 1 for every piece and every finish. Each piece below looks exactly as it does in image 1: the same form, color, size, and material. Do not copy image 1's framing or its light. This is a different standpoint.

THE CAMERA. It stands about 1.8 m from the end wall and looks at the side table at an angle from the right. No window and no glass door are in the frame. By position:
- The background is the plain smooth white wall with its low white baseboard.
- Across the middle of the frame, running away to the left: the side table in red-brown mahogany, 85 cm high, on square legs, with one slatted shelf low down, open below.
- On the table, nearest the camera: the plain clear glass jug of water with ice and long green pandan leaves in it, with drops of water on the outside. Beside it, six plain glasses on a folded white cloth, two of them filled. Then the small wooden tray with eight rolled white hand towels, damp and cool. Then a small stoneware dish with wedges of green calamansi.
- On the shelf below: a neat stack of folded white beach towels.
- Low on the wall under the table: one white double socket with round holes, with nothing plugged in.
- At the right edge of the frame, cropped: the side of the tall mahogany cabinet with its woven cane door panel.
- Bottom: cream floor tile.

LIGHT. About 2:30 in the afternoon. Soft, even daylight comes from the sliding doors on the right, out of the frame. No lamp and no ceiling light is on. THE WHITE WALL READS WHITE, not cream, not yellow. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

A table set out for arriving guests, well kept: a ring of water under the jug, one towel a little unrolled, real wood grain. A small resort, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text. No logos. No flowers. No coconuts with straws, no paper umbrellas, no cut fruit on glasses. No shells or souvenirs. No lamp on this table. No square three-pin sockets.
```

### Prompt 3.4: the villa bath

The bath is a built room and the owners'. Kanlungan's work is loose. No drawing is made for this frame. It has one frame, so nothing must match it.

Reference: (1) `design/pahinga/pahinga-hero-before.png` for the finishes. Save as `pahinga-bath.png`.

```text
Create one photograph for a design magazine: part of the bathroom of a new private villa in a coconut grove in Panglao, Bohol, Philippines, in the morning. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 1.2 m, all verticals straight, about f/5.6.

Image 1 shows the bedroom of the same villa. Use it for the finishes only: the same smooth white painted walls, the same cream floor tile, the same low white baseboard.

THE FRAME. The camera stands about 1.8 m from the basin wall and looks at it at an angle from the right, so the mirror does not face the camera. By position, measured from the left as a share of the width and from the top as a share of the height:
- The back wall is smooth white painted plaster from the floor to the top of the frame. The floor is cream tile, from about 86 percent down.
- From 18 to 62 percent across: a plain white counter, 12 cm thick, fixed to the wall at about 60 percent down, with one white round basin set on it and one plain chrome tap. It is the owners'. The wall shows below the counter.
- Above it, from 22 to 58 percent across and from 20 to 52 percent down: a plain frameless rectangular mirror. THE MIRROR SHOWS ONLY WHAT FACES IT: plain white wall, and one edge of a white door frame. No camera, no person, no window.
- On the counter: a small ash-glazed stoneware cup with two toothbrushes, a small stoneware dish with a bar of white soap, two plain stoneware refill bottles with no labels, and a guest's small canvas toiletry bag.
- On the wall to the right of the mirror, at about 72 and 82 percent across and 28 percent down: two plain chrome hooks. On each, one cotton robe in oat color with one narrow rust stripe at the cuff.
- Below the robes, from 66 to 86 percent across, from about 68 to 88 percent down: one small square stool with a red-brown mahogany frame and a woven cane seat. On it, two folded white cotton towels.
- At the left edge, high on the side wall, from about 14 to 28 percent down: a small window of frosted glass louvers in an aluminum frame, bright with daylight.
- On the side wall below and beside that window, from about 4 to 14 percent across and 32 to 54 percent down: one staghorn fern mounted on a plain mahogany board, 30 by 40 cm, hung on one hook. The fern has a round shield of pale green at its base and a few long, forked, gray-green fronds hanging down like antlers. It is a real plant, a little uneven.
- On the floor: a white cotton bath mat in front of the counter, and under the counter a small round rattan laundry basket with a lid.

LIGHT. About 9:30 in the morning. Soft, even daylight through the frosted louvers at the left. It is the only source. The ceiling lights are off. THE WHITE WALLS READ WHITE, not cream, not yellow. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

A bathroom in a private villa, made ready for a guest and well kept: a crisp fold in a towel, one drop of water at the tap, a robe that hangs a little unevenly. A new room, clean and sound, with nothing built by the studio. A real photograph with fine grain, not a render. No people. No readable text on any soap, towel, or robe. No logos. No bottles with labels. No flowers. No orchids, palms, or taro. No shells, driftwood, or souvenirs. No mosaic, patterned tile, stone, niches, wall lights, or glass shower screen. No framed art.
```

## 4. The review, run on the prompts

The list in the image briefs was run on these prompts. It must be run again on the images.

| Check | Result on the prompts |
|---|---|
| 0. Realism | Every prompt asks for a real photograph with fine grain. The four frames that look outdoors (2.1 to 2.4) carry a realism block for the outside and take the approved before as a real-looking reference of the same grove. The hero holds its view as the before has it. No prompt asks for dirt, stains, or damage. Each says the place is clean and cared for. |
| Glass and mirrors | 1.1: clear glass that reflects nothing, as in the before. 2.1, 2.2, 2.3: no glass in the frame, and the prompts say so. 2.4: each panel reflects sky and grove only. The bath mirror says what it shows. Night frames 1.2, 1.3, 3.1, and 3.2 have no glass in view. |
| Camera | Each new before and the sitting corner have a drawing and an edge list with percents from the script. Each after repeats the key percents and says the camera does not move. The hero's marks are measured on the approved before, and the fitted camera was checked over it in `hero-check.png`. |
| Fixed items | Each after lists them by count and place and forbids change. Fans, downlights, and cooling units are named in every pair. The hero names the two closed door panels and the open middle. |
| Sockets and cords | Villa bedroom: the nearer left wall socket stays in view at 10 percent with the lantern's plug. The bed hides the farther one, and the prompt says so and forbids a socket elsewhere. Sitting corner: the corner lamp uses the west wall socket, in view. The console stands in front of the south wall socket. Terrace: the outdoor socket stays in view. The pendant hangs from the existing point. Pavilion: the cabinet hides one socket and the prompt says so. The floor lamp uses the socket at 9 percent. The table lamp is cordless, because the table stands free. Every prompt names the socket type. |
| Curtains and cooling units | Villa bedroom: the unit is on the side wall. The right stack stops at 72 percent, on the door wall, and the prompt says the unit stays fully in view. No other frame has a curtain near a unit. |
| Doors and paths | Nothing stands in front of the bath door or the entry door. The open middle of the sliding doors keeps a clear part. A 1.5 m walk from the entry. A 1 m walk through the pavilion. |
| Fans and pendants | The four-post frame is 1.90 m and the blades are at 2.35 m. The hero asks for the whole fan in view with clear ceiling under it. This is a recorded exception to the rule that no bed frame stands under a fan. No pendant hangs indoors. The one pendant is on the terrace, at the existing point, where there is no fan. |
| The screen | One in each villa, 55 inches, on a console at a socket, 2.9 m from the settee, off. It does not face the bed, by the brief. None in the pavilion, where no one sits to watch. |
| Lit as lived | Night frames (1.2, 3.2) are lit and say "not dim." 1.3 is a detail of one lantern. Bright morning, low sun, and open shade frames have every lamp off. 2.4, late in the day, has the lamps on that a guest would switch on. |
| No request for warmth | No prompt uses "warm," "cozy," "golden," or "glow" for light. Each after says the walls and ceiling keep the color of image 1. Low sun is described by where it lands. The correction tool still runs. |
| Hosted, not cluttered | A water bottle, a book, a hat and a towel on the chest, a newspaper. Sandals at the door, a tote, cards and two glasses. Breakfast just set down. A book and a half-eaten slice of cake. An open register and one key taken. A guest's toiletry bag. |
| Something on a wall | Bedroom: the painting. Sitting corner: the second painting. Terrace: the louver window and the daybed's wall carry it, with no art outdoors. Pavilion: the large painting. Bath: the staghorn fern on its board. |
| Repetition on the property | Lamp shapes, each in one place: the box lantern pair, the pebble lamp, the rattan bell, the mahogany ball lamp, the tripod. Settees, low tables, lounge chairs, ferns, and plain rugs repeat on purpose, as one property's stock. |
| One villa | No frame shows two villas. 2.4 says so twice. |
| Repetition across projects | Nothing from the Lilim, Tanaw, or Dalampasigan rows. The taro and jar, the jar lamps, and the landscape of the picked image are replaced. Three overlaps are kept and flagged: an old chest (Lilim has one at a bed foot), a cane headboard (Lilim and Dalampasigan), and ebonized Sulok tables at the bed (Lilim). Shop pieces: Dapithapon and Aparador with Lilim, Hablon with Tanaw, Kumot with Dalampasigan, Bakal with Hardin's present list, Sulok alone. Each then has its two lists at most. |
| Art | Each painting is described as a still life and forbidden to picture a landscape, palms, or the sea. |
| Clichés and lookalikes | No flowers, palms indoors, coconuts, shells, driftwood, hammock, lanterns on the floor, or canopy cloth. Every prompt forbids copies of recognizable designs. |
| Real brands | Devices and appliances are plain, with no logos. No sign carries a name. |
| Scope | Every piece is loose, hung, a bulb changed in its fitting, or one pendant at an existing point. The prompts forbid a built counter, fixed shelves, paint, and new architecture. |
| The set | The bedroom in two halves, a bath, the terrace, the pavilion, and the grove are shown. Five kinds of light. |

## 5. Known risks

- **Image 2 of prompt 1.1 carries the faults.** It has the moved sockets, the taro jar, the jar lamps, the landscape, and a bed that is too short. The prompt says not to copy them. If the result comes back with any of them, drop image 2 and send the prompt with the other three references.
- **The two left wall sockets.** This is the fault he caught. Check 1.1 first for this: one socket in view at 10 percent across and 75.5 percent down, of the round-hole type, and none anywhere else on that wall. The side table stands 2 percent to its right. If the table covers it, regenerate, or move the table by an edit.
- **The bed is larger than in his pick.** A real bed is 2.03 m long. Its foot stands in front of the left part of the open doors. The generator may shrink the bed to match image 2. Check the foot posts at about 45 and 50.5 percent.
- **The fan.** Check that the whole fan is in view and unchanged, and that a clear band of ceiling lies between it and the top rail. A frame that reaches the blades fails.
- **The sliding door panels** changed width in the picked image. Check both closed panels and the open middle against the before.
- **The right wall is seen at a steep angle.** The chest, the fern, and the painting share 13 percent of the width. They may come back spread wider, as in the picked image, which would move the painting under the air conditioner or put the fern in front of the bath door. Neither is acceptable.
- **The fern** may come back as a palm, a taro, or a banana. It should be one rosette of undivided fronds.
- **The box lanterns** may come back as paper lanterns of a known Japanese kind. They should be plain mahogany frames with woven cloth.
- **The terrace pair is the outdoor pair.** Judge 2.1 at a glance for render look before anything else. If it fails twice, drop the low sun and make the pair in open shade at 4:30 pm, which is easier to hold.
- **Sun patches in 2.1 and 2.2** must fall in the same places. If 2.2 moves them, the pair will not hold on the slider. The fallback is to make the before by emptying the approved after.
- **No glass in the terrace pair.** The generator may add a sliding door at the right edge of 2.1. If it does, regenerate.
- **The terrace as built is deep,** about 5 m, by the fit of the approved before. If 2.1 looks unlike the terrace seen through the hero's doors, the hero wins.
- **2.4 has no drawing.** The generator will invent the villa's side wall and the grove. Count: one villa, two columns, one set of sliding doors with an open middle, one louver window. Compare the terrace furniture with 2.2 piece by piece.
- **2.4 shows the bedroom through the doors** without the hero as a reference, unless job 1 is ahead. Only bed posts, netting, and one lantern show, small. Check them against 1.1 when both exist.
- **Backlight in 2.4** may blow out the sky or turn the frame orange. The sky must keep its detail and the shaded walls must stay white.
- **The pavilion table lamp is cordless.** A cord may be drawn anyway. It must not cross the floor.
- **Three chairs at the writing table and two lounge chairs.** Count them. Check for extra legs.
- **Seven keys in a tray** may merge. Inspect at 100 percent.
- **The sitting corner is close to a one-point view.** Symmetry is a render tell. The door, the painting, and the lamp are off center. Check at a glance.
- **The television is seen at a steep angle** at the left edge. It may come back facing the camera, which would move it onto the end wall. It belongs on the side wall.
- **The staghorn fern** is unusual and may come back as a wreath or a deer skull. It should be a plain living fern on a board.
- **Night balance.** Frames 1.2, 1.3, and 3.2 have no daylight. Correct the ceiling and far walls toward neutral white and judge the rest by eye.
- **The drawings show hidden lines** where a fan sweep crosses a downlight in the P3 drawing. Check 3.1 for a false edge on the ceiling.

## 6. What Aedwon judges

1. **The bedroom against his pick.** Five things changed from image B: a fern in a woven planter replaced the taro in a jar, box lanterns replaced the green jar lamps, a still life replaced the landscape, the two side tables now match, and the bed is its real length. The first two are there because Lilim already has taro jars and that lamp. Does the room still read as the one he picked?
2. **The fan over the foot of the bed.** The frame is 45 cm below the blades. The studio hand's general rule says no bed frame under a fan. Does he accept the exception, or does the bed lose its top rails?
3. **The bed near the doors.** Its foot stands in front of part of the open doors, 85 cm from them. Is that a villa he would stay in?
4. **Three things kept that other projects also have:** an old chest, a cane headboard, and black side tables at the bed. Keep them, or change one?
5. **The terrace furniture stands in front of the bath wall,** so the bed looks at a bare slab and the grove. Is the clear slab right, or should something stand in front of the doors?
6. **The hero camera** is the same recipe as the Tanaw and Dalampasigan heroes. The approved before was kept. Should the terrace pair lead the page instead?
7. Are the sitting corner and the pavilion lit the way he would light them?
8. The four-post bed, the settee, the daybed, the writing table, and the five lamps are new designs. Does each look right?
9. Does any frame look like a render, most of all the terrace pair and the grove? Does any after look warmer than its before?
10. Is anything in any image that a guest or a resort owner would catch?

## 7. After this gate

- Record his answers in `docs/decisions.md` and in the design file.
- Retire the Pahinga scene bible and the old Pahinga entries in the image briefs.
- Transcribe `docs/content/projects.md` into the site data in a build wave.

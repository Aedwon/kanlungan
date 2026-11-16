# Hardin Apartment, gate 1: the whole set, thirteen images and two optional (Fable 5.2, 2026-11-16)

Status: **Prompts for every Hardin image.** They follow `docs/content/project-designs/hardin-apartment.md`, `docs/design/studio-hand.md`, the photography rules in `docs/content/image-briefs.md`, and the pattern of the Pahinga gate file. Images go to `design/hardin/`.

The set is two new befores and eleven furnished frames. With the approved living room before, that is three pairs, one render, and seven story frames. A fourth, optional job renders the hero in two other wall colors. The floor plan is drawn, not generated.

## 1. Three jobs, and one optional

The three jobs can run at the same time on three Codex accounts (`CODEX_PICK_PARALLEL=1`). Inside a job, run the images in the order given.

| Job | # | File in `design/hardin/` | What it is | Needs first |
|---|---|---|---|---|
| **1. Living room and balcony** | 1.1 | `hardin-hero.png` | P1 after, gray afternoon, 16:9 | `hardin-hero-before.png`, already there |
| | 1.2 | `hardin-balcony-before.png` | P3 before, open shade, 3:4 upright | Drawing |
| | 1.3 | `hardin-balcony.png` | P3 after | 1.2 and 1.1, checked |
| | 1.4 | `hardin-render.png` | The studio's render, from the hero camera, 16:9 | 1.1, approved by Aedwon |
| | 1.5 | `hardin-herbs.png` | The herb bench in low sun, 3:4 | 1.3, checked |
| **2. Bedroom and bath** | 2.1 | `hardin-bedroom-before.png` | P2 before, night, 16:9 | Drawing |
| | 2.2 | `hardin-bedroom.png` | P2 after | 2.1, checked |
| | 2.3 | `hardin-bath.png` | The bath, soft daylight, 3:4 | Nothing |
| **3. Dining end, kitchen, and the design book** | 3.1 | `hardin-dining.png` | The dining end in the evening, 16:9 | Drawing |
| | 3.2 | `hardin-entry.png` | The entry wall, 3:4 | 3.1, checked |
| | 3.3 | `hardin-kitchen.png` | The kitchen, morning, 3:4 | Nothing |
| | 3.4 | `hardin-moodboard.png` | The samples, from above, 3:4 | Nothing |
| | 3.5 | `hardin-book.png` | The design book on the table, 16:9 | 3.1, checked |
| **4. Optional: the wall color** | 4.1 | `hardin-hero-wall-B.png` | The hero with a gray-blue wall | 1.1, checked |
| | 4.2 | `hardin-hero-wall-C.png` | The hero with a pale clay wall | 1.1, checked |

"Checked" means the lead has looked at that image against its drawing and its edge list. A job may make an independent frame while it waits. In job 1, make 1.2 while 1.1 is checked. In job 2, make 2.3. In job 3, make 3.3 and 3.4.

`hardin-hero-before.png` is a copy of the approved `design/round-4-calibration/hardin-living-before.png`. It is not regenerated.

Two links cross the jobs, and both are small. Job 3 shows the painted wall, and its color must match 1.1. The prompts name the color in the same words. If 1.1 is checked when 3.1 starts, add it as a last reference for the wall color only. Job 4 needs 1.1.

**Order for Aedwon.** Show him 1.1 with 4.1 and 4.2 first. If he picks wall B or C, that image becomes `hardin-hero.png`, and the words for the wall change in 1.4, 3.1, 3.4, and 3.5 before those run. To save generations, hold 1.4, 3.1, 3.4, and 3.5 until he has picked.

Expect 18 to 28 generations.

## 2. The pipeline for every image

1. **Check the drawing.** The drawings are in `design/hardin/drawings/`, made by `draw_views.py`. Run `python3 draw_views.py` to make them again and to print the percents used below. `hero-check.png` is the fitted hero camera with the furniture layout. It is for the lead's checks only and is not a reference for any prompt.
2. **Generate the before** with the drawing as image 1.
3. **Check the before against the drawing** and count its sockets, doors, and lights. If a socket has drifted, the lead may move it in the before. If the camera is wrong, regenerate.
4. **Generate the after as an edit of the before.**
5. **Run the shell color correction** (`design/tools/pairfix.py`) on every after and story frame. In 1.1, 1.4, 4.1, and 4.2 the painted wall is meant to differ from the before. Measure and correct on the ceiling, the far wall, and the right wall only. If the tool cannot leave the left wall out, check its result on the left wall by eye and keep the uncorrected wall.
6. **Register and check alignment,** as the pairing method sets out.
7. **Run the review list** in the image briefs on every image and on the set, starting with item 0, realism.
8. **Show Aedwon,** and say what was checked, what was regenerated, and what is left for his eye.

**Fallbacks if a pair drifts.** Move a socket by pixels in the before. Or make the before by emptying the approved after. The befores here are easy to empty: every piece stands on the floor, nothing is built, each after names its loose pieces, and each before has few fixed items. For P1 the before is approved, so only the after may be remade. To empty an after of P1, the painted wall must also go back to gray-white.

## 3. How these prompts hold the camera, the fixed details, and the look

The lessons of the four finished projects are built in.

- **A drawing sets each new camera.** Each prompt lists the frame by its edges, in percent from the left and from the top. The numbers come from the script. The hero's numbers are measured on the approved before.
- **Each after lists every fixed item by count and place** and says the camera does not move.
- **Sockets have a type and a place.** Every socket is a white Philippine double socket with round holes on a flat plate, as in the approved before. No prompt allows a square three-pin socket or a recessed European one. Where a piece hides a socket, the prompt says so and forbids a socket anywhere else.
- **The balcony door keeps its swing.** It opens into the room. Nothing stands in the corner beside it, and the curtain stacks on the other side.
- **One wall changes color, and the prompts say which.** Each prompt that shows it names the wall, the color, and where the paint stops. Each says every other wall and the ceiling keep the color of image 1.
- **No prompt asks for warmth.** The words "warm," "cozy," "golden," and "glow" are not used for light. Lamp light is soft white and stays near the lamp. Low sun is described by where it lands.
- **Realism first.** Each prompt asks for a real photograph of a home that is clean and cared for. None asks for dirt, stains, or damage. The worn parquet is described as wear from feet, not as dirt. The frames that look outdoors, 1.2, 1.3, and 1.5, carry a realism block and take the approved before as a real-looking reference of the same street. The hero holds its view as the before has it.
- **Glass reflects only what faces it.** The hero's glass is clear, as in the before. The balcony prompts say what the window reflects. Night frames have no glass in view.
- **A piece seen in two frames matches.** Each story frame takes the approved frame of its space as image 1 and names what must match.
- **Nothing is cut oddly by the frame.** No ceiling shade is near the camera. The two shades in view are whole. The dining shade hangs low enough to be whole.
- **No lamp shape, art, vessel, or plant from the four finished projects.** No jar lamp, brass lamp, capiz, reed, rattan pendant, box lantern, or paper lantern. No ink bands, photographs, landscapes, graphite drawings, or still lifes. No taro, storage jar, dracaena, pothos, calamansi, or fern.
- **Lived in for a year.** Each frame holds two or three signs of her ordinary day. The render holds none, which is its point.
- **The owner did the work.** Every prompt forbids built pieces and new architecture. Paint is on one wall only.

The drawings are wireframes. Lines behind an object show through it. The prompts say so.

### The cameras with a drawing

The living room and the balcony share one origin, at the southwest corner of the living room. The bedroom has its own. x runs east and y runs north.

| View | Drawing | Camera | Heading | Height | Lens | Shape |
|---|---|---|---|---|---|---|
| Bedroom, P2 | `drawings/bedroom-p2.png` | In the northeast corner, 0.25 m from each wall | Southwest, 220 degrees | 1.25 m | 24mm | 16:9 |
| Balcony, P3 | `drawings/balcony-p3.png` | At the south end, 0.22 m from the end wall, 0.5 m out from the building wall | North, 4 degrees | 1.3 m | 24mm | 3:4 upright |
| Dining end | `drawings/dining.png` | In front of the console, 0.5 m from the south wall, 5.4 m from the entry wall | West-northwest, 292 degrees | 1.25 m | 24mm | 16:9 |

### Reference images

At most two shop references per image, and only for a piece that leads in that frame. Shop references are in `design/photography/`.

| Image | References, in order |
|---|---|
| 1.1 | (1) `hardin-hero-before.png`, (2) `design/round-4-calibration/hardin-living-A-collected.png` as the look, (3) `pasilyo-studio.png`, (4) `amihan-studio.png` |
| 1.2 | (1) `drawings/balcony-p3.png`, (2) `hardin-hero-before.png` for the finishes and the street |
| 1.3 | (1) `hardin-balcony-before.png`, (2) `hardin-hero.png` for the plants seen through the glass, (3) `kiso-studio.png` |
| 1.4 | (1) `hardin-hero.png`, (2) `hardin-hero-before.png` |
| 1.5 | (1) `hardin-balcony.png` |
| 2.1 | (1) `drawings/bedroom-p2.png`, (2) `hardin-hero-before.png` for the finishes |
| 2.2 | (1) `hardin-bedroom-before.png`, (2) `unan-studio.png`, (3) `kiso-studio.png`, (4) `amihan-studio.png` for the kind of print |
| 2.3 | (1) `hardin-hero-before.png` for the finishes |
| 3.1 | (1) `drawings/dining.png`, (2) `hardin-hero-before.png` for the finishes, (3) `amihan-studio.png` for the kind of print |
| 3.2 | (1) `hardin-dining.png`, (2) `kiso-studio.png` |
| 3.3 | (1) `hardin-hero-before.png` for the finishes |
| 3.4 | (1) `silong-fabric.png` |
| 3.5 | (1) `hardin-dining.png` for the table |
| 4.1, 4.2 | (1) `hardin-hero.png` |

### The painted wall, in the words every prompt uses

> a muted gray-green, the color of dried sage leaves: matte, light to middle in tone, low in strength, near sRGB 152, 162, 142. It is clearly green-gray beside the gray-white walls, and it is not mint, not olive, not teal, and not dark.

If Aedwon picks another color, replace this sentence everywhere with the sentence from prompt 4.1 or 4.2.

## Job 1: living room and balcony

### Prompt 1.1: the hero, the living room on a gray afternoon

References: (1) `design/hardin/hardin-hero-before.png`, (2) `design/round-4-calibration/hardin-living-A-collected.png`, (3) `pasilyo-studio.png`, (4) `amihan-studio.png`. Save as `hardin-hero.png`.

Must match: image 1 for everything fixed.

```text
Edit image 1 into the same room one year after its owner moved in. An interior design studio gave her the design, and she furnished it herself, piece by piece. It is a photograph for a design magazine, taken on an overcast afternoon. One person lives here and reads a lot.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1. Check it by these marks, measured from the left as a share of the width and from the top as a share of the height:
- On the long left wall, two white double sockets, low, at about 28 percent across and 70 percent down, and at about 30 percent across and 67.5 percent down.
- One white air conditioner high on the left wall, from about 29 to 36 percent across and 17 to 26.5 percent down.
- The far left corner of the room is at about 36.5 percent across.
- The sliding window, in a silver aluminum frame with two panels, runs from about 38.5 to 60 percent across and from 28 to 57.5 percent down.
- The glass balcony door, in an aluminum frame, runs from about 61 to 70.5 percent across and from 26.5 to 69 percent down. It is closed. Its hinges are on its right and its lever handle is on its left.
- The far right corner is at about 71.5 percent across.
- On the right wall: one white double socket, low, at about 75 percent across and 69.5 percent down. One gray-white door in its frame, from about 84 to 96 percent across, with a round steel knob at about 86 percent across and 59.5 percent down. One white switch plate with two rocker switches, at about 98 percent across and 37 to 45 percent down.
- On the ceiling: one white ceiling rose at about 49.5 percent across and 9.5 percent down.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: the three walls, the gray-white ceiling, the old red-brown parquet floor with its small blocks and its pale worn paths, the white baseboard, the air conditioner, the window frame and its two panels, the balcony door with its hinges and handle, the bedroom door, its frame, and its knob, the switch plate, and the ceiling rose. The balcony door stays closed. THE SOCKETS DO NOT MOVE. The sofa now stands in front of the two sockets on the left wall and hides them. The socket on the right wall stays at 75 percent across and 69.5 percent down, where the open far end of the console stands, and may show through the console's open frame. Do not draw a socket at any other place. Every socket is a white double socket with round holes on a flat plate, never a square three-pin socket and never a recessed round one. Do not add, move, or delete any socket, switch, light point, door, or cooling unit. Nothing is built. The view through the glass stays exactly as in image 1: the same two gray buildings, the same tree, the same overcast sky, the same low concrete wall and steel railing.

ONE WALL IS PAINTED, AND ONLY ONE. The long left wall, from the left edge of the frame to the far left corner at 36.5 percent, is now painted a muted gray-green, the color of dried sage leaves: matte, light to middle in tone, low in strength, near sRGB 152, 162, 142. It is clearly green-gray beside the gray-white walls, and it is not mint, not olive, not teal, and not dark. The paint is even and well done. It stops in a clean line at the ceiling, at the white baseboard, and at the far corner. The air conditioner and the baseboard stay white. THE FAR WALL, THE RIGHT WALL, AND THE CEILING KEEP EXACTLY THE GRAY-WHITE COLOR AND BRIGHTNESS THEY HAVE IN IMAGE 1. They are not cream, not yellow, not green, and not darker.

LIGHT. The same hour and daylight as image 1, about 4:30 on an overcast afternoon. Soft gray daylight from the window is the main light. Two lamps are on, because the day is gray: the floor lamp by the sofa and the lamp on the console. Each gives soft white light that is a little brighter on what is right beside it and fades within about a meter. The ceiling light is off. The room is as bright as in image 1: the ceiling and the far wall are not darker than in image 1. No color cast over the frame. One natural exposure with true darks and clean whites. The view stays brighter than the room and keeps its detail. No HDR.

THE GLASS. As in image 1, the window and the door are clear glass. They show the balcony and the street. They reflect nothing.

THE DESIGN. Follow image 2 for the mood and for the look of the sofa, the rug, the old low bench, the cane armchair, the black console, and the stacks of books: a small, personal room with a clay-colored sofa, an oat rug on old parquet, dark old wood, cane, and books. Do not copy image 2's lamps, its plants, its paintings, its curtains, its bare white left wall, its dimness, or the position of anything. The layout is this.

On the left, against the gray-green wall:
- One two-seat sofa, 178 cm long, with an exposed frame of red-brown mahogany and loose cushions in clay-colored linen, a soft muted terracotta. It runs from about 15 to 42 percent across. The top of its back is at about 58 to 65 percent down. The front corner of its near arm is at about 33 percent across, and its foot is at about 93 percent down. On it: one oat cushion, one cushion in a small black and cream check with a dent in it, and an undyed cotton blanket over the near arm.
- On the wall above the sofa, two framed prints side by side, each 60 cm wide and 80 cm tall, in thin pale wood frames with a cream mount. Together they run from about 17 to 28 percent across and from 28 to 51 percent down, seen at a steep angle. The first is the print in image 4. The second is by the same hand and different: two large flat rounded shapes in dark brown and stone gray on cream paper. No picture of a place, a plant, or a thing.
- On the floor at the sofa's near end, from about 10 to 21 percent across, against the wall: three uneven stacks of books, the tallest about 50 cm, with a pair of reading glasses on top. No readable titles.
- Just past the sofa's far arm, at about 34 percent across, against the wall: one floor lamp in black iron, 160 cm tall. Its thin stem rises straight to about 37 percent down and bends over at the top like a shepherd's crook. From the crook hangs one small drum shade of oat linen, 24 cm across, at about 36 percent across and 39 to 45 percent down. It is switched on. It stands below the air conditioner with clear wall between them. Its cord goes down behind the sofa.

At the window:
- One curtain of plain oat linen on one slim white track on the ceiling, along the whole far wall. It is drawn open to the left. It hangs in ONE stack in the far left corner, from about 36.5 to 41 percent across, from the ceiling to the floor. THERE IS NO CURTAIN ON THE RIGHT. Nothing hangs in front of the balcony door or in the far right corner. The stack does not touch, cover, or hang under the air conditioner. The air conditioner stays fully in view.
- In front of the right end of the window, from about 54 to 63 percent across: one umbrella plant in an old round brown-glazed pot, 40 cm across. It is bushy, with many hand-shaped clusters of glossy dark green leaves on thin stems, and rises to about 41 percent down. It is not a palm, not a fig, not a rubber tree, and not a bird of paradise. No flowers. It stands clear of the door.
- In front of the plant, from about 49.5 to 58.5 percent across: one old low armchair in dark wood with curved arms and a woven honey-colored cane seat and back, turned toward the sofa. Its top is at about 54 percent down. On it, a loose oat seat cushion and a folded newspaper.
- THE CORNER BESIDE THE BALCONY DOOR IS EMPTY FLOOR, from about 63 to 70.5 percent across. The door could swing open into the room.

In the middle:
- One flat wool rug in plain oat, 170 by 240 cm, under the front of the sofa, the bench, and the front of the armchair. Its near edge runs from about 25 percent across, 93 percent down, to about 62 percent across, 96 percent down.
- In front of the sofa, from about 42 to 51 percent across: one old low bench used as a table, in dark worn wood, 110 cm long and 40 cm high. On it: a closed laptop with no logo, a mug, and one book lying open and face down.

On the right, against the gray-white wall:
- The slim black console in image 3, 150 cm long and 80 cm high, in black-stained wood with a woven cane lower shelf. It runs from about 70.5 to 83 percent across. Its top is at about 55.5 to 60 percent down. It ends just short of the door frame.
- On the console, at its far end, at about 74 percent across: one lamp about 45 cm tall, with a base shaped like a tall plain cone, widest at the bottom, in black-brown glazed stoneware, and a straight-sided shade of oat linen. It is switched on. It is not a jar and not a vase shape.
- Also on the console: a short row of books between two small piles, and a small glazed cup with one green cutting in water. On the cane shelf: more books lying flat, and at the far end a small plain speaker and a small white router with two plugs going to the socket.
- On the wall above the middle of the console, from about 78.5 to 81.5 percent across and 31 to 51 percent down, seen at a steep angle: one more framed print of the same kind, 40 by 50 cm.
- Nothing stands in front of the bedroom door. The switch plate stays in plain view. THERE IS NO TELEVISION.

On the ceiling:
- From the ceiling rose at 49.5 percent across hangs one shade on a short white cord: a wide, shallow cone of pleated white paper, 45 cm across. It runs from about 46 to 52.5 percent across and from 10 to 18.5 percent down. It is whole and in view. It is switched off.

THROUGH THE GLASS. The balcony is now a small kitchen garden. Through the window, just above the sill, from about 43 to 59 percent across: a low uneven row of green herb plants, with the rims of a few clay pots, in front of the steel railing. At the window's left end, at about 43 percent across, taller grass-like leaves rise to about 43 percent down. Through the glass door: the same bare concrete floor and low wall as in image 1, with one small door mat. Nothing stands on the low wall and nothing hangs outside the railing. The buildings, the tree, and the sky are exactly as in image 1.

Palette: gray-white walls, one gray-green wall, red-brown parquet, clay linen, oat wool and linen, black wood and iron, dark old wood, honey cane, cream paper with brown and rust shapes, green leaves. No other color.

A home that has been lived in for a year and is well kept: a dent in a cushion, a blanket over an arm, books in use, real wood grain, soft wear on the parquet where people walk. Clean and cared for. No dust, no stains, no damage. A real photograph with fine grain, not a render. No people. No readable text. No logos. No copy of any recognizable designer sofa, lamp, or chair: plain, anonymous forms. No flowers. No trailing vine, no fern, no palm. No jar lamp, no brass lamp, no paper lantern. No landscape picture. No baskets, carvings, or souvenirs. No new walls, windows, moldings, beams, shelves, or ceiling features.
```

### The realism block for the outside

Prompts 1.2, 1.3, and 1.5 each carry this block. It is written into each prompt below.

- A real street in Makati, photographed, not drawn. Two plain gray office buildings of the 1970s with rows of windows, some with blinds half down. One large street tree in muted, true greens of several tones.
- Pale sky with haze.
- Fine sensor grain. Muted, true color. Nothing neon, nothing evenly green, nothing symmetrical.
- The balcony is old and kept: sound paint, a swept floor. No stains, cracks, rubbish, or laundry.

### Prompt 1.2: the balcony before

References: (1) `design/hardin/drawings/balcony-p3.png`, (2) `design/hardin/hardin-hero-before.png`. Save as `hardin-balcony-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of the empty balcony of an older apartment, late in the afternoon. Aspect 3:4, upright. Full-frame camera, 24mm lens, camera level at 1.3 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the end wall and its two corners, the floor lines, the edge of the slab above, the far edge of the window on the left, the low wall on the right with its top rail and thin upright bars, and the small wall light. The drawing is a wireframe. Do not draw its lines in the photograph. Build the balcony so that its real edges fall on them.

IMAGE 2 IS A PHOTOGRAPH OF THIS SAME APARTMENT, taken from inside its living room, looking out at this balcony and this street. Use it for the finishes and the place: the same silver aluminum window frame, the same gray-white painted walls, the same low concrete wall with a steel railing of thin upright bars, the same two gray office buildings and the same tree. Match its photographic quality. Do not copy its camera or its room.

THE FRAME. The camera stands at one end of a narrow balcony, 1.2 m deep, and looks along it to its other end. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to about 26 percent: the building wall, running away from the camera, seen at a steep angle. Almost all of it is one sliding window in a silver aluminum frame. The window's far edge is at about 26 percent across, with its head at 27.5 percent down and its sill at 68.5 percent down. Its near part runs out of the left edge. Below the sill, plain gray-white wall.
- From about 27 to 61 percent: the end wall of the balcony, plain gray-white, facing the camera. Its top is at about 22 percent down and its foot at about 80 percent down. High on it, at about 46 percent across and 31 percent down: one small plain white wall light, switched off.
- From about 61 percent to the right edge: the open side. A low concrete wall, 50 cm high, runs from the end wall toward the camera and out of the lower right corner. On it stands a steel railing of thin upright bars with one flat top rail. The top rail runs from about 62.5 percent across, 58 percent down, toward the right edge at about 69 percent down. Beyond the railing: the street, the tree, and the buildings.
- Top: the flat gray-white underside of the slab above.
- Bottom: the bare gray concrete floor.
The balcony door is beside the camera and is not in the frame.

The apartment is on the sixth floor in Legazpi Village, Makati, Philippines. The balcony is completely empty and swept. No furniture, pots, plants, mats, or objects.

THE GLASS. The window is seen at a glancing angle. It reflects what faces it, mirrored: the pale sky, the top rail and bars of the railing, and the gray buildings across the street. Behind the reflection, dimly: an empty room. No curtain. It is not a blank blue or black sheet.

LIGHT. About 5:00 in the afternoon, a clear day. The balcony faces east, so the sun is behind the building and the whole balcony is in open shade. The light on it is soft, even, and neutral. The buildings across the street catch the low sun on their upper floors, which are a little brighter and faintly yellow-white. Their lower floors and the tree are in shadow. Correct exposure. Neutral white balance: the walls in shade read gray-white to faintly cool. No color cast over the frame. One natural exposure. The street keeps its detail. No HDR.

REALISM OUTSIDE. A real street, photographed, not drawn. Two plain gray office buildings of the 1970s with rows of windows, some with blinds half down, one with an air conditioner in a window. One large street tree in muted, true greens of several tones. Pale sky with haze. Fine sensor grain. Muted true color. Nothing neon, nothing evenly green, nothing symmetrical. The balcony is old and kept: sound paint, slightly uneven, and a swept concrete floor. No stains, cracks, rubbish, or laundry.

No people. No readable text. No signs. No logos. No flowers. No drawn lines. No air conditioning unit on the balcony. No glass panels, planters, tiles, timber, or awnings.
```

### Prompt 1.3: the balcony after

References: (1) `design/hardin/hardin-balcony-before.png`, (2) `design/hardin/hardin-hero.png`, (3) `kiso-studio.png`. Save as `hardin-balcony.png`. Start only after 1.2 and 1.1 are checked.

Must match 1.1: the row of herbs seen through the living room window, the tall grass-like leaves at the window's north end, and the clear floor by the door.

```text
Edit image 1 into the same balcony one year after the owner moved in. She has made it a small kitchen garden. It is a photograph for a design magazine, taken late in the afternoon.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1: the window's far edge stays at about 26 percent of the width from the left, the end wall stays from about 27 to 61 percent, the wall light stays at about 46 percent across and 31 percent down, and the low wall and its railing stay where they are.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: the building wall, the window and its frame, the end wall, the wall light, the low concrete wall, the top rail and every bar of the railing, the slab above, the concrete floor, and every building, window, and branch across the street. Do not add any socket, switch, light, door, or window. No wall is painted. Nothing is built. Nothing stands on top of the low wall. Nothing hangs on or outside the railing.

LIGHT. The same minute as image 1, about 5:00 in the afternoon, clear. The whole balcony is in open shade. Soft, even, neutral light. No lamp is on. THE WALLS AND THE SLAB ABOVE KEEP EXACTLY THE COLOR AND BRIGHTNESS THEY HAVE IN IMAGE 1. The buildings across the street are lit exactly as in image 1. No color cast over the frame. One natural exposure with true darks and a clean bright. No HDR.

IMAGE 2 is the living room behind the window, photographed from inside. Through its window you can see this garden from the other side. The plants here are those same plants. Image 3 is the stool.

THE DESIGN.
- Along the low wall on the right, from the far end toward the camera: one old plank bench, a single thick weathered plank on two low wooden trestles, 170 cm long, 25 cm deep, and 42 cm high. Its far end is at about 54 percent across and 74 percent down. Its near end runs out of the bottom of the frame at the right.
- On the bench, in a row: seven clay pots of different sizes, with kitchen herbs. Two of basil, one of mint, one of oregano, one of green onion, and two small chili plants with a few small red chilies. The plants are healthy and a little uneven. Their tops reach about the height of the top rail. They stay inside the railing.
- Under the bench: one galvanized steel watering can, a small paper bag of soil, and a pair of garden scissors.
- Against the end wall, in three large clay pots: on the right, at about 60 percent across, a tall clump of lemongrass, with thin arching grass-like leaves that rise to about 49 percent down. In the middle, at about 48 percent across, a pandan plant with long strap-shaped green leaves, rising to about 65 percent down. On the left, at about 36.5 percent across, three thin bamboo canes tied together at the top, at about 38 percent down, with a string bean vine climbing them. The wall light stays in view above them.
- At the building wall on the left, below the window, at about 34 percent across: the small pale wooden stool in image 3, with its top at about 79 percent down. On it, one mug.
- The middle of the floor stays clear, as a walk about 55 cm wide.

THE GLASS. The window reflects what faces it, mirrored and at a glancing angle: the pale sky, the top rail of the railing, the herb pots on the bench, and the gray buildings. Behind the reflection, dimly: a stack of oat linen curtain at the far end and a shaded room. No lit lamp shows. It is not a blank sheet.

Palette: gray-white walls, gray concrete, clay pots, weathered gray-brown wood, one pale wood stool, galvanized steel, and green leaves in several true tones. A few small red chilies. No other color.

REALISM OUTSIDE. The street stays exactly as in image 1: real, photographed, with muted true color and haze. The plants are real plants: leaves of uneven size, one or two yellowing, soil in the pots, a little water on the floor under the bench. Fine sensor grain. Nothing neon, nothing evenly green.

A garden that is used and well kept. Clean and cared for. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No fern, no palm, no taro, no citrus tree, no trailing vine in a hanging pot. No lanterns, candles, string lights, or cushions. No chair and no table. No air conditioning unit. No artificial grass, deck tiles, trellis fixed to a wall, or shelves.
```

### Prompt 1.4: the studio's render

References: (1) `design/hardin/hardin-hero.png`, (2) `design/hardin/hardin-hero-before.png`. Save as `hardin-render.png`. Start only after Aedwon has approved 1.1 and picked the wall color.

This is the one image that must look like a render. It is the page of the design book that shows the planned living room. It sits beside the photograph on the project page.

Must match 1.1: the camera, every fixed item, the wall color, the sofa, the rug, the console, both lamps, the two prints, the curtain, and the ceiling shade.

```text
Edit image 1 into the interior designer's 3D visualization of this same room, made one year earlier, before anything was bought. Image 1 is the real photograph of the finished room. The result is the design render that the studio gave the owner. It must clearly read as a clean, professional computer render, not as a photograph.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1 and image 2. Every wall, corner, window, door, and ceiling line is where it is in image 1.

KEEP THESE EXACTLY AS IN IMAGE 1, the same place, size, shape, and color, drawn as clean 3D models: the gray-green painted left wall, the gray-white far wall, right wall, and ceiling, the red-brown parquet floor, the white baseboard, the air conditioner, the window, the glass balcony door, the bedroom door and its knob, the switch plate, the clay-colored two-seat sofa, the two framed prints above it, the plain oat rug, the black console with its cane shelf, the black floor lamp with its crook and hanging shade, the cone-shaped lamp on the console, the one print above the console, the oat curtain stacked on the left, and the pleated paper shade on the ceiling. Do not add or remove a socket.

CHANGE THESE, as a render made in advance would differ from real life:
- In place of the old dark bench: a plain new low bench of the same size, a simple placeholder model in dark wood, with nothing on it but two stacked books.
- In place of the old cane armchair: a generic armchair of about the same size, with a plain cane back, in the same place, squared exactly to the rug.
- In place of the full plant: one small young plant of the same kind in a plain pot, half as tall.
- Remove every sign of daily life: the stacks of books on the floor, the blanket, the dented cushion, the laptop, the mug, the newspaper, the reading glasses, the speaker, the router, the plugs, and the cutting in its cup. The sofa has two smooth cushions, set evenly. The console has one neat row of a few books.
- Through the glass: the balcony is bare, as in image 2. No plants on it. The buildings and the tree are there, flatter and paler.

THE RENDER LOOK. Even, soft, shadowless daylight from the window, as render engines give. Both lamps are on, each with a smooth even light. Perfectly smooth walls. Perfectly straight, clean edges. Fabric and wood with even, slightly simplified textures. The parquet is even in color, with no worn paths. Everything is exactly aligned and a little too tidy. No film grain, no lens softness, no dust. Colors are clean and true: the walls and ceiling stay gray-white and the painted wall stays the same gray-green as in image 1. No color cast.

It is a high-quality still from a 3D interior program, as an interior studio would send to a client. Not a sketch, not a watercolor, not a line drawing, not a cartoon. No people. No text, labels, dimensions, logos, or watermarks. No new furniture. No new walls, windows, or ceiling features.
```

### Prompt 1.5: the herb bench in low sun

Reference: (1) `design/hardin/hardin-balcony.png`. Save as `hardin-herbs.png`. Start only after 1.3 is checked.

Must match 1.3: the plank bench, the clay pots and their herbs, the watering can, the low wall, and the railing.

```text
Create one photograph for a design magazine: a close view of the herb bench on the same balcony as image 1, early in the morning. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 0.8 m, all verticals straight, about f/5.6.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS BALCONY, taken in the afternoon. In it, a weathered plank bench with a row of clay pots of herbs stands along a low concrete wall with a steel railing. Use image 1 for every piece and every finish. Each thing below looks exactly as it does in image 1. Do not copy image 1's framing or its light. This is a different standpoint.

THE CAMERA. It stands on the balcony and looks along the bench, at a slight angle toward the railing. No window and no glass are in the frame. By position:
- Across the middle of the frame, running away from the camera: the weathered plank on its low trestle, with four of the clay pots in view. Nearest, a pot of basil. Then a small chili plant with a few red chilies, a pot of mint, and a pot of green onion.
- Behind the pots: the low concrete wall and the thin upright bars and top rail of the steel railing.
- Beyond the railing, out of focus: the street tree and a gray building, pale.
- Under the bench, in shade: the galvanized watering can.
- On the plank beside the basil: a pair of garden scissors and a few cut stems of basil.
- Bottom: the gray concrete floor, with a small wet patch where a pot has just been watered.

LIGHT. About 7:00 in the morning, a clear day. The balcony faces east. Low sun comes between the buildings across the street, from the front right, through the bars of the railing. It strikes the leaves, the rims of the pots, and the plank, and lays the thin shadows of the bars across them. The low wall's inner face and the floor under the bench are in shade and read neutral gray. The sunlit parts are brighter and a little yellow-white, as low sun is. No color cast over the frame. One natural exposure with true darks and a clean bright. No lens flare streaks. No HDR.

REALISM OUTSIDE. Real plants: leaves of uneven size, one with a small hole, drops of water on the basil, dark wet soil. Real clay with a little white bloom on the pots. Muted true greens of several tones. Fine sensor grain. Nothing neon, nothing evenly green, nothing symmetrical. Clean and cared for.

No people. No readable text. No logos. No flowers in bloom. No lanterns, candles, or ornaments. No plant labels.
```

## Job 2: bedroom and bath

### Prompt 2.1: the bedroom before

References: (1) `design/hardin/drawings/bedroom-p2.png`, (2) `design/hardin/hardin-hero-before.png`. Save as `hardin-bedroom-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of the empty bedroom of an older apartment, at night. Aspect 16:9. Full-frame camera, 24mm lens, camera level at 1.25 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the corner, the floor lines, the ceiling lines, the four tall closet doors on the right with their small knobs, and the one small plate low on the left wall. The drawing is a wireframe. Do not draw its lines in the photograph. Build the room so that its real edges fall on them.

IMAGE 2 SHOWS THE LIVING ROOM OF THE SAME APARTMENT. Use it for the finishes only: the same gray-white painted walls with a white baseboard, the same flat gray-white ceiling, the same old red-brown hardwood parquet in small blocks, worn a little paler where people walk, the same kind of gray-white flush door, and the same white double sockets on flat plates. Do not copy its camera, its window, its view, or its light.

THE FRAME. The camera stands in one corner and looks into the opposite corner. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to 59.5 percent: one plain gray-white wall, running away from the camera to the right. Low on it, at about 54 percent across and 73.5 percent down: one white double socket with round holes on a flat plate. Nothing else is on this wall.
- At 59.5 percent: the vertical corner where two walls meet. Its top is at 18 percent down and its foot is at 80 percent down.
- From 59.5 percent to the right edge: the second wall. Almost all of it is the front of a built-in closet: four plain gray-white flush doors, side by side, from about 61 to 97 percent across, from just above the floor to about 19 percent down at their top. The lines between the doors are at about 67.5, 75.5, and 85 percent across. Each door has one small round steel knob at about waist height.
- Top: the flat gray-white ceiling. Bottom: the parquet floor, open and empty, filling the lower third of the frame.
There is no window, no glass, no room door, and no outside view in the frame. The window and the room's door are behind the camera. The ceiling light is above the top of the frame and is not in it.

The apartment is in Makati, Philippines. The room is completely empty and clean. No furniture, rugs, curtains, lamps, or objects.

LIGHT. About 9:00 pm, dark outside. One bare bulb on the ceiling, above the top of the frame, is on. It gives flat, cool-white light, with soft shadows in the corner. Correct exposure. Neutral white balance: the walls read gray-white to faintly cool.

REALISM. A real photograph of a real room, not a render. Fine sensor grain. Muted true color. An old building that is sound and kept: old paint with a slight unevenness, closet doors that are not perfectly in line, parquet with soft wear. The room is clean: no dirt, stains, cracks, holes, or damage. No people. No readable text. No logos. No drawn lines. No square three-pin sockets and no recessed round sockets.
```

### Prompt 2.2: the bedroom after

References: (1) `design/hardin/hardin-bedroom-before.png`, (2) `unan-studio.png`, (3) `kiso-studio.png`, (4) `amihan-studio.png`. Save as `hardin-bedroom.png`.

```text
Edit image 1 into the same room one year after its owner moved in. An interior design studio gave her the design, and she furnished it herself. It is a photograph for a design magazine, taken at night, before she goes to bed. The room is calm and has few things.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1: the corner where the two walls meet stays at 59.5 percent of the width from the left, and the four closet doors stay from about 61 to 97 percent, with the lines between them at about 67.5, 75.5, and 85 percent.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: both walls, the gray-white ceiling, the parquet floor, the white baseboard, the four closet doors and their four knobs, and the one double socket low on the left wall at about 54 percent across and 73.5 percent down. That socket stays in plain view on clear wall, with two white plugs in it. Do not draw a socket at any other place. It is a white double socket with round holes on a flat plate. Do not add any socket, switch, light, door, or window. NO WALL IS PAINTED: both walls and the closet doors keep the gray-white of image 1. Nothing is built. No shelf, no headboard wall, no wall light.

LIGHT. The same hour as image 1, about 9:00 pm. The ceiling light, above the top of the frame, now has a soft white bulb under a paper shade and is on low. Two bedside lamps are on. Together they light the room evenly and comfortably: the ceiling is visible, the corner is readable, and a person could read in bed. It is not dim. THE WALLS AND THE CEILING KEEP THE GRAY-WHITE THEY HAVE IN IMAGE 1, not cream, not yellow, not orange, everywhere more than 1 m from a lit lamp. Each lamp gives soft white light that is a little brighter on what is right beside it. No color cast over the frame. One natural exposure with true darks. No HDR.

THE DESIGN.
- Against the left wall, with its head to the wall: the low upholstered bed in image 2, queen size, in oat linen, with its padded headboard 100 cm high. The headboard runs from about 15.5 to 46 percent across, with its top at about 57 to 60 percent down. The bed comes toward the camera, and its near corner runs out of the bottom of the frame. It is made with white cotton sheets, two white pillows, and one gray-blue cotton blanket folded back. A cardigan lies across the foot.
- On the left wall above the headboard, from about 21 to 42 percent across and 32 to 52 percent down: one wide framed print, 120 cm wide and 60 cm tall, in a thin pale wood frame. It is by the same hand as image 4 and different: two large soft flat shapes in pale stone gray and pale brown on cream paper. Quiet and pale. No picture of a place, a plant, or a thing.
- Left of the bed, at about 9 percent across: one small round side table in matte blackened steel, 38 cm across and 50 cm high. On it, a lamp and two books.
- Right of the bed, between the bed and the corner, at about 51.5 percent across: the small pale wooden stool in image 3, used as a bedside table, with its top at about 74 percent down. It stands just left of the socket and does not cover it. On it: a lamp, a glass of water, a paperback, and a phone lying face down on a thin white cable that goes to the socket.
- The two lamps are a pair. Each is a column lamp about 40 cm tall: a tall plain cylinder of cream cotton, 14 cm across, on a small square block of pale wood. Both are switched on, and the cloth is evenly lit from inside. No jar lamp, no cone shade, no box lantern.
- On the floor between the bed and the closet, from about 53 to 98 percent across: one flat-woven runner in undyed cream cotton, 80 by 200 cm. On it, a pair of slippers.
- The closet doors are closed and clear. Nothing stands in front of them.

Palette: gray-white walls and closet, red-brown parquet, oat linen, white cotton, cream cotton, pale wood, one small black table, one gray-blue blanket, and the pale browns of the print. No other color. No green wall in this room.

A bedroom in use and well kept: the blanket folded back, a soft dent in one pillow, real linen with one fold line, soft wear on the parquet. Clean and cared for. A real photograph with fine grain, not a render. No people. No readable text on any book or phone. No logos. No television. No copy of any recognizable designer bed or lamp: plain, anonymous forms. No flowers and no plants. No window, glass, or mirror. No pendant in the frame. No canopy, no netting, no bench, no chest. No new walls, moldings, shelves, or ceiling features. No square three-pin sockets.
```

### Prompt 2.3: the bath

Reference: (1) `design/hardin/hardin-hero-before.png`. Save as `hardin-bath.png`.

The bath is the building's. Nothing in it is Kanlungan's design but the loose things.

```text
Create one photograph for a design magazine: the small bathroom of an older apartment in Makati, Philippines, in the morning. One person lives here. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 1.3 m, all verticals straight, about f/5.6.

IMAGE 1 SHOWS THE LIVING ROOM OF THE SAME APARTMENT, EMPTY. Use it only for the age and care of the building and for the gray-white of the paint. Do not copy its camera or its room.

THE ROOM, as the building made it, old and sound: white glazed wall tiles, 10 cm square, with thin gray joints, to about door height, and gray-white paint above. A floor of small gray mosaic tiles. One white pedestal basin with a plain chrome tap. Above it, one plain mirror cabinet with a thin white frame. One high window of frosted glass louvers in an aluminum frame, with a tiled ledge below it.

THE FRAME. The camera looks at the basin wall at an angle from the right.
- Left of the middle: the basin and the mirror cabinet above it.
- At the left edge, high: the louver window and its ledge.
- At the right edge: the edge of the door, open into the room, with a plain steel rack hooked over its top. On the rack hang two cotton towels, one white and one oat.
- Bottom: the mosaic floor, with one flat-woven cream cotton mat.

LOOSE THINGS, all hers:
- On the basin's edge: a stoneware cup with one toothbrush, and a bar of soap on a small dish.
- On the window ledge: two plain refill bottles with no labels, and one water glass with a green cutting rooting in it.
- On the wall between the basin and the window, above the tiles: one small framed print, 24 by 30 cm, in a thin pale wood frame: two flat rounded shapes in brown and stone gray on cream paper.
- On the floor by the basin: one small lidded bin.

THE MIRROR shows only what faces it: white wall tiles and a strip of gray-white wall. No person, no camera, no window, and no lamp shows in it.

LIGHT. About 10:00 in the morning. Soft daylight through the frosted louvers is the only light. No lamp is on. The white tiles read white, not cream, not yellow. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

An old bathroom, clean and cared for: tiles that are not perfectly in line, clean joints, a tap with soft wear. No dirt, mold, rust, stains, or cracks. A real photograph with fine grain, not a render. No people. No readable text. No logos. No flowers. No fern or other plant but the one cutting. No stool, no ladder, no basket, no candle. No new shelves, niches, or wall lights. No sockets in the frame.
```

## Job 3: dining end, kitchen, and the design book

### Prompt 3.1: the dining end in the evening

References: (1) `design/hardin/drawings/dining.png`, (2) `design/hardin/hardin-hero-before.png`, (3) `amihan-studio.png`. Save as `hardin-dining.png`. If `hardin-hero.png` is checked, add it as image 4 and add one line: "Image 4 is the other half of this room. Use it only for the exact gray-green of the painted wall."

Hold this prompt until Aedwon has picked the wall color.

```text
Create one photograph for a design magazine: the dining end of the living room of an older apartment in Makati, Philippines, in the evening. One person lives here, a book editor who also works at this table. Aspect 16:9. Full-frame camera, 24mm lens, camera level at 1.25 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the two corners, the floor lines, the ceiling lines, the door in the end wall, the two narrow openings at the far left, the small plates on the walls, and the ceiling point. The drawing is a wireframe. Do not draw its lines in the photograph. Build the room so that its real edges fall on them.

IMAGE 2 SHOWS THE OTHER HALF OF THE SAME ROOM, EMPTY, SEEN THE OTHER WAY. Use it for the finishes only: the same gray-white painted walls with a white baseboard, the same flat gray-white ceiling, the same old red-brown hardwood parquet in small blocks, worn a little paler in the walkways, the same kind of gray-white flush door with a round steel knob, the same white switch plates and white double sockets on flat plates, and the same white ceiling rose. Image 3 shows the kind of print on the walls. Do not copy image 2's camera, its window, or its light.

THE FRAME. The camera looks down a long narrow room to its end wall. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to 15.5 percent: the left side wall, gray-white, running away from the camera, seen at a steep angle. In it, two openings: a gray-white door, closed, from about 4 to 9 percent across, and an open doorway with no door, from about 10.5 to 13.5 percent across, dark beyond.
- At 15.5 percent: the left corner. Its top is at 17 percent down and its foot at 81 percent down.
- From 15.5 to 58 percent: the end wall, gray-white, facing the camera at an angle. In it: the apartment's entry door, gray-white, closed, from about 19.5 to 32.5 percent across, with its head at 30 percent down and a round steel knob. One white switch plate at about 35 percent across, 50 percent down. One white double socket, low, at about 52 percent across, 68 percent down.
- At 58 percent: the right corner. Its top is at 24 percent down and its foot at 74.5 percent down.
- From 58 percent to the right edge: the long right side wall, running toward the camera. Low on it, two white double sockets, at about 69 percent across, 73.5 percent down, and at about 87 percent across, 82.5 percent down.
- Top: the flat gray-white ceiling, with one white ceiling rose at about 46.5 percent across and 8 percent down. Bottom: the parquet floor.
There is no window, no glass, and no outside view in the frame. The window is behind the camera.

ONE WALL IS PAINTED, AND ONLY ONE. The long right side wall, from the right corner at 58 percent to the right edge, is painted a muted gray-green, the color of dried sage leaves: matte, light to middle in tone, low in strength, near sRGB 152, 162, 142. It is clearly green-gray beside the gray-white walls, and it is not mint, not olive, not teal, and not dark. The paint stops in a clean line at the ceiling, at the white baseboard, and at the corner. The sockets and the baseboard stay white. The end wall, the left wall, and the ceiling are gray-white.

THE DESIGN. Everything is loose and was bought by the owner over a year.
- In the middle of the room, from about 38 to 58 percent across: one plain dining table in pale scrubbed wood, 140 cm long and 70 cm deep, on four square legs. Its top is at about 63 to 70 percent down. Its legs are whole and in view.
- At the table: four secondhand wooden chairs, two on each long side. No two are alike in shape, and all four are painted the same matte black. One is pulled out a little.
- Over the table, on a plain white cord from the ceiling rose: one shade, a wide, shallow cone of pleated white paper, 45 cm across. It hangs low, with its rim at about 40 percent down, from about 43 to 50 percent across. It is whole and in view, and it is switched on.
- On the table, at the far end: a pile of printed pages with a pencil on it and a closed laptop with no logo. At the near end: one bowl, one glass, and a folded cloth napkin.
- Against the gray-green wall, just right of the corner, from about 56.5 to 62.5 percent across: one old open bookcase in dark wood, 90 cm wide and 180 cm tall, with five shelves, full of books standing and lying flat. Its top is at about 37 percent down. On one shelf, a small pale gray stone holds a row of books up. On another, a small dish with keys. Clipped to the second shelf from the top: one small black steel clip lamp with a round head, switched on and pointed at the books. Its cord goes to the socket at 69 percent.
- On the gray-green wall, from about 72 to 79 percent across and 31 to 54.5 percent down: one framed print like image 3, 60 by 80 cm, in a thin pale wood frame. It is by the same hand and different: three flat rounded shapes in rust, dark brown, and stone gray on cream paper.
- On the end wall, right of the entry door, from about 37 to 47.5 percent across at about 42 percent down: one plain pale wood rail with five pegs. On the pegs: a canvas tote, a folded umbrella, and a cap. Right of it, from about 49.5 to 54.5 percent across and 39 to 53 percent down: one small framed print of the same kind.
- On the floor below the pegs, partly hidden by the table and chairs: a small pale wooden stool and a flat tray with two pairs of shoes.
- A clear walk about 90 cm wide runs along the left wall, from the entry door toward the camera.

LIGHT. About 7:30 pm, dark outside. The paper shade over the table is on and lights the table top and the people who would sit at it. The clip lamp on the bookcase is on. A second paper shade behind the camera is on low. Together they light this end of the room evenly and comfortably: the ceiling is visible, the corners are readable, and a person could read at the table. It is not dim. THE GRAY-WHITE WALLS AND THE CEILING READ GRAY-WHITE, not cream, not yellow, not orange. The gray-green wall reads gray-green. The lamps give soft white light. No color cast over the frame. One natural exposure with true darks. No HDR.

Palette: gray-white walls, one gray-green wall, red-brown parquet, pale scrubbed wood, matte black chairs, dark old wood, the many colors of book spines, muted, and cream paper with brown and rust shapes. No other color.

A room in use and well kept: a chair pulled out, work pushed to one end of the table, books that have been read, soft wear on the parquet. Clean and cared for. No dust, no stains, no damage. A real photograph with fine grain, not a render. The frame is not symmetrical. No people. No readable text on any page, book, or device. No logos. No television. No copy of any recognizable designer chair, table, or lamp: plain, anonymous forms. No flowers. No plants in this frame. No sofa and no armchair in this frame. No jar lamp, brass lamp, or paper lantern ball. No records, no record player. No landscape picture and no photograph. No baskets, carvings, or souvenirs. No built shelves, niches, moldings, or wall lights. No square three-pin sockets.
```

### Prompt 3.2: the entry wall

References: (1) `design/hardin/hardin-dining.png`, (2) `kiso-studio.png`. Save as `hardin-entry.png`. Start only after 3.1 is checked.

Must match 3.1: the entry door and its knob, the switch plate, the peg rail and what hangs on it, the small print, the stool, the shoe tray, the parquet.

```text
Create one photograph for a design magazine: a close view of the wall beside the entry door in the same room as image 1, in the morning. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 1.1 m, all verticals straight, about f/5.6.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS ROOM, taken in the evening. At its far end is a gray-white wall with the entry door, and to the right of the door a rail of pegs, a small framed print, a stool, and a tray of shoes. Use image 1 for every piece and every finish. Each thing below looks exactly as it does in image 1. Image 2 is the stool. Do not copy image 1's framing or its light. This is a different standpoint.

THE CAMERA. It stands about 2.2 m from the end wall and looks straight at it. No window and no glass are in the frame. By position:
- The whole background is the gray-white painted wall, with its white baseboard and a strip of red-brown parquet along the bottom.
- At the left edge: the right-hand edge of the gray-white entry door frame, and on the wall beside it, at about chest height, the white switch plate.
- Across the upper middle: the pale wood rail with five pegs, 90 cm long. On it: the canvas tote, the folded umbrella, and the cap. One peg is empty.
- At the right, at eye height: the small framed print, flat shapes in brown and stone gray on cream paper, in its thin pale wood frame.
- Below the pegs, on the floor against the wall: the small pale wooden stool in image 2. On it, a folded scarf.
- Beside the stool: the flat tray with two pairs of shoes, one pair of leather sandals and one pair of canvas shoes.
- Low on the wall at the right edge: one white double socket with round holes on a flat plate.
The gray-green wall is not in this frame.

LIGHT. About 10:00 in the morning. Soft gray daylight comes from the window far behind the camera, from the left. No lamp is on. The wall reads gray-white, not cream, not yellow. Soft shadows fall to the right of each thing. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

An entry in daily use, well kept: a tote with something in it, shoes not quite straight, soft wear on the parquet by the door. Clean and cared for. A real photograph with fine grain, not a render. No people. No readable text. No logos. No flowers. No plants. No mirror. No basket. No bench. No square three-pin sockets.
```

### Prompt 3.3: the kitchen

Reference: (1) `design/hardin/hardin-hero-before.png`. Save as `hardin-kitchen.png`.

The kitchen is the building's. Nothing in it is Kanlungan's design but the loose things.

```text
Create one photograph for a design magazine: the small galley kitchen of an older apartment in Makati, Philippines, early in the morning. One person lives here and cooks most nights. Aspect 3:4, upright. Full-frame camera, 35mm lens, camera level at 1.3 m, all verticals straight, about f/5.6.

IMAGE 1 SHOWS THE LIVING ROOM OF THE SAME APARTMENT, EMPTY. Use it only for the age and care of the building and for the gray-white of the paint. Do not copy its camera or its room.

THE ROOM, as the building made it, old and sound: one run of plain white painted wood cabinets below a counter of cream glazed tiles, 10 cm square, with a matching tile splash two rows high. Plain white painted wall cabinets above. Gray-white painted walls. A floor of small cream tiles. One steel sink with a plain chrome tap. One high window of frosted glass louvers in an aluminum frame at the end of the room. One plain fluorescent tube on the ceiling.

THE FRAME. The camera stands in the doorway and looks down the kitchen at an angle, with the counter running away on the left.
- Left: the counter, the sink, and the wall cabinets.
- Far end, high: the louver window.
- Right, at the far end: one plain white refrigerator, not large.
- Bottom: the tiled floor, with one flat-woven cream cotton mat.

LOOSE THINGS, all hers:
- On the counter, from the near end: a wooden board with a knife and three tomatoes. A glass of water holding cut stems of basil and two long pandan leaves. A plain white rice cooker and a plain steel kettle. A two-burner gas stove with one small steel pot on it.
- Beside the sink: a steel dish rack with two plates, a bowl, and a mug.
- On the counter under the window: a small stack of stoneware bowls and a jar of wooden spoons.
- A cotton tea towel over a cabinet door.
- On the gray-white wall at the right, near the camera: one small framed print, 24 by 30 cm, in a thin pale wood frame: two flat rounded shapes in rust and stone gray on cream paper.

LIGHT. About 8:00 in the morning. Soft daylight through the frosted louvers lights the far end. The fluorescent tube is on, because the room is deep, and gives even neutral white light. The white cabinets read white, not cream, not yellow, not blue. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

An old kitchen in daily use, clean and cared for: cabinet doors that are not perfectly in line, clean tile joints, a board with a few cuts in it. No dirt, grease, rust, stains, or cracks. A real photograph with fine grain, not a render. No people. No readable text. No logos or brand names on any appliance. No flowers. No plants in pots. No hanging rail, no open shelves, no pendant lamp. No new cabinets, counters, or tiles. No sockets drawn unless plain white double sockets with round holes on a flat plate.
```

### Prompt 3.4: the moodboard

Reference: (1) `silong-fabric.png`. Save as `hardin-moodboard.png`. Hold until Aedwon has picked the wall color.

```text
Create one photograph: an interior designer's board of real material samples, laid out flat and photographed from straight above. Aspect 3:4, upright. Full-frame camera, 50mm lens, about f/8.

THE SURFACE. A plain board covered in pale gray-white paper, filling the frame.

THE SAMPLES, each a real object with real thickness and a soft shadow, laid in a loose, considered arrangement with small gaps, none overlapping more than a little:
- One large painted card, the largest thing on the board, about a quarter of the frame: a muted gray-green, the color of dried sage leaves, matte, light to middle in tone, low in strength, near sRGB 152, 162, 142. Brushed paint on card, with faint brush marks.
- One small painted card in gray-white.
- One folded swatch of clay-colored linen, a soft muted terracotta, with a pinked edge. Use image 1 for the weave of the linen, not for its color.
- One folded swatch of oat linen.
- One small square of oat wool rug, cut to show its pile.
- One square of woven honey-colored cane webbing.
- One small block of black-stained wood and one small block of pale cream hinoki wood.
- Three old parquet blocks in red-brown hardwood, laid as they sit in a floor, with soft wear.
- One small disc of matte blackened steel.
- One shard of a clay flower pot.
- One small sheet of cream cotton paper with one flat brown shape printed on it.
- One sprig of fresh basil.

LIGHT. Soft daylight from a window to the left, about 10:00 in the morning. Soft shadows fall to the right. The gray-white board reads gray-white. No color cast. One natural exposure. No HDR.

A real photograph with fine grain, not a render and not a collage of pictures. Every sample is a real thing lying on the board. No hands. No people. No text, labels, names, numbers, or handwriting. No logos. No photographs of rooms or furniture on the board. No pins, tape, or clips. No flowers. No brass, no marble, no rattan.
```

### Prompt 3.5: the design book

Reference: (1) `design/hardin/hardin-dining.png`. Save as `hardin-book.png`. Start only after 3.1 is checked. Hold until Aedwon has picked the wall color.

Must match 3.1: the dining table's wood, and one black chair.

The pages cannot carry readable text. If the site needs a readable page, set it in HTML over a plain photograph of the open book.

```text
Create one photograph for a design magazine: an interior designer's design book lying open on the dining table in the same room as image 1, in the morning. Aspect 16:9. Full-frame camera, 50mm lens, looking down at the table at about 50 degrees, about f/5.6.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS ROOM. Use it only for the table, which is the same plain table in pale scrubbed wood, and for the matte black wooden chair at its edge. Do not copy its framing or its light.

THE FRAME. The table top fills almost the whole frame. At the top edge, out of focus: the back of one matte black chair and a strip of red-brown parquet floor.

ON THE TABLE:
- In the middle, the largest thing in the frame: one wire-bound book of heavy white paper, A3 size, lying open flat.
- Its left page: one large printed picture of a living room, a clean computer render: a long gray-green wall on the left with a clay-colored two-seat sofa against it, an oat rug, a black console on the right, and a window at the far end. Below the picture, a few lines of small gray text, too small to read.
- Its right page: one printed floor plan of a small apartment, drawn in thin black lines, with small furniture shapes in it. Beside the plan, glued to the page: three small real fabric swatches, clay, oat, and gray-blue, and one small painted card in muted gray-green. A few lines of small gray text, too small to read.
- Left of the book: a larger painted card in the same muted gray-green, the color of dried sage leaves, near sRGB 152, 162, 142, and a small paint brush, clean.
- Right of the book: a pencil, a steel tape measure, and a mug of coffee.
- At the lower edge: a few loose pages with a printed list in small gray lines, too small to read, with three of the lines ticked in pencil.

LIGHT. About 10:00 in the morning. Soft gray daylight from a window far to the left. No lamp is on. The white paper reads white, not cream, not yellow. Soft shadows fall to the right. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

A book that has been used for a year: a slightly curled page corner, one pencil note in the margin as a small gray scribble, a ring from a mug on a loose page. Clean and cared for. A real photograph with fine grain, not a render. No hands. No people. NO READABLE TEXT ANYWHERE: all text is too small to read. No logos, no names, no prices, no numbers that can be read. No flowers. No plants. No phone.
```

## Job 4, optional: the wall color

Two edits of the approved `hardin-hero.png`. Only the painted wall changes. Show them to Aedwon beside 1.1, at the same size.

### Prompt 4.1: wall B, gray-blue

Reference: (1) `design/hardin/hardin-hero.png`. Save as `hardin-hero-wall-B.png`.

```text
Edit image 1. Change the color of ONE thing only: the painted long left wall, from the left edge of the frame to the far left corner of the room.

It is now gray-green. Repaint it a muted gray-blue, the color of an overcast sky: matte, light to middle in tone, low in strength, near sRGB 147, 161, 171. It is clearly blue-gray beside the gray-white walls, and it is not navy, not teal, not baby blue, and not dark.

The new paint has the same even matte finish, the same clean lines at the ceiling, the baseboard, and the corner, and the same soft light and shadows on it as the wall in image 1: brighter near the lit floor lamp, and with the same soft shadows behind the sofa, the picture frames, and the books.

EVERYTHING ELSE STAYS EXACTLY AS IN IMAGE 1, pixel for pixel where possible: the camera, the far wall, the right wall, the ceiling, the floor, the white baseboard, the white air conditioner, the window, the doors, the view, the sofa and its clay color, the two framed prints and their pale frames, the books, the lamps and their light, the curtain, the plant, the chair, the rug, the bench, the console, and every small thing. Do not move, add, or remove anything. Do not change the brightness or the color balance of the frame. The gray-white walls and the ceiling do not take on any blue. A real photograph with fine grain, not a render.
```

### Prompt 4.2: wall C, pale clay plaster

Reference: (1) `design/hardin/hardin-hero.png`. Save as `hardin-hero-wall-C.png`.

```text
Edit image 1. Change the color of ONE thing only: the painted long left wall, from the left edge of the frame to the far left corner of the room.

It is now gray-green. Repaint it a pale clay plaster color, a muted pink-beige like unglazed pale terracotta: matte, light in tone, low in strength, near sRGB 201, 165, 146. It is clearly a painted color beside the gray-white walls, lighter and quieter than the clay sofa in front of it. It is not orange, not peach, not salmon, not pink, and not dark.

The new paint has the same even matte finish, the same clean lines at the ceiling, the baseboard, and the corner, and the same soft light and shadows on it as the wall in image 1: brighter near the lit floor lamp, and with the same soft shadows behind the sofa, the picture frames, and the books.

EVERYTHING ELSE STAYS EXACTLY AS IN IMAGE 1, pixel for pixel where possible: the camera, the far wall, the right wall, the ceiling, the floor, the white baseboard, the white air conditioner, the window, the doors, the view, the sofa and its clay color, the two framed prints and their pale frames, the books, the lamps and their light, the curtain, the plant, the chair, the rug, the bench, the console, and every small thing. Do not move, add, or remove anything. Do not change the brightness or the color balance of the frame. THE GRAY-WHITE WALLS AND THE CEILING STAY GRAY-WHITE. They do not take on any pink or yellow. A real photograph with fine grain, not a render.
```

After each, compare with 1.1 by subtraction. Only the left wall may differ. If anything else moved, regenerate, or cut the new wall into 1.1 with a mask.

## 4. The review, run on the prompts

The list in the image briefs was run on these prompts. It must be run again on the images.

| Check | Result on the prompts |
|---|---|
| 0. Realism | Every prompt but 1.4 asks for a real photograph with fine grain, clean and cared for. None asks for dirt, stains, or damage. Parquet wear is described as soft wear from feet. The three outdoor frames carry a realism block and take the approved before as a real-looking reference of the same street. The hero holds its view as the before has it. 1.4 asks for a render on purpose, and says so. |
| Glass and mirrors | 1.1 and 1.4: clear glass that reflects nothing, as in the before. 1.2 and 1.3: the window reflects sky, railing, pots, and buildings, and the prompts say so. 1.5, 2.1, 2.2, 3.1, 3.2: no glass in the frame. The bath mirror says what it shows. |
| Camera | Each new before and the dining frame have a drawing and an edge list with percents from the script. Each after repeats the key percents and says the camera does not move. The hero's marks are measured on the approved before, and the fitted camera was checked over it in `hero-check.png`. |
| Fixed items | Each after lists them by count and place and forbids change. The hero names the air conditioner, the window, both doors, the knob, the handle, the switch plate, and the ceiling rose. |
| Sockets and cords | Living room: the sofa hides both left wall sockets, and the prompt says so and forbids a socket elsewhere. The right wall socket stays at its place, at the console's open end, with the router's plugs. Bedroom: the one socket in frame stays in plain view with two plugs, and the stool stands beside it. Dining end: four sockets by position, and the clip lamp's cord goes to one. Every prompt names the socket type and forbids three-pin and recessed sockets. |
| Curtains and cooling units | Living room: one stack, on the window wall, in the left corner. The prompt says it does not touch, cover, or hang under the unit, and that the unit stays fully in view. No curtain on the right. The bedroom curtain is behind the camera. |
| Doors and paths | The corner beside the balcony door is empty floor, and the prompt says the door could swing open. Nothing stands in front of the bedroom door, the entry door, or the closet doors. Walks of 0.9 m and 0.8 m. |
| Pendants and frame edges | Three paper shades, each at an existing point. Two are in view, both whole. The dining shade hangs low so that the top edge does not cut it. The bedroom shade is above the frame, and both bedroom prompts say so. No fan in the apartment. |
| The screen | None. The brief says why. Every room prompt says no television. A closed laptop is in the hero, the dining frame, and the book frame. |
| Lit as lived | Gray afternoon: two lamps on, ceiling shade off, and the prompt says the room is as bright as the before. Night frames (2.2, 3.1) are lit and say "not dim." Morning and shade frames have every lamp off, except the kitchen tube in a deep room. |
| No request for warmth | No prompt uses "warm," "cozy," "golden," or "glow" for light. Each after says the gray-white walls and ceiling keep the color of image 1. Low sun in 1.5 is described by where it lands. The correction tool still runs. |
| The painted wall | Named in 1.1, 1.4, 3.1, 3.4, 3.5, 4.1, and 4.2 in the same words and numbers. Each says where the paint stops and that every other wall and the ceiling stay gray-white. 2.2 says no wall is painted. |
| Lived in | Books, a blanket, a laptop, a mug, reading glasses. Work pushed to one end of the table and one place set. A phone on its cable and a cardigan. Shoes and a tote. A board with tomatoes. A watering can. The render has none, on purpose. |
| Something on a wall | Living room: two prints over the sofa and one over the console. Dining end: one print, the pegs, a small print. Bedroom: one wide print. Bath and kitchen: one small print each. Balcony: none, and plants on canes at the end wall. |
| Repetition in the home | Lamp shapes, each in one place: the crook lamp, the cone lamp, the clip lamp, and the column pair. The paper shade repeats at three points on purpose, and this is flagged. The prints are one series and none alike. Three Kiso stools. |
| Repetition across projects | Nothing from the four rows above. The jar lamp, the pothos, the fern, the balcony trees, and the landscape of the picked image are replaced. Flagged: cane on the owner's chair, and clay pots. Shop pieces: Silong and Lambot with Lilim, Unan and Bato with Tanaw, Bakal with Pahinga. Kiso, Pasilyo, Tabing, and Amihan No. 3 on this list alone. Each has two lists at most. Luad leaves. |
| Art | Each print is described as flat abstract shapes and forbidden to picture a place, a plant, or a thing. |
| Clichés and lookalikes | No flowers, palms, ferns, trailing vines, lanterns, string lights, or baskets. Every prompt forbids copies of recognizable designs. |
| Real brands | Devices and appliances are plain, with no logos. No readable text anywhere. |
| Scope | The owner did the work. Every piece is loose, hung, a bulb, or a shade at an existing point. One wall is painted. The kitchen, the bath, and the closet are the building's and unchanged. The prompts forbid built pieces. |
| The set | Living, dining, entry, kitchen, bedroom, bath, balcony, the book, and the board are shown. Six kinds of light. |

## 5. Known risks

- **Image 2 of prompt 1.1 carries the faults.** It is dim, it has a jar lamp, a pothos, a fern, a right-hand curtain, a plant in the door's swing, and a white left wall. The prompt says not to copy them. If the result comes back with any of them, drop image 2 and send the prompt with the other three references.
- **The painted wall may spread.** The generator may tint the far wall, the ceiling, or the whole frame green. Check the far wall and the ceiling against the before. The correction tool must not be allowed to pull the left wall back to gray.
- **The painted wall may read as a cast.** If Aedwon reads it as the picture turning green, the color is too weak or too even. A crisp line at the ceiling and a white baseboard are what make it paint.
- **Sockets.** All three are hidden or half hidden in 1.1. Check that none appears anywhere else, most of all on the left wall beyond the sofa and on the right wall beside the door.
- **The balcony door corner.** The generator likes to fill corners. A plant or a curtain there fails. Check 63 to 70.5 percent.
- **The curtain and the air conditioner.** They are 10 cm apart in plan and adjoin in the frame. A stack that overlaps the unit fails.
- **The sofa is longer than in his pick,** and nearer the window. Check that it is a real two-seat sofa of 178 cm and not a loveseat.
- **The crook lamp** may come back as a known arc lamp or a fishing-rod lamp. It should be a plain thin iron stem with a small hanging cloth shade.
- **The cone lamp** may come back as a jar. A jar repeats Lilim and fails.
- **The umbrella plant** may come back as a rubber tree, a fig, or a palm.
- **The herbs through the window** are small. They must agree with 1.3. Compare the two when both exist. If they disagree, 1.3 wins and the lead edits the fringe in 1.1.
- **The balcony pair is the outdoor pair.** Judge 1.2 at a glance for render look before anything else. The view is 30 percent of the frame. If it fails twice, add a second crop of the approved before, showing only the street, as image 3.
- **Glass at a glancing angle in 1.2 and 1.3.** Check that the reflection shows only sky, railing, pots, and buildings, and that it is the same in both frames apart from the pots.
- **The balcony is 1.2 m deep.** The generator may widen it. Check the end wall against the drawing: 27 to 61 percent.
- **1.4 must look like a render and still match.** It may come back too close to the photograph, or as a sketch. It may also move pieces. Compare the sofa, the console, and the prints with 1.1 by overlay. A fallback is to generate it from the approved before, with 1.1 as the look.
- **The bedroom before has few landmarks:** one corner, one socket, four closet doors. The closet doors carry the alignment. Count the doors and the knobs.
- **The bed's near corner is cut by the bottom of the frame.** That is intended. The side table at 9 percent must be whole.
- **The dining frame sees two doors and an opening at a steep angle** on the left. They may come back as one door or three. This is not a pair, so a small difference from the plan is acceptable. The entry door, the switch, and the sockets must be right.
- **Four chairs, none alike.** Count them, and count their legs.
- **The dining shade** hangs low. Check that it is whole and that its cord reaches the ceiling rose.
- **Wall color across jobs.** 3.1, 3.4, and 3.5 name the color in numbers but are generated apart from 1.1. Compare the wall in 3.1 with 1.1 and correct 3.1 toward it.
- **Text in 3.5.** Greeked text may come back as false letters. Inspect at 100 percent. A fallback is in the note above the prompt.
- **4.1 and 4.2 may change more than the wall.** Check by subtraction.
- **Night balance.** 2.2 and 3.1 have no daylight. Correct the ceiling and far walls toward neutral and judge the rest by eye.

## 6. What Aedwon judges

1. **The wall color.** A gray-green, B gray-blue, or C pale clay, from 1.1, 4.1, and 4.2 side by side. Or no painted wall at all.
2. **The living room against his pick.** Six things changed from image A: a painted wall, prints above the sofa, a crook floor lamp for the jar lamp, an umbrella plant and a herb balcony for the pothos, fern, and trees, one curtain instead of two, and a room that is lit. Does it still read as the room he picked?
3. **No television.** She watches on a laptop. Is that right for this owner, or should a screen stand on the console? A screen would take the place of the lamp and the print there.
4. **The same paper shade at three ceiling points.** Is that coherence, or a repeat?
5. **The render beside the photograph.** Does the render read as a render at a glance, and are the differences honest and small? Should the pair be a slider or two frames side by side?
6. **The hero camera** is the same recipe as three other heroes. The approved before was kept. Should the upright balcony pair lead on a phone?
7. Are the dining end and the bedroom lit the way he would light them?
8. Does the apartment look a year lived in, and still designed by a studio? Is it too full or too tidy?
9. Does any frame look like a render when it should not, most of all the balcony pair? Does any after look warmer than its before?
10. Is anything in any image that an owner of an old Makati apartment would catch?

## 7. After this gate

- Record his answers in `docs/decisions.md` and in the design file.
- Draw `hardin-plan` from section 5 of the design file.
- Retire the old Hardin entries in the image briefs.
- Transcribe `docs/content/projects.md` into the site data in a build wave.

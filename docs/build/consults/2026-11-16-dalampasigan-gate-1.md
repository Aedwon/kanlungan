# Dalampasigan Inn, gate 1: the whole set, twelve images (Fable 5.2, 2026-11-16)

Status: **Prompts for every Dalampasigan image.** They follow `docs/content/project-designs/dalampasigan-inn.md`, `docs/design/studio-hand.md`, the photography rules in `docs/content/image-briefs.md`, and the pattern of the Tanaw gate file. Images go to `design/dalampasigan/`.

The set is two new befores and ten furnished frames. With the approved guest room before, that is three pairs and seven story frames.

## 1. Three jobs

The three jobs share no room, so they can run at the same time on three Codex accounts (`CODEX_PICK_PARALLEL=1`). Inside a job, run the images in the order given.

| Job | # | File in `design/dalampasigan/` | What it is | Needs first |
|---|---|---|---|---|
| **1. Guest rooms** | 1.1 | `dalampasigan-hero.png` | P1 after, bright morning, 16:9 | `dalampasigan-hero-before.png`, already there |
| | 1.2 | `dalampasigan-garden-room.png` | The same room on the garden side, low sun, 16:9 | 1.1, checked |
| | 1.3 | `dalampasigan-bedside.png` | The stool and the reed lamp, night, 3:4 | 1.1, checked |
| | 1.4 | `dalampasigan-bath.png` | The guest bath, soft morning, 3:4 | Nothing |
| **2. Lobby and corridor** | 2.1 | `dalampasigan-lobby-before.png` | P2 before, evening, 16:9 | Drawing |
| | 2.2 | `dalampasigan-lobby.png` | P2 after | 2.1, checked |
| | 2.3 | `dalampasigan-corridor.png` | The upper corridor, soft morning, 3:4 | Drawing |
| **3. Breakfast room and exterior** | 3.1 | `dalampasigan-breakfast-before.png` | P3 before, sunrise, 16:9 | Drawing |
| | 3.2 | `dalampasigan-breakfast.png` | P3 after | 3.1, checked |
| | 3.3 | `dalampasigan-serving-table.png` | The serving table after breakfast, 3:4 | 3.2, checked |
| | 3.4 | `dalampasigan-common-corner.png` | The screen and the two chairs, night, 3:4 | 3.2, checked, and its drawing |
| | 3.5 | `dalampasigan-exterior.png` | The inn from its front garden, sunrise, 16:9 | 3.2, checked |

"Checked" means the lead has looked at that image against its drawing and its edge list. A job may make its next before or an independent frame while it waits. In job 1, make 1.4 while 1.1 is checked. In job 2, make 2.3 while 2.1 is checked.

`dalampasigan-hero-before.png` is a copy of the approved `design/round-4-calibration/dalampasigan-room-before.png`. It is not regenerated.

Expect 16 to 26 generations.

## 2. The pipeline for every image

1. **Check the drawing.** The four drawings are in `design/dalampasigan/drawings/`, made by `draw_views.py`. Run `python3 draw_views.py` to make them again and to print the percents used below.
2. **Generate the before** with the drawing as image 1.
3. **Check the before against the drawing** and count its sockets, fans, and tube lights. If a socket has drifted, the lead may move it in the before. If the camera is wrong, regenerate.
4. **Generate the after as an edit of the before.**
5. **Run the shell color correction** (`design/tools/pairfix.py`) on every after and story frame.
6. **Register and check alignment,** as the pairing method sets out.
7. **Run the review list** in the image briefs on every image and on the set, starting with item 0, realism.
8. **Show Aedwon,** and say what was checked, what was regenerated, and what is left for his eye.

## 3. How these prompts hold the camera, the fixed details, and the look

The Lilim and Tanaw lessons are built in.

- **A drawing sets each new camera.** Each prompt lists the frame by its edges, in percent from the left and from the top. The numbers come from the script. The hero's numbers are measured on the approved before.
- **Each after lists every fixed item by count and place,** names each socket, and says the camera does not move. The hero names both left wall sockets by position, because Aedwon caught them moving.
- **The curtain is described by where it stops.** One track ends at the left edge of the air conditioner. Both panels stack at the left. The prompt says that nothing hangs to the right of the window.
- **No prompt asks for warmth.** The words "warm," "cozy," "golden," and "glow" are not used for light. Each after says the walls and ceiling keep the color of image 1.
- **Realism first.** Each prompt asks for a real photograph of a working inn that is well kept. None asks for dirt, stains, or damage. The frames that look outdoors, 1.2 and 3.5, carry a realism block for the outside.
- **Glass reflects only what faces it.** No night frame has glass in view. The day frames say what the glass may show.
- **A piece seen in two frames matches.** Each story frame takes the approved after of its room as image 1.
- **The second guest room is an edit of the first.** Prompt 1.2 changes the view, the light, two textiles, and a guest's things, and nothing else.
- **No lamp shape repeats** across the rooms, and none repeats a Lilim or a Tanaw shape. Nothing from Lilim or Tanaw returns: no stone slab table, no ink-band art, no capiz, no rattan daybed, no taro jars, no record console, no paper lantern, no rust reading chair.
- **Hosted, not cluttered.** Each frame holds one or two signs that a guest is expected or has just arrived.

The drawings are wireframes. Lines behind an object show through it. The prompts say so.

### The cameras with a drawing

Each room has its own origin at its southwest corner. x runs east and y runs north.

| View | Drawing | Camera | Heading | Height | Lens | Shape |
|---|---|---|---|---|---|---|
| Lobby, P2 | `drawings/lobby-p2.png` | In the northeast corner, 0.3 m from the street wall and 0.4 m from the north wall | Southwest, 232 degrees | 1.3 m | 24mm | 16:9 |
| Breakfast room, P3 | `drawings/breakfast-p3.png` | At the lobby doorway, 0.5 m from the street wall and 0.6 m from the south wall | Northwest, 325 degrees | 1.3 m | 28mm | 16:9 |
| Common corner | `drawings/common-corner.png` | Beside the serving table's north end, 0.7 m from the west wall | Northeast, 42 degrees | 1.2 m | 28mm | 3:4 upright |
| Upper corridor | `drawings/corridor.png` | At the stair end, 0.65 m from the west wall | North, 0 degrees | 1.35 m | 28mm | 3:4 upright |

### Reference images

At most two shop references per image, and only for a piece that leads in that frame. Shop references are in `design/photography/`.

| Image | References, in order |
|---|---|
| 1.1 | (1) `dalampasigan-hero-before.png`, (2) `design/round-4-calibration/dalampasigan-room-A-sea-as-color.png` as the look, (3) `himlay-studio.png`, (4) `tuntungan-studio.png` |
| 1.2 | (1) `dalampasigan-hero.png` |
| 1.3 | (1) `dalampasigan-hero.png`, (2) `tuntungan-studio.png` |
| 1.4 | (1) `dalampasigan-hero-before.png` for the finishes, (2) `tuntungan-studio.png` |
| 2.1 | (1) `drawings/lobby-p2.png`, (2) `dalampasigan-hero-before.png` for the finishes |
| 2.2 | (1) `dalampasigan-lobby-before.png`, (2) `habi-studio.png`, (3) `banig-studio.png` |
| 2.3 | (1) `drawings/corridor.png`, (2) `dalampasigan-hero-before.png` for the finishes, (3) `tuntungan-studio.png` |
| 3.1 | (1) `drawings/breakfast-p3.png`, (2) `dalampasigan-hero-before.png` for the finishes |
| 3.2 | (1) `dalampasigan-breakfast-before.png`, (2) `bangko-studio.png`, (3) `hain-studio.png` |
| 3.3 | (1) `dalampasigan-breakfast.png`, (2) `bilao-studio.png` |
| 3.4 | (1) `drawings/common-corner.png`, (2) `dalampasigan-breakfast.png` |
| 3.5 | (1) `dalampasigan-breakfast.png`, (2) `design/lilim/lilim-exterior-dusk.png` for photographic quality only |

## Job 1: guest rooms

### Prompt 1.1: the hero, a sea-side guest room in the morning

References: (1) `design/dalampasigan/dalampasigan-hero-before.png`, (2) `design/round-4-calibration/dalampasigan-room-A-sea-as-color.png`, (3) `himlay-studio.png`, (4) `tuntungan-studio.png`. Save as `dalampasigan-hero.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it as a guest room in a small inn by the sea. It is a photograph for a design magazine, taken on a bright morning. The room is ready for a guest.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1. Check it by these marks, measured from the left as a share of the width and from the top as a share of the height:
- At the left edge, from 0 to about 7.5 percent across: a short white return wall with one large white switch plate on it, at about 3 to 6.5 percent across and 37 to 55 percent down.
- On the long left wall, two white double sockets, low. The nearer one is at about 25.5 percent across and 86.5 percent down. The farther one is at about 36 percent across and 77.5 percent down.
- The far left corner of the room is at about 48.5 percent across.
- The window, in a plain silver aluminum frame with two sliding panels, runs from about 52.5 to 76.5 percent across and from 32 to 59 percent down. Its one mullion is at about 65 percent.
- The white air conditioner is high on the far wall, to the right of the window, from about 78 to 89.5 percent across and 25.5 to 33 percent down.
- The far right corner is at about 91 percent across.
- On the right wall, one small white socket, low, at about 92 percent across and 71 percent down. Then a white flush door with a round steel knob, from about 93.5 to 96.5 percent across.
- On the ceiling, one bare tube light from about 58.5 to 76.5 percent across at about 20.5 percent down, and one white ceiling fan with three blades, its hub at about 63.5 percent across and 10.5 percent down.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: the return wall and its switch plate, the left wall, the far wall, the right wall, the white ceiling, the cream floor tile and its joints, the window and its frame, the air conditioner, the tube light, the ceiling fan, the socket on the right wall, the door, its frame, and its knob. THE TWO SOCKETS ON THE LEFT WALL DO NOT MOVE. The nearer one stays at 25.5 percent across and stays in plain view. The farther one stays at 36 percent across, and the bed now stands in front of it and hides it. Do not draw a socket at any other place. Do not add, move, or delete any socket, switch, light, or cooling unit. No wall is painted. Nothing is built. THE VIEW THROUGH THE WINDOW STAYS EXACTLY AS IN IMAGE 1: the same sunlit treetops, the same band of blue-green sea, the same horizon, the same pale sky.

LIGHT. The same hour and daylight as image 1, about 9:00 in the morning. Bright, even daylight from the window. No direct sun enters the room. The tube light is off. Both bedside lamps are off, because it is a bright morning. The fan is still. THE WHITE WALLS AND THE CEILING KEEP EXACTLY THE COLOR AND BRIGHTNESS THEY HAVE IN IMAGE 1, white, not cream, not yellow. No color cast over the frame. One natural exposure with true darks and clean whites. The window stays brighter than the room and keeps its detail. No HDR.

THE GLASS. As in image 1, the window glass is clear and shows the view. It reflects nothing.

THE DESIGN. Follow image 2 for the mood and for the look of the bed, the two stools, the bench, the reed mat, and the throw: a quiet white room with honey-colored wood, cane, reed, white linen, and the sea as the only color. Do not copy image 2's curtains, its lamp, its hanging reed panel, its clothes rail, the position of its bed, or its socket. The layout is this.

On the left wall, from the camera toward the window:
- From about 10 to 23 percent across, standing against the left wall between the return wall and the nearer socket: one clothes rail made of thin blackened steel rod, 90 cm wide and 150 cm tall, on two flat steel feet. Three plain wooden hangers hang on it, empty. Its top is at about 46 percent down. It is a thin black outline. The wall shows through it.
- At about 25.5 percent across: the nearer socket, in plain view on clear wall, with one white plug in it.
- From about 28 to 34 percent across, just beyond that socket: one small carved stool in solid honey-brown acacia, like image 4, used as a bedside table. On it, a small lamp and one room key on a plain wooden tag. The lamp's thin cord runs along the foot of the wall to the nearer socket.
- From about 32 to 45 percent across: the bed in image 3, queen size, in natural honey-colored oiled acacia instead of dark wood, with its woven cane headboard against the left wall. The bed runs out from the wall across the room toward the right, as the bed does in image 2, and ends at about 70 percent across. It leaves a clear walk more than 1 m wide along the right wall. It is made for a guest: smooth white cotton sheets, a thin white cotton cover, two white pillows, one long narrow cushion in undyed handloomed cotton lying in front of the pillows, and one plain undyed cotton throw folded in a band across the foot.
- From about 46 to 50 percent across, on the far side of the bed near the corner: a second stool, the same as the first. On it, a second lamp, the same as the first, and one book.
- The two lamps are a pair. Each is about 30 cm tall: a short turned stem of honey-colored acacia under a small cone-shaped shade of finely woven natural reed, about 22 cm across. Both are switched off. No black stem and no white shade.
- On the left wall above the headboard, from about 33 to 44 percent across and 30 to 41 percent down: one wide drawing in a thin black steel frame, 120 cm wide and 45 cm tall. It is graphite pencil on cream paper: hundreds of fine straight ruled lines that cross each other like a loose weave, dense at one end and open at the other. It pictures nothing. It is pale and quiet.

At the window:
- Curtains: plain white linen, unlined, on ONE slim white track fixed to the far wall just above the window frame. The track starts in the far left corner and STOPS AT THE LEFT EDGE OF THE AIR CONDITIONER, at about 77.5 percent across. It does not pass under or in front of the air conditioner. Both curtain panels are drawn open to the left and hang together in one stack in the far left corner, from about 49 to 55 percent across, from the track to the floor. THERE IS NO CURTAIN TO THE RIGHT OF THE WINDOW. The wall under the air conditioner is bare white wall from the unit down to the floor. Nothing hangs under, beside, or in front of the air conditioner.
- Under the window, against the far wall, from about 56 to 75 percent across: one long, narrow bench in solid honey-brown acacia with visible joints, 140 cm long, as in image 2. On it, two folded white cotton towels, and a small wooden tray with a clear glass carafe of water and two glasses.

On the floor:
- One flat handwoven reed mat, natural straw color with a plain cotton binding, about 2 by 3 m, as in image 2. It lies under the lower two thirds of the bed and reaches toward the camera and the right wall.
- On the mat beside the bed, on the side nearer the camera: one pair of plain woven slippers.
- Along the right wall, from the camera to the window: clear cream tile. Nothing stands against the right wall. Nothing stands in front of the door. The socket on the right wall stays in plain view.

Palette: white walls, white linen, honey-colored acacia, natural cane, natural reed, one thin black line of steel, and the blue-green sea in the window. No other color.

Everything is ready and well kept: linen with one fold line, a slight variation in the reed, real wood grain, a soft dent in one pillow. A working inn, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text. No logos. No television. No copy of any recognizable designer bed, lamp, or chair: plain, anonymous forms. No flowers. No plants. No shells, driftwood, rope, nets, or surfboards. No picture of a beach, a wave, or a palm. No woven panel on the wall. No baskets on walls, carvings, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

### Prompt 1.2: the garden-side guest room

Reference: (1) `design/dalampasigan/dalampasigan-hero.png`. Save as `dalampasigan-garden-room.png`. Start only after image 1.1 is checked.

This frame shows the repeated room. It must match image 1.1 piece for piece. It is an edit of the approved hero, not a new picture.

```text
Edit image 1 into a second guest room of the same small inn. It is the same room type on the other side of the building, facing the garden instead of the sea, with a guest who has just arrived. A photograph for a design magazine, taken early in the morning.

EVERYTHING STAYS EXACTLY AS IN IMAGE 1 EXCEPT THE SEVEN CHANGES LISTED BELOW. The camera does not move. The framing is identical. These stay the same, in the same place, at the same size, with the same form and color: the return wall and its switch plate, the walls, the ceiling, the cream floor tile, the window and its aluminum frame, the air conditioner, the tube light, the ceiling fan, the door and its knob, every socket, the clothes rail, both stools, both reed lamps, the bed and its cane headboard, the white linen, the two pillows, the framed drawing, the white curtains in one stack at the left of the window, the bare wall under the air conditioner, the bench, the towels, the tray with the carafe and two glasses, and the reed mat. Count the furniture: one rail, one bed, two stools, two lamps, one bench, one mat. Do not add, remove, move, or restyle any of them. Do not add a curtain to the right of the window.

THE SEVEN CHANGES.
1. The view. Through the window there is no sea. The window now looks east over the inn's front garden: the leafy tops of two talisay trees with broad green leaves, close to the window, and a clear pale morning sky above and between them. No horizon, no water, no buildings.
2. The light. About 7:15 in the morning. The sun is low in the east and shines straight in through the window, between the leaves. One band of direct sun, the width of the window and broken by soft leaf shadows, lies across the top of the bench, the foot of the bed, the reed mat, and the tile toward the camera. Everything the sun strikes is bright, with long soft-edged shadows that point toward the camera. Everything the sun does not strike stays in neutral daylight. THE WHITE WALLS AND THE CEILING KEEP THE COLOR THEY HAVE IN IMAGE 1 everywhere the sun does not strike. No color cast over the frame. No lamp is on. One natural exposure. The window is bright and keeps its detail. No HDR.
3. The throw folded across the foot of the bed is now deep indigo blue handloomed cotton, the same size and fold.
4. The long narrow cushion in front of the pillows is now the same deep indigo blue.
5. On the bench, beside the towels: one soft canvas duffel bag in undyed canvas, closed.
6. On the clothes rail: one pale linen shirt on one of the three hangers. The other two stay empty.
7. On the bed: one pillow is dented, and one paperback book lies face down on the cover. On the mat, a pair of leather sandals takes the place of the slippers. Inside the frame on the wall, the pencil lines of the drawing are arranged a little differently, in the same frame at the same size.

REALISM OUTSIDE. The garden is a real one, photographed, not drawn. Muted, true leaf greens in several tones, some leaves in sun and some in shade, a few yellowing leaves, branches that overlap the window frame unevenly. The sky is pale with a little haze and is brighter near the sun. No neon green, no flowers, no palms, no perfectly even foliage.

THE GLASS. The window glass is clear. It reflects nothing.

Indigo is the only new color in the room. A working inn, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text. No logos. No television. No flowers. No plants indoors. No shells, driftwood, rope, nets, or surfboards.
```

### Prompt 1.3: the bedside at night

References: (1) `design/dalampasigan/dalampasigan-hero.png`, (2) `tuntungan-studio.png`. Save as `dalampasigan-bedside.png`. Start only after image 1.1 is checked.

```text
Create one photograph for a design magazine: a close view of one bedside in the same guest room as image 1, at night. Aspect 3:4, upright. Full-frame camera, 85mm lens, camera level at 0.8 m, all verticals straight, about f/4.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS ROOM, taken in the morning. In it, the bed stands with its cane headboard against the left wall, with a carved wooden stool and a small reed lamp on each side. Use image 1 for every piece and every finish. Each piece below looks exactly as it does in image 1: the same form, color, size, and material. Image 2 is the stool. Do not copy image 1's framing. This is a different standpoint.

THE CAMERA. It stands near the foot of the bed, about 2.2 m from the wall, and looks at the wall and the bedside nearer the room's entry. No window is in the frame. By position:
- The whole background is the plain white painted wall, slightly uneven, with a strip of cream floor tile along the bottom.
- In the middle of the frame, standing against the wall: the small carved stool in solid honey-brown acacia in image 2, 44 cm high.
- On the stool: the small lamp from image 1, about 30 cm tall, a short turned stem of honey-colored acacia under a small cone-shaped shade of finely woven natural reed. It is switched on. Beside it: a room key on a plain wooden tag, a glass of water, and a phone lying face down, on a thin white charging cable.
- On the wall to the left of the stool, low, about 20 cm above the floor: one white double socket with two white plugs in it, the lamp's and the phone charger's. The lamp's thin cord and the charging cable run to it.
- Filling the right third of the frame: the corner of the bed. The edge of the woven cane headboard in its honey-colored acacia frame, one white pillow, and the white cotton sheet turned down. A paperback book lies face down on the sheet.
- At the lower edge: the bound edge of the reed mat on the cream tile.

LIGHT. About 9:30 pm. The reed lamp is the main light. It gives soft white light that falls on the stool, the pillow, the cane, and the wall right beside it, and throws a fine woven pattern of light and shadow on the wall near the shade. The second bedside lamp, out of the frame to the right, is also on, so the shadows are open and the pillow and headboard are readable. The room's tube light is off. THE WHITE WALL READS WHITE away from the lamp, not cream, not orange. No color cast over the frame. One natural exposure. No HDR.

Everything looks ready and well kept: crisp cotton with one fold line, real cane with slight variation, real wood grain. A real photograph with fine grain, not a render. No people. No readable text on the key tag, the book, or the phone. No logos. No copy of any recognizable designer lamp or stool: plain, anonymous forms. No black lamp stem and no white lamp shade. No flowers. No shells, driftwood, or souvenirs.
```

### Prompt 1.4: the guest bath

The bath is a built room and the owners'. Kanlungan's work is loose. No drawing is made for this frame.

References: (1) `design/dalampasigan/dalampasigan-hero-before.png` for the finishes, (2) `tuntungan-studio.png`. Save as `dalampasigan-bath.png`.

```text
Create one photograph for a design magazine: a detail of a small guest bathroom in an older inn by the sea in San Juan, La Union, Philippines, in the morning. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 1.2 m, all verticals straight, about f/5.6.

Image 1 shows a guest room of the same inn. Use it for the finishes only: the same white painted plaster, the same cream floor tile, the same plain white flush door with a round steel knob. Image 2 is the stool.

THE FRAME. The camera stands about 1.5 m from the basin wall and looks at it at a slight angle from the right, so the mirror does not face the camera. By position, measured from the left as a share of the width and from the top as a share of the height:
- The back wall is plain white glazed tile, 20 cm squares in a straight grid with thin pale gray joints, from the floor up to about 30 percent down. Above the tile the wall is white painted plaster. The floor is cream tile, from about 84 percent down.
- From 20 to 58 percent across: a plain white wall-hung basin, the owners', with one plain chrome tap. Its rim is at about 60 percent down.
- Above it, from 24 to 54 percent across and from 22 to 50 percent down: a plain frameless rectangular mirror. THE MIRROR SHOWS ONLY WHAT FACES IT: white wall tile and white painted wall. No camera, no person, no window.
- On the basin's ledge: a small ash-glazed stoneware cup with two toothbrushes, and a small stoneware dish with a bar of white soap.
- On the painted wall above the tile, from 62 to 74 percent across and 12 to 26 percent down: one small framed pencil drawing, about 20 by 25 cm, in a thin black steel frame. Fine crossing graphite lines on cream paper. It pictures nothing.
- To the right of the basin, at about 80 percent across and 34 percent down: one plain chrome hook on the tile, with a white cotton robe hanging from it.
- From 64 to 86 percent across, from about 66 to 86 percent down: the small carved stool in solid honey-brown acacia in image 2. On it, two folded white cotton towels.
- At the left edge, high on the side wall, from about 14 to 28 percent down: a small window of frosted glass louvers in an aluminum frame, bright with daylight.
- On the floor: a white cotton bath mat in front of the basin, and at the left a small plain white bin, partly in the frame.

LIGHT. About 9:30 in the morning. Soft, even daylight through the frosted louvers at the left. It is the only source. The ceiling light is off. THE WHITE TILE AND THE WHITE WALL READ WHITE, not cream, not yellow. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

A bathroom in a working inn, made ready for a guest and well kept: a crisp fold in a towel, one drop of water at the tap, real grout lines. An older room, clean and sound, with nothing new built. A real photograph with fine grain, not a render. No people. No readable text on any soap, towel, or robe. No logos. No bottles with labels. No plants and no flowers. No shells, driftwood, or souvenirs. No mosaic, patterned tile, stone, niches, or glass shower screen.
```

## Job 2: lobby and corridor

### Prompt 2.1: the lobby before

References: (1) `design/dalampasigan/drawings/lobby-p2.png`, (2) `design/dalampasigan/dalampasigan-hero-before.png`. Save as `dalampasigan-lobby-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of the empty lobby of an older small inn, in the evening. Aspect 16:9. Full-frame camera, 24mm lens, camera level at 1.3 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the corner, the floor lines, the ceiling lines, the doorway, the four small plates, the ceiling fan, and the tube light. The drawing is a wireframe. Do not draw its lines in the photograph. Build the room so that its real edges fall on them.

IMAGE 2 SHOWS A GUEST ROOM OF THE SAME INN. Use it for the finishes only: the same white painted plaster walls, slightly uneven, with no baseboard; the same cream ceramic floor tile, 60 cm square, with thin joints; the same flat white ceiling; the same kind of white ceiling fan with three blades; the same kind of bare tube light; the same white switch plates and white double sockets. Do not copy its camera, its window, or its light.

THE FRAME. The camera looks into a corner of the room. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to 36.5 percent: one plain white wall, running away from the camera to the right. Low on it, one white double socket at about 17 percent across, 74 percent down.
- At 36.5 percent: the vertical corner where two walls meet. Its top is at 24 percent down and its foot is at 74 percent down.
- From 36.5 percent to the right edge: a second plain white wall, running back toward the camera. Low on it, two white double sockets, at about 44 percent across, 70 percent down, and at about 58 percent across, 74 percent down. At 67.5 percent across, 51 percent down: one white switch plate.
- From 71 to 88.5 percent across: an open doorway in that wall, with no door, a plain white frame, and its head at about 27 percent down. Through it: a corridor with the same white wall and the same cream tile, lit by its own tube light.
- From 88.5 percent to the right edge: plain white wall.
- Top: the flat white ceiling. One white ceiling fan with three blades, its hub at about 36 percent across and 18 percent down, hanging on a short rod. One bare tube light on the ceiling, running from about 50 percent across, 14 percent down, to about 67 percent across, 7 percent down.
- Bottom: cream floor tile, open and empty.
There is no window, no glass, and no outside view in the frame. The street door and the window are behind the camera.

The inn is in San Juan, La Union, Philippines. The room is completely empty and clean, freshly repainted by its owners. No furniture, counter, rugs, lamps, plants, signs, or objects.

LIGHT. About 7:00 pm, dark outside. The tube light is on and gives flat, cool-white light. The fan is still. Correct exposure. Neutral white balance: the walls read white to faintly cool.

REALISM. A real photograph of a real room, not a render. Fine sensor grain. Muted true color. An older building that has been repainted: the plaster is a little uneven and the tile joints are thin and regular. The room is clean and sound: no dirt, stains, cracks, or damage. No people. No readable text. No logos. No drawn lines.
```

### Prompt 2.2: the lobby after

References: (1) `design/dalampasigan/dalampasigan-lobby-before.png`, (2) `habi-studio.png`, (3) `banig-studio.png`. Save as `dalampasigan-lobby.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it as the lobby of a small inn by the sea. It is a photograph for a design magazine, taken in the evening, when guests come back.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1: the corner where the two walls meet stays at 36.5 percent of the width from the left, the open doorway still runs from 71 to 88.5 percent, and the switch plate stays at 67.5 percent.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: both walls, the white ceiling, the cream floor tile, the open doorway and its frame, the ceiling fan, the tube light, the switch plate, one double socket on the left-hand wall at about 17 percent, and two double sockets on the right-hand wall at about 44 and 58 percent. The socket at 44 percent is now behind the desk, which hides it. The socket at 58 percent stays in plain view. Do not draw a socket at any other place. Do not add, move, or delete any socket, switch, fan, or light. No wall is painted. Nothing is built. No counter is built. No pendant hangs from the ceiling.

LIGHT. The same hour as image 1, about 7:00 pm. The tube light now has a soft white tube and is on. Two lamps are on. Together they light the room evenly and comfortably, the way a small inn lights its lobby in the evening: the ceiling is visible, the corners are readable, and a person could read the register. It is not dim. THE WHITE WALLS AND THE CEILING KEEP THE COLOR THEY HAVE IN IMAGE 1, white, not cream, not yellow, not orange, everywhere more than 1 m from a lit lamp. Each lamp gives soft white light that is a little brighter on what is right beside it. No color cast over the frame. One natural exposure with true darks. No HDR.

THE DESIGN. Fuller than a guest room, and calm.

In front of the right-hand wall:
- From about 26 to 54 percent across: one front desk made for the room. It is a plain table in honey-colored oiled acacia, 180 cm long, 70 cm deep, and 76 cm high, on four square legs, with one panel of natural woven cane across its front between the legs. It stands parallel to the right-hand wall and 1 m out from it, so a person can sit behind it. Its top is at about 62 to 68 percent down. It is a loose table, not a built counter.
- Behind the desk, between it and the wall: one plain dining chair in honey-colored acacia with a woven cane seat, pushed in.
- On the desk, at the end nearer the camera, at about 47 percent across: a tall slim lamp, about 60 cm high, with a thin stem bound in fine natural rattan and a tapered shade of off-white woven abaca cloth. It is switched on. Its cord drops behind the desk and runs to the socket at 58 percent.
- On the desk, from that lamp toward the corner: a guest register lying open with a pen, a small plain bell, a plain card terminal with no logo, and one room key on a wooden tag lying ready. At the far end of the desk: a round woven rattan tray with four rolled white hand towels, an ash-glazed stoneware water jug, and three glasses.
- On the right-hand wall behind the desk, from about 39 to 46 percent across and 32 to 60 percent down: the tall woven wall piece in image 2, undyed natural reed and abaca on a plain wood rail, 90 cm wide and 140 cm tall, hung upright. The same piece, unchanged.
- On the same wall, from about 52 to 58.5 percent across and 42 to 52 percent down: one board of honey-colored acacia, 60 by 45 cm, with twelve small brass hooks in two rows of six. Eleven hooks each hold one key on a plain wooden tag. One hook is empty.
- Against the wall below the board, seen behind the desk: a low two-shelf stand in the same acacia, with a small white router and a small plain printer.
- The switch plate at 67.5 percent and the wall around it stay clear. Nothing stands in front of the doorway.

In front of the left-hand wall:
- At about 25 percent across: one calamansi tree about 1.3 m tall, a small citrus tree with dense dark green leaves and a few small round green fruits, in a plain pale gray cement pot. No flowers.
- At about 15 percent across: one floor lamp about 150 cm tall. It is one straight pole of honey-colored bamboo on a small round black steel foot, with a shallow dish-shaped shade of white enamelled steel at the top, tilted down. It is switched on. Its cord runs to the socket at 17 percent, which stays in view.
- From about 12 percent to the left edge: the end of one long, narrow bench in solid honey-brown acacia, against the wall, running out of the frame. On it, one flat undyed cotton cushion. On the floor beside it, a guest's canvas bag.

On the floor and beyond:
- Across the lower middle of the frame, on the tile in front of the desk: the flat handwoven reed mat in image 3, natural straw color with a plain cotton binding, about 1.6 by 2.3 m. Its near edge is cropped by the bottom of the frame.
- Through the doorway: the corridor, lit, with a strip of the same reed as a runner on its floor.

Palette: white walls, cream tile, honey-colored acacia, natural cane, reed, bamboo, off-white cloth, a little black steel, the dark green of the tree, and small brass hooks. No other color.

Everything looks in use and well kept: a pen left on the open register, keys that hang at slightly different angles, real wood grain, a slight variation in the reed. A working inn, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text on the register, the key tags, or any device. No signs. No logos. No television. No copy of any recognizable designer chair, lamp, or desk: plain, anonymous forms. No flowers. No palms. No shells, driftwood, rope, nets, surfboards, or pictures of the sea. No religious figures, carvings, baskets on walls, or souvenirs. No new walls, windows, counters, shelves fixed to the wall, moldings, or ceiling features.
```

### Prompt 2.3: the upper corridor

References: (1) `design/dalampasigan/drawings/corridor.png`, (2) `design/dalampasigan/dalampasigan-hero-before.png`, (3) `tuntungan-studio.png`. Save as `dalampasigan-corridor.png`.

```text
Create one photograph for a design magazine: the upper corridor of a small older inn by the sea, in the morning, while rooms are being made up. Aspect 3:4, upright. Full-frame camera, 28mm lens, camera level at 1.35 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the two long walls, the end wall, the end window, the doors on both sides, and the tube lights. The drawing is a wireframe. Do not draw its lines in the photograph.

IMAGE 2 SHOWS A GUEST ROOM OF THE SAME INN. Use it for the finishes only: the same white painted plaster walls with no baseboard, the same cream floor tile, the same flat white ceiling, the same plain white flush doors in white frames with round steel knobs, the same bare tube lights, the same silver aluminum window frame. Image 3 is the stool. Do not copy image 2's camera or its view.

THE FRAME. A one-point view down a narrow corridor, 1.6 m wide. The camera stands a little left of center. Measured from the left as a share of the width, and from the top as a share of the height:
- The end wall is small, from 44.5 to 58 percent across and from 41.5 to 58.5 percent down. In it, a sliding aluminum window from 47 to 55.5 percent across and 45 to 53 percent down.
- The left wall runs from the left edge to 44.5 percent. In it, three white room doors, closed or open as said below: the nearest from about 28 to 33 percent across, with its head at about 31 percent down; the next at about 39 to 40.5 percent; the last at about 43 percent.
- The right wall runs from 58 percent to the right edge. In it, four white room doors: the nearest at the right edge, from about 91 percent across, cropped by the frame; the next from about 67.5 to 70.5 percent; the next at about 62 percent; the last at about 59 percent.
- On the ceiling: one bare tube light running away from the camera, from about 57 percent across, 3 percent down, to about 55 percent across, 18 percent down, and a second, small, near the far end. Both are off.
- Low on the left wall, at about 38 percent across and 64 percent down: one white double socket.
- Bottom: the cream tile floor.

THE DESIGN.
- Down the middle of the floor, from the bottom of the frame to the far end: one runner of flat handwoven reed, natural straw color with a plain cotton binding, 80 cm wide. Cream tile shows on both sides of it.
- The nearest door on the left, at 28 to 33 percent, stands open into its room. The door leaf is inside the room and out of sight. Soft bright daylight comes out of the doorway and lies across the runner and on the opposite wall.
- Against the left wall, just before that open doorway, at about 24 percent across: the small carved stool in solid honey-brown acacia in image 3. On it, a neat stack of folded white sheets.
- On the tile beside the nearest right-hand door: one pair of sandals with a little dry sand on them.
- On each closed door, at eye height: one small plain brass disc, 6 cm across, with nothing written on it.
- On the right wall between the two nearest right-hand doors, from about 74 to 82 percent across, centered at about 47 percent down: one framed pencil drawing in a thin black steel frame, about 80 by 55 cm. Fine crossing graphite lines on cream paper. It pictures nothing. It is seen at a steep angle.
- Under the end window: one long, narrow bench in solid honey-brown acacia, 140 cm long, across the end of the corridor. On it, a stack of folded white cotton beach towels, each with one thin indigo blue stripe. Beside it on the floor, a tall round rattan basket holding rolled reed beach mats.

LIGHT. About 9:30 in the morning. Daylight comes from the end window and from the open room on the left. The corridor is in soft, even, neutral daylight, brighter at the far end and at the open door. The tube lights are off. Through the end window: sunlit treetops and pale sky, bright, with detail. THE WHITE WALLS AND THE CEILING READ WHITE, not cream, not yellow. No color cast over the frame. One natural exposure with true darks and a clean bright. No HDR.

THE GLASS. The end window is small and far away. It shows only the trees and the sky.

A working inn in the middle of its morning, clean and cared for: sheets with sharp folds, towels in an even stack, real wood grain, a slight variation in the reed. An older building, sound and freshly painted. A real photograph with fine grain, not a render. The camera is off center, so the two walls are not mirror images. No people. No readable text. No numbers on the doors. No signs. No logos. No flowers. No plants. No shells, driftwood, rope, nets, surfboards, or pictures of the sea. No baskets on walls, carvings, or souvenirs. No new walls, moldings, wall lights, or ceiling features.
```

## Job 3: breakfast room and exterior

### Prompt 3.1: the breakfast room before

References: (1) `design/dalampasigan/drawings/breakfast-p3.png`, (2) `design/dalampasigan/dalampasigan-hero-before.png`. Save as `dalampasigan-breakfast-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of the empty dining room of an older small inn, just after sunrise. Aspect 16:9. Full-frame camera, 28mm lens, camera level at 1.3 m, all verticals straight, about f/8.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the far corner, the floor lines, the ceiling lines, the door, the air conditioner, the small plates, the ceiling fans, and the tube lights. The drawing is a wireframe. Do not draw its lines in the photograph. Build the room so that its real edges fall on them.

IMAGE 2 SHOWS A GUEST ROOM OF THE SAME INN. Use it for the finishes only: the same white painted plaster walls, slightly uneven, with no baseboard; the same cream ceramic floor tile, 60 cm square, with thin joints; the same flat white ceiling; the same kind of white ceiling fan, bare tube light, and white air conditioner; the same plain white flush door with a round steel knob; the same white switch plates and sockets. Do not copy its camera, its window, or its light.

THE FRAME. The camera looks down a long room into its far corner. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to 63 percent: one long plain white wall, running away from the camera to the right. Low on it, two white double sockets, at about 12.5 percent across, 81 percent down, and at about 33.5 percent across, 74 percent down. At about 50 percent across, 51 percent down: one white switch plate. From 51.5 to 56 percent across: one white flush door in a white frame, closed, with a round steel knob, its head at about 36 percent down.
- At 63 percent: the vertical corner where two walls meet. Its top is at 30 percent down and its foot is at 68 percent down.
- From 63 percent to the right edge: the end wall, plain white, facing the camera at an angle. High on it, from about 66.5 to 74 percent across, at about 34 percent down: one white split-type air conditioner. Low on it, at about 89 percent across, 67 percent down: one white double socket.
- Top: the flat white ceiling. One white ceiling fan with three blades, its hub at about 72.5 percent across and 23 percent down. The blade tips of a second fan show at the very top edge, left of center. One bare tube light across the ceiling near the top edge, from about 52 to 73 percent across. A second, smaller with distance, at about 80 percent across and 23.5 percent down.
- Bottom: cream floor tile, open and empty, filling the lower third of the frame.
There is no window, no glass, and no outside view in the frame. The room's three windows are in the wall behind the camera's right shoulder.

The inn is in San Juan, La Union, Philippines. The room is completely empty and clean, freshly repainted by its owners. No furniture, counter, rugs, lamps, plants, signs, or objects.

LIGHT. About 6:45 in the morning, a clear day. The sun is low in the east, behind the camera's right shoulder. It comes through the three windows that are out of the frame. It lays two low upright rectangles of direct sun on the long left wall, each from the floor up to about waist height: one from the left edge of the frame to about 23 percent across, one from about 28 to 45 percent across. A narrow strip of the floor at the foot of that wall is also in sun. The rest of the room is in soft, even daylight. All lights are off. The fans are still. Correct exposure. Neutral white balance: the walls in shade read white. The sunlit rectangles are brighter and a little yellow-white, as low sun is. No color cast over the frame.

REALISM. A real photograph of a real room, not a render. Fine sensor grain. Muted true color. An older building that has been repainted: the plaster is a little uneven. The edges of the sun rectangles are soft. The room is clean and sound: no dirt, stains, cracks, or damage. No people. No readable text. No logos. No drawn lines.
```

### Prompt 3.2: the breakfast room after

References: (1) `design/dalampasigan/dalampasigan-breakfast-before.png`, (2) `bangko-studio.png`, (3) `hain-studio.png`. Save as `dalampasigan-breakfast.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it as the breakfast room of a small inn by the sea. It is a photograph for a design magazine, taken just after sunrise, as the first guests come down.

THE CAMERA DOES NOT MOVE. The result has exactly the framing of image 1: the far corner stays at 63 percent of the width from the left, the white door stays from 51.5 to 56 percent, and the air conditioner stays from 66.5 to 74 percent.

DO NOT CHANGE ANYTHING FIXED. These stay exactly as in image 1, the same count, the same place, the same size: both walls, the white ceiling, the cream floor tile, the white door, its frame, and its knob, the switch plate at about 50 percent, the air conditioner, the ceiling fan and the blade tips of the second fan, both tube lights, two double sockets low on the left wall at about 12.5 and 33.5 percent, and one double socket low on the end wall at about 89 percent. Furniture may stand in front of a socket. No socket moves or disappears from the wall. Do not add any socket, switch, fan, or light. No wall is painted. Nothing is built. No counter is built. NO PENDANT OR HANGING LAMP: nothing hangs from the ceiling but the fans.

LIGHT. The same minute as image 1, about 6:45 in the morning. The same low sun from behind the camera's right shoulder. The two rectangles of direct sun fall where they fall in image 1, now on the serving table and the things on it, and on the wall around it. The same sun now also lies in bands across the top of the long table, and everything on the table inside a band casts a long shadow that points toward the left wall. Outside the sun the room is in soft daylight. All lamps and tube lights are off, because the sun is in the room. THE WHITE WALLS AND THE CEILING KEEP EXACTLY THE COLOR AND BRIGHTNESS THEY HAVE IN IMAGE 1 wherever the sun does not strike. No color cast over the frame. One natural exposure with true darks and a clean bright. No HDR.

THE DESIGN. One long table for the whole inn.

- In the middle of the room, running away from the camera: one long dining table made for the room, in honey-colored oiled acacia, 420 cm long and 90 cm wide, a thick plank top made in two halves that meet in a fine line at the middle, on four plain trestle frames of the same wood. Its near end is cropped by the lower left corner of the frame. Its far end is at about 62 to 75 percent across and 65 percent down. The table top fills much of the lower left of the frame.
- Along the side of the table nearer the camera, on the right: three long, narrow benches in solid honey-brown acacia like image 2, each 140 cm long, end to end in one row. No backs, no cushions.
- Along the far side of the table, on the left: seven dining chairs like image 3, in honey-colored acacia with plain wood backs and woven cane seats, in one row, facing the camera across the table. Count them: seven. One, near the camera, is pushed back from the table.
- On the near half of the table, laid for six: six ash-glazed stoneware plates, six cups, six glasses, and six folded undyed cotton napkins, each with one thin indigo blue stripe. In the middle of them: a round woven rattan tray of bread rolls, a plate of cut orange papaya, a low stoneware bowl of small green calamansi, a bunch of small yellow bananas, a plain steel coffee pot, and a stoneware water jug. One place has been used: a cup half full, a plate with crumbs, a creased napkin. The far half of the table is bare wood.
- Against the left wall, from about 10 to 42 percent across: one long serving table made for the room, in the same acacia, 240 cm long, 50 cm deep, and 90 cm high, on square legs, with one slatted shelf low down. It is open below. Its top is at about 60 to 64 percent down. On it, from the end nearer the camera: a mushroom-shaped lamp about 35 cm tall, with its base and its domed shade made of one white-glazed stoneware, switched off; a plain steel coffee urn; a plain toaster; a plain rice cooker; two round woven rattan trays, one with bread and one with bananas; and stacks of stoneware cups and bowls. No logos.
- On the left wall above the serving table, from about 10.5 to 34.5 percent across and 32 to 49 percent down: one plate rack in the same acacia, 180 cm wide, with two shelves and a thin front rail, hung on the wall. It holds stacks of ash-glazed stoneware plates and bowls, and a row of plates standing on edge.
- At the far end of the room, against the end wall, from about 82.5 to 95.5 percent across: a low acacia stand with one television on it, about 50 inches, switched off, a matte dark rectangle with no picture and no logo, from about 49 to 62 percent down. In front of it, seen from behind, at about 78 and 94 percent across: two low sling chairs, each a folding frame of honey-colored acacia with a seat and back of one length of heavy undyed cotton canvas. Under them, a flat reed mat.
- The white door at 51.5 to 56 percent stays clear. Nothing stands in front of it. The wall under the air conditioner stays bare.

Palette: white walls, cream tile, honey-colored acacia, natural cane, ash-glazed stoneware, undyed cotton, a thin indigo stripe, and the green, yellow, and orange of the fruit. No other color.

A walk at least 90 cm wide stays clear on both long sides of the table. Everything looks in use and well kept: crumbs on one plate, a spoon left in a jar, real wood grain, chairs that are not perfectly in line. A working inn, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text. No logos or brand names on any appliance. No copy of any recognizable designer chair, bench, table, or lamp: plain, anonymous forms. No flowers. No candles. No palms. No shells, driftwood, rope, nets, surfboards, or pictures of the sea. No religious figures, carvings, baskets on walls, or souvenirs. No new walls, windows, counters, cabinets, moldings, or ceiling features.
```

### Prompt 3.3: the serving table after breakfast

References: (1) `design/dalampasigan/dalampasigan-breakfast.png`, (2) `bilao-studio.png`. Save as `dalampasigan-serving-table.png`. Start only after image 3.2 is checked.

```text
Create one photograph for a design magazine: the serving table in the same breakfast room as image 1, later in the morning, after breakfast. Aspect 3:4, upright. Full-frame camera, 50mm lens, camera level at 1.2 m, all verticals straight, about f/5.6.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THIS ROOM, taken at sunrise. In it, the long serving table stands against the left wall with a plate rack on the wall above it. Use image 1 for every piece and every finish. Each piece below looks exactly as it does in image 1: the same form, color, size, and material. Image 2 is the round woven tray. Do not copy image 1's framing or its light. This is a different standpoint.

THE CAMERA. It stands between the dining chairs and the serving wall, about 1.5 m short of the serving table's nearer end, and looks along the wall at an angle. No window is in the frame. By position:
- The left two thirds of the frame is the plain white painted wall, running away from the camera.
- Against that wall, running away from the camera from the lower left: the serving table in honey-colored oiled acacia, 90 cm high, with one slatted shelf low down, open below. Under it, low on the wall, one white double socket with two plugs in it.
- On the serving table, nearest the camera: the mushroom-shaped lamp, about 35 cm tall, its base and domed shade of one white-glazed stoneware, switched off. Its cord drops behind the table to the socket.
- Then, going away from the camera: the round woven rattan tray in image 2 with the last four bread rolls and a folded undyed cloth; a second tray of small yellow bananas; three small jars of jam with spoons in them; a plain steel coffee urn; a plain toaster; a plain rice cooker with its lid closed; and a wooden tray with a stack of used cups.
- On the wall above the table, in the upper half of the frame: the acacia plate rack with two shelves and a thin front rail, holding stacks of ash-glazed stoneware plates and bowls and a row of plates standing on edge. Some stacks are shorter now.
- At the right edge of the frame, cropped: the plain wood backs of two acacia dining chairs.
- Far along the wall, small: the white switch plate and the edge of the white door.
- Bottom: cream floor tile.

LIGHT. About 9:30 in the morning. The sun is higher now and no longer reaches this wall. Soft, even daylight comes from the windows on the right, out of the frame. No lamp is on. THE WHITE WALL READS WHITE, not cream, not yellow. No color cast over the frame. One natural exposure with true darks and clean whites. No HDR.

A serving table that has just been used and is well kept: a few crumbs on the tray, a drip under the urn's tap, a spoon standing in a jar, glaze that differs a little from plate to plate. A working inn, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text on any jar or appliance. No logos. No flowers. No candles. No shells or souvenirs.
```

### Prompt 3.4: the common corner at night

References: (1) `design/dalampasigan/drawings/common-corner.png`, (2) `design/dalampasigan/dalampasigan-breakfast.png`. Save as `dalampasigan-common-corner.png`. Start only after image 3.2 is checked.

```text
Create one photograph for a design magazine: the far end of the breakfast room of a small inn, in the evening, when it is the guests' sitting corner. Aspect 3:4, upright. Full-frame camera, 28mm lens, camera level at 1.2 m, all verticals straight, about f/5.6.

IMAGE 1 IS A LINE DRAWING OF THIS EXACT VIEW. Match every line of it: the corner, the floor and ceiling lines, the two small plates, and the tube light. The drawing is a wireframe. Do not draw its lines in the photograph.

IMAGE 2 IS THE APPROVED PHOTOGRAPH OF THE SAME ROOM, taken at sunrise from the other end. In it, this corner is at the far right: the television on its low stand and the two sling chairs seen from behind. Use image 2 for the finishes and for those pieces: the same white walls, the same cream tile, the same television and stand, the same two sling chairs, the same reed mat. Do not copy its framing or its light.

THE FRAME. The camera looks into the corner of the room. Measured from the left as a share of the width, and from the top as a share of the height:
- From the left edge to 53.5 percent: the end wall, plain white, running away from the camera to the right. Low on it, two white double sockets, at about 21 percent and about 46 percent across, 65 percent down.
- At 53.5 percent: the vertical corner. Its top is at 28 percent down and its foot is at 68 percent down.
- From 53.5 percent to the right edge: the side wall, plain white, with no window in the frame.
- Top: the flat white ceiling, with one tube light across it near the top edge, at about 26 percent across.
- Bottom: cream floor tile.

THE DESIGN.
- Against the end wall, from about 10 to 38 percent across: a low stand in honey-colored oiled acacia with one open shelf. On it, one television, about 50 inches, switched off: a matte dark rectangle from about 47 to 61 percent down, seen at an angle. It shows only one faint, small, soft reflection of a lamp. No picture, no logo. On the stand's shelf, a remote and a small plain speaker. The socket at 21 percent is behind the stand.
- In the right foreground, from about 60 to 98 percent across and 60 to 80 percent down, seen from behind and to one side, facing the television: the two low sling chairs, each a folding frame of honey-colored acacia with a seat and back of one length of heavy undyed cotton canvas. A paperback book lies face down on the seat of one. An undyed cotton throw hangs over the back of the other.
- Between the two chairs: one small carved stool in honey-brown acacia, with two glasses and a deck of playing cards on it.
- Under the chairs and the stool: a flat handwoven reed mat, natural straw color.
- Against the side wall, beyond the chairs, from about 63 to 88 percent across: one old low bookcase in dark worn hardwood, 90 cm high, with three open shelves. Its top is at about 55 percent down. On its shelves: rows of well-read paperbacks of different heights, some lying flat, and three flat board-game boxes. No readable text.
- On the bookcase, at its end nearer the corner, at about 69 percent across: one lamp with a square block of honey-colored acacia as its base and a plain white cotton drum shade, switched on. Its cord runs along the foot of the wall to the socket at 46 percent.
- On the side wall above the bookcase, from about 71 to 87 percent across and 39 to 49 percent down: one framed pencil drawing in a thin black steel frame, about 80 by 55 cm. Fine crossing graphite lines on cream paper. It pictures nothing.

LIGHT. About 8:30 pm, dark outside. The lamp on the bookcase is on. The tube light, at the top of the frame, has a soft white tube and is on. A second lamp, behind the camera, is on. Together they light the corner evenly and comfortably: a person could read in either chair. It is not dim. THE WHITE WALLS AND THE CEILING READ WHITE, not cream, not yellow, not orange. The lamp's light is soft white and a little brighter on the wall right beside it. No color cast over the frame. One natural exposure with true darks. No HDR.

A corner that guests have just used, well kept: a dented canvas seat, worn book spines, real wood grain, an old bookcase with rubbed edges and no damage. A working inn, clean and cared for. A real photograph with fine grain, not a render. No people. No readable text on any book, box, card, or device. No logos. No copy of any recognizable designer chair or lamp: plain, anonymous forms. No window and no glass. No flowers. No candles. No guitar. No shells, driftwood, rope, nets, surfboards, or pictures of the sea. No religious figures, carvings, baskets on walls, or souvenirs.
```

### Prompt 3.5: the exterior at sunrise

References: (1) `design/dalampasigan/dalampasigan-breakfast.png`, (2) `design/lilim/lilim-exterior-dusk.png`. Save as `dalampasigan-exterior.png`. Start only after image 3.2 is checked.

The building is the owners'. Kanlungan's work shows only as curtains, the bench at the door, and the breakfast room through the windows. No drawing is made for this frame.

```text
Create one photograph for a design magazine: a small, plain, older two-storey inn seen from its front garden, just after sunrise. San Juan, La Union, Philippines. Aspect 16:9. Full-frame camera, 35mm lens, camera level at 1.5 m, all verticals straight, about f/8.

IMAGE 1 IS THE APPROVED PHOTOGRAPH OF THE INN'S BREAKFAST ROOM, taken at this same minute from inside. Use it for what shows through the ground floor windows: the long honey-colored wooden table with benches along the window side, and white walls. IMAGE 2 IS A PHOTOGRAPH OF A DIFFERENT HOUSE. Use it only as the standard for photographic quality: real plants, muted true color, fine grain, a building that sits in its place. Do not copy its building, its columns, its glass walls, its lit rooms, its garden, or its hour.

THE BUILDING. An ordinary older Philippine building, not a designed villa. A plain two-storey block of white painted concrete with a flat roof and a thin projecting concrete eave above each row of windows. It is about 19 m long. It is seen at an angle from its left end, so its long front runs away from the camera to the right. The white paint is fresh and clean. Every window is the same: a sliding window in a plain silver aluminum frame, two panels, clear glass.
- Ground floor, from the left: a double door of glass in aluminum frames, standing open, under a small flat concrete canopy; then one window; then three more windows in a row, which are the breakfast room's.
- Upper floor: four windows, evenly spaced. Beside each, on a small steel bracket, one white outdoor air conditioning unit with its pipe running down the wall.
- At every window, inside: plain white linen curtains, drawn open, in a narrow stack.
- Through the three breakfast room windows, dimly, behind reflections of the garden: the long wooden table, the backs of the benches, and a white wall.

THE FRAME. Measured from the left as a share of the width:
- From the left edge to about 20 percent: the trunk and low branches of one large talisay tree in the garden, close to the camera, with broad leaves, out of focus at the edge. Its branches reach across the top of the frame.
- From about 20 to 85 percent: the front of the building, receding to the right. The open door is at about 28 percent.
- From about 85 percent to the right edge: a second talisay tree, farther away, and a low white garden wall.
- Top: a clear pale blue morning sky with a little haze, and the leaves of the near tree.
- Bottom: the front garden. Coarse sandy ground with patches of short tough grass, a path of plain concrete pavers to the door, and a few low green shrubs along the foot of the wall.
The sea is behind the building and is not in the frame.

THE DESIGN, which is all loose:
- Under the canopy beside the open door: one long, narrow bench in solid honey-brown acacia, with a pair of sandals under it.
- On the other side of the door: one calamansi tree about 1.3 m tall, with dense dark green leaves and a few small green fruits, in a plain pale gray cement pot.
- At the door: one flat reed mat.

LIGHT. About 6:45 in the morning, a clear day. The sun is low in the east, behind the camera and to its right, and shines on the front of the building. The white wall is bright in the sun. The trees throw long, soft, broken shadows across the wall and the ground. Under the eaves and the canopy there is clear, cool shade. No lamp is on inside or outside. The white wall in shade reads white to faintly blue. The white wall in sun reads white to faintly yellow-white. One natural exposure with true darks and a clean bright. No HDR.

THE GLASS. Each window reflects only what faces it: the pale sky, and the leaves and branches of the garden trees, mirrored. Upper windows are mostly sky and leaves, with the white curtain stack visible at one side. No window is a blank blue panel. No window shows a lit room.

REALISM. This is a real photograph of a real, modest building, not an architectural render. Fine sensor grain. Muted, true color. Leaf greens in several tones, never neon, with some yellowing leaves and a few dry leaves on the ground. Branches overlap the building unevenly. The camera is off the building's axis and nothing is symmetrical. Small true details: the outdoor units and their pipes, a rain downpipe at the corner, a hose reel by the wall, uneven pavers. The building is old and has been repainted and kept: clean paint, clean glass, a swept path. No stains, cracks, peeling paint, rust streaks, rubbish, or tools.

No people. No readable text. No sign with a name. No logos. No cars. No surfboards. No palms in the foreground. No flowers in bloom. No pool. No new canopy, deck, pergola, cladding, shutters, or timber screens. No columns or glass walls. No lit windows.
```

## 4. The review, run on the prompts

The list in the image briefs was run on these prompts. It must be run again on the images.

| Check | Result on the prompts |
|---|---|
| 0. Realism | Every prompt asks for a real photograph with fine grain. The two frames that look outdoors (1.2, 3.5) carry a realism block for the outside. The hero and the corridor hold or limit their view. 3.5 takes an approved exterior as a quality reference only. No prompt asks for dirt, stains, or damage. Each says the inn is clean and cared for. |
| Glass and mirrors | 1.1 and 1.2: clear glass that reflects nothing. 2.3: a small, distant window. 3.5: each window reflects sky and trees only. The bath mirror says what it shows. Night frames 1.3, 2.1, 2.2, and 3.4 have no glass in view. The breakfast pair has its windows behind the camera. |
| Camera | Each new before and the two story frames in new places have a drawing and an edge list with percents from the script. Each after repeats the key percents and says the camera does not move. The hero's marks are measured on the approved before. 1.2 is an edit of 1.1 with the same camera. |
| Fixed items | Each after lists them by count and place and forbids change. Fans and tube lights are named in every pair. |
| Sockets and cords | Guest room: the nearer left wall socket stays in view at 25.5 percent with the lamp's plug. The bed hides the farther one, and the prompt says so and forbids a socket elsewhere. The right wall socket stays in view, because the clothes rail moved. Lobby: the desk hides one west wall socket and the prompt says so. The other takes the desk lamp. The south wall socket takes the floor lamp. Breakfast room: the serving table is open below, in front of two sockets. The stand is in front of one. Common corner: the bookcase lamp's cord runs to the second end wall socket. Bedside: both plugs are in the nearer socket. |
| Curtains and cooling units | Guest room: one track that stops at the left edge of the air conditioner, both panels stacked at the left, bare wall under the unit, and the words "no curtain to the right of the window." 1.2 repeats the last point. Breakfast room: the unit is on the end wall and no curtain is in frame. The lobby has no unit. |
| Doors and paths | A walk of more than 1 m along the right wall of the guest room. Nothing in front of the bath door, the corridor doorway, or the kitchen door. 90 cm on both sides of the long table. |
| Fans and pendants | No pendant in any frame. Only a bed, a table, and chairs stand under a fan. The clothes rail is against the wall. |
| The screen | None in the guest rooms, by the brief. The inn's one screen is in the breakfast room, on a stand at a socket, off, about 2.2 m from the two chairs. |
| Lit as lived | Night frames (1.3, 2.2, 3.4) are lit and say "not dim," except 1.3, which is a detail of one lamp. Bright morning and sunrise frames have every lamp off. |
| No request for warmth | No prompt uses "warm," "cozy," "golden," or "glow" for light. Each after says the walls and ceiling keep the color of image 1. Low sun is described by where it lands. The correction tool still runs. |
| Hosted, not cluttered | A key on its tag, a carafe and two glasses, slippers. A duffel, a shirt, and a book in the garden-side room. An open register and one key lying ready. One used place at the table. Sheets on a stool. A book and a deck of cards in the corner. |
| Something on a wall | Guest rooms: the drawing. Bath: a small study. Lobby: the Habi Wall Piece and the key board. Breakfast room: the plate rack. Common corner: a drawing and the bookcase. Corridor: a drawing. |
| Repetition in the inn | Lamp shapes, each in one room: the reed cone pair, the rattan and abaca cloth lamp, the bamboo floor lamp, the stoneware mushroom, the acacia block with a drum shade. Stools, benches, reed mats, and drawings repeat on purpose, as one inn's pieces. |
| The repeated room | 1.2 is an edit of 1.1. It lists every piece that must stay and seven changes. |
| Repetition across projects | Nothing from the Lilim or Tanaw rows. No stone slab table, ink bands, capiz, rattan daybed, taro, storage jar, record console, paper lantern, rust chair, brass lamp, or glass lamp. The woven panel and the black-stem lamp of the picked image are replaced, because Lilim has both. Shop pieces shared with Lilim: Himlay and Hain. Each then has its two projects. None is shared with Tanaw. |
| Art | The drawings are described line by line and picture nothing. No picture of a beach, a wave, or a palm anywhere. |
| Clichés and lookalikes | No flowers, shells, driftwood, rope, nets, surfboards, palms, or guitar. The sling chair is described as a plain folding frame with canvas. Every prompt forbids copies of recognizable designs. |
| Real brands | Appliances and devices are plain, with no logos. No sign carries a name. |
| Scope | Every piece is loose, hung, or a tube changed in its fitting. The prompts forbid a built counter, fixed shelves, and paint. |
| The set | Two kinds of guest room, a bath, the arrival, where guests eat and are served, a sitting corner, the corridor, and the outside are shown. Four kinds of light. |

## 5. Known risks

- **Image 2 of prompt 1.1 carries the faults Aedwon named:** the moved socket and the curtain under the air conditioner. It also carries the lamp, the reed panel, and the rail that this design replaces. The prompt says not to copy them. If the result comes back with any of them, drop image 2 and send the prompt with the other three references.
- **The two left wall sockets.** This is the fault he caught. Check 1.1 and 1.2 first for this: one socket in view at 25.5 percent, none anywhere else on that wall, and the right wall socket in view. If the bed comes back short of the farther socket, that socket must show where the before has it.
- **The one-sided curtain** is unusual and the generator will want a pair. Check that nothing hangs right of the window in 1.1 and 1.2.
- **The clothes rail is in the left foreground** and is new to the composition. It may come back heavy, or with clothes on it. It should be a thin outline with three empty hangers.
- **1.2 must match 1.1.** Compare piece by piece at 100 percent: bed, headboard weave, stools, lamps, bench, rail, mat, curtain stack. If it drifts, send it again with fewer changes: the view, the light, and the two textiles only.
- **Direct sun toward the camera in 1.2** may blow out the window or tint the room. The view must keep its detail and the shaded walls must stay white.
- **The garden view in 1.2 and the whole of 3.5 are outdoors.** These are the frames most likely to look rendered. Judge them at a glance before anything else.
- **Image 2 of prompt 3.5 is another house.** If the inn comes back as a modern pavilion with columns or lit rooms, drop image 2.
- **The exterior has no drawing.** The generator will invent the ends of the building and the garden. Count the windows: one door and four windows below, four windows above.
- **The lobby is small and shot at 24mm.** The desk and the mat may stretch near the bottom edge. Check the desk's legs.
- **Twelve key hooks and eleven keys** are a small regular grid. They may merge. Inspect at 100 percent.
- **Seven chairs and three benches.** Count them. Check for extra legs.
- **The long table runs out of the lower left corner.** It may come back whole and smaller, which would move it off its plan. Its far end must sit at about 62 to 75 percent.
- **Sun rectangles in 3.1 and 3.2** must fall in the same places. If 3.2 moves them, the pair will not hold on the slider.
- **The mushroom lamp** may come back as a known designer lamp. It should be a plain, hand-thrown form with a slightly uneven glaze.
- **The sling chairs** may come back as a known folding chair. They should be plain.
- **The corridor is one-point** and symmetry is a render tell. The off-center camera, the open door, and the stool break it. Check at a glance.
- **The pencil drawings** may come back as blank paper or as bold bands. They should be pale, fine, and clearly drawn.
- **The bath has no drawing.** It has one frame, so nothing must match it.
- **Night balance.** Frames 1.3, 2.2, and 3.4 have no daylight. Correct the ceiling and far walls toward neutral white and judge the rest by eye.
- **The P2 and P3 drawings show hidden lines** where the fan sweep crosses the tube light. Check 2.1 and 3.1 for a false edge on the ceiling.

## 6. What Aedwon judges

1. **The guest room against his pick.** Four things changed from image A: the curtains stack on one side, the clothes rail moved to the left wall, a drawing replaced the reed panel, and a pair of reed lamps replaced the one black lamp. The last two are there because the Lilim bedroom already has a woven panel and that lamp. Does the room still read as the one he picked? Does he want the reed panel back?
2. **No screen in the guest rooms.** The brief gives the owners' reason, and the inn's one screen is in the breakfast room. Is that real enough for him?
3. **The hero camera** is the same recipe as the Tanaw hero. The approved before was kept. Should the breakfast room pair lead the page instead?
4. Are the lobby and the common corner lit the way he would light them? Tubes stay on, with soft white tubes, because nothing in this inn dims.
5. Does the garden-side room read as the same room, and is indigo the right second color?
6. The long table, the front desk, the reed lamps, and the sling chairs are new designs. Does each look right?
7. Does any frame look like a render, most of all the exterior? Does any after look warmer than its before?
8. Is anything in any image that a guest or an innkeeper would catch?

## 7. After this gate

- Record his answers in `docs/decisions.md` and in the design file.
- Copy the register row from the design file into the studio hand.
- Retire the Dalampasigan scene bible and the old Dalampasigan entries in the image briefs.
- Transcribe `docs/content/projects.md` into the site data in a build wave.

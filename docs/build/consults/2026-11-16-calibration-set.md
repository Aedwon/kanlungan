# Calibration set: four more before-and-after cases (Fable 5.2, 2026-11-16)

Status: **Test prompts, not approved designs.** Nothing here is a project decision. No project file changes until Aedwon has judged the images.

Aedwon asked for more before-and-after cases, in different places and scenarios, so the studio's rules come from his calibrated taste and not from one room. Lilim House stays as locked: Shade and Stone. This set covers the other four projects.

It follows the format of the round 3 test in `2026-11-16-ground-up-rethink.md`, section 3.

## 1. What the set is

Four scenarios. Each has one plain before and two contrasting afters of the same room. Twelve images.

| # | Scenario | Room and light | What is outside | After A | After B |
|---|---|---|---|---|---|
| 1 | Tanaw Residence | Condo living room, dusk, lamps lit | Towers and sky. No green. | Collected (my pick) | Shade and Stone |
| 2 | Dalampasigan Inn | Guest room, morning, no lamp lit | Beach trees and a strip of sea | Sea as the color (my pick) | Faded beach color |
| 3 | Pahinga Villas | Villa bedroom, late morning, dappled sun | A coconut grove | Shade and Stone (my pick) | Collected |
| 4 | Hardin Apartment | Small old living room, overcast afternoon, lamps lit | Other buildings. A gray sky. | Collected (my pick) | Shade and Stone |

"My pick" is the call in `docs/design/studio-hand.md`, which is provisional. The other after is a deliberate opposite, made with the same care. It is not a weak version.

### What stays equal inside a pair of afters

So that Aedwon's choice teaches one thing, the two afters of a scenario share:

- the before, the camera, the crop, and the hour;
- the furniture plan: the same kinds of pieces in the same places;
- the lamps: the same count, the same places, on or off together;
- both locked principles.

They differ in palette, materials, art, and the share of old and found pieces.

### The two locked principles, in every after

- **Motivated light.** Warmth comes only from a lit lamp or from direct sun. It fades with distance. Surfaces away from a source keep the daylight or dusk balance of the before. No warm cast over the frame.
- **The palette answers the site.** Each after's palette is stated as an answer to what is outside. The two afters give opposite answers. That is the test.

The four scenarios also show motivated light in four conditions: lamps as the main light (1), no lamp at all (2), direct sun as the only warm light (3), and one small pool in gray daylight (4).

## 2. What each pair asks

| # | The question | If he picks my pick | If he picks the opposite |
|---|---|---|---|
| 1 | With no green outside, does the room want its own warmth and color? Or does the restrained hand read as more premium here too? | His own guess holds: a condo takes the collected end. Tanaw and similar sites follow. | Restraint is the studio's hand everywhere. "Collected" shrinks to a few warm notes. The site rule becomes a rule about small doses, not about registers. |
| 2 | Does "the outside is the color" hold for the sea as it did for the valley? Or does a beach room want faded color of its own? | The rule is about a strong natural view, not only green. Guest rooms stay colorless. | The rule is about green only. A beach site takes its own color, and the inn's guest rooms carry it. |
| 3 | Lilim's result, tested again: a small room, a different green, a guest instead of a family. Does a green site take the restrained hand every time? | The green rule holds beyond Lilim. | The Lilim pick was about that room's size or light, not its site. The rule needs rewriting before any other project. |
| 4 | With no view and a warm old floor, which hand reads as premium? This also shows the restrained palette against a warm shell, which Lilim did not test. | Small city homes take the collected end. The owner's things are part of the design. | Restraint survives a warm shell. Hardin becomes a quiet room with plants and books edited down. |

Two results would change the studio hand most: the opposite winning in scenario 3, or Shade and Stone winning in both 1 and 4.

## 3. How to run it

- Output folder: `design/round-4-calibration/`.
- Generate the four befores first. The lead checks each one: is it honestly plain, clean, and sound? Aedwon may glance at them. Then generate the eight afters.
- One Codex image job at a time, through `codex-pick`. A second attempt at each image is allowed. Expect 12 to 20 generations.
- Shop piece references are in `design/photography/`. Attach references in the listed order. The prompts call them image 1 to image 5. Image 1 is always that scenario's before.
- Shop pieces may drift in this test. Judge the hand and the transformation, not product accuracy. Colors and finishes that differ from a reference are stated in words.
- Show the results on one comparison page, like round 3: for each scenario, each after with a working drag bar over its before. Name each after by its direction. The page states which one is my pick, as the project rules require, below the pair and not above it.
- Before showing them, run two cheap checks on each after: fixed items are counted and in place, and wall and ceiling patches away from lamps are no warmer than in the before (the neutral patch check in the pairing method). In scenario 1 the ceiling lights change between frames, so check by eye that the ceiling and the wall near the glass are blue-gray, not warm.

### Shared rules for every after

Each after prompt already contains these lines. They are listed once so a reviewer can check them.

- Image 1 is the before. Nothing fixed moves, changes finish, appears, or disappears.
- The camera, lens, and crop are identical.
- The hour and the daylight are identical. Lamps are the only new light, and only where the prompt lights them.
- Warmth is local to lamps and direct sun. Everything else keeps the balance of image 1.
- No wall is painted. Nothing is built.

## 4. Scenario 1: Tanaw Residence, condo living room at dusk

### Prompt 1.0: the before

No reference images. Save as `tanaw-living-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of an empty, newly turned-over condominium living room at dusk, on handover day. Aspect 16:9. Full-frame camera, 35mm lens, camera level at 1.2 m, all verticals straight, about f/8.

The room is on a high floor in Bonifacio Global City, Philippines. It is about 4.5 m wide and 7.5 m deep with a flat ceiling 2.6 m high. It is seen from the back of the room, standing about 1.5 m from the left wall, looking straight down the room at the window wall in one-point perspective.
- Far end: one wall of floor-to-ceiling fixed glass in four equal panels, with slim dark gray aluminum frames.
- Left: one long, unbroken wall of flat white painted plaster.
- Right: a white painted wall. Near the camera, one plain white flush door, closed. High on the wall near the window, one white split-type air conditioner.
- Floor: wood-look vinyl planks in a pale grayish oak tone, running toward the window, with a slight sheen.
- Ceiling: flat white board with eight small recessed downlights in two rows, all switched on. One ceiling point in the middle of the room holds a single bare bulb in a plain holder, switched on.
- Small fixed details: a white switch plate beside the door, two white sockets low on the left wall.
- Outside: plain glass and concrete towers of different heights at middle distance, with scattered lit windows, and a band of sky above them. No trees. No recognizable real building. No signs.

The room is completely empty and clean. No furniture, curtains, blinds, rugs, lamps, plants, or objects.

Light: blue hour, about 15 minutes after sunset. The sky is deep blue with a paler band at the horizon. The downlights and the bulb give flat, cool-white light. The white walls glare a little. The downlights reflect faintly in the glass. Correct exposure. No warm tint anywhere.

The room looks bare, bright, and unremarkable, but new, clean, and sound. It is not dirty, damaged, or under construction. A real photograph, not a render. No people. No readable text. No logos.
```

### Prompt 1.A: Collected (my pick)

The site gives no color, so the room supplies warmth and color.

References: (1) `design/round-4-calibration/tanaw-living-before.png`, (2) `yakap-studio.png`, (3) `estante-studio.png`, (4) `sinag-studio.png`, (5) `luad-studio.png`. Save as `tanaw-living-A-collected.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the door, each glass panel and frame, the ceiling, every downlight, the ceiling point, the floor planks, the air conditioner, the switch plate, the sockets, and every tower in the view stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built.

Light: the same minute of dusk as image 1, with the same deep blue sky and the same lit tower windows. The recessed downlights and the ceiling bulb are now switched off and dark. The only light is the blue dusk through the glass and the three lamps named below. Each lamp makes a pool of warm light on its shade, the surface under it, and the wall and floor within about 1.5 m, and the warmth fades with distance. Everything far from a lamp is dim and cool: the ceiling, the floor near the glass, and the upper walls read blue-gray. No warm cast over the whole frame. One natural exposure with true darks. No HDR.

The room is now made for the evening. It looks collected over years by a couple who own many books and records. Warm, dark, and mixed. New pieces sit with old ones.
- Curtains: full-height heavy linen curtains in deep tobacco brown on a slim ceiling track across the whole window wall, drawn open and gathered at both ends, each stack covering half of an outer glass panel.
- Rug: one large wool rug in deep tobacco brown with a slightly faded, uneven tone, about 2.5 by 3.5 m, under the whole seating group in the middle of the room.
- Sofa, against the left wall, facing right: the deep upholstered sofa in image 2, in sand linen. On it, two cushions in oxblood handloomed cotton and one in a narrow charcoal stripe.
- Low table in front of the sofa: an old Philippine hardwood low table with one thick plank top, about 120 by 70 cm, black-brown with worn pale edges. On it, a stack of three books, a small brass dish, and one drinking glass. Half the top stays clear.
- Facing the sofa, with its back to the right wall: a mid-century lounge chair with a dark hardwood frame, a woven cane back, and a loose seat cushion in deep moss green linen. Beside it, the brass floor lamp in image 4, lit.
- At the far end of the sofa: a small ebonized wood side table carrying the stoneware lamp in image 5, lit.
- Along the right wall, beyond the door: three of the open shelving units in image 3, standing side by side as one wall of shelves about 3 m wide. They are full of books and vinyl records with spines in mixed, muted colors, with a few gaps that hold a stoneware jar and a small framed drawing. On a middle shelf, a small brass lamp with a dark green shade, lit.
- On the left wall above the sofa: one painting about 130 cm wide, a loose abstract in oxblood, tobacco, bone, and black, in a thin dark wood frame, hung low.
- By the window at the left: one large rubber tree with dark leaves in a matte dark brown pot.
Palette: tobacco, black-brown, and sand, with oxblood as the main color and moss as the small second color. Aged brass.

The seating forms one conversation group on the rug. Every seat is within about 2.5 m of the others and within reach of a table. A clear path runs from the foreground to the window. Everything looks lived in and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No religious figures, carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

### Prompt 1.B: Shade and Stone (the opposite)

The hand that won at Lilim, tried where there is no green.

References: (1) `design/round-4-calibration/tanaw-living-before.png`, (2) `yakap-studio.png`, (3) `bakal-studio.png`, (4) `sinag-studio.png`, (5) `luad-studio.png`. Save as `tanaw-living-B-shade-and-stone.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the door, each glass panel and frame, the ceiling, every downlight, the ceiling point, the floor planks, the air conditioner, the switch plate, the sockets, and every tower in the view stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built.

Light: the same minute of dusk as image 1, with the same deep blue sky and the same lit tower windows. The recessed downlights and the ceiling bulb are now switched off and dark. The only light is the blue dusk through the glass and the three lamps named below. Each lamp makes a pool of warm light on its shade, the surface under it, and the wall and floor within about 1.5 m, and the warmth fades with distance. Everything far from a lamp is dim and cool: the ceiling, the floor near the glass, and the upper walls read blue-gray. No warm cast over the whole frame. One natural exposure with true darks. No HDR.

The room is now a composition in dark and pale. Few pieces, each large and exact. Almost no color. The blue dusk is the only color.
- Curtains: full-height heavy ivory linen curtains on a slim ceiling track across the whole window wall, drawn open and gathered at both ends, each stack covering half of an outer glass panel.
- Rug: one large plain ivory wool rug, thick and matte, about 2.5 by 3.5 m, under the whole seating group in the middle of the room.
- Sofa, against the left wall, facing right: the deep upholstered sofa in image 2, upholstered in charcoal linen. On it, two large plain ivory cushions. Nothing else.
- Low table in front of the sofa: one block of honed pale gray stone with quiet veining, matte, about 120 by 70 cm and 30 cm high, on a recessed black plinth. On it, only one wide, shallow black stoneware bowl and one large book.
- Facing the sofa, with its back to the right wall: a low lounge chair with an ebonized wood frame and an ivory linen seat and back. Beside it, the brass floor lamp in image 4, lit.
- At the far end of the sofa: the small blackened steel side table in image 3, carrying the stoneware lamp in image 5, lit.
- Along the right wall, beyond the door: one long, low ebonized wood cabinet with plain closed doors, about 3 m wide. On it, a second stoneware lamp like image 5, lit, and one tall dark unglazed stoneware jar, empty.
- On the left wall above the sofa: one large abstract work about 130 cm wide, broad horizontal bands of ink and charcoal wash on bone-white paper, in a thin black frame, hung low. Not calligraphy.
- By the window at the left: one large rubber tree with dark leaves in a matte black pot.
Palette: white, ivory, charcoal, and black. Brass only on the floor lamp.

The seating forms one conversation group on the rug. Every seat is within about 2.5 m of the others and within reach of a table. A clear path runs from the foreground to the window. Everything looks lived in and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No religious figures, carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

## 5. Scenario 2: Dalampasigan Inn, guest room in the morning

No lamp is lit in this scenario. It shows whether a room can hold without lamp warmth.

### Prompt 2.0: the before

No reference images. Save as `dalampasigan-room-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of an empty guest room in an older two-story beach inn that has been cleared and repainted. Aspect 16:9. Full-frame camera, 35mm lens, camera level at 1.15 m, all verticals straight, about f/8.

The room is on the upper floor of a small inn in San Juan, La Union, Philippines. It is about 3.8 m wide and 5 m deep with a flat ceiling 2.7 m high. It is seen from the inside corner beside the entry door, looking diagonally across the room toward the window wall.
- Far wall: one wide aluminum sliding window in a plain silver-gray frame, about 2 m wide and 1.3 m high, with its sill 0.9 m above the floor, standing half open. One white split-type air conditioner is mounted high on this wall, to the right of the window.
- Left wall: long and unbroken, white painted plaster, slightly uneven.
- Right wall: white painted plaster with one plain white flush door to the bathroom, closed, near the far end.
- Floor: cream ceramic tiles, 60 cm square, matte, with faint joints.
- Ceiling: flat, painted white. One white three-blade ceiling fan in the center, still. Beside it, one bare fluorescent tube fitting, switched off.
- Small fixed details: a white switch plate near the camera, two white sockets low on the left wall.
- Through the window: the tops of broad-leaved beach trees, and above them a strip of blue-green sea, a pale horizon, and a clear sky.

The room is completely empty and clean. No furniture, curtains, rugs, lamps, plants, or objects.

Light: about 8:30 am on a clear morning. The window faces west to the sea, so the sun is behind the building. The sea, the sky, and the treetops are bright and lit from the front. The room is in soft open shade: bright near the window and dimmer toward the camera. No direct sun in the room. Correct exposure. Neutral white balance.

The room looks bare, dated, and unremarkable, but clean, freshly painted, and sound. It is not dirty, damaged, dark, or under construction. A real photograph, not a render. No people. No readable text. No logos.
```

### Prompt 2.A: the sea as the color (my pick)

The site gives color, so the room holds back.

References: (1) `design/round-4-calibration/dalampasigan-room-before.png`, (2) `himlay-studio.png`, (3) `banig-studio.png`, (4) `tuntungan-studio.png`, (5) `habi-studio.png`. Save as `dalampasigan-room-A-sea-as-color.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the bathroom door, the window and its frame, the ceiling, the fan, the tube fitting, the floor tiles, the air conditioner, the switch plate, the sockets, and the view of trees, sea, and sky stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built.

Light: the same hour and daylight as image 1, about 8:30 am, the room in soft open shade with a bright window. No lamp is lit. The tube stays off. There is no warm light anywhere in the frame. White balance stays exactly as in image 1: white walls and white linen read neutral white, a little cool. The only warmth is the true color of wood and reed. The room is brighter at the window and dimmer toward the camera. One natural exposure with true darks. No HDR.

The room is now quiet and nearly colorless, so the sea is the color. Few pieces, each plain and exact.
- Curtains: full-height white linen curtains, unlined, on a slim ceiling track across the whole window wall, drawn open and gathered at both ends, clear of the glass.
- Bed, with its head against the left wall: the low wood bed with the woven cane headboard in image 2, in honey-colored oiled acacia. White linen sheets and two white pillows. One undyed natural cotton throw folded at the foot.
- On the window side of the bed: the small carved wood stool in image 4, in honey acacia, used as a bedside table, with a glass carafe and one glass.
- On the near side of the bed: a second stool like image 4, carrying a small lamp with a slim blackened steel base and a white linen shade, switched off.
- Rug: the handwoven reed mat in image 3, pale straw, about 2 by 3 m, beside and under the foot of the bed.
- On the left wall above the headboard: the woven reed and abaca wall piece in image 5, undyed.
- Under the window: one long, plain bench in honey acacia, with one folded white towel and one open book, face down.
- Against the right wall, between the camera and the bathroom door: a slim freestanding clothes rail in blackened steel with three plain wooden hangers.
Palette: white, bone, honey wood, and pale reed, with one thin black line. No dyed color anywhere. The sea is the only color.

A clear path runs from the foreground to the window. Everything looks used and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No shells, surfboards, anchors, rope, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

### Prompt 2.B: faded beach color (the opposite)

The room answers the sea with color of its own.

References: (1) `design/round-4-calibration/dalampasigan-room-before.png`, (2) `himlay-studio.png`, (3) `tuntungan-studio.png`. Three references. Save as `dalampasigan-room-B-faded-color.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the bathroom door, the window and its frame, the ceiling, the fan, the tube fitting, the floor tiles, the air conditioner, the switch plate, the sockets, and the view of trees, sea, and sky stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built.

Light: the same hour and daylight as image 1, about 8:30 am, the room in soft open shade with a bright window. No lamp is lit. The tube stays off. There is no warm light anywhere in the frame. White balance stays exactly as in image 1: white walls read neutral white, a little cool. Color comes only from the textiles and objects, never from the light. The room is brighter at the window and dimmer toward the camera. One natural exposure with true darks. No HDR.

The room now answers the sea with its own color: sun-faded, soft, and a little mixed, like a beach house shared by friends. Stripes are welcome.
- Curtains: full-height cotton curtains, unlined, in a narrow faded indigo and white stripe, on a slim ceiling track across the whole window wall, drawn open and gathered at both ends, clear of the glass.
- Bed, with its head against the left wall: the low wood bed with the woven cane headboard in image 2, in honey-colored oiled acacia. White linen sheets. Two pillows in faded indigo handloomed cotton. A bedcover in broad faded coral and white stripes, folded back. One indigo cotton throw at the foot.
- On the window side of the bed: the small carved wood stool in image 3, used as a bedside table, with a glass carafe and one glass.
- On the near side of the bed: a small wood table painted a faded sea green, carrying a lamp with an indigo-glazed ceramic base and a white shade, switched off.
- Rug: one flat-woven cotton rug in broad faded indigo and bone stripes, about 2 by 3 m, beside and under the foot of the bed.
- On the left wall above the headboard: one painting about 100 cm wide, abstract horizontal bands in faded blue, coral, sand, and white, in a thin pale wood frame.
- Under the window: one long, plain bench in honey acacia with a seat pad in a rust and bone stripe, and one open book, face down.
- Against the right wall, between the camera and the bathroom door: an old rattan armchair with a faded coral seat cushion.
Palette: white walls and honey wood, with faded indigo as the main color at large scale and faded coral as the second color.

A clear path runs from the foreground to the window. Everything looks used and well kept: creased cotton, real wood grain, slight fading and wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No shells, surfboards, anchors, rope, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

## 6. Scenario 3: Pahinga Villas, villa bedroom in late morning

Direct sun is the only warm light in this scenario, and it falls only at the doors.

### Prompt 3.0: the before

No reference images. Save as `pahinga-bedroom-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of an empty bedroom in a newly built resort villa, on handover day. Aspect 16:9. Full-frame camera, 35mm lens, camera level at 1.15 m, all verticals straight, about f/8.

The villa stands in a coconut grove in Panglao, Bohol, Philippines. The room is about 4.5 m wide and 5.5 m deep with a flat ceiling 2.8 m high. It is seen from the inside corner beside the entry, looking diagonally across the room toward the far wall.
- Far wall: floor-to-ceiling sliding glass doors in plain white aluminum frames, in three equal panels. The middle panel stands open. Beyond them, a bare gray concrete terrace about 2.5 m deep under a flat white roof, then the trunks of coconut palms and green undergrowth.
- Left wall: long and unbroken, flat white plaster.
- Right wall: flat white plaster with one plain white flush door to the bathroom, closed, near the camera. One white split-type air conditioner high on the wall near the far end.
- Floor: large cream porcelain tiles, matte, with faint joints.
- Ceiling: flat white. One white ceiling fan in the center, still. Two small recessed downlights, switched off.
- Small fixed details: a white switch plate near the camera, two white sockets low on the left wall about 2 m apart.

The room is completely empty and clean. No furniture, curtains, rugs, lamps, plants, or objects.

Light: about 10:30 am on a clear day. The sun is high and comes through the palm fronds. Dappled sun falls on the terrace floor and on the first half meter of tile inside the open door. The rest of the room is in open shade: bright at the doors and dimmer toward the camera. Correct exposure. Neutral white balance.

The room looks bare, echoing, and unremarkable, but new, clean, and sound. It is not dirty, damaged, dark, or under construction. A real photograph, not a render. No people. No readable text. No logos.
```

### Prompt 3.A: Shade and Stone (my pick)

The site is green, so the room is white and black, and the grove is the color.

References: (1) `design/round-4-calibration/pahinga-bedroom-before.png`, (2) `himlay-studio.png`, (3) `sulok-studio.png`, (4) `luad-studio.png`, (5) `dapithapon-studio.png`. Save as `pahinga-bedroom-A-shade-and-stone.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the bathroom door, each glass panel and frame, the ceiling, the fan, the downlights, the floor tiles, the terrace, the air conditioner, the switch plate, the sockets, and the palms and undergrowth outside stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built.

Light: the same hour and daylight as image 1, about 10:30 am. Dappled sun falls on the terrace and on the first half meter of the floor inside the open door, exactly as in image 1. That sun is the only warm light in the frame. No lamp is lit. The downlights stay off. White balance stays exactly as in image 1: white walls, white linen, and white netting away from the sun read neutral white, a little cool. The room is brighter at the doors and dimmer toward the camera. One natural exposure with true darks. No HDR.

The room is now a composition in black and white. Very few pieces, each complete and exact. No color. The grove is the only green.
- Curtains: full-height white linen curtains on a slim ceiling track across the whole door wall, drawn open and gathered at both ends, clear of the open door.
- Bed, with its head against the left wall between the two sockets: a freestanding four-post frame in slim, square ebonized wood, about 2.2 m high, hung with fine white cotton netting that is tied back at each post. Inside the frame stands the low bed with the woven cane headboard in image 2, in ebonized black wood with a natural honey cane headboard. White linen sheets and two white pillows. Nothing colored.
- On each side of the bed: the small side table in image 3, in ebonized black wood, carrying the stoneware lamp in image 4, switched off.
- Rug: one pale undyed reed mat, about 2 by 3 m, under the foot of the bed.
- Near the open door, turned toward the grove: the rattan and cane lounge chair in image 5, with a white linen cushion. It is the only honey-colored piece of furniture.
- Along the right wall, beyond the bathroom door: one long, low ebonized wood bench, with one folded white towel.
- On the floor beside the bench: one large old unglazed dark stoneware jar holding a single cut fan palm leaf.
Palette: white and black, with honey cane once. No dyed color anywhere.

A clear path runs from the foreground to the open door. Everything looks used and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No shells, carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

### Prompt 3.B: Collected (the opposite)

The hand Aedwon passed over at Lilim, tried again in a small green room.

References: (1) `design/round-4-calibration/pahinga-bedroom-before.png`, (2) `himlay-studio.png`, (3) `dapithapon-studio.png`. Three references. Save as `pahinga-bedroom-B-collected.png`.

```text
Edit image 1 into the same room after an interior design studio has furnished it. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the bathroom door, each glass panel and frame, the ceiling, the fan, the downlights, the floor tiles, the terrace, the air conditioner, the switch plate, the sockets, and the palms and undergrowth outside stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. Nothing is built.

Light: the same hour and daylight as image 1, about 10:30 am. Dappled sun falls on the terrace and on the first half meter of the floor inside the open door, exactly as in image 1. That sun is the only warm light in the frame. No lamp is lit. The downlights stay off. White balance stays exactly as in image 1: white walls away from the sun read neutral white, a little cool. Color comes only from the materials and textiles, never from the light. The room is brighter at the doors and dimmer toward the camera. One natural exposure with true darks. No HDR.

The room now looks collected over years, like a private house and not a hotel room. Warm woods, deep colors, old pieces beside new ones.
- Curtains: full-height linen curtains in deep tobacco brown on a slim ceiling track across the whole door wall, drawn open and gathered at both ends, clear of the open door.
- Bed, with its head against the left wall between the two sockets: a freestanding four-post frame in slim, square red-brown mahogany, about 2.2 m high, hung with fine natural cotton netting that is tied back at each post. Inside the frame stands the low bed with the woven cane headboard in image 2, in natural red-brown mahogany. Oat linen sheets. Two pillows in moss green handloomed cotton and one in a narrow rust and natural stripe. A rust cotton throw folded at the foot.
- On the window side of the bed: an old dark hardwood side table with worn edges, carrying a lamp with a deep green glazed ceramic base and an ivory shade, switched off. On the near side: a small blackened steel side table carrying a second lamp of the same kind, switched off.
- Rug: one flat-woven wool rug in broad tobacco and bone stripes, about 2 by 3 m, under the foot of the bed.
- Near the open door, turned toward the grove: the rattan and cane lounge chair in image 3, with a seat cushion in oxblood linen.
- Along the right wall, beyond the bathroom door: one long, low antique hardwood chest, dark and worn. Above it hangs one painting about 110 cm wide, a loose abstract landscape in moss, ochre, clay, and bone, in a thin dark frame.
- On the floor beside the chest: one large giant taro plant in an old dark brown glazed jar.
Palette: oat, mahogany, and black-brown, with moss green as the main color and rust and oxblood as the second.

A clear path runs from the foreground to the open door. Everything looks used and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No shells, carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

## 7. Scenario 4: Hardin Apartment, living room on an overcast afternoon

Two lamps are lit in gray daylight. The warm pools are small, and the daylight stays gray.

Paint is left out of both afters. Hardin is Interior Design Direction, so one painted wall is in scope there, but its color is a separate visual choice.

The parquet is a fine regular pattern, which a slider handles badly. The rug covers most of it. Check the floor first when judging alignment.

### Prompt 4.0: the before

No reference images. Save as `hardin-living-before.png`.

```text
Create one photograph: a plain, accurate documentation photo of the empty living room of an older apartment, emptied and cleaned for a new owner. Aspect 16:9. Full-frame camera, 35mm lens, camera level at 1.2 m, all verticals straight, about f/8.

The apartment is on a middle floor of a 1980s mid-rise building in Legazpi Village, Makati, Philippines. The room is about 3.8 m wide and 5.5 m deep with a flat ceiling 2.6 m high. It is seen from the inside corner beside the entry, looking diagonally across the room toward the window wall.
- Far wall: an old aluminum sliding window in a dull silver frame, about 2.4 m wide, with its sill 0.6 m above the floor. To its right, a narrow glass door in the same aluminum, closed, leading to a small bare balcony with a plain steel railing.
- Left wall: long and unbroken, painted white, slightly uneven, with a few filled nail holes. One white split-type air conditioner high on this wall near the window.
- Right wall: painted white, with one plain white flush door, closed, near the camera.
- Floor: old mahogany parquet in small rectangular blocks laid in a simple brick pattern, red-brown, dull and worn, with paler paths where people walked.
- Ceiling: flat, painted white. One ceiling point in the center with a single bare bulb in a plain holder, switched off.
- Small fixed details: a white switch plate near the camera, two white sockets low on the left wall, one socket low on the right wall beyond the door.
- Outside: the plain concrete and glass fronts of other mid-rise buildings across the street, a gray overcast sky, and the top of one street tree at the lower edge of the window. No signs. No recognizable real building.

The room is completely empty and clean. No furniture, curtains, blinds, rugs, lamps, plants, or objects.

Light: about 3:30 pm on a fully overcast day. Even, soft, gray daylight comes from the window and the balcony door. No sun and no hard shadows. The room is a little dim toward the camera. Correct exposure. Neutral white balance: the white walls read gray-white and the parquet reads red-brown.

The room looks bare, dated, and unremarkable, but clean and sound. It is not dirty, damaged, or under construction. A real photograph, not a render. No people. No readable text. No logos.
```

### Prompt 4.A: Collected (my pick)

The site gives no color and the floor is warm, so the room is warm, small, and personal.

References: (1) `design/round-4-calibration/hardin-living-before.png`, (2) `silong-studio-three-quarter.png`, (3) `lambot-studio.png`, (4) `kiso-studio.png`, (5) `luad-studio.png`. Save as `hardin-living-A-collected.png`.

```text
Edit image 1 into the same room after its owner has furnished it over a year, following an interior design studio's plan. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the door, the window and its frame, the balcony door, the railing, the ceiling, the ceiling point, the parquet floor, the air conditioner, the switch plate, the sockets, and the buildings, sky, and tree outside stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. The parquet is not refinished. Nothing is built. The ceiling bulb stays off.

Light: the same hour and daylight as image 1, about 3:30 pm, fully overcast. Even gray daylight from the window, with no sun. Add only the light of the two lamps named below. Each lamp makes a small pool of warm light on its shade, the surface under it, and the wall within about 1 m, and the warmth fades with distance. Everything else keeps exactly the balance of image 1: the white walls and ceiling away from the lamps read gray-white, not cream. No warm cast over the whole frame. One natural exposure with true darks. No HDR.

The room is now a first home, bought slowly. It is small, warm, and personal. The owner's books and plants are part of it. New pieces sit with one inherited chair.
- Curtains: full-height oat linen curtains, unlined, on a slim ceiling track across the whole window wall, drawn open and gathered at both ends.
- Rug: the dense wool rug in image 3, in warm oat, about 1.7 by 2.4 m, under the seating group. The parquet shows all around it.
- Sofa, against the left wall, facing right: the sofa in image 2 as a two-seat version, with the same mahogany frame, upholstered in clay linen, a soft terracotta. On it, one moss green cushion and one natural cotton cushion.
- Low table in front of the sofa: an old, plain hardwood low bench used as a table, about 100 by 40 cm, dark and worn. On it, a stack of books, a small potted fern, and one cup.
- Facing the sofa at an angle, near the window: one inherited armchair in old dark hardwood with a woven cane seat and back, visibly worn, with a small natural linen seat pad.
- At the far end of the sofa: the pale cypress stool in image 4 used as a side table, carrying the stoneware lamp in image 5, lit.
- Along the right wall, beyond the door: a slim console table in ebonized black wood with a woven cane lower shelf, about 150 cm wide. On it, a small brass lamp with a white shade, lit, a small carved stone object, and a short stack of books. A row of books stands on the cane shelf. Above it hang two small framed works close together: an abstract print in clay and sand tones, and a small landscape painting.
- On the floor by the left wall, between the camera and the sofa: two low stacks of large books.
- By the balcony door: one tall fortune plant with long green leaves in a plain terracotta pot. A trailing pothos on the console. Through the glass, several potted herbs and a small citrus tree on the balcony.
Palette: white walls and oat, with clay as the main color, red-brown and black woods, and leaf green as the second color.

Every seat is within about 2.5 m of the others and within reach of a table. A clear path runs from the foreground to the balcony door. Everything looks lived in and well kept: creased linen, real wood grain, worn book covers. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No religious figures, carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

### Prompt 4.B: Shade and Stone (the opposite)

The restrained hand against a warm old floor.

References: (1) `design/round-4-calibration/hardin-living-before.png`, (2) `silong-studio-three-quarter.png`, (3) `lambot-studio.png`, (4) `bakal-studio.png`, (5) `luad-studio.png`. Save as `hardin-living-B-shade-and-stone.png`.

```text
Edit image 1 into the same room after its owner has furnished it over a year, following an interior design studio's plan. It is a photograph for a design magazine, taken from the identical camera position with the identical 35mm lens, framing, and 16:9 crop.

Do not change anything fixed. Every wall, the door, the window and its frame, the balcony door, the railing, the ceiling, the ceiling point, the parquet floor, the air conditioner, the switch plate, the sockets, and the buildings, sky, and tree outside stay exactly where they are in image 1, at the same size and position in the frame, with the same finishes. No wall is painted. The parquet is not refinished. Nothing is built. The ceiling bulb stays off.

Light: the same hour and daylight as image 1, about 3:30 pm, fully overcast. Even gray daylight from the window, with no sun. Add only the light of the two lamps named below. Each lamp makes a small pool of warm light on its shade, the surface under it, and the wall within about 1 m, and the warmth fades with distance. Everything else keeps exactly the balance of image 1: the white walls and ceiling away from the lamps read gray-white, not cream. No warm cast over the whole frame. One natural exposure with true darks. No HDR.

The room is now a composition in dark and pale, set on the old red-brown floor. Few pieces, each exact. Almost no color.
- Curtains: full-height white linen curtains, unlined, on a slim ceiling track across the whole window wall, drawn open and gathered at both ends.
- Rug: a dense wool rug like image 3, in plain ivory, about 1.7 by 2.4 m, under the seating group. The parquet shows all around it.
- Sofa, against the left wall, facing right: the sofa in image 2 as a two-seat version, with the same wood frame, upholstered in charcoal linen. On it, two plain ivory cushions.
- Low table in front of the sofa: one small block of honed pale gray stone with quiet veining, matte, about 100 by 40 cm and 30 cm high. On it, one shallow black stoneware bowl and one large book.
- Facing the sofa at an angle, near the window: one low armchair with an ebonized black wood frame and an ivory linen seat and back.
- At the far end of the sofa: the small blackened steel side table in image 4, carrying the stoneware lamp in image 5, lit.
- Along the right wall, beyond the door: a slim console table in ebonized black wood with a woven cane lower shelf, about 150 cm wide. On it, a second stoneware lamp like image 5, lit, and one dark unglazed stoneware jar. The cane shelf is empty. Above it hangs one work about 110 cm wide: broad horizontal bands of ink and charcoal wash on bone-white paper, in a thin black frame. Not calligraphy.
- On the floor by the left wall, between the camera and the sofa: one low stack of three large books.
- By the balcony door: one tall fortune plant with long green leaves in a matte black pot. The balcony is bare except for one large plant in a black pot.
Palette: white, ivory, charcoal, and black against the red-brown parquet. No added color.

Every seat is within about 2.5 m of the others and within reach of a table. A clear path runs from the foreground to the balcony door. Everything looks lived in and well kept: creased linen, real wood grain, slight wear. A real photograph, not a render. No people. No readable text. No logos. No flowers in bloom. No religious figures, carvings, baskets on walls, or souvenirs. No new walls, windows, moldings, beams, or ceiling features.
```

## 8. What Aedwon judges

For each scenario:

1. Is the before honestly plain?
2. Dragging each bar, which after would he hire?
3. Is the warmth in the right places? Does any part of either after look tinted?
4. Is the amount of color right for what is outside?
5. Is the density right, or does he want fewer or more things?
6. Does he want a mix of the two?

Across the set:

7. Do the four rooms he picked look like the work of one studio?
8. Do they look different enough from each other and from Lilim?

## 9. After he picks

- Update the four provisional calls in `docs/design/studio-hand.md`, and the two registers if his picks change them.
- Record each pick in `docs/decisions.md`.
- Only then write the four design files, one at a time, Tanaw first.
- The picked afters are starting images, as round 3 image B is for Lilim. They are not final frames. Each needs a design file and a correction list first.

## 10. Limits of this test

- Each after is one generation of one room. A weak image can lose for reasons that have nothing to do with its direction. If an after fails on shell drift or a warm cast, regenerate it before showing it.
- The generator may warm the collected afters more than the restrained ones, as it did in round 3. That would bias him against Collected for the wrong reason. The neutral patch check exists to catch it.
- Scenario 1 has a skyline, which is the hardest view to hold between frames. Check each tower.
- I have not seen these images. The picks above are my reading of the two locked principles, not a result.


## 11. Results (added 2026-11-16, after Aedwon judged the set)

The coordinator added an option C to each scenario at Aedwon's request: an unruled room by "a skilled professional designer." The condo was generated twice. Aedwon said the first renders looked fake. They are in `design/round-4-calibration/v1-condo/`.

| # | Scenario | He picked | Which was | His words |
|---|---|---|---|---|
| 1 | Condo | C | The unruled room | "C, looks more lively. honestly all renders could use some TVs here idk like be for real. lights were also not on like why" |
| 2 | Beach inn | A | My pick | "A, but i would like to note the inconsistency with the outlets. some people might spot that. also the right curtain is under the AC unit, not possible" |
| 3 | Villa | B | The opposite of my pick | "B" |
| 4 | Apartment | A | My pick | "A" |

What this means:

- The rule "a green site takes a near-colorless room" failed its own test in scenario 3. Section 2 said that result would change the studio hand most. It did. The named directions are removed.
- Our rooms lost the condo to a room with no rules, because ours were dim and sparse. The rule that kept ceiling lights off in every furnished frame was wrong.
- The unruled rooms lost everywhere a warm wash or a tourist cliché was plain to see. Motivated light held in every pick.

Faults in this test that were mine:

- **One camera recipe.** Every before was written as a view from the back of the room with a door near the right edge. Aedwon noticed.
- **One kit of references.** The same lamp, jar, and plant were attached or described in almost every prompt. He noticed the lamp.
- **A curtain that cannot hang.** Prompt 2.0 put the air conditioner on the window wall, and prompts 2.A and 2.B asked for a curtain across that whole wall.
- **Sockets not protected.** The after prompts named the sockets but gave the generator no reason to keep them visible, and furniture was placed over them.
- **One room per home.** No kitchen, no bed in the condo. A single room cannot show a home.

The revised rules are in `docs/design/studio-hand.md` and `docs/content/image-briefs.md`. The picked images are starting images for four design files. They are not final frames.

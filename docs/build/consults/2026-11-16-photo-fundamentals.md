# Consult: photography and styling rules from fundamentals (Fable 5.2, 2026-11-16)

Status: **Recommendation, not approved.** It replaces the unapproved consult `docs/build/consults/2026-11-16-styling-and-60-30-10.md`. Visual choices here are Aedwon's to make from the pilot frames. Apply on branch `content/project-signatures` (worktree `kanlungan-sig`); all paths refer to it.

Trigger: Aedwon asked that rules follow the fundamentals of interior design and photography. He then reviewed the 11 approved Lilim House frames and said: "looks monotonous AF. i would personally not hire this studio." This consult treats that as the main failure to fix.

## 1. Decision summary

1. The Lilim set is monotonous for five reasons, and our own rules caused four of them. In order of effect: a warm tint over every frame, one hue in the design itself, one flat light for every room, nine wide views out of eleven, and rooms with no lighting, textiles, art, or life.
2. The coordinator's read is right except on one point. The frames are not short of darks or of overall contrast. They are short of a clean white, of any second hue, and of light with direction. This matters because adding dark pieces would not fix it.
3. Replace counted styling rules with a short set of tests taken from standard practice. Each test names the principle and how to check it by eye.
4. Keep 60-30-10, as a rule for the room and not a measurement of the frame. Applied correctly it would have caught Lilim: the project has no accent at all.
5. Keep the shop rule as a business rule: an object of a type the shop sells is the catalog product.
6. Change four existing rules: the house-look grade, "empty rooms," one light per project, and one camera height and lens per project.
7. Pilot three Lilim frames as a set. A set complaint cannot be judged on one frame. Tanaw and Hardin anchors follow in the next wave.
8. Cost: all 11 Lilim frames change. Eight regenerate and three need only a color correction. Two of the four provisional anchors regenerate. The 36 frames not yet generated cost nothing extra, but their bibles need edits first.

## 2. What is wrong with the Lilim set

### Measurements

I measured every frame (script in the scratchpad `code/` folder; downsized copies, so treat the figures as approximate).

| Measure | Lilim frames | Dalampasigan hero | Pahinga hero | Tanaw hero |
|---|---|---|---|---|
| Pixels in the orange-brown hue band | 65 to 93 percent | 37 | 78 | 38 |
| Pixels that read green | 0 to 4 percent | 0 | 0 | 0 |
| Pixels that read blue | 0 | 8 | 0 | 23 |
| Neutral pixels (white, gray, black) | 0 to 4 percent | 55 | 15 | 31 |
| Average color of the brightest 5 percent | Beige, near RGB 200, 183, 160 | Neutral white, 243, 239, 237 | Warm white | Lamp amber |
| Pixels darker than 20 percent luminance | 9 to 25 percent | 2 | 46 | 10 |
| Spread between 5th and 95th percentile luminance | 51 to 65 points | 60 | 69 | 46 |

What this shows:

- **One hue.** Almost every pixel in every Lilim frame is orange-brown. The exterior frame is a third grass and trees, and only 4 percent of it reads green.
- **No white.** The brightest thing in each frame is beige. White linen, limewash, and marble all render as tan.
- **Darks and contrast are normal.** The spread matches the other projects. Lilim has more dark area than Dalampasigan or Tanaw. The darks are all the same red-brown wood.

### Check of the coordinator's read

| Claim | Verdict |
|---|---|
| Same mahogany and cream at the same mid-tones; nothing dark, no contrast, no accent | Half right. One hue and no accent: yes. Nothing dark and no contrast: no. The missing things are a clean bright, a neutral, and a second hue. |
| Same flat, even daylight; no direction or shadow; one time of day | Right for 8 of 11. `g04` has a sun band, and `g08` and `g10` have dappled sun. The interiors have no shadows and no falloff from the openings. |
| Same eye-level camera and similar wide framing; almost no vignettes or details | Right on framing, wrong on height. Cameras sit at 0.85 to 1.30 m, which is correct practice. The fault is the mix: 9 wide views, 1 medium, 1 detail, and almost all at an oblique angle with a floor-heavy foreground. |
| Unstyled showrooms; empty bedrooms and hallway | Right. The whole house has no lamp except one pendant, no art, no cushion, no throw, no curtain, no book, and no plant. |
| Few frames have a clear focal point | Half right. Hero, `g03`, `g04`, `g07`, and `g09` have one. `g02`, `g05`, `g06`, `g08`, and `shop-room` do not. |

### Which rules caused it

| Cause | Rule that produced it | Where |
|---|---|---|
| Warm tint over every frame | House look: "Warm umber floors, olive-green foliage, low contrast, lifted blacks." Every Lilim prompt ends "Preserve the warm umber grade and muted olive garden." | `visual-system.md` Imagery; Lilim Signature "Grade"; all 11 Lilim shot entries |
| One hue in the design | Lilim Signature: "Textiles: Silong Oat and oat bed linen." Placement: one wood for floor, rafters, posts, frames, and all furniture. No accent was ever assigned to Lilim. | `lilim-house.md` |
| One flat light | "Time for every shot: about 3:30 pm." "Inside rooms get soft bounced light. No sun patches on interior floors." README item 4: "Every shot of the project uses this light." | `lilim-house.md`; `scene-bibles/README.md` |
| No shot rhythm | Ten captions that walk room to room. Cameras drawn as one wide view per room. | `projects.md` captions; `lilim-house.md` cameras |
| Showroom rooms | "Empty rooms." "Nothing is added that the table does not list." "Styling: Sparse; one book, one bowl." "No other pendants, lamps, or seating." | `visual-system.md`; README item 3; `lilim-house.md` |

Two rules did not cause it:

- **"One natural exposure" is sound.** The frames break it. The hero holds full detail in the valley and in the room, with no falloff. That is the HDR look the negative list already bans. A true single exposure of a shaded room is brighter at the opening and darker at the back.
- **"No single tint covers the frame" and "materials keep their true color" are sound.** They already sit in Global style. The house-look grade contradicts them, and the grade won.

### Zero-cost proof for the grade

I made white-balance previews of four frames. They are in the scratchpad `regrade/` folder: `lilim-hero-neutral-preview.jpg`, `lilim-g05-main-bedroom-neutral-preview.jpg`, `lilim-g09-material-detail-neutral-preview.jpg`, `lilim-g10-exterior-neutral-preview.jpg`.

Result: the marble reads as gray-white stone, the walls as off-white, and the garden as green. `g09` and `g10` become good frames with no regeneration. `g05` is still an empty room. So the grade fixes the hue and nothing else.

### The same fault is built into the other four projects

The signatures approved on 2026-11-15 gave each project one light, one camera height, and one lens. That made the projects distinct from each other. It will make each gallery as uniform as Lilim.

- Tanaw: ten frames at 6:15 pm, all at 1.10 m.
- Pahinga: ten frames at 35mm and 1.00 m. The 50mm detail cameras were changed to 35mm.
- Dalampasigan: ten frames at 35mm. The two low 50mm detail cameras (0.75 m and 0.80 m) were raised to 1.15 m and 35mm.
- Hardin: every room frame at 50mm and 1.20 m. Its mixed media (book, moodboard, plan, renders) gives it variety anyway.

Fix this in the bibles before generating those 36 frames.

## 3. The fundamentals

Only principles a working stylist or photographer would recognize. Each has a test that can be run by eye.

### (a) Interior design and styling

| Principle | What it means | Test | Common misuse |
|---|---|---|---|
| Function first | A room is furnished for its use before it is styled | Every bed has a bedside surface and a lamp. Every main seat has a surface in reach. Paths are clear. | Calling an unfurnished room "minimal" |
| Layers | A designed room has a shell, furniture, lighting, textiles, art and objects, and something living | Name each layer in a wide view. A missing layer needs a reason. | Treating furniture alone as a finished room |
| Emphasis (focal point) | One thing leads; the rest supports it | At thumbnail size you can name what the frame is about | Several equal objects, or none |
| Balance by visual weight | Dark, large, textured, and saturated things weigh more | Cover either half of the frame. The other half still holds. | Banning symmetry. Symmetry is a valid kind of balance. |
| Scale and proportion | Objects fit their surface and wall; furniture fits the room | Nothing looks lost and nothing crowds. Fewer, larger pieces. | Many small accessories |
| Contrast and variety | A scheme needs a difference in value, hue, and texture | The frame holds a true dark, a clean bright, hard and soft, and more than one hue | A tonal scheme in one hue with no relief. This is Lilim. |
| Rhythm and repetition | A color or material repeats so the eye travels | The accent shows at least twice in a wide view | A color that appears once and reads as an accident |
| Color proportion (60-30-10) | A dominant, a secondary, and an accent, in falling shares | By eye in a wide view: the dominant leads, the secondary supports, the accent is small and differs in hue | Measuring pixels. Applying it to a tight frame. Counting three values of one hue as three colors. |
| Grouping (rule of odds, height variation) | Objects on a surface form one group with one tallest element | The outline is a triangle, not a row. No two equals side by side. | Using the rule of odds to count groups in a room. It governs objects inside one group. |
| Negative space | Empty wall and floor give the focal point room | The empty area borders a focal point | Emptiness with no focal point. That is dead space. |
| Signs of life | A room looks used, by one or two gestures | One sign of use and one living thing in each room view | Mess, or dust. A stylist cleans dust before a shoot. |
| Editing | Restraint is the mark of a premium room | Take one object away in your mind. If the frame is no worse, it goes. | Adding decor to prove that design happened |
| Right plant, right place | A plant suits the light and climate and stands where it would live | Species from the site list, near an opening, one large over several small | Plants as filler; species that could not survive the site |

### (b) Interior and architectural photography

| Principle | What it means | Test | Common misuse |
|---|---|---|---|
| Level camera, straight verticals | The camera never tilts in a room view | Every wall edge, post, and frame is parallel to the frame sides | Lowering the camera and tilting it up |
| Height follows the subject | Wide views sit between seat height and standing eye height. Details sit at the height of the object. | Table and bed tops read as thin planes, not the main area | Standing eye level for everything, or one height for every frame |
| Longer lens, farther back | Rooms keep their true proportions | Round things near the edge stay round. The room looks no larger than its plan. | A wide lens to "show the whole room" |
| One-point or two-point | Square to the far wall, or clearly at an angle | The far wall's lines are dead level or clearly converge | Nearly square, which reads as a mistake |
| Depth in layers | Something near, the subject, something beyond | Each wide and medium view has all three | A bare floor as the foreground |
| No dead space | Floor, ceiling, and blank wall are cropped to what the subject needs | Cover the bare band with your hand. If the frame improves, move the camera. | Portrait frames of low, wide subjects |
| Clean outlines | Key pieces do not merge with each other or the frame edge | No object just touches another or the edge. A cropped piece is cut decisively. | A lampshade clipped by the frame |
| Light with direction | Natural light comes from the side or behind and falls off | You can point to the source. Shadows fall one way. The back of the room is darker. | Even, shadowless light |
| Shoot each room at its best hour | A house is shot over a day, room by room, by orientation | East rooms in the morning, west rooms late, exteriors and pendants at dusk | One clock time for a whole house |
| Exposure for the room | The opening is brighter than the room and keeps detail | The view is neither white nor as dark as the room | HDR that levels inside and outside |
| Neutral white balance | Whites are white. Warmth comes from materials and lamps. | White linen and limewash read white | A warm grade over everything |
| Lamps off in daylight | Mixed color temperature muddies daylight frames | Lamps are on only at dusk or where the bible says | Every lamp on in every frame |
| The shot set | A story mixes wide, medium, and detail frames | Roughly a third each. Neighbors in a gallery differ in scale or light. | A room-by-room walk of wide views |
| Continuity, styled to camera | The kit is fixed; a stylist shifts it for each frame | Two frames of one surface do not contradict each other | Coordinates for every cup, or objects that vanish between frames |

"Roughly a third each" is a trade rule of thumb, not a law. Publications vary.

## 4. Audit

### Current rules

| Rule | Verdict | Action |
|---|---|---|
| True material color; no single tint; whites stay distinct | Principled | Keep. Enforce it over the grade. |
| Matte surfaces; low furniture | House style, not a fundamental. Sound. | Keep |
| "Empty rooms"; "Default to empty rooms"; "Keep rooms empty" | Conflicts with function and layers. It was meant as "no people." | Reword to "no people" in all three files |
| Level camera, straight verticals, 28mm to 50mm, no very wide lens | Principled | Keep |
| One natural exposure; no HDR | Principled | Keep. Add the direction and falloff test. |
| House look: "low contrast, lifted blacks," warm umber, olive foliage | Conflicts with true color and with contrast | Reword. Neutral whites, green foliage, full range. |
| At most one dyed textile color per frame; indigo and rust apart | House style. It agrees with a single accent. | Keep. But every project must have an accent. |
| "Every shot of the project uses this light" | Conflicts with practice | Reword to a lead light plus a light plan by space |
| One camera height and lens per project (Signature "Camera" rows) | Conflicts with "height follows the subject" and the shot set | Limit to wide views |
| "Two or three quiet physical details ... a little settled dust" | Arbitrary count. Dust is against practice. | Replace with wear on materials and one sign of use |
| "Nothing is added that the table does not list" | Principled as continuity. Harmful because the tables list almost nothing. | Keep the mechanism. Add a styling kit to each bible. |
| "Clear floors" | Principled as clear paths | Reword to "clear paths" so floor plants and books can exist |
| "Avoid perfect mirror symmetry"; "symmetrical showroom staging" | Over-broad. Symmetry is valid. | Reword to mirrored textures and furniture lined in rows |
| "Keep 10 to 15 percent breathing room around important edges" | A production margin for crops, not an aesthetic rule | Keep as is |
| Styling rows: "Sparse; one book, one bowl"; "Nothing loose beyond what captions name" | Arbitrary. They cause the function failures. | Replace (section 5) |

### The unapproved consult

| Item | Verdict | Action |
|---|---|---|
| Adopt 60-30-10 for wide views | Principled | Keep |
| Tolerances "50 to 65, 25 to 40, 5 to 15 percent of the frame"; "lines under 5 percent do not count" | Arbitrary, and the common misuse | Cut |
| "All five anchors already pass by eye" | Wrong for Lilim. Its three bands are one hue at three values. It has no accent. | Cut |
| "Wide view: three to five groups. Vignette: one or two. Detail: none or one." | Arbitrary. No stylist counts groups. | Cut. Use the function, life, and edit tests. |
| "A styling group is one to three loose objects ... at different heights" | Principled | Keep as the grouping test |
| "Leave at least one horizontal surface clear" | Principled | Keep |
| "At most one wall piece and two plant species in a frame" | Arbitrary caps | Cut. The focal-point and scale tests cover it. |
| Shop-type objects are catalog products | Business rule. Sound. | Keep. Name it as a business rule. Fix its scope (below). |
| "At least two groups led by a catalog product" | Arbitrary quota. It also puts the shop ahead of the studio. | Cut |
| Prop allow-list | Follows from the business rule | Keep, shortened. Cut "under 15 cm." |
| Foliage only, no blooms | House style from the brand rule on tourist imagery | Keep, stated as that |
| The 20-item negative list of species and objects | Redundant once species come from a positive list | Cut to three items |
| Ban on "stacked styled coffee-table books" and candles | Arbitrary. A book stack is a standard styling base. | Cut |
| Styling lists with x and y for every loose item | Conflicts with styling to camera | Keep the list by surface. Coordinates only for floor pieces. |
| "The throw fills the 10, so guest rooms get no plants" | Misuse of 60-30-10 | Keep the result. The real reason is salt air and inn housekeeping. |
| Plant list by site | Principled, and the species are right for each site | Keep |
| Tanghali and Salamin stay out of project rooms | Sound: one of a kind, and mirror reflections | Keep |
| Pilot: Lilim g05, Tanaw hero, Pahinga hero | Superseded | Replace (section 6) |

### A scope problem in the shop rule

The rule as the consult worded it is already broken about 15 times. The bibles place pieces marked "not a catalog piece" of types the shop sells: the Lilim terrace bench and children's beds, the Tanaw guest bed and wall lamp, the Pahinga shelf, bench, and stools, and the Hardin lamp support.

Recommendation: these stand as project joinery and custom pieces, which a real studio makes. The rule applies to every loose styling object and every new placement. Add no new non-catalog piece of a type the shop sells. Aedwon should confirm, because this is a business call.

## 5. The replacement

### 5.1 `docs/design/visual-system.md`, Imagery

Replace the "House look," "Project photography," and "Constant" bullets with:

> - **House look:** shaded daylight under deep eaves, with a bright opening. Whites and off-whites read neutral, mahogany reads warm, and foliage reads green. Soft contrast with a full range: every frame holds one true dark and one clean bright. It applies to Lilim House, the Home hero, and every image that belongs to no project (showroom, makers, materials, studio panels).
> - **Project photography:** each other project is shot in the light of its own site. Its walls, floor, textile color, lead light, and grade are fixed in the "Signature" section of its scene bible. A project photograph does not use the house look. A project may give a room its own time of day within its light plan.
> - **Constant in every photograph:** true material color under a neutral white balance, matte surfaces, no people, a level camera, light with a visible direction that reads as one natural exposure, and at most one dyed textile color in a frame. Rooms are furnished and styled for use under the tests in [image briefs](../content/image-briefs.md#global-style).

Change the status line to record the date Aedwon approves.

### 5.2 `docs/content/image-briefs.md`, Global style

Replace **Camera**:

> **Camera.** Full-frame editorial photography. Keep the camera level and every vertical straight. Wide room views use 28mm to 50mm at the height in the scene bible. Vignettes and details use 50mm to 100mm at the height of their subject. Products, materials, and workshop work use 50mm. Step back and use the longer lens where the plan allows. Stand square to the far wall or clearly at an angle, never nearly square. Build each wide and medium view in three depths: something near, the subject, and something beyond. Crop a near piece decisively, never at a joint or as a sliver. No band of bare floor, ceiling, or blank wall is larger than the subject it surrounds. Give each key piece a clean outline: no object just touches another or the frame edge. Natural depth of field, roughly f/5.6 to f/8 for rooms and whole products, f/4 for details. Avoid artificial miniature blur and sharpening halos.

Add after Camera:

> **Shot set.** Each gallery mixes wide, medium, and detail frames, roughly a third each. Each frame has one job. Frames that sit next to each other in a gallery differ in scale or in light. A portrait frame holds a tall subject or a stacked composition; move closer for a low, wide subject.

Replace **Light**:

> **Light.** Each project has a lead light in its scene bible: the time, sun quality, and exposure key of its hero and most of its frames. A bible may give a space its own time of day, chosen for that room's orientation, within one day at the site. Do not carry one project's light into another. Light has a direction: you can point to its source, shadows fall one way, and the room darkens away from the opening. Each gallery has at least one frame with direct sun or a clear shadow pattern. The view through an opening is brighter than the room and keeps its detail. The result reads as one natural exposure. No harsh flash. Lamps are off in daylight unless the bible turns one on. At dusk they give a restrained warm glow with visible shade texture. Scenes that belong to no project use the house look: tropical daylight filtered by deep eaves, with a bright opening.

Replace the first three sentences of **Color** (up to "no single tint covers the frame.") with:

> **Color.** White balance is neutral in every image. White linen, limewash, and stone read as white or off-white, and foliage reads green. Warmth comes from wood, lamps, and low sun, never from a tint over the frame. Every frame holds one true dark and one clean bright. Each project uses the grade in its scene bible.

Keep the rest of Color as it is. Add after Color:

> **Color balance.** Each bible's Signature names a dominant, a secondary, and an accent family (the 60-30-10 rule of interior decorating). It is a rule for the room, judged by eye in wide views. The dominant clearly leads. The secondary supports. The accent is small, differs in hue from both, and shows at least twice. Do not measure it. Do not apply it to vignettes, details, exteriors, or product shots. Reach it through what is in the room and where the camera stands, never through grading.

In **Surfaces and realism**, replace "Include two or three quiet physical details per image: a little settled dust, a creased cushion, a slight weave variation, a small glaze pool, a rubbed wood edge." with:

> Materials show honest wear where hands and feet go: a creased cushion, a slight weave variation, a small glaze pool, a rubbed wood edge. No dust.

In the same paragraph, replace "perfect mirror symmetry" with "mirrored or tiled textures".

Add after Surfaces and realism:

> **Styling.** Rooms are furnished and in use, styled as for an editorial shoot. Apply these tests to every wide and medium view.
>
> - **Function.** Every bed has a bedside surface and a lamp. Every main seat has a surface within reach. Paths stay clear.
> - **Layers.** Name the lighting, the textile beyond upholstery, the art or object, and the living thing. A missing layer needs a reason in the bible.
> - **Focal point.** At thumbnail size, one thing leads. Nothing competes with it in size or contrast.
> - **Balance.** Cover either half of the frame; the other half still holds. Symmetry is allowed where the architecture is symmetrical.
> - **Scale.** Fewer, larger pieces. Nothing looks lost on its surface or wall.
> - **Groups.** Objects on a surface form one group of one to three, varied in height and shape, with one tallest element. Never a row of equals.
> - **Rest.** Part of every surface stays clear. In a wide view, at least one surface stays empty.
> - **Life.** Each room view holds one sign of use and one living thing: a plant, a cut branch, fruit, or the garden through an opening.
> - **Edit.** Take any loose object away in your mind. If the frame is no worse, the object goes.
>
> Density differs by project and is set in the bible's Signature. The bible lists a styling kit for each room, by surface. Styling is done to camera: an object may shift on its surface, move to another listed surface, or leave a tight frame. Two frames that show the same surface must not contradict each other, and no frame shows more of a piece than its count.
>
> **Shop rule.** This is a business rule, not an aesthetic one. Any visible object of a type the shop sells is the catalog product and matches its approved reference: furniture, lamps, rugs, cushions, throws, curtains, mirrors, vessels, trays, sculptural objects, and wall art. Built-in joinery and the pieces a bible already marks "not a catalog piece" are the only exceptions; add no new ones. Props are things people own, use up, or grow: live plants and cut foliage in plain matte pots or clear glass, books with no readable text, fruit and food, drinking glasses and carafes, plain tableware, towels, and plain bed linen. Test: if a visitor would look for it in the shop, it must be in the catalog.
>
> **Plants.** Foliage, not flowers; blooms read as tourist imagery. Species come from the bible's list and suit the site's light and climate. A plant stands where it would live, near an opening. One large plant beats several small ones.

In **People**, replace "Default to empty rooms." with "Default to rooms without people."

In **NEGATIVE**, replace "symmetrical showroom staging" with "furniture lined in showroom rows", and append: "; a warm cast over the whole frame; flat shadowless light; flowers in bloom; plants outside the bible's list; shells, figurines, or souvenirs."

### 5.3 `docs/content/scene-bibles/README.md`

Replace items 3 to 6:

> 3. **Placement.** Every piece of furniture and lighting, and every floor plant, with its position, facing, and count. Then a **Styling kit** for each room: the loose objects on each surface, by surface, with counts and no coordinates. Nothing appears that the table or the kit does not name.
> 4. **Light.** Site orientation, sun direction, and a lead light: the time and exposure key of the hero and most frames. A light plan may give a space its own time of day, chosen for its orientation, within one day. Every shot uses the light the plan gives its space.
> 5. **Cameras.** One numbered camera per shot: position (x, y in meters on the plan), height, heading (compass degrees), lens, shot type (wide, medium, or detail), and what must be visible. The camera map is drawn on the plan. The set follows the shot-set rule in image briefs.
> 6. **Signature.** Walls and ceiling, floor, textile palette, color balance (dominant, secondary, accent), lead light and exposure key, grade, styling density, plants, camera language for wide views, and one or two site features. It states how this project differs from the other four.

Replace the paragraph that begins "The studio is recognized by" with:

> The studio is recognized by what it puts in a room and how the photograph is disciplined. Each project is recognized by its shell, its lead light, and its accent. Low furniture, clear paths, matte natural materials in true color, and catalog pieces identical to approved references stay constant. So do a level camera, straight verticals, neutral whites, light with a direction, and one natural exposure. Rooms have no people and are styled for use. The styling tests, the shop rule, crops, people rules, and the negative list are in [image briefs](../image-briefs.md#global-style).

Replace the checklist with:

> - Walls, openings, ceiling, and floor match the plan and surface list.
> - Every visible piece is in its listed place and facing, with the right count.
> - Light comes from the direction and time the light plan gives this space. You can point to its source, and the room darkens away from it.
> - Whites read white, foliage reads green, and the frame holds one true dark and one clean bright.
> - The view matches the camera's position and heading: what should be left is left.
> - Nothing appears that the placement table or styling kit does not name. Shop-type objects match their approved references.
> - A wide or medium view passes the nine styling tests. Function and focal point fail the frame; the others are judged together.
> - At thumbnail size one thing leads, and no bare band is larger than the subject.
> - Beside its gallery neighbors, the frame differs in scale or in light.
> - At thumbnail size, beside one frame from each other project, the photo is identifiable as this project.

Replace the last line with:

> A photo that fails any line is regenerated, not retouched. A global white-balance or exposure correction is grading, not retouching, and is allowed.

### 5.4 Signature rows in each bible

Add a "Color balance" row and a "Plants" row. Replace the "Styling" row. In every "Camera" row, add this sentence: "Height and lens apply to wide room views; medium and detail frames take the lens and height of their subject."

| Project | Color balance (dominant / secondary / accent) | Styling | Plants |
|---|---|---|---|
| Lilim House | Pale warm white: limewash, cane, oat linen, wool, marble / Mahogany / Moss green, repeated by the garden; ebonized wood and brass as small dark and bright points | Quiet and complete. Every room has its lamp, one textile, and one styled surface. The garden is the living thing. | Garden through every opening: tree fern, giant taro, kamuning. Indoors: cut garden foliage in a Tapayan. No pots in the great room or on the terrace. |
| Tanaw Residence | Pale neutral: plaster, bleached acacia, sand linen / Blue hour through the glass / Amber lamp pools and brass; steel and bronze as line | Restrained. Closed storage hides the rest. Each seat has a used surface. | One large rubber tree (*Ficus elastica*) in a matte cement-gray pot by the west glass. It is the only green in the home. |
| Dalampasigan Inn | Chalk white / Honey: acacia, shutters, cane, reed / Indigo (room A) or rust (room B), echoed by the sea | Light guest traces on existing surfaces: carafe and glass, folded towel, one book, sand at the threshold. | None in guest rooms (salt air, inn housekeeping). One MacArthur palm in each shared room; snake plants in the corridor. Exterior: talisay, agoho, pandan dagat, beach morning glory. |
| Pahinga Villas | Ebonized black / White and cream: limestone, limewash, linen / Honey weave: cane, Habi, rattan, with palm green through the doors | Barest of the five. One group on the shelf. The grove is the living thing. | Grove: coconut, giant taro, bird's-nest fern, pandan. Indoors: one cut anahaw leaf in the Tapayan. Reception: one giant taro. |
| Hardin Apartment | Moss-gray wall, white ceiling, oat rug / Red-brown: clay linen, parquet, mahogany / Deep leaf green; the Luad glow is the one warm point | Sparse in furniture, dense in life. Plants and books carry the room. The stage-one photograph keeps its three pieces. | Balcony: calamansi, pandan, bird's-nest fern, Cuban oregano, snake plant. Indoors: fortune plant by the balcony door, pothos on the Pasilyo. |

Two notes on these rows:

- The Pahinga shelf fails the grouping test now. The Luad and the Tapayan are two ash-glaze forms of nearly the same height, side by side. The cut anahaw leaf gives the group its tallest element, and one flat book gives it a low one.
- Hardin's three mapped balcony pots take species: calamansi, pandan, bird's-nest fern. Add up to two small herb pots at the guard.

### 5.5 Light plans

Lilim (replace the "Time for every shot" and "Direct sun" bullets in Site and light):

> - Lead light: about 3:30 pm, dry season. Shade under the eaves, a bright opening, sun from the west-southwest. It holds the hero, the living vignette, the material detail, and the shop room.
> - Morning, about 8:30 am: main bedroom, shared bedroom, hallway. Sun from the east-southeast, filtered by the hillside planting. Dappled sun may fall on the bed, the floor near the opening, and the wall.
> - Low sun, about 4:45 pm: terrace and the afternoon table. Sun comes under the eave. Long shadows of the posts cross the pavers and the first meters of the great room floor.
> - Dusk, about 6:00 pm: the dining wide view and the exterior. The Kapis Pendant is on at 2700 K. The valley is blue-green and still readable.
> - In every condition the room is brighter at the opening and darker at the back.

The 4:45 pm figure is my estimate from the section: 5.5 m of roof cover west of the doors, and an eave about 2.4 m high. The sun clears that near 22 degrees of altitude. It also corrects a physical error: the sun band in `g04` cannot happen at 3:30 pm. The implementor should confirm the time against the plan.

The other four:

| Project | Lead light | Second light |
|---|---|---|
| Tanaw | 6:15 pm blue hour (unchanged) | About 5:30 pm, last low sun straight into the west glass, for two or three frames: mullion shadows across the floor. Aedwon should confirm this does not weaken the dusk identity. |
| Dalampasigan | Already has two (9:00 am and 3:00 pm) | None needed |
| Pahinga | Already has two (10:30 am and dusk) | None needed |
| Hardin | 4:00 pm overcast (unchanged) | None. Its mixed media gives the variety. |

### 5.6 Cameras

- Lilim: keep C1, C2, C8, C9, C10, C11. Change four cameras (below). Camera corrections have a precedent (C4, C9, C11 on 2026-11-15).
- Dalampasigan: restore C4 and C5 to low 50mm detail cameras.
- Pahinga: restore C3 and C4 to 50mm. Lower or raise detail cameras to their subject.
- Tanaw: C2, C4, C6, and C10 are 50mm already. Let their height follow the subject. The Signature says "square-on," but every mapped heading is oblique, and the bible admits it. Change the words to "clearly oblique from the room corner" or remap. I recommend changing the words.

### 5.7 Lilim: recommended scheme, kit, and shot plan

These are visual choices. The pilot shows them. Aedwon picks.

Scheme changes:

| Change | Why (principle) |
|---|---|
| Accent: Hablon Cushion in Moss | The project has no accent. Moss differs in hue from the wood and repeats the garden. Indigo would contrast more, but Dalampasigan owns it. |
| Sulok Side Table in Ebonized at each bedside | Function, and a true neutral dark that separates from the mahogany floor |
| Luad Table Lamp at the main bedside; Sinag Floor Lamp beside the sofa | Function and the lighting layer. The house has one light fitting now. |
| Kumot Throw in Natural at the foot of the main bed | Textile layer and a sign of use |
| Amihan No. 3 on the shared bedroom wall between the beds | Art layer, and paper white as a clean bright. It is an edition of 50, so two projects can hold it. |
| Tapayan Vessel count becomes 2 | The approved hero already shows two |

Styling kit by room:

| Room | Kit |
|---|---|
| Living | Batis: one Tapayan, the low bowl, two stacked books. Silong: two Hablon Moss. Sinag at the sofa's north end (floor piece; give it a position). |
| Dining | Hapag: bare for the afternoon-table frame; the low bowl with green fruit for the dusk frame. Aparador: one Tapayan holding cut garden foliage. |
| Main bedroom | Sulok Ebonized on the opening side: Luad, one book, one glass. Kumot Natural folded at the bed foot. |
| Shared bedroom | Sulok Ebonized between the beds: two books, one glass. Amihan No. 3 above it. One Hablon Moss on each bed. |
| Hallway | Nothing loose. It is a passage. |
| Terrace | One book on the bench. |

Shot plan. The ten captions in `projects.md` stay as written.

| Shot | Type | Light | Camera |
|---|---|---|---|
| `lilim-hero` | Wide | Shade, 3:30 pm | C1 unchanged |
| `g02-coffee-table` | Medium | Shade | C2 unchanged |
| `g03-dining` | Wide, square down the table | Dusk, pendant on | Move C3 to the south end (near 4.0, 0.6, heading 0) |
| `g04-afternoon-table` | Detail | Low sun, 4:45 pm | Move C4: 50mm toward the Aparador and Tapayan, table edge in the foreground |
| `g05-main-bedroom` | Medium | Morning | C5 closer, or 50mm, at about 1.0 m |
| `g06-shared-bedroom` | Medium | Morning | C6 closer, or 50mm: both bed heads, the table and print between |
| `g07-hallway` | Detail | Morning | C7 close on the Aparador's cane doors and brass hinge, garden window soft behind |
| `g08-terrace` | Wide | Dappled sun (as shot) | C8 unchanged |
| `g09-material-detail` | Detail | Shade | C9 unchanged |
| `g10-exterior` | Wide | Day (as shot) | C10 unchanged |
| `shop-room` | Wide | Shade | C11 unchanged |

Result: four wide views, three medium, and three details in the gallery, in four kinds of light.

In each Lilim shot entry, replace the sentences "Shaded afternoon daylight enters from camera right under the eaves, bouncing softly across mahogany, oat linen, and honed surfaces. Preserve the warm umber grade and muted olive garden. Include a slight linen crease, natural wood grain variation, and a little settled dust in a protected edge." with the sentence for that shot's light, then the common close:

> Shade: "At 3:30 pm the room sits in shade under deep eaves. Light enters from the open west doors and falls off toward the east wall."
> Morning: "At 8:30 am, sun from the east-southeast comes through the hillside planting and lays soft dappled patches near the opening. The far side of the room stays in shade."
> Low sun: "At 4:45 pm, low sun comes under the eave from the west-southwest. Long post shadows cross the floor."
> Dusk: "At 6:00 pm the valley is blue-green and still readable. The Kapis Pendant is on and is the brightest thing in the frame."
> Common close: "Neutral white balance: limewash and linen read off-white, mahogany reads warm, foliage reads green. Keep one true dark and one clean bright. Show a slight linen crease and natural grain variation."

## 6. The pilot

A set complaint needs a set test. Pilot three Lilim frames, shown side by side with the old versions.

| Frame | What it tests |
|---|---|
| `lilim-hero`, same camera, shade | The flagship with the new grade, the Moss accent, the lamp, and a styled table. Does it hold with small changes? |
| `lilim-g05-main-bedroom`, medium, morning sun | The worst kind of frame, with function, layers, and directional light |
| `lilim-g04-afternoon-table` as a detail, low sun | The missing shot type, close styling, and shadow play |

Step zero costs nothing: Aedwon can look at the four white-balance previews today and rule on the grade alone.

What Aedwon should judge:

1. Side by side, do the three read as one house and as three different pictures?
2. Do walls and linen read off-white, and the garden green?
3. In each thumbnail, can he name the one thing the frame is about?
4. Is the density right, or does he want less or more?
5. Moss as the accent: yes, or try Indigo?
6. Do the catalog pieces still match their approved references?
7. Would he hire this studio now?

If he approves, the next wave is the Tanaw and Hardin anchors under the same rules. Tanaw tests restraint and the one plant. Hardin tests plants and books at the highest density. The Pahinga and Dalampasigan anchors already pass the tests and serve as controls.

Why not the earlier pilot (Lilim g05, Tanaw hero, Pahinga hero): the Pahinga hero barely changes, so it teaches nothing. One Lilim frame cannot show whether the set is still monotonous.

## 7. Cost

### Lilim (11 approved frames)

| Frame | Action | Reason |
|---|---|---|
| `hero` | Regenerate | Grade, accent, lamp, styled table. It also removes the second pendant the bible already disallows. |
| `g02` | Regenerate | Bare table contradicts the hero; no focal point |
| `g03` | Regenerate | Becomes the dusk frame, square down the table |
| `g04` | Regenerate | Becomes a detail in low sun |
| `g05`, `g06` | Regenerate | Fail function, layers, and dead space |
| `g07` | Regenerate | Becomes a detail of the cane doors |
| `shop-room` | Regenerate | Bare table contradicts the hero; long blank wall |
| `g08`, `g09`, `g10` | Color correction only | They pass every test once the tint is gone |

Total: 8 regenerated, 3 corrected. The hero feeds the Home hero, the Studio and Full-Service heroes, the project card, and the About panel, so those change with it.

A cheaper option exists: correct the color of all 11 and regenerate only `g05` and `g06`. It fixes the tint and the two empty bedrooms. It does not fix the light, the shot mix, or the missing accent. I do not recommend it, because the monotony would remain.

### The other four projects

- Provisional anchors: regenerate `tanaw-hero` (ceiling takes a third of the frame, the shade is clipped by the edge, the table is bare, no plant) and `hardin-hero` (blank wall leads the frame, wrong balcony species). `dalampasigan-hero` and `pahinga-hero` pass; each takes one small kit addition in its own batch.
- The 36 frames not yet generated have no sunk cost. Their bibles need a styling kit, plant rows, and the camera and light edits in 5.5 and 5.6 before generation.
- The old-style Tanaw and Dalampasigan images are composition references only. Nothing changes there.

### Not affected

- The 36 product studio masters and the four product references.
- The site build. It still uses gradient placeholders until wave 5.

### Document edits

- `visual-system.md` Imagery: three bullets.
- `image-briefs.md`: Global style, the 11 Lilim shot entries, and any entry in the other projects that says "add nothing loose."
- `scene-bibles/README.md` and all five bibles (Signature rows, kits, light plan, cameras).
- `projects.md`: Lilim "Shop the project" gains Sulok Side Table, Luad Table Lamp, Sinag Floor Lamp, Hablon Cushion, Kumot Throw, and Amihan No. 3. Tanaw's Signature and placement gain the plant.
- `decisions.md`: one line per change. `handoff.md`: replace step 1.
- This reopens parts of the signatures approved on 2026-11-15: the house-look grade, the Styling rows, the Camera rows, and Lilim's light.

## 8. Decisions Aedwon needs to make

1. The grade: neutral whites and full range in place of "warm umber, low contrast, lifted blacks." Judge from the previews.
2. A light plan per project in place of one clock time. For Tanaw, whether a late-sun second light is welcome.
3. Lilim's accent: Moss (recommended) or Indigo.
4. The shop rule's scope: existing "not a catalog piece" rows stand; no new ones.
5. The bowl in the hero: accept it as plain tableware (recommended), or add a bowl to the catalog later.
6. Art: the catalog has three art pieces, and two are tied up. Rooms cannot show much art without repeating. Adding one or two art products is a content decision that costs a studio shot each. I recommend deferring it until the pilot shows whether walls feel bare.
7. Whether a global color correction counts as allowed grading. It saves three regenerations now.

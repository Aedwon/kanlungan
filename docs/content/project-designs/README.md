# Project design files

Status: **Decided on delegation** on 2026-11-16, after Aedwon accepted the rethink in `docs/build/consults/2026-11-16-ground-up-rethink.md`.

One design file per project. It is the design of that project, written in the order a designer works. It replaces the project's scene bible.

| Project | File | Status |
|---|---|---|
| Lilim House | [lilim-house.md](lilim-house.md) | Written. Direction locked by Aedwon. |
| Tanaw Residence, Dalampasigan Inn, Pahinga Villas, Hardin Apartment | Not written | Waiting for the calibration set (`docs/build/consults/2026-11-16-calibration-set.md`) |

## What it replaces, and how

A scene bible fixed where things were, to the centimeter, so that frames agreed with each other. It never asked whether the room was good. It also took its identity from the shell, which is the client's.

The design file keeps what worked and changes the order.

| Scene bible | Design file |
|---|---|
| Plan, with the shell's finishes as the project's identity | **As handed over**: the plain shell, owned by the client, with fixed landmarks for each pair camera |
| No brief, no concept | **Brief** and **Concept** |
| Placement table with coordinates. "Nothing is added that the table does not list." | **Plan and furniture layout** by group, with approximate positions. **Sourcing schedule** and **Styling** list everything that may appear. |
| One light and one time for every shot | **Lighting plan** by room, and a time for each frame |
| Signature: floor, ceiling, wall, one textile color | **Palette and materials**, set by the [studio hand](../../design/studio-hand.md) |
| Numbered cameras with coordinates and headings | **Shot list** with a standpoint in words, a lens, a height, and a time |
| Checklist for sameness | Alignment and continuity checks, then the **hiring test** |

Switch one project at a time. A project uses its scene bible until its design file is approved. Then the bible is retired. The Lilim House bible is superseded now. Do not generate from it. The old bibles are not edited.

## Order of work for one project

| Step | Output | Who decides |
|---|---|---|
| 1. As handed over, and brief | The shell and the client | Agent, on delegation |
| 2. Before frames | The pair cameras, empty | **Aedwon checks the hero before: is it honestly plain?** |
| 3. Concept | One sentence, the palette, the leading pieces. Shown as the hero pair. | **Aedwon, by dragging the bar** |
| 4. Design | Plan, lighting, sourcing, styling | Agent |
| 5. Shot list | Three pairs and the story frames | Agent |
| 6. Images | The rest, as a contact sheet | **Aedwon approves the set** |
| 7. Copy | Brief, moves, captions with credits, "Shop the project" in `../projects.md` | Agent, on delegation |

Captions come last. They describe pictures. They do not drive them.

## Sections of a design file

1. **As handed over.** The shell: finishes, fixed items, what the unit came with, its one asset, and 8 to 12 landmarks for each pair camera. Everything here is the client's. The approved before image wins over this text where they differ.
2. **Brief.** Who the client is, how they live, what they asked. Public facts link to `../projects.md`.
3. **Concept.** One sentence. Three mood words. The leading piece per room. Three to five moves. How this project differs from the other four.
4. **Plan and furniture layout.** Groups, rug sizes, paths, and approximate positions. No coordinates to the centimeter.
5. **Palette and materials.** Dominant, secondary, warm notes, and what is left out, following the studio hand's site rule.
6. **Lighting plan.** Existing points and what goes at each. Lamps by height. Which lamps are on in which frame.
7. **Sourcing schedule.** Every piece: room, item, source type, description, reference image. Source types: shop (catalog), custom, found, the client's own, art. Nothing is fixed except curtains on tracks, hung art, and fittings at existing points.
8. **Styling.** Loose objects by surface. Plants by species and place. One sign of life per room. Styling may move to camera.
9. **Shot list.** Three pairs and the story frames. Each has a subject, a type, a standpoint in words, a lens, a height, a time, the light, and the lamps that are on.

A file may add sections for its own needs, such as a starting image and its corrections.

## How generation uses it

1. Generate each before from the "As handed over" section. Get the hero before approved.
2. Generate each after as an edit of its approved before. Follow the pairing method in [image briefs](../image-briefs.md#pairing-method).
3. Generate story frames with the approved after of that room as the first reference.
4. Reference budget, five images: the approved before or after of that space, the material board, the sourcing board, and up to two shop product masters from `design/photography/`. Product masters may be combined into one temporary sheet.
5. Shop pieces follow their consistency sheet in the image briefs.

## Review

Run the checks in this order. A frame that fails is regenerated, not retouched.

1. **Alignment**, for pairs. The checks in the pairing method. A bulk-layer job.
2. **Continuity.** The same shell and the same pieces as the other frames of that space. Nothing appears that the sourcing schedule or the styling list does not name. A bulk-layer job.
3. **Light.** Every bit of light has a source you can point to. Surfaces away from lamps hold the daylight balance.
4. **The hiring test.** The lead runs it, then Aedwon.
   - Dragging the bar, do you feel the space was transformed?
   - Would you hire this studio from the after?
   - Can you say the one idea?
   - Can you point to what a stager would not have done?
   - Could you furnish this room from the shop alone? The answer must be no.
   - Did anything fixed change? The answer must be no.
   - Does the frame differ from its gallery neighbors, and the project from the other four?

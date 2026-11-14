# Scene bibles

Status: **Decided on delegation** on 2026-11-14, at Aedwon's request, so that every generated photograph of the same place agrees with every other.

A scene bible fixes the physical facts of one project before any image is generated. Image briefs in `../image-briefs.md` describe each shot; the scene bible decides where things are. If a brief and a bible disagree, the bible wins.

## What every bible fixes

1. **Plan.** A measured floor plan in meters, with north, walls, openings, ceiling, and floor. Drawn in `design/photography/plans/<project>.svg` and exported to PNG for use as a generation reference.
2. **Surfaces.** One material per surface: floor, walls, ceiling, window frames, terrace, exterior. No surface changes between shots.
3. **Placement.** Every piece of furniture and lighting with its position, facing, and count. Nothing is added that the table does not list, except loose, small items named in the shot entry.
4. **Light.** Site orientation, time of day, sun direction, and where direct sun may fall. Every shot of the project uses this light unless the bible lists an exception.
5. **Cameras.** One numbered camera per shot: position (x, y in meters on the plan), height, heading (compass degrees), lens, and what must be visible. The camera map is drawn on the plan.

## How generation uses it

1. Generate the **anchor** for each space first (the camera marked "anchor"). Aedwon approves it.
2. Every later shot of that space passes as references: the approved anchor, the plan PNG, and any approved product reference. The prompt states the camera line from the bible verbatim.
3. Products always follow their consistency sheet and approved product reference.

## Review checklist

Before a photo is accepted, check it against the bible:

- Walls, openings, ceiling, and floor match the plan and surface list.
- Every visible piece is in its listed place and facing, with the right count.
- Light comes from the listed direction, at the listed time.
- The view matches the camera's position and heading: what should be left is left.
- Nothing appears that the bible does not list.

A photo that fails any line is regenerated, not retouched.

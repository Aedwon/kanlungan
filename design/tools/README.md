# pairfix

Pulls an AI-furnished "after" photo back to the color balance of its empty "before". Needs Pillow and numpy only.

- `python3 pairfix.py measure BEFORE AFTER` prints R-B and Lab a/b for the ceiling band and the shell.
- `python3 pairfix.py fix BEFORE AFTER OUT [--keep-lamp-glow | --no-lamp-glow]` writes the corrected after.
- Shell = pixels whose structure and brightness barely changed (walls, ceiling).
- The fix is a smooth chroma-only gain fitted on the shell, applied to the whole frame, luminance preserved.
- Glow is auto: on when the ceiling cast exceeds +40 R-B. Bright warm sources fade the gain to zero nearby.
- Images must be the same size. Output keeps the input format of the OUT extension.

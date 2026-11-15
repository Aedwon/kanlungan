Generate the TEN {PROJECT} photographs with your image generation tool and save each as PNG under design/photography/ in /Users/aedwon/Documents/Projects/kanlungan (filename = shot id + .png). Do not run any git commands. Do not edit any other file. If you have no image generation tool, stop and say so; never draw images with code.

Read in full: docs/content/scene-bibles/README.md and docs/content/scene-bibles/{BIBLE}.md (plan, surfaces, placement, light, cameras, and any notes such as a fixed skyline). Then for each shot read docs/content/image-briefs.md: "Consistency system", "Global style", the consistency sheet of every product visible, and the shot entry. The scene bible wins over the brief.

Shots: every shot id starting with {PREFIX}- in docs/content/image-briefs.md. Generate the anchor cameras listed in the bible first, then the dependent shots.

For every shot, state the bible's camera row verbatim in your prompt and pass as references: design/photography/plans/{BIBLE}.png (export it first if missing is not possible: if the PNG is missing, use the .svg path and describe the plan in words); the approved anchor of the same space once generated; and the approved studio photo of every visible product (design/photography/<product>-studio.png, plus silong-studio-front.png for the Silong Sofa). Products must match their studio photos in form, finish, and fabric.

After each image, check it against the bible's review checklist and regenerate a failing shot once. Report per shot: pass or fail per checklist line after your final attempt, and pixel size.

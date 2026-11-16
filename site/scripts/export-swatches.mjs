// Cuts material swatches from approved photographs into public/images/swatches/<project>/.
// Reads data/swatch-crops.json: per project and material, one crop (source PNG, box [left, top, right, bottom])
// or two crops (left half of the first, right half of the second) for pairs such as "white and charcoal linen".
// Writes WebP and JPEG at 200 and 400 px, and src/data/swatches.json (project -> [{ material, id }]).
import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../../', import.meta.url));
const site = path.join(root, 'site');
const crops = JSON.parse(await readFile(path.join(site, 'data', 'swatch-crops.json'), 'utf8'));
const SIZES = [200, 400];
const BIG = SIZES[SIZES.length - 1];
const cut = ({ source, box: [l, t, r, b] }) =>
  sharp(path.join(root, source)).extract({ left: l, top: t, width: r - l, height: b - t }).resize(BIG, BIG).toBuffer();

const manifest = {};
for (const [project, list] of Object.entries(crops)) {
  const dir = path.join(site, 'public', 'images', 'swatches', project);
  await mkdir(dir, { recursive: true });
  manifest[project] = [];
  for (const { material, id, parts } of list) {
    let base;
    if (parts.length === 1) base = await cut(parts[0]);
    else {
      const [a, b] = await Promise.all(parts.map(cut));
      const half = BIG / 2;
      base = await sharp({ create: { width: BIG, height: BIG, channels: 3, background: '#fff' } }).composite([
        { input: await sharp(a).extract({ left: 0, top: 0, width: half, height: BIG }).toBuffer(), left: 0, top: 0 },
        { input: await sharp(b).extract({ left: half, top: 0, width: half, height: BIG }).toBuffer(), left: half, top: 0 },
      ]).png().toBuffer();
    }
    for (const w of SIZES) {
      const img = sharp(base).resize(w, w);
      await img.clone().webp({ quality: 80, effort: 5 }).toFile(path.join(dir, `${id}-${w}.webp`));
      await img.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(dir, `${id}-${w}.jpg`));
    }
    manifest[project].push({ material, id });
  }
}
await writeFile(path.join(site, 'src', 'data', 'swatches.json'), JSON.stringify(manifest, null, 1) + '\n');
console.log(Object.values(manifest).flat().length, 'swatches');

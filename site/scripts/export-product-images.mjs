// Exports web images from design/photography/*.png (products only) to public/images/products/.
// Writes WebP at several widths plus one JPEG fallback, and src/data/product-images.json (sizes, widths).
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { blurOf } from './blur.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const src = path.join(root, 'design', 'photography');
const out = path.join(root, 'site', 'public', 'images', 'products');
const WIDTHS = [480, 800, 1200];
// Wide editorial slots (full-width bands, heroes) also get a 1600 width.
const WIDE = /^(maker-.+|about-team|shop-shelf-story|collection-stone-clay|workshop-cane-hands|process-.+)$/;
await mkdir(out, { recursive: true });
// Product studio shots and the Silong extra angles. Room shots (lilim-*) are exported by the project script.
// Also the editorial photos for About, the Shop landing, collections, makers, the Home workshop panel and the 404 page.
const procSrc = path.join(root, 'design', 'process');
const fromProcess = (await readdir(procSrc)).filter((f) => /^process-.+\.png$/.test(f)).map((f) => path.join(procSrc, f));
const files = (await readdir(src)).filter((f) => /^(?!lilim-).+-(studio|studio-front|studio-three-quarter|detail|fabric)\.png$/.test(f) || /^(maker-.+|about-team|shop-shelf-story|collection-stone-clay|workshop-cane-hands)\.png$/.test(f)).map((f) => path.join(src, f)).concat(fromProcess);
const manifest = {};
for (const full of files) {
  const name = path.basename(full, '.png');
  const { width, height } = await sharp(full).metadata();
  const widths = [...new Set([...WIDTHS, ...(WIDE.test(name) ? [1600] : [])].filter((w) => w < width).concat(width))].sort((a, b) => a - b);
  for (const w of widths) await sharp(full).resize({ width: w }).webp({ quality: 78, effort: 5 }).toFile(path.join(out, `${name}-${w}.webp`));
  const jw = Math.min(width, 1080);
  await sharp(full).resize({ width: jw }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(out, `${name}.jpg`));
  manifest[name] = { width, height, widths, jpegWidth: jw, blur: await blurOf(full) };
}
await writeFile(path.join(root, 'site', 'src', 'data', 'product-images.json'), JSON.stringify(manifest, null, 1) + '\n');
console.log(Object.keys(manifest).length, 'images');

// Exports web images from design/photography/*.png (products only) to public/images/products/.
// Writes WebP at several widths plus one JPEG fallback, and src/data/product-images.json (sizes, widths).
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../../', import.meta.url));
const src = path.join(root, 'design', 'photography');
const out = path.join(root, 'site', 'public', 'images', 'products');
const WIDTHS = [480, 800];
await mkdir(out, { recursive: true });
// Product studio shots and the Silong extra angles. Room shots (lilim-*) are exported by the project script.
const files = (await readdir(src)).filter((f) => /^(?!lilim-).+-(studio|studio-front|studio-three-quarter|detail|fabric)\.png$/.test(f));
const manifest = {};
for (const file of files) {
  const name = file.replace(/\.png$/, '');
  const { width, height } = await sharp(path.join(src, file)).metadata();
  const widths = [...new Set(WIDTHS.filter((w) => w < width).concat(width))];
  for (const w of widths) await sharp(path.join(src, file)).resize({ width: w }).webp({ quality: 78, effort: 5 }).toFile(path.join(out, `${name}-${w}.webp`));
  const jw = Math.min(width, 1080);
  await sharp(path.join(src, file)).resize({ width: jw }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(out, `${name}.jpg`));
  manifest[name] = { width, height, widths, jpegWidth: jw };
}
await writeFile(path.join(root, 'site', 'src', 'data', 'product-images.json'), JSON.stringify(manifest, null, 1) + '\n');
console.log(Object.keys(manifest).length, 'images');

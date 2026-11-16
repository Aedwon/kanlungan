// Exports web images from design/<project>/*.png (top level only) to public/images/projects/<project>/.
// Writes WebP at several widths plus one JPEG fallback, and src/data/project-images.json (names, sizes, widths).
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../../', import.meta.url));
const projects = ['lilim', 'tanaw', 'dalampasigan', 'pahinga', 'hardin'];
const skip = /(hero-A-calm|hero-wall-B|hero-wall-C)/;
const WIDTHS = [480, 768, 1080, 1440, 1920];
const manifest = {};
for (const project of projects) {
  const src = path.join(root, 'design', project);
  const out = path.join(root, 'site', 'public', 'images', 'projects', project);
  await mkdir(out, { recursive: true });
  const files = (await readdir(src)).filter((f) => f.endsWith('.png') && !skip.test(f));
  for (const file of files) {
    const name = file.replace(/\.png$/, '');
    const img = sharp(path.join(src, file));
    const { width, height } = await img.metadata();
    const widths = [...new Set(WIDTHS.filter((w) => w < width).concat(width))];
    for (const w of widths) {
      await sharp(path.join(src, file)).resize({ width: w }).webp({ quality: 76, effort: 5 }).toFile(path.join(out, `${name}-${w}.webp`));
    }
    const jw = Math.min(width, 1440);
    await sharp(path.join(src, file)).resize({ width: jw }).jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(out, `${name}.jpg`));
    manifest[name] = { dir: project, width, height, widths, jpegWidth: jw };
  }
}
await writeFile(path.join(root, 'site', 'src', 'data', 'project-images.json'), JSON.stringify(manifest, null, 1) + '\n');
console.log(Object.keys(manifest).length, 'images');

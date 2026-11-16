// Adds the blur placeholder to the existing image manifests from the exported JPEGs, without re-exporting.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { blurOf } from './blur.mjs';
const site = fileURLToPath(new URL('../', import.meta.url));
for (const [file, base] of [['project-images.json', (e) => `projects/${e.dir}`], ['product-images.json', () => 'products']]) {
  const p = path.join(site, 'src', 'data', file);
  const manifest = JSON.parse(await readFile(p, 'utf8'));
  for (const [name, e] of Object.entries(manifest)) e.blur = await blurOf(path.join(site, 'public', 'images', base(e), `${name}.jpg`));
  await writeFile(p, JSON.stringify(manifest, null, 1) + '\n');
  console.log(file, Object.keys(manifest).length);
}

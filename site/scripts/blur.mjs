// A tiny blurred WebP (data URI, about 300 bytes) used as the slot background while a photograph loads.
import sharp from 'sharp';
export async function blurOf(input) {
  const buf = await sharp(input).resize({ width: 16 }).blur(0.6).webp({ quality: 40 }).toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

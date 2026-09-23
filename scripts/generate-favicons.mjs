import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcImage = 'C:/Users/Priyanshu/Downloads/WhatsApp Image 2026-09-23 at 12.08.01 PM.jpeg';
const publicDir = path.resolve('public');

async function generate() {
  console.log('Loading source image:', srcImage);
  
  // Crop precisely to 1180x1180 centered on the logo
  // Bounding box was ~ [minX: 72, maxX: 1160, minY: 43, maxY: 1141] (width 1088, height 1098, center 616, 592)
  const masterBuffer = await sharp(srcImage)
    .extract({ left: 26, top: 2, width: 1180, height: 1180 })
    .ensureAlpha()
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  console.log('Master square buffer prepared: 1180x1180');

  // Define sizes
  const sizes = {
    'icon.png': 512,
    'icon-192x192.png': 192,
    'icon-96x96.png': 96,
    'icon-48x48.png': 48,
    'apple-icon.png': 180,
    'icon-light-32x32.png': 32,
    'icon-dark-32x32.png': 32,
  };

  const buffers = {};
  for (const [filename, size] of Object.entries(sizes)) {
    const buf = await sharp(masterBuffer)
      .resize(size, size, { kernel: sharp.kernel.lanczos3, fit: 'contain' })
      .ensureAlpha()
      .png({ quality: 100, compressionLevel: 9 })
      .toBuffer();
    buffers[filename] = buf;
    
    fs.writeFileSync(path.join(publicDir, filename), buf);
    console.log(`Wrote public/${filename} (${size}x${size}, ${buf.length} bytes)`);
  }

  // Generate multi-resolution ICO file (48x48, 32x32, 16x16) with explicit 4-channel RGBA
  const p16 = await sharp(masterBuffer)
    .resize(16, 16, { kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .png()
    .toBuffer();
  const p32 = buffers['icon-light-32x32.png'];
  const p48 = buffers['icon-48x48.png'];

  const icoEntries = [
    { width: 48, height: 48, buffer: p48 },
    { width: 32, height: 32, buffer: p32 },
    { width: 16, height: 16, buffer: p16 }
  ];

  const count = icoEntries.length;
  let offset = 6 + count * 16;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO format
  header.writeUInt16LE(count, 4); // Number of images

  const directoryEntries = icoEntries.map(item => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel (32-bit RGBA)
    entry.writeUInt32LE(item.buffer.length, 8); // Size of image data
    entry.writeUInt32LE(offset, 12); // Offset to image data
    offset += item.buffer.length;
    return entry;
  });

  const icoBuffer = Buffer.concat([
    header,
    ...directoryEntries,
    ...icoEntries.map(e => e.buffer)
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log(`Wrote public/favicon.ico (${icoBuffer.length} bytes, 3 layers)`);

  console.log('All favicon assets generated successfully!');
}

generate().catch(err => {
  console.error('Failed to generate favicons:', err);
  process.exit(1);
});

#!/usr/bin/env node
// Descarga las fotografías declaradas en images.manifest.json desde el CDN de Unsplash,
// en WebP y en los anchos que usa el loader de imágenes (src/lib/image-loader.ts).
// Genera src/data/image-meta.json con dimensiones reales y créditos.
// Uso: node scripts/fetch-images.mjs [--force]

import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WIDTHS = [640, 1280, 1920];
const QUALITY = 60;
// Las verticales se limitan en altura para no servir archivos desproporcionados.
const MAX_ASPECT = 1.25;
const outDir = path.join(root, "public", "images");
const metaFile = path.join(root, "src", "data", "image-meta.json");
const force = process.argv.includes("--force");

/** Lee ancho y alto de la cabecera de un archivo WebP (VP8, VP8L o VP8X). */
function webpSize(buf) {
  if (buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") {
    throw new Error("El archivo descargado no es WebP");
  }
  const chunk = buf.toString("ascii", 12, 16);
  if (chunk === "VP8X") {
    return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
  }
  if (chunk === "VP8L") {
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === "VP8 ") {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  throw new Error(`Cabecera WebP desconocida: ${chunk}`);
}

async function download(photo, width, file) {
  if (!force && existsSync(file)) return readFile(file);
  const url = `https://images.unsplash.com/photo-${photo}?w=${width}&h=${Math.round(width * MAX_ASPECT)}&fit=max&fm=webp&q=${QUALITY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} al descargar ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(file, buf);
  return buf;
}

const manifest = JSON.parse(
  await readFile(path.join(root, "scripts", "images.manifest.json"), "utf8"),
);
await mkdir(outDir, { recursive: true });

const meta = {};
for (const item of manifest) {
  let size;
  for (const width of WIDTHS) {
    const buf = await download(item.photo, width, path.join(outDir, `${item.key}-${width}.webp`));
    if (width === WIDTHS.at(-1)) size = webpSize(buf);
  }
  meta[item.key] = {
    src: `/images/${item.key}.webp`,
    width: size.width,
    height: size.height,
    alt: item.alt,
    credit: {
      author: item.author,
      profileUrl: `https://unsplash.com/@${item.username}`,
      sourceUrl: `https://unsplash.com/photos/${item.unsplashId}`,
    },
  };
  console.log(`✓ ${item.key} (${size.width}×${size.height})`);
}

await writeFile(metaFile, `${JSON.stringify(meta, null, 2)}\n`);
console.log(`\n${manifest.length} imágenes → public/images, metadatos → src/data/image-meta.json`);

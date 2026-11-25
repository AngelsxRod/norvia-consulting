#!/usr/bin/env node
// Comprueba que todos los enlaces y recursos internos del sitio exportado (out/) existen.
// Uso: pnpm build && node scripts/check-links.mjs

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
if (!existsSync(outDir)) {
  console.error("No existe out/. Ejecuta primero `pnpm build`.");
  process.exit(1);
}

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return entry.endsWith(".html") ? [full] : [];
  });
}

function resolveTarget(url) {
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  const target = path.join(outDir, clean);
  if (clean.endsWith("/")) return path.join(target, "index.html");
  return target;
}

const pages = htmlFiles(outDir);
const broken = new Map();
let checked = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const urls = new Set();
  for (const match of html.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)) urls.add(match[1]);
  for (const match of html.matchAll(/\ssrcSet="([^"]+)"/gi)) {
    for (const candidate of match[1].split(",")) urls.add(candidate.trim().split(/\s+/)[0]);
  }
  for (const url of urls) {
    if (url.startsWith("//")) continue;
    checked++;
    if (!existsSync(resolveTarget(url))) {
      const from = path.relative(outDir, page);
      broken.set(url, [...(broken.get(url) ?? []), from]);
    }
  }
}

console.log(`${pages.length} páginas HTML, ${checked} referencias internas comprobadas.`);
if (broken.size > 0) {
  for (const [url, from] of broken) console.error(`✗ ${url}  ← ${from.slice(0, 3).join(", ")}`);
  process.exit(1);
}
console.log("✓ Sin enlaces internos rotos.");

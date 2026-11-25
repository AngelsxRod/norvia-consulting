#!/usr/bin/env node
// Verifica el contraste WCAG 2.2 de los pares de color usados por el sistema de diseño.
// Texto: ≥ 4,5:1 (AA). Componentes de interfaz y bordes de controles: ≥ 3:1.

const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const paper = "#f4f5f1";
const mist = "#e7ebe6";
const white = "#ffffff";
const petrol = "#12343b";
const ink = "#0b1f24";

const pairs = [
  ["Tinta / papel", ink, paper, 4.5],
  ["Pizarra (texto secundario) / papel", "#4a5a5e", paper, 4.5],
  ["Pizarra / niebla", "#4a5a5e", mist, 4.5],
  ["Pizarra / blanco", "#4a5a5e", white, 4.5],
  ["Polar (acento) / papel", "#0f6b63", paper, 4.5],
  ["Polar / blanco", "#0f6b63", white, 4.5],
  ["Polar / polar suave", "#0f6b63", "#d5e6e1", 4.5],
  ["Peligro / blanco", "#a3261b", white, 4.5],
  ["Peligro / papel", "#a3261b", paper, 4.5],
  ["Advertencia / ámbar suave", "#8a5a00", "#f4dfb8", 4.5],
  ["Advertencia / papel", "#8a5a00", paper, 4.5],
  ["Borde de control / blanco", "#7d8b88", white, 3],
  ["Texto claro / petróleo", "#eef2ee", petrol, 4.5],
  ["Texto atenuado / petróleo", "#a9bbb9", petrol, 4.5],
  ["Texto atenuado / tinta", "#a9bbb9", ink, 4.5],
  ["Señal / petróleo", "#c8f169", petrol, 4.5],
  ["Señal / tinta", "#c8f169", ink, 4.5],
  ["Tinta sobre botón señal", ink, "#c8f169", 4.5],
  ["Papel sobre botón tinta", paper, ink, 4.5],
  ["Blanco sobre polar (contador)", white, "#0f6b63", 4.5],
];

let failed = 0;
for (const [label, fg, bg, min] of pairs) {
  const value = ratio(fg, bg);
  const ok = value >= min;
  if (!ok) failed++;
  console.log(`${ok ? "✓" : "✗"} ${value.toFixed(2).padStart(5)}:1  (mín. ${min})  ${label}`);
}
process.exit(failed ? 1 : 0);

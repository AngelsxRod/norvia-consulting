import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación 100 % estática: `next build` genera el sitio en `out/`.
  output: "export",
  // Cada ruta se emite como `/ruta/index.html`, compatible con cualquier hosting estático.
  trailingSlash: true,
  images: {
    // Sin optimizador en servidor: el loader apunta a variantes WebP pregeneradas
    // por scripts/fetch-images.mjs, de modo que next/image sigue emitiendo srcset.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 1280, 1920],
    imageSizes: [],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

import type { ImageLoaderProps } from "next/image";

/** Anchos disponibles en public/images (ver scripts/fetch-images.mjs). */
export const IMAGE_WIDTHS = [640, 1280, 1920] as const;

export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const target = IMAGE_WIDTHS.find((w) => w >= width) ?? IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1];
  return src.replace(/\.webp$/, `-${target}.webp`);
}

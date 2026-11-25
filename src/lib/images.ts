import imageMeta from "@/data/image-meta.json";
import type { ImageKey, ImageMeta } from "@/types/content";

const images = imageMeta as Record<string, ImageMeta>;

export function getImage(key: ImageKey): ImageMeta {
  const image = images[key];
  if (!image) throw new Error(`Imagen no registrada: ${key}`);
  return image;
}

export function allImages(): (ImageMeta & { key: string })[] {
  return Object.entries(images).map(([key, meta]) => ({ key, ...meta }));
}

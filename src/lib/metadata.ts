import type { Metadata } from "next";

import { site } from "@/data/site";
import { getImage } from "@/lib/images";
import type { ImageKey } from "@/types/content";

/** Imagen social de marca (copia estática de src/app/opengraph-image.png). */
const socialImage = {
  url: "/brand/norvia-social.png",
  alt: "Norvia — Tecnología con rumbo. Consultoría tecnológica B2B (marca ficticia).",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Imagen para Open Graph; si se omite se usa la imagen social del sitio. */
  image?: ImageKey;
  type?: "website" | "article";
  publishedTime?: string;
};

/** Metadatos por página: título, descripción, URL canónica, Open Graph y Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
}: PageMetadataInput): Metadata {
  const images = image
    ? [{ url: getImage(image).src.replace(/\.webp$/, "-1280.webp"), alt: getImage(image).alt }]
    : [{ url: socialImage.url, alt: socialImage.alt, width: 1200, height: 630 }];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${site.name}`,
      description,
      url: path,
      type,
      siteName: site.legalName,
      locale: "es_419",
      ...(publishedTime ? { publishedTime } : {}),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
      images: images.map((i) => i.url),
    },
  };
}

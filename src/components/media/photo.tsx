import Image from "next/image";

import { getImage } from "@/lib/images";
import { cn } from "@/lib/utils";
import type { ImageKey } from "@/types/content";

type PhotoProps = {
  image: ImageKey;
  /** Atributo `sizes` para que el navegador elija la variante correcta. */
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Relleno del contenedor padre (posición relativa requerida). */
  fill?: boolean;
  alt?: string;
};

export function Photo({
  image,
  sizes,
  className,
  imgClassName,
  priority,
  fill = true,
  alt,
}: PhotoProps) {
  const meta = getImage(image);
  return (
    <div className={cn("relative overflow-hidden bg-mist", className)}>
      {fill ? (
        <Image
          src={meta.src}
          alt={alt ?? meta.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <Image
          src={meta.src}
          alt={alt ?? meta.alt}
          width={meta.width}
          height={meta.height}
          sizes={sizes}
          priority={priority}
          className={cn("h-auto w-full", imgClassName)}
        />
      )}
    </div>
  );
}

/** Crédito fotográfico compacto (licencia Unsplash). */
export function PhotoCredit({ image, className }: { image: ImageKey; className?: string }) {
  const { credit } = getImage(image);
  return (
    <p className={cn("font-mono text-[0.68rem] tracking-wide text-slate", className)}>
      Foto:{" "}
      <a href={credit.sourceUrl} className="underline underline-offset-2 hover:text-polar">
        {credit.author}
      </a>{" "}
      / Unsplash
    </p>
  );
}

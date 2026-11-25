import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Coordenada decorativa mostrada junto al eyebrow (p. ej. «03 / 08»). */
  index?: string;
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  layout?: "stacked" | "split";
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  as: Heading = "h2",
  tone = "light",
  layout = "stacked",
  className,
  id,
  children,
}: SectionHeadingProps) {
  const muted = tone === "light" ? "text-slate" : "text-on-dark-muted";
  const accent = tone === "light" ? "text-polar" : "text-signal";

  return (
    <div
      className={cn(
        "grid gap-6",
        layout === "split" && "lg:grid-cols-12 lg:items-end lg:gap-10",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-5", layout === "split" && "lg:col-span-7")}>
        {eyebrow ? (
          <p className={cn("flex items-center gap-3 eyebrow", accent)}>
            <span aria-hidden className="h-px w-8 bg-current" />
            {eyebrow}
            {index ? <span className={cn("ml-1", muted)}>{index}</span> : null}
          </p>
        ) : null}
        <Heading id={id} className="max-w-[22ch] text-h2 font-semibold">
          {title}
        </Heading>
      </div>
      {description || children ? (
        <div
          className={cn("flex flex-col gap-5", layout === "split" ? "lg:col-span-5" : "max-w-2xl")}
        >
          {description ? <p className={cn("text-lead", muted)}>{description}</p> : null}
          {children}
        </div>
      ) : null}
    </div>
  );
}

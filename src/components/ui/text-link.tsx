import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type TextLinkProps = React.ComponentProps<typeof Link> & {
  /** Muestra una flecha que se desplaza al pasar el cursor. */
  arrow?: boolean;
  tone?: "light" | "dark";
};

export function TextLink({
  className,
  children,
  arrow = true,
  tone = "light",
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group/link inline-flex min-h-11 items-center gap-2 font-medium underline decoration-1 underline-offset-[6px] transition-colors",
        tone === "light"
          ? "text-ink decoration-polar/50 hover:text-polar hover:decoration-polar"
          : "text-on-dark decoration-signal/60 hover:text-signal hover:decoration-signal",
        className,
      )}
      {...props}
    >
      {children}
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-(--duration-base) ease-(--ease-out-norvia) group-hover/link:translate-x-1"
        />
      ) : null}
    </Link>
  );
}

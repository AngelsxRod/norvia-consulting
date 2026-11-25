import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-xs border px-2 py-0.5 font-mono text-[0.7rem] leading-5 tracking-[0.06em] uppercase",
  {
    variants: {
      variant: {
        default: "border-line bg-white/60 text-slate",
        polar: "border-polar/30 bg-polar-soft text-polar",
        ink: "border-ink bg-ink text-paper",
        signal: "border-signal bg-signal text-ink",
        dark: "border-on-dark-line bg-transparent text-on-dark-muted",
        simulated: "border-amber/40 bg-amber-soft text-warning",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type BadgeProps = React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

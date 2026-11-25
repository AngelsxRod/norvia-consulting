import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-sm border font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-(--duration-fast) ease-(--ease-out-norvia) outline-none select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-ink bg-ink text-paper hover:border-petrol hover:bg-petrol",
        signal:
          "border-signal bg-signal text-ink hover:border-signal-strong hover:bg-signal-strong",
        outline: "border-ink/80 bg-transparent text-ink hover:bg-ink hover:text-paper",
        "outline-light":
          "border-on-dark/60 bg-transparent text-on-dark hover:border-on-dark hover:bg-on-dark hover:text-ink",
        ghost: "border-transparent bg-transparent text-ink hover:bg-mist",
        link: "border-transparent px-0 text-polar underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5 text-[0.95rem]",
        sm: "min-h-9 px-3.5 text-sm",
        lg: "min-h-13 px-7 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

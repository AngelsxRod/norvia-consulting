import { cn } from "@/lib/utils";

export const fieldControlClass =
  "w-full min-w-0 rounded-sm border border-input bg-white px-3.5 py-2.5 text-base text-ink transition-[border-color,box-shadow] outline-none placeholder:text-slate/70 focus-visible:border-polar focus-visible:shadow-(--shadow-focus) disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:focus-visible:shadow-[0_0_0_3px_rgb(163_38_27/0.25)]";

export function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(fieldControlClass, "min-h-11", className)}
      {...props}
    />
  );
}

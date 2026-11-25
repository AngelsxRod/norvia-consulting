import { cn } from "@/lib/utils";

import { fieldControlClass } from "./input";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldControlClass, "min-h-32 resize-y leading-relaxed", className)}
      {...props}
    />
  );
}

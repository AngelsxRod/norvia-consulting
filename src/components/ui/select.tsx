import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { fieldControlClass } from "./input";

type SelectProps = React.ComponentProps<"select"> & {
  options: readonly { value: string; label: string }[];
  placeholder?: string;
};

/** Select nativo con estilo de marca: accesible por defecto y funcional sin JavaScript. */
export function Select({ className, options, placeholder, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          fieldControlClass,
          "min-h-11 cursor-pointer appearance-none pr-10",
          className,
        )}
        {...props}
      >
        {placeholder !== undefined ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate"
      />
    </div>
  );
}

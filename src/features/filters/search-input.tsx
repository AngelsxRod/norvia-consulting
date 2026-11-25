"use client";

import { Search, X } from "lucide-react";

import { fieldControlClass } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
};

export function SearchInput({
  id,
  label,
  value,
  placeholder,
  onChange,
  className,
}: SearchInputProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <Search
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate"
        />
        <input
          id={id}
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
          className={cn(
            fieldControlClass,
            "min-h-11 pr-11 pl-10 [&::-webkit-search-cancel-button]:hidden",
          )}
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-1/2 right-1 flex size-9 -translate-y-1/2 items-center justify-center text-slate hover:text-ink"
            aria-label="Borrar búsqueda"
          >
            <X aria-hidden className="size-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}

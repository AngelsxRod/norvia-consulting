"use client";

import { Select } from "@/components/ui/select";

type FilterSelectProps = {
  id: string;
  label: string;
  value: string;
  allLabel: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
};

export function FilterSelect({ id, label, value, allLabel, options, onChange }: FilterSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Select
        id={id}
        value={value}
        placeholder={allLabel}
        options={options}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

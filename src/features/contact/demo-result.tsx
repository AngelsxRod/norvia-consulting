"use client";

import { CircleCheck } from "lucide-react";
import { useEffect, useRef } from "react";

type DemoResultProps = {
  title: string;
  children: React.ReactNode;
  onReset: () => void;
  resetLabel: string;
};

/** Resultado honesto de un formulario demostrativo: valida, pero no envía nada. */
export function DemoResult({ title, children, onReset, resetLabel }: DemoResultProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => ref.current?.focus(), []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      className="flex flex-col gap-4 border border-polar/40 bg-polar-soft p-6 outline-none sm:p-8"
    >
      <CircleCheck aria-hidden className="size-8 text-polar" />
      <p className="text-h3 font-semibold">{title}</p>
      <div className="flex flex-col gap-3 leading-relaxed text-petrol">{children}</div>
      <button
        type="button"
        onClick={onReset}
        className="self-start font-medium text-polar underline underline-offset-4 hover:text-ink"
      >
        {resetLabel}
      </button>
    </div>
  );
}

"use client";

import { animate, inView } from "motion";
import { useEffect, useRef } from "react";

import { formatNumber } from "@/lib/format";

type CountUpProps = { value: number; suffix?: string; prefix?: string };

/** Cifra que se anima desde cero al entrar en pantalla; el HTML ya contiene el valor final. */
export function CountUp({ value, suffix = "", prefix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const decimals = Number.isInteger(value) ? 0 : 1;
    return inView(
      element,
      () => {
        const controls = animate(0, value, {
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (latest) => {
            element.textContent = `${prefix}${formatNumber(Number(latest.toFixed(decimals)))}${suffix}`;
          },
        });
        return () => controls.stop();
      },
      { amount: 0.6 },
    );
  }, [value, suffix, prefix]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
}

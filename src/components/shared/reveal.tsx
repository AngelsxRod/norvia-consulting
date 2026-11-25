"use client";

import { animate, inView } from "motion";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Revela el contenido al entrar en pantalla. El HTML estático siempre es visible:
 * solo los elementos que están fuera de la vista al hidratar se ocultan para
 * animarse después, de modo que nada desaparece si JavaScript falla.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    element.style.opacity = "0";
    element.style.transform = "translateY(18px)";
    const stop = inView(
      element,
      () => {
        animate(
          element,
          { opacity: 1, transform: "translateY(0px)" },
          { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        );
      },
      { amount: 0.15 },
    );
    return () => {
      stop();
      element.style.opacity = "";
      element.style.transform = "";
    };
  }, [delay]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}

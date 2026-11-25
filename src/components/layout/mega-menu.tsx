"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Pictogram } from "@/components/brand/pictogram";

import type { MegaGroup } from "./nav-types";

type MegaMenuProps = {
  group: MegaGroup;
  onNavigate: () => void;
};

export function MegaMenu({ group, onNavigate }: MegaMenuProps) {
  return (
    <motion.div
      id={`mega-${group.id}`}
      role="region"
      aria-label={`Submenú de ${group.label}`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-(--shadow-float) lg:block"
      onKeyDown={(event) => {
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
        const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("a"));
        const index = links.indexOf(document.activeElement as HTMLAnchorElement);
        if (index === -1) return;
        event.preventDefault();
        const next = event.key === "ArrowDown" ? index + 1 : index - 1;
        links[(next + links.length) % links.length]?.focus();
      }}
    >
      <div className="container-wide grid grid-cols-12 gap-10 py-10">
        <div className="col-span-3 flex flex-col justify-between gap-8 border-r border-line pr-8">
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-polar">{group.label}</p>
            <p className="text-lg leading-snug">{group.intro}</p>
          </div>
          <Link
            href={group.href}
            onClick={onNavigate}
            className="group/link inline-flex min-h-11 items-center gap-2 font-medium text-ink underline decoration-polar/50 underline-offset-[6px] hover:text-polar"
          >
            {group.overviewLabel}
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover/link:translate-x-1"
            />
          </Link>
        </div>
        <ul className="col-span-9 grid grid-cols-2 gap-x-6 xl:grid-cols-4">
          {group.items.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03 * index, duration: 0.2 }}
            >
              <Link
                href={item.href}
                onClick={onNavigate}
                className="group/item flex h-full flex-col gap-2 border-t border-line py-4 pr-2 transition-colors hover:border-polar focus-visible:border-polar"
              >
                <Pictogram
                  name={item.pictogram}
                  className="size-7 text-slate transition-colors group-hover/item:text-ink"
                />
                <span className="font-medium group-hover/item:text-polar">{item.name}</span>
                <span className="text-sm leading-snug text-slate">{item.description}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

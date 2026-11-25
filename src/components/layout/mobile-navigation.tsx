"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { NavLink } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

import type { MegaGroup } from "./nav-types";

type MobileNavigationProps = {
  groups: MegaGroup[];
  links: NavLink[];
  company: NavLink[];
  pathname: string;
};

export function MobileNavigation({ groups, links, company, pathname }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => setOpen(false);
  const linkClass = (href: string) =>
    cn("flex min-h-12 items-center text-lg font-medium", pathname.startsWith(href) && "text-polar");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}
        aria-label="Abrir menú"
      >
        <Menu aria-hidden className="size-5" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full gap-0 overflow-y-auto bg-paper p-0 data-[side=right]:sm:max-w-md"
      >
        <div className="flex h-(--header-height) items-center border-b border-line px-5">
          <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
          <Logo accent="var(--color-polar)" />
        </div>
        <nav aria-label="Móvil" className="flex flex-1 flex-col px-5 py-4">
          <ul className="flex flex-col">
            {groups.map((group) => {
              const isOpen = expanded === group.id;
              return (
                <li key={group.id} className="border-b border-line">
                  <div className="flex items-center justify-between gap-2">
                    <Link href={group.href} onClick={close} className={linkClass(group.href)}>
                      {group.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`mobile-${group.id}`}
                      aria-label={`${isOpen ? "Ocultar" : "Mostrar"} ${group.label}`}
                      onClick={() => setExpanded(isOpen ? null : group.id)}
                      className="flex size-12 items-center justify-center"
                    >
                      <ChevronDown
                        aria-hidden
                        className={cn("size-5 transition-transform", isOpen && "rotate-180")}
                      />
                    </button>
                  </div>
                  <ul id={`mobile-${group.id}`} hidden={!isOpen} className="pb-3 pl-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className="flex min-h-11 items-center text-[0.95rem] text-slate hover:text-ink aria-[current=page]:text-polar"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
            {[...links, ...company].map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link href={link.href} onClick={close} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-4 pt-8">
            <Link href="/contacto/" onClick={close} className={buttonVariants({ size: "lg" })}>
              Hablemos de su proyecto
            </Link>
            <p className="text-xs leading-relaxed text-slate">{site.disclaimer}</p>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

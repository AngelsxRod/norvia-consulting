"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import type { NavLink } from "@/data/navigation";
import { cn } from "@/lib/utils";

import { MegaMenu } from "./mega-menu";
import { MobileNavigation } from "./mobile-navigation";
import type { MegaGroup } from "./nav-types";
import { SavedItemsButton } from "./saved-items";

type SiteHeaderProps = {
  groups: MegaGroup[];
  links: NavLink[];
  company: NavLink[];
};

const HOVER_DELAY = 120;

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader({ groups, links, company }: SiteHeaderProps) {
  const pathname = usePathname();
  const [openId, setOpenId] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const close = () => setOpenId(null);

  useEffect(() => {
    if (!openId) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      triggerRefs.current[openId]?.focus();
      setOpenId(null);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpenId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openId]);

  const scheduleOpen = (id: string | null, event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setOpenId(id), HOVER_DELAY);
  };

  const activeGroup = groups.find((group) => group.id === openId);
  const companyActive = company.some((link) => isActivePath(pathname, link.href));

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm supports-[backdrop-filter]:bg-paper/85"
      onPointerLeave={(event) => scheduleOpen(null, event)}
    >
      <a
        href="#contenido"
        className="sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Saltar al contenido
      </a>
      <div className="container-wide flex h-(--header-height) items-center justify-between gap-6">
        <Link
          href="/"
          className="flex min-h-11 items-center"
          aria-label="Norvia — inicio"
          onClick={() => close()}
        >
          <Logo descriptor accent="var(--color-polar)" />
        </Link>

        <nav aria-label="Principal" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-0.5 xl:gap-1">
            {groups.map((group) => {
              const open = openId === group.id;
              const active = isActivePath(pathname, group.href);
              return (
                <li
                  key={group.id}
                  className="relative flex h-full items-center"
                  onPointerEnter={(event) => scheduleOpen(group.id, event)}
                >
                  <Link
                    href={group.href}
                    onClick={() => close()}
                    aria-current={pathname === group.href ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center pl-2.5 text-[0.92rem] font-medium whitespace-nowrap transition-colors hover:text-polar xl:pl-3",
                      active && "text-polar",
                    )}
                  >
                    {group.label}
                  </Link>
                  <button
                    ref={(node) => {
                      triggerRefs.current[group.id] = node;
                    }}
                    type="button"
                    aria-expanded={open}
                    aria-controls={`mega-${group.id}`}
                    aria-label={`${open ? "Ocultar" : "Mostrar"} submenú de ${group.label}`}
                    onClick={() => setOpenId(open ? null : group.id)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        setOpenId(group.id);
                        requestAnimationFrame(() =>
                          document.querySelector<HTMLAnchorElement>(`#mega-${group.id} a`)?.focus(),
                        );
                      }
                    }}
                    className="flex size-9 items-center justify-center rounded-sm text-slate transition-colors hover:text-ink"
                  >
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-4 transition-transform duration-(--duration-base)",
                        open && "rotate-180",
                      )}
                    />
                  </button>
                  <ActiveBar active={active || open} />
                </li>
              );
            })}
            {links.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href} className="relative flex h-full items-center">
                  <Link
                    href={link.href}
                    onPointerEnter={(event) => scheduleOpen(null, event)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "flex min-h-11 items-center px-2.5 text-[0.92rem] font-medium whitespace-nowrap transition-colors hover:text-polar xl:px-3",
                      active && "text-polar",
                    )}
                  >
                    {link.label}
                  </Link>
                  <ActiveBar active={active} />
                </li>
              );
            })}
            <li
              className="relative flex h-full items-center"
              onPointerEnter={(event) => scheduleOpen("company", event)}
            >
              <button
                ref={(node) => {
                  triggerRefs.current.company = node;
                }}
                type="button"
                aria-expanded={openId === "company"}
                aria-controls="mega-company"
                onClick={() => setOpenId(openId === "company" ? null : "company")}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setOpenId("company");
                    requestAnimationFrame(() =>
                      document.querySelector<HTMLAnchorElement>("#mega-company a")?.focus(),
                    );
                  }
                }}
                className={cn(
                  "flex min-h-11 items-center gap-1 px-2.5 text-[0.92rem] font-medium transition-colors hover:text-polar xl:px-3",
                  companyActive && "text-polar",
                )}
              >
                Compañía
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-4 text-slate transition-transform duration-(--duration-base)",
                    openId === "company" && "rotate-180",
                  )}
                />
              </button>
              <ActiveBar active={companyActive || openId === "company"} />
              <AnimatePresence>
                {openId === "company" ? (
                  <motion.div
                    id="mega-company"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full right-0 w-60 border border-line bg-white p-2 shadow-(--shadow-float)"
                  >
                    <ul>
                      {company.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => close()}
                            aria-current={pathname === link.href ? "page" : undefined}
                            className="flex min-h-11 items-center justify-between px-3 text-sm font-medium hover:bg-mist focus-visible:bg-mist aria-[current=page]:text-polar"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <SavedItemsButton />
          <Link
            href="/contacto/"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex lg:hidden xl:inline-flex",
            )}
            onClick={() => close()}
          >
            Hablemos
          </Link>
          <MobileNavigation groups={groups} links={links} company={company} pathname={pathname} />
        </div>
      </div>

      <AnimatePresence>
        {activeGroup ? (
          <MegaMenu key={activeGroup.id} group={activeGroup} onNavigate={() => close()} />
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function ActiveBar({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-x-2.5 -bottom-px h-0.5 origin-left bg-polar transition-transform duration-(--duration-base) ease-(--ease-out-norvia)",
        active ? "scale-x-100" : "scale-x-0",
      )}
    />
  );
}

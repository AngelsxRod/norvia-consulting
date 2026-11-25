"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  label?: string;
};

export function Pagination({
  page,
  pageCount,
  onPageChange,
  label = "Paginación",
}: PaginationProps) {
  if (pageCount <= 1) return null;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const itemClass =
    "inline-flex size-11 items-center justify-center rounded-sm border font-mono text-sm transition-colors disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav aria-label={label} className="flex items-center gap-2">
      <button
        type="button"
        className={cn(itemClass, "border-line hover:border-ink")}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft className="size-4" aria-hidden />
      </button>
      <ul className="flex items-center gap-2">
        {pages.map((number) => (
          <li key={number}>
            <button
              type="button"
              className={cn(
                itemClass,
                number === page ? "border-ink bg-ink text-paper" : "border-line hover:border-ink",
              )}
              onClick={() => onPageChange(number)}
              aria-current={number === page ? "page" : undefined}
              aria-label={`Página ${number}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={cn(itemClass, "border-line hover:border-ink")}
        onClick={() => onPageChange(page + 1)}
        disabled={page === pageCount}
        aria-label="Página siguiente"
      >
        <ChevronRight className="size-4" aria-hidden />
      </button>
    </nav>
  );
}

"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { useSavedHydration } from "@/hooks/use-hydrated-store";
import { cn } from "@/lib/utils";
import { type SavedItem, useSavedStore } from "@/stores/saved-store";

export function SaveButton({ item, tone = "light" }: { item: SavedItem; tone?: "light" | "dark" }) {
  const hydrated = useSavedHydration();
  const saved = useSavedStore((state) => state.items.some((i) => i.href === item.href));
  const toggle = useSavedStore((state) => state.toggle);
  const isSaved = hydrated && saved;

  return (
    <button
      type="button"
      onClick={() => toggle(item)}
      aria-pressed={isSaved}
      className={cn(
        buttonVariants({ variant: tone === "light" ? "outline" : "outline-light", size: "sm" }),
      )}
    >
      {isSaved ? <BookmarkCheck aria-hidden /> : <Bookmark aria-hidden />}
      {isSaved ? "Guardado" : "Guardar"}
    </button>
  );
}

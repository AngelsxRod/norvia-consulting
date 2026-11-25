"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type SavedKind = "case" | "article";

export type SavedItem = {
  kind: SavedKind;
  slug: string;
  title: string;
  href: string;
};

type SavedState = {
  items: SavedItem[];
  toggle: (item: SavedItem) => void;
  remove: (href: string) => void;
  clear: () => void;
};

/**
 * Lista de lectura compartida entre los botones «Guardar» de casos y artículos
 * y el panel de guardados del header. Se persiste en LocalStorage.
 */
export const useSavedStore = create<SavedState>()(
  persist(
    (set) => ({
      items: [],
      toggle: (item) =>
        set((state) =>
          state.items.some((saved) => saved.href === item.href)
            ? { items: state.items.filter((saved) => saved.href !== item.href) }
            : { items: [item, ...state.items] },
        ),
      remove: (href) => set((state) => ({ items: state.items.filter((i) => i.href !== href) })),
      clear: () => set({ items: [] }),
    }),
    {
      name: "norvia-saved",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);

"use client";

import { Bookmark, X } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSavedHydration } from "@/hooks/use-hydrated-store";
import { cn } from "@/lib/utils";
import { useSavedStore } from "@/stores/saved-store";

export function SavedItemsButton() {
  const hydrated = useSavedHydration();
  const items = useSavedStore((state) => state.items);
  const remove = useSavedStore((state) => state.remove);
  const clear = useSavedStore((state) => state.clear);
  const count = hydrated ? items.length : 0;

  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "relative")}
        aria-label={count ? `Guardados (${count})` : "Guardados"}
      >
        <Bookmark aria-hidden className="size-5" />
        {count ? (
          <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-polar font-mono text-[0.6rem] text-white">
            {count}
          </span>
        ) : null}
      </DialogTrigger>
      <DialogContent className="gap-6 rounded-sm bg-paper p-6 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Lista de lectura</DialogTitle>
          <DialogDescription>
            Casos y artículos guardados en este navegador. No se envían a ningún servidor.
          </DialogDescription>
        </DialogHeader>
        {count === 0 ? (
          <p className="border border-dashed border-line-strong/60 p-6 text-sm text-slate">
            Aún no hay elementos guardados. Use el botón «Guardar» en cualquier caso de éxito o
            artículo.
          </p>
        ) : (
          <ul className="flex flex-col border-t border-line">
            {items.map((item) => (
              <li key={item.href} className="flex items-center gap-3 border-b border-line py-3">
                <span className="w-20 shrink-0 font-mono text-[0.65rem] tracking-wider text-slate uppercase">
                  {item.kind === "case" ? "Caso" : "Artículo"}
                </span>
                <Link href={item.href} className="flex-1 text-sm font-medium hover:text-polar">
                  {item.title}
                </Link>
                <button
                  type="button"
                  onClick={() => remove(item.href)}
                  className="flex size-9 items-center justify-center text-slate hover:text-danger"
                  aria-label={`Quitar «${item.title}»`}
                >
                  <X aria-hidden className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
        {count > 0 ? (
          <button
            type="button"
            onClick={clear}
            className="self-start text-sm text-slate underline underline-offset-4 hover:text-danger"
          >
            Vaciar lista
          </button>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

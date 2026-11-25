"use client";

import { useEffect, useSyncExternalStore } from "react";

import { useSavedStore } from "@/stores/saved-store";

let rehydrated = false;

/**
 * Rehidrata la lista de guardados desde LocalStorage después del primer render,
 * evitando diferencias entre el HTML estático y el cliente.
 */
export function useSavedHydration(): boolean {
  useEffect(() => {
    if (!rehydrated) {
      rehydrated = true;
      void useSavedStore.persist.rehydrate();
    }
  }, []);
  return useSyncExternalStore(
    (callback) => useSavedStore.persist.onFinishHydration(callback),
    () => useSavedStore.persist.hasHydrated(),
    () => false,
  );
}

"use client";

import { useCallback, useSyncExternalStore } from "react";

const EVENT = "norvia:querychange";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(EVENT, callback);
  };
}

/**
 * Estado de filtros sincronizado con la query string. En el HTML estático
 * (sin URL) se usa una cadena vacía, por lo que el catálogo completo siempre
 * está presente aunque JavaScript no se ejecute.
 */
export function useQueryState() {
  const search = useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
  const params = new URLSearchParams(search);

  const update = useCallback((changes: Record<string, string | null>) => {
    const next = new URLSearchParams(window.location.search);
    for (const [key, value] of Object.entries(changes)) {
      if (value) next.set(key, value);
      else next.delete(key);
    }
    const query = next.toString();
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}`,
    );
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { params, update };
}

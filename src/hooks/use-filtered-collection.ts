"use client";

import { normalize } from "@/lib/format";

import { useQueryState } from "./use-query-state";

type Matchers<T> = Record<string, (item: T, value: string) => boolean>;

type Options<T, M extends Matchers<T>> = {
  items: T[];
  matchers: M;
  searchText: (item: T) => string;
  pageSize?: number;
};

/**
 * Búsqueda, filtros y paginación sobre una colección local, con el estado
 * reflejado en la URL (`?q=…&industria=…&pagina=2`) para compartir resultados.
 */
export function useFilteredCollection<T, M extends Matchers<T>>({
  items,
  matchers,
  searchText,
  pageSize = Number.POSITIVE_INFINITY,
}: Options<T, M>) {
  const { params, update } = useQueryState();
  const keys = Object.keys(matchers) as (keyof M & string)[];

  const query = params.get("q") ?? "";
  const values = Object.fromEntries(keys.map((key) => [key, params.get(key) ?? ""])) as Record<
    keyof M & string,
    string
  >;

  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const results = items.filter((item) => {
    const matchesFilters = keys.every((key) => !values[key] || matchers[key]!(item, values[key]));
    if (!matchesFilters) return false;
    if (terms.length === 0) return true;
    const haystack = normalize(searchText(item));
    return terms.every((term) => haystack.includes(term));
  });

  const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
  const page = Math.min(Math.max(1, Number(params.get("pagina")) || 1), pageCount);
  const pageItems = Number.isFinite(pageSize)
    ? results.slice((page - 1) * pageSize, page * pageSize)
    : results;
  const filtered = Boolean(query) || keys.some((key) => Boolean(values[key]));

  return {
    query,
    values,
    results,
    pageItems,
    page,
    pageCount,
    filtered,
    total: items.length,
    setQuery: (value: string) => update({ q: value || null, pagina: null }),
    setValue: (key: keyof M & string, value: string) =>
      update({ [key]: value || null, pagina: null }),
    setPage: (value: number) => update({ pagina: value > 1 ? String(value) : null }),
    reset: () => update(Object.fromEntries([...keys, "q", "pagina"].map((key) => [key, null]))),
  };
}

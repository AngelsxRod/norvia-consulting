"use client";

import { AnimatePresence, motion } from "motion/react";

import { ArticleCard, type ArticleSummary } from "@/components/shared/article-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { FilterBar } from "@/features/filters/filter-bar";
import { ResultsCounter } from "@/features/filters/results-counter";
import { SearchInput } from "@/features/filters/search-input";
import { useFilteredCollection } from "@/hooks/use-filtered-collection";
import { cn } from "@/lib/utils";

type ArticleExplorerProps = {
  items: ArticleSummary[];
  categories: string[];
};

const PAGE_SIZE = 9;

export function ArticleExplorer({ items, categories }: ArticleExplorerProps) {
  const collection = useFilteredCollection({
    items,
    pageSize: PAGE_SIZE,
    matchers: { categoria: (item, value) => item.category === value },
    searchText: (item) => [item.title, item.excerpt, item.category, item.author].join(" "),
  });
  const active = collection.values.categoria;

  return (
    <div className="flex flex-col gap-8">
      <FilterBar
        label="Filtrar publicaciones"
        className="lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:items-end"
      >
        <SearchInput
          id="buscar-insights"
          label="Buscar publicaciones"
          placeholder="Tema, autor o palabra clave"
          value={collection.query}
          onChange={collection.setQuery}
        />
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2 text-sm font-medium">Categoría</legend>
          <div className="flex flex-wrap gap-2">
            {["", ...categories].map((category) => {
              const selected = active === category;
              return (
                <button
                  key={category || "todas"}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => collection.setValue("categoria", category)}
                  className={cn(
                    "min-h-10 rounded-xs border px-3 text-sm transition-colors",
                    selected
                      ? "border-ink bg-ink text-paper"
                      : "border-line bg-white text-ink hover:border-ink",
                  )}
                >
                  {category || "Todas"}
                </button>
              );
            })}
          </div>
        </fieldset>
      </FilterBar>

      <ResultsCounter
        count={collection.results.length}
        total={collection.total}
        noun={["publicación", "publicaciones"]}
        filtered={collection.filtered}
        onReset={collection.reset}
      />

      {collection.results.length === 0 ? (
        <EmptyState
          title="Sin publicaciones para esta búsqueda"
          description="Revise la ortografía o seleccione otra categoría."
          action={
            <button
              type="button"
              onClick={collection.reset}
              className="font-medium text-polar underline underline-offset-4"
            >
              Ver todas las publicaciones
            </button>
          }
        />
      ) : (
        <motion.ul layout className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {collection.pageItems.map((item) => (
              <motion.li
                key={item.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <ArticleCard article={item} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}

      <Pagination
        page={collection.page}
        pageCount={collection.pageCount}
        onPageChange={(page) => {
          collection.setPage(page);
          document.getElementById("catalogo")?.scrollIntoView({ block: "start" });
        }}
        label="Páginas de publicaciones"
      />
    </div>
  );
}

"use client";

import { AnimatePresence, motion } from "motion/react";

import { CaseStudyCard, type CaseStudySummary } from "@/components/shared/case-study-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Pagination } from "@/components/ui/pagination";
import { FilterBar } from "@/features/filters/filter-bar";
import { FilterSelect } from "@/features/filters/filter-select";
import { ResultsCounter } from "@/features/filters/results-counter";
import { SearchInput } from "@/features/filters/search-input";
import { useFilteredCollection } from "@/hooks/use-filtered-collection";

export type CaseStudyListItem = CaseStudySummary & {
  industry: string;
  industryName: string;
  services: string[];
  stack: string[];
  clientDescription: string;
};

type Option = { value: string; label: string };

type CaseStudyExplorerProps = {
  items: CaseStudyListItem[];
  industryOptions: Option[];
  serviceOptions: Option[];
  technologyOptions: Option[];
};

const PAGE_SIZE = 6;

export function CaseStudyExplorer({
  items,
  industryOptions,
  serviceOptions,
  technologyOptions,
}: CaseStudyExplorerProps) {
  const collection = useFilteredCollection({
    items,
    pageSize: PAGE_SIZE,
    matchers: {
      industria: (item, value) => item.industry === value,
      servicio: (item, value) => item.services.includes(value),
      tecnologia: (item, value) => item.stack.includes(value),
    },
    searchText: (item) =>
      [item.title, item.client, item.summary, item.industryName, ...item.stack].join(" "),
  });

  return (
    <div className="flex flex-col gap-8">
      <FilterBar label="Filtrar casos de éxito" className="md:grid-cols-2 xl:grid-cols-4">
        <SearchInput
          id="buscar-casos"
          label="Buscar"
          placeholder="Cliente, tecnología o resultado"
          value={collection.query}
          onChange={collection.setQuery}
        />
        <FilterSelect
          id="filtro-industria"
          label="Industria"
          allLabel="Todas las industrias"
          options={industryOptions}
          value={collection.values.industria}
          onChange={(value) => collection.setValue("industria", value)}
        />
        <FilterSelect
          id="filtro-servicio"
          label="Servicio"
          allLabel="Todos los servicios"
          options={serviceOptions}
          value={collection.values.servicio}
          onChange={(value) => collection.setValue("servicio", value)}
        />
        <FilterSelect
          id="filtro-tecnologia"
          label="Tecnología"
          allLabel="Todas las tecnologías"
          options={technologyOptions}
          value={collection.values.tecnologia}
          onChange={(value) => collection.setValue("tecnologia", value)}
        />
      </FilterBar>

      <ResultsCounter
        count={collection.results.length}
        total={collection.total}
        noun={["caso", "casos"]}
        filtered={collection.filtered}
        onReset={collection.reset}
      />

      {collection.results.length === 0 ? (
        <EmptyState
          title="No encontramos casos con esos criterios"
          description="Pruebe con otra combinación de filtros o una búsqueda más general."
          action={
            <button
              type="button"
              onClick={collection.reset}
              className="font-medium text-polar underline underline-offset-4"
            >
              Ver todos los casos
            </button>
          }
        />
      ) : (
        <motion.ul layout className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
                <CaseStudyCard
                  caseStudy={item}
                  industryName={item.industryName}
                  headingLevel="h2"
                />
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
        label="Páginas de casos de éxito"
      />
    </div>
  );
}

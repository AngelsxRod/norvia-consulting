"use client";

import { AnimatePresence, motion } from "motion/react";

import { JobCard } from "@/components/shared/job-card";
import { EmptyState } from "@/components/ui/empty-state";
import { FilterBar } from "@/features/filters/filter-bar";
import { FilterSelect } from "@/features/filters/filter-select";
import { ResultsCounter } from "@/features/filters/results-counter";
import { SearchInput } from "@/features/filters/search-input";
import { useFilteredCollection } from "@/hooks/use-filtered-collection";
import type { Job } from "@/types/content";

type JobExplorerProps = {
  jobs: Job[];
  departments: string[];
  modes: string[];
  seniorities: string[];
};

const toOptions = (values: string[]) => values.map((value) => ({ value, label: value }));

export function JobExplorer({ jobs, departments, modes, seniorities }: JobExplorerProps) {
  const collection = useFilteredCollection({
    items: jobs,
    matchers: {
      departamento: (job, value) => job.department === value,
      modalidad: (job, value) => job.mode === value,
      nivel: (job, value) => job.seniority === value,
    },
    searchText: (job) => [job.title, job.summary, job.location, ...job.technologies].join(" "),
  });

  return (
    <div className="flex flex-col gap-8">
      <FilterBar label="Filtrar vacantes" className="md:grid-cols-2 xl:grid-cols-4">
        <SearchInput
          id="buscar-vacantes"
          label="Buscar"
          placeholder="Cargo o tecnología"
          value={collection.query}
          onChange={collection.setQuery}
        />
        <FilterSelect
          id="filtro-departamento"
          label="Departamento"
          allLabel="Todos"
          options={toOptions(departments)}
          value={collection.values.departamento}
          onChange={(value) => collection.setValue("departamento", value)}
        />
        <FilterSelect
          id="filtro-modalidad"
          label="Modalidad"
          allLabel="Todas"
          options={toOptions(modes)}
          value={collection.values.modalidad}
          onChange={(value) => collection.setValue("modalidad", value)}
        />
        <FilterSelect
          id="filtro-nivel"
          label="Seniority"
          allLabel="Todos"
          options={toOptions(seniorities)}
          value={collection.values.nivel}
          onChange={(value) => collection.setValue("nivel", value)}
        />
      </FilterBar>

      <ResultsCounter
        count={collection.results.length}
        total={collection.total}
        noun={["vacante", "vacantes"]}
        filtered={collection.filtered}
        onReset={collection.reset}
      />

      {collection.results.length === 0 ? (
        <EmptyState
          title="No hay vacantes con esos criterios"
          description="Ajuste los filtros. Las vacantes de este sitio son ficticias y se publican con fines demostrativos."
          action={
            <button
              type="button"
              onClick={collection.reset}
              className="font-medium text-polar underline underline-offset-4"
            >
              Ver todas las vacantes
            </button>
          }
        />
      ) : (
        <ul className="border-b border-line">
          <AnimatePresence initial={false}>
            {collection.results.map((job) => (
              <motion.li
                key={job.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <JobCard job={job} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}

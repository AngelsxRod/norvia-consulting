import type { PictogramName } from "@/types/content";

export type MegaItem = {
  name: string;
  href: string;
  description: string;
  pictogram: PictogramName;
};

export type MegaGroup = {
  id: string;
  label: string;
  href: string;
  intro: string;
  overviewLabel: string;
  items: MegaItem[];
};

export type ExperienceCategory =
  | "employment"
  | "independent"
  | "education";

export type ExperienceFilterValue =
  | "all"
  | ExperienceCategory;

export interface ExperienceFilter {
  label: string;
  value: ExperienceFilterValue;
}

export interface RelatedProject {
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: string;

  startDate: string;
  endDate?: string;

  category: ExperienceCategory;

  company: string;
  role: string;
  team?: string;

  description?: string;

  impact?: string[];
  stack?: string[];

  relatedProject?: RelatedProject;

  defaultOpen?: boolean;
}
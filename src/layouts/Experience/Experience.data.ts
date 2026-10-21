import type {
  ExperienceCategory,
  ExperienceFilter,
  ExperienceItem,
} from "./Experience.types";

import {
  translations,
  type Locale,
  type TranslationDictionary,
} from "../../i18n/translations";

type ExperienceItemKey = keyof TranslationDictionary["experience"]["items"];

type RelatedProjectKey =
  keyof TranslationDictionary["experience"]["relatedProjects"];

interface ExperienceDate {
  year: number;
  month?: number;
}

interface ExperienceDataItem {
  id: string;

  translationKey: ExperienceItemKey;

  startDate: ExperienceDate;

  endDate?: ExperienceDate;

  category: ExperienceCategory;

  stack?: string[];

  relatedProject?: {
    translationKey: RelatedProjectKey;

    href: string;
  };

  defaultOpen?: boolean;
}

// ========================================================
// STRUCTURAL DATA
// ========================================================

const experienceData: ExperienceDataItem[] = [
  {
    id: "sembo-inspire",

    translationKey: "semboInspire",

    startDate: {
      year: 2024,
      month: 10,
    },

    endDate: {
      year: 2026,
      month: 2,
    },

    category: "employment",

    stack: ["React", "Next.js", "TypeScript", "Sanity", "Redis", "S3"],

    relatedProject: {
      translationKey: "marketplace",

      href: "https://www.sembo.com",
    },

    defaultOpen: true,
  },

  {
    id: "sembo-plan",

    translationKey: "semboPlan",

    startDate: {
      year: 2022,
      month: 3,
    },

    endDate: {
      year: 2024,
      month: 9,
    },

    category: "employment",

    stack: ["Vue 3", "TypeScript", "Pinia", "Vitest", "Cypress"],

    relatedProject: {
      translationKey: "tripPlanner",

      href: "https://www.sembo.com/travel/plan/overview",
    },
  },

  {
    id: "electrical-engineer",

    translationKey: "electricalEngineer",

    startDate: {
      year: 2019,
      month: 9,
    },

    endDate: {
      year: 2021,
      month: 6,
    },

    category: "employment",

    stack: ["VBA", "Automation"],
  },

  {
    id: "uib",

    translationKey: "uib",

    startDate: {
      year: 2015,
    },

    endDate: {
      year: 2019,
    },

    category: "education",
  },

  // {
  //   id: "portfolio",

  //   translationKey: "portfolio",

  //   startDate: {
  //     year: 2026,
  //   },

  //   category: "independent",

  //   stack: ["Astro", "React", "TypeScript", "SCSS"],

  //   relatedProject: {
  //     translationKey: "portfolio",

  //     href: "#top",
  //   },
  // },

  // {
  //   id: "vscode-extension",

  //   translationKey: "vscodeExtension",

  //   startDate: {
  //     year: 2026,
  //   },

  //   category: "independent",

  //   stack: ["TypeScript", "VS Code API"],
  // },
];

// ========================================================
// DATE FORMATTING
// ========================================================

function formatExperienceDate(date: ExperienceDate, locale: Locale): string {
  if (!date.month) {
    return String(date.year);
  }

  const value = new Date(Date.UTC(date.year, date.month - 1, 1));

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(value)
    .replace(".", "");
}

// ========================================================
// FILTERS
// ========================================================

export function getExperienceFilters(locale: Locale): ExperienceFilter[] {
  const t = translations[locale].experience.filters;

  return [
    {
      label: t.all,

      value: "all",
    },

    {
      label: t.employment,

      value: "employment",
    },

    {
      label: t.independent,

      value: "independent",
    },

    {
      label: t.education,

      value: "education",
    },
  ];
}

// ========================================================
// CATEGORY LABELS
// ========================================================

export function getExperienceCategoryLabels(
  locale: Locale,
): Record<ExperienceCategory, string> {
  const categories = translations[locale].experience.categories;

  return {
    employment: categories.employment,

    independent: categories.independent,

    education: categories.education,
  };
}

// ========================================================
// EXPERIENCE ITEMS
// ========================================================

export function getExperienceItems(locale: Locale): ExperienceItem[] {
  const experienceTranslations = translations[locale].experience;

  return experienceData.map(
    ({ translationKey, startDate, endDate, relatedProject, ...item }) => {
      const copy = experienceTranslations.items[translationKey];

      return {
        ...item,

        startDate: formatExperienceDate(startDate, locale),

        endDate: endDate ? formatExperienceDate(endDate, locale) : undefined,

        company: copy.company,

        role: copy.role,

        team: copy.team || undefined,

        description: copy.description,

        impact: [...copy.impact],

        relatedProject: relatedProject
          ? {
              label:
                experienceTranslations.relatedProjects[
                  relatedProject.translationKey
                ],

              href: relatedProject.href,
            }
          : undefined,
      };
    },
  );
}

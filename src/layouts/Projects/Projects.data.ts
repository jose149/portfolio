import type { ProjectType } from "./Projects.types";

import {
  translations,
  type Locale,
  type TranslationDictionary,
} from "../../i18n/translations";

type ProjectTranslationKey = keyof TranslationDictionary["projects"]["items"];

type TranslatedProjectFields =
  | "kind"
  | "tagline"
  | "role"
  | "contribution"
  | "highlights"
  | "previewImageAlt"
  | "context"
  | "contributionDetail"
  | "challenges"
  | "decisions"
  | "outcome"
  | "metrics"
  | "caseStudyDesktopImageAlt"
  | "caseStudyMobileImageAlt";

type ProjectData = Omit<ProjectType, TranslatedProjectFields> & {
  translationKey: ProjectTranslationKey;
};

const projectData: ProjectData[] = [
  {
    id: "eow",

    translationKey: "eow",

    // ====================================================
    // IDENTITY
    // ====================================================

    company: "Independent",

    title: "End of The World",

    // ====================================================
    // HERO
    // ====================================================

    timeline: "2026",

    stack: ["React", "Next.js", "TypeScript", "Sass", "Vercel"],

    previewImageSrc: "/images/eow.png",

    liveHref: "https://www.endoftheworld2026.com/",

    // ====================================================
    // CASE STUDY MEDIA
    // ====================================================

    caseStudyDesktopImageSrc: "/images/eow.png",

    caseStudyMobileImageSrc: "/images/eow-m.png",
  },
  // ======================================================
  // MARKETPLACE
  // ======================================================

  {
    id: "sembo-marketplace",

    translationKey: "marketplace",

    // ====================================================
    // IDENTITY
    // ====================================================

    company: "Sembo",

    title: "Marketplace",

    // ====================================================
    // HERO
    // ====================================================

    timeline: "2024 — 2026",

    stack: ["React", "Next.js", "TypeScript", "Sanity", "Redis", "S3"],

    previewImageSrc: "/images/marketplace.png",

    liveHref: "https://www.sembo.com",

    // ====================================================
    // CASE STUDY MEDIA
    // ====================================================

    caseStudyDesktopImageSrc: "/images/marketplace.png",

    caseStudyMobileImageSrc: "/images/marketplaceMobile.png",
  },

  // ======================================================
  // TRIPPLANNER
  // ======================================================

  {
    id: "sembo-tripplanner",

    translationKey: "tripPlanner",

    // ====================================================
    // IDENTITY
    // ====================================================

    company: "Sembo",

    title: "TripPlanner",

    // ====================================================
    // HERO
    // ====================================================

    timeline: "2022 — 2024",

    stack: ["Vue 3", "TypeScript", "Pinia", "Vitest", "Cypress", "SCSS"],

    previewImageSrc: "/images/tripPlanner.png",

    liveHref: "https://www.sembo.com/travel/plan/overview",

    // ====================================================
    // CASE STUDY MEDIA
    // ====================================================

    caseStudyDesktopImageSrc: "/images/tripPlanner.png",

    caseStudyMobileImageSrc: "/images/tripPlannerMobile.png",
  },
];

export function getProjects(locale: Locale): ProjectType[] {
  const projectTranslations = translations[locale].projects.items;

  return projectData.map(({ translationKey, ...project }) => {
    const translatedFields = projectTranslations[translationKey];

    return {
      ...project,
      ...translatedFields,
    } as ProjectType;
  });
}

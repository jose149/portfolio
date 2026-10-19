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

    liveHref:
      "https://www.sembo.com/travel/plan/overview?pax=rpp&day=2026-09-30&i1=00ot&i2=polygon-id:517571+fltr:07000000000000000000000000sug:2ht&i3=00ot",

    // ====================================================
    // CASE STUDY MEDIA
    // ====================================================

    caseStudyDesktopImageSrc: "/images/tripPlanner.png",

    caseStudyMobileImageSrc: "/images/tripPlannerMobile.png",
  },
];

export function getProjects(locale: Locale): ProjectType[] {
  const projectTranslations = translations[locale].projects.items;

  return projectData.map(({ translationKey, ...project }) => ({
    ...project,

    ...projectTranslations[translationKey],
  }));
}

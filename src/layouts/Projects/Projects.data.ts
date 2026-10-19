import type { ProjectType } from "./Projects.types";

export const projects: ProjectType[] = [
  // ======================================================
  // TRIPPLANNER
  // ======================================================

  {
    id: "sembo-marketplace",

    // ====================================================
    // IDENTITY
    // ====================================================

    company: "Sembo",

    kind: "Professional",

    title: "Marketplace",

    tagline: "AI-powered travel booking marketplace",

    // ====================================================
    // HERO
    // ====================================================

    role: "Frontend Engineer",

    timeline: "2024 — 2026",

    contribution:
      "Delivered product features with React and Next.js while improving accessibility, SEO and content delivery through a headless CMS and advanced caching architecture.",

    stack: ["React", "Next.js", "TypeScript", "Sanity", "Redis", "S3"],

    highlights: [
      "Production marketplace",
      "Accessibility compliant",
      "SEO optimized",
      "Automated CMS cache invalidation",
    ],

    // Replace these with the final Marketplace images.
    previewImageSrc: "/images/marketplace.png",

    previewImageAlt: "Sembo Marketplace travel discovery experience",

    liveHref: "https://www.sembo.com",

    // ====================================================
    // CASE STUDY
    // ====================================================

    context:
      "Marketplace focused on the inspiration and discovery side of Sembo's customer journey. The platform needed to support continuously evolving editorial content and product features while remaining fast, discoverable by search engines and accessible to users.",

    contributionDetail:
      "I developed prioritized product features using React, Next.js and TypeScript, collaborating with Product and Design during refinement to align technical implementation with business goals. I integrated headless CMS workflows, worked on SEO indexing and accessibility, and partnered with the architect on a caching architecture using Redis and S3 with automated invalidation through Sanity webhooks. I also supported frontend requirements beyond the UI by implementing API endpoints with Express, TypeScript, Zod and MySQL and coordinating with backend and data teams.",

    challenges: [
      {
        title: "Keeping editorial content synchronized",
        description:
          "Content managed through the headless CMS needed to remain aggressively cached for performance while still becoming visible to users immediately after editors published changes.",
      },
      {
        title: "Performance versus content freshness",
        description:
          "The platform needed an effective caching strategy without creating stale content or requiring manual intervention whenever content changed.",
      },
      {
        title: "SEO and accessibility at product scale",
        description:
          "The marketplace had to remain discoverable by search engines while meeting accessibility requirements across continuously evolving pages and features.",
      },
      {
        title: "Cross-functional product delivery",
        description:
          "Features required coordination between Product, Design, Marketing, frontend, backend and data teams, with technical constraints considered during refinement rather than only during implementation.",
      },
    ],

    decisions: [
      {
        title: "Combine Redis and S3 caching",
        description:
          "Together with the architect, I worked on a caching strategy that balanced fast content delivery with the requirements of a content-driven production platform.",
      },
      {
        title: "Automate cache invalidation",
        description:
          "Sanity webhooks were used to invalidate affected cached content automatically when editors published changes, avoiding stale data while preserving caching benefits.",
      },
      {
        title: "Treat accessibility and SEO as product requirements",
        description:
          "Accessibility compliance and search indexing were incorporated into feature development instead of being handled as separate post-development improvements.",
      },
      {
        title: "Build supporting API functionality when needed",
        description:
          "Express endpoints with TypeScript, Zod and MySQL were implemented when frontend product requirements required functionality beyond the existing service interfaces.",
      },
    ],

    outcome:
      "The marketplace evolved with new customer-facing features while improving its accessibility, search visibility and content-delivery architecture. Automated invalidation allowed CMS changes to remain synchronized with heavily cached production content without requiring manual cache management.",

    metrics: [],

    // ====================================================
    // CASE STUDY MEDIA
    // ====================================================

    caseStudyDesktopImageSrc: "/images/marketplace.png",

    caseStudyDesktopImageAlt: "Sembo Marketplace desktop experience",

    caseStudyMobileImageSrc: "/images/marketplaceMobile.png",

    caseStudyMobileImageAlt: "Sembo Marketplace mobile experience",
  },
  {
    id: "sembo-tripplanner",

    // ====================================================
    // IDENTITY
    // ====================================================

    company: "Sembo",

    kind: "Professional",

    title: "TripPlanner",

    tagline: "Travel planning and booking platform",

    // ====================================================
    // HERO
    // ====================================================

    role: "Frontend Developer",

    timeline: "2022 — 2024",

    contribution:
      "Built booking and search flows for a production travel platform, improving frontend quality and reducing Google Maps operational costs by 38%.",

    stack: ["Vue 3", "TypeScript", "Pinia", "Vitest", "Cypress", "SCSS"],

    highlights: [
      "Production booking platform",
      "38% lower Google Maps costs",
      "Booking & search flows",
      "Cross-functional development",
    ],

    previewImageSrc: "/images/tripPlanner.png",

    previewImageAlt: "TripPlanner travel planning and booking experience",

    liveHref:
      "https://www.sembo.com/travel/plan/overview?pax=rpp&day=2026-09-30&i1=00ot&i2=polygon-id:517571+fltr:07000000000000000000000000sug:2ht&i3=00ot",

    // ====================================================
    // CASE STUDY
    // ====================================================

    context:
      "TripPlanner is part of Sembo's travel planning experience, where customers can search for destinations, build a trip and move through complex booking flows involving multiple travel products and services.",

    contributionDetail:
      "I developed booking, search and core product features using Vue 3, TypeScript and Pinia, working closely with UX/UI and backend engineers to turn product requirements and designs into production-ready functionality. I also focused on maintainability and quality by introducing stricter code standards and strengthening the automated testing strategy across unit, integration and end-to-end tests.",

    challenges: [
      {
        title: "Complex booking and search flows",
        description:
          "Travel planning involves interconnected states and user decisions across search, destination selection and booking, requiring predictable frontend behaviour throughout the complete flow.",
      },
      {
        title: "Maintaining quality as the product evolved",
        description:
          "New functionality had to be added to an actively developed production application without making the codebase progressively harder to maintain or increasing regression risk.",
      },
      {
        title: "Google Maps operational costs",
        description:
          "The existing Google Maps integration generated unnecessary requests, creating an opportunity to redesign the request strategy and reduce external API costs.",
      },
    ],

    decisions: [
      {
        title: "Strengthen automated testing",
        description:
          "Unit and integration tests with Vitest together with Cypress end-to-end coverage were used to make important booking flows safer to evolve and reduce regression risk.",
      },
      {
        title: "Enforce consistent code quality",
        description:
          "Clean Code practices together with strict ESLint and Prettier rules helped keep an expanding frontend codebase more predictable and maintainable.",
      },
      {
        title: "Redesign the Google Maps request strategy",
        description:
          "The integration was reworked to avoid unnecessary API requests, reducing Google Maps operational costs by 38%.",
      },
    ],

    outcome:
      "TripPlanner continued evolving as a production travel product with new booking and search capabilities, stronger automated quality controls and a more efficient Google Maps integration.",

    metrics: [
      {
        value: "38%",
        label: "Reduction in Google Maps operational costs",
      },
      {
        value: "2.5 yrs",
        label: "Continuous product development",
      },
    ],

    // ====================================================
    // CASE STUDY MEDIA
    // ====================================================

    caseStudyDesktopImageSrc: "/images/tripPlanner.png",

    caseStudyDesktopImageAlt: "TripPlanner desktop booking experience",

    caseStudyMobileImageSrc: "/images/tripPlannerMobile.png",

    caseStudyMobileImageAlt: "TripPlanner mobile booking experience",
  },

  // ======================================================
  // MARKETPLACE
  // ======================================================
];

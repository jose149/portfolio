import type {
  ExperienceCategory,
  ExperienceFilter,
  ExperienceItem,
} from "./Experience.types";

export const experienceFilters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Employment",
    value: "employment",
  },
  {
    label: "Independent work",
    value: "independent",
  },
  {
    label: "Education",
    value: "education",
  },
] satisfies ExperienceFilter[];

export const experienceCategoryLabels: Record<
  ExperienceCategory,
  string
> = {
  employment: "Employment",
  independent: "Independent work",
  education: "Education",
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "sembo-inspire",

    startDate: "Oct 2024",
    endDate: "Feb 2026",

    category: "employment",

    company: "Sembo · Stena Line",
    role: "Frontend Engineer",
    team: "Inspire team",

    description:
      "Product-focused frontend development across React, Next.js and content-driven platforms, working closely with Product, Design and Backend teams.",

    impact: [
      "Improved SEO indexing and achieved full accessibility compliance.",
      "Integrated headless CMS workflows with Sanity.",
      "Engineered Redis / S3 caching strategies and automated cache invalidation through webhooks.",
    ],

    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Sanity",
      "Redis",
      "S3",
    ],

    relatedProject: {
      label: "Marketplace",
      href: "#sembo-marketplace",
    },

    defaultOpen: true,
  },

  {
    id: "sembo-plan",

    startDate: "Mar 2022",
    endDate: "Sep 2024",

    category: "employment",

    company: "Sembo · Stena Line",
    role: "Frontend Developer",
    team: "Plan team",

    description:
      "Built and evolved booking, search and core product flows for Sembo's production travel platform.",

    impact: [
      "Developed booking and search experiences using Vue 3, TypeScript and Pinia.",
      "Strengthened frontend quality through unit, integration and end-to-end testing.",
      "Redesigned the Google Maps request strategy, reducing operational costs by 38%.",
    ],

    stack: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vitest",
      "Cypress",
    ],

    relatedProject: {
      label: "TripPlanner",
      href: "#sembo-tripplanner",
    },
  },

  {
    id: "electrical-engineer",

    startDate: "Sep 2019",
    endDate: "Jun 2021",

    category: "employment",

    company:
      "Spark Ibérica · Omexom · Autosolar",

    role: "Electrical Engineer",

    description:
      "Engineering and automation experience before transitioning professionally into software development.",

    impact: [
      "Developed internal automation tools to support engineering workflows.",
    ],

    stack: [
      "VBA",
      "Automation",
    ],
  },

  {
    id: "uib",

    startDate: "2015",
    endDate: "2019",

    category: "education",

    company:
      "Universitat de les Illes Balears (UIB)",

    role: "Electronics and Computer Engineering",

    description:
      "Engineering foundation across electronics, computing, systems and analytical problem solving.",
  },

  {
    id: "portfolio",

    startDate: "2026",

    category: "independent",

    company: "Personal Portfolio",

    role: "Design & Development",

    description:
      "Editorial portfolio exploring product storytelling, component architecture and frontend craft.",

    stack: [
      "Astro",
      "React",
      "TypeScript",
      "SCSS",
    ],

    relatedProject: {
      label: "View portfolio",
      href: "#top",
    },
  },

  {
    id: "vscode-extension",

    startDate: "2026",

    category: "independent",

    company: "VS Code Extension",

    role: "Personal project",

    description:
      "Developer tooling created around a real workflow problem, with a focus on simplicity and developer experience.",

    stack: [
      "TypeScript",
      "VS Code API",
    ],
  },
];
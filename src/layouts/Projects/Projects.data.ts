export type ProjectType = {
  id: number;

  title: string;
  subtitle: string;
  description: string;
  purpose: string;
  contributionSummary: string;
  webCategory?: WebCategory;
  webArchitecture?: WebArchitecture;
  renderingStrategy?: RenderingStrategy;

  role: string;
  stack: string[];

  liveHref?: string;
  liveLabel?: string;

  previewImageSrc: string;
  previewImageAlt: string;

  caseStudyDesktopImageSrc?: string;
  caseStudyDesktopImageAlt?: string;
  caseStudyMobileImageSrc?: string;
  caseStudyMobileImageAlt?: string;

  outlineItems?: {
    number: string;
    title: string;
  }[];

  context: string;
  myRole: string;
  challenges: string[];
  outcomeText: string;
  techHighlights: string[];
  metrics: {
    value: string;
    label: string;
  }[];
};

// interface OutlineItem {
//   number: string;
//   title: string;
// }

// interface Metric {
//   value: string;
//   label: string;
// }

/**
 * What the website/product fundamentally is.
 */
export enum WebCategory {
  CorporateWebsite = "Corporate Website",
  Portfolio = "Portfolio",
  Blog = "Blog",
  NewsWebsite = "News Website",
  DocumentationWebsite = "Documentation Website",

  LandingPage = "Landing Page",
  Microsite = "Microsite",
  EventWebsite = "Event Website",

  Ecommerce = "E-commerce",
  Marketplace = "Marketplace",
  TravelMarketplace = "Travel Marketplace",
  BookingPlatform = "Booking Platform",

  WebApplication = "Web Application",
  SaaS = "SaaS",
  Dashboard = "Dashboard",
  AdminPanel = "Admin Panel",
  CustomerPortal = "Customer Portal",

  SocialNetwork = "Social Network",
  CommunityPlatform = "Community Platform",
  Forum = "Forum",

  SearchEngine = "Search Engine",
  Directory = "Directory",
  Aggregator = "Aggregator",

  EducationalPlatform = "Educational Platform",
  StreamingPlatform = "Streaming Platform",
}

/**
 * How pages/views are structured and navigation behaves.
 */
export enum WebArchitecture {
  StaticSite = "Static Site",
  MultiPageApplication = "Multi-Page Application",
  SinglePageApplication = "Single-Page Application",
  HybridApplication = "Hybrid Application",
}

/**
 * How the HTML/content is rendered.
 *
 * A website may use more than one rendering strategy.
 */
export enum RenderingStrategy {
  StaticSiteGeneration = "Static Site Generation",
  ServerSideRendering = "Server-Side Rendering",
  ClientSideRendering = "Client-Side Rendering",
  IncrementalStaticRegeneration = "Incremental Static Regeneration",
  PartialRendering = "Partial Rendering",
}

export const projects: ProjectType[] = [
  {
    id: 0,
    title: "TripPlanner",
    subtitle: "All-in-one travel planning platform",

    description:
      "A full-stack trip planning platform to discover destinations, organize itineraries, and collaborate in real time.",

    purpose:
      "Simplify travel planning by bringing destinations, itineraries, bookings and collaboration into a single experience.",

    contributionSummary:
      "Built and evolved core product features across the frontend and backend, including trip planning flows, application architecture and external service integrations.",

    role: "Full-Stack Engineer",

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "AWS S3",
    ],

    webCategory: WebCategory.TravelMarketplace,
    webArchitecture: WebArchitecture.SinglePageApplication,
    renderingStrategy: RenderingStrategy.ClientSideRendering,

    liveHref: "https://example.com",

    previewImageSrc: "/images/tripPlanner.png",
    previewImageAlt: "TripPlanner application preview",

    caseStudyDesktopImageSrc: "/images/projects/tripplanner/desktop.webp",
    caseStudyDesktopImageAlt: "TripPlanner desktop application",

    caseStudyMobileImageSrc: "/images/projects/tripplanner/mobile.webp",
    caseStudyMobileImageAlt: "TripPlanner mobile application",

    context:
      "Travel planning is often fragmented across maps, spreadsheets, booking websites and messaging applications. The goal was to bring the most important parts of that process into a single coherent experience.",

    myRole:
      "I worked as a Full-Stack Engineer, contributing to product features, frontend architecture, backend integrations and the evolution of the platform.",

    challenges: [
      "Designing an intuitive itinerary experience with complex underlying data.",
      "Keeping different parts of a trip synchronized and easy to understand.",
      "Maintaining performance as the amount of information displayed increased.",
      "Integrating external services without leaking their complexity into the user experience.",
    ],

    outcomeText:
      "The resulting platform provides a more coherent way of planning a trip while keeping the interface understandable as the underlying product grows in complexity.",

    techHighlights: [
      "Modular frontend architecture",
      "Typed application boundaries",
      "Server-side data handling",
      "External service integrations",
    ],

    metrics: [
      {
        value: "2 yrs",
        label: "Continuous development",
      },
      {
        value: "Full-stack",
        label: "Product ownership",
      },
      {
        value: "Production",
        label: "Real-world environment",
      },
      {
        value: "Team",
        label: "Collaborative development",
      },
    ],
  },

  // {
  //   id: 1,
  //   title: "CodeAtlas",
  //   subtitle: "Developer tooling & code intelligence",

  //   description:
  //     "A developer-focused tool designed to make complex repositories easier to explore, understand and work with.",

  //   purpose:
  //     "Help developers understand and navigate complex codebases by presenting relevant structural information in a clear and accessible way.",

  //   contributionSummary:
  //     "Designed and implemented the core experience with a focus on reusable components, information hierarchy and an extensible frontend architecture.",

  //   role: "Software Engineer",

  //   stack: ["React", "TypeScript", "Node.js", "REST APIs", "SCSS"],

  //   liveHref: "https://example.com",

  //   previewImageSrc: "/images/projects/codeatlas/preview.webp",
  //   previewImageAlt: "CodeAtlas application preview",

  //   caseStudyDesktopImageSrc: "/images/projects/codeatlas/desktop.webp",
  //   caseStudyDesktopImageAlt: "CodeAtlas desktop interface",

  //   context:
  //     "Large codebases quickly become difficult to navigate. The project explores ways of exposing useful structural information without overwhelming developers with even more visual noise.",

  //   myRole:
  //     "I worked on the architecture and implementation of the experience, with particular attention to reusable components, information hierarchy and maintainability.",

  //   challenges: [
  //     "Presenting large quantities of technical information without creating visual overload.",
  //     "Creating reusable components for several related developer workflows.",
  //     "Keeping interactions predictable and fast.",
  //     "Designing the architecture so additional tools could be incorporated later.",
  //   ],

  //   outcomeText:
  //     "The result is an interface focused on clarity and progressive disclosure, allowing developers to access additional information only when it becomes useful.",

  //   techHighlights: [
  //     "Component-driven architecture",
  //     "Reusable React patterns",
  //     "Progressive disclosure",
  //     "Strong TypeScript boundaries",
  //   ],

  //   metrics: [
  //     {
  //       value: "React",
  //       label: "Interactive UI",
  //     },
  //     {
  //       value: "TS",
  //       label: "Type-safe architecture",
  //     },
  //     {
  //       value: "DX",
  //       label: "Developer focused",
  //     },
  //     {
  //       value: "Modular",
  //       label: "Extensible structure",
  //     },
  //   ],
  // },
];

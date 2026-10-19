// src/i18n/translations.ts

export const localeConfig = {
  en: {
    label: "English",
    shortLabel: "EN",
  },

  es: {
    label: "Español",
    shortLabel: "ES",
  },
} as const;

export type Locale = keyof typeof localeConfig;

export const DEFAULT_LOCALE: Locale = "en";

// ========================================================
// ENGLISH
// ========================================================

const en = {
  // ======================================================
  // NAVBAR
  // ======================================================

  navbar: {
    brandLabel: "José Crespí — Back to home",

    navigationLabel: "Main navigation",

    home: "Home",

    projects: "Projects",

    about: "About",

    experience: "Experience",

    contact: "Contact",

    connect: "Let's connect",

    language: {
      label: "Change language",
    },

    mobile: {
      navigationLabel: "Mobile navigation",

      open: "Open navigation",

      close: "Close navigation",
    },
  },

  // ======================================================
  // HERO
  // ======================================================

  hero: {
    jobTitle: "SOFTWARE ENGINEER",

    detailNote: "Building with purpose",

    contact: "CONTACT ME",

    viewWork: "VIEW MY WORK",
  },

  // ======================================================
  // PROJECTS
  // ======================================================

  projects: {
    title: "Projects",

    allProjects: "All projects",

    labels: {
      problem: "Problem",

      contribution: "Contribution",

      mainStack: "Main stack",

      context: "Context",

      role: "My role",

      challenges: "Key challenges",

      outcome: "Outcome",

      techHighlights: "Tech highlights",

      decisions: "Technical decisions",
    },

    actions: {
      viewLive: "View live site",

      viewCaseStudy: "View case study",

      closeCaseStudy: "Close case study",
    },

    items: {
      marketplace: {
        kind: "Professional",

        tagline: "AI-powered travel booking marketplace",

        role: "Frontend Engineer",

        contribution:
          "Delivered product features with React and Next.js while improving accessibility, SEO and content delivery through a headless CMS and advanced caching architecture.",

        highlights: [
          "Production marketplace",
          "Accessibility compliant",
          "SEO optimized",
          "Automated CMS cache invalidation",
        ],

        previewImageAlt: "Sembo Marketplace travel discovery experience",

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

        caseStudyDesktopImageAlt: "Sembo Marketplace desktop experience",

        caseStudyMobileImageAlt: "Sembo Marketplace mobile experience",
      },

      tripPlanner: {
        kind: "Professional",

        tagline: "Travel planning and booking platform",

        role: "Frontend Developer",

        contribution:
          "Built booking and search flows for a production travel platform, improving frontend quality and reducing Google Maps operational costs by 38%.",

        highlights: [
          "Production booking platform",
          "38% lower Google Maps costs",
          "Booking & search flows",
          "Cross-functional development",
        ],

        previewImageAlt: "TripPlanner travel planning and booking experience",

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

        caseStudyDesktopImageAlt: "TripPlanner desktop booking experience",

        caseStudyMobileImageAlt: "TripPlanner mobile booking experience",
      },
    },
  },

  // ======================================================
  // ABOUT
  // ======================================================

  about: {
    title: "About me",

    portraitAlt: "Portrait of Jose Crespí",

    statement: {
      title:
        "I turn complex product problems into clear, maintainable experiences.",

      text: "I like understanding why we build something before deciding how to build it.",
    },

    items: {
      problems: {
        title: "Problems I enjoy solving",

        text: "Complex products. Clear experiences.",
      },

      work: {
        title: "How I work",

        text: "Close to Product, Design and Engineering.",
      },

      beyondFrontend: {
        title: "Beyond frontend",

        text: "Product thinking, APIs and systems.",
      },

      care: {
        title: "What I care about",

        text: "Quality, simplicity and real impact.",
      },
    },

    principlesHeading: "Working principles",

    principles: {
      clarity: {
        title: "Clarity",

        text: "Understand before building.",
      },

      craft: {
        title: "Craft",

        text: "Details matter.",
      },

      ownership: {
        title: "Ownership",

        text: "Care about the outcome.",
      },
    },
  },

  // ======================================================
  // EXPERIENCE
  // ======================================================

  experience: {
    title: "Experience",

    resume: "Download resume",

    filterAriaLabel: "Filter experience",

    filters: {
      all: "All",

      employment: "Employment",

      independent: "Independent work",

      education: "Education",
    },

    categories: {
      employment: "Employment",

      independent: "Independent work",

      education: "Education",
    },

    actions: {
      details: "Details",

      close: "Close",
    },

    labels: {
      selectedImpact: "Selected impact",

      techStack: "Tech stack",

      relatedProject: "Related project",
    },

    relatedProjects: {
      marketplace: "Marketplace",

      tripPlanner: "TripPlanner",

      portfolio: "View portfolio",
    },

    items: {
      semboInspire: {
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
      },

      semboPlan: {
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
      },

      electricalEngineer: {
        company: "Spark Ibérica · Omexom · Autosolar",

        role: "Electrical Engineer",

        team: "",

        description:
          "Engineering and automation experience before transitioning professionally into software development.",

        impact: [
          "Developed internal automation tools to support engineering workflows.",
        ],
      },

      uib: {
        company: "Universitat de les Illes Balears (UIB)",

        role: "Electronics and Computer Engineering",

        team: "",

        description:
          "Engineering foundation across electronics, computing, systems and analytical problem solving.",

        impact: [],
      },

      portfolio: {
        company: "Personal Portfolio",

        role: "Design & Development",

        team: "",

        description:
          "Editorial portfolio exploring product storytelling, component architecture and frontend craft.",

        impact: [],
      },

      vscodeExtension: {
        company: "VS Code Extension",

        role: "Personal project",

        team: "",

        description:
          "Developer tooling created around a real workflow problem, with a focus on simplicity and developer experience.",

        impact: [],
      },
    },
  },

  // ======================================================
  // CONTACT
  // ======================================================

  contact: {
    title: "Contact",

    available: "Available",

    availabilityText:
      "Available for selected projects and frontend opportunities.",

    replyTime: "I usually reply within 1–2 working days.",

    items: {
      email: "Email",

      linkedin: "LinkedIn",

      github: "GitHub",

      location: "Location",

      locationValue: "Mallorca, Spain · CET/CEST",

      working: "Working",

      workingValue: "Remote-friendly",
    },

    form: {
      name: {
        label: "Name",

        placeholder: "Your name",
      },

      email: {
        label: "Email",

        placeholder: "you@company.com",
      },

      company: {
        label: "Company / organisation",

        placeholder: "Your company (optional)",
      },

      subject: {
        label: "What would you like to discuss?",

        placeholder: "Project, opportunity, collaboration...",
      },

      message: {
        label: "Message",

        placeholder: "Tell me more about your idea, project or question...",
      },

      submit: "Start the conversation",

      privacy: "Your details remain private and are used only to reply.",
    },

    mail: {
      name: "Name",

      email: "Email",

      company: "Company",
    },
  },

  // ======================================================
  // COMMON
  // ======================================================

  common: {
    linkedin: "LinkedIn",
  },
} as const;

// ========================================================
// TRANSLATION SHAPE
// ========================================================

type TranslationShape<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly TranslationShape<U>[]
    : T extends object
      ? {
          [K in keyof T]: TranslationShape<T[K]>;
        }
      : T;

export type TranslationDictionary = TranslationShape<typeof en>;

// ========================================================
// SPANISH
// ========================================================

const es = {
  // ======================================================
  // NAVBAR
  // ======================================================

  navbar: {
    brandLabel: "José Crespí — Volver al inicio",

    navigationLabel: "Navegación principal",

    home: "Inicio",

    projects: "Proyectos",

    about: "Sobre mí",

    experience: "Experiencia",

    contact: "Contacto",

    connect: "Contacta conmigo",

    language: {
      label: "Cambiar idioma",
    },

    mobile: {
      navigationLabel: "Navegación móvil",

      open: "Abrir navegación",

      close: "Cerrar navegación",
    },
  },

  // ======================================================
  // HERO
  // ======================================================

  hero: {
    jobTitle: "INGENIERO DE SOFTWARE",

    detailNote: "Construyendo con propósito",

    contact: "CONTÁCTAME",

    viewWork: "VER MI TRABAJO",
  },

  // ======================================================
  // PROJECTS
  // ======================================================

  projects: {
    title: "Proyectos",

    allProjects: "Todos los proyectos",

    labels: {
      problem: "Problema",

      contribution: "Contribución",

      mainStack: "Tecnologías principales",

      context: "Contexto",

      role: "Mi rol",

      challenges: "Principales retos",

      outcome: "Resultado",

      techHighlights: "Aspectos técnicos destacados",

      decisions: "Decisiones técnicas",
    },

    actions: {
      viewLive: "Ver sitio web",

      viewCaseStudy: "Ver caso de estudio",

      closeCaseStudy: "Cerrar caso de estudio",
    },

    items: {
      marketplace: {
        kind: "Profesional",

        tagline: "Marketplace de reservas de viajes impulsado por IA",

        role: "Ingeniero Frontend",

        contribution:
          "Desarrollé funcionalidades de producto con React y Next.js mientras mejoraba la accesibilidad, el SEO y la distribución de contenido mediante un CMS headless y una arquitectura avanzada de caché.",

        highlights: [
          "Marketplace en producción",
          "Cumplimiento de accesibilidad",
          "SEO optimizado",
          "Invalidación automática de caché del CMS",
        ],

        previewImageAlt:
          "Experiencia de descubrimiento de viajes de Sembo Marketplace",

        context:
          "Marketplace centrado en la fase de inspiración y descubrimiento del recorrido del cliente de Sembo. La plataforma debía soportar contenido editorial y funcionalidades de producto en continua evolución, manteniéndose rápida, accesible para los usuarios y fácilmente indexable por los motores de búsqueda.",

        contributionDetail:
          "Desarrollé funcionalidades de producto priorizadas utilizando React, Next.js y TypeScript, colaborando con Producto y Diseño durante el refinamiento para alinear la implementación técnica con los objetivos de negocio. Integré flujos de trabajo con un CMS headless, trabajé en la indexación SEO y la accesibilidad, y colaboré con el arquitecto en una arquitectura de caché basada en Redis y S3 con invalidación automática mediante webhooks de Sanity. También cubrí necesidades frontend más allá de la interfaz implementando endpoints de API con Express, TypeScript, Zod y MySQL y coordinándome con los equipos de backend y datos.",

        challenges: [
          {
            title: "Mantener sincronizado el contenido editorial",

            description:
              "El contenido gestionado mediante el CMS headless debía permanecer fuertemente cacheado para mantener el rendimiento y, al mismo tiempo, ser visible para los usuarios inmediatamente después de que los editores publicaran cambios.",
          },

          {
            title: "Rendimiento frente a frescura del contenido",

            description:
              "La plataforma necesitaba una estrategia de caché eficaz sin generar contenido obsoleto ni requerir intervención manual cada vez que cambiaba el contenido.",
          },

          {
            title: "SEO y accesibilidad a escala de producto",

            description:
              "El marketplace debía seguir siendo fácilmente indexable por los motores de búsqueda y cumplir los requisitos de accesibilidad en páginas y funcionalidades que evolucionaban continuamente.",
          },

          {
            title: "Desarrollo de producto entre múltiples equipos",

            description:
              "Las funcionalidades requerían coordinación entre Producto, Diseño, Marketing, frontend, backend y datos, teniendo en cuenta las restricciones técnicas durante el refinamiento y no únicamente durante la implementación.",
          },
        ],

        decisions: [
          {
            title: "Combinar caché con Redis y S3",

            description:
              "Junto con el arquitecto, trabajé en una estrategia de caché que equilibrase una entrega rápida del contenido con las necesidades de una plataforma de producción fuertemente orientada al contenido.",
          },

          {
            title: "Automatizar la invalidación de caché",

            description:
              "Se utilizaron webhooks de Sanity para invalidar automáticamente el contenido cacheado afectado cuando los editores publicaban cambios, evitando datos obsoletos sin renunciar a las ventajas del cacheado.",
          },

          {
            title: "Tratar accesibilidad y SEO como requisitos de producto",

            description:
              "El cumplimiento de accesibilidad y la indexación en buscadores se incorporaron al desarrollo de funcionalidades en lugar de abordarse como mejoras independientes posteriores al desarrollo.",
          },

          {
            title: "Desarrollar funcionalidad de API cuando fuese necesaria",

            description:
              "Se implementaron endpoints con Express, TypeScript, Zod y MySQL cuando las necesidades del producto frontend requerían funcionalidades que no estaban cubiertas por las interfaces de servicio existentes.",
          },
        ],

        outcome:
          "El marketplace evolucionó incorporando nuevas funcionalidades orientadas al cliente mientras mejoraban su accesibilidad, visibilidad en buscadores y arquitectura de distribución de contenido. La invalidación automática permitió mantener sincronizados los cambios del CMS con contenido intensivamente cacheado en producción sin requerir gestión manual de la caché.",

        metrics: [],

        caseStudyDesktopImageAlt:
          "Experiencia de escritorio de Sembo Marketplace",

        caseStudyMobileImageAlt: "Experiencia móvil de Sembo Marketplace",
      },

      tripPlanner: {
        kind: "Profesional",

        tagline: "Plataforma de planificación y reserva de viajes",

        role: "Desarrollador Frontend",

        contribution:
          "Desarrollé flujos de búsqueda y reserva para una plataforma de viajes en producción, mejorando la calidad del frontend y reduciendo un 38 % los costes operativos de Google Maps.",

        highlights: [
          "Plataforma de reservas en producción",
          "38 % menos de costes en Google Maps",
          "Flujos de búsqueda y reserva",
          "Desarrollo entre equipos",
        ],

        previewImageAlt:
          "Experiencia de planificación y reserva de viajes de TripPlanner",

        context:
          "TripPlanner forma parte de la experiencia de planificación de viajes de Sembo, donde los clientes pueden buscar destinos, construir un viaje y avanzar por flujos de reserva complejos que involucran múltiples productos y servicios turísticos.",

        contributionDetail:
          "Desarrollé funcionalidades de reserva, búsqueda y producto utilizando Vue 3, TypeScript y Pinia, trabajando estrechamente con UX/UI y desarrolladores backend para convertir requisitos de producto y diseños en funcionalidades preparadas para producción. También me centré en la mantenibilidad y la calidad introduciendo estándares de código más estrictos y reforzando la estrategia de pruebas automatizadas mediante pruebas unitarias, de integración y end-to-end.",

        challenges: [
          {
            title: "Flujos complejos de búsqueda y reserva",

            description:
              "La planificación de viajes implica estados y decisiones de usuario interconectados entre búsqueda, selección de destinos y reserva, lo que exige un comportamiento frontend predecible a lo largo de todo el flujo.",
          },

          {
            title: "Mantener la calidad mientras evolucionaba el producto",

            description:
              "Era necesario añadir nuevas funcionalidades a una aplicación de producción en desarrollo activo sin hacer que el código fuese progresivamente más difícil de mantener ni aumentar el riesgo de regresiones.",
          },

          {
            title: "Costes operativos de Google Maps",

            description:
              "La integración existente con Google Maps generaba peticiones innecesarias, lo que ofrecía una oportunidad para rediseñar la estrategia de solicitudes y reducir los costes de la API externa.",
          },
        ],

        decisions: [
          {
            title: "Reforzar las pruebas automatizadas",

            description:
              "Las pruebas unitarias y de integración con Vitest, junto con la cobertura end-to-end mediante Cypress, permitieron evolucionar los flujos de reserva importantes con mayor seguridad y reducir el riesgo de regresiones.",
          },

          {
            title: "Aplicar estándares consistentes de calidad de código",

            description:
              "Las prácticas de Clean Code, junto con reglas estrictas de ESLint y Prettier, ayudaron a mantener una base de código frontend creciente más predecible y mantenible.",
          },

          {
            title: "Rediseñar la estrategia de peticiones de Google Maps",

            description:
              "La integración se rediseñó para evitar peticiones innecesarias a la API, reduciendo los costes operativos de Google Maps en un 38 %.",
          },
        ],

        outcome:
          "TripPlanner continuó evolucionando como producto de viajes en producción mediante nuevas capacidades de búsqueda y reserva, controles automatizados de calidad más sólidos y una integración de Google Maps más eficiente.",

        metrics: [
          {
            value: "38 %",

            label: "Reducción de los costes operativos de Google Maps",
          },

          {
            value: "2,5 años",

            label: "Desarrollo continuo del producto",
          },
        ],

        caseStudyDesktopImageAlt:
          "Experiencia de reserva de TripPlanner en escritorio",

        caseStudyMobileImageAlt:
          "Experiencia de reserva de TripPlanner en móvil",
      },
    },
  },

  // ======================================================
  // ABOUT
  // ======================================================

  about: {
    title: "Sobre mí",

    portraitAlt: "Retrato de Jose Crespí",

    statement: {
      title:
        "Convierto problemas de producto complejos en experiencias claras y mantenibles.",

      text: "Me gusta entender por qué construimos algo antes de decidir cómo construirlo.",
    },

    items: {
      problems: {
        title: "Problemas que disfruto resolviendo",

        text: "Productos complejos. Experiencias claras.",
      },

      work: {
        title: "Cómo trabajo",

        text: "Cerca de Producto, Diseño e Ingeniería.",
      },

      beyondFrontend: {
        title: "Más allá del frontend",

        text: "Visión de producto, APIs y sistemas.",
      },

      care: {
        title: "Lo que me importa",

        text: "Calidad, simplicidad e impacto real.",
      },
    },

    principlesHeading: "Principios de trabajo",

    principles: {
      clarity: {
        title: "Claridad",

        text: "Entender antes de construir.",
      },

      craft: {
        title: "Cuidado",

        text: "Los detalles importan.",
      },

      ownership: {
        title: "Responsabilidad",

        text: "Importa el resultado.",
      },
    },
  },

  // ======================================================
  // EXPERIENCE
  // ======================================================

  experience: {
    title: "Experiencia",

    resume: "Descargar currículum",

    filterAriaLabel: "Filtrar experiencia",

    filters: {
      all: "Todo",

      employment: "Experiencia laboral",

      independent: "Trabajo independiente",

      education: "Educación",
    },

    categories: {
      employment: "Experiencia laboral",

      independent: "Trabajo independiente",

      education: "Educación",
    },

    actions: {
      details: "Detalles",

      close: "Cerrar",
    },

    labels: {
      selectedImpact: "Impacto destacado",

      techStack: "Tecnologías",

      relatedProject: "Proyecto relacionado",
    },

    relatedProjects: {
      marketplace: "Marketplace",

      tripPlanner: "TripPlanner",

      portfolio: "Ver portfolio",
    },

    items: {
      semboInspire: {
        company: "Sembo · Stena Line",

        role: "Ingeniero Frontend",

        team: "Equipo Inspire",

        description:
          "Desarrollo frontend orientado a producto con React, Next.js y plataformas centradas en contenido, trabajando estrechamente con los equipos de Producto, Diseño y Backend.",

        impact: [
          "Mejoré la indexación SEO y contribuí al cumplimiento completo de los requisitos de accesibilidad.",
          "Integré flujos de trabajo de un CMS headless mediante Sanity.",
          "Desarrollé estrategias de caché con Redis y S3 y automatizamos su invalidación mediante webhooks.",
        ],
      },

      semboPlan: {
        company: "Sembo · Stena Line",

        role: "Desarrollador Frontend",

        team: "Equipo Plan",

        description:
          "Desarrollé y evolucioné flujos de reserva, búsqueda y funcionalidades principales de la plataforma de viajes de Sembo en producción.",

        impact: [
          "Desarrollé experiencias de búsqueda y reserva utilizando Vue 3, TypeScript y Pinia.",
          "Reforcé la calidad del frontend mediante pruebas unitarias, de integración y end-to-end.",
          "Rediseñé la estrategia de peticiones de Google Maps, reduciendo los costes operativos en un 38 %.",
        ],
      },

      electricalEngineer: {
        company: "Spark Ibérica · Omexom · Autosolar",

        role: "Ingeniero Eléctrico",

        team: "",

        description:
          "Experiencia en ingeniería y automatización antes de realizar la transición profesional al desarrollo de software.",

        impact: [
          "Desarrollé herramientas internas de automatización para apoyar los flujos de trabajo de ingeniería.",
        ],
      },

      uib: {
        company: "Universitat de les Illes Balears (UIB)",

        role: "Ingeniería Electrónica e Informática",

        team: "",

        description:
          "Base de ingeniería en electrónica, informática, sistemas y resolución analítica de problemas.",

        impact: [],
      },

      portfolio: {
        company: "Portfolio personal",

        role: "Diseño y desarrollo",

        team: "",

        description:
          "Portfolio editorial centrado en narrativa de producto, arquitectura de componentes y desarrollo frontend cuidado.",

        impact: [],
      },

      vscodeExtension: {
        company: "Extensión de VS Code",

        role: "Proyecto personal",

        team: "",

        description:
          "Herramienta para desarrolladores creada a partir de un problema real de flujo de trabajo, con especial atención a la simplicidad y la experiencia de desarrollo.",

        impact: [],
      },
    },
  },

  // ======================================================
  // CONTACT
  // ======================================================

  contact: {
    title: "Contacto",

    available: "Disponible",

    availabilityText:
      "Disponible para proyectos seleccionados y oportunidades de frontend.",

    replyTime: "Normalmente respondo en 1–2 días laborables.",

    items: {
      email: "Email",

      linkedin: "LinkedIn",

      github: "GitHub",

      location: "Ubicación",

      locationValue: "Mallorca, España · CET/CEST",

      working: "Modalidad",

      workingValue: "Trabajo remoto",
    },

    form: {
      name: {
        label: "Nombre",

        placeholder: "Tu nombre",
      },

      email: {
        label: "Email",

        placeholder: "tu@empresa.com",
      },

      company: {
        label: "Empresa / organización",

        placeholder: "Tu empresa (opcional)",
      },

      subject: {
        label: "¿De qué te gustaría hablar?",

        placeholder: "Proyecto, oportunidad, colaboración...",
      },

      message: {
        label: "Mensaje",

        placeholder: "Cuéntame más sobre tu idea, proyecto o pregunta...",
      },

      submit: "Iniciar conversación",

      privacy:
        "Tus datos permanecen privados y se utilizan únicamente para responderte.",
    },

    mail: {
      name: "Nombre",

      email: "Email",

      company: "Empresa",
    },
  },

  // ======================================================
  // COMMON
  // ======================================================

  common: {
    linkedin: "LinkedIn",
  },
} satisfies TranslationDictionary;

// ========================================================
// TRANSLATIONS
// ========================================================

export const translations = {
  en,
  es,
} satisfies Record<Locale, TranslationDictionary>;

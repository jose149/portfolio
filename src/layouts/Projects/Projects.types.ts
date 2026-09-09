export interface ProjectDecision {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export type ProjectKind = "Professional" | "Personal" | "Open Source";

export interface ProjectType {
  // ======================================================
  // IDENTITY
  // ======================================================

  id: string;

  company?: string;

  kind: ProjectKind;

  title: string;

  tagline: string;

  // ======================================================
  // HERO / RECRUITER VIEW
  // ======================================================

  role: string;

  timeline?: string;

  contribution: string;

  stack: string[];

  highlights?: string[];

  previewImageSrc: string;

  previewImageAlt: string;

  liveHref?: string;

  // ======================================================
  // CASE STUDY
  // ======================================================

  context?: string;

  contributionDetail?: string;

  challenges?: ProjectChallenge[];

  decisions?: ProjectDecision[];

  outcome?: string;

  metrics?: ProjectMetric[];

  // ======================================================
  // CASE STUDY MEDIA
  // ======================================================

  caseStudyDesktopImageSrc?: string;

  caseStudyDesktopImageAlt?: string;

  caseStudyMobileImageSrc?: string;

  caseStudyMobileImageAlt?: string;
}

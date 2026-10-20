export interface CtaLink {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/* ---------- Hero ---------- */

export interface HeroSlide {
  title: string[];
  highlight: string[];
  description: string;
  /** Max width of the description in design px. */
  descriptionWidth?: number;
  /** Description font size in px (defaults to 16). */
  descriptionSize?: number;
  /** Extra top offset (px) used to balance the text block vertically. */
  offset?: number;
}

export type HeroImage = {
  src: string;
  alt: string;
  intrinsic: [number, number];
} & (
  | {
      /** Positioned on a 1440px design stage: left/width are design px (scaled as %), top is px. */
      anchor?: "stage";
      left: number;
      top: number;
      width: number;
    }
  | {
      /** Full-height photo pinned to the right edge of the banner. */
      anchor: "right";
    }
);

export interface HeroContent {
  slides: HeroSlide[];
  image: HeroImage;
  /** Centre of the top-left decorative ring, in design px. */
  rings: { x: number; y: number };
}

/* ---------- Stream pages ---------- */

export type StreamTheme = "fashion" | "digital" | "interior";

export interface HeadingContent {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  mark?: "lg" | "sm";
  titleMaxWidth?: number;
  subtitleMaxWidth?: number;
}

export interface IconItem {
  icon: string;
  label: string;
}

export interface ProgramDetail {
  strong: string;
  text?: string;
}

export interface Program {
  image: ImageAsset;
  badge: string;
  title: string;
  details: ProgramDetail[];
  disciplines?: string;
}

export interface ProgramsContent {
  heading: HeadingContent;
  /** Wide cards with the image on the left (two per row). */
  featured?: Program[];
  /** Tall cards with the image on top (three per row). */
  grid?: Program[];
}

export interface CompareContent {
  heading: HeadingContent;
  columns: string[];
  rows: string[][];
  /** Text shown before the enquiry button, e.g. "Still unsure?". */
  ctaLead?: string;
  /** Narrow tables (two programs) are centred at 886px. */
  narrow?: boolean;
}

export interface CurriculumModule {
  title: string;
  tag?: string;
  items?: string[];
  text?: string;
}

export interface OutcomeItem {
  icon: string;
  title: string;
  text?: string;
}

export interface OutcomeContent {
  title: string;
  tagline?: string;
  items: OutcomeItem[];
}

export interface CurriculumContent {
  heading: HeadingContent;
  modules: CurriculumModule[];
  /** Interior uses a narrower, five-column module row. */
  narrow?: boolean;
  outcome: OutcomeContent;
}

export interface CareersContent {
  title: string;
  subtitle: string;
  mark?: "lg" | "sm";
  rows: IconItem[][];
}

export interface AudienceContent {
  title: string;
  subtitle: string;
  mark?: "lg" | "sm";
  items: string[];
}

export interface DifferenceContent {
  image: ImageAsset;
  /** Rendered image size in design px; the photo is cropped to fill it. */
  imageSize: [number, number];
  mark?: "lg" | "sm";
  /** Card label size in px. */
  textSize: number;
  items: IconItem[];
}

/** Sections whose top spacing can be tuned per page (the Figma frames use different gaps). */
export type StreamSection = "programs" | "compare" | "curriculum" | "careers" | "audience" | "difference" | "studio";

export interface StreamPageContent {
  theme: StreamTheme;
  /** Optional per-page top padding overrides in px (desktop only). */
  spacing?: Partial<Record<StreamSection, number>>;
  hero: HeroContent;
  features: IconItem[];
  programs: ProgramsContent;
  compare: CompareContent;
  curriculum: CurriculumContent;
  careers: CareersContent;
  audience: AudienceContent;
  difference: DifferenceContent;
}

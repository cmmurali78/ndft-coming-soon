export type StreamColor = "pink" | "yellow" | "blue";

export interface StreamLink {
  label: string;
  footerLabel: string;
  href: string;
  color: StreamColor;
}

export const streamLinks: StreamLink[] = [
  { label: "Fashion Design", footerLabel: "Fashion & Costume Design", href: "/fashion-design", color: "pink" },
  { label: "Interior & Spatial", footerLabel: "Interior & Spatial Design", href: "/interior-spatial", color: "yellow" },
  { label: "Digital Design", footerLabel: "Digital & Creative Media", href: "/digital-design", color: "blue" },
];

export const streamColorVar: Record<StreamColor, string> = {
  pink: "var(--pink)",
  yellow: "var(--yellow)",
  blue: "var(--blue)",
};

/** Stream pages carry an enrolment form; everywhere else "Apply" leads to the home CTA. */
export function applyHref(pathname: string | null): string {
  const isStreamPage = streamLinks.some((link) => link.href === pathname);
  return isStreamPage ? "#enrol" : "/#section-cta";
}

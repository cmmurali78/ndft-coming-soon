import type { CSSProperties } from "react";

/** Inline style that overrides a section's desktop top padding via the --space-top custom property. */
export function spaceTop(px?: number): CSSProperties | undefined {
  return px === undefined ? undefined : ({ "--space-top": `${px}px` } as CSSProperties);
}

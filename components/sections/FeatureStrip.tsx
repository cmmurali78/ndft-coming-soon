import Image from "next/image";
import type { IconItem } from "@/lib/types";
import styles from "./FeatureStrip.module.css";

/** Card width / gap per item count, taken from the Figma frames. */
const layout: Record<number, { width: number; gap: number }> = {
  4: { width: 205, gap: 84 },
  5: { width: 158, gap: 48 },
  6: { width: 186, gap: 14 },
};

/**
 * The hero's ring pattern continues faintly across the top of this panel in the design.
 * Ring centres are given in hero-stage coordinates; the panel sits 120px in and ~640px below the stage origin.
 */
function RingEcho({ x, y }: { x: number; y: number }) {
  const r = 101;
  const cols = [0, 155, 310, 465];
  const rows = [0, 130, 260, 390];
  return (
    <svg className={styles.rings} width="1200" height="120" viewBox="0 0 1200 120" aria-hidden="true">
      {rows.flatMap((ry) => cols.map((rx) => <circle key={`${rx}-${ry}`} cx={x - 120 + rx} cy={y - 250 + ry} r={r} />))}
    </svg>
  );
}

export default function FeatureStrip({ items, rings }: { items: IconItem[]; rings?: { x: number; y: number } }) {
  const { width, gap } = layout[items.length] ?? layout[6];
  return (
    <section className={`container ${styles.section}`} aria-label="Program highlights">
      <div
        className={styles.panel}
        style={
          {
            "--card-w": `${width}px`,
            "--card-gap": `${gap}px`,
            "--tablet-cols": items.length === 6 ? 3 : items.length,
          } as React.CSSProperties
        }
      >
        {rings && <RingEcho x={rings.x} y={rings.y} />}
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label} className={styles.card}>
              <Image src={item.icon} alt="" width={64} height={64} className={styles.icon} />
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

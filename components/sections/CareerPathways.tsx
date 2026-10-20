import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { CareersContent } from "@/lib/types";
import { spaceTop } from "@/lib/spacing";
import styles from "./CareerPathways.module.css";

export default function CareerPathways({ title, subtitle, mark, rows, space }: CareersContent & { space?: number }) {
  return (
    <section className={`container ${styles.section}`} style={spaceTop(space)}>
      <SectionHeading title={title} align="left" uppercase mark={mark} />
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.rows}>
        {rows.map((row, r) => (
          <ul key={r} className={styles.row} style={{ "--count": row.length } as React.CSSProperties}>
            {row.map((item) => (
              <li key={item.label} className={styles.card}>
                <Image src={item.icon} alt="" width={46} height={46} className={styles.icon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

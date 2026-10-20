import SectionHeading from "@/components/ui/SectionHeading";
import type { AudienceContent } from "@/lib/types";
import EnrolForm from "./EnrolForm";
import { spaceTop } from "@/lib/spacing";
import styles from "./AudienceSection.module.css";

const dotColors = ["var(--blue)", "var(--pink)", "var(--yellow)"];

export default function AudienceSection({
  title,
  subtitle,
  mark,
  items,
  stream,
  space,
}: AudienceContent & { stream: string; space?: number }) {
  return (
    <section className={`container ${styles.section}`} style={spaceTop(space)}>
      <div className={styles.intro}>
        <SectionHeading title={title} align="left" uppercase mark={mark} />
        <p className={styles.subtitle}>{subtitle}</p>
        <ul className={styles.list}>
          {items.map((item, i) => (
            <li key={item} style={{ "--dot": dotColors[i % dotColors.length] } as React.CSSProperties}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <EnrolForm stream={stream} />
    </section>
  );
}

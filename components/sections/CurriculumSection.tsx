import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { CurriculumContent } from "@/lib/types";
import { spaceTop } from "@/lib/spacing";
import styles from "./CurriculumSection.module.css";

export default function CurriculumSection({ heading, modules, narrow, outcome, space }: CurriculumContent & { space?: number }) {
  const detailed = outcome.items.some((item) => item.text);

  return (
    <section id="curriculum" className={`container ${styles.section}`} style={spaceTop(space)}>
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        subtitle={heading.subtitle}
        mark={heading.mark}
        titleMaxWidth={heading.titleMaxWidth}
        subtitleMaxWidth={heading.subtitleMaxWidth}
      />

      <div className={`${styles.modules} ${narrow ? styles.narrow : ""}`} style={{ "--count": modules.length } as React.CSSProperties}>
        {modules.map((module) => (
          <article key={module.title} className={styles.module}>
            <h3 className={styles.moduleTitle}>{module.title}</h3>
            {module.tag && <p className={styles.tag}>{module.tag}</p>}
            {module.text && <p className={styles.moduleText}>{module.text}</p>}
            {module.items && (
              <ul className={styles.list}>
                {module.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className={styles.outcome}>
        <Image src="/icons/stream.svg" alt="" width={33} height={14} className={styles.outcomeMark} />
        <p className={styles.outcomeLabel}>Outcome</p>
        <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
        {outcome.tagline && <p className={styles.tagline}>{outcome.tagline}</p>}
        <ul className={`${styles.outcomeGrid} ${detailed ? styles.detailed : ""}`} style={{ "--count": outcome.items.length } as React.CSSProperties}>
          {outcome.items.map((item) => (
            <li key={item.title} className={styles.outcomeCard}>
              <Image src={item.icon} alt="" width={46} height={46} className={styles.outcomeIcon} />
              <span className={styles.outcomeCardTitle}>{item.title}</span>
              {item.text && <span className={styles.outcomeCardText}>{item.text}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Program, ProgramsContent } from "@/lib/types";
import { spaceTop } from "@/lib/spacing";
import styles from "./ProgramsSection.module.css";

function ProgramCard({ program, layout }: { program: Program; layout: "featured" | "grid" }) {
  return (
    <article className={`${styles.card} ${styles[layout]}`}>
      <div className={styles.media}>
        <Image
          src={program.image.src}
          alt={program.image.alt}
          fill
          sizes={layout === "featured" ? "(max-width: 767px) 100vw, 280px" : "(max-width: 767px) 100vw, 370px"}
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <span className={styles.badge}>{program.badge}</span>
        <h3 className={styles.title}>{program.title}</h3>
        <ul className={styles.details}>
          {program.details.map((detail) => (
            <li key={detail.strong}>
              <strong>{detail.strong}</strong>
              {detail.text && <span>{detail.text}</span>}
            </li>
          ))}
        </ul>
        {program.disciplines && (
          <p className={styles.disciplines}>
            <strong>Disciplines Covered:</strong> {program.disciplines}
          </p>
        )}
        <a href="#enrol" className={`btn btn--primary btn--sm ${styles.apply}`}>
          Apply
        </a>
      </div>
    </article>
  );
}

export default function ProgramsSection({ heading, featured, grid, space }: ProgramsContent & { space?: number }) {
  return (
    <section id="programs" className={`container ${styles.section}`} style={spaceTop(space)}>
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        subtitle={heading.subtitle}
        mark={heading.mark}
        titleMaxWidth={heading.titleMaxWidth}
        subtitleMaxWidth={heading.subtitleMaxWidth}
      />
      {featured && (
        <div className={styles.featuredGrid}>
          {featured.map((program) => (
            <ProgramCard key={program.title} program={program} layout="featured" />
          ))}
        </div>
      )}
      {grid && (
        <div className={styles.cardGrid}>
          {grid.map((program) => (
            <ProgramCard key={program.title} program={program} layout="grid" />
          ))}
        </div>
      )}
    </section>
  );
}

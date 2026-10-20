import SectionHeading from "@/components/ui/SectionHeading";
import type { CompareContent } from "@/lib/types";
import { spaceTop } from "@/lib/spacing";
import styles from "./CompareSection.module.css";

function Cell({ value }: { value: string }) {
  if (value === "✓") {
    return (
      <svg className={styles.check} width="13" height="10" viewBox="0 0 13 10" fill="none" role="img" aria-label="Included">
        <path d="M1 5.2 4.6 8.8 12 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === "—") {
    return (
      <span className={styles.dash} role="img" aria-label="Not included">
        —
      </span>
    );
  }
  return <>{value}</>;
}

export default function CompareSection({ heading, columns, rows, ctaLead, narrow, space }: CompareContent & { space?: number }) {
  return (
    <section className={`container ${styles.section}`} style={spaceTop(space)}>
      <SectionHeading
        eyebrow={heading.eyebrow}
        title={heading.title}
        subtitle={heading.subtitle}
        mark={heading.mark}
        titleMaxWidth={heading.titleMaxWidth}
        subtitleMaxWidth={heading.subtitleMaxWidth}
      />

      <div className={`${styles.frame} ${narrow ? styles.narrow : ""}`}>
        <div className={styles.scroller} tabIndex={0} role="region" aria-label="Program comparison">
          <table className={styles.table} style={{ "--cols": columns.length } as React.CSSProperties}>
            <thead>
              <tr>
                <td className={styles.corner} />
                {columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ...values]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {values.map((value, i) => (
                    <td key={columns[i]}>
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.cta}>
        {ctaLead && <span>{ctaLead}</span>}
        <a href="#enrol" className="btn btn--primary">
          Enquire Now
        </a>
      </div>
    </section>
  );
}

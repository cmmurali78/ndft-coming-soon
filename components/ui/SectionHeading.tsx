import Image from "next/image";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: React.ReactNode;
  eyebrow?: string;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  /** Size of the three-circle brand mark above the heading. */
  mark?: "lg" | "sm" | "none";
  /** Uppercase display headings (e.g. "CAREER PATHWAYS"). */
  uppercase?: boolean;
  titleMaxWidth?: number;
  subtitleMaxWidth?: number;
  as?: "h1" | "h2";
  className?: string;
}

export default function SectionHeading({
  title,
  eyebrow,
  subtitle,
  align = "center",
  mark = "sm",
  uppercase = false,
  titleMaxWidth,
  subtitleMaxWidth,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={[styles.heading, styles[align], className].filter(Boolean).join(" ")}>
      {mark === "lg" && <Image src="/icons/mode.svg" alt="" width={118} height={50} className={styles.markLg} />}
      {mark === "sm" && <Image src="/icons/stream.svg" alt="" width={33} height={14} className={styles.markSm} />}
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Tag className={`${styles.title}${uppercase ? ` ${styles.upper}` : ""}`} style={{ maxWidth: titleMaxWidth }}>
        {title}
      </Tag>
      {subtitle && (
        <p className={styles.subtitle} style={{ maxWidth: subtitleMaxWidth }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

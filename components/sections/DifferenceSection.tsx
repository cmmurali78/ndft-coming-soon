import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { DifferenceContent } from "@/lib/types";
import styles from "./DifferenceSection.module.css";

export default function DifferenceSection({ image, imageSize, mark, textSize, items, space }: DifferenceContent & { space?: number }) {
  const [width, height] = imageSize;
  return (
    <section
      className={`container ${styles.section}`}
      style={
        {
          "--img-w": `${width}px`,
          "--img-h": `${height}px`,
          "--label-size": `${textSize}px`,
          ...(space !== undefined && { "--space-top": `${space}px` }),
        } as React.CSSProperties
      }
    >
      <div className={styles.media}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1199px) 100vw, 430px" className={styles.image} />
      </div>
      <div className={styles.content}>
        <SectionHeading title="The ADFT Difference" align="left" uppercase mark={mark} />
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.label} className={styles.card}>
              <Image src={item.icon} alt="" width={76} height={76} className={styles.icon} />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

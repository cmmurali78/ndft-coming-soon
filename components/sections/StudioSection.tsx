import Image from "next/image";
import { spaceTop } from "@/lib/spacing";
import styles from "./StudioSection.module.css";

/** Vertical version of the brand mark: blue / pink / yellow circles with coloured overlaps. */
function BrandDotsVertical() {
  const r = 42.5;
  const centers = [42.5, 99.5, 156.5];
  return (
    <svg className={styles.dots} width="85" height="199" viewBox="0 0 85 199" aria-hidden="true">
      <defs>
        <clipPath id="studio-dots-pink">
          <circle cx={r} cy={centers[1]} r={r} />
        </clipPath>
      </defs>
      <circle cx={r} cy={centers[0]} r={r} fill="#26A9E0" />
      <circle cx={r} cy={centers[1]} r={r} fill="#D58BBB" />
      <circle cx={r} cy={centers[2]} r={r} fill="#FCB614" />
      <circle cx={r} cy={centers[0]} r={r} fill="#4364AE" clipPath="url(#studio-dots-pink)" />
      <circle cx={r} cy={centers[2]} r={r} fill="#EF5323" clipPath="url(#studio-dots-pink)" />
    </svg>
  );
}

export default function StudioSection({ space }: { space?: number }) {
  return (
    <section className={`container ${styles.section}`} style={spaceTop(space)}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>The NADFT Experience</p>
        <h2 className={styles.title}>A Space to Imagine. A Studio to Create.</h2>
        <p className={styles.text}>Discover inspiring studios where creativity, technology and hands-on learning comes together.</p>
      </div>

      <div className={styles.feature}>
        <BrandDotsVertical />
        <Image
          src="/images/shared/studio-student.webp"
          alt="A smiling ADFT student celebrating"
          width={800}
          height={895}
          sizes="280px"
          className={styles.student}
        />
      </div>

      <div className={styles.gallery}>
        <div className={`${styles.photo} ${styles.photoWide}`}>
          <Image
            src="/images/shared/studio-reception.webp"
            alt="Naturals ADFT reception with stream display panels"
            fill
            sizes="(max-width: 767px) 100vw, 400px"
          />
        </div>
        <div className={styles.photo}>
          <Image src="/images/shared/studio-workspace.webp" alt="Design studio workspace with long work tables" fill sizes="200px" />
        </div>
        <div className={styles.photo}>
          <Image src="/images/shared/studio-lounge.webp" alt="Student lounge with white chairs" fill sizes="200px" />
        </div>
        <div className={styles.pager} aria-hidden="true">
          <span className={styles.pagerActive} />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

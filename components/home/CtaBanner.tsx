import Image from "next/image";
import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section id="section-cta" className={`container ${styles.section}`}>
      <div className={styles.frame}>
        <div className={styles.panel}>
          <span className={`${styles.circle} ${styles.circleSoft}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.circleBright}`} aria-hidden="true" />
          <Image
            src="/images/home/cta-students.webp"
            alt="Group of cheerful ADFT students giving a thumbs up"
            width={1059}
            height={1153}
            sizes="(max-width: 767px) 90vw, 520px"
            className={styles.students}
          />
          <div className={styles.content}>
            <Image src="/icons/mode.svg" alt="" width={118} height={50} className={styles.mark} />
            <h2 className={styles.title}>Ready to Begin?</h2>
            <p className={styles.text}>Admissions are open. Limited seats per batch.</p>
            <div className={styles.actions}>
              <a href="#section-streams" className="btn btn--white">
                Apply Now
              </a>
              <a href="#section-footer" className="btn btn--outline-light">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
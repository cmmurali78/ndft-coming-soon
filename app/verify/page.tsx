import type { Metadata } from "next";
import { ShieldCheck } from "@/components/ui/icons";
import VerifyForm from "./VerifyForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Verify Credential | Naturals ADFT",
  description:
    "Verify the authenticity of a Naturals ADFT certificate. Enter the certificate ID to view the holder's name, course and date of issue.",
};

export default function VerifyPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.badge}>
              <ShieldCheck size={16} /> Credential Verification
            </span>
            <h1 className={styles.heroTitle}>
              Verify Your <span>Naturals ADFT</span> Credential
            </h1>
            <p className={styles.heroSub}>
              Enter your certificate ID to instantly validate its authenticity and details.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introInner}>
            <span className={styles.introBadge}>
              <ShieldCheck size={16} /> Certificate Verification
            </span>
            <h2 className={styles.introTitle}>
              Verify Your Credentials. <span>Validate with Confidence.</span>
            </h2>
            <p className={styles.introText}>
              Naturals ADFT provides a secure way for students, employers and institutions to confirm the
              authenticity of ADFT certificates — validate achievements and authenticate candidate credentials with
              ease.
            </p>
            <p className={styles.introStrong}>
              Enter the certificate ID printed on the certificate to view its verification details.
            </p>
            <p className={styles.trustLine}>Trusted Credentials · Verified Achievements · Recognised Learning</p>
          </div>
        </div>
      </section>

      <section className={styles.lookupSection}>
        <div className="container">
          <VerifyForm />
        </div>
      </section>
    </div>
  );
}

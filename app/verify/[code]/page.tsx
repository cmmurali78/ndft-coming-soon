import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  User,
  BookOpen,
  Calendar,
  QrCode,
} from "@/components/ui/icons";
import { verifyStudent } from "@/lib/portal";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "Certificate Verified | Naturals ADFT",
  description: "Naturals ADFT student certificate verification result.",
};

export default async function StudentVerifyPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  if (!code) notFound();

  const result = await verifyStudent(code);

  if (!result.valid || !result.data) {
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
            </div>
          </div>
        </section>

        <section className={styles.lookupSection}>
          <div className="container">
            <div className={styles.alert} role="alert">
              <AlertCircle size={20} className={styles.alertIcon} aria-hidden="true" />
              <p className={styles.alertText}>
                {result.message ?? "No matching certificate was found."}
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const d = result.data;

  const formatDate = (v: string | null | undefined) =>
    v ? new Date(v).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "—";

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.badge}>
              <ShieldCheck size={16} /> Credential Verification
            </span>
            <h1 className={styles.heroTitle}>
              Certificate <span>Verified</span>
            </h1>
            <p className={styles.heroSub}>
              This certificate has been issued and verified by Naturals ADFT.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.lookupSection}>
        <div className="container">
          <div className={styles.result} role="status">
            <div className={`${styles.statusBanner} ${styles.statusValid}`}>
              <div className={styles.statusLeft}>
                <CheckCircle2 size={24} color="#047857" aria-hidden="true" />
                <div>
                  <p className={styles.statusLabel}>Certificate Status</p>
                  <p className={`${styles.statusText} ${styles.valid}`}>Valid</p>
                </div>
              </div>
              <span className={styles.certId}>
                <QrCode size={16} aria-hidden="true" />
                {d.studentCode}
              </span>
            </div>

            <div className={styles.resultBody}>
              <div className={styles.fieldGrid}>
                <Field icon={<User size={18} />} label="Student Name" value={d.studentName} />
                <Field icon={<BookOpen size={18} />} label="Course Name" value={d.course.courseName} />
                <Field icon={<ShieldCheck size={18} />} label="Certification Title" value={d.certificate.certificationTitle} />
                <Field icon={<Calendar size={18} />} label="Date of Completion" value={formatDate(d.certificate.dateOfCompletion)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className={styles.field}>
      <span className={styles.fieldIcon}>{icon}</span>
      <div>
        <p className={styles.fieldLabel}>{label}</p>
        <p className={styles.fieldValue}>{value || "—"}</p>
      </div>
    </div>
  );
}

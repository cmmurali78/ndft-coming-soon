import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  User,
  BookOpen,
  Calendar,
  MapPin,
  GraduationCap,
  Building2,
  QrCode,
  Clock,
} from "@/components/ui/icons";
import { verifyStudent } from "@/lib/portal";
import styles from "../page.module.css";
import pageStyles from "./styles.module.css";

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

  const addressParts = [
    d.address.line1,
    d.address.line2,
    d.address.city,
    d.address.district,
    d.address.state,
    d.address.pincode,
    d.address.country,
  ].filter(Boolean);

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
          {/* Status banner */}
          <div className={`${styles.result} ${pageStyles.resultWide}`} role="status">
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
                {d.certificate.certificateId}
              </span>
            </div>

            <div className={styles.resultBody}>
              {/* Certificate details */}
              <div className={pageStyles.section}>
                <h3 className={pageStyles.sectionTitle}>
                  <QrCode size={16} /> Certificate Details
                </h3>
                <div className={styles.fieldGrid}>
                  <Field icon={<User size={18} />} label="Name on Certificate" value={d.studentName} />
                  <Field icon={<BookOpen size={18} />} label="Course" value={d.course.courseName} />
                  <Field icon={<Calendar size={18} />} label="Date of Issue" value={d.certificate.dateOfCompletion} />
                  <Field icon={<QrCode size={18} />} label="Certificate ID" value={d.certificate.certificateId} />
                  <Field icon={<ShieldCheck size={18} />} label="Certification Title" value={d.certificate.certificationTitle} />
                  {d.course.duration && (
                    <Field icon={<Clock size={18} />} label="Duration" value={d.course.duration} />
                  )}
                </div>
              </div>

              {/* Student details */}
              <div className={pageStyles.section}>
                <h3 className={pageStyles.sectionTitle}>
                  <User size={16} /> Student Details
                </h3>
                <div className={styles.fieldGrid}>
                  <Field icon={<User size={18} />} label="Student Code" value={d.studentCode} />
                  <Field icon={<User size={18} />} label="Full Name" value={[d.firstName, d.lastName].filter(Boolean).join(" ")} />
                  {d.dateOfBirth && (
                    <Field icon={<Calendar size={18} />} label="Date of Birth" value={formatDate(d.dateOfBirth)} />
                  )}
                  {d.gender && (
                    <Field icon={<User size={18} />} label="Gender" value={d.gender} />
                  )}
                </div>
              </div>

              {/* Centre details */}
              <div className={pageStyles.section}>
                <h3 className={pageStyles.sectionTitle}>
                  <Building2 size={16} /> Training Centre
                </h3>
                <div className={styles.fieldGrid}>
                  <Field icon={<Building2 size={18} />} label="Centre Name" value={d.center.name ?? "—"} />
                  <Field icon={<Building2 size={18} />} label="Centre Code" value={d.center.centerCode} />
                  {(d.center.city || d.center.state) && (
                    <Field
                      icon={<MapPin size={18} />}
                      label="Location"
                      value={[d.center.city, d.center.district, d.center.state].filter(Boolean).join(", ")}
                    />
                  )}
                </div>
              </div>

              {/* Enrollment details */}
              <div className={pageStyles.section}>
                <h3 className={pageStyles.sectionTitle}>
                  <GraduationCap size={16} /> Enrollment Details
                </h3>
                <div className={styles.fieldGrid}>
                  {d.enrollment.enrollmentDate && (
                    <Field icon={<Calendar size={18} />} label="Enrollment Date" value={formatDate(d.enrollment.enrollmentDate)} />
                  )}
                  {d.enrollment.trainingMode && (
                    <Field icon={<BookOpen size={18} />} label="Training Mode" value={d.enrollment.trainingMode} />
                  )}
                  <Field icon={<BookOpen size={18} />} label="Batch" value={d.enrollment.batchName} />
                  {d.enrollment.status && (
                    <Field icon={<CheckCircle2 size={18} />} label="Status" value={d.enrollment.status} />
                  )}
                </div>
              </div>

              {/* Address */}
              {addressParts.length > 0 && (
                <div className={pageStyles.section}>
                  <h3 className={pageStyles.sectionTitle}>
                    <MapPin size={16} /> Address
                  </h3>
                  <div className={styles.fieldGrid}>
                    <Field icon={<MapPin size={18} />} label="Address" value={addressParts.join(", ")} />
                  </div>
                </div>
              )}

              {/* Download cert */}
              {d.certificate.fileUrl && (
                <div className={pageStyles.downloadRow}>
                  <a
                    href={d.certificate.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pageStyles.downloadBtn}
                  >
                    Download Certificate
                  </a>
                </div>
              )}
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

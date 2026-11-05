"use client";

import { useState } from "react";
import {
  Search,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  QrCode,
  User,
  BookOpen,
  Calendar,
} from "@/components/ui/icons";
import styles from "./page.module.css";

type CertData = { name: string; course: string; issuedAt: string; code: string };

export default function VerifyForm() {
  const [code, setCode] = useState("");
  const [data, setData] = useState<CertData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function handleVerify() {
    const id = code.trim();
    if (!id) {
      setError("Please enter a certificate ID.");
      setData(null);
      setSearched(true);
      return;
    }
    setLoading(true);
    setError(null);
    setData(null);
    setSearched(false);
    try {
      const res = await fetch(`/api/verify/${encodeURIComponent(id)}`);
      const json = await res.json();
      if (json?.valid && json.data) {
        setData(json.data as CertData);
      } else {
        setError(json?.message ?? "No matching certificate was found. Please check the ID and try again.");
      }
    } catch {
      setError("Unable to reach the verification server. Please try again later.");
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }

  const issued = data?.issuedAt
    ? new Date(data.issuedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <>
      <div className={styles.lookupCard}>
        <div className={styles.lookupHead}>
          <span className={styles.lookupIcon}>
            <ShieldCheck size={30} />
          </span>
          <h2 className={styles.lookupTitle}>Credential Lookup</h2>
          <p className={styles.lookupSub}>The certificate ID is printed on your certificate.</p>
        </div>

        <div className={styles.form}>
          <div className={styles.inputWrap}>
            <Search size={20} className={styles.searchIcon} aria-hidden="true" />
            <input
              className={styles.input}
              type="text"
              placeholder="Enter certificate ID"
              value={code}
              maxLength={60}
              onChange={(e) => {
                setCode(e.target.value);
                setSearched(false);
                setError(null);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              aria-label="Certificate ID"
            />
          </div>
          <button className={styles.verifyBtn} onClick={handleVerify} disabled={loading} type="button">
            {loading ? "Verifying…" : "Verify Credential"}
          </button>
        </div>
      </div>

      {searched && error && (
        <div className={styles.alert} role="alert">
          <AlertCircle size={20} className={styles.alertIcon} aria-hidden="true" />
          <p className={styles.alertText}>{error}</p>
        </div>
      )}

      {searched && data && (
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
              {data.code}
            </span>
          </div>

          <div className={styles.resultBody}>
            <div className={styles.fieldGrid}>
              <Field icon={<User size={18} />} label="Name" value={data.name} />
              <Field icon={<BookOpen size={18} />} label="Course" value={data.course} />
              <Field icon={<Calendar size={18} />} label="Date of Issue" value={issued} />
              <Field icon={<QrCode size={18} />} label="Certificate ID" value={data.code} />
            </div>
          </div>
        </div>
      )}
    </>
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

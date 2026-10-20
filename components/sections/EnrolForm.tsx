"use client";

import { useState } from "react";
import { indiaDistricts, indianStates } from "@/lib/data/indiaDistricts";
import styles from "./EnrolForm.module.css";

/*
 * Submissions are sent to Formspark (https://formspark.io, form "ADFT Enroll Form"), which emails
 * them to the recipients configured in the Formspark dashboard. The form ID is public by design;
 * NEXT_PUBLIC_FORMSPARK_FORM_ID can override it (e.g. for a staging form).
 */
const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID || "W266pqty5";

const profileOptions = ["Student", "Graduate", "Working Professional", "Career Switcher", "Entrepreneur"];

/** ADFT centres — add new centres here. Independent of the student's own state/district. */
const centreOptions = ["Adyar, Chennai", "Basaveshwara Nagar, Bangalore"];

type Status = "idle" | "sending" | "sent" | "error";

function Select({
  name,
  label,
  value,
  options,
  onChange,
  disabled,
}: {
  name: string;
  label: string;
  value?: string;
  options: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
}) {
  return (
    <label className={`${styles.field} ${styles.select}`}>
      <span className="visually-hidden">{label}</span>
      <select
        name={name}
        disabled={disabled}
        {...(onChange ? { value, onChange: (e) => onChange(e.target.value) } : { defaultValue: "" })}
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
        <path d="m1 1.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}

export default function EnrolForm({ stream }: { stream: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  // District options follow the chosen state; changing state clears the district.
  const selectState = (value: string) => {
    setState(value);
    setDistrict("");
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    try {
      const res = await fetch(`https://submit-form.com/${FORMSPARK_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, referred: data.referred ? "Yes" : "No" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.card} id="enrol">
      <h3 className={styles.title}>Enrol Now</h3>
      <p className={styles.lead}>
        Let&rsquo;s align our constellations! Reach out and let the magic of collaboration illuminate our skies.
      </p>

      {status === "sent" ? (
        <div className={styles.success} role="status">
          <strong>Thank you!</strong> Our admissions team will reach out to you shortly about the {stream} programs.
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="hidden" name="stream" value={stream} />
          <div className={styles.row}>
            <label className={styles.field}>
              <span className="visually-hidden">First Name</span>
              <input name="firstName" placeholder="First Name" autoComplete="given-name" required />
            </label>
            <label className={styles.field}>
              <span className="visually-hidden">Last Name</span>
              <input name="lastName" placeholder="Last Name" autoComplete="family-name" required />
            </label>
          </div>
          <label className={styles.field}>
            <span className="visually-hidden">Email</span>
            <input name="email" type="email" placeholder="Email" autoComplete="email" required />
          </label>
          <label className={styles.field}>
            <span className="visually-hidden">Phone Number</span>
            <input name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" pattern="[0-9+ ]{7,16}" title="Digits, spaces and + only" required />
          </label>
          <Select name="profile" label="Profile" options={profileOptions} />
          <Select name="state" label="State" value={state} options={indianStates} onChange={selectState} />
          <Select
            name="district"
            label={state ? "District" : "District (choose a state first)"}
            value={district}
            options={state ? indiaDistricts[state] : []}
            onChange={setDistrict}
            disabled={!state}
          />
          <Select name="centre" label="Centre" options={centreOptions} />
          <label className={styles.checkbox}>
            <input type="checkbox" name="referred" />
            <span>Were you referred by someone?</span>
          </label>
          {status === "error" && (
            <p className={styles.error} role="alert">
              Sorry, something went wrong sending your details. Please try again in a moment.
            </p>
          )}
          <button type="submit" className={styles.submit} disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}

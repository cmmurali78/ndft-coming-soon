"use client";

import { useState } from "react";
import { submitFranchiseEnquiry } from "@/lib/enquiries";
import styles from "./FranchiseForm.module.css";

const chevron = (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path d="m1 1.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Text({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  ...rest
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label}
        {required && <i aria-hidden="true"> *</i>}
      </span>
      <input name={name} type={type} placeholder={placeholder} required={required} {...rest} />
    </label>
  );
}

function Select({
  name,
  label,
  options,
  placeholder,
}: {
  name: string;
  label: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className={`${styles.field} ${styles.select}`}>
      <span className={styles.label}>{label}</span>
      <select name={name} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      {chevron}
    </label>
  );
}

type FormStatus = "idle" | "sent" | "error";

export default function FranchiseForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setSubmitting(true);
    const result = await submitFranchiseEnquiry(data);
    setSubmitting(false);
    setFormStatus(result.ok ? "sent" : "error");
  }

  return (
    <div className={styles.card} id="enquiry">
      <div className={styles.head}>
        <h2 className={styles.title}>Franchise Enquiry</h2>
        <p className={styles.lead}>
          Please complete all fields to help us understand your interest. Your details will remain confidential.
        </p>
      </div>

      {formStatus === "sent" ? (
        <div className={styles.success} role="status">
          <strong>Enquiry received!</strong> Our franchise team will reach out to you shortly.
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.grid}>
            <Text name="fullName" label="Full name" placeholder="Your Name" autoComplete="name" required />
            <Select name="gender" label="Gender" placeholder="Select" options={["Male", "Female", "Other", "Prefer not to say"]} />

            <Text name="age" label="Age" placeholder="Eg. 30 years old" inputMode="numeric" />
            <Text
              name="phone"
              label="Mobile Number"
              type="tel"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              pattern="[0-9+ ]{7,16}"
              title="Digits, spaces and + only"
              required
            />

            <Text name="email" label="Email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <Text name="residence" label="Place of Residence" placeholder="Eg. Chennai" />

            <Select
              name="education"
              label="Education"
              placeholder="Select"
              options={["Graduate", "Post Graduate", "Diploma", "Other"]}
            />
            <Text name="profession" label="Profession" placeholder="Your profession" />

            <Text name="franchiseLocation" label="Franchise Location" placeholder="Preferred city" />
            <Select
              name="rentalSpace"
              label="Rental Space availability"
              placeholder="Select"
              options={["Yes", "No", "Looking for options"]}
            />

            <Select
              name="investment"
              label="Investment Capability"
              placeholder="Select"
              options={["Below ₹20 Lakh", "₹20 - 30 Lakh", "₹30 - 40 Lakh", "₹40 Lakh +"]}
            />
            <Select
              name="trainingExperience"
              label="Experience in Training Business"
              placeholder="Select"
              options={["Yes", "No"]}
            />
          </div>

          <label className={`${styles.field} ${styles.full}`}>
            <span className={styles.label}>
              Briefly tell us about your plans<i aria-hidden="true"> *</i>
            </span>
            <textarea name="message" placeholder="Share what you have in mind for your city or centre." rows={4} required />
          </label>

          {formStatus === "error" && (
            <p className={styles.error} role="alert">
              Sorry, something went wrong sending your enquiry. Please try again in a moment.
            </p>
          )}

          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? "Sending…" : "Submit Franchise Enquiry"}
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
              <path d="M1 6h11m0 0L7.5 1.5M12 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}

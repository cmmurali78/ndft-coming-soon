"use client";

import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import styles from "./ContactForm.module.css";

const FORMSPARK_FORM_ID = "ISMd4bS9B";

const subjectOptions = [
  "General Enquiry",
  "Admissions",
  "Franchise Opportunities",
  "Corporate Training",
  "Media & Press",
  "Other",
];

type FormStatus = "idle" | "sent" | "error";

function Select({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <label className={`${styles.field} ${styles.select}`}>
      <span className="visually-hidden">{label}</span>
      <select name={name} defaultValue="">
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

export default function ContactForm() {
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await submit(data);
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className={styles.card} id="contact">
      <h3 className={styles.title}>Get in Touch</h3>
      <p className={styles.lead}>
        Have a question or want to know more? We&rsquo;d love to hear from you.
      </p>

      {formStatus === "sent" ? (
        <div className={styles.success} role="status">
          <strong>Message received!</strong> Our team will get back to you.
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
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
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number (optional)"
              autoComplete="tel"
              pattern="[0-9+ ]{7,16}"
              title="Digits, spaces and + only"
            />
          </label>
          <Select name="subject" label="Subject" options={subjectOptions} />
          <label className={styles.field}>
            <span className="visually-hidden">Message</span>
            <textarea name="message" placeholder="Your message…" rows={5} required />
          </label>
          {formStatus === "error" && (
            <p className={styles.error} role="alert">
              Sorry, something went wrong sending your message. Please try again in a moment.
            </p>
          )}
          <button type="submit" className={styles.submit} disabled={submitting}>
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}

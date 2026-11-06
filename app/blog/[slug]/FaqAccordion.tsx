"use client";

import { useState } from "react";
import type { BlogFaq } from "@/lib/portal";
import styles from "./page.module.css";

export default function FaqAccordion({ faqs }: { faqs: BlogFaq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, i) => (
        <div key={i} className={styles.faqItem}>
          <button
            type="button"
            className={styles.faqQuestion}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{faq.question}</span>
            <span className={styles.faqIcon} aria-hidden="true">
              {open === i ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
              )}
            </span>
          </button>
          {open === i && (
            <div
              className={styles.faqAnswer}
              dangerouslySetInnerHTML={{
                __html: faq.answer
                  .replace(/\[([^\]]+)\]\s*\(([^)]+)\)/g, '<a href="$2">$1</a>')
                  .replace(/\*\*(.+?)\*\*/gs, "<strong>$1</strong>"),
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

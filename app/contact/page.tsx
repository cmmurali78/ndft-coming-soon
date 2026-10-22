import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Naturals ADFT",
  description:
    "Get in touch with Naturals ADFT. Reach out for admissions, franchise opportunities, or any general enquiry.",
};

const contactDetails = [
  {
    label: "Naturals ADFT – Adyar, Chennai",
    value:
      "Door No. 34 -A New No.27, Third Floor, Plot No. 58, 1st Main Rd, above Zimson Showroom, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020",
    href: undefined,
  },
  {
    label: "Naturals ADFT – Basaveshwar Nagar, Bangalore",
    value:
      "471, 3rd Floor, above BATA Showroom, near Pavithra Paradise, 3rd Block, 3rd Stage, Basaveshwar Nagar, Bangalore",
    href: undefined,
  },
  {
    label: "Corporate Office",
    value: "129, Sterling Road, Nungambakam, Chennai - 600 034, Tamil Nadu, India",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={`container ${styles.hero}`}>
        <SectionHeading
          title="Contact Us"
          subtitle="We'd love to hear from you. Fill in the form or reach us directly."
          mark="lg"
        />
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.info}>
          <h2 className={styles.infoHeading}>Reach Us</h2>
          <ul className={styles.details}>
            {contactDetails.map(({ label, value, href }) => (
              <li key={label} className={styles.detail}>
                <span className={styles.detailLabel}>{label}</span>
                {href ? (
                  <a href={href} className={styles.detailValue}>
                    {value}
                  </a>
                ) : (
                  <span className={styles.detailValue}>{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}

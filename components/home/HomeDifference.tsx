import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./HomeDifference.module.css";

const features = [
  { icon: "/icons/Layer_1.svg", title: "Studio-First Learning", text: "80% hands-on studio & project work across all programs" },
  { icon: "/icons/Layer_2.svg", title: "Industry Tools", text: "Real software used by working professionals, including AI tools" },
  { icon: "/icons/Layer_3.svg", title: "Industry Integration", text: "Site visits, internships & real project exposure built in" },
  { icon: "/icons/Layer_4.svg", title: "Portfolio Driven", text: "Graduate with a reviewed, professional-grade portfolio" },
  { icon: "/icons/Layer_5.svg", title: "AI-Integrated Workflows", text: "Future-ready tools embedded across the curriculum" },
  { icon: "/icons/Layer_6.svg", title: "Clear Pathways", text: "Certificate → Diploma → Master Diploma at every level" },
];

export default function HomeDifference() {
  return (
    <section id="section-difference" className={`container ${styles.section}`}>
      <SectionHeading title="The ADFT Difference" align="left" mark="lg" />
      <ul className={styles.grid}>
        {features.map((feature) => (
          <li key={feature.title} className={styles.card}>
            <Image src={feature.icon} alt="" width={86} height={86} className={styles.icon} />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.text}>{feature.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

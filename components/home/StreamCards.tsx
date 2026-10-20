import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./StreamCards.module.css";

const streams = [
  {
    color: "pink",
    tag: "Stream 01",
    image: "/images/home/stream-card-fashion.webp",
    alt: "Purple gown on a dress form in a fashion studio",
    keywords: "Cut · Drape · Couture",
    title: ["Fashion &", "Costume Design"],
    description: "Garments, draping, styling and editorial production with industry mentors.",
    skills: ["Pattern Making", "Draping", "Styling", "Textiles"],
    href: "/fashion-design",
  },
  {
    color: "yellow",
    tag: "Stream 02",
    image: "/images/home/stream-card-interior.webp",
    alt: "Interior studio with a yellow pendant lamp and design boards",
    keywords: "Light · Form · Space",
    title: ["Interior &", "Spatial Design"],
    description: "Residential, retail and experiential spaces taught through live studios.",
    skills: ["AutoCAD", "SketchUp", "Lighting", "Materials"],
    href: "/interior-spatial",
  },
  {
    color: "blue",
    tag: "Stream 03",
    image: "/images/home/stream-card-digital.webp",
    alt: "Digital illustration of a woman on a design monitor",
    keywords: "Pixel · Motion · AI",
    title: ["Digital Design &", "Creative Media"],
    description: "UI/UX, motion and AI-led creative workflows for the modern studio.",
    skills: ["Figma", "After Effects", "Generative AI", "3D"],
    href: "/digital-design",
  },
] as const;

export default function StreamCards() {
  return (
    <section id="section-streams" className={`container ${styles.section}`}>
      <SectionHeading title="Choose Your Stream" mark="lg" />
      <div className={styles.grid}>
        {streams.map((stream) => (
          <article key={stream.href} className={`${styles.card} ${styles[stream.color]}`}>
            <div className={styles.media}>
              <Image src={stream.image} alt={stream.alt} fill sizes="(max-width: 767px) 100vw, 370px" className={styles.image} />
              <span className={styles.tag}>{stream.tag}</span>
              <div className={styles.glass}>
                <p className={styles.keywords}>{stream.keywords}</p>
                <h3 className={styles.title}>
                  {stream.title[0]}
                  <br />
                  {stream.title[1]}
                </h3>
                <p className={styles.description}>{stream.description}</p>
                <ul className={styles.skills}>
                  {stream.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href={stream.href} className={`btn btn--primary ${styles.cta}`}>
              Explore Stream
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

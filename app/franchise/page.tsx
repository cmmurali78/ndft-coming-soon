import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FranchiseForm from "@/components/sections/FranchiseForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Franchise Opportunity | Naturals ADFT",
  description:
    "Turn creative passion into a business. Partner with Naturals ADFT — Academy of Design, Fashion & Technology — and bring a proven creative education franchise to your city.",
};

const Mark = () => (
  <Image src="/icons/stream.svg" alt="" width={64} height={27} className={styles.mark} />
);

const marketCards = [
  { icon: "/icons/franchise/market-fashion.svg", text: "Fashion is transforming through digital commerce." },
  { icon: "/icons/franchise/market-design.svg", text: "Design is evolving with AI and technology." },
  { icon: "/icons/franchise/market-content.svg", text: "Content is driving brand engagement." },
  { icon: "/icons/franchise/market-skills.svg", text: "Creative skills are opening career and entrepreneurial pathways." },
];

const stats = [
  { value: "₹2.78", unit: "Lakh Crore", note: "Industry value in 2025" },
  { value: "9%", unit: "Growth", note: "Year-on-year growth in 2025" },
  { value: "₹1", unit: "Lakh Crore+", note: "Digital media revenue in 2025" },
  { value: "₹3.3", unit: "Lakh Crore", note: "Projected industry value by 2028" },
];

const programs = [
  {
    image: "/images/franchise/program-fashion.webp",
    icon: "/icons/franchise/program-fashion-icon.svg",
    title: "Fashion & Costume Design",
    sub: "Fashion, styling and costume",
  },
  {
    image: "/images/franchise/program-interior.webp",
    icon: "/icons/franchise/program-interior-icon.svg",
    title: "Interior & Spatial Design",
    sub: "Interiors and spatial experiences",
  },
  {
    image: "/images/franchise/program-digital.webp",
    icon: "/icons/franchise/program-digital-icon.svg",
    title: "Digital Design & Creative Media",
    sub: "Digital design, media and creative tools",
  },
];

const whyFranchise = [
  { icon: "/icons/franchise/why-trusted.svg", title: "Trusted Brand Association" },
  { icon: "/icons/franchise/why-studio.svg", title: "Studio-First Learning" },
  { icon: "/icons/franchise/why-ai.svg", title: "AI-Integrated Education" },
  { icon: "/icons/franchise/why-portfolio.svg", title: "Portfolio-Driven Programmes" },
  { icon: "/icons/franchise/why-progressive.svg", title: "Progressive Learning Pathways" },
];

const support = [
  { color: "yellow", title: "No Royalty", desc: "Fixed annual franchise fee model." },
  { color: "pink", title: "Defined Commercial Structure", desc: "Course material, LMS and certification charges apply as specified." },
  { color: "blue", title: "Territory Consideration", desc: "Rights based on market potential and agreement terms." },
  { color: "yellow", title: "Centre Setup Support", desc: "Guidance on location, infrastructure and procurement." },
  { color: "pink", title: "Training & Induction", desc: "Fixed annual franchise fee model." },
  { color: "blue", title: "Academic & Technology Support", desc: "Curriculum, LMS and certification systems." },
  { color: "yellow", title: "Marketing & Lead Generation", desc: "Campaign guidance and business development support." },
  { color: "pink", title: "Growth Opportunities", desc: "Placement initiatives and potential enterprise training opportunities." },
];

const partnerAudience = [
  { color: "blue", text: "Education entrepreneurs looking to expand." },
  { color: "pink", text: "Existing training centre owners exploring new programmes." },
  { color: "yellow", text: "Women entrepreneurs building independent businesses." },
  { color: "blue", text: "Investors interested in the creative education sector." },
];

export default function FranchisePage() {
  return (
    <div className={styles.page}>
      {/* 1 ── Hero ───────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/franchise/hero-banner.webp"
            alt="Two professionals shaking hands in a creative studio"
            width={2008}
            height={783}
            preload
          />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Franchise Opportunity</p>
            <h1 className={styles.heroTitle}>
              Turn Creative Passion into a <span>Business.</span>
            </h1>
            <p className={styles.heroSub}>Bring Naturals ADFT to Your City.</p>
            <p className={styles.heroText}>
              Build a thriving creative education business with Naturals&rsquo; trusted 30-year legacy, an established
              brand and a proven franchise model backed by academic support.
            </p>
            <a href="#enquiry" className={`btn ${styles.btnYellow}`}>
              Become a Franchise Partner
            </a>
          </div>
        </div>
      </section>

      {/* 2 ── The Opportunity ────────────────────────────────────────────── */}
      <section className={`container ${styles.opportunity}`}>
        <div className={styles.oppGrid}>
          <div className={styles.oppCopy}>
            <Mark />
            <p className={styles.eyebrow}>The Opportunity</p>
            <h2 className={styles.h2}>Creativity Is Becoming Big Business.</h2>
            <p className={styles.bodyDark}>
              India&rsquo;s media and entertainment industry is expanding, creating opportunities across digital media,
              design and content. As AI and technology transform creative industries, demand for practical,
              industry-relevant skills continues to evolve.
            </p>
          </div>

          <div className={styles.statsCard}>
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.note} className={styles.statTile}>
                  <p className={styles.statValue}>
                    {s.value}
                    <span>{s.unit}</span>
                  </p>
                  <p className={styles.statNote}>{s.note}</p>
                </div>
              ))}
            </div>
            <p className={styles.source}>
              Source: FICCI–EY 2026 report. Figures refer to India&rsquo;s media and entertainment industry, not the
              design education market.
            </p>
          </div>

          <div className={styles.oppMatters}>
            <h3 className={styles.h3}>Why This Matters</h3>
            <p className={styles.bodyDark}>
              Creative fields are changing quickly across business, technology and culture.
            </p>
            <p className={styles.highlight}>
              Position your business at the intersection of creativity, technology and education.
            </p>
          </div>

          <div className={styles.marketCard}>
            {marketCards.map((c) => (
              <div key={c.text} className={styles.marketTile}>
                <Image src={c.icon} alt="" width={36} height={36} className={styles.marketIcon} />
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 ── About ──────────────────────────────────────────────────────── */}
      <div className={styles.lavBand}>
      <section className="container">
        <div className={styles.aboutCard}>
          <div className={styles.aboutCopy}>
            <p className={styles.eyebrow}>About Naturals ADFT</p>
            <h2 className={styles.h2Sm}>
              Creative Education. Practical Skills.
              <br />
              Future Possibilities.
            </h2>
            <p className={styles.bodyPurple}>
              Naturals ADFT — Academy of Design, Fashion &amp; Technology — brings together design fundamentals,
              hands-on studio learning, industry-oriented projects and AI-assisted creative workflows.
            </p>
            <p className={styles.aboutTag}>Concept First. AI Next.</p>
          </div>

          <div className={styles.aboutRight}>
            <div className={styles.programGrid}>
              {programs.map((p) => (
                <div key={p.title} className={styles.programCard}>
                  <div className={styles.programThumb}>
                    <Image src={p.image} alt={p.title} width={600} height={430} />
                  </div>
                  <div className={styles.programMeta}>
                    <Image src={p.icon} alt="" width={20} height={20} className={styles.programDot} />
                    <div>
                      <p className={styles.programTitle}>{p.title}</p>
                      <p className={styles.programSub}>{p.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.bodyPurple}>
              We put creative thinking first and use technology to enhance how students learn, design and create.
            </p>
          </div>
        </div>
      </section>

      {/* 4 ── Why Franchise ──────────────────────────────────────────────── */}
      <section className="container">
        <div className={styles.whyCard}>
          <div className={styles.whyHead}>
            <Image src="/images/franchise/wave.webp" alt="" width={1300} height={500} className={styles.whyMesh} unoptimized />
            <div className={styles.whyHeadCopy}>
              <Mark />
              <p className={styles.eyebrow}>Why Franchise Naturals ADFT</p>
              <h2 className={styles.h2}>A Creative Education Model Built For Tomorrow.</h2>
            </div>
          </div>
          <div className={styles.whyGrid}>
            {whyFranchise.map((f) => (
              <div key={f.title} className={styles.whyItem}>
                <span className={styles.whyIcon}>
                  <Image src={f.icon} alt="" width={34} height={34} />
                </span>
                <h3 className={styles.whyTitle}>{f.title}</h3>
                <p className={styles.whyText}>Build on the Naturals brand legacy.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── Your Vision. Our Support. ──────────────────────────────────── */}
      <section className="container">
        <div className={styles.visionCard}>
          <div className={styles.visionTop}>
            <div className={styles.visionImage}>
              <Image src="/images/franchise/studio.webp" alt="Naturals ADFT studio launch event" width={1100} height={560} />
            </div>
            <div className={styles.visionCopy}>
              <Mark />
              <p className={styles.eyebrow}>The Opportunity</p>
              <h2 className={styles.h2}>Your Vision. Our Support. A Shared Opportunity.</h2>
              <p className={styles.bodyDark}>
                Launch with a structured franchise model and support across key areas of your business.
              </p>
              <a href="#investment" className={`btn ${styles.btnYellow}`}>
                Explore The Investment Snapshot
              </a>
            </div>
          </div>

          <div className={styles.supportGrid}>
            {support.map((s) => (
              <div key={s.title} className={styles.supportCard}>
                <div className={`${styles.supportHead} ${styles[`strip_${s.color}`]}`}>
                  <h3 className={styles.supportTitle}>{s.title}</h3>
                </div>
                <p className={styles.supportDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── Investment Snapshot ────────────────────────────────────────── */}
      </div>

      <section id="investment" className={`container ${styles.investment}`}>
        <div className={styles.investCopy}>
          <Mark />
          <p className={styles.eyebrow}>Investment Snapshot</p>
          <h2 className={styles.h2}>Build Your Creative Education Business.</h2>
          <p className={styles.bodyDark}>
            Indicative figures to start a conversation. Final investment depends on the centre, location, infrastructure
            and commercial terms.
          </p>
          <a href="#enquiry" className={`btn ${styles.btnPurple}`}>
            Request the investment plan
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
              <path d="M1 6h11m0 0L7.5 1.5M12 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className={styles.investFacts}>
          <p className={styles.factLabel}>Indicative Total Investment</p>
          <p className={styles.factBig}>₹30-40 Lakh</p>
          <span className={styles.factDivider} />
          <div className={styles.factRow}>
            <div>
              <p className={styles.factLabel}>Centre Size</p>
              <p className={styles.factMed}>1,500 - 1,800 sq. ft.</p>
            </div>
            <div>
              <p className={styles.factLabel}>Centre Size</p>
              <p className={styles.factMed}>₹25-30 Lakh</p>
            </div>
          </div>
          <p className={styles.source}>
            Indicative figures only. Final investment depends on the centre, location, infrastructure and commercial
            terms. Detailed cost breakup will be shared during the franchise discussion.
          </p>
        </div>
      </section>

      {/* 7 ── Who can partner + form ─────────────────────────────────────── */}
      <section id="enquiry" className={`container ${styles.partner}`}>
        <div className={styles.partnerCopy}>
          <Mark />
          <p className={styles.eyebrow}>Who Can Partner With Us?</p>
          <h2 className={styles.h2}>Are You Ready To Build A Creative Education Business?</h2>
          <p className={styles.partnerIntro}>We welcome enquiries from:</p>
          <ul className={styles.audience}>
            {partnerAudience.map((a) => (
              <li key={a.text}>
                <span className={`${styles.audienceDot} ${styles[`dot_${a.color}`]}`} />
                {a.text}
              </li>
            ))}
          </ul>
          <span className={styles.partnerDivider} />
          <div className={styles.partnerFacts}>
            <div>
              <p className={styles.eyebrow}>Preferred Model</p>
              <p className={styles.factMed}>Investor-Operator</p>
            </div>
            <div>
              <p className={styles.eyebrow}>Indicative Investment Capacity</p>
              <p className={styles.factMed}>₹30–50 Lakh</p>
            </div>
          </div>
        </div>

        <FranchiseForm />
      </section>

      {/* 8 ── City CTA banner ────────────────────────────────────────────── */}
      <section className={styles.cityCta}>
        <Image
          src="/images/franchise/cta-rings.webp"
          alt=""
          width={757}
          height={672}
          className={styles.cityRings}
          unoptimized
        />
        <div className={`container ${styles.cityInner}`}>
          <div className={styles.cityCopy}>
            <Mark />
            <h2 className={styles.cityTitle}>Your City Needs Creative Thinkers. You Could Build Their Future.</h2>
            <p className={styles.cityText}>
              Partner with Naturals ADFT and bring future-focused creative education to your market.
              <br />
              Take the first step towards owning a creative education business.
            </p>
            <Link href="/contact" className={`btn ${styles.btnWhite}`}>
              Speak To Our Franchise Expert
            </Link>
          </div>
          <Image src="/images/franchise/map.webp" alt="" width={1400} height={1199} className={styles.cityMap} unoptimized />
        </div>
      </section>
    </div>
  );
}

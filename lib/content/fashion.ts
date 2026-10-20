import type { StreamPageContent } from "@/lib/types";
import { sharedDifferenceLabels } from "./shared";

const fashion: StreamPageContent = {
  theme: "fashion",
  spacing: { programs: 31, compare: 39, curriculum: 40, careers: 110, audience: 78, difference: 38, studio: 94 },

  hero: {
    slides: [
      {
        title: ["Where Designers Are", "Born and Collections"],
        highlight: ["Are Built."],
        description:
          "At Naturals ADFT every program is studio-driven, hands-on, and structured to take you from your first sketch to a fully realised garment, with the creative confidence and technical precision to thrive in the fashion industry.",
        descriptionWidth: 580,
        descriptionSize: 14,
      },
    ],
    image: {
      src: "/images/fashion/hero.webp",
      alt: "Laughing fashion design student",
      intrinsic: [1105, 1524],
      left: 880,
      top: 41,
      width: 430,
    },
    rings: { x: 856, y: 205 },
  },

  features: [
    { icon: "/icons/studio.svg", label: "Studio-Based Learning" },
    { icon: "/icons/Layer_2.svg", label: "Industry-Relevant Curriculum" },
    { icon: "/icons/portfolio.svg", label: "Portfolio-First Approach" },
    { icon: "/icons/site.svg", label: "Couture to Career" },
  ],

  programs: {
    heading: {
      mark: "lg",
      eyebrow: "Choose Your Level",
      title: "Find the right that fits your goal.",
      subtitle:
        "Whether you are just beginning your journey in fashion or looking to advance to professional and couture-level expertise, NADFT offers a structured pathway with three distinct certifications, each designed to meet you where you are.",
      subtitleMaxWidth: 745,
    },
    grid: [
      {
        image: { src: "/images/fashion/program-master.webp", alt: "Model walking a runway in a flowing pink gown", width: 800, height: 448 },
        badge: "Most Comprehensive",
        title: "Master Diploma in Fashion & Costume Design",
        details: [
          { strong: "Duration:", text: "1 Year – 520 Hours" },
          { strong: "Level:", text: "Master Diploma" },
          { strong: "60% Practical", text: "(312 Hours)" },
          { strong: "40% Theory", text: "(208 Hours)" },
        ],
        disciplines:
          "Fashion Design, Costume Design, Textile Science, Fashion Illustration, Pattern Making, Garment Construction, Surface Ornamentation, Fashion Merchandising & AI-Assisted Fashion Design",
      },
      {
        image: { src: "/images/fashion/program-diploma.webp", alt: "Tailored lilac blazer on a dress form beside a clothing rail", width: 800, height: 533 },
        badge: "Industry Ready",
        title: "Professional Diploma in Fashion Design",
        details: [
          { strong: "Duration:", text: "9 Months – 360 Hours" },
          { strong: "Level:", text: "Professional Certificate" },
          { strong: "65% Practical", text: "(234 Hours)" },
          { strong: "35% Theory", text: "(126 Hours)" },
        ],
        disciplines:
          "Fashion Design, Fashion Illustration, Pattern Making, Garment Construction, Textile Fundamentals, Fashion Merchandising & AI-Assisted Fashion Design",
      },
      {
        image: { src: "/images/fashion/program-certificate.webp", alt: "Fashion sketches surrounded by fabric swatches and pencils", width: 800, height: 533 },
        badge: "Career Starter",
        title: "Professional Certificate in Apparel Design",
        details: [
          { strong: "Duration:", text: "6 Months – 180 Hours" },
          { strong: "Level:", text: "Professional Certificate" },
          { strong: "70% Practical", text: "126 Hours" },
          { strong: "30% Theory", text: "(48 Hours)" },
        ],
        disciplines:
          "Apparel Design, Fashion Illustration, Basic Pattern Making, Garment Construction, Textile Basics & Fashion Design Fundamentals",
      },
    ],
  },

  compare: {
    heading: {
      mark: "lg",
      eyebrow: "Compare Programs",
      title: "Not Sure Which Level Suits You?",
      subtitle: "Here’s a quick comparison to help you decide.",
    },
    columns: [
      "Professional Certificate in Apparel Design",
      "Professional Diploma in Fashion Design",
      "Master Diploma in Fashion & Costume Design",
    ],
    rows: [
      ["Level", "Foundation", "Intermediate", "Advanced / Comprehensive"],
      ["Design Fundamentals", "✓", "✓", "✓"],
      ["Textile & Fabric Science", "Introductory", "✓", "✓"],
      ["Pattern Making & Construction", "Basic", "✓", "✓"],
      ["Fashion Illustration", "Basic", "✓", "✓"],
      ["Draping Techniques", "—", "✓", "✓"],
      ["Luxury Surface Ornamentation", "—", "—", "✓"],
      ["Fashion Business & Merchandising", "—", "✓", "✓"],
      ["Couture Collection Development", "—", "—", "✓"],
      ["Capstone Projects", "1", "2", "4"],
      ["Final Showcase", "—", "—", "✓"],
      ["Ideal For", "Beginners", "Working professionals", "Aspiring fashion designers"],
    ],
    ctaLead: "Still unsure?",
  },

  curriculum: {
    heading: {
      mark: "lg",
      eyebrow: "What You Will Learn",
      title: "Skills That Take You From Studio to Industry",
      titleMaxWidth: 680,
      subtitle:
        "Across all three programs, the ADFT curriculum is built around six core areas of fashion education. The depth and complexity of each area grows with the level of certification.",
      subtitleMaxWidth: 800,
    },
    modules: [
      {
        title: "Design Fundamentals & Creative Studies",
        items: ["Fashion Design Principles", "Colour & Composition", "Trend Analysis", "Concept Development", "Visual Storytelling"],
      },
      {
        title: "Textile & Fabric Science",
        items: ["Fabric Types & Properties", "Textile Processes", "Prints & Finishes", "Material Selection", "Fabric Behaviour"],
      },
      {
        title: "Pattern Making & Garment Construction",
        items: ["Pattern Drafting", "Garment Construction", "Cutting Techniques", "Fit Analysis", "Apparel Production"],
      },
      {
        title: "Fashion Illustration & Draping",
        items: ["Fashion Sketching", "Figure Drawing", "Illustration Styles", "Draping Techniques", "Concept Translation"],
      },
      {
        title: "Luxury Surface Ornamentation",
        tag: "Master Diploma Exclusive",
        items: ["Embroidery Techniques", "Surface Design", "Fabric Manipulation", "Embellishments", "Luxury Finishing"],
      },
      {
        title: "Fashion Business & Merchandising",
        items: ["Brand Positioning", "Fashion Marketing", "Retail & Merchandising", "Fashion Communication", "Creative Entrepreneurship"],
      },
    ],
    outcome: {
      title: "Industry-Ready Fashion Skillset",
      tagline:
        "Creative Design · Technical Excellence · Couture Craftsmanship · Professional Portfolio · Business Readiness · Career Success",
      items: [
        { icon: "/icons/fashion/outcome-design.png", title: "Develop original design thinking" },
        { icon: "/icons/fashion/outcome-garment.png", title: "Master garment construction" },
        { icon: "/icons/fashion/outcome-luxury.png", title: "Create luxury-quality fashion" },
        { icon: "/icons/fashion/outcome-portfolio.png", title: "Build an employer-ready portfolio" },
        { icon: "/icons/fashion/outcome-business.png", title: "Understand the business of fashion" },
        { icon: "/icons/fashion/outcome-career.png", title: "Launch your career with confidence" },
      ],
    },
  },

  careers: {
    mark: "lg",
    title: "Career Pathways",
    subtitle: "ADFT Fashion Design graduates go on to work across the full spectrum of the fashion and apparel industry.",
    rows: [
      [
        { icon: "/icons/fashion/career-designer.png", label: "Fashion Designer (Women's Wear, Men's Wear, Kidswear)" },
        { icon: "/icons/fashion/career-costume.png", label: "Costume Designer (Film, Theatre, Television)" },
        { icon: "/icons/fashion/career-pattern.png", label: "Pattern Maker & Garment Technologist" },
        { icon: "/icons/fashion/career-illustrator.png", label: "Fashion Illustrator & Visual Communicator" },
        { icon: "/icons/fashion/career-production.png", label: "Apparel Production Manager" },
      ],
      [
        { icon: "/icons/fashion/career-stylist.png", label: "Fashion Stylist" },
        { icon: "/icons/fashion/career-surface.png", label: "Surface Ornamentation & Embroidery Specialist" },
        { icon: "/icons/fashion/career-buyer.png", label: "Fashion Buyer & Merchandiser" },
        { icon: "/icons/fashion/career-brand.png", label: "Brand Manager / Fashion Entrepreneur" },
        { icon: "/icons/fashion/career-textile.png", label: "Textile & Product Developer" },
      ],
    ],
  },

  audience: {
    mark: "lg",
    title: "Who Is This For",
    subtitle: "Fashion Design at ADFT Is Built for Dreamers Who Want to Build Things.",
    items: [
      "School leavers",
      "Graduates passionate about fashion",
      "Working professionals seeking a career switch",
      "Craft, garment & textile enthusiasts",
      "Aspiring fashion entrepreneurs & label owners",
      "Stylists, costume designers & creatives seeking technical skills",
    ],
  },

  difference: {
    image: { src: "/images/fashion/difference.webp", alt: "Model on a pink runway in a sequinned gown", width: 900, height: 1575 },
    imageSize: [427, 607],
    mark: "lg",
    textSize: 16,
    items: [
      "/icons/project.svg",
      "/icons/ai-augment.svg",
      "/icons/ai-powered.svg",
      "/icons/multi-disciple.svg",
      "/icons/cad.svg",
      "/icons/site.svg",
      "/icons/ai-era.svg",
    ].map((icon, i) => ({ icon, label: sharedDifferenceLabels[i] })),
  },
};

export default fashion;

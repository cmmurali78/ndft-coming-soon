import type { StreamPageContent } from "@/lib/types";
import { creativeAudience, differenceIcons } from "./shared";

const interior: StreamPageContent = {
  theme: "interior",
  spacing: { programs: 63, compare: 108, curriculum: 59, careers: 130, audience: 145, difference: 110, studio: 116 },

  hero: {
    slides: [
      {
        title: ["Every Great Space", "Starts with a"],
        highlight: ["Great Designer."],
        description:
          "From concept to execution, our programs combine spatial thinking with technical precision, giving you the skills to conceive, visualise, and deliver beautiful spaces.",
        descriptionWidth: 540,
        offset: 110,
      },
    ],
    image: {
      anchor: "right",
      src: "/images/interior/hero.webp",
      alt: "Interior design student in a hard hat holding a spirit level",
      intrinsic: [1400, 1242],
    },
    rings: { x: 811, y: 164 },
  },

  features: [
    { icon: "/icons/studio.svg", label: "80% Studio & Practice" },
    { icon: "/icons/cad.svg", label: "CAD, 3D & AI Tools" },
    { icon: "/icons/site.svg", label: "Real Site Exposure" },
    { icon: "/icons/portfolio.svg", label: "Portfolio-First Approach" },
    { icon: "/icons/concept.svg", label: "Concept to Execution" },
  ],

  programs: {
    heading: {
      eyebrow: "Choose Your Level",
      title: "Two Pathways. One Destination: Industry Readiness.",
      titleMaxWidth: 570,
      subtitle:
        "Whether you are starting fresh or building on existing design knowledge, Naturals ADFT offers two carefully structured programs, a comprehensive one-year master pathway and a focused six-month professional diploma, both designed to make you work-ready from day one.",
      subtitleMaxWidth: 800,
    },
    featured: [
      {
        image: { src: "/images/interior/program-master.webp", alt: "Teal living room with mustard armchairs", width: 640, height: 936 },
        badge: "Most Comprehensive",
        title: "Master Diploma in Interior & Spatial Design",
        details: [
          { strong: "Duration:", text: "1 Year – 520 Hours" },
          { strong: "Level:", text: "Master Diploma" },
          { strong: "80% Practical", text: "(416 Hours)" },
          { strong: "20% Theory", text: "(104 Hours)" },
        ],
      },
      {
        image: { src: "/images/interior/program-diploma.webp", alt: "Colourful office interior with pink walls and yellow slats", width: 640, height: 850 },
        badge: "Career-Focused",
        title: "Professional Diploma in Interior Design & Space Planning",
        details: [
          { strong: "Duration:", text: "6 Months – 260 Hours" },
          { strong: "Level:", text: "Professional Diploma" },
          { strong: "70% Practical", text: "(182 Hours)" },
          { strong: "30% Theory", text: "(78 Hours)" },
        ],
      },
    ],
  },

  compare: {
    heading: {
      eyebrow: "Compare Programs",
      title: "Which Program Is Right for You?",
      titleMaxWidth: 720,
      subtitle:
        "Both programs share the same commitment to practical, studio-driven learning. The difference is depth, duration, and the level of industry integration.",
      subtitleMaxWidth: 800,
    },
    narrow: true,
    columns: ["Professional Diploma in Interior Design & Space Planning", "Master Diploma in Interior & Spatial Design"],
    rows: [
      ["Duration", "6 Months", "1 Year — 520 Hours"],
      ["Practical Component", "High", "80% (416 Hours)"],
      ["Design Fundamentals", "✓", "✓"],
      ["Spatial Planning & Layouts", "✓", "✓"],
      ["CAD & Technical Drawing", "✓", "✓"],
      ["3D Modelling & Visualisation", "✓", "✓"],
      ["AI-Assisted Design Tools", "—", "✓"],
      ["BIM & Digital Workflows", "—", "✓"],
      ["VR / AR Design Presentation", "—", "✓"],
      ["Material & Vendor Interaction", "—", "✓"],
      ["Site Visits & Execution Exposure", "—", "✓"],
      ["Client Interaction & Presentation", "—", "✓"],
      ["Residential & Commercial Workflows", "Foundational", "✓"],
      ["Industry Integration / Internship", "—", "✓"],
      ["Field Projects", "1", "3"],
      ["Ideal For", "Beginners & career changers", "Aspiring professional designers"],
    ],
  },

  curriculum: {
    heading: {
      eyebrow: "What You’ll Master",
      title: "From Design Fundamentals to Future-Ready Spatial Design",
      titleMaxWidth: 800,
      subtitle:
        "Build expertise across design thinking, space planning, visualization, project execution, and emerging technologies shaping the future of interior design.",
      subtitleMaxWidth: 800,
    },
    narrow: true,
    modules: [
      { title: "Design Fundamentals & Planning", items: ["Space Planning", "Design Thinking", "Materials & Finishes", "Lighting Concepts"] },
      { title: "Technical Skills & Tools", items: ["CAD Drafting", "3D Modelling", "Rendering", "AI Design Tools"] },
      { title: "Applied Design & Execution", items: ["Residential Design", "Commercial Design", "Interior Detailing", "Project Workflows"] },
      { title: "Industry Exposure & Integration", items: ["Site Visits", "Vendor Interaction", "Project Coordination", "Client Presentations"] },
      { title: "Advanced Technologies", items: ["BIM Fundamentals", "Real-Time Visualization", "VR / AR Experiences", "Advanced Rendering"] },
    ],
    outcome: {
      title: "Industry-Ready Interior Design Skillset",
      items: [
        { icon: "/icons/professional-port.svg", title: "Professional Portfolio", text: "Build a standout professional portfolio" },
        { icon: "/icons/industry.svg", title: "Industry Skills", text: "Gain industry-relevant skills and experience" },
        { icon: "/icons/ai.svg", title: "AI-Powered Creativity", text: "Leverage AI-powered creative workflows" },
        { icon: "/icons/career.svg", title: "Career Ready", text: "Step into your creative career" },
      ],
    },
  },

  careers: {
    title: "Career Pathways",
    subtitle: "Career Options:",
    rows: [
      [
        { icon: "/icons/interior.svg", label: "Interior Designer Residential & Commercial" },
        { icon: "/icons/space.svg", label: "Space Planner & Layout Specialist" },
        { icon: "/icons/3d-artist.svg", label: "Interior Visualiser & 3D Rendering Artist" },
        { icon: "/icons/design.svg", label: "Design Documentation & BOQ Specialist" },
        { icon: "/icons/furniture.svg", label: "Furniture & Product Designer" },
        { icon: "/icons/retail.svg", label: "Retail & Exhibition Space Designer" },
      ],
      [
        { icon: "/icons/space.svg", label: "Hospitality & Restaurant Interior Designer" },
        { icon: "/icons/3d-artist.svg", label: "Set & Production Designer (Film & Television)" },
        { icon: "/icons/design.svg", label: "Interior Design Entrepreneur / Independent Consultant" },
        { icon: "/icons/furniture.svg", label: "Design Project Coordinator & Site Manager" },
        { icon: "/icons/retail.svg", label: "Vendor & Procurement Specialist" },
        { icon: "/icons/real-estate.svg", label: "Real Estate Staging & Styling Professional" },
      ],
    ],
  },

  audience: {
    title: "Who Is This For",
    subtitle: "Fashion Design at ADFT Is Built for Dreamers Who Want to Build Things.",
    items: creativeAudience,
  },

  difference: {
    image: { src: "/images/shared/difference-interior.webp", alt: "Modern living room with marble wall and pendant lights", width: 900, height: 1350 },
    imageSize: [393, 560],
    textSize: 18,
    items: differenceIcons("interior"),
  },
};

export default interior;

import type { ProgramDetail, StreamPageContent } from "@/lib/types";
import { creativeAudience, differenceIcons } from "./shared";

const certificateDetails: ProgramDetail[] = [
  { strong: "Duration:", text: "3 Months – 120 Hours" },
  { strong: "Level:", text: "Professional Certificate" },
  { strong: "60% Practical", text: "(72 Hours)" },
  { strong: "40% Theory", text: "(48 Hours)" },
];

const digital: StreamPageContent = {
  theme: "digital",
  spacing: { programs: 50, compare: 73, curriculum: 71, careers: 102, audience: 74, difference: 37, studio: 123 },

  hero: {
    slides: [
      {
        title: ["Create work the world"],
        highlight: ["cannot scroll past."],
        description:
          "From crafting compelling brand identities to creating dynamic motion graphics, gain the skills demanded by today’s digital creative landscape.",
        descriptionWidth: 640,
        offset: 70,
      },
    ],
    image: {
      src: "/images/digital/hero.webp",
      alt: "Excited digital design student holding a phone",
      intrinsic: [1028, 1406],
      left: 886,
      top: 44,
      width: 408,
    },
    rings: { x: 894, y: 164 },
  },

  features: [
    { icon: "/icons/studio.svg", label: "Brand & Identity Design" },
    { icon: "/icons/Layer_2.svg", label: "Web & UI Design" },
    { icon: "/icons/digital/feature-content.png", label: "Content Creation" },
    { icon: "/icons/digital/feature-motion.png", label: "Motion Graphics & VFX" },
    { icon: "/icons/ai-powered.svg", label: "AI-Integrated Workflows" },
    { icon: "/icons/site.svg", label: "Real-World Portfolio" },
  ],

  programs: {
    heading: {
      eyebrow: "Choose Your Level",
      title: "Find the program that fits your goal.",
      titleMaxWidth: 680,
      subtitle:
        "Programs across three levels - from a comprehensive one-year master diploma to focused specialist certificates. Every program is project-based, tool-driven, and built around real creative workflows.",
      subtitleMaxWidth: 710,
    },
    featured: [
      {
        image: { src: "/images/digital/program-master.webp", alt: "Designer's desk with an iMac, markers and sketchbook", width: 640, height: 448 },
        badge: "Most Comprehensive",
        title: "Master Diploma in Visual Design & Digital Media",
        details: [
          { strong: "Duration:", text: "1 Year - 480 Hours" },
          { strong: "Level:", text: "Master Diploma" },
        ],
        disciplines: "Graphic Design, Web Design, UI Design, Content Creation, Motion Graphics & VFX",
      },
      {
        image: { src: "/images/digital/program-diploma.webp", alt: "Hand drawing a colourful bird on a tablet", width: 640, height: 448 },
        badge: "Career-Focused",
        title: "Professional Diploma in Graphic Design",
        details: [
          { strong: "Duration:", text: "6 Months – 240 Hours" },
          { strong: "Level:", text: "Professional Diploma" },
          { strong: "60% Practical", text: "(144 Hours)" },
          { strong: "40% Theory", text: "(96 Hours)" },
        ],
        disciplines: "Graphic Design, Branding, Web Design, UI Fundamentals, Digital Publishing",
      },
    ],
    grid: [
      {
        image: { src: "/images/digital/program-ui.webp", alt: "Responsive website mock-ups on laptop, tablet and phone", width: 800, height: 471 },
        badge: "Specialist Program",
        title: "Professional Certificate in UI Design",
        details: certificateDetails,
        disciplines: "User Interface Design, Wireframing, Prototyping, Design Systems, Mobile & Web Interfaces",
      },
      {
        image: { src: "/images/digital/program-content.webp", alt: "Laptop and stylus resting on a tablet", width: 800, height: 533 },
        badge: "Creator Economy Ready",
        title: "Professional Certificate in Content Creation",
        details: certificateDetails,
        disciplines: "Content Strategy, Visual Storytelling, Social Media Content, Video Production, Digital Marketing Content",
      },
      {
        image: { src: "/images/digital/program-vfx.webp", alt: "Animator working on a 3D character", width: 800, height: 533 },
        badge: "Motion Design Specialist",
        title: "Professional Certification in VFX & Motion Graphics",
        details: certificateDetails,
        disciplines: "Content Strategy, Visual Storytelling, Social Media Content, Video Production, Digital Marketing Content",
      },
    ],
  },

  compare: {
    heading: {
      eyebrow: "Compare Programs",
      title: "Not Sure Where to Start?",
      subtitle: "Here is a quick overview to help you find the right fit.",
    },
    columns: [
      "Certificate in UI Design",
      "Certificate in Content Creation",
      "Certificate in VFX & Motion Graphics",
      "Professional Diploma in Graphic & Web Design",
      "Master Diploma in Visual Design & Digital Media",
    ],
    rows: [
      ["Duration", "Short Course", "Short Course", "Short Course", "6 Months", "1 Year"],
      ["Design Fundamentals", "✓", "✓", "✓", "✓", "✓"],
      ["Graphic & Brand Design", "—", "—", "—", "✓", "✓"],
      ["Web Design & Layout", "—", "—", "—", "✓", "✓"],
      ["UI Design & Prototyping", "✓", "—", "—", "Introductory", "✓"],
      ["Content Creation & Strategy", "—", "✓", "—", "—", "✓"],
      ["Motion Graphics & VFX", "—", "—", "✓", "—", "✓"],
      ["AI-Assisted Design Tools", "—", "—", "—", "Introductory", "✓"],
      ["Branding & Campaign Design", "—", "—", "—", "✓", "✓"],
      ["Projects", "1", "1", "1", "2", "5"],
      ["Final Integrated Project", "—", "—", "—", "—", "✓"],
      ["Ideal For", "UI Specialists", "Content Creators", "Motion Designers", "Design Generalists", "Complete Digital Designers"],
    ],
    ctaLead: "Still unsure?",
  },

  curriculum: {
    heading: {
      eyebrow: "What You’ll Master",
      title: "From Design Fundamentals to AI-Powered Creativity",
      titleMaxWidth: 800,
      subtitle:
        "Build expertise across visual design, content creation, motion graphics, web design, and the latest AI-assisted creative workflows.",
      subtitleMaxWidth: 830,
    },
    modules: [
      { title: "Design Fundamentals", text: "Master the principles of visual communication, typography, colour, layout, and branding." },
      {
        title: "Digital Design Tools",
        text: "Work with industry-standard tools for graphic, web, UI, video, motion graphics, and AI-assisted creative workflows.",
      },
      {
        title: "Graphic & Branding Design",
        text: "Create impactful brand identities, marketing materials, packaging designs, and social media & ad creatives.",
      },
      { title: "Web & UI Design", text: "Design responsive websites and intuitive interfaces that deliver seamless user experiences." },
      {
        title: "Content Creation & Media",
        text: "Create engaging content through storytelling, video production, copywriting, and content strategy across platforms.",
      },
      { title: "Motion Graphics & VFX + AI", text: "Bring ideas to life with animation, motion graphics, VFX, and AI-powered creative workflows." },
    ],
    outcome: {
      title: "Industry-Ready Creative Design Skillset",
      items: [
        { icon: "/icons/digital/outcome-design.png", title: "Develop original design thinking" },
        { icon: "/icons/digital/outcome-garment.png", title: "Master garment construction" },
        { icon: "/icons/digital/outcome-luxury.png", title: "Create luxury-quality fashion" },
        { icon: "/icons/digital/outcome-portfolio.png", title: "Build an employer-ready portfolio" },
        { icon: "/icons/digital/outcome-business.png", title: "Understand the business of fashion" },
        { icon: "/icons/digital/outcome-career.png", title: "Launch your career with confidence" },
      ],
    },
  },

  careers: {
    title: "Career Pathways",
    subtitle: "ADFT Fashion Design graduates go on to work across the full spectrum of the fashion and apparel industry.",
    rows: [
      [
        { icon: "/icons/digital/career-brand.png", label: "Brand & Graphic Designer" },
        { icon: "/icons/digital/career-ui.png", label: "UI Designer & Product Designer" },
        { icon: "/icons/digital/career-uxui.png", label: "UX/UI Specialist" },
        { icon: "/icons/digital/career-web.png", label: "Web Designer & Front-End Designer" },
        { icon: "/icons/digital/career-social.png", label: "Social Media Designer" },
        { icon: "/icons/digital/career-content.png", label: "Content Creator" },
      ],
      [
        { icon: "/icons/digital/career-motion.png", label: "Motion Graphics Designer" },
        { icon: "/icons/digital/career-vfx.png", label: "VFX Artist" },
        { icon: "/icons/digital/career-video.png", label: "Video Editor" },
        { icon: "/icons/digital/career-freelance.png", label: "Freelance Digital Designer" },
        { icon: "/icons/digital/career-campaign.png", label: "Campaign Designer" },
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
    items: differenceIcons("digital"),
  },
};

export default digital;

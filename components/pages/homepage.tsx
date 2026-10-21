import Hero from "@/components/sections/Hero";
import StudioSection from "@/components/sections/StudioSection";
import StatsBar from "@/components/home/StatsBar";
import StreamCards from "@/components/home/StreamCards";
import HomeDifference from "@/components/home/HomeDifference";
import CtaBanner from "@/components/home/CtaBanner";
import type { HeroContent } from "@/lib/types";

// Only the first slide is shown for now; the others are kept for when the slider returns.
const heroSlides: HeroContent["slides"] = [
  {
    title: ["Turn Your", "Passion into"],
    highlight: ["Your Profession."],
    description:
      "Studio-first programs in Fashion & Costume Design, Interior & Spatial Design, and Digital & Creative Media - powered by industry tools and AI-enabled workflows, backed by the legacy of Naturals Salon.",
    descriptionWidth: 560,
  },
  {
    title: ["Shape Every"],
    highlight: ["Space."],
    description:
      "Residential, retail and experiential spaces taught through live studios with AutoCAD, SketchUp and real-world briefs.",
    descriptionWidth: 560,
  },
  {
    title: ["Create What's"],
    highlight: ["Next-Gen."],
    description:
      "UI/UX, motion and AI-led creative workflows for the modern studio, built with the tools working professionals use every day.",
    descriptionWidth: 560,
  },
];

const hero: HeroContent = {
  slides: heroSlides.slice(0, 1),
  image: {
    src: "/images/home/hero-student.webp",
    alt: "Smiling ADFT student with arms crossed",
    intrinsic: [883, 1294],
    left: 826,
    top: 23,
    width: 423,
  },
  rings: { x: 790, y: 195 },
};

export default function HomePage() {
  return (
    <>
      <Hero
        {...hero}
        variant="home"
        dotCount={0}
        primaryCta={{ label: "Explore Programs", href: "#section-streams" }}
        secondaryCta={{ label: "Enquire Now", href: "#section-cta" }}
      />
      <StatsBar />
      <StreamCards />
      <HomeDifference />
      <CtaBanner />
      <StudioSection />
    </>
  );
}

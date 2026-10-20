import Hero from "@/components/sections/Hero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import ProgramsSection from "@/components/sections/ProgramsSection";
import CompareSection from "@/components/sections/CompareSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import CareerPathways from "@/components/sections/CareerPathways";
import AudienceSection from "@/components/sections/AudienceSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import StudioSection from "@/components/sections/StudioSection";
import type { StreamPageContent } from "@/lib/types";

const streamNames: Record<StreamPageContent["theme"], string> = {
  fashion: "Fashion & Costume Design",
  digital: "Digital Design & Creative Media",
  interior: "Interior & Spatial Design",
};

export default function StreamPage({ content }: { content: StreamPageContent }) {
  const space = content.spacing ?? {};
  return (
    <div className={`theme-${content.theme}`}>
      <Hero
        {...content.hero}
        primaryCta={{ label: "Explore Programs", href: "#programs" }}
        secondaryCta={{ label: "Enquire Now", href: "#enrol" }}
      />
      <FeatureStrip items={content.features} rings={content.hero.rings} />
      <ProgramsSection {...content.programs} space={space.programs} />
      <CompareSection {...content.compare} space={space.compare} />
      <CurriculumSection {...content.curriculum} space={space.curriculum} />
      <CareerPathways {...content.careers} space={space.careers} />
      <AudienceSection {...content.audience} stream={streamNames[content.theme]} space={space.audience} />
      <DifferenceSection {...content.difference} space={space.difference} />
      <StudioSection space={space.studio} />
    </div>
  );
}
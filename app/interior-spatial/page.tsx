import type { Metadata } from "next";
import StreamPage from "@/components/pages/StreamPage";
import interior from "@/lib/content/interior";

export const metadata: Metadata = {
  title: "Interior & Spatial Design | Naturals ADFT",
  description:
    "Master and professional diplomas in interior and spatial design, combining spatial thinking with technical precision, at Naturals ADFT.",
};

export default function InteriorSpatial() {
  return <StreamPage content={interior} />;
}

import type { Metadata } from "next";
import StreamPage from "@/components/pages/StreamPage";
import fashion from "@/lib/content/fashion";

export const metadata: Metadata = {
  title: "Fashion & Costume Design | Naturals ADFT",
  description:
    "Studio-driven fashion and costume design programs, from a professional certificate to a master diploma, at Naturals ADFT.",
};

export default function FashionDesign() {
  return <StreamPage content={fashion} />;
}

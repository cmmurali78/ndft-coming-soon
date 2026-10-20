import type { Metadata } from "next";
import StreamPage from "@/components/pages/StreamPage";
import digital from "@/lib/content/digital";

export const metadata: Metadata = {
  title: "Digital Design & Creative Media | Naturals ADFT",
  description:
    "Graphic, UI, content creation and motion design programs built around real creative workflows at Naturals ADFT.",
};

export default function DigitalDesign() {
  return <StreamPage content={digital} />;
}

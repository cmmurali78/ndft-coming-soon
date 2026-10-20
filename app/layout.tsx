import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./styles.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Naturals ADFT",
  description:
    "Naturals ADFT, Academy of Design, Fashion & Technology. Studio-first programs in Fashion, Interior & Spatial, and Digital Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} antialiased`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

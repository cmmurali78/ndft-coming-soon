import Image from "next/image";
import Link from "next/link";
import { streamLinks } from "@/lib/navigation";

const quickLinks = [
  { label: "About ADFT", href: "/about" },
  { label: "Franchise", href: "/franchise" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: "/icons/fab.svg" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "/icons/insta.svg" },
  { label: "X (Twitter)", href: "https://x.com/", icon: "/icons/twit.svg" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "/icons/you.svg" },
];

export default function Footer() {
  return (
    <footer id="section-footer">
      <div className="footer-streams">
        <div className="container footer-streams__list">
          {streamLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`footer-stream footer-stream--${link.color}`}>
              {link.streamLabel}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-main__inner">
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="Naturals ADFT, Academy of Design, Fashion & Technology"
              width={268}
              height={139}
              className="footer-brand__logo"
            />
            <p className="footer-brand__text">
              Naturals Academy of Design, Fashion &amp; Technology (ADFT) is a contemporary creative education
              initiative nurturing the next generation of designers and creative professionals. Bringing together
              Fashion, Interior Design, and Digital &amp; Creative Media, we empower aspiring creators to think
              differently, experiment boldly and turn their ideas into impactful careers. Through industry-relevant
              programmes, AI-integrated learning and innovation-led experiences, we transform creative potential into
              industry-ready talent.
            </p>
            <p className="footer-brand__initiative">A Skill Development Initiative of</p>
            <div className="footer-brand__partners">
              <Image
                src="/images/intellinxt.webp"
                alt="IntelliNXT — Intelligence. Applied."
                width={229}
                height={76}
                className="footer-brand__intellinxt"
              />
              <span className="footer-brand__partner-divider" />
              <Image
                src="/images/skill-india.webp"
                alt="Skill India – Kaushal Bharat Kushal Bharat"
                width={96}
                height={79}
                className="footer-brand__skill-india"
              />
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col-stack">
              <div className="footer-col">
                <h2>Programs</h2>
                <ul>
                  {streamLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.footerLabel}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h2>Connect</h2>
                <div className="footer-social">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Image src={social.icon} alt="" width={30} height={30} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h2>Quick Links</h2>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <span className="footer-bottom__copy">
            © {new Date().getFullYear()} Naturals ADFT. All rights reserved.
          </span>
          <div className="footer-bottom__legal">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="footer-bottom__sep" aria-hidden="true">|</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

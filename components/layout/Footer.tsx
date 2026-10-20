import Image from "next/image";
import Link from "next/link";
import { streamLinks } from "@/lib/navigation";

const quickLinks = [
  { label: "About ADFT", href: "/about" },
  { label: "Franchise", href: "/franchise" },
  { label: "Articles", href: "/articles" },
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
              {link.footerLabel}
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
              Academy of Design,
              <br />
              Fashion &amp; Technology
            </p>
          </div>

          <div className="footer-cols">
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

            <div className="footer-col">
              <h2>Connect</h2>
              <ul>
                <li>
                  <a href="mailto:info@naturalsadft.com">Email address</a>
                </li>
                <li>
                  <a href="tel:+910000000000">Phone / WhatsApp</a>
                </li>
              </ul>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <Image src={social.icon} alt="" width={30} height={30} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__inner">
          <p>Designing the future. One creative at a time.</p>
          <div className="footer-legal">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

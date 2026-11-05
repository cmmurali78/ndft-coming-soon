"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { applyHref, streamColorVar, streamLinks } from "@/lib/navigation";

function SearchField({ id }: { id: string }) {
  return (
    <form className="site-search" role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor={id} className="visually-hidden">
        Search
      </label>
      <input id={id} type="search" placeholder="Search" />
      <button type="submit" aria-label="Submit search">
        <Image src="/icons/search.svg" alt="" width={18} height={18} />
      </button>
    </form>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const apply = applyHref(pathname);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <nav className="topbar__links" aria-label="Utility">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <div className="topbar__actions">
            <a
              href="https://adft.lmsstudy.com/"
              className="topbar__pill topbar__pill--login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student Login
            </a>
            <Link href="/verify" className="topbar__pill topbar__pill--verify">
              Verify Credential
            </Link>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="site-header__logo" href="/" aria-label="Naturals ADFT home">
            <Image src="/images/adft-logo.jpg" alt="Naturals ADFT" width={623} height={359} preload />
          </Link>

          <SearchField id="header-search" />

          <nav className="site-nav" aria-label="Primary">
            {streamLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-pill nav-pill--${link.color}${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/franchise" className={`nav-link${pathname === "/franchise" ? " is-active" : ""}`}>
              Franchise
            </Link>
            <a href={apply} className="btn btn--gradient">
              Apply Now
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
              <path d="M2 2h24M2 11h24M2 20h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`menu-backdrop${menuOpen ? " is-visible" : ""}`} onClick={closeMenu} aria-hidden="true" />
      <aside
        id="site-menu"
        className={`menu-panel${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
      >
        <div className="menu-panel__head">
          <Image src="/images/adft-logo.jpg" alt="Naturals ADFT" width={623} height={359} />
          <button className="menu-toggle" type="button" aria-label="Close menu" onClick={closeMenu}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 3l16 16M19 3L3 19" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <SearchField id="menu-search" />

        <nav className="menu-panel__nav" aria-label="Mobile">
          <Link href="/" className={`menu-panel__link${pathname === "/" ? " is-active" : ""}`} onClick={closeMenu}>
            Home
          </Link>
          {streamLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`menu-panel__link${pathname === link.href ? " is-active" : ""}`}
              style={{ "--dot": streamColorVar[link.color] } as React.CSSProperties}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/franchise"
            className={`menu-panel__link${pathname === "/franchise" ? " is-active" : ""}`}
            onClick={closeMenu}
          >
            Franchise
          </Link>
          <Link
            href="/about"
            className={`menu-panel__link${pathname === "/about" ? " is-active" : ""}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`menu-panel__link${pathname === "/blog" ? " is-active" : ""}`}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`menu-panel__link${pathname === "/contact" ? " is-active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        <div className="menu-panel__cta">
          <a href={apply} className="btn btn--gradient" onClick={closeMenu}>
            Apply Now
          </a>
        </div>
      </aside>
    </>
  );
}

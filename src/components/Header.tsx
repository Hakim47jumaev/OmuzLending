"use client";

import Link from "next/link";
import { useState } from "react";
import { LOCALE_SWITCH, type Content, type Locale } from "@/content";
import { useLanding } from "./LandingShell";
import Logo from "./Logo";
import styles from "./Header.module.css";

export default function Header({ locale, t }: { locale: Locale; t: Content }) {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useLanding();
  const close = () => setOpen(false);
  const activeLang = LOCALE_SWITCH.findIndex((l) => l.code === locale);

  const links = [
    { href: "#modules", label: t.nav.features },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#clients", label: t.nav.clients },
    { href: "#faq", label: t.nav.faq },
    { href: "#demo", label: t.nav.contact },
  ];

  return (
    <header className={`${styles.hdr} ${open ? styles.open : ""}`}>
      <div className={styles.hdrin}>
        <button
          type="button"
          className={styles.burger}
          onClick={() => setOpen((o) => !o)}
          aria-label={t.a11y.menu}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <a className={styles.hlogo} href="#top" aria-label="Omuz">
          <Logo animated />
        </a>

        <nav id="main-nav" className={styles.hnav}>
          {links.map((l) => (
            <a key={l.href} className={styles.navlink} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.hright}>
          <div className={styles.lgs} data-i={activeLang} role="group" aria-label={t.a11y.language}>
            {LOCALE_SWITCH.map((l) => (
              <Link
                key={l.code}
                href={`/${l.code}`}
                hrefLang={l.code}
                // Смена языка не должна прокручивать страницу наверх.
                scroll={false}
                className={`${styles.lg} ${l.code === locale ? styles.on : ""}`}
                aria-current={l.code === locale ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button type="button" className={styles.theme} onClick={toggleTheme} aria-label={t.a11y.theme}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

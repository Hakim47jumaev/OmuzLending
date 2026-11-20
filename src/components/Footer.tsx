import type { Content } from "@/content";
import { CONTACTS } from "@/content/common";
import Logo from "./Logo";
import OpenCalcLink from "./OpenCalcLink";
import Ornament from "./Ornament";
import StoreLinks from "./StoreLinks";
import styles from "./Footer.module.css";

export default function Footer({ t }: { t: Content }) {
  return (
    <footer className={styles.footer}>
      <Ornament variant="footer" />
      <div className={styles.ftin}>
        <div className={styles.brand}>
          <Logo height={32} />
          <span className={styles.tagline}>{t.footer.tagline}</span>
        </div>
        <nav className={styles.col} aria-label={t.footer.product}>
          <span className={styles.colTitle}>{t.footer.product}</span>
          <a className={styles.link} href="#modules">
            {t.nav.features}
          </a>
          <OpenCalcLink className={styles.link}>{t.nav.addons}</OpenCalcLink>
          <a className={styles.link} href="#pricing">
            {t.nav.pricing}
          </a>
          <a className={styles.link} href="#faq">
            {t.nav.faq}
          </a>
        </nav>
        <div className={`${styles.col} ${styles.contactCol}`}>
          <span className={styles.colTitle}>{t.footer.contact}</span>
          <a className={styles.link} href={CONTACTS.phoneHref}>
            {CONTACTS.phone}
          </a>
          <a className={styles.link} href={CONTACTS.instagramHref} target="_blank" rel="noopener noreferrer">
            {CONTACTS.instagramLabel} {CONTACTS.instagram}
          </a>
          <span className={styles.link}>{t.demo.place}</span>
          <StoreLinks align="start" />
        </div>
      </div>
      <div className={styles.ftcr}>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}

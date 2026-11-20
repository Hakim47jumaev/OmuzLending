import styles from "./ToTop.module.css";

export default function ToTop({ label }: { label: string }) {
  return (
    <a className={styles.totop} href="#top" aria-label={label}>
      <svg className={styles.arrow} aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V5M5 11.5l7-7 7 7" />
      </svg>
    </a>
  );
}

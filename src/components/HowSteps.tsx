import type { Content } from "@/content";
import styles from "./HowSteps.module.css";

export default function HowSteps({ t }: { t: Content }) {
  return (
    <section id="how" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <h2 className="h2 reveal">{t.how.title}</h2>
        <ol className={styles.list}>
          {t.how.steps.map((s, i) => (
            <li key={s.title} className={`${styles.card} lift reveal`}>
              <span className={styles.big} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.title}>{s.title}</span>
              <span className={styles.desc}>{s.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

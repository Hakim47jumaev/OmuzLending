import type { Content } from "@/content";
import Stats from "./Stats";
import styles from "./Results.module.css";

/** «Было / стало» + статистика со ссылками на источники. */
export default function Results({ t }: { t: Content }) {
  return (
    <section id="results" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <h2 className={`h2 reveal ${styles.title}`}>{t.results.title}</h2>
        <div className={styles.rows}>
          {t.results.rows.map((r) => (
            <div key={r.name} className={`${styles.rs} reveal`}>
              <span className={styles.rn}>{r.name}</span>
              <span>
                <span className={styles.rl}>{t.results.before}</span>
                <span className={styles.rb}>{r.before}</span>
              </span>
              <span>
                <span className={styles.rl}>{t.results.now}</span>
                <span className={styles.ra}>{r.after}</span>
              </span>
              <span className={styles.rp}>{r.delta}</span>
            </div>
          ))}
        </div>
        <Stats t={t} />
        <p className={styles.note}>{t.results.note}</p>
      </div>
    </section>
  );
}

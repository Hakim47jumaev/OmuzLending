import type { CSSProperties } from "react";
import type { Content } from "@/content";
import styles from "./Facts.module.css";

/**
 * Ключевые цифры (3 года / 15 модулей / 7 ролей).
 * В макете данные и анимация счётчика (.count) есть, но секция не была размещена —
 * оформление собрано из токенов макета.
 */
export default function Facts({ t }: { t: Content }) {
  return (
    <section className={styles.facts}>
      <ul className={`wrap ${styles.list}`}>
        {t.facts.map((f) => (
          <li key={f.label} className={`${styles.item} reveal`}>
            <span className="sr-only">{f.value}</span>
            <span className={styles.num} style={{ "--n": f.value } as CSSProperties} aria-hidden="true" />
            <span className={styles.label}>{f.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

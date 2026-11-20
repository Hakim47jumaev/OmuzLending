import type { Content } from "@/content";
import styles from "./Stats.module.css";

/**
 * Внешняя статистика. Как в макете, источник хранится в данных (stats.items[].source), но не выводится.
 * TODO: проверить источники (McKinsey 2020, Imperial College 2019, HBR 2011)
 * и при необходимости заменить на локальные данные.
 */
export default function Stats({ t }: { t: Content }) {
  return (
    <div className={styles.block}>
      <p className={styles.title}>{t.stats.title}</p>
      <div className={styles.list}>
        {t.stats.items.map((s) => (
          <div key={s.value} className={`${styles.item} reveal`}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.text}>{s.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

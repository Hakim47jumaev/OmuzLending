import type { Content } from "@/content";
import type { CompareCell } from "@/content/types";
import { PLAN_IDS, PLAN_NAMES, POPULAR_PLAN } from "@/lib/pricing";
import styles from "./Compare.module.css";

const HL_INDEX = PLAN_IDS.indexOf(POPULAR_PLAN);

function cellView(v: CompareCell) {
  if (v === 1) return { text: "✓", cls: styles.ok };
  if (v === 0) return { text: "—", cls: styles.dim };
  return { text: v, cls: styles.txt };
}

export default function Compare({ t }: { t: Content }) {
  return (
    <section id="compare" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <h2 className={`h2 reveal ${styles.title}`}>{t.compare.title}</h2>
        {/* На узких экранах таблица прокручивается по горизонтали внутри блока. */}
        <div className={`${styles.cmpwrap} reveal`} role="region" aria-label={t.compare.title} tabIndex={0}>
          <table className={styles.cmp}>
            <thead>
              <tr>
                <th scope="col" className={styles.first}>
                  {t.compare.moduleCol}
                </th>
                {PLAN_IDS.map((id, i) => (
                  <th scope="col" key={id} className={i === HL_INDEX ? styles.hl : undefined}>
                    {PLAN_NAMES[id]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.compare.rows.map((row) => (
                <tr key={row.name}>
                  <th scope="row" className={styles.first}>
                    <span>{row.name}</span> {row.soon && <span className={`soon ${styles.soon}`}>{t.pricing.soon}</span>}
                  </th>
                  {row.cells.map((c, i) => {
                    const v = cellView(c);
                    return (
                      <td key={i} className={`${v.cls} ${i === HL_INDEX ? styles.hl : ""}`}>
                        {v.text}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

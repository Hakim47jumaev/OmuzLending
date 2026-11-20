import type { CSSProperties } from "react";
import type { Content } from "@/content";
import styles from "./Flow.module.css";

// Позиции узлов зигзага (в процентах ширины и px сверху) — из макета.
const LEFT = [8.3, 25, 41.7, 58.3, 75, 91.7];

export default function Flow({ t }: { t: Content }) {
  return (
    <section className={`stage ${styles.section}`}>
      <div className="orb orb-a" style={{ top: -320, left: -200 }} />
      <div className={`wrap z ${styles.inner}`}>
        <div className="head reveal">
          <h2 className="h2">{t.flow.title}</h2>
          <p className={`lead ${styles.sub}`}>{t.flow.sub}</p>
        </div>
        <div className={styles.scroller}>
          <div className={styles.flwrap}>
            <svg className={styles.line} aria-hidden="true" viewBox="0 0 1000 230" preserveAspectRatio="none">
              <polyline
                className={styles.polyline}
                points="83,40 250,130 417,40 583,130 750,40 917,130"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <ol className={styles.steps}>
            {t.flow.steps.map((label, i) => (
              <li
                key={label}
                className={styles.item}
                style={{ left: `${LEFT[i]}%`, top: i % 2 === 0 ? 12 : 102 }}
              >
                <span className={styles.node} style={{ "--i": i } as CSSProperties}>
                  {i + 1}
                </span>
                <span className={styles.label}>{label}</span>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

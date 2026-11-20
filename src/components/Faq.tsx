"use client";

import { useId, useState } from "react";
import type { Content } from "@/content";
import styles from "./Faq.module.css";

export default function Faq({ t }: { t: Content }) {
  // Как в макете: первый вопрос открыт, одновременно открыт максимум один.
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <section id="faq" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <h2 className="h2 reveal">{t.faq.title}</h2>
        <div className={styles.list}>
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${uid}-a${i}`;
            return (
              <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <h3 className={styles.qh}>
                  <button
                    type="button"
                    className={styles.q}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className={styles.pm} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div className={styles.a} id={panelId} role="region" inert={!isOpen}>
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

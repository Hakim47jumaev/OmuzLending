"use client";

import { useState } from "react";
import type { Content } from "@/content";
import styles from "./Clients.module.css";

/** Инициалы для аватара — та же логика, что в макете. */
const initials = (name: string) =>
  name
    .replace(/[^A-Za-zА-Яа-яЁёҒғӢӣҚқҲҳҶҷӮӯ ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

export default function Clients({ t }: { t: Content }) {
  const [current, setCurrent] = useState(0);
  const quotes = t.clients.quotes;
  const n = quotes.length;

  return (
    <section id="clients" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.head}>
          <h2 className="h2 reveal">{t.clients.title}</h2>
          <div className={styles.arrows}>
            <button type="button" className="stp" aria-label={t.a11y.prev} onClick={() => setCurrent((current + n - 1) % n)}>
              ←
            </button>
            <button type="button" className="stp" aria-label={t.a11y.next} onClick={() => setCurrent((current + 1) % n)}>
              →
            </button>
          </div>
        </div>

        <div className={styles.car}>
          {quotes.map((q, i) => {
            const active = i === current;
            return (
              <figure
                key={q.name}
                className={`${styles.slide} lift`}
                style={{ opacity: active ? 1 : 0, transform: `translateX(${active ? 0 : 24}px)`, pointerEvents: active ? "auto" : "none" }}
                aria-hidden={!active}
              >
                <div className={styles.qav}>
                  <span>{initials(q.name)}</span>
                </div>
                <div className={styles.body}>
                  <span aria-hidden="true" className={styles.mark}>
                    “
                  </span>
                  <blockquote className={styles.quote}>{q.text}</blockquote>
                  <figcaption className={styles.caption}>
                    <span className={styles.name}>{q.name}</span>
                    <span className={styles.role}>{q.role}</span>
                  </figcaption>
                </div>
              </figure>
            );
          })}
        </div>

        <div className={styles.dots}>
          {quotes.map((q, i) => (
            <button
              key={q.name}
              type="button"
              className={`${styles.qdot} ${i === current ? styles.on : ""}`}
              aria-label={String(i + 1)}
              aria-current={i === current}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

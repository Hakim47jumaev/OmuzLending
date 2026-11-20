import { Fragment, type CSSProperties } from "react";
import type { Content, Locale } from "@/content";
import { HERO_REGISTER } from "@/content/common";
import Header from "./Header";
import Ornament from "./Ornament";
import styles from "./Hero.module.css";

const CELL_CLASS = { p: styles.cp, a: styles.ca, g: styles.cg } as const;

export default function Hero({ locale, t }: { locale: Locale; t: Content }) {
  return (
    <section className={`stage ${styles.hero}`} id="top">
      <Ornament variant="top" />
      <div className={styles.inner}>
        <Header locale={locale} t={t} />

        <div className={styles.herowrap}>
          <h1 className={styles.h1}>
            <span className="sr-only">{t.hero.headlines[0]}</span>
            {/* Заголовки сменяют друг друга, слова появляются по очереди (как в макете). */}
            <span className={styles.hv} aria-hidden="true">
              {t.hero.headlines.map((line, i) => (
                <span key={i} className={`${styles.v} ${styles[`v${i + 1}`]}`}>
                  {line.split(" ").map((word, j) => (
                    <Fragment key={j}>
                      <span className={styles.word} style={{ animationDelay: `${(i * 6 + 0.2 + j * 0.22).toFixed(2)}s` }}>
                        {word}
                      </span>{" "}
                    </Fragment>
                  ))}
                </span>
              ))}
            </span>
          </h1>
          <svg className={styles.pen} viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
            <path pathLength={1} d="M3 9 C40 2 70 13 110 6 S190 2 230 8 S280 11 297 4" />
          </svg>
          <p className={styles.sub}>{t.hero.sub}</p>
          <a className="btn shine" href="#demo">
            {t.hero.cta}
          </a>

          <div className={styles.cardwrap}>
            <div className={`${styles.reg} float`} aria-hidden="true">
              <div className={styles.rh}>
                <b>{HERO_REGISTER.title}</b>
                <span className={styles.live}>
                  <span className="livedot" />
                  {HERO_REGISTER.live}
                </span>
              </div>
              <div className={styles.rg}>
                <span />
                {HERO_REGISTER.days.map((d) => (
                  <span key={d} className={styles.d}>
                    {d}
                  </span>
                ))}
                <span className={styles.d}>{HERO_REGISTER.currency}</span>
                {HERO_REGISTER.rows.map((row, r) => (
                  <Row key={row.name} row={row} index={r} />
                ))}
              </div>
              <div className={styles.rf}>
                <span className={styles.pct}>{HERO_REGISTER.progress}%</span>
                <span className={styles.bar}>
                  <i style={{ width: `${HERO_REGISTER.progress}%` }} />
                </span>
              </div>
              <div className={styles.chip}>
                <span className="livedot" />
                {HERO_REGISTER.chip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ row, index }: { row: (typeof HERO_REGISTER.rows)[number]; index: number }) {
  return (
    <>
      <span className={styles.n}>{row.name}</span>
      {row.cells.map((c, k) => (
        <i
          key={k}
          className={`${styles.c} ${CELL_CLASS[c]}`}
          style={{ "--d": `${((index * 5 + k) * 0.35).toFixed(2)}s` } as CSSProperties}
        />
      ))}
      <span className={`${styles.pay} ${row.paid ? styles.ok : styles.due}`}>{row.pay}</span>
    </>
  );
}

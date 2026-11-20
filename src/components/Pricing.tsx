"use client";

import { useState } from "react";
import type { Content } from "@/content";
import { formatMoney, periodPrice, PLAN_IDS, PLAN_NAMES, POPULAR_PLAN } from "@/lib/pricing";
import { useLanding } from "./LandingShell";
import styles from "./Pricing.module.css";

export default function Pricing({ t }: { t: Content }) {
  const [period, setPeriod] = useState(0);
  const { calcOpen, toggleCalc, setFormPlan } = useLanding();
  const p = t.pricing;

  return (
    <section id="pricing" className={`stage ${styles.section}`}>
      <div className="orb orb-a" style={{ top: -300, left: "auto", right: -200 }} />
      <div className={`wrap z ${styles.inner}`}>
        <div className="head reveal">
          <h2 className="h2">{p.title}</h2>
          <p className={`lead ${styles.sub}`}>{p.sub}</p>
        </div>

        <div className={`${styles.segRow} reveal`}>
          <div className={styles.seg} role="group">
            {p.periods.map((label, i) => (
              <button
                key={label}
                type="button"
                className={`${styles.segb} ${period === i ? styles.on : ""}`}
                aria-pressed={period === i}
                onClick={() => setPeriod(i)}
              >
                {label}
                {p.periodChips[i] && <span className={styles.segchip}>{p.periodChips[i]}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.plans}>
          {PLAN_IDS.map((id) => {
            const plan = p.plans[id];
            const popular = id === POPULAR_PLAN;
            const { monthly, total } = periodPrice(id, period);
            const totalLine = p.periodTotals[period] ? p.periodTotals[period].replace("{T}", formatMoney(total)) : "";
            return (
              <div key={id} className={`${styles.card} lift ${popular ? styles.popular : ""}`}>
                <div className={styles.cardHead}>
                  {popular && <span className={styles.poptag}>{p.popular}</span>}
                  <h3 className={styles.name}>{PLAN_NAMES[id]}</h3>
                </div>
                <div className={styles.priceBlock}>
                  <span className={styles.price}>
                    {plan.pricePrefix ? `${plan.pricePrefix} ` : ""}
                    {formatMoney(monthly)}
                  </span>
                  <span className={styles.unit}>{plan.unit}</span>
                  <span className={styles.tot}>{totalLine}</span>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((f) => (
                    <li key={f.text}>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--pr)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                      <span className={styles.ftext}>
                        {f.text} {f.soon && <span className={`soon ${styles.soon}`}>{p.soon}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn nocap ${styles.cta} ${popular ? styles.ctaMain : styles.ctaGhost}`}
                  href="#demo"
                  onClick={() => setFormPlan(PLAN_NAMES[id])}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className={`${styles.calcRow} reveal`}>
          <button type="button" className={`btn shine ${styles.calcBtn}`} onClick={toggleCalc} aria-expanded={calcOpen} aria-controls="addons">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="3" width="14" height="18" rx="2" />
              <path d="M8 7h8M8 12h2M12 12h2M8 16h2M12 16h2" />
            </svg>
            {calcOpen ? p.calcHide : p.calcOpen}
          </button>
        </div>
      </div>
    </section>
  );
}

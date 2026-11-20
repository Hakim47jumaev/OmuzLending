"use client";

import { useMemo, useState } from "react";
import type { Content } from "@/content";
import {
  ADDONS,
  BRANCHES,
  calculate,
  formatMoney,
  PLAN_INCLUDES,
  PLAN_NAMES,
  STUDENTS,
  type AddonId,
} from "@/lib/pricing";
import { useLanding } from "./LandingShell";
import styles from "./Calculator.module.css";

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function Calculator({ t }: { t: Content }) {
  const { calcOpen } = useLanding();
  const c = t.calc;
  const [branches, setBranches] = useState<number>(BRANCHES.initial);
  const [students, setStudents] = useState<number>(STUDENTS.initial);
  const [selected, setSelected] = useState<ReadonlySet<AddonId>>(() => new Set());

  const result = useMemo(() => calculate(branches, students, selected), [branches, students, selected]);
  const best = result.best;

  const toggle = (id: AddonId) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const money = (n: number) => `${formatMoney(n)} ${c.currency}`;

  return (
    <section id="addons" className={styles.section} hidden={!calcOpen}>
      <div className={`wrap ${styles.inner}`}>
        <div className="head reveal">
          <h2 className="h2">{c.title}</h2>
          <p className={`lead ${styles.sub}`}>{c.sub}</p>
        </div>

        <div className={styles.calc}>
          <div className={styles.left}>
            <Stepper
              label={c.branchesLabel}
              value={branches}
              onDec={() => setBranches((v) => clamp(v - BRANCHES.step, BRANCHES.min, BRANCHES.max))}
              onInc={() => setBranches((v) => clamp(v + BRANCHES.step, BRANCHES.min, BRANCHES.max))}
            />
            <Stepper
              label={c.studentsLabel}
              value={students}
              onDec={() => setStudents((v) => clamp(v - STUDENTS.step, STUDENTS.min, STUDENTS.max))}
              onInc={() => setStudents((v) => clamp(v + STUDENTS.step, STUDENTS.min, STUDENTS.max))}
            />

            <div className={styles.modules}>
              <span className={styles.qlabel}>{c.modulesLabel}</span>
              <div className={styles.ad}>
                {ADDONS.map((a) => {
                  const on = selected.has(a.id);
                  const inPlan = PLAN_INCLUDES[best.id].includes(a.id);
                  const incl = inPlan
                    ? c.includedInYours
                    : a.incl === "pro"
                      ? c.includedPro
                      : a.incl === "biz"
                        ? c.includedBiz
                        : "";
                  return (
                    <button
                      key={a.id}
                      type="button"
                      className={`${styles.addon} ${on ? styles.on : ""}`}
                      aria-pressed={on}
                      onClick={() => toggle(a.id)}
                    >
                      <span className={styles.addonTop}>
                        <span className={`soon ${styles.addonSoon}`}>{c.soon}</span>
                        <span className={styles.tick} aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--onpr)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                          </svg>
                        </span>
                      </span>
                      <span className={styles.addonName}>{c.addons[a.id].name}</span>
                      <span className={styles.addonPrice}>
                        <span className={styles.price}>
                          +{a.price} {c.currency}
                        </span>
                        <span className={styles.incl}>{incl}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className={`stage ${styles.right}`} aria-live="polite">
            <div className="orb orb-b" style={{ top: -160 }} />
            <div className={`z ${styles.rightInner}`}>
              <span className={styles.recLbl}>{c.recommended}</span>
              <div className={styles.recBlock}>
                <span className={styles.recName}>{PLAN_NAMES[best.id]}</span>
                <span className={styles.total}>{formatMoney(best.total)}</span>
                <span className={styles.per}>{c.perMonth}</span>
              </div>
              <span className={styles.summary}>
                {branches} {c.branchWord} · {students} {c.studentsWord} · {result.selectedCount} {c.modulesWord}
              </span>
              <div className={styles.list}>
                {result.quotes.map((q) => {
                  const note = !q.available
                    ? c.reasons[q.id]
                    : q.extra
                      ? c.breakdown.replace("{B}", formatMoney(q.base)).replace("{E}", formatMoney(q.extra))
                      : (result.selectedCount > 0 ? c.allIn : c.baseOnly).replace("{B}", formatMoney(q.base));
                  return (
                    <div key={q.id} className={styles.planRow} style={{ opacity: q.available ? 1 : 0.5 }}>
                      <span className={styles.planInfo}>
                        <span className={styles.planName}>{PLAN_NAMES[q.id]}</span>
                        <span className={styles.planNote}>{note}</span>
                      </span>
                      <span className={styles.planTotal}>{q.available ? money(q.total) : "-"}</span>
                    </div>
                  );
                })}
              </div>
              <a className={`btn shine nocap ${styles.cta}`} href="#demo">
                {t.pricing.cta}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stepper({ label, value, onDec, onInc }: { label: string; value: number; onDec: () => void; onInc: () => void }) {
  return (
    <div className={styles.stepRow}>
      <span className={styles.qlabel}>{label}</span>
      <div className={styles.stepper}>
        <button type="button" className="stp" aria-label={`${label} −`} onClick={onDec}>
          −
        </button>
        <span className={styles.value} aria-live="polite">
          {value}
        </span>
        <button type="button" className="stp" aria-label={`${label} +`} onClick={onInc}>
          +
        </button>
      </div>
    </div>
  );
}

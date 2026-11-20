"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions/lead";
import type { Content } from "@/content";
import { CONTACTS } from "@/content/common";
import { PLAN_IDS, PLAN_NAMES } from "@/lib/pricing";
import { useLanding } from "./LandingShell";
import styles from "./DemoForm.module.css";

export default function DemoForm({ t }: { t: Content }) {
  const { formPlan, setFormPlan } = useLanding();
  const d = t.demo;

  // Заявка уходит в Telegram-группу через серверную функцию (см. src/app/actions/lead.ts и .env).
  const [state, formAction, pending] = useActionState(async (prev: LeadState, formData: FormData) => {
    const result = await submitLead(prev, formData);
    // После успешной отправки React очищает поля формы; сбрасываем и выбранный тариф.
    if (result.status === "ok") setFormPlan("");
    return result;
  }, { status: "idle" } as LeadState);

  const message = pending ? d.status.sending : state.status === "idle" ? "" : d.status[state.status];

  return (
    <section id="demo" className={`stage ${styles.section}`}>
      <div className="orb orb-b" style={{ top: -120 }} />
      <div className={`wrap z ${styles.inner}`}>
        <div className={styles.card}>
          <div className={`head ${styles.head}`}>
            <h2 className={styles.title}>{d.title}</h2>
            <p className="lead">{d.sub}</p>
          </div>

          <form className={styles.form} action={formAction}>
            <input type="hidden" name="lang" value={t.htmlLang} />
            {/* Ловушка для спам-ботов: поле скрыто от людей. */}
            <input className={styles.trap} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <Field id="f-name" label={d.name}>
              <input id="f-name" name="name" type="text" autoComplete="name" required maxLength={200} />
            </Field>
            <Field id="f-phone" label={d.phone}>
              <input id="f-phone" name="phone" type="tel" autoComplete="tel" required maxLength={200} />
            </Field>
            <Field id="f-mail" label={d.email}>
              <input id="f-mail" name="email" type="email" autoComplete="email" maxLength={200} />
            </Field>
            <Field id="f-acad" label={d.academy}>
              <input id="f-acad" name="academy" type="text" autoComplete="organization" maxLength={200} />
            </Field>
            <Field id="f-plan" label={d.plan}>
              <select id="f-plan" name="plan" value={formPlan} onChange={(e) => setFormPlan(e.target.value)}>
                <option value="">{d.planUnsure}</option>
                {PLAN_IDS.map((id) => (
                  <option key={id} value={PLAN_NAMES[id]}>
                    {PLAN_NAMES[id]}
                  </option>
                ))}
              </select>
            </Field>
            <div className={styles.pair}>
              <Field id="f-stud" label={d.students} grow>
                <select id="f-stud" name="students">
                  {d.optStudents.map((o, i) => (
                    <option key={o} value={i}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="f-br" label={d.branches} grow>
                <select id="f-br" name="branches">
                  {d.optBranches.map((o, i) => (
                    <option key={o} value={i}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field id="f-now" label={d.now}>
              <select id="f-now" name="now">
                {d.optNow.map((o, i) => (
                  <option key={o} value={i}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>
            <button type="submit" className={`btn shine ${styles.submit}`} disabled={pending}>
              {d.submit}
            </button>
            <p
              className={`${styles.status} ${state.status === "ok" && !pending ? styles.ok : ""} ${
                (state.status === "invalid" || state.status === "error") && !pending ? styles.err : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          </form>
        </div>

        <div className={styles.contacts}>
          <div className={`${styles.contact} lift`}>
            <span className={styles.clabel}>{d.call}</span>
            <a className={styles.phone} href={CONTACTS.phoneHref}>
              {CONTACTS.phone}
            </a>
          </div>
          <div className={`${styles.contact} lift`}>
            <span className={styles.clabel}>{CONTACTS.instagramLabel}</span>
            <a className={styles.cvalue} href={CONTACTS.instagramHref} target="_blank" rel="noopener noreferrer">
              {CONTACTS.instagram}
            </a>
          </div>
          <div className={`${styles.contact} lift`}>
            <span className={styles.clabel}>{d.placeLabel}</span>
            <span className={styles.cvalue}>{d.place}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, grow, children }: { id: string; label: string; grow?: boolean; children: React.ReactNode }) {
  return (
    <div className={`${styles.field} ${grow ? styles.grow : ""}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {children}
    </div>
  );
}

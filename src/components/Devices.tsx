"use client";

import Image from "next/image";
import { useState } from "react";
import type { Content } from "@/content";
import { IMAGES } from "@/content/common";
import StoreLinks from "./StoreLinks";
import styles from "./Devices.module.css";

const SHOTS = [IMAGES.dash, IMAGES.stud, IMAGES.jour];

export default function Devices({ t }: { t: Content }) {
  const [tab, setTab] = useState(0);

  return (
    <section id="devices" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <div className="head reveal">
          <h2 className="h2">{t.devices.title}</h2>
          <p className={`lead ${styles.sub}`}>{t.devices.sub}</p>
        </div>

        <div className={styles.row}>
          <div className={`${styles.laptopCol} reveal`}>
            <div className={styles.tabs} role="group">
              {t.devices.tabs.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  className={`${styles.tab} ${tab === i ? styles.on : ""}`}
                  aria-pressed={tab === i}
                  onClick={() => setTab(i)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className={styles.laptop}>
              <div className={styles.dots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className={styles.screen}>
                {SHOTS.map((img, i) => (
                  <Image
                    key={img.src}
                    className={styles.shot}
                    src={img.src}
                    alt={i === tab ? t.devices.tabs[i] : ""}
                    fill
                    sizes="(max-width: 700px) 100vw, 760px"
                    style={{ opacity: tab === i ? 1 : 0 }}
                  />
                ))}
              </div>
            </div>
            <span className={styles.caption}>
              {t.devices.laptop} · {t.devices.sample}
            </span>
          </div>

          <div className={`${styles.phoneCol} reveal`}>
            <div className={styles.phone}>
              <div className={styles.fade2}>
                <Image src={IMAGES.mdash.src} alt="" fill sizes="230px" />
                <Image src={IMAGES.mjour.src} alt="" fill sizes="230px" />
              </div>
            </div>
            <span className={styles.caption}>
              {t.devices.phone} · {t.devices.sample}
            </span>
            <StoreLinks />
          </div>
        </div>

        <ul className={`${styles.points} reveal`}>
          {t.devices.points.map((p) => (
            <li key={p}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--pr)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

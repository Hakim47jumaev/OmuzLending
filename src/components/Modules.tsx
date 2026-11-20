import Image from "next/image";
import type { Content } from "@/content";
import { BRAND, IMAGES } from "@/content/common";
import OpenCalcLink from "./OpenCalcLink";
import styles from "./Modules.module.css";

const two = (n: number) => String(n).padStart(2, "0");

export default function Modules({ t }: { t: Content }) {
  const items = t.modules.items.map((m, i) => ({ ...m, n: two(i + 1) }));
  const left = items.slice(0, 8);
  const right = items.slice(8);

  return (
    <section id="modules" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <div className={`head reveal ${styles.head}`}>
          <h2 className="h2">{t.modules.title}</h2>
          <p className={`lead ${styles.sub}`}>{t.modules.sub}</p>
        </div>

        <div className={styles.hub}>
          <ul className={`${styles.col} ${styles.l}`}>
            {left.map((m) => (
              <Item key={m.n} {...m} />
            ))}
          </ul>

          <div className={styles.center}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={`${styles.laptop} float`}>
              <div className={styles.dots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <Image
                className={styles.screen}
                src={IMAGES.dash.src}
                width={IMAGES.dash.width}
                height={IMAGES.dash.height}
                alt={BRAND}
                sizes="(max-width: 1000px) 560px, 480px"
              />
            </div>
            <div className={styles.base} aria-hidden="true" />
          </div>

          <ul className={`${styles.col} ${styles.r}`}>
            {right.map((m) => (
              <Item key={m.n} {...m} />
            ))}
          </ul>
        </div>

        <div className={styles.ctaRow}>
          <OpenCalcLink className="btn shine">{t.calc.addonsTitle} →</OpenCalcLink>
        </div>
      </div>
    </section>
  );
}

function Item({ n, name, desc }: { n: string; name: string; desc: string }) {
  return (
    <li className={`${styles.hi} reveal`} tabIndex={0}>
      <span className={styles.hn}>{n}</span>
      <span className={styles.ht}>
        <span className={styles.hh}>{name}</span>
        <span className={styles.hd}>{desc}</span>
      </span>
    </li>
  );
}

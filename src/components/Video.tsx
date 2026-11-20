import type { Content } from "@/content";
import { VIDEO } from "@/content/common";
import styles from "./Video.module.css";

export default function Video({ t }: { t: Content }) {
  return (
    <section id="video" className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <h2 className={`h2 reveal ${styles.title}`}>{t.video.title}</h2>
        <div className={`${styles.frame} reveal`}>
          <iframe
            src={VIDEO.src}
            title={VIDEO.title}
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

import { STORES } from "@/content/common";
import styles from "./StoreLinks.module.css";

/** Кнопки App Store и Google Play. */
export default function StoreLinks({ align = "center" }: { align?: "center" | "start" }) {
  return (
    <div className={`${styles.stores} ${align === "start" ? styles.start : ""}`}>
      <a className={styles.store} href={STORES.appStore.href} target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
        </svg>
        <span className={styles.st}>
          <small>{STORES.appStore.small}</small>
          {STORES.appStore.label}
        </span>
      </a>
      <a className={styles.store} href={STORES.googlePlay.href} target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24">
          <path fill="#00D7FE" d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l9.7-9.7z" />
          <path fill="#FFCE00" d="M16.5 15.2l-3.2-3.2 3.2-3.2 3.8 2.2c1.1.6 1.1 1.6 0 2.2z" />
          <path fill="#F63448" d="M16.5 15.2L13.3 12 3.6 21.7c.4.4 1 .4 1.7.1z" />
          <path fill="#00F076" d="M16.5 8.8L5.3 2.2c-.7-.4-1.3-.3-1.7.1L13.3 12z" />
        </svg>
        <span className={styles.st}>
          <small>{STORES.googlePlay.small}</small>
          {STORES.googlePlay.label}
        </span>
      </a>
    </div>
  );
}

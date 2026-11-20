import { useId } from "react";
import styles from "./Ornament.module.css";

/** Орнаментальная лента (верх hero и подвал). */
export default function Ornament({ variant }: { variant: "top" | "footer" }) {
  const id = useId();
  return (
    <svg className={`${styles.orn} ${variant === "top" ? styles.top : styles.footer}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="24" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 1 L21 6 L12 11 L3 6 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M12 4 L16 6 L12 8 L8 6 Z" fill="currentColor" />
          <path d="M0 6 H3 M21 6 H24" stroke="currentColor" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill={`url(#${id})`} />
    </svg>
  );
}

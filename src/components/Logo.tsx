import { BRAND } from "@/content/common";
import { LOGO_INK, LOGO_TRI } from "./logo-paths";
import styles from "./Logo.module.css";

export default function Logo({
  height = 40,
  className,
  animated = false,
}: {
  height?: number;
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      className={[styles.logo, animated && styles.animated, className].filter(Boolean).join(" ")}
      viewBox="0 0 218 68"
      height={height}
      style={{ height }}
      role="img"
      aria-label={BRAND}
    >
      <path className={styles.ink} fillRule="evenodd" d={LOGO_INK} />
      <path className={styles.tri} d={LOGO_TRI} />
    </svg>
  );
}

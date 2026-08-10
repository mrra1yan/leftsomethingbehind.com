import styles from './Badge.module.css';

export default function Badge({ pulse = false, tone = 'success', children }) {
  const toneClass = tone === 'primary' ? styles.primary : styles.success;

  return (
    <span className={`${styles.badge} ${toneClass}`}>
      {pulse && (
        <span className={styles.dotWrap} aria-hidden="true">
          <span className={styles.dotPing} />
          <span className={styles.dot} />
        </span>
      )}
      {children}
    </span>
  );
}

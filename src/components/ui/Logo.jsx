import styles from './Logo.module.css';

export default function Logo({ onDark = false, size = 'md', compact = false, className = '' }) {
  const classes = [
    styles.wordmark,
    size === 'lg' ? styles.lg : styles.md,
    onDark ? styles.onDark : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (compact) {
    return (
      <span className={classes} aria-label="Left Something Behind">
        <span className={styles.compactMark} aria-hidden="true">
          <span className={styles.primary}>L</span>
          <span className={styles.accent}>S</span>
          <span className={styles.primary}>B</span>
        </span>
        <span className={styles.by} aria-hidden="true">
          by Docstec
        </span>
      </span>
    );
  }

  return (
    <span className={classes}>
      <span className={styles.primary}>left</span>
      <span className={styles.accent}>something</span>
      <span className={styles.primary}>behind</span>
    </span>
  );
}

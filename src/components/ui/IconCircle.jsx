import styles from './IconCircle.module.css';

export default function IconCircle({ icon: Icon, tone = 'primary', size = 'md' }) {
  const toneClass = tone === 'success' ? styles.success : styles.primary;
  const sizeClass = size === 'lg' ? styles.lg : styles.md;

  return (
    <span className={`${styles.circle} ${toneClass} ${sizeClass}`}>
      <Icon strokeWidth={2} aria-hidden="true" />
    </span>
  );
}

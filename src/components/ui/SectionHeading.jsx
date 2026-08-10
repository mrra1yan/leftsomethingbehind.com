import styles from './SectionHeading.module.css';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  onDark = false,
}) {
  const classes = [
    styles.wrap,
    align === 'left' ? styles.left : styles.center,
    onDark ? styles.onDark : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

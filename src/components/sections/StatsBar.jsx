import { statsBar } from '../../data/content.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './StatsBar.module.css';

export default function StatsBar() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      aria-label="Platform statistics"
      className={`${styles.statsBar} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        {statsBar.map((stat, i) => (
          <div key={stat.label} className={styles.item}>
            {i > 0 && <span className={styles.divider} aria-hidden="true" />}
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

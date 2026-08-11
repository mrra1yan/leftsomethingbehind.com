import { useReveal } from '../../hooks/useReveal.js';
import { useCounter } from '../../hooks/useCounter.js';
import { statsBar } from '../../data/content.js';
import styles from './StatsBar.module.css';

/**
 * Parse a stat value like "10K+", "73%", "120+", "48h" into
 * { numeric: 10000, suffix: 'K+' } so the counter can animate
 * the numeric part while we re-attach the suffix.
 */
function parseStat(raw) {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { numeric: 0, suffix: raw };
  const num = parseFloat(match[1]);
  const suffix = match[2];
  // Convert "K" magnitudes back to real number for counter
  if (suffix.startsWith('K')) {
    return { numeric: num * 1000, displayDivisor: 1000, letter: 'K', rest: suffix.slice(1), raw };
  }
  return { numeric: num, suffix, raw };
}

function StatItem({ stat, isVisible }) {
  const parsed = parseStat(stat.value);
  const count = useCounter(parsed.numeric, 1600, isVisible);

  let display;
  if (parsed.displayDivisor) {
    // e.g. 10000 → "10K+"
    const divided = count / parsed.displayDivisor;
    display = Number.isInteger(divided) ? `${divided}${parsed.letter}${parsed.rest}` : `${divided.toFixed(1)}${parsed.letter}${parsed.rest}`;
  } else {
    display = `${count}${parsed.suffix}`;
  }

  return (
    <p className={styles.value} aria-label={`${stat.value} ${stat.label}`}>
      {display}
    </p>
  );
}

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
            <StatItem stat={stat} isVisible={isVisible} />
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

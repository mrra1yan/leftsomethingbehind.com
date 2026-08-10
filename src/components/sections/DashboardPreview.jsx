import { Package, Link2, Bell, Clock } from 'lucide-react';
import { dashboardStats } from '../../data/content.js';
import styles from './DashboardPreview.module.css';

const ICONS = { Package, Link2, Bell, Clock };

export default function DashboardPreview() {
  return (
    <div className={styles.card}>
      <div className={styles.chrome}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.chromeLabel}>Business Dashboard Preview</span>
      </div>

      <div className={styles.grid}>
        {dashboardStats.map((stat) => {
          const Icon = ICONS[stat.icon];
          return (
            <div key={stat.label} className={styles.tile}>
              <Icon className={styles.tileIcon} strokeWidth={2} aria-hidden="true" />
              <p className={styles.tileLabel}>{stat.label}</p>
              <span className={styles.tileSkeleton} aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

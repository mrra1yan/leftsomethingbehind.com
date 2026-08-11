import { Hotel, Plane, GraduationCap, UtensilsCrossed, Building2, ShoppingBag } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import DashboardPreview from './DashboardPreview.jsx';
import { businessTypes } from '../../data/content.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './ForBusinesses.module.css';

const ICONS = { Hotel, Plane, GraduationCap, UtensilsCrossed, Building2, ShoppingBag };

export default function ForBusinesses() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="for-businesses"
      ref={ref}
      className={`section ${styles.forBusinesses} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <SectionHeading
            eyebrow="For organisations"
            title="Businesses find things too."
            description="Hotels, restaurants, offices, airports, universities and other organisations can help people reconnect with the things they leave behind."
            align="left"
          />

          <ul className={styles.typeList} aria-label="Supported venue types">
            {businessTypes.map((type) => {
              const Icon = ICONS[type.icon];
              return (
                <li key={type.label} className={styles.typeItem}>
                  <Icon className={styles.typeIcon} strokeWidth={2} aria-hidden="true" />
                  <span>{type.label}</span>
                </li>
              );
            })}
          </ul>

          <Button href="#notify" variant="primary">
            Register Your Interest
          </Button>
        </div>

        <div className={styles.visual}>
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

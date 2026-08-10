import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import DashboardPreview from './DashboardPreview.jsx';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './ForBusinesses.module.css';

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
            title="Businesses find things too."
            description="Hotels, restaurants, offices, airports, universities and other organizations can help people reconnect with the things they leave behind."
            align="left"
          />
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

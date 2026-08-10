import { Shield, CheckCircle2, MapPin, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import IconCircle from '../ui/IconCircle.jsx';
import { trustItems } from '../../data/content.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './TrustSection.module.css';

const ICONS = { Shield, CheckCircle2, MapPin, Users };

export default function TrustSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`section ${styles.trust} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className="container">
        <SectionHeading
          title="Built around one simple idea."
          description="Lost items should not disappear into a forgotten corner. Left Something Behind makes it easier for people and organizations to report, discover and connect around lost and found items."
          align="center"
        />

        <div className={styles.row}>
          {trustItems.map((item) => (
            <div key={item.label} className={styles.item}>
              <IconCircle icon={ICONS[item.icon]} tone="primary" />
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

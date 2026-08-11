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
          eyebrow="Why trust us"
          title="Built around one simple idea."
          description="Lost items should not disappear into a forgotten corner. Left Something Behind makes it easier for people and organisations to report, discover and connect around lost and found items."
          align="center"
        />

        <div className={styles.grid}>
          {trustItems.map((item) => (
            <div key={item.label} className={styles.card}>
              <IconCircle icon={ICONS[item.icon]} tone="primary" size="lg" />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.label}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

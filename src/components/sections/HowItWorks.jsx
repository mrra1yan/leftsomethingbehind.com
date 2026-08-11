import { ClipboardEdit, Search, MessageCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import IconCircle from '../ui/IconCircle.jsx';
import { howItWorksSteps } from '../../data/content.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './HowItWorks.module.css';

const ICONS = { ClipboardEdit, Search, MessageCircle };

export default function HowItWorks() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={`section ${styles.howItWorks} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="Lost it. Found it. Get connected."
          description="Three simple steps stand between you and your missing item."
          align="center"
        />

        <div className={styles.grid}>
          {howItWorksSteps.map((step, i) => (
            <div key={step.number} className={styles.cardWrap}>
              {/* Connector line between cards (hidden on mobile) */}
              {i < howItWorksSteps.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <IconCircle icon={ICONS[step.icon]} tone="primary" size="lg" />
                  <span className={styles.number}>{step.number}</span>
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

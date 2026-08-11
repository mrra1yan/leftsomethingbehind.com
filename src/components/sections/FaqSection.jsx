import SectionHeading from '../ui/SectionHeading.jsx';
import { faqItems } from '../../data/content.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="faq"
      ref={ref}
      className={`section ${styles.faq} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we get a lot."
          description="Quick answers to the things people ask most before signing up."
          align="center"
        />
        <div className={styles.grid}>
          {faqItems.map((item, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.question}>{item.question}</h3>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

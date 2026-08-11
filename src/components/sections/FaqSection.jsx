import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import { faqItems } from '../../data/content.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const { ref, isVisible } = useReveal();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

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

        <dl className={styles.list}>
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <dt>
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                      aria-hidden="true"
                      size={20}
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
                >
                  <p className={styles.answerText}>{item.answer}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

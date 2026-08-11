import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import { testimonials } from '../../data/content.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './Testimonials.module.css';

const AUTO_INTERVAL = 5000;

export default function Testimonials() {
  const { ref, isVisible } = useReveal();
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const total = testimonials.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Auto-advance
  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTO_INTERVAL);
  };

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`section ${styles.testimonials} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className="container">
        <SectionHeading
          eyebrow="Early feedback"
          title="People love getting their stuff back."
          align="center"
        />

        <div className={styles.carousel} aria-live="polite" aria-atomic="true">
          <div className={styles.card} key={index}>
            {/* Stars */}
            <div className={styles.stars} aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={styles.star} size={16} aria-hidden="true" />
              ))}
            </div>

            <blockquote className={styles.quote}>
              <p>&ldquo;{t.quote}&rdquo;</p>
            </blockquote>

            <div className={styles.author}>
              <span
                className={styles.avatar}
                style={{ background: t.avatarColor }}
                aria-hidden="true"
              >
                {t.name.charAt(0)}
              </span>
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          </div>

          {/* Prev / Next controls */}
          <div className={styles.controls}>
            <button type="button" className={styles.ctrlBtn} onClick={handlePrev} aria-label="Previous testimonial">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            <div className={styles.dots} role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  onClick={() => { setIndex(i); resetTimer(); }}
                />
              ))}
            </div>

            <button type="button" className={styles.ctrlBtn} onClick={handleNext} aria-label="Next testimonial">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

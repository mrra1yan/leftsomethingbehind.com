import SectionHeading from '../ui/SectionHeading.jsx';
import Button from '../ui/Button.jsx';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`section ${styles.finalCta} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      {/* Decorative dot-grid pattern */}
      <div className={styles.dotGrid} aria-hidden="true" />
      {/* Radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <SectionHeading
          title="Don&rsquo;t let your lost item stay lost."
          description="Join the early access list and be among the first to use Left Something Behind when we launch."
          align="center"
          onDark
        />
        <div className={styles.actions}>
          <Button href="#notify" variant="onDark">
            Get Early Access
          </Button>
          <Button href="#how-it-works" variant="ghost" className={styles.ghostOnDark}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

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
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          title="Don't let your lost item stay lost."
          description="Join the early access list and be among the first to use Left Something Behind."
          align="center"
          onDark
        />
        <Button href="#notify" variant="onDark">
          Get Early Access
        </Button>
      </div>
    </section>
  );
}

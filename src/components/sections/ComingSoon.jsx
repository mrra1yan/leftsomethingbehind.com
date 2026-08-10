import SectionHeading from '../ui/SectionHeading.jsx';
import Badge from '../ui/Badge.jsx';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`section ${styles.comingSoon} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <Badge pulse tone="success">
          Launching Soon
        </Badge>
        <SectionHeading
          title="Something helpful is coming."
          description="Left Something Behind is building a simpler way to reconnect people with the things they've lost."
          align="center"
        />
      </div>
    </section>
  );
}

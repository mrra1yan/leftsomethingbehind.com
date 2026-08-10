import Button from '../ui/Button.jsx';
import HeroIllustration from '../illustrations/HeroIllustration.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={`${styles.hero} section`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>The simple way to find what you left behind</p>
          <h1 className={styles.headline}>
            <span className={styles.line}>Left Something Behind?</span>
            <span className={styles.line}>Let&rsquo;s Help You Find It.</span>
          </h1>
          <p className={styles.subhead}>
            Lost something somewhere? Report it and discover potential matches from people and
            businesses that may have found it.
          </p>
          <div className={styles.ctaRow}>
            <Button href="#notify" variant="primary">
              Get Notified
            </Button>
            <Button href="#how-it-works" variant="secondary">
              I Want to Learn More
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

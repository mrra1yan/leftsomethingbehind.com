import Button from '../ui/Button.jsx';
import HeroIllustration from '../illustrations/HeroIllustration.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={`${styles.hero} section`}>
      {/* Decorative gradient blobs */}
      <div className={styles.blobTL} aria-hidden="true" />
      <div className={styles.blobBR} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>The simple way to find what you left behind</p>
          <h1 className={styles.headline}>
            <span className={styles.line}>Lost Something?</span>
            <span className={`${styles.line} ${styles.lineAccent}`}>Let&rsquo;s Find It.</span>
          </h1>
          <p className={styles.subhead}>
            Report what you lost or found, and our platform connects the right people — privately
            and securely.
          </p>
          <div className={styles.ctaRow}>
            <Button href="#notify" variant="primary">
              Get Early Access
            </Button>
            <Button href="#how-it-works" variant="secondary">
              See How It Works
            </Button>
          </div>
          <p className={styles.social}>
            <span className={styles.avatars} aria-hidden="true">
              {['#4da3d9', '#18a673', '#12304a', '#f59e0b'].map((c, i) => (
                <span key={i} className={styles.avatar} style={{ background: c }} />
              ))}
            </span>
            Join <strong>hundreds</strong> already on the early-access list
          </p>
        </div>

        <div className={styles.visual}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

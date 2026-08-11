import { useState } from 'react';
import Button from '../ui/Button.jsx';
import ReportModal from '../ui/ReportModal.jsx';
import HeroIllustration from '../illustrations/HeroIllustration.jsx';
import styles from './Hero.module.css';

// Use CSS variable strings so these respond to dark mode
const AVATAR_COLORS = [
  'var(--color-accent-blue)',
  'var(--color-success)',
  'var(--color-primary)',
  'var(--color-warning)',
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="top" className={`${styles.hero} section`}>
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
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Report an Item
              </Button>
              <Button href="#notify" variant="secondary">
                Get Early Access
              </Button>
            </div>
            <p className={styles.social}>
              <span className={styles.avatars} aria-hidden="true">
                {AVATAR_COLORS.map((c, i) => (
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

      <ReportModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

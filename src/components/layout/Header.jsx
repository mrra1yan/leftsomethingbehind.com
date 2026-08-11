import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Logo from '../ui/Logo.jsx';
import { navLinks } from '../../data/content.js';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logoLink} aria-label="Left Something Behind — home">
          <Logo compact size="lg" />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="#" variant="ghost">
            Sign In
          </Button>
          <Button href="#notify" variant="primary">
            Get Notified
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ''}`}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileActions}>
          <Button href="#" variant="secondary" fullWidth onClick={closeMenu}>
            Sign In
          </Button>
          <Button href="#notify" variant="primary" fullWidth onClick={closeMenu}>
            Get Notified
          </Button>
        </div>
      </div>
    </header>
  );
}

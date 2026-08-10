import Logo from '../ui/Logo.jsx';
import { footerColumns } from '../../data/content.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <Logo onDark size="lg" />
          <p className={styles.tagline}>
            Helping people reconnect with the things they&rsquo;ve left behind.
          </p>
        </div>

        <div className={styles.linkCols}>
          {footerColumns.map((col) => (
            <div key={col.heading} className={styles.linkCol}>
              <p className={styles.colHeading}>{col.heading}</p>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p>&copy; 2026 Left Something Behind. All rights reserved.</p>
          <a
            href="https://docstec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.poweredBy}
          >
            Powered by Docstec
          </a>
        </div>
      </div>
    </footer>
  );
}

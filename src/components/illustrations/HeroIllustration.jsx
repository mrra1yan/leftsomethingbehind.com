import styles from './HeroIllustration.module.css';

export default function HeroIllustration() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 480 420"
      fill="none"
      role="img"
      aria-label="A lost item card connecting to a found item card, indicating a successful match"
    >
      <circle cx="220" cy="210" r="210" className={styles.backdropOuter} />
      <circle cx="310" cy="120" r="90" className={styles.backdropInner} />

      <path
        className={styles.dashLine}
        d="M188 158C220 190 232 200 260 232"
        stroke="var(--color-accent-blue)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />

      {/* Lost item card */}
      <rect
        x="24"
        y="52"
        width="204"
        height="132"
        rx="18"
        fill="var(--color-primary-light)"
        stroke="var(--color-primary)"
        strokeOpacity="0.24"
      />
      <rect x="46" y="76" width="44" height="44" rx="12" fill="var(--color-primary)" />
      <path
        d="M60 98h16M68 90v16"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="104" y="84" width="98" height="9" rx="4.5" fill="var(--color-primary)" opacity="0.32" />
      <rect x="104" y="102" width="66" height="9" rx="4.5" fill="var(--color-primary)" opacity="0.18" />
      <rect x="46" y="140" width="56" height="24" rx="12" fill="#fff" stroke="var(--color-primary)" strokeOpacity="0.28" />
      <text x="74" y="156" textAnchor="middle" className={styles.tagLost}>
        LOST
      </text>

      {/* Location pin accent on lost card */}
      <path
        className={styles.pin}
        d="M214 30c-11 0-20 8.6-20 19.3 0 14.5 20 37.7 20 37.7s20-23.2 20-37.7C234 38.6 225 30 214 30z"
        fill="var(--color-accent-blue)"
      />
      <circle cx="214" cy="49" r="7" fill="#fff" />

      {/* Found item card */}
      <rect
        x="244"
        y="228"
        width="212"
        height="144"
        rx="18"
        fill="var(--color-success-light)"
        stroke="var(--color-success)"
        strokeOpacity="0.28"
      />
      <rect x="266" y="254" width="44" height="44" rx="12" fill="var(--color-success)" />
      <path
        d="M279 276l7 7 13-15"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="324" y="262" width="102" height="9" rx="4.5" fill="var(--color-success)" opacity="0.32" />
      <rect x="324" y="280" width="70" height="9" rx="4.5" fill="var(--color-success)" opacity="0.2" />
      <rect x="266" y="318" width="64" height="24" rx="12" fill="#fff" stroke="var(--color-success)" strokeOpacity="0.3" />
      <text x="298" y="334" textAnchor="middle" className={styles.tagFound}>
        FOUND
      </text>

      {/* Match badge sitting on the connecting line */}
      <circle cx="224" cy="195" r="21" fill="#fff" stroke="var(--color-accent-blue)" strokeWidth="2" />
      <circle className={styles.matchPing} cx="224" cy="195" r="21" fill="var(--color-accent-blue)" opacity="0.16" />
      <circle cx="224" cy="195" r="6" fill="var(--color-accent-blue)" />

      {/* Checkmark badge on found card corner */}
      <circle cx="452" cy="240" r="20" fill="var(--color-success)" />
      <path
        d="M443 240l6 6 12-13"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

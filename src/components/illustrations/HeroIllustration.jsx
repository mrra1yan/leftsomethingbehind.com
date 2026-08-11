import { useRef, useEffect, useState } from 'react';
import styles from './HeroIllustration.module.css';

export default function HeroIllustration() {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMove = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Normalise to -1 … +1 relative to the element centre
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const nx = (clientX - cx) / (rect.width / 2);
      const ny = (clientY - cy) / (rect.height / 2);
      setOffset({ x: nx * 10, y: ny * 8 }); // max 10px / 8px shift
    };

    const handleLeave = () => setOffset({ x: 0, y: 0 });

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseleave', handleLeave, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const lostStyle = {
    transform: `translate(${-offset.x * 0.6}px, ${-offset.y * 0.5}px)`,
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  };
  const foundStyle = {
    transform: `translate(${offset.x * 0.6}px, ${offset.y * 0.5}px)`,
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  };
  const badgeStyle = {
    transform: `translate(${offset.x * 0.2}px, ${offset.y * 0.2}px)`,
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <div ref={containerRef} className={styles.wrapper} aria-hidden="true">
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

        {/* Lost item card — parallax layer A */}
        <g style={lostStyle}>
          <rect
            x="24" y="52" width="204" height="132" rx="18"
            fill="var(--color-primary-light)"
            stroke="var(--color-primary)" strokeOpacity="0.24"
          />
          <rect x="46" y="76" width="44" height="44" rx="12" fill="var(--color-primary)" />
          <path d="M60 98h16M68 90v16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="104" y="84" width="98" height="9" rx="4.5" fill="var(--color-primary)" opacity="0.32" />
          <rect x="104" y="102" width="66" height="9" rx="4.5" fill="var(--color-primary)" opacity="0.18" />
          <rect x="46" y="140" width="56" height="24" rx="12" fill="#fff" stroke="var(--color-primary)" strokeOpacity="0.28" />
          <text x="74" y="156" textAnchor="middle" className={styles.tagLost}>LOST</text>
          {/* Location pin accent */}
          <path
            className={styles.pin}
            d="M214 30c-11 0-20 8.6-20 19.3 0 14.5 20 37.7 20 37.7s20-23.2 20-37.7C234 38.6 225 30 214 30z"
            fill="var(--color-accent-blue)"
          />
          <circle cx="214" cy="49" r="7" fill="#fff" />
        </g>

        {/* Found item card — parallax layer B */}
        <g style={foundStyle}>
          <rect
            x="244" y="228" width="212" height="144" rx="18"
            fill="var(--color-success-light)"
            stroke="var(--color-success)" strokeOpacity="0.28"
          />
          <rect x="266" y="254" width="44" height="44" rx="12" fill="var(--color-success)" />
          <path d="M279 276l7 7 13-15" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="324" y="262" width="102" height="9" rx="4.5" fill="var(--color-success)" opacity="0.32" />
          <rect x="324" y="280" width="70" height="9" rx="4.5" fill="var(--color-success)" opacity="0.2" />
          <rect x="266" y="318" width="64" height="24" rx="12" fill="#fff" stroke="var(--color-success)" strokeOpacity="0.3" />
          <text x="298" y="334" textAnchor="middle" className={styles.tagFound}>FOUND</text>
          {/* Corner badge */}
          <circle cx="452" cy="240" r="20" fill="var(--color-success)" />
          <path d="M443 240l6 6 12-13" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Match badge — subtle parallax */}
        <g style={badgeStyle}>
          <circle cx="224" cy="195" r="21" fill="#fff" stroke="var(--color-accent-blue)" strokeWidth="2" />
          <circle className={styles.matchPing} cx="224" cy="195" r="21" fill="var(--color-accent-blue)" opacity="0.16" />
          <circle cx="224" cy="195" r="6" fill="var(--color-accent-blue)" />
        </g>
      </svg>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { MapPin, X } from 'lucide-react';
import styles from './Toast.module.css';

const MESSAGES = [
  { item: 'a blue wallet', location: 'Dhaka Airport' },
  { item: 'a MacBook Pro', location: 'Radisson Blu Hotel' },
  { item: 'car keys', location: 'NSU Campus' },
  { item: 'an iPhone 15', location: 'Bashundhara City' },
  { item: 'a brown leather bag', location: 'Hazrat Shahjalal Airport' },
  { item: 'prescription glasses', location: 'Pan Pacific Hotel' },
  { item: 'a passport', location: 'Uttara Metro Station' },
  { item: 'AirPods Pro', location: 'Jamuna Future Park' },
];

const INTERVAL = 6000; // ms between toasts
const VISIBLE_DURATION = 4200; // ms each toast stays visible

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  const indexRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const show = () => {
      const msg = MESSAGES[indexRef.current % MESSAGES.length];
      indexRef.current++;
      const id = idRef.current++;

      setToasts((prev) => [...prev, { id, ...msg }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, VISIBLE_DURATION);
    };

    // First toast after a short delay so it doesn't fire immediately on load
    const firstTimer = setTimeout(show, 3000);
    const interval = setInterval(show, INTERVAL);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <div className={styles.container} aria-live="polite" aria-label="Live activity feed">
      {toasts.map((toast) => (
        <div key={toast.id} className={styles.toast} role="status">
          <span className={styles.iconWrap} aria-hidden="true">
            <MapPin size={14} />
          </span>
          <p className={styles.message}>
            <strong>Someone just found {toast.item}</strong> in {toast.location}
          </p>
          <button
            type="button"
            className={styles.close}
            aria-label="Dismiss notification"
            onClick={() => dismiss(toast.id)}
          >
            <X size={12} aria-hidden="true" />
          </button>
        </div>
      ))}
    </div>
  );
}

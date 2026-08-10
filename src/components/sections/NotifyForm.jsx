import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button.jsx';
import { isValidEmail } from '../../utils/validateEmail.js';
import { useReveal } from '../../hooks/useReveal.js';
import styles from './NotifyForm.module.css';

export default function NotifyForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | success
  const [message, setMessage] = useState('');
  const { ref, isVisible } = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setMessage("Thanks — we'll let you know when we launch.");
    setEmail('');
  };

  return (
    <section
      id="notify"
      ref={ref}
      className={`section ${styles.notify} reveal ${isVisible ? 'isVisible' : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Be the first to know.</h2>
        <p className={styles.copy}>
          Join the early access list and get notified when Left Something Behind launches.
        </p>

        {status === 'success' ? (
          <div className={styles.success} role="status">
            <CheckCircle2 aria-hidden="true" />
            <span>{message}</span>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className="visually-hidden" htmlFor="notify-email">
              Your email address
            </label>
            <input
              id="notify-email"
              type="email"
              inputMode="email"
              placeholder="Your email address"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={status === 'error'}
              aria-describedby="notify-message"
            />
            <Button type="submit" variant="onDark">
              Notify Me
            </Button>
          </form>
        )}

        <p
          id="notify-message"
          className={`${styles.helper} ${status === 'error' ? styles.helperError : ''}`}
          aria-live="polite"
        >
          {status === 'error' ? message : 'No spam. Just launch updates.'}
        </p>
      </div>
    </section>
  );
}

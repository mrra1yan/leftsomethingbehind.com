import { useEffect, useRef, useState } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle2, MapPin, Tag, FileText } from 'lucide-react';
import Button from './Button.jsx';
import styles from './ReportModal.module.css';

const STEPS = [
  { label: 'Item details', icon: Tag },
  { label: 'Location & time', icon: MapPin },
  { label: 'Description', icon: FileText },
];

const ITEM_TYPES = ['Electronics', 'Accessories', 'Documents', 'Bags', 'Clothing', 'Other'];

export default function ReportModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ type: 'lost', category: '', name: '', location: '', date: '', description: '' });
  const dialogRef = useRef(null);
  const firstFocusRef = useRef(null);

  // Lock body scroll + trap focus
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    firstFocusRef.current?.focus();
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleClose = () => { setStep(0); setDone(false); setForm({ type: 'lost', category: '', name: '', location: '', date: '', description: '' }); onClose(); };
  const update = (field, val) => setForm((f) => ({ ...f, [field]: val }));
  const next = () => step < STEPS.length - 1 ? setStep((s) => s + 1) : setDone(true);
  const back = () => setStep((s) => s - 1);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Report an item"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className={styles.dialog} ref={dialogRef}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Report an item</h2>
          <button type="button" className={styles.closeBtn} onClick={handleClose} aria-label="Close modal" ref={firstFocusRef}>
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {!done ? (
          <>
            {/* Step progress */}
            <div className={styles.stepper} aria-label="Steps">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className={`${styles.stepItem} ${i === step ? styles.stepActive : ''} ${i < step ? styles.stepDone : ''}`}>
                    <span className={styles.stepDot}>
                      {i < step ? <CheckCircle2 size={14} aria-hidden="true" /> : <Icon size={14} aria-hidden="true" />}
                    </span>
                    <span className={styles.stepLabel}>{s.label}</span>
                    {i < STEPS.length - 1 && <span className={styles.stepLine} aria-hidden="true" />}
                  </div>
                );
              })}
            </div>

            {/* Step content */}
            <div className={styles.body}>
              {step === 0 && (
                <div className={styles.fieldGroup}>
                  <p className={styles.fieldLabel}>I am reporting a…</p>
                  <div className={styles.toggleRow}>
                    {['lost', 'found'].map((t) => (
                      <button key={t} type="button"
                        className={`${styles.typeBtn} ${form.type === t ? styles.typeBtnActive : ''}`}
                        onClick={() => update('type', t)}
                        aria-pressed={form.type === t}
                      >
                        {t === 'lost' ? '😞 Lost item' : '🎉 Found item'}
                      </button>
                    ))}
                  </div>
                  <label className={styles.label} htmlFor="item-name">Item name</label>
                  <input id="item-name" className={styles.input} type="text" placeholder="e.g. Blue wallet, iPhone 15…" value={form.name} onChange={(e) => update('name', e.target.value)} />
                  <label className={styles.label} htmlFor="item-category">Category</label>
                  <select id="item-category" className={styles.input} value={form.category} onChange={(e) => update('category', e.target.value)}>
                    <option value="">Select a category</option>
                    {ITEM_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              )}

              {step === 1 && (
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="item-location">Where was it {form.type}?</label>
                  <input id="item-location" className={styles.input} type="text" placeholder="e.g. Hazrat Shahjalal Airport, Terminal 1" value={form.location} onChange={(e) => update('location', e.target.value)} />
                  <label className={styles.label} htmlFor="item-date">When?</label>
                  <input id="item-date" className={styles.input} type="date" value={form.date} onChange={(e) => update('date', e.target.value)} />
                </div>
              )}

              {step === 2 && (
                <div className={styles.fieldGroup}>
                  <label className={styles.label} htmlFor="item-desc">Describe the item</label>
                  <textarea id="item-desc" className={`${styles.input} ${styles.textarea}`} placeholder="Colour, brand, distinguishing marks…" value={form.description} onChange={(e) => update('description', e.target.value)} rows={5} />
                  <p className={styles.note}>Your contact details will never be shared publicly.</p>
                </div>
              )}
            </div>

            {/* Footer nav */}
            <div className={styles.footer}>
              {step > 0 && (
                <Button variant="secondary" onClick={back}>
                  <ChevronLeft size={16} aria-hidden="true" /> Back
                </Button>
              )}
              <Button variant="primary" onClick={next} className={styles.nextBtn}>
                {step < STEPS.length - 1 ? <>Next <ChevronRight size={16} aria-hidden="true" /></> : 'Submit Report'}
              </Button>
            </div>
          </>
        ) : (
          /* Success state */
          <div className={styles.success}>
            <div className={styles.successIcon} aria-hidden="true">
              <CheckCircle2 size={48} />
            </div>
            <h3 className={styles.successTitle}>Report submitted!</h3>
            <p className={styles.successDesc}>This is a demo — in the real app your report would be live and matching instantly. Join the early access list to be first to use it.</p>
            <Button href="#notify" variant="primary" onClick={handleClose}>Join Early Access</Button>
          </div>
        )}
      </div>
    </div>
  );
}

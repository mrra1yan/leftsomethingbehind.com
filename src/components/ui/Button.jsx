import styles from './Button.module.css';

const VARIANT_CLASS = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  onDark: styles.onDark,
};

export default function Button({
  href,
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    styles.button,
    VARIANT_CLASS[variant] || styles.primary,
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

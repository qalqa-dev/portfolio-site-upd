import styles from './Term.module.scss';

export const Term: React.FC<{
  children?: React.ReactNode;
  heading?: string;
  className?: string;
}> = ({ children, heading, className }) => {
  return (
    <div className={`${styles.term} flex flex-col ${className}`}>
      <div className={styles['term-btn']}></div>
      <div className={styles['term-btn']}></div>
      <div className={styles['term-btn']}></div>
      <div className={styles['term-heading']}>{heading}</div>
      {children && <div className={styles['term-content']}>{children}</div>}
    </div>
  );
};

import styles from './TermWrapper.module.scss';

type TermWrapperProps = {
  children?: React.ReactNode;
  heading?: string;
  className?: string;
  customStyles?: React.CSSProperties;
};

export const TermWrapper: React.FC<TermWrapperProps> = ({
  children,
  heading,
  className,
  customStyles,
}) => {
  return (
    <div
      className={`${styles.term} flex flex-col  ${className}`}
      style={{ ...customStyles }}
    >
      <div className={styles['term-btn']}></div>
      <div className={styles['term-btn']}></div>
      <div className={styles['term-btn']}></div>
      <div className={styles['term-heading']}>{heading}</div>
      {children && <div className={styles['term-content']}>{children}</div>}
    </div>
  );
};

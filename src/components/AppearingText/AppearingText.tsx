import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';

import styles from './AppearingText.module.scss';

export const AppearingText = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <span className={styles['appearing-text-container']}>
      <div
        className={styles['appealer']}
        style={{ display: inView ? 'block' : 'none' }}
      ></div>
      <span
        className={clsx(styles['appearing-text'], {
          [styles['fade-in']]: inView,
        })}
        ref={ref}
      >
        {text}
      </span>
    </span>
  );
};

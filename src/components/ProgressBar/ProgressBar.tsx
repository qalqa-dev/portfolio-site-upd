import clsx from 'clsx';
import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <>
      <div className={styles['progress-bar-container']}>
        <div
          className={styles['progress-bar']}
          style={{
            width: `${clampedPercentage}%`,
            background: `linear-gradient(to right, var(--color-sky) 0%, var(--color-mauve) ${
              200 - clampedPercentage
            }%)`,
          }}
        />
        <span
          className={clsx(styles['percentage'], {
            [styles['invert']]: clampedPercentage > 50,
          })}
        >
          {clampedPercentage}%
        </span>
      </div>
    </>
  );
};

export default ProgressBar;

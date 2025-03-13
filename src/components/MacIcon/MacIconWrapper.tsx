import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './MacIconWrapper.module.scss';

type MacIconWrapperProps = {
  children: ReactNode;
  isActive?: boolean;
};

export const MacIconWrapper = ({ children, isActive }: MacIconWrapperProps) => {
  return (
    <div
      className={clsx(styles['wrapper'], {
        [styles.active]: isActive,
      })}
    >
      {children}
    </div>
  );
};

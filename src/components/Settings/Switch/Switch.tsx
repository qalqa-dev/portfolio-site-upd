import React from 'react';
import styles from './Switch.module.scss';

//Thanks to Yassine Zanina => https://uiverse.io/profile/zanina-yassine

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Switch = ({ checked, onChange }: SwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    onChange(newCheckedState);
  };

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-checked={checked ? 'true' : 'false'}
      />
      <label className={styles.switch} htmlFor="checkbox">
        <span className={styles.slider} />
      </label>
    </div>
  );
};

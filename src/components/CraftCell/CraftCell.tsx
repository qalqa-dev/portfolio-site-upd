import clsx from 'clsx';
import styles from './CraftCell.module.scss';

export type Block = 'wood' | 'coal' | 'iron';
export interface Cell {
  contains?: Block;
  amount?: number;
  isSelected?: boolean;
}
export const CraftCell = ({ contains, amount, isSelected }: Cell) => {
  return (
    <div className={clsx(styles.cell, { [styles.selected]: isSelected })}>
      {contains && (
        <img src={`/src/assets/clicker_blocks/${contains}.png`} alt="block" />
      )}
      <span className={styles.amount}>{amount}</span>
    </div>
  );
};

import { Pickaxe } from '@/pages/Craft/Craft';
import clsx from 'clsx';
import styles from './CraftCell.module.scss';

export type Block = 'wood' | 'plank' | 'stick';

export type Cell = {
  amount?: number;
  isSelected?: boolean;
};

export type PickaxeCell = Cell & {
  pickaxe?: Pickaxe;
};

export type BlockCell = Cell & {
  contains?: Block;
};
export const CraftCell = ({
  contains,
  pickaxe,
  amount,
  isSelected,
}: BlockCell & PickaxeCell) => {
  return (
    <div className={clsx(styles.cell, { [styles.selected]: isSelected })}>
      {contains && (
        <img src={`/src/assets/clicker_blocks/${contains}.webp`} alt="block" />
      )}
      {pickaxe && (
        <img src={`/src/assets/clicker_tools/${pickaxe}.webp`} alt="block" />
      )}
      {amount && amount > 1 && <span className={styles.amount}>{amount}</span>}
    </div>
  );
};

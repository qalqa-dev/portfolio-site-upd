import { Pickaxe } from '@/pages/Craft/Craft';
import clsx from 'clsx';
import styles from './CraftCell.module.scss';

export type Block = 'wood' | 'plank' | 'stick' | 'cobble' | 'ironOre';

export type Cell = {
  amount?: number;
  isSelected?: boolean;
};

export type PickaxeCell = Cell & {
  pickaxe?: Pickaxe;
};

export type FurnaceCell = Cell & {
  furnace?: boolean;
};

export type BlockCell = Cell & {
  contains?: Block;
};
export const CraftCell = ({
  contains,
  pickaxe,
  furnace,
  amount,
  isSelected,
}: BlockCell & PickaxeCell & FurnaceCell) => {
  return (
    <div className={clsx(styles.cell, { [styles.selected]: isSelected })}>
      {contains && (
        <img src={`/src/assets/clicker_blocks/${contains}.webp`} alt="block" />
      )}
      {pickaxe && (
        <img src={`/src/assets/clicker_tools/${pickaxe}.webp`} alt="block" />
      )}
      {furnace && (
        <img src={`/src/assets/clicker_tools/furnace.webp`} alt="block" />
      )}
      {amount && amount > 1 && <span className={styles.amount}>{amount}</span>}
    </div>
  );
};

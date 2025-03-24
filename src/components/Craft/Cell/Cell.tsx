import clsx from 'clsx';

import { BlockCell, FurnaceCell, PickaxeCell } from '@/types/Craft';
import styles from './Cell.module.scss';

export const Cell = ({
  contains,
  pickaxe,
  furnace,
  amount,
  isSelected,
}: BlockCell & PickaxeCell & FurnaceCell) => {
  return (
    <div className={clsx(styles.cell, { [styles.selected]: isSelected })}>
      {contains && (
        <img
          draggable="false"
          src={`/clicker_blocks/${contains}.webp`}
          alt="block"
        />
      )}
      {pickaxe && (
        <img
          draggable="false"
          src={`/clicker_tools/${pickaxe}.webp`}
          alt="block"
        />
      )}
      {furnace && (
        <img
          draggable="false"
          src={`/clicker_tools/furnace.webp`}
          alt="block"
        />
      )}
      {amount && amount > 1 && <span className={styles.amount}>{amount}</span>}
    </div>
  );
};

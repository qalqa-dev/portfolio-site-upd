import clsx from 'clsx';

import { BlockCell, FurnaceCell, PickaxeCell } from '@/types/Craft';
import styles from './Cell.module.scss';

type CellProps = {
  amount?: number;
  isSelected?: boolean;
} & (
  | (Pick<BlockCell, 'contains'> & { pickaxe?: never; furnace?: never })
  | (Pick<PickaxeCell, 'pickaxe'> & { contains?: never; furnace?: never })
  | (Pick<FurnaceCell, 'furnace'> & { contains?: never; pickaxe?: never })
);

export const Cell = ({
  contains,
  pickaxe,
  furnace,
  amount,
  isSelected,
}: CellProps) => {
  // Throw error if multiple content props are provided
  if ([contains, pickaxe, furnace].filter(Boolean).length > 1) {
    throw new Error(
      'Only one of contains, pickaxe, or furnace can be provided',
    );
  }

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
      {amount && amount > 1 && (
        <span data-testid="amount" className={styles.amount}>
          {amount}
        </span>
      )}
    </div>
  );
};

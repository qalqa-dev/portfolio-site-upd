import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoBook } from 'react-icons/io5';

import { BlockCell, CraftingResult } from '@/types/Craft';
import { AppearingText, Cell, MacIconWrapper } from 'components';
import styles from './CraftingArea.module.scss';

interface CraftingAreaProps {
  craftingTable: BlockCell[][];
  inventory: BlockCell[][];
  craftingResult: CraftingResult;
  placeSelectedItemOnCraftingTable: (
    x: number,
    y: number,
    cell: BlockCell,
  ) => void;
  takeCraftedItem: () => void;
  handleClickOnCellInInventory: (x: number, y: number, cell: BlockCell) => void;
  validateSelected: (x: number, y: number) => boolean | undefined;
}

export const CraftingArea = ({
  craftingTable,
  inventory,
  craftingResult,
  placeSelectedItemOnCraftingTable,
  takeCraftedItem,
  handleClickOnCellInInventory,
  validateSelected,
}: CraftingAreaProps) => {
  return (
    <div className={styles['crafting-window']}>
      <div className={styles['crafting-header']}>
        <h2 className={styles.title}>
          <AppearingText text="Craft" />
        </h2>
        <ul className={styles['actions-list']}>
          <li className={styles['actions-item']}>
            <MacIconWrapper>
              <IoBook />
            </MacIconWrapper>
          </li>
        </ul>
      </div>
      <h3>Crafting Table</h3>
      <div className={styles['crafting-area']}>
        <div className={styles['crafting-table']}>
          {craftingTable.map((row, rowIndex) => (
            <div className={styles['crafting-table-row']} key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  onMouseDown={() =>
                    placeSelectedItemOnCraftingTable(cellIndex, rowIndex, cell)
                  }
                  onMouseEnter={(e) => {
                    if (e.buttons === 1) {
                      placeSelectedItemOnCraftingTable(
                        cellIndex,
                        rowIndex,
                        cell,
                      );
                    }
                  }}
                  key={cellIndex}
                >
                  <Cell contains={cell.contains} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <FaLongArrowAltRight size={64} />
        <div onClick={takeCraftedItem}>
          <Cell
            contains={
              'contains' in craftingResult ? craftingResult.contains : undefined
            }
            pickaxe={
              'pickaxe' in craftingResult ? craftingResult.pickaxe : undefined
            }
            furnace={
              'furnace' in craftingResult ? craftingResult.furnace : undefined
            }
            amount={
              'amount' in craftingResult ? craftingResult.amount : undefined
            }
          />
        </div>
      </div>
      <h3>Inventory</h3>
      <div className={styles.inventory}>
        {inventory.map((row, rowIndex) => (
          <div className={styles['inventory-row']} key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div
                onClick={() =>
                  handleClickOnCellInInventory(cellIndex, rowIndex, cell)
                }
                key={cellIndex}
              >
                <Cell
                  isSelected={validateSelected(cellIndex, rowIndex)}
                  contains={cell.contains}
                  amount={cell.amount}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

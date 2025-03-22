import { useEffect, useState } from 'react';
import { IoBook } from 'react-icons/io5';

import { AppearingText } from '@/components/AppearingText/AppearingText';
import { Block, Cell, CraftCell } from '@/components/CraftCell/CraftCell';
import { MacIconWrapper, Safari } from 'components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from './Craft.module.scss';

const Craft = () => {
  const [clickerGlowSize, setClickerGlowSize] = useState(100);

  const [craftingTable, setCraftingTable] = useState<Cell[][]>([
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
  ]);
  const [craftingResult, setCraftingResult] = useState<Cell>({});

  const [inventory, setInventory] = useState<Cell[][]>(
    Array.from({ length: 4 }, () => Array.from({ length: 12 }, () => ({}))),
  );

  const [pickaxe, setPickaxe] = useState<string>();
  const [block, setBlock] = useState<Block>('wood');
  const [selectedItem, setSelectedItem] = useState<[number, number]>();

  const getCell = (scope: Cell[][], x: number, y: number) => {
    return scope[y] ? scope[y][x] : {};
  };

  const updateScope = <T extends Cell[][]>(
    scope: T,
    x: number,
    y: number,
    cell: Cell,
  ): T => {
    if (scope[y]) {
      const updatedRow = [...scope[y]];
      updatedRow[x] = cell;
      return scope.map((row, index) =>
        index === y ? updatedRow : [...row],
      ) as T;
    }
    return scope;
  };

  const setCraftingTableCell = (x: number, y: number, cell: Cell) =>
    setCraftingTable(updateScope(craftingTable, x, y, cell));

  const setInventoryCell = (x: number, y: number, cell: Cell) =>
    setInventory(updateScope(inventory, x, y, cell));

  const getFirstEmptyCellCoordinates = (scope: Cell[][]) => {
    for (let i = 0; i < scope.length; i++) {
      for (let j = 0; j < scope[i].length; j++) {
        if (!scope[i][j].contains) {
          return [j, i];
        }
      }
    }
    return null;
  };

  const handleClickBlock = () => {
    setClickerGlowSize(70);
    setTimeout(() => {
      setClickerGlowSize(100);
    }, 300);

    const emptyCellCoordinates = getFirstEmptyCellCoordinates(inventory);

    if (emptyCellCoordinates === null) return;

    const [emptyCellX, emptyCellY] = emptyCellCoordinates;

    const existingCell = inventory.flatMap((row) =>
      row.filter((cell) => cell.contains === block),
    )[0];

    if (!existingCell || !existingCell.amount) {
      setInventoryCell(emptyCellX, emptyCellY, {
        contains: block,
        amount: 1,
      });
      return;
    }
    const existingRow = inventory.findIndex((row) =>
      row.includes(existingCell),
    );
    const existingCellIndex = inventory[existingRow].indexOf(existingCell);
    setInventoryCell(existingCellIndex, existingRow, {
      contains: block,
      amount: existingCell.amount + 1,
    });
  };

  const handleClickOnCellInInventory = (
    xCoordinateCell: number,
    yCoordinateCell: number,
    cell: Cell,
  ) => {
    if (!cell.contains) {
      setSelectedItem(undefined);
      return;
    }
    setSelectedItem([xCoordinateCell, yCoordinateCell]);
  };

  const validateSelected = (
    xCoordinateCell: number,
    yCoordinateCell: number,
  ) => {
    if (!selectedItem) return;

    if (
      xCoordinateCell === selectedItem[0] &&
      yCoordinateCell === selectedItem[1]
    )
      return true;
  };

  const placeSelectedItemOnCraftingTable = (
    xCoordinateCell: number,
    yCoordinateCell: number,
    cell: Cell,
  ) => {
    if (!selectedItem) {
      const craftingTableCell = getCell(
        craftingTable,
        xCoordinateCell,
        yCoordinateCell,
      );
      if (craftingTableCell.contains) {
        const emptyCellCoordinates = getFirstEmptyCellCoordinates(inventory);
        if (emptyCellCoordinates) {
          const [emptyCellX, emptyCellY] = emptyCellCoordinates;
          setInventoryCell(emptyCellX, emptyCellY, {
            contains: craftingTableCell.contains,
            amount: 1,
          });
          setSelectedItem([emptyCellX, emptyCellY]);
          setCraftingTableCell(xCoordinateCell, yCoordinateCell, {});
          return;
        }
      }
    }
    if (!selectedItem) return;

    const selectedCell = getCell(inventory, selectedItem[0], selectedItem[1]);

    if (!selectedCell.amount) return;

    if (cell.contains) {
      setCraftingTableCell(xCoordinateCell, yCoordinateCell, {});
      setInventoryCell(selectedItem[0], selectedItem[1], {
        ...cell,
        amount: selectedCell.amount + 1,
      });
      return;
    }

    setCraftingTableCell(xCoordinateCell, yCoordinateCell, selectedCell);

    if (selectedCell.amount <= 1) {
      setInventoryCell(selectedItem[0], selectedItem[1], {});
      setSelectedItem(undefined);
    } else {
      setInventoryCell(selectedItem[0], selectedItem[1], {
        contains: selectedCell.contains,
        amount: selectedCell.amount - 1,
      });
    }
  }; //TODO: Причесать выше

  useEffect(() => {
    const woodCount = craftingTable
      .flat()
      .filter((cell) => cell.contains === 'wood').length;
    if (woodCount === 1) {
      setCraftingResult({ contains: 'plank', amount: 4 });
    } else {
      setCraftingResult({});
    }
  }, [craftingTable]);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <div className={styles.container}>
      <Safari openedLink="qalqa.com/mine">
        <div className={styles.webview}>
          <div className={styles.clicker}>
            <h2 className={styles.title}>
              <AppearingText text="Mine" />
            </h2>
            <div className="grid grid-cols-[1fr_3fr_1fr] w-full">
              <div></div>
              <div
                onClick={handleClickBlock}
                className={styles['clicker-block']}
              >
                <div
                  className={styles['clicker-backdrop']}
                  style={{
                    backgroundSize: `${clickerGlowSize}%`,
                  }}
                >
                  <img
                    width={275}
                    height={275}
                    src={`/src/assets/clicker_blocks/${block}.webp`}
                    alt="block"
                  />
                </div>
              </div>
              <div className={styles['clicker-pickaxe']}>
                <div className={styles['clicker-pickaxe-container']}>
                  {pickaxe && (
                    <img
                      className={styles['clicker-pickaxe-img']}
                      src={`/src/assets/clicker_tools/${pickaxe}_pickaxe.webp`}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Safari>
      <Safari openedLink="qalqa.com/craft">
        <div className={styles.webview}>
          <div className="flex justify-center">
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
          <div className={styles['crafting-window']}>
            <h3>Crafting Table</h3>
            <div className={styles['crafting-area']}>
              <div className={styles['crafting-table']}>
                {craftingTable.map((row, rowIndex) => (
                  <div className={styles['crafting-table-row']} key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <div
                        onClick={() =>
                          placeSelectedItemOnCraftingTable(
                            cellIndex,
                            rowIndex,
                            cell,
                          )
                        }
                        key={cellIndex}
                      >
                        {<CraftCell contains={cell.contains} />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <FaLongArrowAltRight size={64} />
              <div>
                {
                  <CraftCell
                    contains={craftingResult.contains}
                    amount={craftingResult.amount}
                  />
                }
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
                      {
                        <CraftCell
                          isSelected={validateSelected(cellIndex, rowIndex)}
                          contains={cell.contains}
                          amount={cell.amount}
                        />
                      }
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Safari>
    </div>
  );
};
export default Craft;

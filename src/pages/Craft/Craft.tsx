import { useEffect, useState } from 'react';
import { IoBook } from 'react-icons/io5';

import { AppearingText } from '@/components/AppearingText/AppearingText';
import {
  Block,
  BlockCell,
  Cell,
  CraftCell,
} from '@/components/CraftCell/CraftCell';
import { MacIconWrapper, Safari } from 'components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';
import styles from './Craft.module.scss';

export type Pickaxe =
  | 'woodenPickaxe'
  | 'stonePickaxe'
  | 'ironPickaxe'
  | 'diamondPickaxe'
  | 'netheritePickaxe';

type CraftingResult =
  | { contains: Block; amount: number }
  | { pickaxe: Pickaxe; amount: number }
  | { furnace: true; amount: number }
  | object;

const CRAFTING_TABLE_ROWS = 3;
const CRAFTING_TABLE_COLS = 3;
const INVENTORY_ROWS = 4;
const INVENTORY_COLS = 12;

const emptyCell = {};

const createGrid = (rows: number, cols: number): BlockCell[][] =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({})));

const Craft = () => {
  const [clickerGlowSize, setClickerGlowSize] = useState(100);
  const [craftingTable, setCraftingTable] = useState<BlockCell[][]>(
    createGrid(CRAFTING_TABLE_ROWS, CRAFTING_TABLE_COLS),
  );
  const [craftingResult, setCraftingResult] =
    useState<CraftingResult>(emptyCell);
  const [inventory, setInventory] = useState<BlockCell[][]>(
    createGrid(INVENTORY_ROWS, INVENTORY_COLS),
  );
  const [pickaxe, setPickaxe] = useState<Pickaxe>();
  const [furnace, setFurnace] = useState<boolean>(false);
  const [blockArray, setBlockArray] = useState<Block[]>(['wood']);
  const [activeBlock, setActiveBlock] = useState<Block>(
    blockArray[blockArray.length - 1],
  );
  const [selectedItem, setSelectedItem] = useState<[number, number]>();

  const getCell = (scope: BlockCell[][], x: number, y: number) => {
    return scope[y] ? scope[y][x] : {};
  };

  const updateScope = <T extends BlockCell[][]>(
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

  const setCraftingTableCell = (x: number, y: number, cell: BlockCell) =>
    setCraftingTable(updateScope(craftingTable, x, y, cell));

  const setInventoryCell = (x: number, y: number, cell: BlockCell) =>
    setInventory(updateScope(inventory, x, y, cell));

  const getFirstEmptyCellCoordinates = (scope: BlockCell[][]) => {
    for (let i = 0; i < scope.length; i++) {
      for (let j = 0; j < scope[i].length; j++) {
        if (!scope[i][j].contains) {
          return [j, i];
        }
      }
    }
    return null;
  };

  const changeActiveBock = (direction: 'back' | 'forward') => {
    const currentIndex = blockArray.indexOf(activeBlock);
    const newIndex =
      direction === 'back'
        ? (currentIndex - 1 + blockArray.length) % blockArray.length
        : (currentIndex + 1) % blockArray.length;
    setActiveBlock(blockArray[newIndex]);
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
      row.filter((cell) => cell.contains === activeBlock),
    )[0];

    if (!existingCell || !existingCell.amount) {
      setInventoryCell(emptyCellX, emptyCellY, {
        contains: activeBlock,
        amount: 1,
      });
      return;
    }
    const existingRow = inventory.findIndex((row) =>
      row.includes(existingCell),
    );
    const existingCellIndex = inventory[existingRow].indexOf(existingCell);
    setInventoryCell(existingCellIndex, existingRow, {
      contains: activeBlock,
      amount: existingCell.amount + 1,
    });
  };

  const handleClickOnCellInInventory = (
    xInventory: number,
    yInventory: number,
    cell: BlockCell,
  ) => {
    if (!cell.contains) {
      setSelectedItem(undefined);
      return;
    }
    setSelectedItem([xInventory, yInventory]);
  };

  const validateSelected = (xInventory: number, yInventory: number) => {
    if (!selectedItem) return;

    if (xInventory === selectedItem[0] && yInventory === selectedItem[1])
      return true;
  };

  const placeSelectedItemOnCraftingTable = (
    xCraftingTable: number,
    yCraftingTable: number,
    cellCraftingTable: BlockCell,
  ) => {
    if (!selectedItem) {
      const craftingTableCell = getCell(
        craftingTable,
        xCraftingTable,
        yCraftingTable,
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
          setCraftingTableCell(xCraftingTable, yCraftingTable, {});
          return;
        }
      }
    }
    if (!selectedItem) return;

    const selectedCell = getCell(inventory, selectedItem[0], selectedItem[1]);

    if (!selectedCell.amount) return;

    if (cellCraftingTable.contains) {
      setCraftingTableCell(xCraftingTable, yCraftingTable, {});
      setInventoryCell(selectedItem[0], selectedItem[1], {
        ...cellCraftingTable,
        amount: selectedCell.amount + 1,
      });
      return;
    }

    setCraftingTableCell(xCraftingTable, yCraftingTable, selectedCell);

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

  const clearCraftingTable = () => {
    setCraftingTable(
      Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({}))),
    );
  };

  const takeCraftedItem = () => {
    if ('pickaxe' in craftingResult) {
      setPickaxe(craftingResult.pickaxe);
      clearCraftingTable();
      setCraftingResult({});
      return;
    }
    if ('furnace' in craftingResult && craftingResult.furnace) {
      setFurnace(craftingResult.furnace);
      clearCraftingTable();
      setCraftingResult({});
      return;
    }
    if (!('contains' in craftingResult) || !craftingResult.contains) return;
    const existingCell = inventory.flatMap((row) =>
      row.filter((cell) => cell.contains === craftingResult.contains),
    )[0];
    if (existingCell) {
      if (!existingCell.amount || !craftingResult.amount) return;
      const existingRow = inventory.findIndex((row) =>
        row.includes(existingCell),
      );
      const existingCellIndex = inventory[existingRow].indexOf(existingCell);
      setInventoryCell(existingCellIndex, existingRow, {
        contains: existingCell.contains,
        amount: existingCell.amount + craftingResult.amount,
      });
    } else {
      const emptyCellCoordinates = getFirstEmptyCellCoordinates(inventory);
      if (!emptyCellCoordinates) return;

      const [emptyCellX, emptyCellY] = emptyCellCoordinates;
      setInventoryCell(emptyCellX, emptyCellY, {
        contains: craftingResult.contains,
        amount: craftingResult.amount,
      });
    }
    clearCraftingTable();
    setCraftingResult({});
  };

  useEffect(() => {
    //Доски
    const countInTable = (item: Block) =>
      craftingTable.flat().filter((cell) => cell.contains === item).length;

    const woodCount = countInTable('wood');
    const planksCondition = woodCount === 1;

    const craftPlank = () => {
      setCraftingResult({ contains: 'plank', amount: 4 });
    };
    //

    //Палки
    const plankCount = countInTable('plank');

    const stickCondition =
      plankCount === 2 &&
      craftingTable.some((row, rowIndex) =>
        row.some(
          (cell, colIndex) =>
            cell.contains === 'plank' &&
            craftingTable[rowIndex + 1]?.[colIndex]?.contains === 'plank',
        ),
      );

    const craftStick = () => {
      setCraftingResult({ contains: 'stick', amount: 2 });
    };
    //

    //Деревянная кирка
    const woodenPickaxeCondition =
      craftingTable[0][0].contains === 'plank' &&
      craftingTable[0][1].contains === 'plank' &&
      craftingTable[0][2].contains === 'plank' &&
      craftingTable[1][1].contains === 'stick' &&
      craftingTable[2][1].contains === 'stick';

    const craftWoodenPickaxe = () => {
      setCraftingResult({ pickaxe: 'woodenPickaxe', amount: 1 });
    };
    //

    //Каменная кирка
    const stonePickaxeCondition =
      craftingTable[0][0].contains === 'cobble' &&
      craftingTable[0][1].contains === 'cobble' &&
      craftingTable[0][2].contains === 'cobble' &&
      craftingTable[1][1].contains === 'stick' &&
      craftingTable[2][1].contains === 'stick';

    const craftStonePickaxe = () => {
      setCraftingResult({ pickaxe: 'stonePickaxe', amount: 1 });
    };
    //

    //Печка
    const furnaceCondition =
      craftingTable[0][0].contains === 'cobble' &&
      craftingTable[0][1].contains === 'cobble' &&
      craftingTable[0][2].contains === 'cobble' &&
      craftingTable[1][0].contains === 'cobble' &&
      craftingTable[1][2].contains === 'cobble' &&
      craftingTable[2][0].contains === 'cobble' &&
      craftingTable[2][1].contains === 'cobble' &&
      craftingTable[2][2].contains === 'cobble';

    const craftFurnace = () => {
      setCraftingResult({ furnace: true, amount: 1 });
    };
    //

    switch (true) {
      case planksCondition:
        craftPlank();
        break;
      case stickCondition:
        craftStick();
        break;
      case woodenPickaxeCondition:
        craftWoodenPickaxe();
        break;
      case stonePickaxeCondition:
        craftStonePickaxe();
        break;
      case furnaceCondition:
        craftFurnace();
        break;
      default:
        setCraftingResult({});
        break;
    }
  }, [craftingTable]);

  useEffect(() => {
    switch (pickaxe) {
      case 'woodenPickaxe':
        setBlockArray((prevArray) => [...prevArray, 'cobble']);
        break;
      case 'stonePickaxe':
        setBlockArray((prevArray) => [...prevArray, 'ironOre']);
        break;
    }
  }, [pickaxe]);

  useEffect(() => {
    setActiveBlock(blockArray[blockArray.length - 1]);
  }, [blockArray]);

  const { ref, inView } = useInView();

  return (
    <div
      className={styles.container}
      ref={ref}
      style={{
        animation: inView ? 'fade-in 0.5s ease-in-out' : '',
        opacity: inView ? 1 : 0,
      }}
    >
      <div className={styles['dev-warning']}>
        Attention! This page is under development, so bugs, fps drawdowns, and
        unstable operation are possible.
      </div>
      <Safari openedLink="qalqa.com/mine">
        <div className={styles.webview}>
          <div className={styles.clicker}>
            <h2 className={styles.title}>
              <AppearingText text="Mine" />
            </h2>
            <div className="grid grid-cols-[1fr_3fr_1fr] w-full">
              <div className={styles['clicker-furnace']}>
                <div className={styles['clicker-furnace-container']}>
                  {furnace && (
                    <img
                      draggable="false"
                      className={styles['clicker-furnace-img']}
                      src={`/clicker_tools/furnace.webp`}
                      alt="furnace"
                    />
                  )}
                </div>
              </div>
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
                    draggable="false"
                    width={275}
                    height={275}
                    src={`/clicker_blocks/${activeBlock}.webp`}
                    alt="block"
                  />
                </div>
              </div>
              <div className={styles['clicker-pickaxe']}>
                <div className={styles['clicker-pickaxe-container']}>
                  {pickaxe && (
                    <img
                      draggable="false"
                      className={styles['clicker-pickaxe-img']}
                      src={`/clicker_tools/${pickaxe}.webp`}
                      alt={`${pickaxe} || no_pickaxe`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {blockArray.length > 1 && (
            <div className="flex items-center justify-center">
              <ul className={styles['actions-list']}>
                <li
                  onClick={() => changeActiveBock('back')}
                  className={styles['actions-item']}
                >
                  <MacIconWrapper>
                    <IoIosArrowBack />
                  </MacIconWrapper>
                </li>
                <li
                  onClick={() => changeActiveBock('forward')}
                  className={styles['actions-item']}
                >
                  <MacIconWrapper>
                    <IoIosArrowForward />
                  </MacIconWrapper>
                </li>
              </ul>
            </div>
          )}
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
                        onMouseDown={() =>
                          placeSelectedItemOnCraftingTable(
                            cellIndex,
                            rowIndex,
                            cell,
                          )
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
                        {<CraftCell contains={cell.contains} />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <FaLongArrowAltRight size={64} />
              <div onClick={takeCraftedItem}>
                {
                  <CraftCell
                    contains={
                      'contains' in craftingResult
                        ? craftingResult.contains
                        : undefined
                    }
                    pickaxe={
                      'pickaxe' in craftingResult
                        ? craftingResult.pickaxe
                        : undefined
                    }
                    furnace={
                      'furnace' in craftingResult
                        ? craftingResult.furnace
                        : undefined
                    }
                    amount={
                      'amount' in craftingResult
                        ? craftingResult.amount
                        : undefined
                    }
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

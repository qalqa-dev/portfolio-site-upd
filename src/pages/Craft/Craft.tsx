import { useEffect, useState } from 'react';

import { Clicker } from '@/components/Craft/Clicker';
import { CraftingArea } from '@/components/Craft/CraftingArea';
import {
  Block,
  BlockCell,
  CellType,
  CraftingResult,
  Pickaxe,
} from '@/types/Craft';
import { Safari } from 'components';
import { useInView } from 'react-intersection-observer';
import styles from './Craft.module.scss';

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
    cell: CellType,
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

  const changeActiveBlock = (direction: 'back' | 'forward') => {
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
          <Clicker
            clickerGlowSize={clickerGlowSize}
            activeBlock={activeBlock}
            pickaxe={pickaxe}
            furnace={furnace}
            handleClickBlock={handleClickBlock}
            changeActiveBlock={changeActiveBlock}
            blockArray={blockArray}
          />
        </div>
      </Safari>
      <Safari openedLink="qalqa.com/craft">
        <div className={styles.webview}>
          <CraftingArea
            craftingTable={craftingTable}
            inventory={inventory}
            craftingResult={craftingResult}
            placeSelectedItemOnCraftingTable={placeSelectedItemOnCraftingTable}
            takeCraftedItem={takeCraftedItem}
            handleClickOnCellInInventory={handleClickOnCellInInventory}
            validateSelected={validateSelected}
          />
        </div>
      </Safari>
    </div>
  );
};
export default Craft;

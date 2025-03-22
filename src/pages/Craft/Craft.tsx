import { useState } from 'react';
import { IoBook } from 'react-icons/io5';

import { AppearingText } from '@/components/AppearingText/AppearingText';
import { Cell, CraftCell } from '@/components/CraftCell/CraftCell';
import { MacIconWrapper, Safari } from 'components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import styles from './Craft.module.scss';
const Craft = () => {
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

  const [backgroundSize, setBackgroundSize] = useState(100);

  const handleClick = () => {
    setBackgroundSize(70);
    setTimeout(() => {
      setBackgroundSize(100);
    }, 300);
  };

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
              <div onClick={handleClick} className={styles['clicker-block']}>
                <div
                  className={styles['clicker-backdrop']}
                  style={{
                    backgroundSize: `${backgroundSize}%`,
                  }}
                >
                  <img
                    width={275}
                    height={275}
                    src="/src/assets/clicker_blocks/wood.png"
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
                      <div key={cellIndex}>
                        {<CraftCell contains={cell.contains} />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <FaLongArrowAltRight size={64} />
              <div>{<CraftCell contains={craftingResult.contains} />}</div>
            </div>
            <h3>Inventory</h3>
            <div className={styles.inventory}>
              {inventory.map((row, rowIndex) => (
                <div className={styles['inventory-row']} key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <div key={cellIndex}>
                      {<CraftCell contains={cell.contains} />}
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

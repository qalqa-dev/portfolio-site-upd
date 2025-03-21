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

  return (
    <div className={styles.container}>
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

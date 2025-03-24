import { AppearingText } from '@/components/AppearingText/AppearingText';
import { MacIconWrapper } from 'components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from './CraftClicker.module.scss';

interface ClickerProps {
  clickerGlowSize: number;
  activeBlock: string;
  pickaxe?: string;
  furnace: boolean;
  handleClickBlock: () => void;
  changeActiveBlock: (direction: 'back' | 'forward') => void;
  blockArray: string[];
}

export const CraftClicker = ({
  clickerGlowSize,
  activeBlock,
  pickaxe,
  furnace,
  handleClickBlock,
  changeActiveBlock,
  blockArray,
}: ClickerProps) => {
  return (
    <div className={styles['clicker']}>
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
                src="/clicker_tools/furnace.webp"
                alt="furnace"
              />
            )}
          </div>
        </div>
        <div onClick={handleClickBlock} className={styles['clicker-block']}>
          <div
            className={styles['clicker-backdrop']}
            style={{ backgroundSize: `${clickerGlowSize}%` }}
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
      {blockArray.length > 1 && (
        <div className="flex items-center justify-center">
          <ul className={styles['actions-list']}>
            <li
              onClick={() => changeActiveBlock('back')}
              className={styles['actions-item']}
            >
              <MacIconWrapper>
                <IoIosArrowBack />
              </MacIconWrapper>
            </li>
            <li
              onClick={() => changeActiveBlock('forward')}
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
  );
};

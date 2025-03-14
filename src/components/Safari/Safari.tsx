import {
  IoIosAdd,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosSearch,
} from 'react-icons/io';
import { IoCopyOutline, IoShareOutline } from 'react-icons/io5';
import { PiSidebarThin } from 'react-icons/pi';
import styles from './Safari.module.scss';

export const Safari: React.FC<{
  children?: React.ReactNode;
  openedLink?: string;
  className?: string;
  customStyles?: React.CSSProperties;
}> = ({ children, openedLink }) => {
  return (
    <div className={`${styles.safari} flex flex-col w-full`}>
      <div className={styles['heading']}>
        <div className="flex">
          <div className={styles['window-container']}>
            <div className={styles['window-control-btn']}></div>
            <div className={styles['window-control-btn']}></div>
            <div className={styles['window-control-btn']}></div>
          </div>

          <div className={styles['share-container']}>
            <PiSidebarThin size={32} />
            <div className={styles.divider}></div>
            <IoIosArrowDown size={16} />
          </div>
          <div className={styles['tab-control-container']}>
            <IoIosArrowBack size={32} />
            <IoIosArrowForward size={32} />
          </div>
        </div>

        <div className={styles['actions-container']}>
          <ul className={styles['actions-list']}>
            <li>
              <IoShareOutline size={28} />
            </li>
            <li>
              <IoIosAdd size={40} />
            </li>
            <li>
              <IoCopyOutline size={28} />
            </li>
          </ul>
        </div>
        <div className={styles['url-container']}>
          <IoIosSearch />
          <p>{openedLink}</p>
        </div>
      </div>
      {children && <div className={styles['safari-content']}>{children}</div>}
    </div>
  );
};

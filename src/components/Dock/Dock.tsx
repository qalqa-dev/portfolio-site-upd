import { setSettingsState } from '@/store/settingsSlice';
import { RootState } from '@/store/store';
import { useRef } from 'react';
import { GiStoneBlock } from 'react-icons/gi';
import { PiGearFill, PiHouseFill, PiTerminalWindowFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router';
import { scaleValue } from 'utils/scale';
import { MacIconWrapper } from '../MacIcon/MacIconWrapper';
import styles from './Dock.module.scss';

const maxAdditionalSize = 5;

export const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const settingsState = useSelector(
    (state: RootState) => state.settings.settingsState,
  );

  const location = useLocation();

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize],
    );

    dockRef.current.style.setProperty(
      '--dock-offset-left',
      `${offsetPixels * -1}px`,
    );

    dockRef.current.style.setProperty(
      '--dock-offset-right',
      `${offsetPixels}px`,
    );
  };

  const getActiveTab = (path: string) => location.pathname === path;

  return (
    <nav ref={dockRef} className={styles.dock}>
      <ul>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <Link to="/">
            <MacIconWrapper isActive={getActiveTab('/')}>
              <PiHouseFill />
            </MacIconWrapper>
          </Link>
          <span className={styles.tooltip}>Home</span>
        </li>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <Link to="/term">
            <MacIconWrapper isActive={getActiveTab('/term')}>
              <PiTerminalWindowFill />
            </MacIconWrapper>
          </Link>
          <span className={styles.tooltip}>Terminal</span>
        </li>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <Link to="/craft">
            <MacIconWrapper isActive={getActiveTab('/craft')}>
              <GiStoneBlock />
            </MacIconWrapper>
          </Link>
          <span className={styles.tooltip}>Craft</span>
        </li>
        <li className={styles.app} onMouseMove={handleAppHover}>
          <a onClick={() => dispatch(setSettingsState(!settingsState))}>
            <MacIconWrapper isActive={getActiveTab('/settings')}>
              <PiGearFill />
            </MacIconWrapper>
          </a>
          <span className={styles.tooltip}>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

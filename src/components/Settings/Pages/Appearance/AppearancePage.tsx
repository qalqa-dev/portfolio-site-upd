import { Switch } from '@/components/Switch/Switch';
import { AppDispatch, RootState, setSmoothScroll, setTheme } from '@/store';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AppearancePage.module.scss';
export const AppearancePage = () => {
  const { theme, smoothScroll } = useSelector(
    (state: RootState) => state.settings,
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className={styles['appearance-page']}>
      <h2 className={styles['page-title']}>Appearance</h2>
      <div className={styles['inner-card']}>
        <div className={styles['appearance-section']}>
          <h3 className={styles['appearance-title']}>Appearance</h3>
          <ul className={styles['appearance-list']}>
            <li>
              <button
                className={styles['theme-btn']}
                onClick={() => dispatch(setTheme('light'))}
              >
                <div
                  className={clsx(styles['image-container'], {
                    [styles.active]: theme === 'light',
                  })}
                >
                  <img src="/light-theme.png" alt="light" />
                </div>
                <span>Light</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => dispatch(setTheme('dark'))}
                className={styles['theme-btn']}
              >
                <div
                  className={clsx(styles['image-container'], {
                    [styles.active]: theme === 'dark',
                  })}
                >
                  <img src="/dark-theme.png" alt="dark" />
                </div>
                <span>Dark</span>
              </button>
            </li>
            <li>
              <button
                className={styles['theme-btn']}
                onClick={() => dispatch(setTheme('auto'))}
              >
                <div
                  className={clsx(styles['image-container'], {
                    [styles.active]: theme === 'auto',
                  })}
                >
                  <img src="/auto-theme.png" alt="auto" />
                </div>
                <span>Auto</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.divider} />
        <div className={styles['single-section']}>
          <h3 className={styles['appearance-title']}>Smooth Scroll</h3>
          <Switch
            checked={smoothScroll}
            onChange={(e) => {
              dispatch(setSmoothScroll(e));
            }}
          />
        </div>
        <div className={styles.divider}></div>
        <div className={styles['single-section']}>
          <h3 className={styles['appearance-title']}>Wallpaper</h3>
        </div>
      </div>
    </section>
  );
};

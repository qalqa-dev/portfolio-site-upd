import { Switch } from '@/components/Settings/Switch/Switch';
import { AppDispatch, RootState, setSmoothScroll, setTheme } from '@/store';
import clsx from 'clsx';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AppearancePage.module.scss';
export const AppearancePage = () => {
  const { theme, smoothScroll } = useSelector(
    (state: RootState) => state.settings,
  );
  const dispatch = useDispatch<AppDispatch>();

  useTranslation();

  return (
    <section className={styles['appearance-page']}>
      <h2 className={styles['page-title']}>{t('settings-appearance')}</h2>
      <div className={styles['inner-card']}>
        <div className={styles['appearance-section']}>
          <h3 className={styles['appearance-title']}>
            {t('settings-appearance')}
          </h3>
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
                <span>{t('settings-appearance-light')}</span>
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
                <span>{t('settings-appearance-dark')}</span>
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
                <span>{t('settings-appearance-auto')}</span>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.divider} />
        <div className={styles['single-section']}>
          <h3 className={styles['appearance-title']}>
            {t('settings-appearance-smooth-scroll')}
          </h3>
          <Switch
            checked={smoothScroll}
            onChange={(e) => {
              dispatch(setSmoothScroll(e));
            }}
          />
        </div>
        <div className={styles.divider}></div>
        <div className={styles['single-section']}>
          <h3 className={styles['appearance-title']}>
            {t('settings-appearance-wallpaper')}
          </h3>
          <p>Currently not available</p>
        </div>
      </div>
    </section>
  );
};

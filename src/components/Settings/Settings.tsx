import clsx from 'clsx';
import { t } from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoGlobeOutline, IoInvertMode } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState, setSettingsState } from '@/store';
import { AppearancePage } from './Pages/Appearance';
import { LanguagePage } from './Pages/Language';
import styles from './Settings.module.scss';

export const Settings = () => {
  const settingsState = useSelector(
    (state: RootState) => state.settings.settingsState,
  );

  const pages = ['appearance', 'language'];
  const [page, setPage] = useState(pages[0]);

  const dispatch = useDispatch<AppDispatch>();

  useTranslation();

  const [ref, inView] = useInView();

  return (
    <>
      {settingsState && (
        <div
          className={styles.container}
          ref={ref}
          style={{
            animation: inView ? 'fade-in 0.2s ease-in-out' : '',
            opacity: inView ? 1 : 0,
          }}
        >
          <div className={`${styles.settings} flex flex-col w-full`}>
            <div className="flex flex-col md:flex-row w-full gap-5">
              <div className={styles['left-menu']}>
                <div className={styles['heading']}>
                  <div className="flex">
                    <div className={styles['window-container']}>
                      <div
                        onClick={() => dispatch(setSettingsState(false))}
                        className={styles['window-control-btn']}
                      ></div>
                      <div className={styles['window-control-btn']}></div>
                      <div className={styles['window-control-btn']}></div>
                    </div>
                  </div>
                </div>
                <button
                  className={clsx(styles.button, {
                    [styles.active]: page === pages[0],
                  })}
                  onClick={() => setPage(pages[0])}
                >
                  <i className={styles['appearance-icon']}>
                    <IoInvertMode />
                  </i>
                  {t('settings-appearance')}
                </button>
                <button
                  className={clsx(styles.button, {
                    [styles.active]: page === pages[1],
                  })}
                  onClick={() => setPage(pages[1])}
                >
                  <i className={styles['language-icon']}>
                    <IoGlobeOutline />
                  </i>
                  {t('settings-language')}
                </button>
              </div>
              <div className={styles['right-menu']}>
                {page === pages[0] && <AppearancePage />}
                {page === pages[1] && <LanguagePage />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

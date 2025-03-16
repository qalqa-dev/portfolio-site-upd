import {
  setLanguage,
  setSmoothScroll,
  setWallpapers,
  toggleTheme,
} from '@/store/settingsSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import styles from './Settings.module.scss';

export const Settings = () => {
  const { theme, language, smoothScroll } = useSelector(
    (state: RootState) => state.settings,
  );

  const dispatch = useDispatch<AppDispatch>();
  const { t, i18n } = useTranslation();

  const settingsState = useSelector(
    (state: RootState) => state.settings.settingsState,
  );

  const toggleLanguage = () => {
    const newLang = language === 'en-US' ? 'ru-RU' : 'en-US';
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      {settingsState && (
        <div className={styles.container}>
          <h2>{t('settings-title')}</h2>
          <p>Current theme: {theme}</p>
          <p>Current language: {language}</p>
          <p>Current smooth scroll: {smoothScroll ? 'ON' : 'OFF'}</p>

          <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
          <button onClick={toggleLanguage}>Toggle Language</button>
          <button onClick={() => dispatch(setSmoothScroll(!smoothScroll))}>
            Toggle Smooth Scroll
          </button>
          <button
            onClick={() =>
              dispatch(setWallpapers('/src/assets/wallpapers/Sonoma.png'))
            }
          >
            Set Sonoma Wallpapers
          </button>
        </div>
      )}
    </>
  );
};

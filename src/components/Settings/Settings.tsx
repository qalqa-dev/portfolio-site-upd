import { setLanguage, setTheme } from '@/store/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';
import styles from './Settings.module.scss';

export const Settings = () => {
  const { theme, language } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch<AppDispatch>();

  const settingsState = useSelector(
    (state: RootState) => state.settings.settingsState,
  );
  return (
    <>
      {settingsState && (
        <div className={styles.container}>
          <h2>Settings</h2>
          <p>Current theme: {theme}</p>
          <p>Current language: {language}</p>

          <button
            onClick={() =>
              dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
            }
          >
            Toggle Theme
          </button>
          <button
            onClick={() =>
              dispatch(setLanguage(language === 'en' ? 'ru' : 'en'))
            }
          >
            Toggle Language
          </button>
        </div>
      )}
    </>
  );
};

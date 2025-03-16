import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import styles from './App.module.scss';
import { Dock } from './components/Dock/Dock';
import { Settings } from './components/Settings/Settings';
import { Main } from './pages/Main/Main';
import { TermMain } from './pages/TermMain/TermMain';
import { setTheme } from './store/settingsSlice';
import { RootState } from './store/store';

export const App = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.settings.theme);
  useEffect(() => {
    dispatch(setTheme(theme));
  });

  return (
    <>
      <main>
        <div className={styles['app-background'] + ' z-[-1]'} />
        <BrowserRouter>
          <Dock />
          <Settings />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/term" element={<TermMain />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Dock } from './components/Dock/Dock';
import { Settings } from './components/Settings/Settings';
import { Wallpapers } from './components/Wallpapers/Wallpapers';
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

  const wallpapers = useSelector(
    (state: RootState) => state.settings.wallpapers,
  );

  return (
    <>
      <main>
        <Wallpapers imageUrl={wallpapers} />
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

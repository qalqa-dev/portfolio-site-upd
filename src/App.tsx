import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Skeleton } from './components/Skeleton/Skeleton';
import BaseLayout from './layouts/BaseLayout';
import NotFound from './pages/NotFound/NotFound';
import { RootState, setThemeWithoutStorage, Theme } from './store';

export const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.settings.theme);

  const [tempTheme, setTempTheme] = useState<Theme>(theme);

  useEffect(() => {
    if (theme === 'auto') {
      setTempTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      );
      dispatch(setThemeWithoutStorage(tempTheme));
      return;
    }
    dispatch(setThemeWithoutStorage(theme));
  }, [theme, dispatch, tempTheme]);

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      setTempTheme('dark');
    } else {
      setTempTheme('light');
    }
  });

  const Main = lazy(() => import('./pages/Main/Main'));
  const TermMain = lazy(() => import('./pages/TermMain/TermMain'));
  const Craft = lazy(() => import('./pages/Craft/Craft'));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Skeleton height={800} />}>
                <BaseLayout />
              </Suspense>
            }
          >
            <Route path="*" element={<NotFound />} />
            <Route index element={<Main />} />
            <Route path="term" element={<TermMain />} />
            <Route path="craft" element={<Craft />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

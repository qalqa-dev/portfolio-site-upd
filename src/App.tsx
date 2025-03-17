import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import BaseLayout from './layouts/BaseLayout';
import { setTheme } from './store/settingsSlice';
import { RootState } from './store/store';

export const App = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.settings.theme);
  useEffect(() => {
    dispatch(setTheme(theme));
  });

  const Main = lazy(() => import('./pages/Main/Main'));
  const TermMain = lazy(() => import('./pages/TermMain/TermMain'));

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <BaseLayout />
                </Suspense>
              }
            >
              <Route index element={<Main />} />
              <Route path="term" element={<TermMain />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

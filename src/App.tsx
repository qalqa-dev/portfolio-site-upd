import { BrowserRouter, Route, Routes } from 'react-router';
import styles from './App.module.scss';
import { Dock } from './components/Dock/Dock';
import { Settings } from './components/Settings/Settings';
import { Main } from './pages/Main/Main';
import { TermMain } from './pages/TermMain/TermMain';

export const App = () => (
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

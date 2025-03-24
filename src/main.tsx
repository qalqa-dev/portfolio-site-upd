import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import 'assets/styles/fonts.scss';
import 'assets/styles/index.css';
import 'utils/i18n';
import { App } from './App';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

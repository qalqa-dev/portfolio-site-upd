import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector) // Определение языка (из localStorage, браузера и т.д.)
  .use(initReactI18next)
  .init({
    resources: {
      ['en-US']: {
        translation: {
          welcome: 'Welcome!',
          changeLang: 'Change language',
        },
      },
      ['ru-RU']: {
        translation: {
          welcome: 'Добро пожаловать!',
          changeLang: 'Сменить язык',
        },
      },
    },
    fallbackLng: ['en-US'],
    interpolation: { escapeValue: false },
  });

export default i18n;

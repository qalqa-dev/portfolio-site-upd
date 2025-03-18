import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ['en-US']: {
        translation: {
          'en-US': 'English',
          'ru-RU': 'Russian',
          // Главная
          'hero-description-1': 'full-stack developer',
          'hero-description-2': 'frontend developer',
          'hero-description-3': 'backend developer',

          // Обо мне
          'about-title': 'About me',

          // Стэк
          'stack-title': 'Stack',
          'stack-frontend': 'Frontend',
          'stack-backend': 'Backend',
          'stack-hint':
            '// Full tech stack you can see on GitHub or in the terminal version',

          // Проекты
          'projects-title': 'Projects',

          // Контакты
          'contacts-title': 'Contacts',

          'settings-title': 'Settings',
          changeLang: 'Change language',
        },
      },
      ['ru-RU']: {
        translation: {
          'en-US': 'Английский',
          'ru-RU': 'Русский',
          // Главная
          'hero-description-1': 'full-stack разработчик',
          'hero-description-2': 'frontend-разработчик',
          'hero-description-3': 'backend-разработчик',

          'about-title': 'Обо мне',

          // Стэк
          'stack-title': 'Стек',
          'stack-frontend': 'Фронтенд',
          'stack-backend': 'Бэкенд',
          'stack-hint':
            '// Полный стек технологий можно посмотреть на GitHub или в терминальной версии',

          // Проекты
          'projects-title': 'Проекты',

          // Контакты
          'contacts-title': 'Контакты',

          ['settings-title']: 'Настройки',
          changeLang: 'Сменить язык',
        },
      },
    },
    fallbackLng: ['en-US'],
    interpolation: { escapeValue: false },
  });

export default i18n;

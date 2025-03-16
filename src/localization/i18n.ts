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
          // Главная
          'hero-description-1': 'full-stack developer',
          'hero-description-2': 'frontend developer',
          'hero-description-3': 'backend developer',

          // Обо мне
          'about-title': 'About me',
          'about-intro':
            "Hey, I'm Andrey! <span class='highlight'>Full-stack</span> dev with <span class='highlight'>two years</span> of commercial development experience and I'm on the lookout for opportunities in <span class='highlight'>big tech</span>.",
          'about-location':
            "Originally from <span class='highlight'>Belarus</span>, now based in <span class='highlight'>Moscow</span>.",
          'about-mentoring':
            "I'm actively making <span class='highlight'>pet projects</span> and <span class='highlight'>mentoring</span> first-year students at my university.",
          'about-university':
            "I study web development at <span class='highlight'>Moscow Polytechnic University</span>, where I led the development of a website for our <span class='highlight'>web tech department</span>, which is now actively used.",
          'about-closing':
            "Excited for new challenges and growth in a fast-paced environment. Let's connect!",

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
          // Главная
          'hero-description-1': 'full-stack разработчик',
          'hero-description-2': 'frontend-разработчик',
          'hero-description-3': 'backend-разработчик',

          'about-title': 'Обо мне',
          'about-intro':
            "Привет, я Андрей! <span class='highlight'>Фулл-стек</span> разработчик с <span class='highlight'>двумя годами</span> коммерческого опыта, и я ищу возможности в <span class='highlight'>больших техкомпаниях</span>.",
          'about-location':
            "Родом из <span class='highlight'>Беларуси</span>, сейчас живу в <span class='highlight'>Москве</span>.",
          'about-mentoring':
            "Я активно занимаюсь <span class='highlight'>пет-проектами</span> и <span class='highlight'>менторю</span> первокурсников в университете.",
          'about-university':
            "Я учусь на веб-разработке в <span class='highlight'>Московском Политехе</span>, где разработал сайт для нашего <span class='highlight'>отдела веб-технологий</span>, который сейчас активно используется.",
          'about-closing':
            'Я открыт для новых вызовов и роста в быстром темпе. Давайте свяжемся!',

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

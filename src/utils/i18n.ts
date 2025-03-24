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

          'settings-appearance': 'Appearance',
          'settings-appearance-light': 'Light',
          'settings-appearance-dark': 'Dark',
          'settings-appearance-auto': 'Auto',
          'settings-appearance-smooth-scroll': 'Smooth Scroll',
          'settings-appearance-wallpaper': 'Wallpaper',

          'settings-language': 'Language',
          'settings-preferred-language': 'Preferred Language',

          // About me
          'about-title': 'About me',

          // Stack
          'stack-title': 'Stack',
          'stack-frontend': 'Frontend',
          'stack-backend': 'Backend',
          'stack-hint':
            '// Full tech stack you can see on GitHub or in the terminal version',

          // Projects
          'projects-title': 'Projects',

          'projects-web-course-site-title': 'Slavaver (Web course site)',
          'projects-web-course-site-description':
            'Designed for students of Moscow Polytechnic University to learn web technologies. Initially created by my teacher, but I completely reworked it and now maintain it. Future plans include adding a backend and many other features.',

          'projects-printer-ui-title': 'Printer UI',
          'projects-printer-ui-description':
            'Originally a Vue lab project, but I found it boring to submit it with minimal requirements, so I added a state manager, tests, offline mode, and improved UI. Now it needs to be migrated from a mock API to a real backend.',

          'projects-vscode-minimalism-title': 'VSCode Minimalism',
          'projects-vscode-minimalism-description':
            'My personal VSCode setup, initially made just for me, but someone once asked for it, so I created a CLI installer. Now it can be installed in just two clicks!',

          'projects-qalqa-sneaker-shop-title': 'qalqa Sneakers Shop',
          'projects-qalqa-sneaker-shop-description':
            'One of my first pet projects, created to learn Vue. It’s quite messy and buggy, but I experimented with everything I wanted (Vue, C#, SQL, and Deployment). I don’t feel like making it production-ready.',

          'projects-qalqa-ui-title': 'qalqa UI',
          'projects-qalqa-ui-description':
            'My own React component library. I have currently paused development since it’s an almost impossible task to maintain solo, and I don’t have teammates.',

          'projects-turiki (colab)-title': 'Turiki (Colab)',
          'projects-turiki (colab)-description':
            'A pet project of my friend that replicates Faceit. He abandoned it for about a year, and now we have decided to rewrite it together to make it look decent.',

          'projects-mouse-study-platform-title': 'Mouse Study Platform',
          'projects-mouse-study-platform-description':
            'A pet project intended to replace the first project in the list. However, the agreed-upon functionality turned out to be excessive, so my motivation to continue development gradually declined and eventually disappeared.',

          // Contacts
          'contacts-title': 'Contacts',
        },
      },
      ['ru-RU']: {
        translation: {
          'en-US': 'Английский',
          'ru-RU': 'Русский',

          'settings-appearance': 'Внешний вид',
          'settings-appearance-light': 'Светлый',
          'settings-appearance-dark': 'Темный',
          'settings-appearance-auto': 'Авто',
          'settings-appearance-smooth-scroll': 'Плавный скролл',
          'settings-appearance-wallpaper': 'Обои',

          'settings-language': 'Язык',
          'settings-preferred-language': 'Предпочитаемый язык',

          'about-title': 'Обо мне',
          'stack-title': 'Стек',
          'stack-frontend': 'Фронтенд',
          'stack-backend': 'Бэкенд',
          'stack-hint':
            '// Полный стек технологий можно посмотреть на GitHub или в терминальной версии',
          'projects-title': 'Проекты',
          'projects-web-course-site-title': 'Сайт веб-разработки',
          'projects-web-course-site-description':
            'Предназначен для изучения веб-технологий учениками МосПолитеха, сделан изначально моим учителем, но я его полностью переделал и сейчас занимаюсь его поддержкой. В дальнейшем планируется добавить BE и много других фич.',
          'projects-printer-ui-title': 'Printer UI',
          'projects-printer-ui-description':
            'Когда-то этот проект был лабораторной работой по Vue, но мне стало скучно его сдавать по минимальным требованиям и я прикрутил State Manager, Тесты, Offline Mode и улучшил UI. Теперь его надо перевести с Mock Api на настоящий BE.',
          'projects-vscode-minimalism-title': 'VSCode Minimalism',
          'projects-vscode-minimalism-description':
            'Моя сборка VSCode, которая была сделана исключительно для меня, но кто-то однажды у меня ее попросил и я сделал CLI установщик, теперь его можно установить в 2 клика!',
          'projects-qalqa-sneaker-shop-title': 'qalqa Sneakers Shop',
          'projects-qalqa-sneaker-shop-description':
            'Один из моих первых pet-проектов, который был сделан, чтобы научиться писать на Vue, так что он дико кривой и баганый, но я потестил все что хотел (Vue, C#, SQL и Deploy), приводить его в адекватное состояние мне лень.',
          'projects-qalqa-ui-title': 'qalqa UI',
          'projects-qalqa-ui-description':
            'Моя собственная библиотека компонентов для React, на данный момент я приостановил разработку, т.к в solo это практически неподъемная задача, а teamate-ов у меня нету.',
          'projects-turiki (colab)-title': 'Turiki (Colab)',
          'projects-turiki (colab)-description':
            'Pet-проект моего друга, который копирует Faceit, он забрасывал его на +-год, сейчас мы вместе с ним решили его переписать, чтобы он хоть как-то прилично выглядел.',
          'projects-mouse-study-platform-title': 'Mouse Study Platform',
          'projects-mouse-study-platform-description':
            'Pet-проект, который должен был стать заменой первому проекту в списке, но так произошло, что обговоренный в нем функционал был излишен, так что желание продолжать его разрабатывать поубавилось, а потом исчезло совсем.',
          'contacts-title': 'Контакты',
        },
      },
    },
    fallbackLng: ['en-US'],
    interpolation: { escapeValue: false },
  });

export default i18n;

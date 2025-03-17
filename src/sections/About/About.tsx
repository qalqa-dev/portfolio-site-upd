import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import { Safari } from 'components';
import { useInView } from 'react-intersection-observer';
import sectionsStyles from 'sections/sections.module.scss';
import styles from './About.module.scss';

export const About = () => {
  const [aboutContent, setAboutContent] = useState<string>('');

  const { i18n } = useTranslation();

  const { ref, inView } = useInView();

  useEffect(() => {
    const fetchAboutContent = async () => {
      const locale = i18n.language === 'ru-RU' ? 'ru' : 'en';
      const response = await fetch('/locales/about/about.' + locale + '.md');
      if (!response.ok) {
        throw new Error('Failed to load the markdown file');
      }
      const markdown = await response.text();
      setAboutContent(markdown);
    };

    fetchAboutContent();
  }, [i18n.language]);
  return (
    <section
      className={styles.about}
      ref={ref}
      style={{
        animation: inView ? 'fade-in 0.5s ease-in-out' : '',
        opacity: inView ? 1 : 0,
      }}
    >
      <div className={styles['about-container']}>
        <Safari openedLink="https://qalqa.com/about">
          <div className={sectionsStyles.webview}>
            <h2 className={sectionsStyles.title}>{t('about-title')}</h2>
            <div className={styles.content + ' flex-col lg:flex-row'}>
              <div className={styles.text}>
                <ReactMarkdown>{aboutContent}</ReactMarkdown>
              </div>
            </div>
          </div>
        </Safari>
      </div>
    </section>
  );
};

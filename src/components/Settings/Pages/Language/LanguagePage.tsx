import { AppDispatch, RootState, setLanguage } from '@/store';
import i18n from '@/utils/i18n';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LanguagePage.module.scss';

export const LanguagePage = () => {
  const languages = Object.keys(i18n.options.resources || {}) as Array<
    keyof typeof i18n.options.resources
  >;

  const dispatch = useDispatch<AppDispatch>();

  const { language } = useSelector((state: RootState) => state.settings);

  const toggleLanguage = (language: (typeof languages)[number]) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
  };

  useTranslation();

  return (
    <section className={styles['language-page']}>
      <h2 className={styles['page-title']}>{t('settings-language')}</h2>
      <div className={styles['inner-card']}>
        <div className={styles['language-section']}>
          <h3 className={styles['language-title']}>
            {t('settings-preferred-language')}
          </h3>
          <ul className={styles['language-list']}>
            {languages.map((lang) => (
              <li className={styles['lang-btn']} key={lang}>
                <input
                  checked={lang === language}
                  onChange={() => toggleLanguage(lang)}
                  type="radio"
                  id={lang}
                  name="language"
                />
                <label htmlFor={lang}>{t(lang)}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

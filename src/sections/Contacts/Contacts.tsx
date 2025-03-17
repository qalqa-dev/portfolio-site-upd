import { MacIconWrapper, Safari } from 'components';
import { t } from 'i18next';
import { FaGithubAlt, FaTelegramPlane, FaVk } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { AppearingText } from '@/components/AppearingText/AppearingText';
import { useInView } from 'react-intersection-observer';
import sectionsStyles from 'sections/sections.module.scss';
import styles from './Contacts.module.scss';

export const Contacts = () => {
  const { ref, inView } = useInView();
  return (
    <section
      className={styles.contacts}
      ref={ref}
      style={{
        animation: inView ? 'fade-in 0.5s ease-in-out' : '',
        opacity: inView ? 1 : 0,
      }}
    >
      <div className={styles['contacts-container']}>
        <Safari openedLink="https://qalqa.com/contacts">
          <div className={sectionsStyles.webview}>
            <h2 className={sectionsStyles.title}>
              <AppearingText text={t('contacts-title')}></AppearingText>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <li className={styles.iconItem}>
                <MacIconWrapper>
                  <a
                    href="mailto:andreybas04@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoIosMail />
                  </a>
                </MacIconWrapper>
              </li>
              <li className={styles.iconItem}>
                <MacIconWrapper>
                  <a
                    href="https://github.com/qalqaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubAlt />
                  </a>
                </MacIconWrapper>
              </li>
              <li className={styles.iconItem}>
                <MacIconWrapper>
                  <a
                    href="https://t.me/qalqaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane />
                  </a>
                </MacIconWrapper>
              </li>
              <li className={styles.iconItem}>
                <MacIconWrapper>
                  <a
                    href="https://vk.com/qalqaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaVk />
                  </a>
                </MacIconWrapper>
              </li>
            </ul>
          </div>
        </Safari>
      </div>
    </section>
  );
};

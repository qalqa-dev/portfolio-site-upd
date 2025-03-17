import { RollingText, Safari, Typewriter } from '@/components';
import { t } from 'i18next';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Safari>
        <div className={styles.webview}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <RollingText text="qalqa" />
            </h1>
            <div className={styles.description}>
              <Typewriter
                text={[
                  t('hero-description-1'),
                  t('hero-description-2'),
                  t('hero-description-3'),
                ]}
                initialPause={2600}
                typingSpeed={50}
              ></Typewriter>
            </div>
          </div>
        </div>
      </Safari>
    </section>
  );
};

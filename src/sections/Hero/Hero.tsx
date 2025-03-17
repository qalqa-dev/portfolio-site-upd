import { t } from 'i18next';
import { useInView } from 'react-intersection-observer';

import { RollingText, Safari, Typewriter } from '@/components';
import styles from './Hero.module.scss';

export const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.35,
  });
  return (
    <section
      className={styles.hero}
      ref={ref}
      style={{
        animation: inView ? 'fade-in 0.5s ease-in-out' : '',
        opacity: inView ? 1 : 0,
      }}
    >
      <Safari>
        <div className={styles.webview}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <RollingText text="qalqa" />
            </h1>
            <div className={styles.description}>
              <Typewriter
                cursorWith={4}
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

import { ProgressBar, Safari } from 'components';
import { currentStackBackend, currentStackFrontend } from 'data';
import { t } from 'i18next';

import sectionsStyles from 'sections/sections.module.scss';
import styles from './Stack.module.scss';

export const Stack = () => {
  const getTechPercentage = (
    level: number,
    affinity: number,
    usage: number,
  ): number => {
    return parseFloat(
      ((level * 2.4 + affinity * 0.5 + usage * 0.1) / 3).toFixed(1),
    );
  };
  return (
    <section className={styles.stack}>
      <div className={styles['stack-container']}>
        <Safari openedLink="https://qalqa.com/stack">
          <div className={sectionsStyles.webview}>
            <h2 className={sectionsStyles.title}>{t('stack-title')}</h2>
            <div className="w-full gap-5 flex flex-col md:flex-row">
              <ul className="w-full">
                <h3 className={styles.subtitle}>Frontend</h3>
                {currentStackFrontend.map((item, index) => (
                  <li key={index}>
                    <h4 className={styles.skillName}>{item.skillName}</h4>
                    <ProgressBar
                      percentage={getTechPercentage(
                        item.levelScore,
                        item.affinityScore,
                        item.usageScore,
                      )}
                    />
                  </li>
                ))}
              </ul>
              <ul className="w-full">
                <h3 className={styles.subtitle}>Backend</h3>
                {currentStackBackend.map((item, index) => (
                  <li key={index}>
                    <h4 className={styles.skillName}>{item.skillName}</h4>
                    <ProgressBar
                      percentage={getTechPercentage(
                        item.levelScore,
                        item.affinityScore,
                        item.usageScore,
                      )}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.hint}>{t('stack-hint')}</p>
          </div>
        </Safari>
      </div>
    </section>
  );
};

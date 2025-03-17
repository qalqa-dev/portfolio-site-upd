import { ProjectList, Safari } from 'components';
import { projectsData } from 'data';
import { t } from 'i18next';

import { AppearingText } from '@/components/AppearingText/AppearingText';
import { useInView } from 'react-intersection-observer';
import sectionsStyles from 'sections/sections.module.scss';
import styles from './Projects.module.scss';

export const Projects = () => {
  const { ref, inView } = useInView();
  return (
    <section
      className={styles.projects}
      ref={ref}
      style={{
        animation: inView ? 'fade-in 0.5s ease-in-out' : '',
        opacity: inView ? 1 : 0,
      }}
    >
      <div className={styles['projects-container']}>
        <Safari openedLink="https://qalqa.com/projects">
          <div className={sectionsStyles.webview}>
            <h2 className={sectionsStyles.title}>
              <AppearingText text={t('projects-title')} />
            </h2>
            <ProjectList projects={projectsData} />
          </div>
        </Safari>
      </div>
    </section>
  );
};

import { ProjectList, Safari } from 'components';
import { projectsData } from 'data';
import { t } from 'i18next';

import sectionsStyles from 'sections/sections.module.scss';
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles['projects-container']}>
        <Safari openedLink="https://qalqa.com/projects">
          <div className={sectionsStyles.webview}>
            <h2 className={sectionsStyles.title}>{t('projects-title')}</h2>
            <ProjectList projects={projectsData} />
          </div>
        </Safari>
      </div>
    </section>
  );
};

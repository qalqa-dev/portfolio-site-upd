import { ProjectList, Safari } from 'components';
import { projectsData } from 'data';
import { t } from 'i18next';
import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles['projects-container']}>
        <Safari openedLink="https://qalqa.com/projects">
          <div className={'webview'}>
            <div className={styles.content}>
              <h2 className={'title'}>{t('projects-title')}</h2>
              <ProjectList projects={projectsData} />
            </div>
          </div>
        </Safari>
      </div>
    </section>
  );
};

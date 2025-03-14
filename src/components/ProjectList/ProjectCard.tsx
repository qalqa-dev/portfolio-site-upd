import clsx from 'clsx';
import React from 'react';
import { IProject } from 'types';
import styles from './ProjectCard.module.scss';

type ProjectCardProps = {
  project: IProject;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <h2 className="text-[14px] md:text-[16px] lg:text-[24px] font-bold">
        {project.name}{' '}
        {project.status && (
          <span
            className={clsx(styles.status, 'capitalize', {
              [styles.finished]: project.status === 'finished',
              [styles.inProgress]: project.status === 'in progress',
              [styles.cancelled]: project.status === 'cancelled',
              [styles.active]: project.status === 'active',
            })}
          >
            {project.status}
          </span>
        )}
      </h2>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.links}>
        <button
          onClick={() => window.open(project.repo_href)}
          className={styles['btn-repo']}
        >
          Go to repo
        </button>
        {project.deploy_href && (
          <button
            onClick={() => window.open(project.deploy_href)}
            className={styles['btn-deploy']}
          >
            Go to deploy
          </button>
        )}
      </div>
    </div>
  );
};

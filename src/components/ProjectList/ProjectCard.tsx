import clsx from 'clsx';
import React from 'react';
import { IoIosArrowRoundForward, IoIosEye } from 'react-icons/io';
import { IProject } from 'types';
import styles from './ProjectCard.module.scss';

type ProjectCardProps = {
  project: IProject;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className={clsx(styles.card, 'flex flex-col lg:flex-row', {
        ['lg:col-span-2']: project.deploy_href,
        ['order-[-1]']: project.deploy_href,
      })}
    >
      {project.deploy_href && (
        <a href={project.deploy_href} className={styles.preview}>
          <div className={styles.backdrop}>
            <IoIosEye size={64} />
          </div>
          <img
            className={`rounded-[10px] ${styles['preview-img']}`}
            src={`/preview/${project.name}.png`}
            alt=""
          />
        </a>
      )}
      <div className="w-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <h2 className={styles.title}>{project.name} </h2>
            <span>
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
            </span>
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles.links}>
          <button
            onClick={() => window.open(project.repo_href)}
            className={styles['btn-repo'] + ' flex items-center justify-center'}
          >
            <p>Repository</p>
            <IoIosArrowRoundForward size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

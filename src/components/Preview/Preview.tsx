import clsx from 'clsx';

import { IProject } from 'types';
import styles from './Preview.module.scss';

interface PreviewProps {
  project: IProject | null;
}

export const Preview = ({ project }: PreviewProps) => {
  if (!project) {
    return <div className="p-4 w-full">Click to project for preview</div>;
  }

  return (
    <div className="p-4 w-full flex flex-col gap-3">
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

      {project.description && (
        <p>
          <span className={clsx(styles.description, styles.highlight)}>
            Description:{' '}
          </span>
          {project.description}
        </p>
      )}
      <div className="flex gap-2">
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

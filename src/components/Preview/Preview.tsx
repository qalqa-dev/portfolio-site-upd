import clsx from 'clsx';

import { IProject } from 'types';
import styles from './Preview.module.scss';

interface PreviewProps {
  project: IProject | null;
}

export const Preview = ({ project }: PreviewProps) => {
  if (!project) {
    return <div className="p-4 w-full">Hover to project for preview</div>;
  }

  return (
    <div className="p-4 w-full">
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
    </div>
  );
};

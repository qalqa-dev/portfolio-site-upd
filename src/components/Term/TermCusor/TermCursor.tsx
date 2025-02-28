import clsx from 'clsx';
import styles from './TermCursor.module.scss';
interface ITermCursorProps {
  command: string;
  text?: string;
  state?: 'error' | 'success' | 'uncompleted';
}

export const TermCursor = ({ command, text, state }: ITermCursorProps) => {
  return (
    <p>
      {'>'}{' '}
      <span
        className={clsx({
          [styles.error]: state === 'error',
          [styles['highlight-success']]: state === 'success',
        })}
      >
        {command}
      </span>{' '}
      <span
        className={clsx({
          [styles['highlight-found']]: state === 'success',
        })}
      >
        {text}
      </span>
    </p>
  );
};

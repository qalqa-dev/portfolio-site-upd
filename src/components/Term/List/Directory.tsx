import styles from './Directory.module.scss';

interface DirectoryProps {
  color: string;
}

export const Directory = ({ color }: DirectoryProps) => {
  return (
    <div>
      <div style={{ backgroundColor: color }} className={styles.top} />
      <div style={{ backgroundColor: color }} className={styles.body} />
    </div>
  );
};

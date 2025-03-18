import styles from './Skeleton.module.scss';
export const Skeleton = ({ height }: { height: number }) => {
  return (
    <div style={{ height: `${height}vh` }} className={styles.skeleton}></div>
  );
};

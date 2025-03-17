import styles from './Skeleton.module.scss';
export const Skeleton = ({ height }: { height: number }) => {
  return (
    <div style={{ height: `${height}px` }} className={styles.skeleton}></div>
  );
};

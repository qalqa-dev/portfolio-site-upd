import clsx from 'clsx';
import styles from './Wallpapers.module.scss';

type WallpapersProps = {
  imageUrl?: string;
};

export const Wallpapers = ({ imageUrl }: WallpapersProps) => {
  return (
    <>
      <div className={styles['background-default']}></div>
      {imageUrl?.length !== 0 && (
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={clsx({
            [styles.wallpaper]: imageUrl,
          })}
        ></div>
      )}
    </>
  );
};

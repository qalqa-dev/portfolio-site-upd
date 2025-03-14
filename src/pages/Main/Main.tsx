import { Term } from '@/components';
import RollingText from '@/components/RollingText/RollingText';
import { Safari } from '@/components/Safari/Safari';
import styles from './Main.module.scss';
export const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <Term className="w-full">
            <h1 className={styles.title}>
              <RollingText text="qalqa"></RollingText>
            </h1>
          </Term>
        </section>
        <section className={styles.about}>
          <div className={styles['about-container']}>
            <h2 className={styles.title}>About</h2>
            <Safari openedLink="https://github.com/qalqa">
              <div className={styles.content}>
                <img
                  width={400}
                  height={400}
                  className={styles.img}
                  src=""
                  alt="Pidor"
                />
              </div>
            </Safari>
          </div>
        </section>
      </div>
    </>
  );
};

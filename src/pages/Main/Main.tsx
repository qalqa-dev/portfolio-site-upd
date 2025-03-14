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
            <Safari openedLink="https://qalqa.com/about">
              <div className={styles.webview}>
                <div className={styles.content}>
                  <div className={styles.text}>
                    <h2 className={styles.title}>About me</h2>

                    <p>
                      Hey, I’m Andrey!{' '}
                      <span className={styles.highlight}>Full-stack</span> dev
                      with <span className={styles.highlight}>two years</span>{' '}
                      of commercial development experience and I'm on the
                      lookout for opportunities in{' '}
                      <span className={styles.highlight}>big tech</span>.
                      Originally from{' '}
                      <span className={styles.highlight}>Belarus</span>, now
                      based in <span className={styles.highlight}>Moscow</span>.
                    </p>

                    <p>
                      I’m actively making{' '}
                      <span className={styles.highlight}>pet projects</span> and{' '}
                      <span className={styles.highlight}>mentoring</span>{' '}
                      first-year students at my university .
                    </p>

                    <p>
                      I study web development at{' '}
                      <span className={styles.highlight}>
                        Moscow Polytechnic University
                      </span>
                      , where I led the development of a website for our{' '}
                      <span className={styles.highlight}>
                        web tech department
                      </span>
                      , which is now actively used.
                    </p>

                    <p>
                      I’ve also developed the{' '}
                      <span className={styles.highlight}>
                        frontend for a large CRM system
                      </span>{' '}
                      for an insurance company in Kazakhstan.
                    </p>

                    <p>
                      Excited for new challenges and growth in a fast-paced
                      environment. Let’s connect!
                    </p>
                  </div>

                  <img
                    width={500}
                    height={500}
                    className={styles.img}
                    src=""
                    alt="Pidor"
                  />
                </div>
              </div>
            </Safari>
          </div>
        </section>
      </div>
    </>
  );
};

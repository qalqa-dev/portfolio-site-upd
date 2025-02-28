import styles from './App.module.scss';
import AsciiArt from './components/AsciiArt';
import { Term } from './components/Term/Term';
import Typewriter from './components/Typewriter/Typewriter';

function App() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero + ' mb-5'}>
          <Term heading="Hello, my name is">
            <div className="flex w-full h-[30vh] justify-center items-center text-center">
              <h1 className={styles.title}>
                qalqa
                <Typewriter
                  text={['/dev', '/react', '/angular', '/vue', '/python']}
                />
              </h1>
            </div>
          </Term>
        </section>
        <section className={styles.about + ' mb-5'}>
          <div className="flex gap-5">
            <Term className=" justify-center items-center w-3/5">
              <AsciiArt
                imageSrc="src/assets/img/kitten.png"
                scale={0.6}
                size={5}
                mirror
              />
            </Term>
            <Term className="w-full pt-10">
              <p>
                {'>'} <span className={styles['highlight-true']}>cat</span>{' '}
                <span className={styles['highlight-found']}>
                  about_qalqa.md
                </span>
              </p>
              <hr />
              <h2 className={styles.title}>Data</h2>

              <p>
                <span className={styles.highlight}>Name:</span> Andrey
              </p>
              <p>
                <span className={styles.highlight}>Origin:</span> Russia
              </p>
              <p>
                <span className={styles.highlight}>Education:</span> Moscow
                Polytechnic University
              </p>
              <hr />
              <h2 className={styles.title}>Experience</h2>
              <ul className={styles.list}>
                <li>
                  <span className={styles.highlight}>2 years</span> at WONE-IT
                  (a major B2B IT company) as FS-dev
                </li>
                <li>
                  Developed the <span className={styles.highlight}>FE</span> for
                  a workspace booking system
                </li>
                <li>
                  Engineered{' '}
                  <span className={styles.highlight}>one of the largest</span>{' '}
                  CRM systems in Kazakhstan (Victoria Insurance)
                </li>
              </ul>
              <hr />
              <h2 className={styles.title}>Goals</h2>
              <ul className={styles.list}>
                <li>
                  To secure a role at a leading{' '}
                  <span className={styles.highlight}>big tech</span> company
                </li>
                <li>
                  I need a <span className={styles.highlight}>dolla</span>,{' '}
                  <span className={styles.highlight}>dolla</span>,{' '}
                  <span className={styles.highlight}>dolla</span> :){' '}
                </li>
              </ul>
              <hr />
              <h2 className={styles.title}>Hobbies</h2>
              <ul className={styles.list}>
                <li>
                  Creating <span className={styles.highlight}>innovative</span>{' '}
                  pet projects (just like this one)
                </li>
                <li>Helping younglings in university</li>
                <li>Playing musical instruments</li>
              </ul>
              <hr />
              <h2 className={styles.title}>Summary</h2>
              <p>
                A dedicated and{' '}
                <span className={styles.highlight}>innovative</span> tech
                enthusiast, merging a passion for software development with
                creative musical pursuits. Constantly seeking new challenges and
                opportunities to grow.
              </p>
            </Term>
          </div>
        </section>
        <section className={styles.stack + ' mb-10'}>
          <Term className="" heading="Stack">
            <AsciiArt imageSrc="src/assets/img/js.png" scale={0.05} size={14} />
          </Term>
        </section>
      </main>
    </>
  );
}

export default App;

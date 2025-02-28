import styles from './App.module.scss';
import { AsciiArt } from './components/AsciiArt';
import AsciiBar from './components/Term/AsciiBar';
import { Term } from './components/Term/Term';
import { TermCursor } from './components/Term/TermCusor/TermCursor';
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
            <Term className=" justify-center w-full items-center">
              <AsciiArt
                imageSrc="src/assets/img/kitten.png"
                scale={0.7}
                size={5}
                mirror
              />
            </Term>
            <Term className="pt-10">
              <TermCursor command="cat" text="about_qalqa.md" state="success" />
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
            <TermCursor command="neostack" state="success" />
            <div className="flex">
              <div className="flex gap-3">
                <AsciiArt
                  imageSrc="src/assets/img/js.png"
                  scale={0.06}
                  size={10}
                />
                <div>
                  <h2 className={styles.title}>JavaScript</h2>

                  <div className="flex gap-2">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={80}></AsciiBar>
                  </div>
                  <div className="flex gap-2">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={60}></AsciiBar>
                  </div>
                  <div className="flex gap-2">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={30}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      JS is more like something I have to use when working with
                      legacy code, I prefer TS. But don't forget who we all owe
                      it to!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <AsciiArt
                  imageSrc="src/assets/img/ts.png"
                  scale={0.06}
                  size={10}
                />
                <div>
                  <h2 className={styles.title}>TypeScript</h2>

                  <div className="flex gap-2">
                    <span className={styles.highlight}>Skill:</span>
                    <AsciiBar value={80}></AsciiBar>
                  </div>
                  <div className="flex gap-2">
                    <span className={styles.highlight}>Fondness:</span>
                    <AsciiBar value={100}></AsciiBar>
                  </div>
                  <div className="flex gap-2">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={90}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      TS - is absolute goat. I can't live without it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Term>
        </section>
      </main>
    </>
  );
}

export default App;

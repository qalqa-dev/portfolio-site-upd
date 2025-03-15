import { Typewriter } from '@/components';
import { MacIconWrapper } from '@/components/MacIcon/MacIconWrapper';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { ProjectList } from '@/components/ProjectCard/ProjectList';
import RollingText from '@/components/RollingText/RollingText';
import { Safari } from '@/components/Safari/Safari';
import { projectsData } from '@/data/projectsData';
import { currentStackBackend, currentStackFrontend } from '@/data/stackData';
import { FaGithubAlt, FaTelegramPlane, FaVk } from 'react-icons/fa';
import styles from './Main.module.scss';
export const Main = () => {
  const getTechPercentage = (
    level: number,
    affinity: number,
    usage: number,
  ): number => {
    return parseFloat(
      ((level * 2.4 + affinity * 0.5 + usage * 0.1) / 3).toFixed(1),
    );
  };

  // const lenis = new Lenis({
  //   autoRaf: true,
  // });

  // lenis.on('scroll', ({ scroll }) => {
  //   document.documentElement.style.setProperty('--scroll', `${scroll}`);
  // });

  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <Safari>
            <div className={styles.webview}>
              <div className={styles.content}>
                <h1 className={styles.title}>
                  <RollingText text="qalqa" />
                </h1>
                <div className={styles.description}>
                  <Typewriter
                    text={[
                      'full-stack developer',
                      'frontend developer',
                      'backend developer',
                    ]}
                    initialPause={2600}
                    typingSpeed={50}
                  ></Typewriter>
                </div>
              </div>
            </div>
          </Safari>
        </section>
        <section className={styles.about}>
          <div className={styles['about-container']}>
            <Safari openedLink="https://qalqa.com/about">
              <div className={styles.webview}>
                <h2 className={styles.title}>About me</h2>
                <div className={styles.content + ' flex-col lg:flex-row'}>
                  <img
                    width={500}
                    height={500}
                    className={styles.img}
                    src="/qalqa.png"
                    alt="Pidor"
                  />
                  <div className={styles.text}>
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
                </div>
              </div>
            </Safari>
          </div>
        </section>
        <section className={styles.stack}>
          <div className={styles['stack-container']}>
            <Safari openedLink="https://qalqa.com/stack">
              <div className={styles.webview}>
                <h2 className={styles.title}>Stack</h2>
                <div className="w-full gap-5 flex flex-col md:flex-row">
                  <ul className="w-full">
                    <h3 className={styles.subtitle}>Frontend</h3>
                    {currentStackFrontend.map((item, index) => (
                      <li key={index}>
                        <h4 className={styles.skillName}>{item.skillName}</h4>
                        <ProgressBar
                          percentage={getTechPercentage(
                            item.levelScore,
                            item.affinityScore,
                            item.usageScore,
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                  <ul className="w-full">
                    <h3 className={styles.subtitle}>Backend</h3>
                    {currentStackBackend.map((item, index) => (
                      <li key={index}>
                        <h4 className={styles.skillName}>{item.skillName}</h4>
                        <ProgressBar
                          percentage={getTechPercentage(
                            item.levelScore,
                            item.affinityScore,
                            item.usageScore,
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <p className={styles.hint}>
                  //Full tech-stack u can saw on github or on term version
                </p>
              </div>
            </Safari>
          </div>
        </section>
        <section className={styles.projects}>
          <div className={styles['projects-container']}>
            <Safari openedLink="https://qalqa.com/projects">
              <div className={styles.webview}>
                <div className={styles.content}>
                  <h2 className={styles.title}>Projects</h2>
                  <ProjectList projects={projectsData} />
                </div>
              </div>
            </Safari>
          </div>
        </section>
        <section className={styles.contacts}>
          <div className={styles['contacts-container']}>
            <Safari openedLink="https://qalqa.com/contacts">
              <div className={styles.webview}>
                <div className={styles.content}>
                  <h2 className={styles.title}>Contacts</h2>
                  <ul className="flex flex-col gap-3 md:gap-12 justify-center md:flex-row">
                    <li className={styles.iconItem}>
                      <MacIconWrapper>
                        <a
                          href="https://github.com/qalqa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithubAlt />
                        </a>
                      </MacIconWrapper>
                    </li>
                    <li className={styles.iconItem}>
                      <MacIconWrapper>
                        <a
                          href="https://t.me/qalqa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTelegramPlane />
                        </a>
                      </MacIconWrapper>
                    </li>
                    <li className={styles.iconItem}>
                      <MacIconWrapper>
                        <a
                          href="https://vk.com/qalqa"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaVk />
                        </a>
                      </MacIconWrapper>
                    </li>
                  </ul>
                </div>
              </div>
            </Safari>
          </div>
        </section>
      </div>
    </>
  );
};

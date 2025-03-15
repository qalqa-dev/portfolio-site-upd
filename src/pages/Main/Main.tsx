import { GithubIcon } from '@/assets/svgs/GithubIcon';
import { TelegramIcon } from '@/assets/svgs/TelegramIcon';
import { VkIcon } from '@/assets/svgs/VkIcon';
import { Typewriter } from '@/components';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { ProjectList } from '@/components/ProjectCard/ProjectList';
import RollingText from '@/components/RollingText/RollingText';
import { Safari } from '@/components/Safari/Safari';
import { projectsData } from '@/data/projectsData';
import { currentStackBackend, currentStackFrontend } from '@/data/stackData';
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
                  <RollingText text="qalqa"></RollingText>
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
                    src="/qalqa.png"
                    alt="Pidor"
                  />
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
                <div className="w-full">
                  <h3 className={styles.subtitle}>Frontend</h3>
                  <ul>
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
                  <h3 className={styles.subtitle}>Backend</h3>
                  <ul>
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
                  <p className={styles.hint}>
                    //Full tech-stack u can saw on github or on term version
                  </p>
                </div>
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
                  <div>
                    <a
                      href="mailto:andreybas04@gmail.com"
                      className="flex gap-1"
                    >
                      <span className={'highlight flex items-center gap-3'}>
                        <i>✉️</i>Email:{' '}
                      </span>
                      andreybas04@gmail.com
                    </a>
                    <a href="https://github.com/qalqaa" className="flex gap-1">
                      <span className="highlight flex items-center gap-3">
                        <GithubIcon width={'1.25rem'} height={'1.25rem'} />
                        Github:{' '}
                      </span>
                      qalqaa
                    </a>
                    <a href="https://t.me/qalqaa" className="flex gap-1">
                      <span className={'highlight flex items-center gap-3'}>
                        <TelegramIcon width={'1rem'} height={'1rem'} />
                        Telegram:{' '}
                      </span>
                      qalqaa
                    </a>
                    <a href="https://vk.com/qalqaa" className="flex gap-1">
                      <span className={'highlight flex items-center gap-3'}>
                        <VkIcon width={'1rem'} height={'1rem'} /> VK:{' '}
                      </span>
                      qalqaa
                    </a>
                  </div>
                </div>
              </div>
            </Safari>
          </div>
        </section>
      </div>
    </>
  );
};

import { Typewriter } from '@/components';
import { MacIconWrapper } from '@/components/MacIcon/MacIconWrapper';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { ProjectList } from '@/components/ProjectCard/ProjectList';
import RollingText from '@/components/RollingText/RollingText';
import { Safari } from '@/components/Safari/Safari';
import { projectsData } from '@/data/projectsData';
import { currentStackBackend, currentStackFrontend } from '@/data/stackData';
import { RootState } from '@/store/store';
import { t } from 'i18next';
import Lenis from 'lenis';
import { useEffect, useRef, useState } from 'react';
import { FaGithubAlt, FaTelegramPlane, FaVk } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
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

  const smoothScroll = useSelector(
    (state: RootState) => state.settings.smoothScroll,
  );

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current && lenisRef.current.destroy) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    if (smoothScroll) {
      lenisRef.current = new Lenis({
        autoRaf: true,
        duration: 1.5,
        smoothWheel: true,
      });
      lenisRef.current.start();
    } else {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    }
  }, [smoothScroll]);

  const [markdownContent, setMarkdownContent] = useState<string>('');

  const fetchMarkdown = async () => {
    try {
      const response = await fetch('/src/data/about/about-en.md');
      if (!response.ok) {
        throw new Error('Failed to load the markdown file');
      }
      const text = await response.text();
      setMarkdownContent(text);
    } catch (error) {
      console.error(error);
    }
  };

  fetchMarkdown();

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
                      t('hero-description-1'),
                      t('hero-description-2'),
                      t('hero-description-3'),
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
                  <div className={styles.text}>
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
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
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <li className={styles.iconItem}>
                      <MacIconWrapper>
                        <a
                          href="mailto:andreybas04@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IoIosMail />
                        </a>
                      </MacIconWrapper>
                    </li>
                    <li className={styles.iconItem}>
                      <MacIconWrapper>
                        <a
                          href="https://github.com/qalqaa"
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
                          href="https://t.me/qalqaa"
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
                          href="https://vk.com/qalqaa"
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

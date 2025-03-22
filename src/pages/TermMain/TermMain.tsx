import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { About, Hero, Projects, StackBack, StackFront } from 'sections-term';
import styles from './TermMain.module.scss';

export function TermMain() {
  const sections = [
    'hero',
    'about',
    'stackFront',
    'stackBack',
    'projects',
    'contacts',
  ];

  const [section, setSection] = useState(sections[0]);
  const [scroll, setScroll] = useState(0);

  const updateSectionBasedOnScroll = (distance: number) => {
    setScroll(distance);
    switch (true) {
      case distance < 500:
        setSection(sections[0]);
        break;
      case distance >= 500 && distance < 2600:
        setSection(sections[1]);
        break;
      case distance >= 2600 && distance < 4600:
        setSection(sections[2]);
        break;
      case distance >= 4600 && distance < 6400:
        setSection(sections[3]);
        break;
      case distance >= 6400:
        setSection(sections[4]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const distance = window.scrollY;
      updateSectionBasedOnScroll(distance);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const [ref, inView] = useInView();

  return (
    <>
      <div className={styles['stack-area']}>
        <div
          className={styles['stack-container']}
          ref={ref}
          style={{
            animation: inView ? 'fade-in 0.5s ease-in-out' : '',
            opacity: inView ? 1 : 0,
          }}
        >
          {section === 'hero' && (
            <div className={styles.section}>
              <Hero scroll={scroll} scrollRange={{ start: 100, end: 300 }} />
            </div>
          )}
          {section === 'about' && (
            <div className={styles.section}>
              <About scroll={scroll} scrollRange={{ start: 500, end: 1000 }} />
            </div>
          )}
          {section === 'stackFront' && (
            <div className={styles.section}>
              <StackFront
                scroll={scroll}
                scrollRange={{ start: 2600, end: 3100 }}
              />
            </div>
          )}
          {section === 'stackBack' && (
            <div className={styles.section}>
              <StackBack
                scroll={scroll}
                scrollRange={{ start: 4600, end: 5000 }}
              />
            </div>
          )}
          {section === 'projects' && (
            <div className={styles.section}>
              <Projects
                scroll={scroll}
                scrollRange={{ start: 6400, end: 6600 }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TermMain;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { About, Hero, Projects, StackBack, StackFront } from 'sections';
import styles from './App.module.scss';

function App() {
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
  }, []);

  return (
    <>
      <main className={styles['stack-area']}>
        <div className={styles['stack-container']}>
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
      </main>
    </>
  );
}

export default App;

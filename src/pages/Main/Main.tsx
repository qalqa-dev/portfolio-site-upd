import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { About, Contacts, Hero, Projects, Stack } from 'sections';
import { RootState } from 'store';
import styles from './Main.module.scss';

const Main = () => {
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

  return (
    <>
      <div className={styles.container}>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contacts />
      </div>
    </>
  );
};

export default Main;

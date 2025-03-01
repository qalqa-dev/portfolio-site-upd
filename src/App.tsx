import { About, Contacts, Hero, Projects, Stack } from 'sections';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;

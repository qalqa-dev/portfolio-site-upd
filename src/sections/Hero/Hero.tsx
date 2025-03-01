import { Term } from 'components';

import Typewriter from 'components/Typewriter/Typewriter';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
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
  );
};

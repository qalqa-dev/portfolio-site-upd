import { SectionsProps } from '@/types/Section';
import { Term, TermCursor, Typewriter } from 'components';
import styles from './Hero.module.scss';

export const Hero = ({ scroll, scrollRange }: SectionsProps) => {
  return (
    <section className={styles.hero}>
      <Term heading="Hello, my name is">
        {scroll > 100 && (
          <TermCursor
            command="clear"
            scroll={scroll}
            scrollRange={scrollRange}
          ></TermCursor>
        )}
        <div
          className="flex flex-col w-full h-[30vh] justify-center items-center text-center"
          style={{
            opacity: 1 - (scroll / scrollRange!.end) * 0.5,
          }}
        >
          <h1 className={styles.title}>
            qalqa
            <Typewriter
              text={['/dev', '/react', '/angular', '/vue', '/python']}
            />
          </h1>
          <p className="text-[20px] text-[var(--color-subtext0)]">
            //Scroll down for continue
          </p>
        </div>
      </Term>
    </section>
  );
};

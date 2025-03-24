import { TermCursor, TermWrapper, Typewriter } from 'components';
import { SectionsProps } from 'types';
import styles from './Hero.module.scss';

export const Hero = ({ scroll, scrollRange }: SectionsProps) => {
  const handleTextChange = (text: string) => {
    document.title = `qalqa${text}`;
  };
  return (
    <section className={styles.hero}>
      <TermWrapper className="h-[97vh] xl:h-[80vh]" heading="Hello, my name is">
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
              onCallback={handleTextChange}
              text={['/dev', '/web', '/fe', '/be', '/ui']}
            />
          </h1>
          <p className="text-[12px] md:text-[18px] lg:text-[20px] text-[var(--color-subtext0)]">
            //Scroll down for continue
          </p>
        </div>
      </TermWrapper>
    </section>
  );
};

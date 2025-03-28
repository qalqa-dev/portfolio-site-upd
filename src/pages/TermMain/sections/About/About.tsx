import clsx from 'clsx';
import { AsciiArt, TermCursor, TermWrapper } from 'components';
import { useEffect } from 'react';
import { SectionsProps } from 'types';
import styles from './About.module.scss';

export const About = ({ scroll, scrollRange }: SectionsProps) => {
  useEffect(() => {
    document.title = 'qalqa/about';
  }, []);
  return (
    <section className={styles.about}>
      <div className="flex">
        <TermWrapper
          className={clsx(
            styles['term-split'],
            'justify-center items-center',
            'h-[97vh] 2xl:h-[80vh]',
            {},
          )}
          customStyles={{
            width: `${
              scroll < 2100
                ? Math.min(scroll - 490, 45)
                : Math.max(45 - (scroll - 2100) * (45 / 400), 0)
            }%`,
            marginRight: `${
              scroll < 2100
                ? Math.min(scroll - 490, 10)
                : Math.max(10 - (scroll - 2100) * (10 / 400), 0)
            }px`,
          }}
        >
          <p className="text-[20px] text-[var(--color-subtext0)] text-nowrap">
            //It's me tho
          </p>
          <AsciiArt imageSrc="/kitten.png" scale={0.7} size={5} mirror />
        </TermWrapper>
        <TermWrapper
          className={`w-full ${styles['about-term']}`}
          heading="qalqa/about"
        >
          {scroll <= 1100 && (
            <TermCursor
              command="cat"
              text="about_qalqa.md"
              scroll={scroll}
              scrollRange={scrollRange}
            />
          )}
          {scroll > 1100 && scroll < 2500 && (
            <TermCursor
              command="clear"
              scroll={scroll}
              scrollRange={{ start: 1100, end: 2000 }}
            />
          )}
          <div
            className={clsx(styles['about-content'], {
              [styles.open]: scroll >= 1000,
            })}
            style={{
              opacity:
                scroll < 2100 ? 1 : Math.max(1 - (scroll - 2100) / 400, 0),
            }}
          >
            <h2 className={'title'}>Data</h2>

            <p>
              <span className={'highlight'}>Name:</span> Andrey
            </p>
            <p>
              <span className={'highlight'}>Origin:</span> Russia
            </p>
            <p>
              <span className={'highlight'}>Education:</span> Moscow Polytechnic
              University
            </p>
            <hr />
            <h2 className={'title'}>Experience</h2>
            <ul className={styles.list}>
              <li>
                <span className={'highlight'}>2 years</span> at WONE-IT (a major
                B2B IT company) as FS-dev
              </li>
              <li>
                Developed the <span className={'highlight'}>FE</span> for a
                workspace booking system
              </li>
              <li>
                Engineered{' '}
                <span className={'highlight'}>one of the largest</span> CRM
                systems in Kazakhstan (Victoria Insurance)
              </li>
            </ul>
            <hr />
            <h2 className={'title'}>Goals</h2>
            <ul className={styles.list}>
              <li>
                To secure a role at a leading{' '}
                <span className={'highlight'}>big tech</span> company
              </li>
              <li>
                I need a <span className={'highlight'}>dolla</span>,{' '}
                <span className={'highlight'}>dolla</span>,{' '}
                <span className={'highlight'}>dolla</span> :)
              </li>
            </ul>
            <hr />
            <h2 className={'title'}>Hobbies</h2>
            <ul className={styles.list}>
              <li>
                Creating <span className={'highlight'}>innovative</span> pet
                projects (just like this one)
              </li>
              <li>Helping younglings in university</li>
              <li>Playing musical instruments</li>
            </ul>
            <hr />
            <h2 className={'title'}>Summary</h2>
            <p>
              A dedicated and <span className={'highlight'}>innovative</span>{' '}
              tech enthusiast, merging a passion for software development with
              creative musical pursuits. Constantly seeking new challenges and
              opportunities to grow.
            </p>
          </div>
        </TermWrapper>
      </div>
    </section>
  );
};

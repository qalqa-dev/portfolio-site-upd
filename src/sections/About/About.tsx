import { SectionsProps } from '@/types/Section';
import clsx from 'clsx';
import { AsciiArt, Term, TermCursor } from 'components';
import styles from './About.module.scss';

export const About = ({ scroll, scrollRange }: SectionsProps) => {
  return (
    <section className={styles.about}>
      <div className="flex">
        <Term
          className={clsx(
            styles['term-split'],
            'justify-center items-center',
            {},
          )}
          customStyles={{
            width: `${
              scroll < 2100
                ? Math.min(scroll - 490, 100)
                : Math.max(100 - (scroll - 2100) * (100 / 400), 0)
            }%`,
            marginRight: `${
              scroll < 2100
                ? Math.min(scroll - 490, 20)
                : Math.max(20 - (scroll - 2100) * (20 / 400), 0)
            }px`,
          }}
        >
          <p className="text-[20px] text-[var(--color-subtext0)] text-nowrap">
            //It's me tho
          </p>
          <AsciiArt imageSrc="/kitten.png" scale={0.7} size={5} mirror />
        </Term>
        <Term className="pt-10" heading="qalqa/About">
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
        </Term>
      </div>
    </section>
  );
};

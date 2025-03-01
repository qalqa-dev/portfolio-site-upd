import { AsciiArt, Term, TermCursor } from 'components';
import styles from './About.module.scss';

export const About = () => {
  return (
    <section className={styles.about + ' mb-5'}>
      <div className="flex gap-5">
        <Term className=" justify-center w-full items-center">
          <AsciiArt imageSrc="/kitten.png" scale={0.7} size={5} mirror />
        </Term>
        <Term className="pt-10" heading="qalqa/About">
          <TermCursor command="cat" text="about_qalqa.md" state="success" />
          <hr />
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
              Engineered <span className={'highlight'}>one of the largest</span>{' '}
              CRM systems in Kazakhstan (Victoria Insurance)
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
              <span className={'highlight'}>dolla</span> :){' '}
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
            A dedicated and <span className={'highlight'}>innovative</span> tech
            enthusiast, merging a passion for software development with creative
            musical pursuits. Constantly seeking new challenges and
            opportunities to grow.
          </p>
        </Term>
      </div>
    </section>
  );
};

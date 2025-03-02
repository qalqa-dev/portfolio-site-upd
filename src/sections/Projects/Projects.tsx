import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { GithubIcon } from '@/assets/svgs/GithubIcon';
import { TelegramIcon } from '@/assets/svgs/TelegramIcon';
import { VkIcon } from '@/assets/svgs/VkIcon';
import { projectsData } from '@/data/projectsData';
import { List, Preview, Term, TermCursor } from 'components';
import { IProject, SectionsProps } from 'types';
import styles from './Projects.module.scss';

export const Projects = ({ scroll, scrollRange }: SectionsProps) => {
  const [hoveredProject, setHoveredProject] = useState<IProject | null>(null);
  console.log(scroll);

  const transitionFactor = Math.min(Math.max((scroll - 8100) / 100, 0), 1);
  const contactsHeight = transitionFactor * 100;
  const contactsMargin = transitionFactor * 20;

  useEffect(() => {
    document.title = 'qalqa/projects';
  }, []);
  return (
    <section className={styles['projects-section']}>
      <div className={clsx('flex flex-col', styles['term-container'])}>
        <Term
          heading="qalqa/projects"
          className={styles['projects-term']}
          customStyles={{ marginBottom: `${contactsMargin}px` }}
        >
          {scroll < 6700 && (
            <TermCursor
              command="ls"
              scroll={scroll}
              scrollRange={scrollRange}
            />
          )}
          {scroll > 6700 && scroll < 8100 && (
            <TermCursor
              command="tr"
              prefix="'\n' ' ' <"
              text="contacts_qalqa.md"
              scroll={scroll}
              scrollRange={{ start: 6700, end: 7800 }}
            />
          )}
          <div
            className={'flex flex-col md:flex-row w-full ' + styles.projects}
            style={{
              opacity: scroll > 6700 ? 1 : 0,
            }}
          >
            <div className="md:pl-5 w-full text-nowrap">
              <List root={projectsData} onHover={setHoveredProject} />
            </div>
            <Preview project={hoveredProject} />
          </div>
        </Term>
        {scroll >= 8100 && (
          <Term
            heading="qalqa/contacts"
            className={styles['contacts-term']}
            customStyles={{
              height: `${contactsHeight}%`,
            }}
          >
            <div>
              <a href="mailto:andreybas04@gmail.com" className="flex gap-1">
                <span className={'highlight flex items-center gap-3'}>
                  <i>✉️</i>Email:{' '}
                </span>
                andreybas04@gmail.com
              </a>
              <a href="https://github.com/qalqaa" className="flex gap-1">
                <span className="highlight flex items-center gap-3">
                  <GithubIcon width={'1.25rem'} height={'1.25rem'} />
                  Github:{' '}
                </span>
                qalqaa
              </a>
              <a href="https://t.me/qalqaa" className="flex gap-1">
                <span className={'highlight flex items-center gap-3'}>
                  <TelegramIcon width={'1rem'} height={'1rem'} />
                  Telegram:{' '}
                </span>
                qalqaa
              </a>
              <a href="https://vk.com/qalqaa" className="flex gap-1">
                <span className={'highlight flex items-center gap-3'}>
                  <VkIcon width={'1rem'} height={'1rem'} /> VK:{' '}
                </span>
                qalqaa
              </a>
            </div>
          </Term>
        )}
      </div>
    </section>
  );
};

import { useState } from 'react';

import { projectsData } from '@/data/projectsData';
import { SectionsProps } from '@/types/Section';
import { List, Preview, Term, TermCursor } from 'components';
import { IProject } from 'types';

import { GithubIcon } from '@/assets/svgs/GithubIcon';
import { TelegramIcon } from '@/assets/svgs/TelegramIcon';
import { VkIcon } from '@/assets/svgs/VkIcon';
import clsx from 'clsx';
import styles from './Projects.module.scss';

export const Projects = ({ scroll, scrollRange }: SectionsProps) => {
  const [hoveredProject, setHoveredProject] = useState<IProject | null>(null);
  console.log(scroll);

  const transitionFactor = Math.min(Math.max((scroll - 8100) / 100, 0), 1);
  const contactsHeight = transitionFactor * 100;
  const contactsMargin = transitionFactor * 20;

  return (
    <section>
      <div className={clsx('flex flex-col', styles['term-container'])}>
        <Term
          heading="qalqa/Projects"
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
            className={'flex w-full ' + styles.projects}
            style={{
              opacity: scroll > 6700 ? 1 : 0,
            }}
          >
            <div className="pl-5 w-3/5">
              <List root={projectsData} onHover={setHoveredProject} />
            </div>
            <Preview project={hoveredProject} />
          </div>
        </Term>
        {scroll >= 8100 && (
          <Term
            heading="qalqa/Contacts"
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

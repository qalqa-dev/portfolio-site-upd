import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { projectsData } from '@/data/projectsData';
import { List, Preview, TermCursor, TermWrapper } from 'components';
import { FaGithubAlt, FaTelegramPlane, FaVk } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IProject, SectionsProps } from 'types';
import styles from './Projects.module.scss';

export const Projects = ({ scroll, scrollRange }: SectionsProps) => {
  const [hoveredProject, setHoveredProject] = useState<IProject | null>(null);

  const transitionFactor = Math.min(Math.max((scroll - 8100) / 100, 0), 1);
  const contactsHeight = transitionFactor * 100;
  const contactsMargin = transitionFactor * 10;

  useEffect(() => {
    document.title = 'qalqa/projects';
  }, []);
  return (
    <section className={styles['projects-section']}>
      <div className={clsx('flex flex-col', styles['term-container'])}>
        <TermWrapper
          heading="qalqa/projects"
          className={styles['projects-term'] + ' h-[97vh] 2xl:h-[80vh]'}
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
              <List root={projectsData} onClick={setHoveredProject} />
            </div>
            <Preview project={hoveredProject} />
          </div>
        </TermWrapper>
        {scroll >= 8100 && (
          <TermWrapper
            heading="qalqa/contacts"
            className={styles['contacts-term']}
            customStyles={{
              height: `${contactsHeight}%`,
            }}
          >
            <div>
              <a href="mailto:andreybas04@gmail.com" className="flex gap-1">
                <span className={'highlight flex items-center gap-3'}>
                  <IoIosMail /> Email:{' '}
                </span>
                andreybas04@gmail.com
              </a>
              <a href="https://github.com/qalqa-dev" className="flex gap-1">
                <span className="highlight flex items-center gap-3">
                  <FaGithubAlt /> Github:{' '}
                </span>
                qalqa-dev
              </a>
              <a href="https://t.me/qalqa_dev" className="flex gap-1">
                <span className={'highlight flex items-center gap-3'}>
                  <FaTelegramPlane /> Telegram:{' '}
                </span>
                qalqa_dev
              </a>
              <a href="https://vk.com/qalqaa" className="flex gap-1">
                <span className={'highlight flex items-center gap-3'}>
                  <FaVk /> VK:{' '}
                </span>
                qalqaa
              </a>
            </div>
          </TermWrapper>
        )}
      </div>
    </section>
  );
};

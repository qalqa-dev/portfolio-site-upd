import {  stackBackendFrameworksData,
  stackBackendLanguagesData,
  stackBackendToolsData,
} from '@/data/stackData';
import {
  StackBackendFrameworksDataKeys,
  StackBackendLanguagesDataKeys,
  StackBackendToolsDataKeys,
} from '@/types/stackDataEnum';
import clsx from 'clsx';
import { AsciiSkillBar, TermCursor, TermWrapper } from 'components';
import { useEffect } from 'react';
import { SectionsProps } from 'types';
import styles from './Stack.module.scss';

export const StackBack = ({ scroll, scrollRange }: SectionsProps) => {
  useEffect(() => {
    document.title = 'qalqa/stack/be';
  }, []);

  return (
    <>
      <section className={styles.stack}>
        <TermWrapper heading="qalqa/stack/be" className="h-[97vh] 2xl:h-[80vh]">
          {scroll <= 5100 && (
            <TermCursor
              command="neostack"
              postfix="--be"
              scroll={scroll}
              scrollRange={scrollRange}
            />
          )}
          {scroll > 5100 && scroll < 6000 && (
            <TermCursor
              command="clear"
              scroll={scroll}
              scrollRange={{ start: 5100, end: 5600 }}
            />
          )}

          {scroll > 4600 && (
            <div
              className={clsx(styles.skills, {
                [styles.open]: scroll >= 4700,
              })}
              style={{
                opacity:
                  scroll < 6000
                    ? scroll > 5100
                      ? 1
                      : 0
                    : Math.max(1 - (scroll - 5100) / 400, 0),
              }}
            >
              <div className="flex flex-col gap-1 mb-1 md:flex-row md:mb-10">
                <AsciiSkillBar
                  {...stackBackendLanguagesData[
                    StackBackendLanguagesDataKeys.PYTHON
                  ]}
                  imgName="python"
                />
                <AsciiSkillBar
                  {...stackBackendFrameworksData[
                    StackBackendFrameworksDataKeys.DJANGO
                  ]}
                  imgName="django"
                />
              </div>
              <div className="flex flex-col gap-1 md:flex-row">
                <AsciiSkillBar
                  {...stackBackendToolsData[
                    StackBackendToolsDataKeys.POSTGRESQL
                  ]}
                  imgName="postgre"
                />
                <AsciiSkillBar
                  {...stackBackendToolsData[StackBackendToolsDataKeys.DOCKER]}
                  imgName="docker"
                />
              </div>
            </div>
          )}
        </TermWrapper>
      </section>
    </>
  );
};

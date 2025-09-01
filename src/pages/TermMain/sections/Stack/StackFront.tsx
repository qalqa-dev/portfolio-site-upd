import {
  stackFrontendFrameworksData,
  stackFrontendLanguagesData,
} from '@/data/stackData';
import {
  StackFrontendFrameworksDataKeys,
  StackFrontendLanguagesDataKeys,
} from '@/types/stackDataEnum';
import clsx from 'clsx';
import { AsciiSkillBar, TermCursor, TermWrapper } from 'components';
import { useEffect } from 'react';
import { SectionsProps } from 'types';
import styles from './Stack.module.scss';

export const StackFront = ({ scroll, scrollRange }: SectionsProps) => {
  useEffect(() => {
    document.title = 'qalqa/stack/fe';
  }, []);

  return (
    <>
      <section className={styles.stack}>
        <TermWrapper heading="qalqa/stack/fe" className="h-[97vh] 2xl:h-[80vh]">
          {scroll <= 3200 && (
            <TermCursor
              command="neostack"
              postfix="--fe"
              scroll={scroll}
              scrollRange={scrollRange}
            />
          )}
          {scroll > 3200 && scroll < 4500 && (
            <TermCursor
              command="clear"
              scroll={scroll}
              scrollRange={{ start: 3200, end: 4000 }}
            />
          )}

          {scroll > 3000 && (
            <div
              className={clsx(styles.skills, {
                [styles.open]: scroll >= 3100,
              })}
              style={{
                opacity:
                  scroll < 4000
                    ? scroll > 3100
                      ? 1
                      : 0
                    : Math.max(1 - (scroll - 4000) / 400, 0),
              }}
            >
              <div className="flex flex-col gap-1 mb-1 md:flex-row md:mb-10">
                <AsciiSkillBar
                  {...stackFrontendLanguagesData[
                    StackFrontendLanguagesDataKeys.JS
                  ]}
                  imgName="js"
                />
                <AsciiSkillBar
                  {...stackFrontendLanguagesData[
                    StackFrontendLanguagesDataKeys.TS
                  ]}
                  imgName="ts"
                />
              </div>
              <div className="flex flex-col gap-1 mb-1 md:flex-row md:mb-10">
                <AsciiSkillBar
                  {...stackFrontendFrameworksData[
                    StackFrontendFrameworksDataKeys.REACT
                  ]}
                  imgName="react"
                />
                <AsciiSkillBar
                  {...stackFrontendFrameworksData[
                    StackFrontendFrameworksDataKeys.NEXTJS
                  ]}
                  imgName="nextjs"
                />
              </div>
              <div className="flex flex-col gap-1 md:flex-row">
                <AsciiSkillBar
                  {...stackFrontendFrameworksData[
                    StackFrontendFrameworksDataKeys.ANGULAR
                  ]}
                  imgName="angular"
                />
                <AsciiSkillBar
                  {...stackFrontendFrameworksData[
                    StackFrontendFrameworksDataKeys.VUE
                  ]}
                  imgName="vue"
                />
              </div>
            </div>
          )}
        </TermWrapper>
      </section>
    </>
  );
};

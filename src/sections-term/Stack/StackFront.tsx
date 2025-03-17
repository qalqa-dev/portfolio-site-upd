import clsx from 'clsx';
import { AsciiSkillBar, Term, TermCursor } from 'components';
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
        <Term heading="qalqa/stack/fe" className="h-[97vh] xl:h-[80vh]">
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
                  skillName="JavaScript"
                  levelScore={85}
                  affinityScore={50}
                  usageScore={15}
                  littleSummary="More like something I have to use when working with legacy code. But don't forget who we all owe it to!"
                  imgName="js"
                />
                <AsciiSkillBar
                  skillName="TypeScript"
                  levelScore={90}
                  affinityScore={100}
                  usageScore={85}
                  littleSummary="Is absolute goat. I can't live without it."
                  imgName="ts"
                />
              </div>
              <div className="flex flex-col gap-1 mb-1 md:flex-row md:mb-10">
                <AsciiSkillBar
                  skillName="React"
                  levelScore={90}
                  affinityScore={80}
                  usageScore={60}
                  littleSummary="At the moment, my main framework is for its simplicity and flexibility. Virtual DOM - makes things"
                  imgName="react"
                />
                <AsciiSkillBar
                  skillName="NextJs"
                  levelScore={40}
                  affinityScore={80}
                  usageScore={20}
                  littleSummary="It's a new tech that I'm learning, so not feel confident at it yet."
                  imgName="nextjs"
                />
              </div>
              <div className="flex flex-col gap-1 md:flex-row">
                <AsciiSkillBar
                  skillName="Angular"
                  levelScore={70}
                  affinityScore={50}
                  usageScore={0}
                  littleSummary="In the past, this was my main framework, but now it's too overloaded for my tasks."
                  imgName="angular"
                />
                <AsciiSkillBar
                  skillName="Vue"
                  levelScore={50}
                  affinityScore={50}
                  usageScore={20}
                  littleSummary="I had to learn it in university, there aren't many differences from react, mid so..."
                  imgName="vue"
                />
              </div>
            </div>
          )}
        </Term>
      </section>
    </>
  );
};

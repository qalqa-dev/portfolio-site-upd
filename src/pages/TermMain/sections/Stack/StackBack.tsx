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
              <div className="flex flex-col md:flex-row gap-1 mb-1 md:mb-10">
                <AsciiSkillBar
                  skillName="Python"
                  levelScore={70}
                  affinityScore={90}
                  usageScore={50}
                  littleSummary="I started learning it at school so far, but still it's my main BE lang"
                  imgName="python"
                />
                <AsciiSkillBar
                  skillName="php"
                  levelScore={40}
                  affinityScore={30}
                  usageScore={50}
                  littleSummary="I mean it's allright, like... it's just php. A dirty syntax, but basically tolerable."
                  imgName="php"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-1 mb-1 md:mb-10">
                <AsciiSkillBar
                  skillName="django"
                  levelScore={70}
                  affinityScore={75}
                  usageScore={75}
                  littleSummary="A little bit overloaded, a little legacy too, but it's pretty good for my proposes"
                  imgName="django"
                />
                <AsciiSkillBar
                  skillName="Laravel"
                  levelScore={40}
                  affinityScore={50}
                  usageScore={25}
                  littleSummary="Upgraded php, so more tolerable"
                  imgName="laravel"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-1 md:mb-10">
                <AsciiSkillBar
                  skillName="PostgreSQL"
                  levelScore={50}
                  affinityScore={50}
                  usageScore={80}
                  littleSummary="Strongest SQL database with a lot of plugins, sPostgresql is the only one that I use besides sqlite"
                  imgName="postgre"
                />
                <AsciiSkillBar
                  skillName="Docker"
                  levelScore={50}
                  affinityScore={50}
                  usageScore={80}
                  littleSummary="Well, it's a docker, how am I going to deploy without it"
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

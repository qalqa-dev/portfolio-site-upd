import { SkillBar } from 'components';

export const StackBack = () => {
  return (
    <>
      <div className="flex mb-10">
        <SkillBar
          skillName="Python"
          levelScore={70}
          affinityScore={90}
          usageScore={50}
          littleSummary="I started learning it at school so far, but still it's my main BE lang"
          imgName="python"
        />
        <SkillBar
          skillName="php"
          levelScore={40}
          affinityScore={30}
          usageScore={50}
          littleSummary="I mean it's allright, like... it's just php. A dirty syntax, but basically tolerable."
          imgName="php"
        />
      </div>
      <div className="flex mb-10">
        <SkillBar
          skillName="django"
          levelScore={70}
          affinityScore={75}
          usageScore={75}
          littleSummary="A little bit overloaded, a little legacy too, but it's pretty good for my proposes"
          imgName="django"
        />
        <SkillBar
          skillName="Laravel"
          levelScore={40}
          affinityScore={50}
          usageScore={25}
          littleSummary="Upgraded php, so more tolerable"
          imgName="laravel"
        />
      </div>
      <div className="flex">
        <SkillBar
          skillName="PostgreSQL"
          levelScore={50}
          affinityScore={50}
          usageScore={80}
          littleSummary="Strongest SQL database with a lot of plugins, sPostgresql is the only one that I use besides sqlite"
          imgName="postgre"
        />
        <SkillBar
          skillName="Docker"
          levelScore={50}
          affinityScore={50}
          usageScore={80}
          littleSummary="Well, it's a docker, how am I going to deploy without it"
          imgName="docker"
        />
      </div>
    </>
  );
};

import { SkillBar } from 'components';

export const StackFront = () => {
  return (
    <>
      <div className="flex mb-10">
        <SkillBar
          skillName="JavaScript"
          levelScore={85}
          affinityScore={50}
          usageScore={15}
          littleSummary="More like something I have to use when working with legacy code. But don't forget who we all owe it to!"
          imgName="js"
        />
        <SkillBar
          skillName="TypeScript"
          levelScore={90}
          affinityScore={100}
          usageScore={85}
          littleSummary="Is absolute goat. I can't live without it."
          imgName="ts"
        />
      </div>
      <div className="flex mb-10">
        <SkillBar
          skillName="React"
          levelScore={90}
          affinityScore={80}
          usageScore={60}
          littleSummary="At the moment, my main framework is for its simplicity and flexibility. Virtual DOM - makes things"
          imgName="react"
        />
        <SkillBar
          skillName="NextJs"
          levelScore={40}
          affinityScore={80}
          usageScore={20}
          littleSummary="It's a new tech that I'm learning, so not feel confident at it yet."
          imgName="nextjs"
        />
      </div>
      <div className="flex">
        <SkillBar
          skillName="Angular"
          levelScore={70}
          affinityScore={50}
          usageScore={0}
          littleSummary="In the past, this was my main framework, but now it's too overloaded for my tasks."
          imgName="angular"
        />
        <SkillBar
          skillName="Vue"
          levelScore={50}
          affinityScore={50}
          usageScore={20}
          littleSummary="I had to learn it in university, there aren't many differences from react, mid so..."
          imgName="vue"
        />
      </div>
    </>
  );
};

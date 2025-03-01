import { AsciiArt, AsciiBar } from 'components';

interface SkillBarProps {
  skillName: string;
  levelScore: number;
  affinityScore: number;
  usageScore: number;
  littleSummary: string;
  imgName: string;
}

export const SkillBar = ({
  skillName,
  levelScore,
  affinityScore,
  usageScore,
  littleSummary,
  imgName,
}: SkillBarProps) => {
  return (
    <div className="flex gap-3 w-full">
      <AsciiArt imageSrc={`/${imgName}.png`} scale={0.1} size={6} />
      <div>
        <h2 className={'title'}>{skillName}</h2>
        <div className="flex justify-between">
          <p>
            <span className={'highlight'}>Skill</span>:
          </p>
          <AsciiBar value={levelScore}></AsciiBar>
        </div>
        <div className="flex justify-between">
          <p>
            <span className={'highlight'}>Affinity</span>:
          </p>
          <AsciiBar value={affinityScore}></AsciiBar>
        </div>
        <div className="flex justify-between">
          <span className={'highlight'}>Usage:</span>
          <AsciiBar value={usageScore}></AsciiBar>
        </div>
        <div>
          <h2 className={'highlight'}>Little summary</h2>
          <p className="text-pretty break-words">{littleSummary}</p>
        </div>
      </div>
    </div>
  );
};

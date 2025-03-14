import { StackItem } from 'types/StackItem';

export const stackFrontendLanguagesData: StackItem[] = [
  {
    skillName: 'JS',
    levelScore: 85,
    affinityScore: 50,
    usageScore: 15,
    littleSummary:
      "More like something I have to use when working with legacy code. But don't forget who we all owe it to!",
  },
  {
    skillName: 'TypeScript',
    levelScore: 95,
    affinityScore: 100,
    usageScore: 85,
    littleSummary: "Is absolute goat. I can't live without it.",
  },
];

export const stackFrontendFrameworksData: StackItem[] = [
  {
    skillName: 'React',
    levelScore: 95,
    affinityScore: 80,
    usageScore: 60,
    littleSummary:
      'At the moment, my main framework is for its simplicity and flexibility. Virtual DOM - makes things',
  },
  {
    skillName: 'NextJs',
    levelScore: 50,
    affinityScore: 80,
    usageScore: 20,
    littleSummary:
      "It's a new tech that I'm learning, so not feel confident at it yet.",
  },
  {
    skillName: 'Angular',
    levelScore: 70,
    affinityScore: 50,
    usageScore: 0,
    littleSummary:
      "In the past, this was my main framework, but now it's too overloaded for my tasks.",
  },
  {
    skillName: 'Vue',
    levelScore: 50,
    affinityScore: 50,
    usageScore: 20,
    littleSummary:
      "I had to learn it in university, there aren't many differences from react, mid so...",
  },
];

export const stackFrontendStateManagersData: StackItem[] = [
  {
    skillName: 'Redux',
    levelScore: 90,
    affinityScore: 80,
    usageScore: 50,
    littleSummary:
      "It's a state management library that I'm learning, so not feel confident at it yet.",
  },
  {
    skillName: 'MobX',
    levelScore: 70,
    affinityScore: 50,
    usageScore: 25,
    littleSummary: '',
  },
];

export const stackFrontendToolsData: StackItem[] = [
  {
    skillName: 'Vite',
    levelScore: 85,
    affinityScore: 90,
    usageScore: 100,
    littleSummary: '',
  },
  {
    skillName: 'Vitest',
    levelScore: 90,
    affinityScore: 0,
    usageScore: 50,
    littleSummary: '',
  },
  {
    skillName: 'TailwindCss',
    levelScore: 50,
    affinityScore: 50,
    usageScore: 0,
    littleSummary: '',
  },
];

export const stackBackendLanguagesData: StackItem[] = [
  {
    skillName: 'Python',
    levelScore: 70,
    affinityScore: 90,
    usageScore: 50,
    littleSummary:
      "I started learning it at school so far, but still it's my main BE lang",
  },
  {
    skillName: 'PHP',
    levelScore: 40,
    affinityScore: 30,
    usageScore: 50,
    littleSummary:
      "I mean it's allright, like... it's just php. A dirty syntax, but basically tolerable.",
  },
];

export const stackBackendFrameworksData: StackItem[] = [
  {
    skillName: 'Django',
    levelScore: 70,
    affinityScore: 75,
    usageScore: 75,
    littleSummary: '',
  },
  {
    skillName: 'Laravel',
    levelScore: 40,
    affinityScore: 50,
    usageScore: 25,
    littleSummary: '',
  },
];

export const stackBackendToolsData: StackItem[] = [
  {
    skillName: 'Docker',
    levelScore: 60,
    affinityScore: 60,
    usageScore: 0,
    littleSummary: '',
  },
  {
    skillName: 'PosgreSQL',
    levelScore: 65,
    affinityScore: 100,
    usageScore: 100,
    littleSummary: '',
  },
  {
    skillName: 'Redis',
    levelScore: 45,
    affinityScore: 100,
    usageScore: 100,
    littleSummary: '',
  },
  {
    skillName: 'MongoDb',
    levelScore: 50,
    affinityScore: 50,
    usageScore: 0,
    littleSummary: '',
  },
];

export const currentStackFrontend: StackItem[] = [
  stackFrontendLanguagesData[1],
  stackFrontendFrameworksData[0],
  stackFrontendFrameworksData[1],
  stackFrontendStateManagersData[0],
  ...stackFrontendToolsData.slice(0, stackFrontendToolsData.length - 1),
];

export const currentStackBackend: StackItem[] = [
  stackBackendLanguagesData[0],
  stackBackendFrameworksData[0],
  ...stackBackendToolsData.slice(0, stackBackendToolsData.length - 1),
];

import { StackItem } from 'types/StackItem';

export const stackFrontendLanguagesData: StackItem[] = [
  {
    skillName: 'JavaScript',
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
    levelScore: 65,
    affinityScore: 80,
    usageScore: 10,
    littleSummary:
      'At the moment i stopped using React, cause now i working with Angular on my startup. But I love it, and sometimes practice it',
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
    affinityScore: 70,
    usageScore: 90,
    littleSummary:
      'Previously and now my main framework, now using it in my startup, ideal for complex tasks, but not for simple ones',
  },
  {
    skillName: 'Vue',
    levelScore: 50,
    affinityScore: 50,
    usageScore: 0,
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
  {
    skillName: 'NgRx',
    levelScore: 90,
    affinityScore: 80,
    usageScore: 100,
    littleSummary:
      "It's a state management library that I'm learning, so not feel confident at it yet.",
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
    levelScore: 30,
    affinityScore: 100,
    usageScore: 100,
    littleSummary: 'Only language, that i know, besides JS.',
  },
  {
    skillName: 'PHP',
    levelScore: 30,
    affinityScore: 20,
    usageScore: 0,
    littleSummary:
      "I mean it's allright, like... it's just php. A dirty syntax, but basically tolerable.",
  },
];

export const stackBackendFrameworksData: StackItem[] = [
  {
    skillName: 'Django',
    levelScore: 25,
    affinityScore: 100,
    usageScore: 100,
    littleSummary:
      "A little bit overloaded, a little legacy too, but it's pretty good for my proposes",
  },
  {
    skillName: 'Laravel',
    levelScore: 30,
    affinityScore: 30,
    usageScore: 0,
    littleSummary: 'Upgraded php, so more tolerable',
  },
];

export const stackBackendToolsData: StackItem[] = [
  {
    skillName: 'Docker',
    levelScore: 45,
    affinityScore: 100,
    usageScore: 90,
    littleSummary: "Well, it's a docker, how am I going to deploy without it",
  },
  {
    skillName: 'PosgreSQL',
    levelScore: 22,
    affinityScore: 100,
    usageScore: 100,
    littleSummary:
      'Strongest SQL database with a lot of plugins, sPostgresql is the only one that I use besides sqlite',
  },
  {
    skillName: 'Redis',
    levelScore: 45,
    affinityScore: 100,
    usageScore: 100,
    littleSummary: '',
  },
];

export const currentStackFrontend: StackItem[] = [
  ...stackFrontendLanguagesData,
  stackFrontendFrameworksData[2],
  stackFrontendStateManagersData[2],
  // ...stackFrontendToolsData.slice(0, stackFrontendToolsData.length - 1),
];

export const currentStackBackend: StackItem[] = [
  stackBackendLanguagesData[0],
  stackBackendFrameworksData[0],
  ...stackBackendToolsData.slice(0, stackBackendToolsData.length - 1),
];

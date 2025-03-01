import { IProject } from '../components/List/List';

export const projectsData: IProject = {
  name: '.',
  href: '#',
  children: [
    {
      name: 'qalqa-ui',
      href: 'https://github.com/qalqaDevSpace/qalqa-ui',
      status: 'in progress',
      description: 'FE UI library of common components',
      children: [
        {
          name: 'Nexx',
          href: 'https://github.com/qalqaDevSpace/Nexx-tracker',
          description:
            'It was supposed to be a replacement for JIRA for the Russian market, but unfortunately for myself, I found that the market was busy.',
          status: 'cancelled',
        },
      ],
    },
    {
      name: 'web-course-site',
      href: 'https://github.com/slavaver/web-course-site',
      description:
        'A website for a web development course, that was made by my teacher. But recently I fully reworked it',
      status: 'active',
    },
    {
      name: 'qalqa-sneaker-shop',
      href: 'https://github.com/qalqaa/qalqa-sneaker-shop',
      description:
        'E-commerce for sneakers. A simple pet project that was created to practice Vue 3 and simultaneously learn how to connect it with the real BE',
      status: 'finished',
      children: [
        {
          name: 'qalqa-sneaker-shop-be',
          href: 'https://github.com/qalqaa/qalqa-sneaker',
          status: 'finished',
        },
      ],
    },
    {
      name: '3d-printer-ui',
      href: 'https://github.com/FrontendCourseMP/lab-7-8-qalqaa',
      description:
        'At first it was a web programming lab at a university, but then I decided to have some fun and add a State Manager, tests, add Offline Mode and a bunch of other features just to practice on what I already have and not start a project for nothing.',
      status: 'finished',
    },
    {
      name: 'vscode-minimalism',
      href: 'https://github.com/qalqaa/vscode-minimalism',
      description:
        'Minimalistic rework of CSS for vscode, made by myself for myself, but wana practice bash a little so I decided to make installer for every one who wants to use it',
      status: 'active',
    },
    {
      name: 'turiki (colab)',
      href: 'https://github.com/fgugnin22/turiki',
      description:
        "It's not mine project, i planning to revive old pet-project of my friend so practice Kubernetes, rework all FE and BE for better perfomance and simultaneously practice in hard BE infrastructure",
      status: 'in progress',
    },
    {
      name: 'mouse-study-platform',
      href: 'https://github.com/qalqaa/mouse-stud-platform',
      status: 'cancelled',
      description:
        'The course platform was supposed to fulfill its direct purpose, but at some point my friend with whom I was doing this pet project got a job and I got bored finishing it, because I practiced everything I needed',
    },
  ],
};

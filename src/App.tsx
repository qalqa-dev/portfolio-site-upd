import { useState } from 'react';
import styles from './App.module.scss';
import { AsciiArt } from './components/AsciiArt';
import { AsciiBar } from './components/Term/AsciiBar';
import { IProject, List } from './components/Term/List/List';
import { Preview } from './components/Term/Preview/Preview';
import { Term } from './components/Term/Term';
import { TermCursor } from './components/Term/TermCusor/TermCursor';
import Typewriter from './components/Typewriter/Typewriter';

const testData: IProject = {
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

function App() {
  const [hoveredProject, setHoveredProject] = useState<IProject | null>(null);
  return (
    <>
      <main className={styles.main}>
        <section className={styles.hero + ' mb-5'}>
          <Term heading="Hello, my name is">
            <div className="flex w-full h-[30vh] justify-center items-center text-center">
              <h1 className={styles.title}>
                qalqa
                <Typewriter
                  text={['/dev', '/react', '/angular', '/vue', '/python']}
                />
              </h1>
            </div>
          </Term>
        </section>
        <section className={styles.about + ' mb-5'}>
          <div className="flex gap-5">
            <Term className=" justify-center w-full items-center">
              <AsciiArt
                imageSrc="src/assets/img/kitten.png"
                scale={0.7}
                size={5}
                mirror
              />
            </Term>
            <Term className="pt-10" heading="qalqa/About">
              <TermCursor command="cat" text="about_qalqa.md" state="success" />
              <hr />
              <h2 className={styles.title}>Data</h2>

              <p>
                <span className={styles.highlight}>Name:</span> Andrey
              </p>
              <p>
                <span className={styles.highlight}>Origin:</span> Russia
              </p>
              <p>
                <span className={styles.highlight}>Education:</span> Moscow
                Polytechnic University
              </p>
              <hr />
              <h2 className={styles.title}>Experience</h2>
              <ul className={styles.list}>
                <li>
                  <span className={styles.highlight}>2 years</span> at WONE-IT
                  (a major B2B IT company) as FS-dev
                </li>
                <li>
                  Developed the <span className={styles.highlight}>FE</span> for
                  a workspace booking system
                </li>
                <li>
                  Engineered{' '}
                  <span className={styles.highlight}>one of the largest</span>{' '}
                  CRM systems in Kazakhstan (Victoria Insurance)
                </li>
              </ul>
              <hr />
              <h2 className={styles.title}>Goals</h2>
              <ul className={styles.list}>
                <li>
                  To secure a role at a leading{' '}
                  <span className={styles.highlight}>big tech</span> company
                </li>
                <li>
                  I need a <span className={styles.highlight}>dolla</span>,{' '}
                  <span className={styles.highlight}>dolla</span>,{' '}
                  <span className={styles.highlight}>dolla</span> :){' '}
                </li>
              </ul>
              <hr />
              <h2 className={styles.title}>Hobbies</h2>
              <ul className={styles.list}>
                <li>
                  Creating <span className={styles.highlight}>innovative</span>{' '}
                  pet projects (just like this one)
                </li>
                <li>Helping younglings in university</li>
                <li>Playing musical instruments</li>
              </ul>
              <hr />
              <h2 className={styles.title}>Summary</h2>
              <p>
                A dedicated and{' '}
                <span className={styles.highlight}>innovative</span> tech
                enthusiast, merging a passion for software development with
                creative musical pursuits. Constantly seeking new challenges and
                opportunities to grow.
              </p>
            </Term>
          </div>
        </section>
        <section className={styles.stack + ' mb-5 flex flex-col gap-5'}>
          <Term heading="qalqa/Stack/fe">
            <TermCursor command="neostack" state="success" prefix="--fe" />
            <div className="flex mb-10">
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/js.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>JavaScript</h2>

                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={85}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={15}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      More like something I have to use when working with legacy
                      code. But don't forget who we all owe it to!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/ts.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>TypeScript</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={90}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={100}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={85}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      Is absolute goat. I can't live without it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-10">
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/react.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>React</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={90}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={80}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={60}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      At the moment, my main framework is for its simplicity and
                      flexibility. Virtual DOM - makes things
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/nextjs.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>NextJs</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={40}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={80}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={20}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      It's a new tech that I'm learning, so not feel confident
                      at it yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/angular.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>Angular</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={70}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={0}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      In the past, this was my main framework, but now it's too
                      overloaded for my tasks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/vue.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>Vue</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={20}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      I had to learn it in university, there aren't many
                      differences from react, mid so...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Term>
          <Term className="" heading="qalqa/Stack/be">
            <TermCursor command="neostack" state="success" prefix="--be" />
            <div className="flex mb-10">
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/python.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>Python</h2>

                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={70}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={90}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      I started learning it at school so far, but still it's my
                      main BE lang
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/php.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>php</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={40}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={30}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      I mean it's allright, like... it's just php. A dirty
                      syntax, but basically tolerable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-10">
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/django.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>django</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={70}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={75}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={75}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      A little bit overloaded, a little legacy too, but it's
                      pretty good for my proposes
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/laravel.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>Laravel</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={40}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={25}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      Upgraded php, so more tolerable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/postgre.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>PostgreSQL</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={80}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      Strongest SQL database with a lot of plugins, sPostgresql
                      is the only one that I use besides sqlite
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <AsciiArt
                  imageSrc="src/assets/img/docker.png"
                  scale={0.1}
                  size={6}
                />
                <div>
                  <h2 className={styles.title}>Docker</h2>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Skill</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <p>
                      <span className={styles.highlight}>Affinity</span>:
                    </p>
                    <AsciiBar value={50}></AsciiBar>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.highlight}>Usage:</span>
                    <AsciiBar value={80}></AsciiBar>
                  </div>
                  <div>
                    <h2 className={styles.highlight}>Little summary</h2>
                    <p className="text-pretty break-words">
                      Well, it's a docker, how am I going to deploy without it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Term>
        </section>
        <section className="mb-5">
          <Term heading="qalqa/Projects" className="">
            <TermCursor command="ls" state="success" />
            <div className="flex w-full">
              <div className="pl-5 w-3/5">
                <List root={testData} onHover={setHoveredProject} />
              </div>
              <Preview project={hoveredProject} />
            </div>
          </Term>
        </section>
        <section>
          <Term heading="qalqa/Contacts">
            <TermCursor command="env" state="success" />
            <p>
              <span className={styles.highlight}>EMAIL</span>=
              <a href="mailto:andreybas04@gmail.com">andreybas04@gmail.com</a>
            </p>
            <p>
              <span className={styles.highlight}>GITHUB</span>=
              <a href="https://github.com/qalqaa">qalqaa</a>
            </p>
            <p>
              <span className={styles.highlight}>TELEGRAM</span>=
              <a href="https://t.me/qalqaa">qalqaa</a>
            </p>
            <p>
              <span className={styles.highlight}>VK</span>=
              <a href="https://vk.com/qalqaa">qalqaa</a>
            </p>
          </Term>
        </section>
      </main>
    </>
  );
}

export default App;

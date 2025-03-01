import { useState } from 'react';

import { projectsData } from '@/data/projectsData';
import { List, Preview, Term, TermCursor } from 'components';
import { IProject } from 'types';

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<IProject | null>(null);
  return (
    <section className="mb-5">
      <Term heading="qalqa/Projects" className="">
        <TermCursor command="ls" state="success" />
        <div className="flex w-full">
          <div className="pl-5 w-3/5">
            <List root={projectsData} onHover={setHoveredProject} />
          </div>
          <Preview project={hoveredProject} />
        </div>
      </Term>
    </section>
  );
};

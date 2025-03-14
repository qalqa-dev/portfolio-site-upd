import { IProject } from '@/types';
import { ProjectCard } from '../ProjectList/ProjectCard';

type ProjectListProps = {
  projects: IProject;
};

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.children?.map((project) => (
        <ProjectCard key={project.repo_href} project={project} />
      ))}
    </div>
  );
};

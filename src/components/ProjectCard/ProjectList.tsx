import { IProject } from '@/types';
import { ProjectCard } from '../ProjectList/ProjectCard';

type ProjectListProps = {
  projects: IProject;
};

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const sortedProjects = [...(projects.children ?? [])].sort((a, b) => {
    const statusOrder = ['active', 'finished', 'in progress', 'cancelled'];
    const statusAIndex = statusOrder.indexOf(a.status ?? '');
    const statusBIndex = statusOrder.indexOf(b.status ?? '');
    return statusAIndex - statusBIndex;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.repo_href} project={project} />
      ))}
    </div>
  );
};

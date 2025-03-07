export interface IProject {
  name: string;
  repo_href: string;
  deploy_href?: string;
  description?: string;
  status?: 'active' | 'cancelled' | 'finished' | 'in progress';
  children?: IProject[];
}

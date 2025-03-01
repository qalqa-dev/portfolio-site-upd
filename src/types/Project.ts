export interface IProject {
  name: string;
  href: string;
  description?: string;
  status?: 'active' | 'cancelled' | 'finished' | 'in progress';
  children?: IProject[];
}

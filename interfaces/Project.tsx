export interface IProject {
  id: number;
  projectName: string;
  technologies: Array<string>;
  description: string;
  URL?: string;
  screenshots: Array<{ src: string; alt: string; caption: string }>;
}

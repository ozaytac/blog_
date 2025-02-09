import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'mozaytac.com',
    description: 'A blog that sharing web development resources and tutorials',
    demoLink: 'https://mozaytac.com',
    tags: ['Blog']
  },

]

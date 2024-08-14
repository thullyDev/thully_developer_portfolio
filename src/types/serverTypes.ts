import type { Project } from "../components/Projects/types";

export type GetProjects = {
  page: number;
};

export type GetProjectsResponse = {
  page: number;
  pages: number;
  projects: Project[];
};

export type Image = {
  id: number;
  url: string;
  altText: string;
};

export type GetRepoImages = {
  images: Image[];
};

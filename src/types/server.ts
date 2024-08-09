import type { Project } from "../components/Projects/types";

export type GetProjects = {
	page: number;
}

export type GetProjectsResponse = {
	page: number,
	pages: number,
	projects: Project[],
}
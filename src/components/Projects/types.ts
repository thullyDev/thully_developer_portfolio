import type { Pagination, Repo } from "../../types/github";

export type ProjectsProps = {
  projects: Repo[];
} & Pagination;

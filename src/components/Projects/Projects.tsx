import { Pagination } from "../Pagination/Pagination";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import type { ProjectsProps } from "./types";

export function Projects({ projects, page, pages }: ProjectsProps) {
  return (
    <div className="projects-con">
      <div className="inner-projects-con">
        <div className="projects-list">
          <ProjectsList projects={projects} />
        </div>
      </div>
      <Pagination page={page} pages={pages} />
    </div>
  );
}

import { ProjectCard } from "../ProjectCard/ProjectCard";
import type { ProjectsProps } from "./types";

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="projects-con">
      <div className="inner-projects-con">
        <div className="projects-list">
          <ul className="project-list flex flex-col gap-3">
            {projects.map((item, index) => {
              return (
                <li className="project-item">
                  <ProjectCard key={index} {...item} />
                </li>
                ) 
            }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

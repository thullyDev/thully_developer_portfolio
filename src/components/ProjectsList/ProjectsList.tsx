import { ProjectCard } from "../ProjectCard/ProjectCard";
import type { ProjectListProps } from "./types";

export function ProjectsList({ projects }: ProjectListProps) {
  return (
    <ul className="project-list flex flex-col gap-3">
      {projects.map((item, index) => {
        return (
          <li className="project-item">
            <ProjectCard key={index} {...item} />
          </li>
        );
      })}
    </ul>
  )
}
import { ProjectCard } from "../ProjectCard/ProjectCard";
import type { ProjectsProps } from "./types";

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="projects-con">
      <div className="inner-projects-con">
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

import { ProjectCard } from "../ProjectCard/ProjectCard";
import type { FeaturedProjectsProps } from "./types";

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="projects-con my-5 flex flex-col gap-5">
      <span className="label flex w-full justify-between">
        My Projects{" "}
        <a href="/projects" className="capitalize text-pink-500 underline">
          more
        </a>
      </span>
      <div className="inner-projects-con">
        <div className="inner-con">
          <ul className="project-list flex w-full flex-col items-center gap-4">
            {projects.map((item, index) => {
              return (
                <li key={index} className="project-item h-44">
                  <ProjectCard {...item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

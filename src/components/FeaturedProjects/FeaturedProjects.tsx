import { ProjectCard } from "../ProjectCard/ProjectCard";
import type { FeaturedProjectsProps } from "./types";

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="projects-con my-10 flex flex-col gap-5">
      <div className="label flex w-full flex-wrap items-end justify-between gap-2">
        <div>
          <p className="mb-1 text-sm font-medium uppercase tracking-widest text-accent">
            Highlights
          </p>
          <h2 className="section-heading text-2xl font-bold">Featured projects</h2>
        </div>
        <a
          href="/projects"
          className="text-sm font-semibold text-pink-400 underline-offset-4 hover:underline"
        >
          View all →
        </a>
      </div>
      <ul className="featured-project-grid grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {projects.map((item, index) => {
          return (
            <li key={index} className="min-h-[10.5rem]">
              <ProjectCard {...item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

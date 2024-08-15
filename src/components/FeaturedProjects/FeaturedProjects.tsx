import { ProjectCard } from "../ProjectCard/ProjectCard"
import type { FeaturedProjectsProps } from "./types"

export function FeaturedProjects({ projects }:  FeaturedProjectsProps) {
	return (
		<div className="projects-con flex flex-col gap-5 my-5">
			<span className="label flex justify-between w-full">
				My Projects <a href="/projects" className="underline capitalize text-pink-500">more</a>
			</span>
			<div className="inner-projects-con">
				<div className="inner-con">
					<ul className="project-list flex flex-col gap-4 items-center w-full">
						{projects.map((item) => { 
							return (
								<li className="project-item h-44">
									<ProjectCard {...item} />
								</li>
							) 
						})
						}
					</ul>
				</div>
			</div>
		</div>
	)
} 
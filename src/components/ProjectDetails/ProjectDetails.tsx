import { ProjectHeading } from "../ProjectHeading/ProjectHeading";
import { ProjectImages } from "../ProjectImages/ProjectImages";
import type { ProjectDetailsProps } from "./types";

export function ProjectDetails({
  repoLink,
  liveDemo,
  name,
  images,
}: ProjectDetailsProps) {
  return (
    <div className="project-details">
      <ProjectHeading repoLink={repoLink} liveDemo={liveDemo} name={name} />
      <ProjectImages images={images} />
    </div>
  );
}

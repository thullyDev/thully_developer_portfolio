import { ProjectHeading } from "../ProjectHeading/ProjectHeading";
import { ProjectImages } from "../ProjectImages/ProjectImages";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";
import { ProjectReadMe } from "../ProjectReadMe/ProjectReadMe";
import type { ProjectDetailsProps } from "./types";

export function ProjectDetails({
  repoLink,
  liveDemo,
  name,
  images,
  description,
  language,
  created_at,
  updated_at,
  full_name,
  visibility,
  default_branch,
}: ProjectDetailsProps) {
  const projectInfoProps = {
    description,
    language,
    created_at,
    updated_at,
    visibility,
  } as const;
  const projectHeadingProps = {
    repoLink,
    liveDemo,
    name,
  };

  return (
    <div className="project-details">
      <ProjectHeading {...projectHeadingProps} />
      <ProjectImages images={images} />
      <ProjectInfo {...projectInfoProps} />
      <ProjectReadMe default_branch={default_branch} full_name={full_name} />
    </div>
  );
}

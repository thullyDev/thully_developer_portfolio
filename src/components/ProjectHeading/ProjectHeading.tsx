import { Icon } from "../Icon/Icon";
import type { ProjectHeadingProps } from "./types";

export function ProjectHeading({
  name,
  repoLink,
  liveDemo,
}: ProjectHeadingProps) {
  return (
    <div className="project-heading-con">
      <span className="inner-project-heading-con">
        <h1 className="project-heading">{name}</h1>
      </span>
      <span className="links-con">
        <a href={repoLink} className="github-link">
          <Icon icon="fab fa-github" />
        </a>
        {liveDemo ? (
          <a href={liveDemo} className="github-link">
            <Icon icon="fa-solid fa-tower-broadcast" />
          </a>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}

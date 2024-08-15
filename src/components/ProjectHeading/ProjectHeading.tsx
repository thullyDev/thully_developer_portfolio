import { Icon } from "../Icon/Icon";
import type { ProjectHeadingProps } from "./types";

export function ProjectHeading({
  name,
  repoLink,
  liveDemo,
}: ProjectHeadingProps) {
  return (
    <div className="project-heading-con flex justify-between gap-3 my-5 items-end">
      <span className="inner-project-heading-con inline-block">
        <h1 className="project-heading font-bold text-3xl">{name}</h1>
      </span>
      <span className="links-con flex items-center gap-5 text-sm font-bold capitalize">
        <a href={repoLink} className="github-link flex gap-1 items-center text-gray-300">
          <Icon icon="fab fa-github text-xs" /> repo
        </a>
        {liveDemo ? (
          <a href={liveDemo} className="github-link flex gap-1 items-center text-red-500">
            <Icon icon="fa-solid fa-tower-broadcast text-xs" /> demo
          </a>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}

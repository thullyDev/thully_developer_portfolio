import { Icon } from "../Icon/Icon";
import type { ProjectHeadingProps } from "./types";

export function ProjectHeading({
  name,
  repoLink,
  liveDemo,
}: ProjectHeadingProps) {
  return (
    <div className="project-heading-con my-5 flex items-end justify-between gap-3">
      <span className="inner-project-heading-con inline-block">
        <h1 className="project-heading text-3xl font-bold">{name}</h1>
      </span>
      <span className="links-con flex items-center gap-5 text-sm font-bold capitalize">
        <a
          href={repoLink}
          className="github-link flex items-center gap-1 text-gray-300"
        >
          <Icon icon="fab fa-github text-xs" /> repo
        </a>
        {liveDemo ? (
          <a
            href={liveDemo}
            className="github-link flex items-center gap-1 text-red-500"
          >
            <Icon icon="fa-solid fa-tower-broadcast text-xs" /> demo
          </a>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}

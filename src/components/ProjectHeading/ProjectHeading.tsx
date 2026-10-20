import { Icon } from "../Icon/Icon";
import type { ProjectHeadingProps } from "./types";
import "./styles.scss";
import { trans500 } from "../../utilities/misc";

export function ProjectHeading({
  name,
  repoLink,
  liveDemo,
}: ProjectHeadingProps) {
  return (
    <header className="project-heading-con flex flex-wrap items-center justify-between gap-4 border-b border-white/8 pb-4">
      <h1 className="project-heading text-3xl font-bold tracking-tight md:text-4xl">
        {name}
      </h1>
      <div className="links-con flex overflow-hidden rounded-lg border border-white/10">
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          title="View on GitHub"
          className={`github-link flex h-10 w-11 items-center justify-center bg-surface-card text-gray-200 hover:bg-pink-500 hover:text-white ${trans500}`}
        >
          <Icon icon="fab fa-github" />
        </a>
        {liveDemo ? (
          <a
            href={liveDemo}
            target="_blank"
            rel="noreferrer"
            title="Live demo"
            className={`github-link flex h-10 w-11 items-center justify-center bg-red-600/90 text-white hover:bg-pink-500 ${trans500}`}
          >
            <Icon icon="fa-solid fa-tower-broadcast" />
          </a>
        ) : null}
      </div>
    </header>
  );
}

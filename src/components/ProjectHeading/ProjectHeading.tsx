import { Icon } from "../Icon/Icon";
import type { ProjectHeadingProps } from "./types";
import "./styles.scss"
import { trans500 } from "../../utilities/misc";

declare const window: Window &
  typeof globalThis & {
    isAuthenticated: boolean;
    hasImages: boolean;
  };

export function ProjectHeading({
  name,
  repoLink,
  liveDemo,
}: ProjectHeadingProps) {

  const type = window.hasImages == true ? "edit" : "upload"

  return (
    <div className="project-heading-con my-5 flex items-end justify-between gap-3">
      <span className="inner-project-heading-con inline-block">
        <h1 className="project-heading text-3xl font-bold">{name}</h1>
      </span>
      <span className="links-con flex items-center font-bold capitalize">
      {window.isAuthenticated ? (
        <button
          type="button"
          className={`delete-btn flex items-center gap-1 bg-gray-700 w-10 py-2 justify-center hover:bg-pink-500 ${trans500}`}
        >
          <Icon icon="fas fa-trash" /> 
        </button>
        ) : (
          <></>
        )}
      {window.isAuthenticated ? (
        <a
          href={`/${type}/${name}`}
          className={`edit-link flex items-center gap-1 bg-gray-700 w-10 py-2 justify-center hover:bg-pink-500 ${trans500}`}
        >
          <Icon icon="fa-solid fa-pen" /> 
        </a>
        ) : (
          <></>
        )}
        <a
          href={repoLink}
          className={`github-link flex items-center gap-1 bg-gray-700 w-10 py-2 justify-center hover:bg-pink-500 ${trans500}`}
        >
          <Icon icon="fab fa-github" />
        </a>
        {liveDemo ? (
          <a
            href={liveDemo}
            className={`github-link flex items-center gap-1 bg-red-500 w-10 py-2 justify-center hover:bg-pink-500 ${trans500}`}
          >
            <Icon icon="fa-solid fa-tower-broadcast" />
          </a>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
}

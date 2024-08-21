import { trans500, truncate } from "../../utilities/misc";
import type { ProjectCardProps } from "./types";

export function ProjectCard({
  name,
  language,
  description,
  updated_at,
}: ProjectCardProps) {
  const updateAtDate = new Date(updated_at).toDateString();

  return (
    <div
      className={`project-card h-full rounded-md border border-gray-600 bg-gray-800 p-5 hover:bg-gray-700 ${trans500}`}
    >
      <div className="inner-con">
        <a href={`/project/${name}`} className="project-link flex">
          <div className="left-side flex flex-col gap-2">
            <span className="name-con">
              <h3 className="name text-xl font-bold">{name}</h3>
            </span>
            <span className="desc-con">
              <p className="desc text-sm text-gray-400">
                {truncate(description || "", 125)}
              </p>
            </span>
            <div className="lang-date flex items-center gap-3">
              <span className="main-lang text-xs font-bold text-pink-500">
                {language}
              </span>
              <span className="dot h-1 w-1 rounded-full bg-white"></span>
              <span className="updated text-xs font-bold text-gray-400">
                {updateAtDate}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

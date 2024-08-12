import { trans500, truncate } from "../../utilities/misc";
import type { ProjectCardProps } from "./types";

export function ProjectCard({
  name,
  mainLang,
  desc,
  image_url,
  slug,
}: ProjectCardProps) {
  return (
    <div className={ `project-card p-5 bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-md ${trans500}` }>
      <div className="inner-con">
        <a href={`/project/${slug}`} className="project-link flex">
          <div className="left-side flex flex-col gap-2">
            <span className="name-con">
              <h3 className="name font-bold text-xl">{name}</h3>
            </span>
            <span className="desc-con">
              <p className="desc text-sm text-gray-400">{truncate(desc, 125)}</p>
            </span>
            <span className="main-lang text-xs font-bold text-pink-500">{mainLang}</span>
          </div>
          <div className="right-side">
            <img src={image_url} alt={name} className="project-image h-full w-64 object-cover" />
          </div>
        </a>
      </div>
    </div>
  );
}

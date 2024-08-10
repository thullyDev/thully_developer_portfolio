import type { ProjectCardProps } from "./types";

export function ProjectCard({
  name,
  mainLang,
  desc,
  image_url,
  slug,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="inner-con">
        <a href={`/project/${slug}`} className="project-link">
          <div className="left-side">
            <span className="name-con">
              <h3 className="name">{name}</h3>
            </span>
            <span className="desc">
              <p className="desc">{desc}</p>
            </span>
            <span className="main-lang">{mainLang}</span>
          </div>
          <div className="right-side">
            <img src={image_url} alt="" className="project-image" />
          </div>
        </a>
      </div>
    </div>
  );
}

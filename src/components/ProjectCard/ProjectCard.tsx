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
      className={`project-card group h-full rounded-xl border border-white/8 bg-surface-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-pink-500/25 hover:shadow-glow ${trans500}`}
    >
      <a href={`/project/${name}`} className="project-link flex h-full flex-col">
        <h3 className="name mb-2 text-lg font-bold tracking-tight text-gray-100 group-hover:text-pink-400">
          {name}
        </h3>
        <p className="desc mb-4 flex-1 text-sm leading-relaxed text-gray-400">
          {truncate(description || "", 125)}
        </p>
        <div className="lang-date mt-auto flex items-center gap-3 border-t border-white/5 pt-3">
          <span className="main-lang rounded-md bg-pink-500/10 px-2 py-0.5 text-xs font-semibold text-accent">
            {language?.trim() ? language : "Multi-stack"}
          </span>
          <span className="updated text-xs text-gray-500">{updateAtDate}</span>
        </div>
      </a>
    </div>
  );
}

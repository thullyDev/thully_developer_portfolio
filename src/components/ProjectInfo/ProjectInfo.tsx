import type { ProjectInfoProps } from "./types";

export function ProjectInfo({
  description,
  language,
  created_at,
  updated_at,
  visibility,
}: ProjectInfoProps) {
  const createAtDate = new Date(created_at).toDateString();
  const updateAtDate = new Date(updated_at).toDateString();
  const displayLanguage = language?.trim() ? language : "Multi-stack";

  const ticks = [
    { name: "Visibility", value: visibility },
    { name: "Main language", value: displayLanguage },
    { name: "Created", value: createAtDate },
    { name: "Updated", value: updateAtDate },
  ] as const;

  return (
    <section className="project-info-con">
      <div className="glass-panel rounded-2xl border border-white/8 p-5 md:p-6">
        {description ? (
          <p className="description mb-6 text-base leading-relaxed text-gray-300">
            {description}
          </p>
        ) : null}
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ticks.map(({ name, value }) => (
            <div key={name} className="tick flex flex-col gap-1">
              <dt className="text-xs font-medium uppercase tracking-wide text-pink-400">
                {name}
              </dt>
              <dd className="text-sm font-semibold capitalize text-gray-100">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

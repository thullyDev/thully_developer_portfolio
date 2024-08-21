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
  const ticks = [
    {
      name: "visibility",
      value: visibility,
    },
    {
      name: "main language",
      value: language,
    },
    {
      name: "date",
      value: createAtDate,
    },
    {
      name: "updated",
      value: updateAtDate,
    },
  ];

  return (
    <div className="project-info-con my-5">
      <div className="inner-con flex flex-wrap justify-center gap-5">
        <div className="left-side flex w-96">
          <p className="description text-center text-sm text-gray-300">
            {description || ""}
          </p>
        </div>
        <div className="right-side flex w-full max-w-52 flex-col flex-nowrap gap-2">
          {ticks.map(({ name, value }, index) => {
            return (
              <div
                key={index}
                className="tick flex flex-nowrap items-end gap-2"
              >
                <span className="name text-nowrap text-sm capitalize text-pink-500">
                  {name}:{" "}
                </span>
                <span className="value text-nowrap text-xs font-bold">
                  {value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { formatText, trans500 } from "../../utilities/misc";
import type { StackProps } from "./types";

export function Stack({ field, stacks }: StackProps) {
  return (
    <a
      href={`/projects?field=${field}`}
      className={`glass-panel flex flex-col items-center gap-4 rounded-2xl p-5 transition hover:border-pink-500/25 hover:shadow-glow ${trans500}`}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
        {formatText(field)}
      </h3>
      <img
        src={`https://skillicons.dev/icons?i=${stacks}&theme=dark&perline=10`}
        alt={field}
        className="max-w-full"
      />
    </a>
  );
}

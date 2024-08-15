import { formatText } from "../../utilities/misc";
import type { StackProps } from "./types";

export function Stack({ field, stacks }: StackProps) {
  return (
    <a
      href={`/projects?field=${field}`}
      className="flex flex-col items-center justify-center gap-3"
    >
      <h3>{formatText(field)}</h3>
      <img
        src={`https://skillicons.dev/icons?i=${stacks}&theme=dark&perline=10`}
        alt="Backend"
      />
    </a>
  );
}

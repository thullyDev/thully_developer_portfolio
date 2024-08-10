import type { StackProps } from "./types";

export function Stack({ label, stacks }: StackProps) {
  return (
    <span>
      <h3>{label}</h3>
      <img
        src={`https://skillicons.dev/icons?i=${stacks}&theme=dark&perline=5`}
        alt="Backend"
      />
    </span>
  );
}

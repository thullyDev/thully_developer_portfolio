import { Stack } from "../Stack/Stack";
import type { StackProps } from "../Stack/types";

const stacks: StackProps[] = [
  {
    field: "languages",
    stacks: "html,css,js,ts,py,rust,bash",
  },
  {
    field: "backend",
    stacks: "nodejs,express,fastapi,django",
  },
  {
    field: "fullstack",
    stacks: "react,astro,tailwind,flutter,tauri",
  },
  {
    field: "systems",
    stacks: "rust,tauri,linux",
  },
  {
    field: "databases",
    stacks: "firebase,postgres,redis",
  },
  {
    field: "technologies",
    stacks: "git,googlecloud,docker",
  },
  {
    field: "dev_tools",
    stacks: "sublime,vscode,neovim",
  },
] as const;

export function MyTechStacks() {
  return (
    <section className="mytech-stack-con my-10">
      <p className="mb-2 text-center text-sm font-medium uppercase tracking-widest text-accent md:text-left">
        Toolkit
      </p>
      <h2 className="section-heading mb-8 text-center text-2xl font-bold md:text-left">
        Tech stack
      </h2>
      <div className="inner-con grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stacks.map((item, index) => {
          return <Stack key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

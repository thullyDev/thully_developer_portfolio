import { Stack } from "../Stack/Stack";
import type { StackProps } from "../Stack/types";

const stacks: StackProps[] = [
	{
		field: "languages",
		stacks: "html,css,js,ts,py,bash",
	},
	{
		field: "backend",
		stacks: "nodejs,express,fastapi,django",
	},
	{
		field: "fullstack",
		stacks: "react,astro,tailwind,flutter",
	},
	{
		field: "databases",
		stacks: "firebase,postgres,redis",
	},
	{
		field: "technologies",
		stacks: "git,linux,googlecloud",
	},
	{
		field: "dev_tools",
		stacks: "sublime,vscode,neovim",
	},
] as const;

export function MyTechStacks() {
	return (
		<div className="mytech-stack-con">
			<div className="inner-con flex flex-wrap justify-center gap-10">
				{
					stacks.map((item, index) => {
						return (
							<Stack key={index} {...item} />
						)
					})
				}
			</div>
		</div>
	)
}
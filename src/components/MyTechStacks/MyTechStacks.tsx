import { Stack } from "../Stack/Stack";

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
			<div className="inner-con flex justify-center flex-col gap-5">
				{
					stacks.map((item) => {
						return (
							<Stack {...item} />
						)
					})
				}
			</div>
		</div>
	)
}
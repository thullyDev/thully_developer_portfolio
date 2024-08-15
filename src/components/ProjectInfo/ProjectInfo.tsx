import type { ProjectInfoProps } from "./types";

export function ProjectInfo({
    description,
    language,
    created_at,
    updated_at,
    visibility,
  }: ProjectInfoProps) {
  	const createAtDate = new Date(created_at).toDateString()
  	const updateAtDate = new Date(updated_at).toDateString()
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
	]

	return (
		<div className="project-info-con my-5">
			<div className="inner-con flex flex-wrap justify-center gap-5">
				<div className="left-side flex w-96">
					<p className="description text-gray-300 text-sm text-center">
						{description}
					</p>
				</div>
				<div className="right-side flex flex-nowrap flex-col gap-2 w-full max-w-52">
				{
					ticks.map(({name, value}, index) => {
						return (
							<div key={index} className="tick flex flex-nowrap gap-2 items-end ">
								<span className="name capitalize text-pink-500 text-sm text-nowrap">{name}: </span>
								<span className="value text-xs text-nowrap font-bold">{value}</span>
							</div>
						)
					})
				}
				</div>
			</div>
		</div>
	)
}
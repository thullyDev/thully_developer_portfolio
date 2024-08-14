import type { ProjectInfoProps } from "./types";

export function ProjectInfo({
    description,
    language,
    created_at,
    updated_at,
  }: ProjectInfoProps) {
  	const createAtDate = new Date(created_at).toDateString()
  	const updateAtDate = new Date(updated_at).toDateString()
	const ticks = [
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
		<div className="project-info-con">
			<div className="inner-con">
				<div className="left-side">
					<p className="description">
						{description}
					</p>
				</div>
				<div className="right-side">
				{
					ticks.map(({name, value}, index) => {
						return (
							<div key={index} className="tick">
								<span className="name">{name}</span>
								<span className="value">{value}</span>
							</div>
						)
					})
				}
				</div>
			</div>
		</div>
	)
}
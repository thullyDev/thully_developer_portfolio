import { TagBox } from "../TagBox/TagBox";
import type { TagsProps } from "./types";

export function Tags({ selectedTags, tags }: TagsProps) {
	return (
		<div className="tags-con">
			<div className="inner-con">
				<div className="tag-boxes">
					{
						selectedTags.map((item, index) => {
							return (<TagBox key={index} {...item}/>)
						})
					}
				</div>
			</div>
		</div>
	)
}
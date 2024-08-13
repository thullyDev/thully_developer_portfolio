import { CheckBox } from "../CheckBox/CheckBox"
import { Icon } from "../Icon/Icon"
import type { FilterBoxProps } from "./types"


export function FilterBox({ tags, checkedBoxes }: FilterBoxProps) {
	return (
		<div className="filter-box hidden">
			<div className="layer-1">
				<div className="checkboxes">
					{
						tags.map(({ slug, icon, name }, index) => {
							const checked = !checkedBoxes[slug] ? false : true
							return (
								<div key={index} className="outer-checkbox">
									<span className="checkbox-label">
										<Icon icon={icon} /> {name} 
									</span>
									<CheckBox id={slug} checked={checked} />
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}
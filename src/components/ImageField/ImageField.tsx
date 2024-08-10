import { formatText } from "../../utilities/misc";
import type { ImageFieldProps } from "./types";

export function ImageField({ value, name, altText = "Image" }: ImageFieldProps) {
	return (
		<div className="image-field-con">
			<div className="inner-con">
				<span className="label">
					{formatText(name)}
				</span>
				<span className="field-con">
					<img className="image-field" src={value} alt={altText} />
				</span>
			</div>
		</div>
	)
}

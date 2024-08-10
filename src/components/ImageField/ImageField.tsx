import { formatText } from "../../utilities/misc";
import type { ImageFieldProps } from "./types";

export function ImageField({ value, name, width = "200px", height = "200px", altText = "Image" }: ImageFieldProps) {
	const style = { width, height };

	return (
		<div className="image-field-con" style={style}>
			<div className="inner-con">
				<span className="label">
					{formatText(name)}
				</span>
				<span className="field-con">
					<img className="image-field" src={value} alt={altText} style={style} />
				</span>
			</div>
		</div>
	)
}

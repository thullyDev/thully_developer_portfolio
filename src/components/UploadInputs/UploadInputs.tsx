import { Keywords } from "../Keywords/Keywords"
import { Tags } from "../Tags/Tags"
import type { TextFieldProps } from "../TextField/types"
import { UploadTextInputs } from "../UploadTextInputs/UploadTextInputs"
import type { UploadInputsProps } from "./types"

// 	keywords, langs (checkboxs)

export function UploadInputs({ name, shortDesc, repoLink, demoLink, keywords, langs, langsAndDBs }: UploadInputsProps) {
	const textInputs: TextFieldProps[] = [
		{ value: name ?? "", name: "name", width: "200px", height: "40px" },
		{ value: shortDesc ?? "", name: "description", width: "400px", height: "40px" },
		{ value: repoLink ?? "", name: "repo", width: "300px", height: "40px" },
		{ value: demoLink ?? "", name: "demo_link", width: "300px", height: "40px" },
	]

	return (
		<div className="upload-inputs-con">
			<div className="inner-con">
				<UploadTextInputs textInputs={textInputs} />
				<div className="keywords-tags-con">
					<Keywords keywords={keywords} />
					<Tags tags={langsAndDBs} selectedTags={langs} />
				</div>
			</div>
		</div>
	)
}


import { UploadImageField } from "../UploadImageField/UploadImageField";
import type { UploadImagesProps } from "./types";

export function UploadImages({ images }: UploadImagesProps) {
	return (
		<div className="upload-images-con">
			<div className="inner-con">
				<div className="fields">
					{
						images.map(({ id, url, altText }, index) => {
							return (
								<UploadImageField key={index} index={index} id={id} imageUrl={url} altText={altText} />
							)
						})
					}
				</div>
				<div className="add-btn-con">
					<input type="file" id="add-file" className="add-inp" />
					<label htmlFor="add-file">
						<span role="button" className="add-btn">
							add
						</span>
					</label>
				</div>
			</div>
		</div>
	)
}
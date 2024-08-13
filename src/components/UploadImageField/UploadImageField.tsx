import { Icon } from "../Icon/Icon";
import type { UploadImageFieldProps } from "./types";

export function UploadImageField({
  index,
  id,
  imageUrl,
  altText,
}: UploadImageFieldProps) {
  return (
    <div className="upload-image-field">
      <div className="image-con">
        <img src={imageUrl} alt={altText} className="image" />
      </div>
      <div className="inner-field">
        <button className="remove-field" data-id={id} data-index={index}>
          <Icon icon="fa-solid fa-x" />
        </button>
      </div>
    </div>
  );
}

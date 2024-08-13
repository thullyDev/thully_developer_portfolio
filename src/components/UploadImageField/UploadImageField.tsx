import { trans500 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { UploadImageFieldProps } from "./types";

export function UploadImageField({
  index,
  id,
  imageUrl,
  altText,
}: UploadImageFieldProps) {
  return (
    <div className="upload-image-field relative inline-block">
      <div className="image-con">
        <img src={imageUrl} alt={altText} className="image h-28 w-28 object-cover rounded" />
      </div>
      <button className={ `remove-field absolute text-xs top-1 right-1 bg-pink-500 hover:bg-gray-500 w-7 h-7 rounded-full ${trans500}` } data-id={id} data-index={index}>
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

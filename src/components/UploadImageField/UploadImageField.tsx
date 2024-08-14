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
        <img
          src={imageUrl}
          alt={altText}
          className="image h-28 w-28 rounded object-cover"
        />
      </div>
      <button
        className={`remove-field absolute right-1 top-1 h-7 w-7 rounded-full bg-pink-500 text-xs hover:bg-gray-500 ${trans500}`}
        data-id={id}
        data-index={index}
      >
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

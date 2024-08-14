import { trans1000 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import { UploadImageField } from "../UploadImageField/UploadImageField";
import type { UploadImagesProps } from "./types";

export function UploadImages({ images }: UploadImagesProps) {
  return (
    <div className="upload-images-con">
      <div className="inner-con flex flex-col gap-5">
        <div className="fields flex items-center justify-center gap-2">
          {images.map(({ id, url, altText }, index) => {
            return (
              <UploadImageField
                key={index}
                index={index}
                id={id}
                imageUrl={url}
                altText={altText}
              />
            );
          })}
        </div>
        <div className="add-btn-con flex justify-center">
          <input type="file" id="add-file" className="add-inp hidden" />
          <label htmlFor="add-file">
            <span
              role="button"
              className={`add-btn ${trans1000} flex h-28 w-28 flex-col items-center justify-center gap-2 rounded border border-gray-500 bg-gray-800 text-sm hover:bg-pink-500`}
            >
              <Icon icon="fas fa-image text-2xl" />
              Add
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

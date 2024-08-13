import { trans1000 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import { UploadImageField } from "../UploadImageField/UploadImageField";
import type { UploadImagesProps } from "./types";

export function UploadImages({ images }: UploadImagesProps) {
  return (
    <div className="upload-images-con">
      <div className="inner-con flex flex-col gap-5">
        <div className="fields flex gap-2 justify-center items-center">
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
            <span role="button" className={ `add-btn ${trans1000} hover:bg-pink-500 border border-gray-500 w-28 h-28 flex flex-col justify-center items-center text-sm rounded gap-2 bg-gray-800` }>
              <Icon icon="fas fa-image text-2xl" />
              Add
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

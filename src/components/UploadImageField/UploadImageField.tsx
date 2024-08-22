import { trans500 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import { Loader } from "../Loader/Loader";
import type { UploadImageFieldProps } from "./types";
import $ from "jquery";

export function UploadImageField({
  index,
  id,
  imageUrl,
  altText,
  setPrevImages,
}: UploadImageFieldProps) {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      const $eventElement = $(event.currentTarget);
      const index = parseInt($eventElement.data("index"));

      $(`.image-loader[data-index="${index}"]`).fadeIn()

       setPrevImages(prevImages => {
          const newImages = [...prevImages];
          newImages.splice(index, 1);
          return newImages;
        });
  }



  return (
    <div className="upload-image-field relative inline-block border border-gray-600 rounded">
      <div data-index={index} className="image-loader hidden">
        <div className="inner-con absolute top-0 z-10 w-full h-full flex rounded justify-center items-center bg-black bg-opacity-70">
          <Loader />
        </div>
      </div>
      <div className="image-content relative">
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
          onClick={onClickHandler}
        >
          <Icon icon="fa-solid fa-x" />
        </button>
      </div>
    </div>
  );
}

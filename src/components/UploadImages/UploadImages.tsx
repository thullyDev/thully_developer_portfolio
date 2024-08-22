import { useState } from "react";
import { trans1000 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import { UploadImageField } from "../UploadImageField/UploadImageField";
import type { UploadImagesProps } from "./types";

declare const window: Window & typeof globalThis & {
  images: string[];
}


export function UploadImages({ images }: UploadImagesProps) {
    const [prevImages, setPrevImages] = useState(images);

  const uploadHandlerEvent = async (event: any) => {
    if (event.type != "load") return;

    const source = event.target.result;
    setPrevImages([...prevImages, source]);
  };

  const handleChange = (event: any) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    const reader = new FileReader();
    reader.addEventListener("load", uploadHandlerEvent);
    reader.readAsDataURL(selectedFile);
  };

  window.images = [...prevImages]

  return (
    <div className="upload-images-con">
      <div className="inner-con flex flex-col gap-5">
        <div className="fields flex items-center justify-center gap-2">
          {prevImages.map((image, index) => {
            const propsDict = {
              index: index,
              id: index,
              imageUrl: image,
              setPrevImages: setPrevImages,
              altText: JSON.stringify(index + 1),
            };
            return (
              <UploadImageField
                key={index}
                {...propsDict}
              />
            );
          })}
        </div>
        <div className="add-btn-con flex justify-center">
          <input type="file" id="add-file" className="add-inp hidden" accept="image/*" onChange={handleChange}/>
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

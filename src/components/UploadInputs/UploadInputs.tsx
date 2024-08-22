import { UploadImages } from "../UploadImages/UploadImages";
import type { UploadInputsProps } from "./types";

// 	keywords, langs (checkboxs)

export function UploadInputs({
  images,
}: UploadInputsProps) {

  return (
    <div className="upload-inputs-con">
      <div className="inner-con flex flex-col gap-5">
        <UploadImages images={images} />
        <div className="submit-con flex justify-center">
          <button
            type="button"
            className="submit-btn w-20 rounded bg-pink-500 py-1 text-sm"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

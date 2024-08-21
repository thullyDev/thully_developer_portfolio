import { useState } from "react";
import { formatText, ShowAlert } from "../../utilities/misc";
import type { ImageFieldProps } from "./types";
import { updateSiteData } from "../../services/clientRequests";

declare const window: Window &
  typeof globalThis & {
    imageInputNames: string[];
    siteData: any;
  };

  

export function ImageField({
  value,
  name,
  altText = "Image",
}: ImageFieldProps) {
  const [previewSrc, setPreviewSrc] = useState(value);

  const uploadHandlerEvent = async (event: any) => {
    if (event.type != "load") return;

    const source = event.target.result;

    if (!window.imageInputNames.includes(name)) return;

    window.siteData.images[name] = source;
    const result = await updateSiteData(window.siteData);

    if (result == true) ShowAlert("updated");
    else ShowAlert("failed");

    setPreviewSrc(source);
  };

  const handleChange = (event: any) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    const reader = new FileReader();
    reader.addEventListener("load", uploadHandlerEvent);
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="image-field-con">
      <input
        id={name}
        type="file"
        accept="image/*"
        data-name={name}
        onChange={handleChange}
        className="image-inp hidden"
      />
      <label
        htmlFor={name}
        className="inner-con flex h-full w-full cursor-pointer flex-col gap-3"
      >
        <span className="label block text-center text-sm font-bold">
          {formatText(name)}
        </span>
        <span className="field-con">
          <img
            data-name={name}
            className="image-field h-40 w-40 rounded object-cover"
            src={previewSrc}
            alt={altText}
          />
        </span>
      </label>
    </div>
  );
}

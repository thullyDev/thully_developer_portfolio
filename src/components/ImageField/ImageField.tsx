import { formatText } from "../../utilities/misc";
import type { ImageFieldProps } from "./types";

export function ImageField({
  value,
  name,
  altText = "Image",
}: ImageFieldProps) {
  return (
    <div className="image-field-con">
      <input id={name} type="file" className="image-inp hidden" />
      <label
        htmlFor={name}
        className="inner-con flex h-full w-full cursor-pointer flex-col gap-3"
      >
        <span className="label block text-center text-sm font-bold">
          {formatText(name)}
        </span>
        <span className="field-con">
          <img
            className="image-field h-40 w-40 rounded object-cover"
            src={value}
            alt={altText}
          />
        </span>
      </label>
    </div>
  );
}

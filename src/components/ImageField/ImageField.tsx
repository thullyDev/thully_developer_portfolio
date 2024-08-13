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
      <label htmlFor={name} className="inner-con flex flex-col gap-3 h-full w-full cursor-pointer">
        <span className="label text-sm font-bold text-center block">{formatText(name)}</span>
        <span className="field-con">
          <img className="image-field w-40 h-40 object-cover" src={value} alt={altText} />
        </span>
      </label>
    </div>
  );
}

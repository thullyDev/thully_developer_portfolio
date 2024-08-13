import { ImageField } from "../ImageField/ImageField";
import type { ImageInputsProps } from "./types";

export function ImageInputs({ inputs }: ImageInputsProps) {
  return (
    <div className="image-inps-con">
      <span>
        <h2 className="label">Images</h2>
      </span>
      <div className="inner-image-inps-con">
        <form action="POST" className="image-form">
          {inputs.map((item, index) => (
            <ImageField key={index} {...item} />
          ))}
        </form>
      </div>
    </div>
  );
}

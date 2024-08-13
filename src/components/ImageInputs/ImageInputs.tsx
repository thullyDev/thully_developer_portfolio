import { ImageField } from "../ImageField/ImageField";
import type { ImageInputsProps } from "./types";

export function ImageInputs({ inputs }: ImageInputsProps) {
  return (
    <div className="image-inps-con flex flex-col gap-5">
      <span>
        <h2 className="label font-bold text-xl text-center">Images</h2>
      </span>
      <div className="inner-image-inps-con ">
        <form action="POST" className="image-form flex flex-wrap gap-5 justify-around">
          {inputs.map((item, index) => (
            <ImageField key={index} {...item} />
          ))}
        </form>
      </div>
    </div>
  );
}

import { formatText } from "../../utilities/misc";
import type { TextFieldProps } from "./types";

export function TextField({
  value,
  name,
}: TextFieldProps) {

  return (
    <div className="text-field-con w-full">
      <div className="inner-con flex flex-col gap-2 text-gray-300">
        <span className="label text-sm font-bold text-center">{formatText(name)}</span>
        <span className="field-con flex justify-center">
          <textarea
            className="textfield bg-gray-800 flex items-center text-sm border border-gray-600 w-full rounded-sm p-1 outline-none"
            defaultValue={value}
            name={name}
            id={name}
          ></textarea>
        </span>
      </div>
    </div>
  );
}

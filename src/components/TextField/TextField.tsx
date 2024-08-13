import { formatText } from "../../utilities/misc";
import type { TextFieldProps } from "./types";

export function TextField({
  value,
  name,
  height = "100px",
  width = "100px",
}: TextFieldProps) {
  const style = { width, height };

  return (
    <div className="text-field-con" style={style}>
      <div className="inner-con">
        <span className="label">{formatText(name)}</span>
        <span className="field-con">
          <textarea
            className="textfield"
            defaultValue={value}
            name={name}
            id={name}
          ></textarea>
        </span>
      </div>
    </div>
  );
}

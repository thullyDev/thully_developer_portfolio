import { TextField } from "../TextField/TextField";
import type { UploadTextInputsProps } from "./types";

export function UploadTextInputs({ textInputs }: UploadTextInputsProps) {
  return (
    <div className="text-inputs flex flex-col gap-5">
      {textInputs.map((item, index) => (
        <TextField key={index} {...item} />
      ))}
    </div>
  );
}

import { TextField } from "../TextField/TextField";
import type { UserInputsProps } from "./types";

export function UserInputs({ inputs }: UserInputsProps) {
  return (
    <div className="user-inps-con flex flex-col gap-5">
      <span>
        <h2 className="label text-2xl font-bold text-center">User Info</h2>
      </span>
      <div className="inner-user-inps-con">
        <form action="POST" className="user-form flex flex-col flex-wrap gap-5 items-center">
          {inputs.map((item, index) => (
            <TextField key={index} {...item} />
          ))}
        </form>
      </div>
    </div>
  );
}

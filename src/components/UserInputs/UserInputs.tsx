import { TextField } from "../TextField/TextField";
import type { UserInputsProps } from "./types";

export function UserInputs({ inputs }: UserInputsProps) {
  return (
    <div className="user-inps-con flex flex-col gap-5">
      <span>
        <h2 className="label text-center text-2xl font-bold">User Info</h2>
      </span>
      <div className="inner-user-inps-con">
        <form
          action="POST"
          className="user-form flex flex-col flex-wrap items-center gap-5"
        >
          {inputs.map((item, index) => (
            <TextField key={index} {...item} />
          ))}
        </form>
      </div>
    </div>
  );
}

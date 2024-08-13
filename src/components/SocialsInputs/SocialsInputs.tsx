import { TextField } from "../TextField/TextField";
import type { SocialInputsProps } from "./types";

export function SocialsInputs({ inputs }: SocialInputsProps) {
  return (
    <div className="social-inps-con my-8 flex flex-col gap-5">
      <span>
        <h2 className="label text-center text-2xl font-bold">Socials</h2>
      </span>
      <div className="inner-social-inps-con">
        <form
          action="POST"
          className="social-form flex flex-col flex-wrap items-center gap-3"
        >
          {inputs.map((item, index) => (
            <TextField key={index} {...item} />
          ))}
        </form>
      </div>
    </div>
  );
}

import { trans500 } from "../../utilities/misc";
import { AuthInput } from "../AuthInput/AuthInput";
import type { AuthFormProps } from "./types";

export function AuthForm({ name, authInputs }: AuthFormProps) {
  return (
    <div className="auth-form-con">
      <form data-name={name} action="POST" className="auth-form">
        <div className="inputs-con py-4 flex flex-col gap-4">
          {authInputs.map((item, index) => {
            return <AuthInput item={item} key={index} />;
          })}
        </div>
        <div className="save-btn-con flex justify-center">
          <button
            type="button"
            className={`save-btn text-sm py-1 bg-gray-700 hover:bg-gray-600 w-20 rounded ${trans500}`}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

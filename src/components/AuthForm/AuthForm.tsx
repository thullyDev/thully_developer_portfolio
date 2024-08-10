import { AuthInput } from "../AuthInput/AuthInput";
import type { AuthFormProps } from "./types";

export function AuthForm({ name, authInputs }: AuthFormProps) {
  return (
    <div className="auth-form-con">
      <form data-name={name} action="POST" className="auth-form">
        <div className="inputs-con">
          {authInputs.map((item, index) => {
            return <AuthInput item={item} key={index} />;
          })}
        </div>
        <div className="save-btn-con">
          <button type="button" className="save-btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

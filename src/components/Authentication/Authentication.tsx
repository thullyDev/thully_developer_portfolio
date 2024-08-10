import { AuthForm } from "../AuthForm/AuthForm";
import type { AuthInput } from "../AuthForm/types";
import { CloseBtn } from "../CloseBtn/CloseBtn";

const loginInputs: AuthInput[] = [
  {
    name: "email",
    type: "text",
    icon: "fa fa-envelope",
  },
  {
    name: "password",
    type: "password",
    icon: "fa fa-lock",
  },
];

export function Authentication() {
  return (
    <div className="auth-con">
      <div className="inner-con">
        <CloseBtn />
        <div className="forms-con">
          <AuthForm name="login" authInputs={loginInputs} />
        </div>
      </div>
    </div>
  );
}

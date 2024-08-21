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
    <div
      className="outer-auth-con fixed top-0 hidden h-full w-full"
      data-open="false"
    >
      <div className="flex h-full items-center justify-center bg-black bg-opacity-70">
        <div className="auth-con w-full max-w-96 rounded-md border border-gray-600 bg-gray-800 p-3">
          <div className="inner-con">
            <CloseBtn element=".outer-auth-con" animate="fade" />
            <div className="forms-con">
              <AuthForm name="login" authInputs={loginInputs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

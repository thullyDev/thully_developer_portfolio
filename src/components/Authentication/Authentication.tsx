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
    <div className="hidden outter-con fixed top-0 w-full h-full">
      <div className="h-full bg-black bg-opacity-70 flex justify-center items-center">
        <div className="auth-con bg-gray-800 p-3 rounded-md border border-gray-600">
          <div className="inner-con">
            <CloseBtn />
            <div className="forms-con">
              <AuthForm name="login" authInputs={loginInputs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

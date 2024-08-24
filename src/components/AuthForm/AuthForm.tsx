import { login } from "../../services/clientRequests";
import { ShowAlert, trans500 } from "../../utilities/misc";
import { AuthInput } from "../AuthInput/AuthInput";
import type { AuthFormProps } from "./types";
import $ from "jquery"

async function authHandler() {
  const email = $(".auth-input[data-name='email']").val() as string
  const password = $(".auth-input[data-name='password']").val() as string

  if (!email || !password) {
    ShowAlert("missing inputs")
    return
  }


  const response =  await login(email, password)

  if (response == false) {
    ShowAlert("failed to login")
    return
  }

  ShowAlert("successfully logged in")

  $('.auth-con .close-btn').click()
}

export function AuthForm({ name, authInputs }: AuthFormProps) {
  return (
    <div className="auth-form-con">
      <form data-name={name} action="POST" className="auth-form">
        <div className="inputs-con flex flex-col gap-4 py-4">
          {authInputs.map((item, index) => {
            return <AuthInput item={item} key={index} />;
          })}
        </div>
        <div className="save-btn-con flex justify-center">
          <button
            type="button"
            onClick={authHandler}
            className={`save-btn w-20 rounded bg-gray-700 py-1 text-sm hover:bg-gray-600 ${trans500}`}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

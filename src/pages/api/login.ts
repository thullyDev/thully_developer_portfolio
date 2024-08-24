import type { APIRoute } from "astro";
import { response } from "../../utilities/misc";
import { CRASH, FORBIDDEN, SUCCESSFUL } from "../../utilities/errors";
import { login } from "../../services/server";
import { setCookie } from "../../utilities/cookies";

export const POST: APIRoute = async ({ request, cookies }) => {
  const { email, password } = await request.json();

  if (!email || !password) return response(FORBIDDEN);

  const serverResponse = await login({
    email,
    password,
  });

  if (!serverResponse) return response(CRASH);

  const token = serverResponse;

  setCookie({ name: "email", value: email, expireDays: 60, cookies });
  setCookie({ name: "session_token", value: token, expireDays: 60, cookies });

  return response(SUCCESSFUL);
};

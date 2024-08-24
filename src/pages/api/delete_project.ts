import type { APIRoute } from "astro";
import { response } from "../../utilities/misc";
import { BAD_REQUEST, CRASH, FORBIDDEN, SUCCESSFUL } from "../../utilities/errors";
import { deleteProject } from "../../services/server";
import { setCookie } from "../../utilities/cookies";

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const repoSlug = url.searchParams.get("repo_slug");
  const email = cookies.get("email")?.value;
  const session_token = cookies.get("session_token")?.value;

  if (!repoSlug) return response(BAD_REQUEST);
  if (!email || !session_token) return response(FORBIDDEN);

  const serverResponse = await deleteProject({
    email,
    session_token,
    repo_slug: repoSlug,
  });

  if (!serverResponse) return response(CRASH);

  const token = serverResponse;

  setCookie({ name: "email", value: email, expireDays: 60, cookies });
  setCookie({ name: "session_token", value: token, expireDays: 60, cookies });

	return response(SUCCESSFUL) 
} 


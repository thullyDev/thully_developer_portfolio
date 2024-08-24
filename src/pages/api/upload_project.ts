import type { APIRoute } from "astro";
import { response } from "../../utilities/misc";
import { BAD_REQUEST, CRASH, FORBIDDEN, SUCCESSFUL } from "../../utilities/errors";
import { uploadProject } from "../../services/server";
import { setCookie } from "../../utilities/cookies";

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const rawIsForEdit = url.searchParams.get("isForEdit");
  const repoSlug = url.searchParams.get("repo_slug");
  const rawImages = url.searchParams.get("images");
  const email = cookies.get("email")?.value;
  const session_token = cookies.get("session_token")?.value;

  if (!rawImages || !repoSlug || !rawIsForEdit) return response(BAD_REQUEST);
  if (!email || !session_token) return response(FORBIDDEN);

  const images = JSON.parse(rawImages) as string[];
  const isForEdit = JSON.parse(rawIsForEdit) as boolean;
  const serverResponse = await uploadProject({
    email,
    session_token,
    repo_slug: repoSlug,
    images: JSON.stringify(images),
    isForEdit,
  });

  if (!serverResponse) return response(CRASH);

  const token = serverResponse;

  setCookie({ name: "email", value: email, expireDays: 60, cookies });
  setCookie({ name: "session_token", value: token, expireDays: 60, cookies });

	return response(SUCCESSFUL) 
} 


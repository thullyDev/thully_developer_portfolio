import type { APIRoute } from "astro";
import { processImage, response } from "../../utilities/misc";
import { BAD_REQUEST, FORBIDDEN, SUCCESSFUL } from "../../utilities/errors";
import { uploadBase64Image } from "../../handlers/storage";

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const repoSlug = url.searchParams.get("repo_slug");
  const rawImages = url.searchParams.get("images");
  const email = cookies.get("email")?.value;
  const session_token = cookies.get("session_token")?.value;

  if (!rawImages || !repoSlug) return response(BAD_REQUEST);
  if (!email || !session_token) return response(FORBIDDEN);

  const images = JSON.parse(rawImages) as string[];

  // const serverResponse = await updateSiteData({
  //   email,
  //   session_token,
  //   siteData,
  // });

  // if (!serverResponse) return response(CRASH);

  // const token = serverResponse;

  // setCookie({ name: "email", value: email, expireDays: 60, cookies });
  // setCookie({ name: "session_token", value: token, expireDays: 60, cookies });

	return response(SUCCESSFUL) 
} 


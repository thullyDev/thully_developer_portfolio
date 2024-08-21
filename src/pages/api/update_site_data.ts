import type { APIRoute } from "astro";
import {
  BAD_REQUEST,
  CRASH,
  FORBIDDEN,
  SUCCESSFUL,
} from "../../utilities/errors";
import { updateSiteData } from "../../services/server";
import type { SiteData } from "../../types/serverTypes";

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const rawSiteData = url.searchParams.get("site_data");
  const email = cookies.get("email")?.value;
  const session_token = cookies.get("session_token")?.value;

  if (!rawSiteData) return response(BAD_REQUEST);
  // if (!email || !session_token) return response(FORBIDDEN)

  const siteData = JSON.parse(rawSiteData) as SiteData;

  // const serverResponse = await updateSiteData({ email, session_token, siteData: inputSiteData })
  const serverResponse = await updateSiteData({
    email: "testAdmin@gmail.com",
    session_token: "ghalgmalgamlajl",
    siteData: siteData,
  });

  if (!serverResponse) return response(CRASH);

  const token = serverResponse;

  return response(SUCCESSFUL);
};

function response(code: number) {
  return new Response(JSON.stringify({ status_code: code }));
}

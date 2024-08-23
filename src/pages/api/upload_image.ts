import type { APIRoute } from "astro";
import { processImage, response } from "../../utilities/misc";
import { BAD_REQUEST, FORBIDDEN, SUCCESSFUL } from "../../utilities/errors";
import { uploadBase64Image } from "../../handlers/storage";

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const base64Image = url.searchParams.get("base64Image");
  const name = url.searchParams.get("name");
  const email = cookies.get("email")?.value;
  const session_token = cookies.get("session_token")?.value;

  if (!name || !base64Image) return response(BAD_REQUEST);
  if (!email || !session_token) return response(FORBIDDEN);

  const [filename, image] = processImage(base64Image, name);
  const imageUrl = await uploadBase64Image(filename, image);

  return new Response(JSON.stringify({ imageUrl }))
} 
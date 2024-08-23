import type { APIRoute } from "astro";
import {
  BAD_REQUEST,
  CRASH,
  FORBIDDEN,
  SUCCESSFUL,
} from "../../utilities/errors";
import { updateSiteData } from "../../services/server";
import type { Images, SiteData } from "../../types/serverTypes";
import { setCookie } from "../../utilities/cookies";
import { Cache } from "../../database/Cache/cache";
import { processImage, response } from "../../utilities/misc";
import { uploadBase64Image } from "../../handlers/storage";

const cache = new Cache();

export const GET: APIRoute = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const rawSiteData = url.searchParams.get("site_data");
  const email = cookies.get("email")?.value;
  const session_token = cookies.get("session_token")?.value;

  if (!rawSiteData) return response(BAD_REQUEST);
  if (!email || !session_token) return response(FORBIDDEN);

  const siteData = JSON.parse(rawSiteData) as SiteData;

  const { images } = siteData

  const processedImages = await processUploadProfileImages(images)
  siteData.images = processedImages 

  const serverResponse = await updateSiteData({
    email,
    session_token,
    siteData,
  });

  if (!serverResponse) return response(CRASH);

  const token = serverResponse;

  setCookie({ name: "email", value: email, expireDays: 60, cookies });
  setCookie({ name: "session_token", value: token, expireDays: 60, cookies });

  cache.delete("main:sidebar-footer*24");

  return response(SUCCESSFUL);
};


async function processUploadProfileImages(profileImages: Images): Promise<Images> {
    const images: any = {};

    for (const [key, image] of Object.entries(profileImages)) {
        if (image.includes("https://")) {
            // This condition is here for when it's used in the edit,
            // it checks if the image is from the image storage,
            // if so, it just appends it and moves on.
            images[key] = image;
            continue;
        }

        const [name, base64Image] = processImage(image, `profile-image-${key}`);
        const imageUrl = await uploadBase64Image(name, base64Image);

        if (!imageUrl) continue

        images[key] = imageUrl;
    }

    return images;
}
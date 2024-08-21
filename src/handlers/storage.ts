import ImageKit from "imagekit";
import { IMAGEKIT_PRIVATE_KEY, IMAGEKIT_PUBLIC_KEY, IMAGEKIT_URL_ENDPOINT } from '../utilities/config';

const imagekit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
});

export async function upload(name: string, file: string): Promise<string | null> {
  try {
    const uploadResponse = await imagekit.upload({
      file, 
      fileName: name,
    });

    const url = uploadResponse.url;

    return url || null;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

export async function uploadBase64Image(name: string, base64Str: string): Promise<string | null> {
  try {
    const uploadUrl = await upload(name, base64Str);
    return uploadUrl;
  } catch (error) {
    console.error('Error uploading base64 image:', error);
    return null;
  }
}


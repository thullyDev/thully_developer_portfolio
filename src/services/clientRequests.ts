import { ApiHandler } from "../handlers/apiHandler";
import type { SiteData } from "../types/serverTypes";

declare const window: Window & typeof globalThis;

const serverApi = new ApiHandler(`${window.location.origin}/api`);

export async function updateSiteData(siteData: SiteData): Promise<boolean> {
  const uri = `/update_site_data/`;
  const params = {
    site_data: JSON.stringify(siteData),
  };
  const response = await serverApi.get(uri, params);

  if (!response) {
    return false;
  }

  return true;
}

export async function uploadProject(images: string[], repoSlug: string, isForEdit: boolean = false): Promise<boolean> {
  const uri = `/upload_project/`;
  const params = {
    images: JSON.stringify(images),
    repo_slug: repoSlug,
    isForEdit,
  };

  const response = await serverApi.get(uri, params);

  if (!response) {
    return false;
  }

  return true;
}

export async function deleteProject(repoSlug: string): Promise<boolean> {
  const uri = `/delete_project/`;
  const params = {
    repo_slug: repoSlug,
  };

  const response = await serverApi.get(uri, params);

  if (!response) {
    return false;
  }

  return true;
}

export async function uploadImage(image: string, name: string): Promise<string|null> {
  const uri = `/upload_image/`;
  const params = {
    base64Image: image,
    name,
  };

  const response = await serverApi.get(uri, params) as { imageUrl: string } | null;

  if (!response) {
    return null;
  }

  return response.imageUrl;
}

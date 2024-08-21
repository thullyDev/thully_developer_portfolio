import { ApiHandler } from "../handlers/apiHandler";
import type { SiteData } from "../types/serverTypes";

declare const window: Window & typeof globalThis

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

  console.log({ response });

  return true;
}

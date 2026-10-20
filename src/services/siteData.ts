import bundledSiteData from "../data/siteData.json";
import type { SiteData } from "../types/serverTypes";

export async function getSiteData(): Promise<SiteData> {
  return bundledSiteData as SiteData;
}

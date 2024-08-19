import { ApiHandler } from "../handlers/apiHandler";
import type { GetSiteDataResponse } from "../types/serverResponseTypes";
import type {
  GetRepoImages,
  SiteData,
} from "../types/serverTypes";
import { SERVER_API_URL } from "../utilities/config";

const serverApi = new ApiHandler(SERVER_API_URL);
const dummyApi = new ApiHandler("");

export async function getDefaultSiteData(): Promise<SiteData | null> {
  const url = "https://thullydev.github.io/thullyDevStatics/JSONs/siteData.json";
  const data = (await dummyApi.get(url)) as SiteData | null;

  if (!data) return null;

  return data;
}

export async function getSiteData(): Promise<SiteData | null> {
  const uri = "/get_site_data/";
  const response = (await serverApi.get(uri)) as GetSiteDataResponse | null;

  if (!response) return await getDefaultSiteData();

  const { site_data } = response.data

  if (!site_data) return await getDefaultSiteData()
    
  return site_data;
}


export async function getProjectDetails(
  name: string,
): Promise<GetRepoImages> {
  const images = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/f2/b4/e4/f2b4e4f34acc9395e1e0d228c44abd05.jpg",
      altText: "1",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/f2/b4/e4/f2b4e4f34acc9395e1e0d228c44abd05.jpg",
      altText: "2",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/f2/b4/e4/f2b4e4f34acc9395e1e0d228c44abd05.jpg",
      altText: "3",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/f2/b4/e4/f2b4e4f34acc9395e1e0d228c44abd05.jpg",
      altText: "4",
    },
  ];

  return {
    images,
  };
}

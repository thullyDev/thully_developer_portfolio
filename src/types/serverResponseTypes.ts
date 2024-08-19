import type { SiteData } from "./serverTypes";

type DataResponse = {
	session_token: string;
}

export type GetSiteDataResponse = {
	message: string;
	status_code: string;
	data: {
		site_data: SiteData | null;
	} & DataResponse;
}
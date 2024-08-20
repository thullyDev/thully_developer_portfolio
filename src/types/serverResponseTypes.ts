import type { SiteData } from "./serverTypes";

type SessionTokenResponse = {
	session_token: string;
}

type Response = {
	message: string;
	status_code: string;
}

export type GetSiteDataResponse = Response & {
	data: {
		site_data: SiteData | null;
	} & SessionTokenResponse;
}


export type UpdateSiteDataResponse = Response & {
	data: SessionTokenResponse;
}

export type ServerProject = {
	repo_slug: string;
	images: string[];
	created_at: string;
} 

export type GetProjectResponse = Response & {
	data: {
		project: ServerProject; 
	}
}


export type UploadProjectResponse = Response & {
	data: SessionTokenResponse;
}

export type LoginResponse = Response & {
	data: {
		email: string;
	} & SessionTokenResponse
}
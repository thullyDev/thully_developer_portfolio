import { ApiHandler } from "../handlers/apiHandler";
import type {
  GetProjectResponse,
  GetSiteDataResponse,
  LoginResponse,
  ServerProject,
  UpdateSiteDataResponse,
  UploadProjectResponse,
} from "../types/serverResponseTypes";
import type {
  EditProject,
  DeleteProject,
  GetProject,
  SiteData,
  UpdataSiteData,
  UploadProject,
  Login,
} from "../types/serverTypes";
import { SERVER_API_URL } from "../utilities/config";

const serverApi = new ApiHandler(SERVER_API_URL);
const dummyApi = new ApiHandler("");

export async function login({
  email,
  password,
}: Login): Promise<string | null> {
  const uri = `/login`;
  const data = { email, password };
  const response = (await serverApi.post(uri, data)) as LoginResponse | null;

  if (!response) {
    return null;
  }

  return response.data.session_token;
}

export async function getDefaultSiteData(): Promise<SiteData | null> {
  const url =
    "https://thullydev.github.io/thullyDevStatics/JSONs/siteData.json";
  const data = (await dummyApi.get(url)) as SiteData | null;

  if (!data) return null;

  return data;
}

export async function getSiteData(): Promise<SiteData | null> {
  const uri = "/get_site_data/";
  const response = (await serverApi.get(uri)) as GetSiteDataResponse | null;

  if (!response) return await getDefaultSiteData();

  const { site_data } = response.data;

  if (!site_data) return await getDefaultSiteData();

  return site_data;
}

export async function getProject({
  repo_slug,
}: GetProject): Promise<ServerProject | null> {
  const uri = `/get_project/${repo_slug.toLowerCase()}`;
  const response = (await serverApi.get(uri)) as GetProjectResponse | null;

  if (!response) {
    return null;
  }

  const { project } = response.data;

  return project;
}

export async function updateSiteData({
  email,
  session_token,
  siteData,
}: UpdataSiteData): Promise<string | null> {
  const uri = "/update_site_data/";
  const headers = { "Content-Type": "application/json", session_token, email };
  const params = { dataStr: JSON.stringify(siteData) };
  const response = (await serverApi.post(
    uri,
    {},
    params,
    headers,
  )) as UpdateSiteDataResponse | null;

  if (!response) {
    return null;
  }

  return response.data.session_token;
}

export async function uploadProject({
  email,
  session_token,
  repo_slug,
  images,
  isForEdit,
}: UploadProject): Promise<string | null> {
  const uri = isForEdit == false ? `/upload_project/${repo_slug.toLowerCase()}` : `/edit_project/${repo_slug.toLowerCase()}`;
  const params = {
    images,
  };
  const headers = { "Content-Type": "application/json", session_token, email };
  const response = (await serverApi.post(
    uri,
    {},
    params,
    headers,
  )) as UploadProjectResponse | null;

  if (!response) {
    return null;
  }

  return response.data.session_token;
}

export async function editProject({
  email,
  session_token,
  repo_slug,
  images,
}: EditProject): Promise<string | null> {
  const uri = `/edit_project/${repo_slug}`;
  const data = {
    images,
  };
  const headers = { "Content-Type": "application/json", session_token, email };
  const response = (await serverApi.post(
    uri,
    data,
    headers,
  )) as UploadProjectResponse | null;

  if (!response) {
    return null;
  }

  return response.data.session_token;
}

export async function deleteProject({
  repo_slug,
  email,
  session_token,
}: DeleteProject): Promise<ServerProject | null> {
  const uri = `/delete_project/${repo_slug}`;
  const headers = { "Content-Type": "application/json", session_token, email };
  const response = (await serverApi.post(
    uri,
    {},
    headers,
  )) as GetProjectResponse | null;

  if (!response) {
    return null;
  }

  const { project } = response.data;

  return project;
}

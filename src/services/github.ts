// import { Octokit } from "@octokit/rest";
import { GITHUB_USER } from "../utilities/config";
import { ApiHandler } from "../handlers/apiHandler";
import type {
  GitRepoResponse,
  GitReposResponse,
} from "../types/githubResponseTypes";
import type { GetRepoResponse, Pagination, Repo } from "../types/github";
import { repoParser } from "./githubParsers";
import { paginateItems } from "../utilities/misc";

// const octokit = new Octokit({
//   auth: GITHUB_ACCESS_TOKEN,
// });

const gitApi = new ApiHandler(`https://api.github.com`);

async function fetchUserRepos(): Promise<GitReposResponse | null> {
  return (await gitApi.get(
    `/users/${GITHUB_USER}/repos`,
  )) as null | GitReposResponse;
}

export async function listRepoSlugs(): Promise<string[]> {
  const response = await fetchUserRepos();
  if (!response) return [];
  return response.map((repo) => repo.name);
}

export async function getRepo(slug: string): Promise<Repo | null> {
  const response = (await gitApi.get(
    `/repos/${GITHUB_USER}/${slug}`,
  )) as null | GitRepoResponse;

  if (!response) return null;

  return repoParser(response);
}

const REPOS_PER_PAGE = 8;

export async function getRepoPageCount(): Promise<number> {
  const response = await fetchUserRepos();
  if (!response?.length) return 1;
  return Math.max(1, Math.ceil(response.length / REPOS_PER_PAGE));
}

export async function getRepos(page: number): Promise<GetRepoResponse> {
  const response = await fetchUserRepos();

  if (!response) {
    return {
      repos: [],
      pagination: {
        page: 1,
        pages: 1,
      },
    };
  }

  const repos: Repo[] = [];

  for (let i = 0; i < response.length; i++) {
    const item = response[i];
    const repo = repoParser(item);

    repos.push(repo);
  }

  const { items, pagination } = paginateItems({
    data: repos,
    page,
    limit: REPOS_PER_PAGE,
  }) as { items: Repo[]; pagination: Pagination };

  // return repoParser(response)
  return {
    repos: items,
    pagination: pagination,
  };
}

export async function getFeatureProjects() {
  const featuredRepos: Record<string, boolean> = {
    "manganato.api": true,
    mangarealm: true,
    "as2anime.docs": true,
    animehoshi: true,
  };
  const response = await fetchUserRepos();

  if (!response) return [];

  const repos: Repo[] = [];

  for (let i = 0; i < response.length; i++) {
    const item = response[i];
    const { name } = item;
    const key = name.toLowerCase();

    if (!featuredRepos[key]) continue;

    const repo = repoParser(item);
    repos.push(repo);
  }

  return repos;
}

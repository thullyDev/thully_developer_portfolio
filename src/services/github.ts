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

const FEATURED_REPO_ORDER = [
  "turky",
  "animehoshi",
  "as2anime.docs",
  "manganato.api",
  "mangarealm",
] as const;

const PRIORITY_PROJECT_ORDER = ["turky"] as const;

function repoSortRank(name: string, order: readonly string[]): number {
  const key = name.toLowerCase();
  const index = order.findIndex((entry) => entry === key);
  return index === -1 ? order.length : index;
}

function sortReposByOrder(repos: Repo[], order: readonly string[]): Repo[] {
  return [...repos].sort(
    (a, b) => repoSortRank(a.name, order) - repoSortRank(b.name, order),
  );
}

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

  const sortedRepos = sortReposByOrder(repos, PRIORITY_PROJECT_ORDER);

  const { items, pagination } = paginateItems({
    data: sortedRepos,
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
  const featuredSet = new Set(
    FEATURED_REPO_ORDER.map((name) => name.toLowerCase()),
  );
  const response = await fetchUserRepos();

  if (!response) return [];

  const repos: Repo[] = [];

  for (let i = 0; i < response.length; i++) {
    const item = response[i];
    const key = item.name.toLowerCase();

    if (!featuredSet.has(key)) continue;

    repos.push(repoParser(item));
  }

  return sortReposByOrder(repos, FEATURED_REPO_ORDER);
}

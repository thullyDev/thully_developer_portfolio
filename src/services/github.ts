// import { Octokit } from "@octokit/rest";
import { GITHUB_USER } from "../utilities/config";
import { ApiHandler } from "../handlers/apiHandler";
import type { GitRepoResponse, GitReposResponse } from "../types/githubResponseTypes";
import type { GetRepoResponse, Pagination, Repo } from "../types/github";
import { repoParser } from "./githubParsers";
import { paginateItems } from "../utilities/misc";

// const octokit = new Octokit({
//   auth: GITHUB_ACCESS_TOKEN,
// });

const gitApi = new ApiHandler(`https://api.github.com`);

export async function getRepo(slug: string): Promise<Repo | null> {
  const response = (await gitApi.get(`/repos/${GITHUB_USER}/${slug}`)) as null | GitRepoResponse;

  if (!response) return null;

  return repoParser(response)
}

export async function getRepos(page: number): Promise<GetRepoResponse> {
  const response = (await gitApi.get(`/users/${GITHUB_USER}/repos`)) as null | GitReposResponse;
  
  if (!response) {
    return {
      repos: [],
      pagination: {
        page: 1,
        pages: 1,
      }
    }
  }

  const repos: Repo[] = []

  for (let i = 0; i < response.length; i++) {
    const item = response[i]
    const repo = repoParser(item)

    repos.push(repo)
  }

  const { items, pagination } = paginateItems({ data: repos, page, limit: 8}) as { items: Repo[], pagination: Pagination }


  // return repoParser(response)
  return {
    repos: items,
    pagination: pagination,
  }
}


export async function getFeatureProjects() {
  const featuredRepos: Record<string, boolean> = { "manganato.api": true, "mangarealm": true, "as2anime.docs": true, "animehoshi": true } 
  const response = (await gitApi.get(`/users/${GITHUB_USER}/repos`)) as null | GitReposResponse;
  
  if (!response) return []

  const repos: Repo[] = []

  for (let i = 0; i < response.length; i++) {
    const item = response[i]
    const { name } = item
    const key = name.toLowerCase()

    if (!featuredRepos[key]) continue

    const repo = repoParser(item)
    repos.push(repo)
  }

  return repos
}
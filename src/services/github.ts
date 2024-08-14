import { Octokit } from "@octokit/rest";
import { GITHUB_ACCESS_TOKEN, GITHUB_USER } from "../utilities/config";
import { ApiHandler } from "../handlers/apiHandler";
import type { GitRepoResponse } from "../types/githubResponseTypes";
import type { GetRepo } from "../types/github";

const octokit = new Octokit({
  auth: GITHUB_ACCESS_TOKEN,
});
const gitApi = new ApiHandler(`https://api.github.com/repos/${GITHUB_USER}`);

export async function getRepo(slug: string): Promise<GetRepo | null> {
  const response = (await gitApi.get(`/${slug}`)) as null | GitRepoResponse;

  if (!response) return null;

  const {
    homepage,
    name,
    full_name,
    visibility,
    description,
    html_url,
    clone_url,
    language,
    created_at,
    updated_at,
    pushed_at,
  } = response;

  return {
    name,
    full_name,
    visibility,
    description,
    html_url,
    language,
    created_at,
    updated_at,
    pushed_at,
    liveDemo: homepage,
    repoLink: clone_url,
  };
}

import type { Repo } from "../types/github";
import type { GitRepoResponse } from "../types/githubResponseTypes";

export function repoParser(data: GitRepoResponse): Repo {
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
  } = data;

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

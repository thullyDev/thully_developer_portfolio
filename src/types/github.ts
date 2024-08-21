export type Repo = {
  name: string;
  full_name: string;
  visibility: string;
  description: string | null;
  html_url: string;
  language: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  liveDemo: string | null;
  repoLink: string;
};

export type GetRepoResponse = {
  repos: Repo[];
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pages: number;
};

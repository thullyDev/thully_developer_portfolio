type User = {
  user_name: string;
  full_name: string;
  role: string;
  profile_description: string;
  donate_slug: string;
  donate_link: string;
  seo_decription: string;
  seo_title: string;
}

type Socials = {
  linkedin: string;
  email: string;
  instagram: string;
  facebook: string;
  twitter: string;
  discord: string;
  github: string;
  youtube: string;
}

type Images = {
  profile_image: string;
  side_footer_image: string;
  favicon: string;
  description: string;
}

export type SiteData = {
  user: User;
  socials: Socials;
  images: Images;
}

export type UpdataSiteData = {
  email: string, session_token: string, siteData: SiteData
} 

export type UploadProject = {
  email: string, session_token: string, repo_slug: string, images: string
}


export type GetProject = {
  repo_slug: string;
}

export type DeleteProject = {
  repo_slug: string;
  email: string;
  session_token: string;
}

export type EditProject = {
  email: string, session_token: string, repo_slug: string, images: string
} 


export type Login = {
  email: string;
  password: string;
}
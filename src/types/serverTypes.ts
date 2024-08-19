export type Image = {
  id: number;
  url: string;
  altText: string;
};

export type GetRepoImages = {
  images: Image[];
};


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

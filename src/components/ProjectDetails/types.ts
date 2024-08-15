import type { ProjectImage } from "../ProjectImages/types";

export type ProjectDetailsProps = {
  repoLink: string;
  liveDemo: string | null;
  full_name: string;
  name: string;
  images: ProjectImage[],
  description: string,
  language: string,
  created_at: string,
  updated_at: string,
  visibility: string
};

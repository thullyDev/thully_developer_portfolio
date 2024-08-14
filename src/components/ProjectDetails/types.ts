import type { ProjectImage } from "../ProjectImages/types";

export type ProjectDetailsProps = {
  repoLink: string;
  liveDemo: string | null;
  name: string;
  images: ProjectImage[],
};

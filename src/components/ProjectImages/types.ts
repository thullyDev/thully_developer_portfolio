export type ProjectImage = {
  id: number;
  url: string;
  altText: string;
};

export type ProjectImagesProps = {
  images: ProjectImage[];
};

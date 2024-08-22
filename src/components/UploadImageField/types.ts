import type { Dispatch, SetStateAction } from "react";

export type UploadImageFieldProps = {
  index: number;
  id: number;
  imageUrl: string;
  altText: string;
  setPrevImages: Dispatch<SetStateAction<string[]>>;
};

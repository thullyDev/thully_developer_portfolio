export type ImageInput = {
  name: string;
  value: string;
  width?: string;
  height?: string;
};

export type ImageInputsProps = {
  inputs: ImageInput[];
};

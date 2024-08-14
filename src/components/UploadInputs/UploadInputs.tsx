import { Keywords } from "../Keywords/Keywords";
import { Tags } from "../Tags/Tags";
import type { TextFieldProps } from "../TextField/types";
import { UploadImages } from "../UploadImages/UploadImages";
import { UploadTextInputs } from "../UploadTextInputs/UploadTextInputs";
import type { UploadInputsProps } from "./types";

// 	keywords, langs (checkboxs)

export function UploadInputs({
  name,
  shortDesc,
  images,
  repoLink,
  demoLink,
  keywords,
  langs,
  langsAndDBs,
}: UploadInputsProps) {
  const textInputs: TextFieldProps[] = [
    { value: name ?? "", name: "name" },
    { value: repoLink ?? "", name: "repo_link" },
    {
      value: demoLink ?? "",
      name: "demo_link",
    },
    {
      value: shortDesc ?? "",
      name: "description",
    },
  ];

  return (
    <div className="upload-inputs-con">
      <div className="inner-con flex flex-col gap-5">
        <UploadTextInputs textInputs={textInputs} />
        <div className="keywords-tags-con flex flex-col items-center justify-center gap-5">
          <Keywords keywords={keywords} />
          <Tags tags={langsAndDBs} selectedTags={langs} />
        </div>
        <UploadImages images={images} />
        <div className="submit-con flex justify-center">
          <button
            type="button"
            className="submit-btn w-20 rounded bg-pink-500 py-1 text-sm"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

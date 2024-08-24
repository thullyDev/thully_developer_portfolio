import { uploadProject } from "../../services/clientRequests";
import { ShowAlert, showCloseEle } from "../../utilities/misc";
import { UploadImages } from "../UploadImages/UploadImages";
import type { UploadInputsProps } from "./types";

declare const window: Window & typeof globalThis & {
  images: string[];
}

export function UploadInputs({
  repo_slug,
  images,
}: UploadInputsProps) {

  const onClickHandler = async () => {
    const element=".outer-loader-con"
    const animate="fade"

    showCloseEle({ element, animate })
    let response = false
    const urlChunks = window.location.pathname.split("/")

    if (urlChunks[1] == "upload") {
      response = await uploadProject(window.images, repo_slug)
    }

    if (urlChunks[1] == "edit") {
      response = await uploadProject(window.images, repo_slug, true)
    }

    showCloseEle({ element, animate })

    if (response == true) {
      ShowAlert("updated")
      window.location.replace(`/project/${repo_slug}`)
    } else {
      ShowAlert("failed")
    }
  }

  return (
    <div className="upload-inputs-con">
      <div className="inner-con flex flex-col gap-5">
        <UploadImages repoSlug={repo_slug} images={images} />
        <div className="submit-con flex justify-center">
          <button
            type="button"
            onClick={onClickHandler}
            className="submit-btn w-20 rounded bg-pink-500 py-1 text-sm"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

import { updateSiteData } from "../../services/clientRequests";
import { formatText, ShowAlert } from "../../utilities/misc";
import type { TextFieldProps } from "./types";
import $ from "jquery";

export function TextField({ value, name }: TextFieldProps) {
  return (
    <div className="text-field-con w-full">
      <div className="inner-con flex flex-col gap-2 text-gray-300">
        <span className="label text-center text-sm font-bold">
          {formatText(name)}
        </span>
        <span className="field-con flex justify-center">
          <textarea
            onChange={onChangeHandler}
            className="textfield flex w-full items-center rounded-sm border border-gray-600 bg-gray-800 p-1 text-sm outline-none"
            defaultValue={value}
            data-name={name}
            name={name}
            id={name}
          ></textarea>
        </span>
      </div>
    </div>
  );
}

let inputTimeout: number | undefined;
const delay = 2000;
declare const window: Window &
  typeof globalThis & {
    userInputNames: string[];
    socialInputNames: string[];
    imageInputNames: string[];
    siteData: any;
  };

function onChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
  const $eventElement = $(event.currentTarget);
  const name = $eventElement.data("name");
  const value = $eventElement.val() || "";

  const saveInputValue = async () => {
    if (window.userInputNames.includes(name)) {
      window.siteData.user[name] = value;
    }

    if (window.socialInputNames.includes(name)) {
      window.siteData.socials[name] = value;
    }

    const result = await updateSiteData(window.siteData);

    if (result == true) ShowAlert("updated");
    else ShowAlert("failed");
  };

  if (inputTimeout != undefined) clearTimeout(inputTimeout);
  inputTimeout = setTimeout(saveInputValue, delay);
}

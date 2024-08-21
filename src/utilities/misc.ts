import DOMPurify from "dompurify";
import type { PaginateItems, PaginateItemsResponse } from "./types";
import $ from "jquery";
export const trans1000 = "transition duration-1000 ease-in-out";
export const trans500 = "transition duration-500 ease-in-out";

export function paginateItems({
  data,
  page,
  limit,
}: PaginateItems): PaginateItemsResponse {
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = data.slice(start, end);
  const pagination = {
    pages: Math.ceil(data.length / limit),
    page: page,
  };

  return { items, pagination };
}

export const titleCase = (str: string) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
    return firstLetter.toUpperCase();
  });
};

export const formatText = (key: string) =>
  key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

export const truncate = (input: string, length: number) => {
  if (input.length > length) {
    return input.substring(0, length) + "...";
  }
  return input;
};

export const showCloseEle = (event: React.MouseEvent<HTMLButtonElement>) => {
  const $eventElement = $(event.currentTarget);
  const elementSelector = $eventElement.data("element");
  const animateType = $eventElement.data("animate");
  const $targetElement = $(elementSelector);
  const isOpen = $targetElement.data("open");

  if (animateType === "fade") {
    if (isOpen) {
      $targetElement.fadeOut().data("open", false);
    } else {
      $targetElement.fadeIn().data("open", true);
    }
  } else {
    if (isOpen) {
      $targetElement.slideUp().data("open", false);
    } else {
      $targetElement.slideDown().data("open", true);
    }
  }
};

export const ShowAlert = (rawMessage: string, noTitle: boolean = false) => {
  const message = DOMPurify.sanitize(rawMessage);
  const alertbox = document.querySelector(".alertbox");
  const msgEle = document.querySelector(".alertbox .msg");

  if (!msgEle || !alertbox) return;

  // @ts-ignore
  msgEle.textContent = noTitle == true ? message : titleCase(message);
  // @ts-ignore
  alertbox.style.display = "block";
  const fiveSecs = 5000;
  setTimeout(() => {
    msgEle.textContent = "";
    // @ts-ignore
    alertbox.style.display = "none";
  }, fiveSecs);
};


export function processImage(image: string, name: string): [string, string] {
    const currentTime = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-');
    const newName = `${name}-${currentTime}`;
    const cleanImage = image.replace(/^data:image\/jpeg;base64,/, "").replace(/^data:image\/png;base64,/, "");
    
    return [newName, cleanImage];
}
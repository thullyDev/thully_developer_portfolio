import type { PaginateItems, PaginateItemsResponse } from "./types";

export const trans1000 = "transition duration-1000 ease-in-out";
export const trans500 = "transition duration-500 ease-in-out";

export function paginateItems<T>({
  data,
  page,
  limit,
}: PaginateItems<T>): PaginateItemsResponse<T> {
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = data.slice(start, end);
  const pagination = {
    pages: data.length / limit,
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

export type PaginateItems<T> = { data: T[]; page: number; limit: number };

export type PaginateItemsResponse<T> = {
  items: T[];
  pagination: {
    page: number;
    pages: number;
  };
};

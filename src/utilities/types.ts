export type PaginateItems = { data: any[]; page: number; limit: number };

export type PaginateItemsResponse = {
  items: any[];
  pagination: {
    page: number;
    pages: number;
  };
};

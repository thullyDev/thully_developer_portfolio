import type { PaginateItems, PaginateItemsResponse } from "./types";

export function paginateItems<T>({ data, page, limit }: PaginateItems<T>): PaginateItemsResponse<T> {
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = data.slice(start, end);
    const pagination = {
        pages: (data.length / limit),
        page: page,
    };
    
    return { items, pagination };
}

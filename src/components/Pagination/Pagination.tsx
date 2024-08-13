import { trans1000 } from "../../utilities/misc";
import type { PaginationProps } from "./types";

export function Pagination({ pages, page }: PaginationProps) {
  return (
    <div className="pagination mt-5">
      <div className="inner-con flex items-center justify-center gap-20">
        <button
          type="button"
          className={`pagination-btn flex w-32 items-center justify-between rounded-full bg-pink-500 px-5 py-1 text-sm hover:bg-gray-500 ${trans1000}`}
        >
          <i className="fas fa-chevron-left"></i> previous
        </button>
        <span className="page flex h-7 rounded border border-gray-500 text-base">
          <input
            type="number"
            placeholder={JSON.stringify(page)}
            className="page-inp h-full w-10 rounded-l bg-gray-700 text-center text-sm text-white"
          />
          <button
            type="button"
            className={`h-full w-10 rounded-r bg-gray-800 text-sm text-white hover:bg-pink-500 ${trans1000}`}
          >
            go
          </button>
        </span>
        <button
          type="button"
          className={`pagination-btn flex w-32 items-center justify-between rounded-full bg-pink-500 px-5 py-1 text-sm hover:bg-gray-500 ${trans1000}`}
        >
          next <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

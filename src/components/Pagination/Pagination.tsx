import { trans1000 } from "../../utilities/misc";
import type { PaginationProps } from "./types";

export function Pagination({ pages, page }: PaginationProps) {
  return (
    <div className="pagination mt-5">
      <div className="inner-con flex justify-center items-center gap-20">
        <button type="button" className={ `pagination-btn rounded-full flex items-center justify-between w-32 text-sm bg-pink-500 hover:bg-gray-500 px-5 py-1 ${trans1000}` }>
          <i className="fas fa-chevron-left"></i> previous
        </button>
        <span className="page text-base flex h-7 border border-gray-500 rounded">
          <input type="number" placeholder={JSON.stringify(page)} className="page-inp w-10 text-center rounded-l bg-gray-700 text-white text-sm h-full" />
          <button type="button" className={ `text-white bg-gray-800 w-10 rounded-r text-sm h-full hover:bg-pink-500 ${trans1000}` }>go</button>
        </span>
        <button type="button" className={ `pagination-btn rounded-full flex items-center justify-between w-32 text-sm bg-pink-500 hover:bg-gray-500 px-5 py-1 ${trans1000}` }>
          next <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

import { trans1000 } from "../../utilities/misc";
import { PagerInput } from "../PagerInput/PagerInput";
import type { PaginationProps } from "./types";

export function Pagination({ pages, page }: PaginationProps) {
  const prevPage = page == 1 ? 1 : page - 1;
  const nextPage = pages <= page ? pages : page + 1;

  return (
    <div className="pagination mt-5">
      <div className="inner-con flex items-center justify-center gap-20">
        <a
          href={`/projects?page=${prevPage}`}
          className={`pagination-btn flex w-32 items-center justify-between rounded-full bg-pink-500 px-5 py-1 text-sm hover:bg-gray-500 ${trans1000}`}
        >
          <i className="fas fa-chevron-left"></i> previous
        </a>
        <PagerInput page={JSON.stringify(page)} />
        <a
          href={`/projects?page=${nextPage}`}
          className={`pagination-btn flex w-32 items-center justify-between rounded-full bg-pink-500 px-5 py-1 text-sm hover:bg-gray-500 ${trans1000}`}
        >
          next <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

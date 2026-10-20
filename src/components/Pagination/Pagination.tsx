import { trans1000 } from "../../utilities/misc";
import { PagerInput } from "../PagerInput/PagerInput";
import type { PaginationProps } from "./types";

function pagePath(page: number): string {
  return `/projects/${page}`;
}

export function Pagination({ pages, page }: PaginationProps) {
  const prevPage = page <= 1 ? 1 : page - 1;
  const nextPage = page >= pages ? pages : page + 1;
  const atFirst = page <= 1;
  const atLast = page >= pages;

  return (
    <div className="pagination mt-5">
      <div className="inner-con flex items-center justify-center gap-20">
        {atFirst ? (
          <span
            className={`pagination-btn flex w-32 cursor-not-allowed items-center justify-between rounded-full bg-gray-700 px-5 py-1 text-sm text-gray-400 ${trans1000}`}
          >
            <i className="fas fa-chevron-left"></i> previous
          </span>
        ) : (
          <a
            href={pagePath(prevPage)}
            className={`pagination-btn flex w-32 items-center justify-between rounded-full bg-pink-500 px-5 py-1 text-sm hover:bg-gray-500 ${trans1000}`}
          >
            <i className="fas fa-chevron-left"></i> previous
          </a>
        )}
        <PagerInput page={JSON.stringify(page)} maxPage={pages} />
        {atLast ? (
          <span
            className={`pagination-btn flex w-32 cursor-not-allowed items-center justify-between rounded-full bg-gray-700 px-5 py-1 text-sm text-gray-400 ${trans1000}`}
          >
            next <i className="fas fa-chevron-right"></i>
          </span>
        ) : (
          <a
            href={pagePath(nextPage)}
            className={`pagination-btn flex w-32 items-center justify-between rounded-full bg-pink-500 px-5 py-1 text-sm hover:bg-gray-500 ${trans1000}`}
          >
            next <i className="fas fa-chevron-right"></i>
          </a>
        )}
      </div>
    </div>
  );
}

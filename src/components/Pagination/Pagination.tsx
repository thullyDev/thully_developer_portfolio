import type { PaginationProps } from "./types";

export function Pagination({ pages, page }: PaginationProps) {
  return (
    <div className="pagination">
      <div className="inner-con">
        <button type="button" className="pagination-btn">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button type="button" className="pagination-btn">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}

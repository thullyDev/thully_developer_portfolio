import { useState } from "react";
import type { PagerInputProps } from "./types";
import { trans1000 } from "../../utilities/misc";
import "./styles.scss";

export function PagerInput({ page, maxPage }: PagerInputProps) {
  const [queryPage, setQueryPage] = useState(page);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryPage(event.target.value);
  };

  const onClickHandler = () => {
    const parsed = parseInt(queryPage, 10);
    if (!parsed || parsed < 1) {
      window.location.assign("/projects/1");
      return;
    }
    const clamped = Math.min(parsed, maxPage);
    window.location.assign(`/projects/${clamped}`);
  };

  return (
    <span className="page flex h-7 rounded border border-gray-500 text-base">
      <input
        type="number"
        onChange={onChangeHandler}
        value={queryPage}
        placeholder={page}
        min="1"
        max={maxPage}
        className="page-inp h-full w-10 rounded-l bg-gray-700 text-center text-sm text-white outline-none"
      />
      <button
        type="button"
        onClick={onClickHandler}
        className={`h-full w-10 rounded-r bg-gray-800 text-sm text-white hover:bg-pink-500 ${trans1000}`}
      >
        Go
      </button>
    </span>
  );
}

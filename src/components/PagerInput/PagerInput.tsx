import { useState } from "react";
import type { PagerInputProps } from "./types";
import { trans1000 } from "../../utilities/misc";
import "./styles.scss";

export function PagerInput({ page }: PagerInputProps) {
  const [queryPage, setQueryPage] = useState(page);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryPage(event.target.value);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.location.assign(`/projects?page=${queryPage}`);
  };

  return (
    <span className="page flex h-7 rounded border border-gray-500 text-base">
      <input
        type="number"
        onChange={onChangeHandler}
        value={queryPage}
        placeholder={page}
        min="1"
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

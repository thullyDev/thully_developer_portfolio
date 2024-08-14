import { Icon } from "../Icon/Icon";
import type { KeywordBoxProps } from "./types";

export function KeywordBox({ value, id }: KeywordBoxProps) {
  return (
    <div
      data-id={id}
      className="keyword-box flex h-7 min-w-24 items-center justify-around pl-1 text-xs text-gray-400"
    >
      <span className="text-con flex h-full w-full items-center justify-center rounded-l bg-gray-700">
        {value}
      </span>
      <button
        type="button"
        data-id={id}
        className="remove-btn h-full w-7 rounded-r bg-gray-600"
      >
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

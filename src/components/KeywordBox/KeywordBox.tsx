import { Icon } from "../Icon/Icon";
import type { KeywordBoxProps } from "./types";

export function KeywordBox({ value, id }: KeywordBoxProps) {
  return (
    <div data-id={id} className="keyword-box pl-1 flex justify-around items-center min-w-24 text-xs text-gray-400 h-7">
      <span className="text-con rounded-l bg-gray-700 w-full h-full flex justify-center items-center">{value}</span>
      <button type="button" data-id={id} className="remove-btn bg-gray-600 h-full w-7 rounded-r">
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

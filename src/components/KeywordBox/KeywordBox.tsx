import { Icon } from "../Icon/Icon";
import type { KeywordBoxProps } from "./types";

export function KeywordBox({ value, id }: KeywordBoxProps) {
  return (
    <div data-id={id} className="keyword-box">
      <span className="text-con">{value}</span>
      <button type="button" data-id={id} className="remove-btn">
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

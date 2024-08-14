import { Icon } from "../Icon/Icon";
import type { TagBoxProps } from "./types";

export function TagBox({ name, icon, slug }: TagBoxProps) {
  return (
    <div className="tag-box flex h-7 min-w-24 items-center justify-around gap-1 rounded bg-gray-700 pl-1 text-xs text-gray-400">
      <span className="icon-name flex h-full w-full items-center justify-center gap-2 bg-gray-700">
        <span className="icon">
          <Icon icon={icon} />
        </span>
        <span className="name">{name}</span>
      </span>
      <button
        data-id={slug}
        type="button"
        className="remove-btn h-full w-7 rounded-r bg-gray-600"
      >
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

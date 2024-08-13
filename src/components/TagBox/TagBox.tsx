import { Icon } from "../Icon/Icon";
import type { TagBoxProps } from "./types";

export function TagBox({ name, icon, slug }: TagBoxProps) {
  return (
    <div className="tag-box pl-1 flex justify-around items-center min-w-24 text-xs gap-1 rounded bg-gray-700 text-gray-400 h-7">
      <span className="icon-name bg-gray-700 w-full h-full flex justify-center items-center gap-2">
        <span className="icon">
          <Icon icon={icon} />
        </span>
        <span className="name ">{name}</span>
      </span> 
      <button data-id={slug} type="button" className="remove-btn bg-gray-600 h-full w-7 rounded-r">
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

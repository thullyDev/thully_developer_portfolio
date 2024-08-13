import { Icon } from "../Icon/Icon";
import type { TagBoxProps } from "./types";

export function TagBox({ name, icon, slug }: TagBoxProps) {
  return (
    <div className="tag-box">
      <span className="icon">
        <Icon icon={icon} />
      </span>
      <span className="name">{name}</span>
      <button data-id={slug} type="button" className="remove-btn">
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

import { CheckBox } from "../CheckBox/CheckBox";
import { Icon } from "../Icon/Icon";
import type { FilterBoxProps } from "./types";

export function FilterBox({ tags, checkedBoxes = {} }: FilterBoxProps) {
  const style = {
    width: "135px",
  };
  return (
    <div className="filter-box relative hidden">
      <div className="layer-1 absolute top-3">
        <div className="checkboxes rounded border border-gray-600 bg-gray-800 p-1">
          <ul className="checkbox-list scrollable scrollable-nobg flex h-96 flex-wrap justify-center overflow-auto p-4">
            {tags.map(({ slug, icon, name }, index) => {
              const checked = !checkedBoxes[slug] ? false : true;
              return (
                <li className="checkbox-item mb-2">
                  <div
                    key={index}
                    className="outer-checkbox flex flex-row-reverse justify-end gap-2 text-xs text-gray-400"
                    style={style}
                  >
                    <span className="checkbox-label">
                      <Icon icon={icon} /> {name}
                    </span>
                    <CheckBox id={slug} checked={checked} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

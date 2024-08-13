import { CheckBox } from "../CheckBox/CheckBox";
import { Icon } from "../Icon/Icon";
import type { FilterBoxProps } from "./types";

export function FilterBox({ tags, checkedBoxes }: FilterBoxProps) {
  const style = {
    width: "135px",
  }
  return (
    <div className="filter-box relative hidden">
      <div className="layer-1 absolute top-3">
        <div className="checkboxes bg-gray-800 border p-1 border-gray-600 rounded ">
          <ul className="checkbox-list flex flex-wrap justify-center p-4 h-96 overflow-auto scrollable scrollable-nobg">
            {tags.map(({ slug, icon, name }, index) => {
              const checked = !checkedBoxes[slug] ? false : true;
              return (
                <li className="checkbox-item mb-2">
                  <div key={index} className="outer-checkbox text-xs flex gap-2 flex-row-reverse justify-end text-gray-400" style={style}>
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

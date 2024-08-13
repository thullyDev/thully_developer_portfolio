import { CheckBox } from "../CheckBox/CheckBox";
import { Icon } from "../Icon/Icon";
import { TagBox } from "../TagBox/TagBox";
import type { TagsProps } from "./types";

export function Tags({ selectedTags, tags }: TagsProps) {
  return (
    <div className="tags-con">
      <span className="label text-center text-sm font-bold block mb-2">
        Tags
      </span>
      <div className="inner-con">
        <div className="tag-boxes min-h-12 p-1 bg-gray-800 border border-gray-600 rounded-sm flex flex-wrap text-sm gap-2">
          {selectedTags.map((item, index) => {
            return <TagBox key={index} {...item} />;
          })}
        </div>
        <div className="checkboxes">
          <ul className="checkboxes-list flex flex-wrap gap-2 justify-center my-5 h-96 overflow-auto scrollable scrollable-nobg border border-gray-500 rounded py-2">
            {tags.map(({ slug, icon, name }, index) => {
              return (
                <li className="checkbox-item">
                  <div
                    key={index}
                    className="outer-checkbox flex w-36 flex-row-reverse justify-end gap-2 text-sm text-gray-400"
                  >
                    <span className="checkbox-label">
                      <Icon icon={icon} /> {name}
                    </span>
                    <CheckBox id={slug} checked={false} />
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

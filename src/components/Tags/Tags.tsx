import { CheckBox } from "../CheckBox/CheckBox";
import { Icon } from "../Icon/Icon";
import { TagBox } from "../TagBox/TagBox";
import type { TagsProps } from "./types";

export function Tags({ selectedTags, tags }: TagsProps) {
  return (
    <div className="tags-con">
      <span className="label mb-2 block text-center text-sm font-bold">
        Tags
      </span>
      <div className="inner-con">
        <div className="tag-boxes flex min-h-12 flex-wrap gap-2 rounded-sm border border-gray-600 bg-gray-800 p-1 text-sm">
          {selectedTags.map((item, index) => {
            return <TagBox key={index} {...item} />;
          })}
        </div>
        <div className="checkboxes">
          <ul className="checkboxes-list scrollable scrollable-nobg my-5 flex h-96 flex-wrap justify-center gap-2 overflow-auto rounded border border-gray-500 py-2">
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

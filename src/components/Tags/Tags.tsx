import { CheckBox } from "../CheckBox/CheckBox";
import { Icon } from "../Icon/Icon";
import { TagBox } from "../TagBox/TagBox";
import type { TagsProps } from "./types";

export function Tags({ selectedTags, tags }: TagsProps) {
  return (
    <div className="tags-con">
      <div className="inner-con">
        <div className="tag-boxes">
          {selectedTags.map((item, index) => {
            return <TagBox key={index} {...item} />;
          })}
        </div>
        <div className="checkboxes">
          {tags.map(({ slug, icon, name }, index) => {
            return (
              <div key={index} className="outer-checkbox">
                <span className="checkbox-label">
                  <Icon icon={icon} /> {name}
                </span>
                <CheckBox id={slug} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { titleCase } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { InputProps } from "./types";

export const AuthInput = ({ item }: InputProps) => {
  const { label, input, icon } = item;

  return (
    <div className="input-con">
      <div className="inner-con">
        <div className="icon-con">
          <Icon icon={icon} />
        </div>
        <input
          type={input}
          placeholder={titleCase(label)}
        />
      </div>
    </div>
  );
};
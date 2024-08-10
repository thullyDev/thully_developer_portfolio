import { titleCase } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { InputProps } from "./types";

export const AuthInput = ({ item }: InputProps) => {
  const { name, type, icon } = item;

  return (
    <div className="input-con">
      <div className="inner-con">
        <div className="icon-con">
          <Icon icon={icon} />
        </div>
        <input
          className="auth-input"
          type={type}
          name={name}
          data-name={name}
          placeholder={titleCase(name)}
        />
      </div>
    </div>
  );
};

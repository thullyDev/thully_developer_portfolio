import { titleCase } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { InputProps } from "./types";

export const AuthInput = ({ item }: InputProps) => {
  const { name, type, icon } = item;

  return (
    <div className="input-con">
      <div className="inner-con flex items-center gap-3 rounded-sm border border-gray-400 bg-gray-700 p-1 text-gray-400">
        <Icon icon={icon + " text-xs"} />
        <input
          className="auth-input w-full max-w-96 bg-inherit"
          type={type}
          name={name}
          data-name={name}
          placeholder={titleCase(name)}
        />
      </div>
    </div>
  );
};

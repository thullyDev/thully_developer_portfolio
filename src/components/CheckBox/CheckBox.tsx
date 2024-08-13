import { trans500 } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { CheckBoxProps } from "./types";
import "./styles.scss"

export function CheckBox({ id, checked = false }: CheckBoxProps) {
  const input =
    checked == true ? (
      <input checked type="checkbox" id={id} className="checkbox-inp hidden" />
    ) : (
      <input type="checkbox" id={id} className="checkbox-inp hidden" />
    );

  return (
    <div className="checkbox">
      {input}
      <label htmlFor={id} className="inline-block cursor-pointer">
        <div className="outer-box border border-gray-500 w-4 h-4 rounded-sm flex justify-center items-center">
          <span className={`mark opacity-0 hover:opacity-100 ${trans500}`}>
            <Icon icon="fa fa-check" />
          </span>
        </div>
      </label>
    </div>
  );
}

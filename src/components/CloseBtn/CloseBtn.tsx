import { showCloseEle } from "../../utilities/misc";
import { Icon } from "../Icon/Icon";
import type { CloseBtnProps } from "./types";

export function CloseBtn({ element, animate }: CloseBtnProps) {
  return (
    <div className="close-con flex justify-end text-sm">
      <button
        className="close-btn"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => showCloseEle({event})}
        data-element={element}
        data-animate={animate}
      >
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

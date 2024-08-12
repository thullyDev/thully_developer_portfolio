import { Icon } from "../Icon/Icon";

export function CloseBtn() {
  return (
    <div className="close-con flex justify-end text-sm">
      <button className="close-btn">
        <Icon icon="fa-solid fa-x" />
      </button>
    </div>
  );
}

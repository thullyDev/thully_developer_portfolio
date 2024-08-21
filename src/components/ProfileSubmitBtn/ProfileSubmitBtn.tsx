import { trans500 } from "../../utilities/misc";

export function ProfileSubmitBtn() {
  return (
    <div className="profile-submit-btn-con my-5 flex justify-center">
      <button
        className={`submit-btn h-10 w-20 rounded bg-pink-500 text-sm hover:bg-gray-600 ${trans500}`}
      >
        submit
      </button>
    </div>
  );
}

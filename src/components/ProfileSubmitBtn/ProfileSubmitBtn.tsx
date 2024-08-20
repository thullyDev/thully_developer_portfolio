import { trans500 } from "../../utilities/misc";

export function ProfileSubmitBtn() {
	return (
		<div className="profile-submit-btn-con my-5 flex justify-center">
			<button className={`submit-btn bg-pink-500 hover:bg-gray-600 w-20 h-10 rounded text-sm ${trans500}`}>
				submit
			</button>
		</div>
	)
} 
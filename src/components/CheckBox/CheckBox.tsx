import type { CheckBoxProps } from "./types";

export function CheckBox({ id }: CheckBoxProps) {
	return (
		<div className="checkbox">
			<label htmlFor={id}>
				<div className="outer-box">
					<span className="mark"></span>
				</div>
			</label>
			<input type="checkbox" id={id} className="checkbox-inp" />
		</div>
	)
}
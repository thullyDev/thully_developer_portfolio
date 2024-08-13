import type { CheckBoxProps } from "./types";

export function CheckBox({ id, checked = false }: CheckBoxProps) {
	const input = ( checked == true 
		? <input checked type="checkbox" id={id} className="checkbox-inp" />
		: <input type="checkbox" id={id} className="checkbox-inp" /> 
	)

	return (
		<div className="checkbox">
			<label htmlFor={id}>
				<div className="outer-box">
					<span className="mark"></span>
				</div>
			</label>
			{input}
		</div>
	)
}
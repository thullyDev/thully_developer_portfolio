import { TextField } from "../TextField/TextField";
import type { UserInputsProps } from "./types";

export function UserInputs({ inputs }: UserInputsProps) {
	return (
		<div className="user-inps-con">
			<span>
				<h2 className="label">User Info</h2>
			</span>
			<div className="inner-user-inps-con">
				<form action="POST" className="user-form">
					{
						inputs.map((item, index) => <TextField key={index} {...item} />)	
					}
				</form>
			</div>
		</div>
	)
}


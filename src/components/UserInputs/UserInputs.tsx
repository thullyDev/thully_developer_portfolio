import { TextField } from "../TextField/TextField";
import type { UserInputsProps } from "./types";

export function UserInputs({ inputs }: UserInputsProps) {
	return (
		<div className="user-inputs">
			<form action="POST" className="user-form">
				{
					inputs.map((item, index) => <TextField key={index} {...item} />)	
				}
			</form>
		</div>
	)
}


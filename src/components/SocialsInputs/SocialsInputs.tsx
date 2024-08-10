import { TextField } from "../TextField/TextField";
import type { SocialInputsProps } from "./types";

export function SocialsInputs({ inputs }: SocialInputsProps) {
	return (
		<div className="social-inps-con">
			<span>
				<h2 className="label">Socials</h2>
			</span>
			<div className="inner-social-inps-con">
				<form action="POST" className="social-form">
					{
						inputs.map((item, index) => <TextField key={index} {...item} />)	
					}
				</form>
			</div>
		</div>
	)
}


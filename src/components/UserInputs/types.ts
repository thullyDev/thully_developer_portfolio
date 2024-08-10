export type UserInput = {
	name: string;
	value: string;
	width?: string;
	height?: string;
}

export type UserInputsProps = {
	inputs: UserInput[];
}
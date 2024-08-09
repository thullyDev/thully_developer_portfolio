import type { IconProps } from "./types";

export function Icon({ icon }: IconProps) {
	return (
		<i className={icon} aria-hidden="true"></i>
	)
}
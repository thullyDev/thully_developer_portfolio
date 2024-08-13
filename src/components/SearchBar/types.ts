import type { Tag } from "../Tags/types";

export type SearchBarProps = {
	tags: Tag[];
	checkedBoxes: Record<string, string>;
}
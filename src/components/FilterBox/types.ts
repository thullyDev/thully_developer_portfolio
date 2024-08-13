import type { Tag } from "../Tags/types";

export type FilterBoxProps = {
	tags: Tag[];
	checkedBoxes: Record<string, string>;
}


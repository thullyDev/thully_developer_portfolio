export type TagsProps = {
	selectedTags: Tag[], 
	tags: FullTag[], 
}

export type Tag = {
	name: string;
	icon: string;
} 

export type FullTag = {
	slug: string;
}
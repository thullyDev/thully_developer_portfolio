export type Project = {
	name: string;
	slug: string;
	mainLang: string;
	desc: string;
	image_url: string;
}

export type ProjectsProps = {
	projects: Project[];
}
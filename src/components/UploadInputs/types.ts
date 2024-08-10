export type UploadInputsProps = {
	name?: string;
	shortDesc?: string;
	images: UploadImage[];
	repoLink?: string;
	demoLink?: string;
	keywords: string[];
	langs: lang[];
	langsAndDBs: LangsAndDBs[]
}

export type UploadImage = {
	id: number;
	url: string;
	altText: string;
}

export type lang = {
	name: string;
	icon: string;
}

export type LangsAndDBs = {
	slug: string;
} & lang
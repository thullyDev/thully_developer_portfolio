// name, shortDesc, repoLink, demoLink, keywords, langs 


export type UploadInputsProps = {
	name?: string;
	shortDesc?: string;
	repoLink?: string;
	demoLink?: string;
	keywords: string[];
	langs: lang[];
	langsAndDBs: LangsAndDB[]
}

export type lang = {
	name: string;
	icon: string;
}

export type LangsAndDB = {
	slug: string;
} & lang
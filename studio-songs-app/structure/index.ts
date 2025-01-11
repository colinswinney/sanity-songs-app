import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
	S.list()
		.id('root')
		.title('Content')
		.items([
			S.divider(),
			S.documentTypeListItem('song').title('Songs'),
			S.divider(),
			S.documentTypeListItem('artist').title('Artists'),
			S.divider(),
		])

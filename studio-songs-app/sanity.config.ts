import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// const { theme } = (await import(
//   // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
//   'https://themer.sanity.build/api/hues?primary=663399'
// )) as {theme: import('sanity').StudioTheme}

export default defineConfig({
	name: 'default',
	title: 'Songs App',

	projectId: 'llxgttbw',
	dataset: 'production',

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},

	// theme,
})

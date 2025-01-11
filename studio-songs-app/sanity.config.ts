import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import {structure} from "./structure"

export default defineConfig({
	name: 'default',
	title: 'Songs App',

	projectId: 'llxgttbw',
	dataset: 'production',

	plugins: [structureTool({defaultDocumentNode, structure}), visionTool()],

	schema: {
		types: schemaTypes,
	},
})

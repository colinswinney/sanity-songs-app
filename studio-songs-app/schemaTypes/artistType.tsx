import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const artistType = defineType({
	name: 'artist',
	title: 'Artist',
	type: 'document',
	icon: UsersIcon,
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {source: 'title'},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'image',
			type: 'image',
		}),
	],
})

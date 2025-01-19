import { defineField, defineType } from 'sanity'
import { ControlsIcon } from '@sanity/icons'
import {
	PiNumberOneBold,
	PiNumberTwoBold,
	PiNumberThreeBold,
	PiNumberFourBold,
	PiNumberFiveBold,
	PiNumberSixBold,
	PiNumberSevenBold,
	PiNumberZeroBold,
} from 'react-icons/pi'

import { getDisplayFlatSharp } from "../helpers";

export const noteType = defineType({
	name: 'note',
	title: 'Note',
	type: 'string',
	initialValue: '1',
	options: {
		list: [
			{title: '1', value: '1'},
			{title: '2', value: '2'},
			{title: '3', value: '3'},
			{title: '4', value: '4'},
			{title: '5', value: '5'},
			{title: '6', value: '6'},
			{title: '7', value: '7'},
			{title: '-', value: '-'},
		],
	},
});

export const flatSharpType = defineType({
	name: 'flatSharp',
	title: 'Flat / Sharp',
	type: 'string',
	initialValue: '',
	options: {
		list: [
			{title: '', value: ''},
			{title: 'Flat', value: 'flat'},
			{title: 'Sharp', value: 'sharp'},
			{title: 'Double Flat', value: 'doubleFlat'},
			{title: 'Double Sharp', value: 'doubleSharp'},
		],
	},
});

export const modifierType = defineType({
	name: 'modifier',
	title: 'Modifier',
	type: 'string',
	initialValue: '',
	options: {
		list: [
			{title: '', value: ''},
			{title: 'M', value: 'major'},
			{title: '6', value: 'major-six'},
			{title: '6/9', value: 'major-six-nine'},
			{title: 'Δ', value: 'major-seven'},
			{title: 'Maj9', value: 'major-nine'},
			{title: 'Maj11', value: 'major-eleven'},
			{title: 'Maj13', value: 'major-thirteen'},
			{title: 'sus2', value: 'suspended-two'},
			{title: 'sus4', value: 'suspended-four'},
			{title: 'm', value: 'minor'},
			{title: 'm6', value: 'minor-six'},
			{title: 'm7', value: 'minor-seven'},
			{title: 'm9', value: 'minor-nine'},
			{title: 'm11', value: 'minor-eleven'},
			{title: 'm13', value: 'minor-thirteen'},
			{title: 'mΔ', value: 'minor-major-seven'},
			{title: '7', value: 'dominant-seven'},
			{title: '9', value: 'dominant-nine'},
			{title: '13', value: 'dominant-thirteen'},
			{title: '7#11', value: 'dominant-seven-sharp-eleven'},
			{title: '+', value: 'augmented'},
			{title: '°', value: 'diminished'},
			{title: 'ø', value: 'half-diminished'},
		],
	},
})

export const chordType = defineType({
	type: 'object',
	name: 'chord',
	fields: [
		{
			type: 'note',
			name: 'note',
		},
		{
			type: 'flatSharp',
			name: 'flatSharp',
		},
		{
			type: 'modifier',
			name: 'modifier',
		},
		{
			type: 'boolean',
			name: 'hardStop',
			initialValue: false,
		},
		{
			type: 'boolean',
			name: 'splitChord',
			initialValue: false,
		},
		{
			name: 'splitNote',
			type: 'note',
			hidden: ({parent}) => !parent.splitChord,
		},
		{
			name: 'splitFlatSharp',
			type: 'flatSharp',
			hidden: ({parent}) => !parent.splitChord,
		},
		{
			name: 'splitModifier',
			type: 'modifier',
			hidden: ({parent}) => !parent.splitChord,
		},
	],
	preview: {
		select: {
			note: 'note',
			flatSharp: 'flatSharp',
			modifier: 'modifier',
			splitChord: 'splitChord',
			splitNote: 'splitNote',
			splitFlatSharp: 'splitFlatSharp',
			splitModifier: 'splitModifier',
		},
		prepare({note, flatSharp, modifier}) {
			let icon
			switch (note) {
				case '1':
					icon = PiNumberOneBold
					break
				case '2':
					icon = PiNumberTwoBold
					break
				case '3':
					icon = PiNumberThreeBold
					break
				case '4':
					icon = PiNumberFourBold
					break
				case '5':
					icon = PiNumberFiveBold
					break
				case '6':
					icon = PiNumberSixBold
					break
				case '7':
					icon = PiNumberSevenBold
					break
				case '-':
					icon = PiNumberZeroBold
					break
			}
			return {
				title: `${getDisplayFlatSharp(flatSharp)} ${modifier}`,
				media: icon,
			}
		},
	},
})

export const lineType = defineType({
	name: 'line',
	type: 'object',
	fields: [
		{
			name: 'chords',
			title: 'Chords',
			type: 'array',
			of: [
				{
					type: 'chord',
				},
			],
		},
		{
			name: 'lyrics',
			type: 'array',
			of: [{type: 'block'}],
		},
	],
	preview: {
		select: {
			chords: 'chords',
			lyrics: 'lyrics',
		},
		prepare({chords, lyrics}) {
			return {
				title: lyrics !== undefined && lyrics[0] ? lyrics[0].children[0].text : ' ',
				subtitle: chords.map((chord: { note: string, flatSharp: string, modifier: string }) => `${chord.note} ${chord.flatSharp} ${chord.modifier}`).join(' '),
			}
		},
	},
});

export const linesType = defineType({
	name: 'lines',
	type: 'array',
	of: [
		{
			type: 'line',
		},
	],
})

export const originalKeyType = defineType({
	name: 'originalKey',
	title: 'Original Key',
	type: 'string',
	initialValue: 'C',
	options: {
		list: [
			{title: 'Cb', value: 'Cb'},
			{title: 'C', value: 'C'},
			{title: 'C#', value: 'C#'},
			{title: 'Db', value: 'Db'},
			{title: 'D', value: 'D'},
			{title: 'D#', value: 'D#'},
			{title: 'Eb', value: 'Eb'},
			{title: 'E', value: 'E'},
			{title: 'E#', value: 'E#'},
			{title: 'Fb', value: 'Fb'},
			{title: 'F', value: 'F'},
			{title: 'F#', value: 'F#'},
			{title: 'Gb', value: 'Gb'},
			{title: 'G', value: 'G'},
			{title: 'G#', value: 'G#'},
			{title: 'Ab', value: 'Ab'},
			{title: 'A', value: 'A'},
			{title: 'A#', value: 'A#'},
			{title: 'Bb', value: 'Bb'},
			{title: 'B', value: 'B'},
			{title: 'B#', value: 'B#'},
		],
	},
})

export const songType = defineType({
	name: 'song',
	title: 'Song',
	type: 'document',
	icon: ControlsIcon,
	fields: [
		defineField({
			name: 'sections',
			title: 'Sections',
			type: 'array',
			of: [
				{
					name: 'section',
					type: 'object',
					fields: [
						{
							name: 'title',
							type: 'string',
							initialValue: 'verse',
							options: {
								list: [
									{title: 'Verse', value: 'verse'},
									{title: 'Pre Chorus', value: 'pre-chorus'},
									{title: 'Chorus', value: 'chorus'},
									{title: 'Bridge', value: 'bridge'},
									{title: 'Intro', value: 'intro'},
									{title: 'Outro', value: 'outro'},
									{title: 'Solo', value: 'solo'},
								],
							},
						},
						{
							name: 'lines',
							type: 'lines',
						},
						{
							name: 'description',
							type: 'array',
							of: [{type: 'block'}],
						},
					],
					preview: {
						select: {
							title: 'title',
							lines: 'lines',
						},
						prepare({title, lines}) {
							const previewTitle = title.charAt(0).toUpperCase() + title.slice(1);
							let previewLines = '';
							if (lines !== undefined && lines[0].lyrics) {
								previewLines = lines[0].lyrics[0].children[0].text;
								previewLines = previewLines.length > 20 ? previewLines.substring(0, 50) + '...' : previewLines;
							}
							return {
								title: previewTitle,
								subtitle: previewLines,
							}
						},
					},
				},
			],
		}),
		defineField({
			name: 'originalKey',
			type: 'originalKey',
		}),
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
			name: 'artists',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'artist'}],
				},
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			artist0: 'artists.0.title',
			artist1: 'artists.1.title',
			artist2: 'artists.2.title',
			artist3: 'artists.3.title',
		},
		prepare({title, artist0, artist1, artist2, artist3}) {
			let subtitle = null

			if (artist0) subtitle = artist0
			if (artist1) subtitle = `${subtitle}, ${artist1}`
			if (artist2) subtitle = `${subtitle}, ${artist2}`
			if (artist3) subtitle = `${subtitle}...`

			return {
				title,
				subtitle,
			}
		},
	},
})

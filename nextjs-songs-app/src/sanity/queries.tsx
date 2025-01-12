import { defineQuery } from "next-sanity";

export const SONG_LINK_LIST_QUERY = defineQuery(`*[
	_type == "song"
] | order(title asc) {_id, title, slug}`);

export const ARTIST_LINK_LIST_QUERY = defineQuery(`*[
	_type == "artist"
] | order(title asc) {_id, title, slug}`);

export const SONG_FULL_DISPLAY_QUERY = defineQuery(`*[
	_type == "song" &&
	slug.current == $slug
	][0]{
	...,
	title,
	originalKey,
	artists[]->{
		slug,
		title
	},
	sections
}`);

export const ARTIST_FULL_DISPLAY_QUERY = defineQuery(`*[
	_type == "artist" &&
	slug.current == $slug
	][0]{
	...,
	title,
	"songs": *[_type=='song' && references(^._id)]{ title, slug }
}`);

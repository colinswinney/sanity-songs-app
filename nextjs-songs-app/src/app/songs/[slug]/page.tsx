import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/consts";

const SONG_QUERY = defineQuery(`*[
	_type == "song" &&
	slug.current == $slug
	][0]{
	...,
	title
}`);

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: artist } = await sanityFetch({
		query: SONG_QUERY,
		params: await params,
	});

	if (!artist) {
		notFound();
	}

	const { title } = artist;

	return {
		title: title + " | " + SITE_NAME,
	};
}

export default async function SongPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: song } = await sanityFetch({
		query: SONG_QUERY,
		params: await params,
	});
	if (!song) {
		notFound();
	}
	const {
		title,
	} = song;

	return (
		<main>
			<div>
				<Link href="/">Back to songs</Link>
			</div>
			{title ? (
				<h1>{title}</h1>
			) : null}
		</main>
	);
}

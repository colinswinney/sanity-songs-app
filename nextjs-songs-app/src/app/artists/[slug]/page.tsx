import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/consts";

const ARTIST_QUERY = defineQuery(`*[
	_type == "artist" &&
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
		query: ARTIST_QUERY,
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

export default async function ArtistPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: artist } = await sanityFetch({
		query: ARTIST_QUERY,
		params: await params,
	});

	if (!artist) {
		notFound();
	}

	const { title } = artist;

	return (
		<main>
			<div>
				<Link href="/">Back to artists</Link>
			</div>
			{title ? <h1>{title}</h1> : null}
		</main>
	);
}

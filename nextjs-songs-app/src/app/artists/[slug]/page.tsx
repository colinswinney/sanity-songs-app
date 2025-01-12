import { sanityFetch } from "@/sanity/live";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/consts";
import { Slug } from "@/sanity/types";
import { ARTIST_FULL_DISPLAY_QUERY } from "@/sanity/queries";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: artist } = await sanityFetch({
		query: ARTIST_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!artist) {
		notFound();
	}

	const { title } = artist;

	console.log(artist);

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
		query: ARTIST_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!artist) {
		notFound();
	}

	const { title, songs } = artist;

	return (
		<>
			<div>
				<Link href="/artists">Back to artists</Link>
			</div>
			{title && <h1>{title}</h1>}
			{songs && (
				<ul>
					{songs.map((song: { slug: Slug | null; title: string | null}) => (
						<li key={song.slug?.current}>
							<Link href={`/songs/${song.slug?.current}`}>{song.title}</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";

const HOME_SONG_QUERY = defineQuery(`*[
	_type == "song"
] | order(title asc) {_id, title, slug}`);

const HOME_ARTIST_QUERY = defineQuery(`*[
	_type == "artist"
] | order(title asc) {_id, title, slug}`);

type Artist = {
	_id: string;
	title: string;
	slug: { current: string };
}

type Song = {
	_id: string;
	title: string;
	slug: { current: string };
}

export default async function IndexPage() {
	const { data: songs } = await sanityFetch({ query: HOME_SONG_QUERY });
	const { data: artists } = await sanityFetch({ query: HOME_ARTIST_QUERY });

	return (
		<main>
			<h1>Songs App</h1>
			<h2>Songs</h2>
			<ul>
				{songs.map((song: Song) => (
					<li key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>
							{song?.title}
						</Link>
					</li>
				))}
			</ul>
			<h2>Artists</h2>
			<ul>
				{artists.map((artist: Artist) => (
					<li key={artist._id}>
						<Link href={`/artists/${artist?.slug?.current}`}>
							{artist?.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}

import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { Slug } from "@/sanity/types";

type SongOrArtist = {
	_id: string;
	title: string | null;
	slug: Slug | null;
};

const HOMEPAGE_SONG_QUERY = defineQuery(`*[
	_type == "song"
] | order(title asc) {_id, title, slug}`);

const HOMEPAGE_ARTIST_QUERY = defineQuery(`*[
	_type == "artist"
] | order(title asc) {_id, title, slug}`);




export default async function IndexPage() {
	const { data: songs } = await sanityFetch({ query: HOMEPAGE_SONG_QUERY });
	const { data: artists } = await sanityFetch({ query: HOMEPAGE_ARTIST_QUERY });

	return (
		<>
			<h1>Songs App</h1>
			<h2>Songs</h2>
			<ul>
				{songs.map((song: SongOrArtist) => (
					<li key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>{song?.title}</Link>
					</li>
				))}
			</ul>
			<h2>Artists</h2>
			<ul>
				{artists.map((artist: SongOrArtist) => (
					<li key={artist._id}>
						<Link href={`/artists/${artist?.slug?.current}`}>
							{artist?.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

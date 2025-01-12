import Link from "next/link";
import { sanityFetch } from "@/sanity/live";
import { Artist, Song } from "@/sanity/types";
import { SONG_LINK_LIST_QUERY, ARTIST_LINK_LIST_QUERY } from "@/sanity/queries";

export default async function IndexPage() {
	const { data: songs } = (await sanityFetch({
		query: SONG_LINK_LIST_QUERY,
	})) as { data: Pick<Song, "_id" | "title" | "slug">[] };

	const { data: artists } = (await sanityFetch({
		query: ARTIST_LINK_LIST_QUERY,
	})) as { data: Pick<Artist, "_id" | "title" | "slug">[] };

	return (
		<>
			<h1>Songs App</h1>
			<h2>Songs</h2>
			<ul>
				{songs.map((song) => (
					<li key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>{song?.title}</Link>
					</li>
				))}
			</ul>
			<h2>Artists</h2>
			<ul>
				{artists.map((artist) => (
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

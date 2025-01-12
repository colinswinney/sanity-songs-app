import Link from "next/link";
import { sanityFetch } from "@/sanity/live";
import { Slug } from "@/sanity/types";
import { SONG_LINK_LIST_QUERY, ARTIST_LINK_LIST_QUERY } from "@/sanity/queries";

type SongOrArtist = {
	_id: string;
	title: string | null;
	slug: Slug | null;
};

export default async function IndexPage() {
	const { data: songs } = await sanityFetch({ query: SONG_LINK_LIST_QUERY });
	const { data: artists } = await sanityFetch({
		query: ARTIST_LINK_LIST_QUERY,
	});

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

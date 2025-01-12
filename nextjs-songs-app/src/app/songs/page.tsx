import Link from "next/link";
import { sanityFetch } from "@/sanity/live";
import { Song } from "@/sanity/types";
import { SONG_LINK_LIST_QUERY } from "@/sanity/queries";

export default async function SongPage() {
	const { data: songs } = (await sanityFetch({
		query: SONG_LINK_LIST_QUERY,
	})) as { data: Pick<Song, "_id" | "title" | "slug">[] };

	return (
		<>
			<h1>Songs</h1>
			<ul>
				{songs.map((song) => (
					<li key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>{song?.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

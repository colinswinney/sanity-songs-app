import { sanityFetch } from "@/sanity/live";
import { Song } from "@/sanity/types";
import { SONG_LINK_LIST_QUERY } from "@/sanity/queries";
import Link from "@/components/Link";
import { H1 } from "@/components/Heading";
import { List } from "@chakra-ui/react";

export default async function SongPage() {
	const { data: songs } = (await sanityFetch({
		query: SONG_LINK_LIST_QUERY,
	})) as { data: Pick<Song, "_id" | "title" | "slug">[] };

	return (
		<>
			<H1>Songs</H1>
			<List.Root>
				{songs.map((song) => (
					<List.Item key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>{song?.title}</Link>
					</List.Item>
				))}
			</List.Root>
		</>
	);
}

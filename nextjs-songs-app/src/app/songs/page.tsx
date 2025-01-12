import Link from "next/link";
import { sanityFetch } from "@/sanity/live";
import { Slug } from "@/sanity/types";
import { SONG_LINK_LIST_QUERY } from "@/sanity/queries";

type SongPageProps = {
	_id: string;
	title: string | null;
	slug: Slug | null;
};

export default async function IndexPage() {
	const { data: songs } = await sanityFetch({ query: SONG_LINK_LIST_QUERY });

	return (
		<>
			<h1>Songs</h1>
			<ul>
				{songs.map((song: SongPageProps) => (
					<li key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>{song?.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

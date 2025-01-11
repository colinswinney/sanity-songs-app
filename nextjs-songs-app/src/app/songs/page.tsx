import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { Slug } from "@/sanity/types";

type SongPageProps = {
	_id: string;
	title: string | null;
	slug: Slug | null;
};

const SONGS_PAGE_QUERY = defineQuery(`*[
	_type == "song"
] | order(title asc) {_id, title, slug}`);

export default async function IndexPage() {
	const { data: songs } = await sanityFetch({ query: SONGS_PAGE_QUERY });

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

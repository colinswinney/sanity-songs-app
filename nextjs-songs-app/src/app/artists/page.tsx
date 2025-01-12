import Link from "next/link";
import { sanityFetch } from "@/sanity/live";
import { Artist } from "@/sanity/types";
import { ARTIST_LINK_LIST_QUERY } from "@/sanity/queries";

export default async function ArtistsPage() {
	const { data: artists } = (await sanityFetch({
		query: ARTIST_LINK_LIST_QUERY,
	})) as { data: Pick<Artist, "_id" | "title" | "slug">[] };

	return (
		<>
			<h1>Artists</h1>
			<ul>
				{artists.map((artist) => (
					<li key={artist._id}>
						<Link href={`/artists/${artist?.slug?.current}`}>{artist?.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

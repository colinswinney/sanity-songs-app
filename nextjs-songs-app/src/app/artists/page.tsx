import Link from "next/link";
import { sanityFetch } from "@/sanity/live";
import { Slug } from "@/sanity/types";
import { ARTIST_LINK_LIST_QUERY } from "@/sanity/queries";

type ArtistPageProps = {
	_id: string;
	title: string | null;
	slug: Slug | null;
};

export default async function IndexPage() {
	const { data: artists } = await sanityFetch({
		query: ARTIST_LINK_LIST_QUERY,
	});

	return (
		<>
			<h1>Artists</h1>
			<ul>
				{artists.map((artist: ArtistPageProps) => (
					<li key={artist._id}>
						<Link href={`/artists/${artist?.slug?.current}`}>{artist?.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

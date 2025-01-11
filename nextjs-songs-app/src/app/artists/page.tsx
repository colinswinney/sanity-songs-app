import Link from "next/link";
import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { Slug } from "@/sanity/types";

type ArtistPageProps = {
	_id: string;
	title: string | null;
	slug: Slug | null;
};

const ARTISTS_PAGE_QUERY = defineQuery(`*[
	_type == "artist"
] | order(title asc) {_id, title, slug}`);

export default async function IndexPage() {
	const { data: artists } = await sanityFetch({ query: ARTISTS_PAGE_QUERY });

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

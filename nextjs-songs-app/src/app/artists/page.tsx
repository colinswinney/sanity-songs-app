import { sanityFetch } from "@/sanity/live";
import { Artist } from "@/sanity/types";
import { ARTIST_LINK_LIST_QUERY } from "@/sanity/queries";
import Link from "@/components/Link";
import { H1 } from "@/components/Heading";
import { List } from "@chakra-ui/react";

export default async function ArtistsPage() {
	const { data: artists } = (await sanityFetch({
		query: ARTIST_LINK_LIST_QUERY,
	})) as { data: Pick<Artist, "_id" | "title" | "slug">[] };

	return (
		<>
			<H1>Artists</H1>
			<List.Root>
				{artists.map((artist) => (
					<List.Item key={artist._id}>
						<Link href={`/artists/${artist?.slug?.current}`}>{artist?.title}</Link>
					</List.Item>
				))}
			</List.Root>
		</>
	);
}

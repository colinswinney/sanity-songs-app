import { sanityFetch } from "@/sanity/live";
import { Artist, Song } from "@/sanity/types";
import { SONG_LINK_LIST_QUERY, ARTIST_LINK_LIST_QUERY } from "@/sanity/queries";
import { Heading } from "@chakra-ui/react";
import Link from "@/components/Link";

export default async function IndexPage() {
	const { data: songs } = (await sanityFetch({
		query: SONG_LINK_LIST_QUERY,
	})) as { data: Pick<Song, "_id" | "title" | "slug">[] };

	const { data: artists } = (await sanityFetch({
		query: ARTIST_LINK_LIST_QUERY,
	})) as { data: Pick<Artist, "_id" | "title" | "slug">[] };

	return (
		<>
			<Heading as="h1" size="4xl">Songs App</Heading>
			<Heading as="h2" size="2xl">Songs</Heading>
			<ul>
				{songs.map((song) => (
					<li key={song._id}>
						<Link href={`/songs/${song?.slug?.current}`}>{song?.title}</Link>
					</li>
				))}
			</ul>
			<Heading as="h2">Artists</Heading>
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

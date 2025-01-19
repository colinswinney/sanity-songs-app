import { sanityFetch } from "@/sanity/live";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/consts";
import { Slug, Line } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import Chord from "@/components/Chord";
import { SONG_FULL_DISPLAY_QUERY } from "@/sanity/queries";
import { Box, Grid, GridItem, List, Em, Separator, VisuallyHidden } from "@chakra-ui/react";
import Link from "@/components/Link";
import { H1, H2, H3 } from "@/components/Heading";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: song } = await sanityFetch({
		query: SONG_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!song) {
		notFound();
	}

	const { title } = song;

	return {
		title: title + " | " + SITE_NAME,
	};
}

export default async function SongPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: song } = await sanityFetch({
		query: SONG_FULL_DISPLAY_QUERY,
		params: await params,
	});

	if (!song) {
		notFound();
	}

	const {
		title,
		sections,
		artists
	} = song;

	// const originalKeys: OriginalKey[] = [
	// 	"Cb",
	// 	"C",
	// 	"C#",
	// 	"Db",
	// 	"D",
	// 	"D#",
	// 	"Eb",
	// 	"E",
	// 	"E#",
	// 	"Fb",
	// 	"F",
	// 	"F#",
	// 	"Gb",
	// 	"G",
	// 	"G#",
	// 	"Ab",
	// 	"A",
	// 	"A#",
	// 	"Bb",
	// 	"B",
	// 	"B#",
	// ];

	return (
		<>
			<Grid templateColumns={{ base: "1fr", md: "1fr auto" }}>
				<GridItem>
					{title && <H1>{title}</H1>}
					{artists && (
						<List.Root>
							{artists.map(
								(artist: { slug: Slug | null; title: string | null }) => (
									<List.Item key={artist.slug?.current}>
										<Link href={`/artists/${artist.slug?.current}`}>
											{artist.title}
										</Link>
									</List.Item>
								)
							)}
						</List.Root>
					)}
				</GridItem>
				<GridItem alignSelf="end">
					<H2>Original Key: {song.originalKey}</H2>
					{/* @todo - Conditionally display based on checkbox above, useState can't be in async () though. */}
					{/* <label htmlFor="originalKey">Change Key</label>
					<select
						className={styles.originalKey}
						name="originalKey"
						id="originalKey"
					>
						{originalKeys.map((key) => (
							<option key={key} value={key}>
								{key}
							</option>
						))}
					</select> */}
				</GridItem>
			</Grid>

			<Separator marginBlock="32px" />

			<H2>
				<VisuallyHidden>Song</VisuallyHidden>
			</H2>
			{sections &&
				sections.map(
					(section: {
						_key: string;
						title?: string;
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						description?: Array<any> /* @todo - Block content, how to type? */;
						lines?: Array<Line>;
					}) => {
						const sectionTitle: string =
							(section.title ?? "").charAt(0).toUpperCase() +
							(section.title ?? "").slice(1);

						return (
							<Box
								as="section"
								key={section._key}
								aria-labelledby={section._key}
								marginBlockEnd="32px"
							>
								<H3 id={section._key}>
									<Em>{sectionTitle}</Em>
								</H3>
								{section.description && (
									<PortableText value={section.description} />
								)}
								{section.lines &&
									section.lines.map((line: Line, index: number) => {
										// const { chords, lyrics } = line;

										return (
											<Grid
												key={index}
												gap="16px"
												marginBlockEnd="16px"
												templateColumns="1fr 1fr"
												_last={{ marginBlockEnd: "0" }}
											>
												<Grid
													as="p"
													gap="1em"
													templateColumns="repeat(auto-fill, minmax(6ch, 1fr))"
												>
													{(line.chords ?? []).map((chord) => (
														<Chord chord={chord} key={chord._key} />
													))}
												</Grid>
												{line.lyrics && (
													<Grid alignSelf="center" fontSize="xl">
														<PortableText value={line.lyrics} />
													</Grid>
												)}
											</Grid>
										);
									})}
							</Box>
						);
					}
				)}
		</>
	);
}

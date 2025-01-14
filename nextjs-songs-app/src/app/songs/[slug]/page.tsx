import { sanityFetch } from "@/sanity/live";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/consts";
import { Slug, Line } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import styles from "./styles.module.css";
import Chord from "@/components/Chord";
import { SONG_FULL_DISPLAY_QUERY } from "@/sanity/queries";

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

	return (
		<>
			<div>
				<Link href="/songs">Back to songs</Link>
			</div>
			{title && <h1>{title}</h1>}
			{artists && (
				<ul>
					{artists.map(
						(artist: { slug: Slug | null; title: string | null }) => (
							<li key={artist.slug?.current}>
								<Link href={`/artists/${artist.slug?.current}`}>
									{artist.title}
								</Link>
							</li>
						)
					)}
				</ul>
			)}
			<h2>Original Key: {song.originalKey}</h2>
			<select>
				<option value="">@todo This needs to be populated.</option>
			</select>

			<h2>Song</h2>
			{sections &&
				sections.map(
					(section: {
						_key: string;
						title?: string;
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						description?: Array<any> /* @todo - Block content, how to type? */;
						lines?: Array<Line>;
					}) => (
						<section className={styles.section} key={section._key}>
							<h3>{section.title}</h3>
							{section.description && (
								<PortableText value={section.description} />
							)}
							{section.lines &&
								section.lines.map((line: Line, index: number) => (
									<div className={styles.line} key={index}>
										<div className={styles.chords}>
											{(line.chords ?? []).map((chord) => (
												<Chord chord={chord} key={chord._key} />
											))}
										</div>
										{line.lyrics && <PortableText value={line.lyrics} />}
									</div>
								))}
						</section>
					)
				)}
		</>
	);
}

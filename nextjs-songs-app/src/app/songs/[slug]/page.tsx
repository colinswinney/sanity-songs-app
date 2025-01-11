import { sanityFetch } from "@/sanity/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_NAME } from "@/consts";
import { Slug, Line } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

const SONG_QUERY = defineQuery(`*[
	_type == "song" &&
	slug.current == $slug
	][0]{
	...,
	title,
	originalKey,
	artists[]->{
		slug,
		title
	},
	sections
}`);

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { data: song } = await sanityFetch({
		query: SONG_QUERY,
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
		query: SONG_QUERY,
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

	console.log(sections);

	return (
		<main>
			<div>
				<Link href="/">Back to songs</Link>
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
						description?: Array<any>; /* Block content */
						lines?: Array<Line>;
					}) => (
						<div key={section._key}>
							<h3>{section.title}</h3>
							{section.description && (
								<PortableText value={section.description} />
							)}

							{section.lines &&
								section.lines.map((line: Line, index: number) => (
									<div key={index}>
										{(line.chords ?? [])
											.map(
												(chord) =>
													`${chord?.note ?? ""} ${chord?.flatSharp ?? ""} ${chord?.modifier ?? ""}`
											)
											.join(" / ")}
										{line.lyrics && <PortableText value={line.lyrics} />}
									</div>
								))}
						</div>
					)
				)}
		</main>
	);
}

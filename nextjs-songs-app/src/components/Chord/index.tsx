import { Chord as ChordType } from "@/sanity/types";
import { Text } from "@chakra-ui/react";

export default function Chord({ chord }: { chord: ChordType }) {

	const note = chord.note;
	const flatSharp = chord.flatSharp;
	const modifier = chord.modifier;

	const splitChord = chord.splitChord;
	const splitNote = chord.splitNote;
	const splitFlatSharp = chord.splitFlatSharp;
	const splitModifier = chord.splitModifier;

	const handleFlatSharp = (flatSharp: string | undefined) => {

		if (!flatSharp) {
			return "";
		}

		switch (flatSharp) {
			case "flat":
				return "♭";
			case "sharp":
				return "♯";
			case "doubleFlat":
				return "♭♭";
			case "doubleSharp":
				return "♯♯";
			default:
		}
	};


	const handleModifier = (modifier: string | undefined) => {

		if (!modifier) {
			return "";
		}

		switch (modifier) {
			case "major":
				return "M";
			case "major-six":
				return "6";
			case "major-six-nine":
				return "6/9";
			case "major-seven":
				return "Δ";
			case "major-nine":
				return "Maj9";
			case "major-eleven":
				return "Maj11";
			case "major-thirteen":
				return "Maj13";
			case "suspended-two":
				return "sus2";
			case "suspended-four":
				return "sus4";
			case "minor":
				return "m";
			case "minor-six":
				return "m6";
			case "minor-seven":
				return "m7";
			case "minor-nine":
				return "m9";
			case "minor-eleven":
				return "m11";
			case "minor-thirteen":
				return "m13";
			case "minor-major-seven":
				return "mΔ";
			case "dominant-seven":
				return "7";
			case "dominant-nine":
				return "9";
			case "dominant-thirteen":
				return "13";
			case "augmented":
				return "+";
			case "diminished":
				return "°";
			case "half-diminished":
				return "ø";
			default:
		}
	}

	return (
		<Text as="span" lineHeight="1" textStyle="2xl" whiteSpace="nowrap">
			<Text as="span" textStyle="4xl" fontWeight="700">
				{note}
			</Text>
			{flatSharp && <Text as="span">{handleFlatSharp(flatSharp)}</Text>}
			{modifier && (
				<Text as="sup" verticalAlign="super">
					{handleModifier(modifier)}
				</Text>
			)}
			{splitChord && (
				<>
					<Text as="span" textStyle="4xl" fontWeight="700">
						<Text as="span" fontWeight="200">
							/
						</Text>
						{splitNote}
					</Text>
					{splitFlatSharp && (
						<Text as="span">{handleFlatSharp(splitFlatSharp)}</Text>
					)}
					{splitModifier && (
						<Text as="sup" verticalAlign="super">
							{handleModifier(splitModifier)}
						</Text>
					)}
				</>
			)}
		</Text>
	);
}

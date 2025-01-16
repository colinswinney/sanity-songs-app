import { Chord as ChordType } from "@/sanity/types";

import styles from "./styles.module.css";

export default function Chord({ chord }: { chord: ChordType }) {

	const note = chord.note;
	const flatSharp = chord.flatSharp;
	const modifier = chord.modifier;

	let fs = "";
	if (flatSharp) {
		switch (flatSharp) {
			case "flat":
				fs = "♭";
				break;
			case "sharp":
				fs = "♯";
				break;
			case "doubleFlat":
				fs = "♭♭";
				break;
			case "doubleSharp":
				fs = "♯♯";
				break;
			default:
				fs = "";
				break;
		}
	}

	let mod = "";
	if (modifier) {
		switch (modifier) {
			case "major":
				mod = "M";
				break;
			case "major-six":
				mod = "6";
				break;
			case "major-six-nine":
				mod = "6/9";
				break;
			case "major-seven":
				mod = "Δ";
				break;
			case "major-nine":
				mod = "Maj9";
				break;
			case "major-eleven":
				mod = "Maj11";
				break;
			case "major-thirteen":
				mod = "Maj13";
				break;
			case "suspended-two":
				mod = "sus2";
				break;
			case "suspended-four":
				mod = "sus4";
				break;
			case "minor":
				mod = "m";
				break;
			case "minor-six":
				mod = "m6";
				break;
			case "minor-seven":
				mod = "m7";
				break;
			case "minor-nine":
				mod = "m9";
				break;
			case "minor-eleven":
				mod = "m11";
				break;
			case "minor-thirteen":
				mod = "m13";
				break;
			case "minor-major-seven":
				mod = "mΔ";
				break;
			case "dominant-seven":
				mod = "7";
				break;
			case "dominant-nine":
				mod = "9";
				break;
			case "dominant-thirteen":
				mod = "13";
				break;
			case "augmented":
				mod = "+";
				break;
			case "diminished":
				mod = "°";
				break;
			case "half-diminished":
				mod = "ø";
				break;
			default:
				mod = "";
		}
	}

	return (
		<div className={styles.chord}>
			<span className={styles.chord__note}>{note}</span>
			<span className={styles.chord__flatSharp}>{fs}</span>
			<sup className={styles.chord__modifier}>{mod}</sup>
		</div>
	);
}

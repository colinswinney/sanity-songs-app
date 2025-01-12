import { Chord as ChordType } from "@/sanity/types";

export default function Chord({ chord }: { chord: ChordType }) {
	return (
		<span>
			{chord?.note}
			{chord?.flatSharp}
			{chord?.modifier}
		</span>
	);
}

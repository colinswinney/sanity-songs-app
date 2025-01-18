"use client";

import React from "react";
import { AppSettingsType, useAppSettings } from "@/context";
import styles from "./styles.module.css";

export default function ChordDisplayAs() {
	const { state: { displayAs }, dispatch } = useAppSettings();

	 const setDisplayAs = (
			displayAs: Pick<AppSettingsType, "displayAs">["displayAs"]
		) => {
			dispatch({ type: "SET_DISPLAY_AS", payload: displayAs });
		};

	return (
		<fieldset className={styles.displayAsFieldset}>
			<legend>Display as:</legend>
			<label htmlFor="numbers">
				<input
					type="radio"
					id="numbers"
					name="display-as"
					value="numbers"
					checked={displayAs === "numbers"}
					onChange={() => setDisplayAs("numbers")}
				/>
				Numbers
			</label>
			<label htmlFor="roman-numerals">
				<input
					type="radio"
					id="roman-numerals"
					name="display-as"
					value="roman-numerals"
					checked={displayAs === "roman-numerals"}
					onChange={() => setDisplayAs("roman-numerals")}
				/>
				Roman Numerals
			</label>

			<label htmlFor="note-names">
				<input
					type="radio"
					id="note-names"
					name="display-as"
					value="note-names"
					checked={displayAs === "note-names"}
					onChange={() => setDisplayAs("note-names")}
				/>
				Note Names
			</label>
		</fieldset>
	);
}

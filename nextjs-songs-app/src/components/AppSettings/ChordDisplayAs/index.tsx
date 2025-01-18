"use client";

import React from "react";
import { AppSettingsType, useAppSettings } from "@/context";
import { Fieldset, VStack } from "@chakra-ui/react"
import { Radio, RadioGroup } from "@/components/ui/radio";

export default function ChordDisplayAs() {
	const { state: { displayAs }, dispatch } = useAppSettings();

	 const setDisplayAs = (
			displayAs: Pick<AppSettingsType, "displayAs">["displayAs"]
		) => {
			dispatch({ type: "SET_DISPLAY_AS", payload: displayAs });
		};

	return (
		<Fieldset.Root>
			<Fieldset.Legend>Display as:</Fieldset.Legend>
			<RadioGroup
				value={displayAs}
				onValueChange={(e) => {
					setDisplayAs(e.value as "numbers" | "roman-numerals" | "note-names");
				}}
			>
				<VStack alignItems="flex-start">
					<Radio value="numbers">Numbers</Radio>
					<Radio value="roman-numerals">Roman Numerals</Radio>
					<Radio value="note-names">Note Names</Radio>
				</VStack>
			</RadioGroup>
		</Fieldset.Root>
	);
}

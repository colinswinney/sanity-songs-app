"use client";
import React, { createContext, useReducer, useContext, ReactNode } from "react";

export type AppSettingsType = {
	displayAs: "numbers" | "roman-numerals" | "note-names";
	theme: "light" | "dark";
};

type Action =
	| {
			type: "SET_DISPLAY_AS";
			payload: "numbers" | "roman-numerals" | "note-names";
	  }
	| { type: "SET_THEME"; payload: "light" | "dark" }

const defaultAppSettings: AppSettingsType = {
	displayAs: "numbers",
	theme: "light",
};

const AppSettingsContext = createContext<
	{ state: AppSettingsType; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

function appSettingsReducer(
	state: AppSettingsType,
	action: Action
): AppSettingsType {
	switch (action.type) {
		case "SET_DISPLAY_AS":
			return { ...state, displayAs: action.payload };
		case "SET_THEME":
			return { ...state, theme: action.payload };

		default:
			throw new Error(`Unhandled action type: ${action}`);
	}
}

export const AppSettingsProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(appSettingsReducer, defaultAppSettings);

	return (
		<AppSettingsContext.Provider value={{ state, dispatch }}>
			{children}
		</AppSettingsContext.Provider>
	);
};

export const useAppSettings = () => {
	const context = useContext(AppSettingsContext);
	if (context === undefined) {
		throw new Error(
			"useAppSettings must be used within an AppSettingsProvider"
		);
	}
	return context;
};

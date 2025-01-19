import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";
import { Aleo as PrimaryFontFamily } from "next/font/google";

const primaryFont = PrimaryFontFamily({
	subsets: ["latin"],
});

const config = defineConfig({
	theme: {
		semanticTokens: {
			colors: {
				primary: {
					DEFAULT: {
						value: { _light: "{colors.pink.700}", _dark: "{colors.pink.300}" },
					},
				},
				bg: {
					DEFAULT: {
						value: { _light: "#fafbfc", _dark: "{colors.gray.900}" },
					},
					subtle: {
						value: { _light: "{colors.gray.100}", _dark: "{colors.gray.800}" },
					},
					muted: {
						value: { _light: "{colors.gray.500}", _dark: "{colors.gray.600}" },
					},
				},
				fg: {
					DEFAULT: {
						value: { _light: "{colors.black}", _dark: "{colors.gray.50}" },
					},
					muted: {
						value: { _light: "{colors.gray.600}", _dark: "{colors.gray.400}" },
					},
				},
				border: {
					DEFAULT: {
						value: { _light: "{colors.gray.200}", _dark: "{colors.gray.700}" },
					},
				},
			},
			fonts: {
				body: { value: primaryFont.style.fontFamily },
				heading: { value: primaryFont.style.fontFamily },
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);

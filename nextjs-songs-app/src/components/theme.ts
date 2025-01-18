import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

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
						value: { _light: "{colors.white}", _dark: "{colors.gray.900}" },
					},
					subtle: {
						value: { _light: "{colors.gray.50}", _dark: "{colors.gray.800}" },
					},
					muted: {
						value: { _light: "{colors.gray.100}", _dark: "{colors.gray.700}" },
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
		},
	},
});

export const system = createSystem(defaultConfig, config);

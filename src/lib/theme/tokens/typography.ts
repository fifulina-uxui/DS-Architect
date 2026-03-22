import { spacers } from "./spacers";

export const typography = {
	fontFamily: {
		base: `"Onest", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		heading: `"Onest", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
	},

	fontSize: {
		h1: spacers[64],
		h2: spacers[40],
		h3: spacers[32],
		h4: spacers[24],
		h5: spacers[18],
		h6: spacers[16],
		base: spacers[16],
		small: spacers[14],
		extraSmall: spacers[12],
	},

	lineHeight: {
		h1: spacers[72],
		h2: spacers[48],
		h3: spacers[40],
		h4: spacers[32],
		h5: spacers[28],
		h6: spacers[24],
		base: spacers[24],
		small: spacers[20],
		extraSmall: spacers[16],
	},

	fontWeight: {
		regular: "400",
		semiBold: "600",
		bold: "700",
	},
};

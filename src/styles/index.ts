import { Platform, StyleProp } from "react-native";

import { SCREEN_TYPE } from "@configs/const";
import { DARK_STYLE, LIGHT_STYLE } from "@configs/style";
import { isOnlyDigit } from "@utils/regex";

import { BorderBuilder } from "./border";
import { ColorBuilder } from "./color";
import { PositionBuilder } from "./position";
import { SizeBuilder } from "./size";
import { TextBuilder } from "./text";
import { UtilsBuilder } from "./utils";

export const styleBuilders = (style: IAppStyles) => ({
	...BorderBuilder(style),
	...PositionBuilder(style),
	...TextBuilder(style),
	...SizeBuilder(style),
	...UtilsBuilder(style),
	...ColorBuilder(style),
});

const lightStyleBuilder = styleBuilders(LIGHT_STYLE);
const darkStyleBuilder = styleBuilders(DARK_STYLE);

/**
 * Cached builded styles for not build it each time call again with same build string
 */
const cacheBuilder: {
	[key: string]: {
		dark?: { [key: string]: string | number };
		light?: { [key: string]: string | number };
	};
} = {};

const getStyle = (
	dark: boolean,
	prefix: string,
	commands: (string | number)[] = [],
	overrideBuilder = {}
) => {
	const out = (dark
		? { ...darkStyleBuilder, ...overrideBuilder }
		: { ...lightStyleBuilder, ...overrideBuilder })[prefix]?.(...commands);
	if (out) {
		return out;
	}
	return false;
};

const breakpoint = {
	i: () => Platform.OS === "android",
	a: () => Platform.OS === "ios",
	l: (dark: boolean) => dark,
	d: (dark: boolean) => !dark,
	pad: () => SCREEN_TYPE !== "pad",
	lg: () => SCREEN_TYPE !== "lg",
	sm: () => SCREEN_TYPE !== "sm",
};

/**
 * Check if string builder have break point
 * @param commands array of builder string
 * @param args extras variable to passthrough
 */
const checkBreakPoint = (commands: string[], ...args) => {
	for (const token of commands) {
		if (breakpoint[token]) {
			return breakpoint[token](...args);
		}
	}
	return false;
};

export const s = (isDarkMode = false, override = {}) => {
	const dark = isDarkMode ? "dark" : "light";
	/**
	 * Convert tachyons syntax string to react native style
	 * @param styleString String of multi prefix tachyons syntax
	 * @example
	 * // Note: `vw` and `vh` or anything relate to view size will calculated as percent of phone's screen
	 * s(`vw-100 vh-100`) as {height: vh(100), width: vw(100)}
	 * s(`w-100 h-100`) as {height: 100, width: 100}
	 * s(`w-100% h-100%`) as {height: '100%', width: '100%'}
	 * s(`bg`) as {background: style.COLOR.BACKGROUND_HARD}
	 * s(`red`) as {color: style.COLOR.RED}
	 * s(`relative`) as {position: 'relative'}
	 * s(`f1 prime bold`) as {fontSize: style.FONT.SIZE.xl, color: style.COLORS.PRIME, fontWeight: style.FONT.WEIGHT.bold}
	 */
	const prebuilt = (styleString: string) => {
		// Checking if style have already cached
		if (cacheBuilder[styleString]?.[dark]) {
			return cacheBuilder[styleString][dark];
		}
		// Compute string to style object
		let styles: { [key: string]: any } = {};
		const parts = styleString.split(" ");
		for (const part of parts) {
			let out: false | { [key: string]: any } = false;
			let commands = part.split("-");
			if (checkBreakPoint(commands, isDarkMode)) {
				continue;
			}
			commands = commands.filter(
				(val) => !["pad", "sm", "lg", "a", "i"].includes(val)
			);
			switch (commands.length) {
				case 1: {
					out = getStyle(isDarkMode, part, undefined, override);
					break;
				}
				case 2: {
					out = getStyle(
						isDarkMode,
						commands[0],
						[
							isOnlyDigit.test(commands[1]) ||
							commands[1].includes(".")
								? parseInt(commands[1], 10)
								: commands[1],
						],
						override
					);
					break;
				}
				case 3: {
					const prefix = commands.shift()!;
					if (commands[0]) {
						out = getStyle(isDarkMode, prefix, commands, override);
						break;
					}
					if (
						isOnlyDigit.test(commands[1]) ||
						commands[1].includes(".")
					) {
						out = getStyle(
							isDarkMode,
							prefix,
							[parseInt(commands[1], 10) * -1],
							override
						);
						break;
					}
					out = getStyle(isDarkMode, part, undefined, override);
				}
			}
			if (out) {
				const outKeys = Object.keys(out);
				if (styles[outKeys[0]] && Array.isArray(out[outKeys[0]])) {
					styles = {
						...styles,
						[outKeys[0]]: [
							...out[outKeys[0]],
							...styles[outKeys[0]],
						],
					};
					continue;
				}
				styles = { ...styles, ...out };
			}
		}
		if (!cacheBuilder[styleString]) {
			cacheBuilder[styleString] = {};
		}
		cacheBuilder[styleString][dark] = styles;
		return styles as StyleProp<{}>;
	};
	return prebuilt;
};

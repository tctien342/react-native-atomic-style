import { PixelRatio, Platform } from "react-native";

import {
	SCALE_BASE,
	SCREEN_HEIGHT,
	SCREEN_TYPE,
	SCREEN_WIDTH,
} from "@configs/const";

/**
 * Resize an size base on scale value
 * @param size Size that need to be normalize
 */
const reScale = (size: number, scale = SCALE_BASE) => {
	if (size === 1) return 1;
	let newSize = size * scale;
	switch (SCREEN_TYPE) {
		case "sm":
			newSize *= 0.95;
			break;
		case "pad":
			newSize *= 0.9;
			break;
	}
	if (Platform.OS === "ios") {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	} else {
		return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
	}
};

/**
 * Return width base on phone screen
 * @param percent 0-100 percent of view width
 */
const vw = (percent: number) => {
	return Math.round((SCREEN_WIDTH * percent) / 100);
};
/**
 * Return height base on phone screen
 * @param percent 0-100 percent of view height
 */
const vh = (percent: number) => {
	return Math.round((SCREEN_HEIGHT * percent) / 100);
};

export { reScale, vw, vh };

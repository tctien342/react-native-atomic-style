interface IDefaultValue {
	l1: number;
	l2: number;
	l3: number;
	l4: number;
	l5: number;
}

/**
 * Style configuration for app
 */
interface IColorStyle {
	/**
	 * App primary color
	 */
	PRIME: string;
	PURPLE: string;
	BLUE: string;
	RED: string;
	ORANGE: string;
	GREEN: string;
	WHITE: string;
	BLACK: string;
	GRAY: string;
	/**
	 * App font color (not nessesary)
	 */
	FONT_LIGHT: string;
	/**
	 * App font color (important value)
	 */
	FONT_HARD: string;
	/**
	 * App background L2
	 */
	BACKGROUND_LIGHT: string;
	/**
	 * App background L1
	 */
	BACKGROUND_MED: string;
	/**
	 * App background L0 (default)
	 */
	BACKGROUND_HARD: string;
}

interface IFontStyle {
	/**
	 * Font weight
	 */
	WEIGHT: {
		thin: string;
		bold: string;
		default: string;
	};
	/**
	 * Sizes of font
	 */
	SIZE: {
		f7?: number;
		f6: number;
		f5: number;
		f4: number;
		f3: number;
		f2: number;
		f1?: number;
	};
}

interface IBorderStyle {
	RADIUS: {
		default: number;
		pill: number;
	} & IDefaultValue;
}

interface IAppStyles {
	/**
	 * App colors
	 */
	COLORS: IColorStyle;
	/**
	 * App font settings
	 */
	FONT: IFontStyle;
	/**
	 * Border radius default in app
	 */
	BORDER: IBorderStyle;
}

type TStringBuilder = (
	style: IAppStyles
) => { [key: string]: (...args) => { [key: string]: any } };

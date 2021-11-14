export type TDevice = 'sm' | 'lg' | 'pad';
export type TThemeMode = 'dark' | 'light';

export interface ISolidSize {
  l1: number;
  l2: number;
  l3: number;
  l4: number;
  l5: number;
  l6: number;
  l7: number;
}

export interface IFontSize {
  f7: number;
  f6: number;
  f5: number;
  f4: number;
  f3: number;
  f2: number;
  f1: number;
}

export interface IFontWeight {
  thin: string;
  bold: string;
  default: string;
}

/**
 * Style configuration for app
 */
export interface IColorStyle {
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

export interface IFontStyle {
  /**
   * Font weight
   */
  WEIGHT: IFontWeight;
  /**
   * Sizes of font
   */
  SIZE: IFontSize;
}

export interface IBorderStyle {
  RADIUS: {
    default: number;
    pill: number;
  } & ISolidSize;
}

export interface IAppStyles {
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
  SOLID: ISolidSize;
}

export type TTokenOutput = ((...args) => { [key: string]: any }) | { [key: string]: any };
export type TStringBuilder = (style: IAppStyles) => { [key: string]: TTokenOutput };
export type TStringExtraBuilder = (style: IAppStyles, isDark: boolean) => { [key: string]: TTokenOutput };
export type TBreakpointFunction = (isDark: boolean) => boolean;
export type TBreakpoint = { [key: string]: TBreakpointFunction | boolean };

export interface ISizeConfig {
  /**
   * Current scale you are work in, this will affect auto scale of width, height and fontSize.
   * Default base on Iphone5 => ScreenWidth / 320
   */
  scaleBase: number;
  /**
   * Scale value when breakpoint change
   */
  scaleSize: {
    /**
     * Small screen default 0.95
     */
    sm: number;
    /**
     * Large screen default 1
     */
    lg: number;
    /**
     * Pad screen default 0.9
     */
    pad: number;
  };
  scalePoint: {
    /**
     * Ratio of big screen and small screen
     *
     * large <===> x1 <===> small <===> x2 <===> pad
     */
    x1: number;
    /**
     * Ratio of small screen and pad screen
     *
     * large <===> x1 <===> small <===> x2 <===> pad
     */
    x2: number;
  };
}

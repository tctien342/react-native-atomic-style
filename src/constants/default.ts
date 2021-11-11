const LIB_DEFAULT: {
  /**
   * This help detect old device (16:9) vs new device (>16:9)
   */
  EARLY_DEVICE_RATIO_POINT: number;
  /**
   * Current theme mode
   */
  THEME_MODE: TThemeMode;
  /**
   * Auto change theme base on device theme
   */
  THEME_AUTO: boolean;
  /**
   * Base scale for auto scale function
   */
  SCALE_BASE: number;
  /**
   * Default size for margin, padding
   */
  SOLID_SIZE: ISolidSize;
  /**
   * Defaukt size for font
   */
  FONT_SIZE: IFontSize;
  /**
   * Color for light mode
   */
  COLORS_LIGHT: IColorStyle;
  /**
   * Color for dark mode
   */
  COLORS_DARK: IColorStyle;
  /**
   * Font weight in light mode
   */
  LIGHT_FONT_WEIGHT: IFontWeight;
  /**
   * Font weight in dark mode
   */
  DARK_FONT_WEIGHT: IFontWeight;
  /**
   * Addon breakpoint
   *
   * Return true if breakpoint pass
   */
  EXTRA_BREAKPOINT: TBreakpoint;
  EXTRA_BUILDER: TStringExtraBuilder;
} = {
  EARLY_DEVICE_RATIO_POINT: 1.8,
  THEME_MODE: 'light',
  THEME_AUTO: true,
  SCALE_BASE: 0.95,
  SOLID_SIZE: {
    l1: 2,
    l2: 4,
    l3: 8,
    l4: 12,
    l5: 16,
    l6: 20,
    l7: 32,
  },
  FONT_SIZE: {
    f1: 26,
    f2: 22,
    f3: 18,
    f4: 14,
    f5: 12,
    f6: 10,
    f7: 8,
  },
  COLORS_LIGHT: {
    PRIME: '#389bff',
    PURPLE: '#9b71de',
    BLUE: 'blue',
    RED: '#de2f2f',
    ORANGE: 'orange',
    GREEN: 'green',
    WHITE: 'white',
    FONT_LIGHT: '#717171',
    FONT_HARD: '#2b2b2b',
    BACKGROUND_LIGHT: '#f6f6f6',
    BACKGROUND_MED: 'white',
    BACKGROUND_HARD: 'white',
    BLACK: '#000',
    GRAY: '#b6c0cc',
  },
  COLORS_DARK: {
    PRIME: '#389bff',
    PURPLE: '#9b71de',
    BLUE: 'blue',
    RED: '#ff0266',
    ORANGE: 'orange',
    GREEN: 'green',
    WHITE: 'white',
    FONT_LIGHT: '#5D5D5D',
    FONT_HARD: '#D7D7D7',
    BACKGROUND_LIGHT: '#585858',
    BACKGROUND_MED: '#464646',
    BACKGROUND_HARD: '#333333',
    BLACK: '#000',
    GRAY: '#b6c0cc',
  },
  LIGHT_FONT_WEIGHT: { thin: '200', bold: 'bold', default: 'normal' },
  DARK_FONT_WEIGHT: { thin: '300', bold: 'bold', default: 'normal' },
  EXTRA_BREAKPOINT: {},
  EXTRA_BUILDER: () => ({}),
};

export { LIB_DEFAULT };

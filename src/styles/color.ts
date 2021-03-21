export const selColor = (style: IAppStyles, select: string, defaultColor: string): string => {
  let key = select.toUpperCase();
  switch (select) {
    case 'med':
      key = 'BACKGROUND_MED';
      break;
    case 'light':
      key = 'BACKGROUND_LIGHT';
      break;
    case 'fhard':
      key = 'FONT_HARD';
      break;
    case 'flight':
      key = 'FONT_LIGHT';
      break;
  }
  if (key in style.COLORS) {
    return style.COLORS[key];
  }
  return defaultColor;
};

export const ColorBuilder: TStringBuilder = (style: IAppStyles) => ({
  white: () => ({ color: style.COLORS.WHITE }),
  hard: () => ({ color: style.COLORS.FONT_HARD }),
  light: () => ({ color: style.COLORS.FONT_LIGHT }),
  prime: () => ({ color: style.COLORS.PRIME }),
  purble: () => ({ color: style.COLORS.PURPLE }),
  blue: () => ({ color: style.COLORS.BLUE }),
  orange: () => ({ color: style.COLORS.ORANGE }),
  red: () => ({ color: style.COLORS.RED }),
  green: () => ({ color: style.COLORS.GREEN }),
  black: () => ({ color: style.COLORS.BLACK }),
  o: (value: number) => ({
    opacity: value > 1 ? value / 100 : value,
  }),
  bg: (color) => {
    return {
      backgroundColor: selColor(style, color, style.COLORS.BACKGROUND_HARD),
    };
  },
  bgmed: () => ({ backgroundColor: style.COLORS.BACKGROUND_MED }),
  bglight: () => ({ colbackgroundColoror: style.COLORS.BACKGROUND_LIGHT }),
});

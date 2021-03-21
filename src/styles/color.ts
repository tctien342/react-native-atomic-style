export const selColor = (style: IAppStyles, select: string, defaultColor: string) => {
  let out = defaultColor;
  switch (select) {
    case 'white':
      out = style.COLORS.WHITE;
      break;
    case 'prime':
      out = style.COLORS.PRIME;
      break;
    case 'purble':
      out = style.COLORS.PURPLE;
      break;
    case 'blue':
      out = style.COLORS.BLUE;
      break;
    case 'orange':
      out = style.COLORS.ORANGE;
      break;
    case 'red':
      out = style.COLORS.RED;
      break;
    case 'green':
      out = style.COLORS.GREEN;
      break;
    case 'black':
      out = style.COLORS.BLACK;
      break;
    case 'med':
      out = style.COLORS.BACKGROUND_MED;
      break;
    case 'light':
      out = style.COLORS.BACKGROUND_LIGHT;
      break;
    case 'fhard':
      out = style.COLORS.FONT_HARD;
      break;
    case 'flight':
      out = style.COLORS.FONT_LIGHT;
      break;
    default:
      break;
  }
  return out;
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

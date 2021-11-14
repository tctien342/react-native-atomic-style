import { IAppStyles, IColorStyle } from '@declares/style';
import { isHexColor } from '@utils/regex';

export const selColor = (style: IAppStyles, select: string, defaultColor: string, alphaPercent?: number): string => {
  let alphaPart = '';
  if (alphaPercent) {
    if (alphaPercent > 1) {
      alphaPart = (((alphaPercent / 100) * 255) | (1 << 8)).toString(16).slice(1);
    } else {
      alphaPart = ((alphaPercent * 255) | (1 << 8)).toString(16).slice(1);
    }
  }
  if (isHexColor.test(select)) return select + alphaPart;
  let key = select.toUpperCase() as keyof IColorStyle;
  switch (select) {
    case 'hard':
      key = 'BACKGROUND_HARD';
      break;
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
    return style.COLORS[key] + alphaPart;
  }
  return defaultColor + alphaPart;
};

const generateColorPrefix = <T = {}>(style: IAppStyles & T) => {
  const out = Object.keys(style.COLORS).reduce(
    (prev, curr) => ({
      ...prev,
      [curr.toLowerCase()]: { color: style.COLORS[curr] },
    }),
    {},
  ) as { [key in Lowercase<keyof typeof style.COLORS>]: { color: string } };
  return out;
};

export const ColorBuilder = <T = {}>(style: IAppStyles & T) => ({
  ...generateColorPrefix(style),
  hard: { color: style.COLORS.FONT_HARD },
  light: { color: style.COLORS.FONT_LIGHT },
  purble: { color: style.COLORS.PURPLE },
  o: (value: number) => ({
    opacity: value > 1 ? value / 100 : value,
  }),
  bg: (color: keyof typeof style.COLORS, alphaPercent?: number) => {
    return {
      backgroundColor: selColor(style, color, style.COLORS.BACKGROUND_HARD, alphaPercent),
    };
  },
  cl: (color: keyof typeof style.COLORS, alphaPercent?: number) => {
    return {
      color: selColor(style, color, style.COLORS.FONT_HARD, alphaPercent),
    };
  },
});

export type TColorBuilderKey = ReturnType<typeof ColorBuilder>;

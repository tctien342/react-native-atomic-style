import { reScale } from '@utils/style';

const DEFAULT_VAL: IDefaultValue = {
  l1: reScale(2),
  l2: reScale(4),
  l3: reScale(8),
  l4: reScale(12),
  l5: reScale(16),
};

const LIGHT_STYLE: IAppStyles = {
  COLORS: {
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
  FONT: {
    SIZE: {
      f7: reScale(8),
      f6: reScale(10),
      f5: reScale(12),
      f4: reScale(14),
      f3: reScale(18),
      f2: reScale(22),
      f1: reScale(26),
    },
    WEIGHT: { thin: '200', bold: 'bold', default: 'normal' },
  },
  BORDER: {
    RADIUS: {
      default: reScale(10),
      pill: reScale(42),
      ...DEFAULT_VAL,
    },
  },
};

const DARK_STYLE: IAppStyles = {
  ...LIGHT_STYLE,
  COLORS: {
    ...LIGHT_STYLE.COLORS,
    RED: '#ff0266',
    FONT_LIGHT: '#5D5D5D',
    FONT_HARD: '#D7D7D7',
    BACKGROUND_LIGHT: '#585858',
    BACKGROUND_MED: '#464646',
    BACKGROUND_HARD: '#333333',
  },
  FONT: {
    ...LIGHT_STYLE.FONT,
    WEIGHT: { thin: '300', bold: 'bold', default: 'normal' },
  },
};

export { DARK_STYLE, DEFAULT_VAL, LIGHT_STYLE };

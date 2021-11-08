import { reScale } from '@utils/style';

import { getGlobalState } from './state';

const LIGHT_STYLE: IAppStyles = {
  COLORS: getGlobalState('COLORS_LIGHT'),
  FONT: {
    SIZE: getGlobalState('FONT_SIZE'),
    WEIGHT: getGlobalState('LIGHT_FONT_WEIGHT'),
  },
  BORDER: {
    RADIUS: {
      default: reScale(10),
      pill: reScale(42),
      ...getGlobalState('SOLID_SIZE'),
    },
  },
  SOLID: getGlobalState('SOLID_SIZE'),
};

const DARK_STYLE: IAppStyles = {
  COLORS: getGlobalState('COLORS_DARK'),
  FONT: {
    SIZE: getGlobalState('FONT_SIZE'),
    WEIGHT: getGlobalState('DARK_FONT_WEIGHT'),
  },
  BORDER: {
    RADIUS: {
      default: reScale(10),
      pill: reScale(42),
      ...getGlobalState('SOLID_SIZE'),
    },
  },
  SOLID: getGlobalState('SOLID_SIZE'),
};

export { DARK_STYLE, LIGHT_STYLE };

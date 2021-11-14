import { IAppStyles } from '@declares/style';
import { reScale } from '@utils/style';
import { reduce } from 'lodash';

import { getGlobalState } from './state';

const autoScale = <T = {}>(obj: T): T => {
  return reduce(
    obj as any,
    (res, val, key) => {
      res[key] = reScale(val);
      return res;
    },
    obj,
  );
};
const FONT_SIZE = autoScale(getGlobalState('FONT_SIZE'));
const SOLID_SIZE = autoScale(getGlobalState('SOLID_SIZE'));

const LIGHT_STYLE: IAppStyles = {
  COLORS: getGlobalState('COLORS_LIGHT'),
  FONT: {
    SIZE: FONT_SIZE,
    WEIGHT: getGlobalState('LIGHT_FONT_WEIGHT'),
  },
  BORDER: {
    RADIUS: {
      ...SOLID_SIZE,
      default: reScale(10),
      pill: reScale(42),
    },
  },
  SOLID: SOLID_SIZE,
};

const DARK_STYLE: IAppStyles = {
  COLORS: getGlobalState('COLORS_DARK'),
  FONT: {
    SIZE: FONT_SIZE,
    WEIGHT: getGlobalState('DARK_FONT_WEIGHT'),
  },
  BORDER: {
    RADIUS: {
      default: reScale(10),
      pill: reScale(42),
      ...SOLID_SIZE,
    },
  },
  SOLID: SOLID_SIZE,
};

export { DARK_STYLE, LIGHT_STYLE };

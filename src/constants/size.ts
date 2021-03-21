import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

let DEFAULT_SIZE_CONF: ISizeConfig = {
  scaleBase: SCREEN_WIDTH / 320, // base scale on Iphone5
  scaleSize: {
    sm: 0.95,
    lg: 1,
    pad: 0.9,
  },
  scalePoint: {
    x1: 1.8,
    x2: 4 / 3,
  },
};

const MIN_DIMENSION = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);
const SCREEN_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
const SCALE_BASE = DEFAULT_SIZE_CONF.scaleBase;
const SCREEN_TYPE =
  SCREEN_RATIO > DEFAULT_SIZE_CONF.scalePoint.x1 ? 'lg' : SCREEN_RATIO > DEFAULT_SIZE_CONF.scalePoint.x2 ? 'sm' : 'pad';

/**
 * Change current scale config
 */
const setSizeConfig = (config: Partial<ISizeConfig>) => {
  DEFAULT_SIZE_CONF = { ...DEFAULT_SIZE_CONF, ...config };
};

export {
  DEFAULT_SIZE_CONF,
  MIN_DIMENSION,
  SCALE_BASE,
  SCREEN_HEIGHT,
  SCREEN_RATIO,
  SCREEN_TYPE,
  SCREEN_WIDTH,
  setSizeConfig,
};

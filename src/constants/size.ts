import { isTablet } from '@utils/common';
import { Dimensions } from 'react-native';

import { getGlobalState } from './state';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const MIN_DIMENSION = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);
const MAX_DIMENSION = Math.max(SCREEN_WIDTH, SCREEN_HEIGHT);
const SCREEN_RATIO = MIN_DIMENSION / MAX_DIMENSION;
const SCREEN_TYPE: TDevice = (() => {
  const breakpoint = getGlobalState('EARLY_DEVICE_RATIO_POINT');
  if (isTablet(SCREEN_WIDTH, SCREEN_HEIGHT)) return 'pad';
  if (SCREEN_RATIO > breakpoint) return 'lg';
  return 'sm';
})();

export { MAX_DIMENSION, MIN_DIMENSION, SCREEN_HEIGHT, SCREEN_RATIO, SCREEN_TYPE, SCREEN_WIDTH };

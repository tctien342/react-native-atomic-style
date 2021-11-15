import { SCREEN_HEIGHT, SCREEN_TYPE, SCREEN_WIDTH } from '@constants/size';
import { getGlobalState } from '@constants/state';
import { PixelRatio } from 'react-native';

const WIDTH_PERCENT = SCREEN_WIDTH / 100;
const HEIGHT_PERCENT = SCREEN_HEIGHT / 100;

/**
 * Resize an size base on scale value
 * @param size Size that need to be normalize
 */
const reScale = (size: number, overrideScale?: number): number => {
  if (size === 1) return 1;
  const baseScale = overrideScale || getGlobalState('SCALE_BASE');
  let newSize = size * baseScale;
  switch (SCREEN_TYPE) {
    case 'sm':
      newSize *= 0.95;
      break;
    case 'pad':
      newSize *= 0.9;
      break;
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

/**
 * Return width base on phone screen
 * @param percent 0-100 percent of view width
 */
const vw = (percent: number): number => {
  return Math.round(WIDTH_PERCENT * percent);
};
/**
 * Return height base on phone screen
 * @param percent 0-100 percent of view height
 */
const vh = (percent: number): number => {
  return Math.round(HEIGHT_PERCENT * percent);
};

export { reScale, vh, vw };

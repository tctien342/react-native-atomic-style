import { Platform } from 'react-native';

import { SCREEN_TYPE } from './size';
import { getGlobalState } from './state';

/**
 * Break point for device prefix in build string
 */
const DEVICE_BREAK_POINT: TBreakpoint = {
  i: Platform.OS === 'ios',
  a: Platform.OS === 'android',
  web: Platform.OS === 'web',
  win: Platform.OS === 'windows',
  mac: Platform.OS === 'macos',
  l: (() => {
    const mode = getGlobalState('THEME_MODE');
    return mode === 'light';
  })(),
  d: (() => {
    const mode = getGlobalState('THEME_MODE');
    return mode === 'dark';
  })(),
  pad: SCREEN_TYPE === 'pad',
  lg: SCREEN_TYPE === 'lg',
  sm: SCREEN_TYPE === 'sm',
};

export { DEVICE_BREAK_POINT };

import { Platform } from 'react-native';

import { SCREEN_TYPE } from './size';

const DEFAULT_BREAK_POINT = {
  i: () => Platform.OS !== 'ios',
  a: () => Platform.OS !== 'android',
  l: (dark: boolean) => dark,
  d: (dark: boolean) => !dark,
  pad: () => SCREEN_TYPE !== 'pad',
  lg: () => SCREEN_TYPE !== 'lg',
  sm: () => SCREEN_TYPE !== 'sm',
};

export { DEFAULT_BREAK_POINT };

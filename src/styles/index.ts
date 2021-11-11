import { DEVICE_BREAK_POINT } from '@constants/breakpoint';
import { getGlobalState } from '@constants/state';
import { DARK_STYLE, LIGHT_STYLE } from '@constants/style';
import { merge } from 'lodash';
import { StyleProp } from 'react-native';

import { BorderBuilder } from './border';
import { ColorBuilder } from './color';
import { PositionBuilder } from './position';
import { SizeBuilder } from './size';
import { TextBuilder } from './text';
import { UtilsBuilder } from './utils';

export const styleBuilders = (style: IAppStyles) => ({
  ...BorderBuilder(style),
  ...PositionBuilder(style),
  ...TextBuilder(style),
  ...SizeBuilder(style),
  ...UtilsBuilder(style),
  ...ColorBuilder(style),
});

const LIGHT_BUILDER = styleBuilders(LIGHT_STYLE);
const DARK_BUILDER = styleBuilders(DARK_STYLE);
const BREAK_POINT = { ...DEVICE_BREAK_POINT, ...getGlobalState('EXTRA_BREAKPOINT') };
const BREAK_KEYS = Object.keys(BREAK_POINT);

/**
 * Cached builded styles for not build it each time call again with same build string
 */
const cacheBuilder: {
  [key: string]: {
    dark?: { [key: string]: string | number };
    light?: { [key: string]: string | number };
  };
} = {};

const getStyle = (dark: boolean, token: string): { [key: string]: string | number } => {
  let output = {};
  const tokenParts = token.split('-');
  const tokenPrefix = tokenParts.shift();
  const deviceBreakpoint = tokenParts.at(-1);
  if (deviceBreakpoint && BREAK_KEYS.includes(deviceBreakpoint)) {
    if (!BREAK_POINT[deviceBreakpoint]) return output;
  }
  const builder = dark ? DARK_BUILDER : LIGHT_BUILDER;
  if (builder[token]) {
    /**
     * If token is passthroght
     */
    const out = builder[token];
    if (typeof out !== 'function') {
      output = out;
    }
  } else {
    /**
     * Parsing token into multi part
     */
    if (tokenPrefix && builder[tokenPrefix]) {
      const buildCmd = builder[tokenPrefix];
      if (typeof buildCmd === 'function') {
        output = buildCmd(...tokenParts);
      }
    }
  }
  return output;
};

export const creator = (isDarkMode = false) => {
  const dark = isDarkMode ? 'dark' : 'light';
  /**
   * Convert tachyons syntax string to react native style
   * @param styleString String of multi prefix tachyons syntax
   * @example
   * // Note: `vw` and `vh` or anything relate to view size will calculated as percent of phone's screen
   * s(`vw-100 vh-100`) as {height: vh(100), width: vw(100)}
   * s(`w-100 h-100`) as {height: 100, width: 100}
   * s(`w-100% h-100%`) as {height: '100%', width: '100%'}
   * s(`bg`) as {background: style.COLOR.BACKGROUND_HARD}
   * s(`red`) as {color: style.COLOR.RED}
   * s(`relative`) as {position: 'relative'}
   * s(`f1 prime bold`) as {fontSize: style.FONT.SIZE.xl, color: style.COLORS.PRIME, fontWeight: style.FONT.WEIGHT.bold}
   */
  const prebuilt = (styleString: string) => {
    // Checking if style have already cached
    if (cacheBuilder[styleString]?.[dark]) {
      return cacheBuilder[styleString][dark];
    }
    // Compute string to style object
    let styles: { [key: string]: any } = {};
    const parts = styleString.split(' ');

    for (const part of parts) {
      const out = getStyle(isDarkMode, part);
      if (out) {
        styles = merge(styles, out);
      }
    }
    if (!cacheBuilder[styleString]) {
      cacheBuilder[styleString] = {};
    }
    cacheBuilder[styleString][dark] = styles;
    return styles as StyleProp<{}>;
  };
  return prebuilt;
};

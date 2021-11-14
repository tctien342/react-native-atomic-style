import { DEVICE_BREAK_POINT } from '@constants/breakpoint';
import { getGlobalState } from '@constants/state';
import { DARK_STYLE, LIGHT_STYLE } from '@constants/style';
import { IAppStyles } from '@declares/style';
import { isOnlyDigit } from '@utils/regex';
import { merge } from 'lodash';
import { StyleProp } from 'react-native';

import { BorderBuilder, TBorderBuilderKey } from './border';
import { ColorBuilder, TColorBuilderKey } from './color';
import { PositionBuilder, TPositionBuilderKey } from './position';
import { SizeBuilder, TSizeBuilderKey } from './size';
import { TextBuilder, TTextBuilderKey } from './text';
import { TUtilsBuilderKey, UtilsBuilder } from './utils';

export const styleBuilders = (style: IAppStyles, isDark: boolean) => ({
  ...BorderBuilder(style),
  ...PositionBuilder(style),
  ...TextBuilder(style),
  ...SizeBuilder(style),
  ...UtilsBuilder(),
  ...ColorBuilder(style),
  ...getGlobalState('EXTRA_BUILDER')(style, isDark),
});

export type TBuilderCmd =
  | TBorderBuilderKey
  | TColorBuilderKey
  | TPositionBuilderKey
  | TSizeBuilderKey
  | TTextBuilderKey
  | TUtilsBuilderKey;

export type TBuilderCmdKeys = keyof ReturnType<typeof styleBuilders>;

const LIGHT_BUILDER = styleBuilders(LIGHT_STYLE, false);
const DARK_BUILDER = styleBuilders(DARK_STYLE, true);
export const BREAK_POINT = { ...DEVICE_BREAK_POINT, ...getGlobalState('EXTRA_BREAKPOINT') };
export const BUILDER_PACK = { LIGHT: LIGHT_BUILDER, DARK: DARK_BUILDER, BREAK_POINT: BREAK_POINT };

/**
 * Cached builded styles for not build it each time call again with same build string
 */
const cacheBuilder: {
  [key: string]: {
    dark?: { [key: string]: string | number };
    light?: { [key: string]: string | number };
  };
} = {};

const getStyle = (dark: boolean, token: string, builderPack = BUILDER_PACK): { [key: string]: string | number } => {
  let output = {};
  let rawCmd = token;
  const tokenParts = token
    .split('-')
    .map((v) => (isOnlyDigit.test(v) ? (v.includes('.') ? parseFloat(v) : parseInt(v, 10)) : v));
  const tokenPrefix = tokenParts.shift() as string;

  /**
   * Support multi breakpoint at once
   */
  let deviceBreakpoint = tokenParts.slice(-1)[0];
  const breakKeys = Object.keys(builderPack.BREAK_POINT);
  while (typeof deviceBreakpoint === 'string' && breakKeys.includes(deviceBreakpoint)) {
    const breakCmd = builderPack.BREAK_POINT[deviceBreakpoint];
    if (typeof breakCmd === 'function') {
      if (!breakCmd(dark)) return output;
    } else if (!breakCmd) {
      return output;
    }
    tokenParts.pop();
    rawCmd = rawCmd.replace(`-${deviceBreakpoint}`, '');
    deviceBreakpoint = tokenParts.slice(-1)[0];
  }

  const builder = dark ? builderPack.DARK : builderPack.LIGHT;
  if (builder[rawCmd]) {
    /**
     * If token is passthroght
     */
    const out = builder[rawCmd];
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
      } else {
        output = builder[tokenPrefix];
      }
    }
  }
  return output;
};

export const creator = (isDarkMode = false, builderPack = BUILDER_PACK) => {
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
      const out = getStyle(isDarkMode, part, builderPack);
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

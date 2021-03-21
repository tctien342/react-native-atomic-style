import { DEFAULT_BREAK_POINT } from '@constants/breakpoint';
import { DARK_STYLE, LIGHT_STYLE } from '@constants/style';
import { isOnlyDigit } from '@utils/regex';
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

const lightStyleBuilder = styleBuilders(LIGHT_STYLE);
const darkStyleBuilder = styleBuilders(DARK_STYLE);

/**
 * Cached builded styles for not build it each time call again with same build string
 */
const cacheBuilder: {
  [key: string]: {
    dark?: { [key: string]: string | number };
    light?: { [key: string]: string | number };
  };
} = {};

const getStyle = (dark: boolean, prefix: string, commands: (string | number)[] = [], overrideBuilder = {}) => {
  const out = (dark ? { ...darkStyleBuilder, ...overrideBuilder } : { ...lightStyleBuilder, ...overrideBuilder })[
    prefix
  ]?.(...commands);
  if (out) {
    return out;
  }
  return false;
};

/**
 * Check if string builder have break point
 * @param commands array of builder string
 * @param args extras variable to passthrough
 */
const checkBreakPoint = (commands: string[], breakpoints = {}, ...args) => {
  const bkps = { ...DEFAULT_BREAK_POINT, ...breakpoints };
  for (const token of commands) {
    if (bkps[token]) {
      return bkps[token](...args);
    }
  }
  return false;
};

export const s = (isDarkMode = false, breakpoints = {}, overrideStyle = {}) => {
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
      let out: false | { [key: string]: any } = false;
      let commands = part.split('-');
      if (checkBreakPoint(commands, breakpoints, isDarkMode)) {
        continue;
      }
      commands = commands.filter((val) => !Object.keys(breakpoints).includes(val));
      switch (commands.length) {
        case 1: {
          out = getStyle(isDarkMode, part, undefined, overrideStyle);
          break;
        }
        case 2: {
          out = getStyle(
            isDarkMode,
            commands[0],
            [isOnlyDigit.test(commands[1]) || commands[1].includes('.') ? parseInt(commands[1], 10) : commands[1]],
            overrideStyle,
          );
          break;
        }
        case 3: {
          const prefix = commands.shift();
          if (prefix) {
            if (commands[0]) {
              out = getStyle(isDarkMode, prefix, commands, overrideStyle);
              break;
            }
            if (isOnlyDigit.test(commands[1]) || commands[1].includes('.')) {
              out = getStyle(isDarkMode, prefix, [parseInt(commands[1], 10) * -1], overrideStyle);
              break;
            }
          }
          out = getStyle(isDarkMode, part, undefined, overrideStyle);
        }
      }
      if (out) {
        const outKeys = Object.keys(out);
        if (styles[outKeys[0]] && Array.isArray(out[outKeys[0]])) {
          styles = {
            ...styles,
            [outKeys[0]]: [...out[outKeys[0]], ...styles[outKeys[0]]],
          };
          continue;
        }
        styles = { ...styles, ...out };
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

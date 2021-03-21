import {
  GLOBAL_DARK_STYLE_KEY,
  GLOBAL_DARKMODE_STATE,
  GLOBAL_LIGHT_STYLE_KEY,
  GLOBAL_STYLE_RULE_KEY,
  INITIAL_STATES,
} from '@constants/state';
import { DARK_STYLE, LIGHT_STYLE } from '@constants/style';
import { s } from '@styles/index';
import { useEffect, useState } from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

const { useGlobalState } = createGlobalState(INITIAL_STATES);

/**
 * Override current app style
 * @param style New style for app
 * @param isLightStyle True for set light theme
 */
const useOverrideStyle = (style: Partial<IAppStyles>, isLightStyle = true) => {
  if (isLightStyle) {
    const [, setStyle] = useGlobalState(GLOBAL_LIGHT_STYLE_KEY);
    setStyle({ ...LIGHT_STYLE, ...style });
  } else {
    const [, setStyle] = useGlobalState(GLOBAL_DARK_STYLE_KEY);
    setStyle({ ...DARK_STYLE, ...style });
  }
};

/**
 * Define your custom build rules
 * @param rules Your custom rules
 * ## Example
 * ```js
 * { "wh": (arg1, arg2) => ({width: arg1, height: arg2}) }
 * ```
 * `wh-10-22` will be { width: 10, height: 22 }
 * ```js
 * { "pa--l1": () => ({ padding: $l1 }) }
 * ```
 * `pa--btn` will be { padding: $l1 }
 */
const useOverrideRules = (
  rules: {
    [key: string]: <T>(...arg) => StyleProp<ViewStyle> | StyleProp<TextStyle>;
  } = {},
) => {
  const [, setRules] = useGlobalState(GLOBAL_STYLE_RULE_KEY);
  setRules(rules || []);
};

/**
 * Return current dark mode status and set function
 */
const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useGlobalState(GLOBAL_DARKMODE_STATE);
  return { isDarkMode, setDarkMode };
};

/**
 * Get style base on current phone dark mode status
 */
const useDynamicStyle = (): [IAppStyles, boolean] => {
  const [isDarkMode] = useGlobalState(GLOBAL_DARKMODE_STATE);
  const [lightTheme] = useGlobalState(GLOBAL_LIGHT_STYLE_KEY);
  const [darkTheme] = useGlobalState(GLOBAL_DARK_STYLE_KEY);
  const [style, setStyle] = useState<IAppStyles>(isDarkMode ? darkTheme : lightTheme);
  useEffect(() => {
    setStyle(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);
  return [style, isDarkMode];
};

/**
 * Make and style builder using hook
 */
const useStyleBuilder = (): {
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
  s: (styleString: string) => {} | null | undefined;
  /**
   * Current style of app
   */
  style: IAppStyles;
  /**
   * Current dark mode status
   */
  isDarkMode: boolean;
  /**
   * Set dark mode status
   */
  setDarkMode: (u: React.SetStateAction<boolean>) => void;
} => {
  const [style] = useDynamicStyle();
  const { isDarkMode, setDarkMode } = useDarkMode();
  const [overrideRules] = useGlobalState(GLOBAL_STYLE_RULE_KEY);
  return { s: s(isDarkMode, overrideRules), style, isDarkMode, setDarkMode };
};

export { useDarkMode, useDynamicStyle, useOverrideRules, useOverrideStyle, useStyleBuilder };

import {
  GLOBAL_BREAKPOINT_KEY,
  GLOBAL_DARK_STYLE_KEY,
  GLOBAL_DARKMODE_STATE,
  GLOBAL_LIGHT_STYLE_KEY,
  GLOBAL_STYLE_RULE_KEY,
  useGlobalState,
} from '@constants/state';
import { s } from '@styles/index';
import { useEffect, useState } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

const useOverrideBuilder = () => {
  const [crrRule, setRules] = useGlobalState(GLOBAL_STYLE_RULE_KEY);
  const [crrLight, setLightStyle] = useGlobalState(GLOBAL_LIGHT_STYLE_KEY);
  const [crrDark, setDarkStyle] = useGlobalState(GLOBAL_DARK_STYLE_KEY);
  const [crrBreaks, setBreakPoint] = useGlobalState(GLOBAL_BREAKPOINT_KEY);

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
  const overrideRules = (newRule: { [key: string]: (...arg) => StyleProp<ViewStyle> | StyleProp<TextStyle> }) => {
    setRules({ ...crrRule, ...newRule });
  };

  /**
   * Override current app style
   * @param style New style for app
   * @param isLightStyle True for set light theme
   */
  const overrideStyle = (style: Partial<IAppStyles>, isLightStyle = true) => {
    if (isLightStyle) {
      setLightStyle({ ...crrLight, ...style });
    } else {
      setDarkStyle({ ...crrDark, ...style });
    }
  };

  /**
   * Add new breakpoint into builder
   * ```js
   * {
   * i: () => Platform.OS !== 'ios'
   * a: () => Platform.OS !== 'android'
   * }
   * ```
   * => `w-10-i` will only in `ios`
   * and `w-10-a` will only in `android`
   * @param breakpoints New breakpoint to be declare
   */
  const overrideBreakpoint = (breakpoints: { [key: string]: (dark?: boolean) => boolean }) => {
    setBreakPoint({ ...crrBreaks, ...breakpoints });
  };

  return { overrideRules, overrideStyle, overrideBreakpoint };
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
  const [breakpoints] = useGlobalState(GLOBAL_BREAKPOINT_KEY);
  return { s: s(isDarkMode, breakpoints, overrideRules), style, isDarkMode, setDarkMode };
};

export { useDarkMode, useDynamicStyle, useOverrideBuilder, useStyleBuilder };

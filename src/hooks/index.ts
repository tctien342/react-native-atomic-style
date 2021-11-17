import { useGlobalState } from '@constants/state';
import { DARK_STYLE, LIGHT_STYLE } from '@constants/style';
import { RecursivePartial } from '@declares/app';
import { IAppStyles } from '@declares/style';
import { BREAK_POINT, BUILDER_PACK, clearCacheBuilder, creator, styleBuilders } from '@styles/index';
import { cloneDeep, merge } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import { StyleProp } from 'react-native';

export type TUseStyleBuilder = {
  /**
   * Convert tachyons syntax string to react native style
   * @param styleString String of multi prefix tachyons syntax
   * @example
   * // Note: `vw` and `vh` or anything relate to view size will calculated as percent of phone's screen
   * s(`vw-100 vh-100`) as {height: vh(100), width: vw(100)}
   * s(`w-100 h-100`, {opacity: 0.1}) as {height: 100, width: 100, opacity: 0.1}
   * s(`w-100% h-100%`) as {height: '100%', width: '100%'}
   * s(`bg`) as {background: style.COLOR.BACKGROUND_HARD}
   * s(`red`) as {color: style.COLOR.RED}
   * s(`relative`) as {position: 'relative'}
   * s(`f1 prime bold`) as {fontSize: style.FONT.SIZE.xl, color: style.COLORS.PRIME, fontWeight: style.FONT.WEIGHT.bold}
   */
  s: <C = {}>(styleString: string | TemplateStringsArray, ...args: StyleProp<C>[]) => StyleProp<C>;
  /**
   * Use as normal function with typped
   * @example
   * style([f.bold, f.white, f.bg("white")])
   */
  f: ReturnType<typeof styleBuilders>;
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
};

/**
 * Return current dark mode status and set function
 */
const useDarkMode = () => {
  const [mode, setMode] = useGlobalState('THEME_MODE');
  return { isDarkMode: mode === 'dark', setDarkMode: (isDark: boolean) => setMode(isDark ? 'dark' : 'light') };
};

/**
 * Get style base on current phone dark mode status
 */
const useDynamicStyle = (): [IAppStyles, boolean] => {
  const { isDarkMode } = useDarkMode();
  const [style, setStyle] = useState<IAppStyles>(isDarkMode ? DARK_STYLE : LIGHT_STYLE);

  useEffect(() => {
    setStyle(isDarkMode ? DARK_STYLE : LIGHT_STYLE);
  }, [isDarkMode]);

  return [style, isDarkMode];
};

/**
 * Make and style builder using hook
 */
const useStyleBuilder = (): TUseStyleBuilder => {
  const [style] = useDynamicStyle();
  const { isDarkMode, setDarkMode } = useDarkMode();
  const currentCompiler = BUILDER_PACK[isDarkMode ? 'LIGHT' : 'DARK'];

  /**
   * Style builder with callback cache
   */
  const builder = useCallback(
    <C = {}>(q: string | TemplateStringsArray, ...args: StyleProp<C>[]) => {
      const query = typeof q === 'string' ? q : q.join(' ');
      let extra: StyleProp<C | {}> = {};
      if (args.length > 0) {
        args.forEach((other) => {
          extra = merge(extra, other);
        });
        return merge(cloneDeep(merge(creator(isDarkMode)(query), extra)), extra) as StyleProp<C>;
      }
      return merge(creator(isDarkMode)(query), extra) as StyleProp<C>;
    },
    [isDarkMode],
  );

  return { s: builder, f: currentCompiler, style, isDarkMode, setDarkMode };
};

/**
 * Make an custom builder for your app
 */
const makeCustomBuilder = <T = {}, S = {}, B = {}>(config: {
  /**
   * Add extra style config for light mode
   */
  light?: RecursivePartial<IAppStyles> & T;
  /**
   * Add extra style config for dark mode
   */
  dark?: RecursivePartial<IAppStyles> & T;
  /**
   * Add extra breakpoint for builder
   */
  breakpoints?: RecursivePartial<typeof BREAK_POINT> & B;
  /**
   * Add extra builder
   */
  builder?: (style: IAppStyles & T, isDark: boolean) => S;
}) => {
  const lightStyle = merge(LIGHT_STYLE, config.light);
  const darkStyle = merge(DARK_STYLE, config.dark);
  const compiledStyle = {
    LIGHT: merge(styleBuilders(lightStyle, false), config.builder?.(lightStyle, false)),
    DARK: merge(styleBuilders(darkStyle, true), config.builder?.(darkStyle, true)),
    BREAK_POINT: merge(BREAK_POINT, config.breakpoints),
  };

  const { useGlobalState: useCustomGlobal } = createGlobalState({
    STYLE: { LIGHT: lightStyle, DARK: darkStyle },
    COMPILED: compiledStyle,
  });

  const useAppStyle = () => {
    const [globalStyle, setGlobalStyle] = useCustomGlobal('STYLE');
    const [, setCompiledStyle] = useCustomGlobal('COMPILED');

    const setStyle = (style: {
      light?: RecursivePartial<IAppStyles> & RecursivePartial<T>;
      dark?: RecursivePartial<IAppStyles> & RecursivePartial<T>;
    }) => {
      clearCacheBuilder();
      const lightStyle = merge(LIGHT_STYLE, style.light);
      const darkStyle = merge(DARK_STYLE, style.dark);
      setGlobalStyle((prev) => ({
        LIGHT: merge(prev.LIGHT, lightStyle),
        DARK: merge(prev.DARK, darkStyle),
      }));
      setCompiledStyle((prev) => ({
        ...prev,
        LIGHT: merge(prev.LIGHT, styleBuilders(lightStyle, false)),
        DARK: merge(prev.DARK, styleBuilders(darkStyle, true)),
      }));
    };
    return [globalStyle, setStyle] as [typeof globalStyle, typeof setStyle];
  };

  const useStyleBuilder = (): TUseStyleBuilder => {
    const { isDarkMode, setDarkMode } = useDarkMode();
    const [currentCompiled] = useCustomGlobal('COMPILED');
    const currentStyle: IAppStyles & T = isDarkMode ? darkStyle : lightStyle;
    const currentCompiler = currentCompiled[isDarkMode ? 'LIGHT' : 'DARK'] as ReturnType<typeof styleBuilders> & S;
    /**
     * Style builder with callback cache
     */
    const builder = useCallback(
      <C = {}>(q: string | TemplateStringsArray, ...args: StyleProp<C>[]) => {
        const query = typeof q === 'string' ? q : q.join(' ');
        let extra: StyleProp<C | {}> = {};
        if (args.length > 0) {
          args.forEach((other) => {
            extra = merge(extra, other);
          });
          return merge(cloneDeep(merge(creator(isDarkMode)(query), extra)), extra) as StyleProp<C>;
        }
        return creator(isDarkMode, currentCompiled)(query) as StyleProp<C>;
      },
      [isDarkMode, currentCompiled],
    );

    return { s: builder, f: currentCompiler, style: currentStyle, isDarkMode, setDarkMode };
  };
  return { useStyleBuilder, useAppStyle };
};

export { makeCustomBuilder, useDarkMode, useDynamicStyle, useStyleBuilder };

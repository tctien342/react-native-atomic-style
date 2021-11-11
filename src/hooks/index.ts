import { useGlobalState } from '@constants/state';
import { DARK_STYLE, LIGHT_STYLE } from '@constants/style';
import { creator } from '@styles/index';
import { useCallback, useEffect, useState } from 'react';

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

  /**
   * Style builder with callback cache
   */
  const builder = useCallback(
    (query: string) => {
      return creator(isDarkMode)(query);
    },
    [isDarkMode],
  );

  return { s: builder, style, isDarkMode, setDarkMode };
};

export { useDarkMode, useDynamicStyle, useStyleBuilder };

/// <reference types="react" />
import { s } from "@styles/index";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
/**
 * Override current app style
 * @param style New style for app
 * @param isLightStyle True for set light theme
 */
declare const useOverrideStyle: (style: Partial<IAppStyles>, isLightStyle?: boolean) => void;
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
declare const useOverrideRules: (rules?: {
    [key: string]: (...arg: any[]) => StyleProp<ViewStyle> | StyleProp<TextStyle>;
}) => void;
/**
 * Return current dark mode status and set function
 */
declare const useDarkMode: () => {
    isDarkMode: boolean;
    setDarkMode: (u: import("react").SetStateAction<boolean>) => void;
};
/**
 * Get style base on current phone dark mode status
 */
declare const useDynamicStyle: () => [IAppStyles, boolean];
/**
 * Make and style builder using hook
 */
declare const useStyleBuilder: () => {
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
};
export { useOverrideStyle, useDarkMode, useDynamicStyle, useStyleBuilder, useOverrideRules, };

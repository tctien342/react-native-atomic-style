/**
 * Resize an size base on scale value
 * @param size Size that need to be normalize
 */
declare const reScale: (size: number, overrideScale?: number | undefined) => number;
/**
 * Return width base on phone screen
 * @param percent 0-100 percent of view width
 */
declare const vw: (percent: number) => number;
/**
 * Return height base on phone screen
 * @param percent 0-100 percent of view height
 */
declare const vh: (percent: number) => number;
export { reScale, vh, vw };

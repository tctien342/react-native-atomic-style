/**
 * Check if string is contain only digit
 * @param str String that need to be checked
 */
const isOnlyDigit = /^-?[0-9][0-9,\.]*$/;

/**
 * Check if string is an hex color, allow alpha
 */
const isHexColor = /^#(?:(?:[0-9a-fA-F]{3}){1,2}|([0-9a-fA-F]{8}))$/;

export { isHexColor, isOnlyDigit };

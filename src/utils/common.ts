import { PixelRatio } from 'react-native';

/**
 * Check if device is tablet
 * Constant base on m0ngr31/react-native-device-detection
 */
export const isTablet = (screenWidth: number, screenHeight: number) => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = screenWidth * pixelDensity;
  const adjustedHeight = screenHeight * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else return pixelDensity === 2 && (adjustedWidth >= 1824 || adjustedHeight >= 1824);
};

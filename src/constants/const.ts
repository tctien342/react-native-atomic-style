import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const SCALE_BASE = SCREEN_WIDTH / 320; // based on iPhone 5s's scale

const MIN_DIMENSION = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);

const SCREEN_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;

const SCREEN_TYPE = SCREEN_RATIO > 1.8 ? 'lg' : SCREEN_RATIO > 4 / 3 ? 'sm' : 'pad';

export { MIN_DIMENSION, SCALE_BASE, SCREEN_HEIGHT, SCREEN_TYPE, SCREEN_WIDTH };

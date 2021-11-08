import { MIN_DIMENSION } from '@constants/size';
import { reScale, vh, vw } from '@utils/style';

export const SizeBuilder: TStringBuilder = (style: IAppStyles) => ({
  vh: (percent: number) => ({
    height: vh(percent),
  }),
  vh0: { height: 0 },
  vh10: { height: vh(10) },
  vh20: { height: vh(20) },
  vh30: { height: vh(30) },
  vh40: { height: vh(40) },
  vh50: { height: vh(50) },
  vh60: { height: vh(60) },
  vh70: { height: vh(70) },
  vh80: { height: vh(80) },
  vh90: { height: vh(90) },
  vh100: { height: vh(100) },
  h: (height: number | string) => ({
    height: typeof height === 'string' ? height : reScale(height),
  }),
  h0: { height: 0 },
  h25: { height: '25%' },
  h50: { height: '50%' },
  h75: { height: '75%' },
  h100: { height: '100%' },
  vw: (percent: number) => ({
    width: vw(percent),
  }),
  vw0: { width: 0 },
  vw10: { width: vw(10) },
  vw20: { width: vw(20) },
  vw30: { width: vw(30) },
  vw40: { width: vw(40) },
  vw50: { width: vw(50) },
  vw60: { width: vw(60) },
  vw70: { width: vw(70) },
  vw80: { width: vw(80) },
  vw90: { width: vw(90) },
  vw100: { width: vw(100) },
  w: (width: number | string) => ({
    width: typeof width === 'string' ? width : reScale(width),
  }),
  w0: { height: 0 },
  w10: { height: '0%' },
  w20: { height: '20%' },
  w30: { height: '30%' },
  w40: { height: '40%' },
  w50: { height: '50%' },
  w60: { height: '60%' },
  w70: { height: '70%' },
  w80: { height: '80%' },
  w90: { height: '90%' },
  w100: { height: '100%' },
  mvh: (percent: number) => ({
    maxHeight: vh(percent),
  }),
  mh: (maxHeight: number) => ({
    maxHeight: reScale(maxHeight),
  }),
  mvw: (percent: number) => ({
    maxWidth: vw(percent),
  }),
  mw: (maxWidth: number) => ({
    maxWidth: reScale(maxWidth),
  }),
  miw: (minWidth: number | string) => ({
    minWidth: typeof minWidth === 'string' ? minWidth : reScale(minWidth),
  }),
  mih: (minHeight: number | string) => ({
    minHeight: typeof minHeight === 'string' ? minHeight : reScale(minHeight),
  }),
  flex: (size = 1) => ({
    flex: size,
  }),
  wh: (size: number) => {
    const realSize = reScale(size);
    return {
      width: realSize,
      height: realSize,
    };
  },
  miwh: (percent: number) => {
    const realSize = (percent * MIN_DIMENSION) / 100;
    return {
      width: realSize,
      height: realSize,
    };
  },
});

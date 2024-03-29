import { MIN_DIMENSION } from '@constants/size';
import { IAppStyles } from '@declares/style';
import { reScale, vh, vw } from '@utils/style';

export const SizeBuilder = (style: IAppStyles) => ({
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
  h1: { height: 2 * style.SOLID.l1 },
  h2: { height: 2 * style.SOLID.l2 },
  h3: { height: 2 * style.SOLID.l3 },
  h4: { height: 2 * style.SOLID.l4 },
  h5: { height: 2 * style.SOLID.l5 },
  h6: { height: 2 * style.SOLID.l6 },
  h7: { height: 2 * style.SOLID.l7 },
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
  w0: { width: 0 },
  w1: { width: 2 * style.SOLID.l1 },
  w2: { width: 2 * style.SOLID.l2 },
  w3: { width: 2 * style.SOLID.l3 },
  w4: { width: 2 * style.SOLID.l4 },
  w5: { width: 2 * style.SOLID.l5 },
  w6: { width: 2 * style.SOLID.l6 },
  w7: { width: 2 * style.SOLID.l7 },
  mvh: (percent: number) => ({
    maxHeight: vh(percent),
  }),
  mh: (maxHeight: number) => ({
    maxHeight: reScale(maxHeight),
  }),
  mh0: { maxHeight: 0 },
  mh1: { maxHeight: 2 * style.SOLID.l1 },
  mh2: { maxHeight: 2 * style.SOLID.l2 },
  mh3: { maxHeight: 2 * style.SOLID.l3 },
  mh4: { maxHeight: 2 * style.SOLID.l4 },
  mh5: { maxHeight: 2 * style.SOLID.l5 },
  mh6: { maxHeight: 2 * style.SOLID.l6 },
  mh7: { maxHeight: 2 * style.SOLID.l7 },
  mvw: (percent: number) => ({
    maxWidth: vw(percent),
  }),
  mw: (maxWidth: number) => ({
    maxWidth: reScale(maxWidth),
  }),
  mw0: { maxWidth: 0 },
  mw1: { maxWidth: 2 * style.SOLID.l1 },
  mw2: { maxWidth: 2 * style.SOLID.l2 },
  mw3: { maxWidth: 2 * style.SOLID.l3 },
  mw4: { maxWidth: 2 * style.SOLID.l4 },
  mw5: { maxWidth: 2 * style.SOLID.l5 },
  mw6: { maxWidth: 2 * style.SOLID.l6 },
  mw7: { maxWidth: 2 * style.SOLID.l7 },
  miw: (minWidth: number | string) => ({
    minWidth: typeof minWidth === 'string' ? minWidth : reScale(minWidth),
  }),
  miw0: { minWidth: 0 },
  miw1: { minWidth: 2 * style.SOLID.l1 },
  miw2: { minWidth: 2 * style.SOLID.l2 },
  miw3: { minWidth: 2 * style.SOLID.l3 },
  miw4: { minWidth: 2 * style.SOLID.l4 },
  miw5: { minWidth: 2 * style.SOLID.l5 },
  miw6: { minWidth: 2 * style.SOLID.l6 },
  miw7: { minWidth: 2 * style.SOLID.l7 },
  mih: (minHeight: number | string) => ({
    minHeight: typeof minHeight === 'string' ? minHeight : reScale(minHeight),
  }),
  mih0: { minHeight: 0 },
  mih1: { minHeight: 2 * style.SOLID.l1 },
  mih2: { minHeight: 2 * style.SOLID.l2 },
  mih3: { minHeight: 2 * style.SOLID.l3 },
  mih4: { minHeight: 2 * style.SOLID.l4 },
  mih5: { minHeight: 2 * style.SOLID.l5 },
  mih6: { minHeight: 2 * style.SOLID.l6 },
  mih7: { minHeight: 2 * style.SOLID.l7 },
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
  wh1: { maxWidth: 2 * style.SOLID.l1, maxHeight: 2 * style.SOLID.l1 },
  wh2: { maxWidth: 2 * style.SOLID.l2, maxHeight: 2 * style.SOLID.l2 },
  wh3: { maxWidth: 2 * style.SOLID.l3, maxHeight: 2 * style.SOLID.l3 },
  wh4: { maxWidth: 2 * style.SOLID.l4, maxHeight: 2 * style.SOLID.l4 },
  wh5: { maxWidth: 2 * style.SOLID.l5, maxHeight: 2 * style.SOLID.l5 },
  wh6: { maxWidth: 2 * style.SOLID.l6, maxHeight: 2 * style.SOLID.l6 },
  wh7: { maxWidth: 2 * style.SOLID.l7, maxHeight: 2 * style.SOLID.l7 },
  vwh: (percent: number) => {
    const realSize = (percent * MIN_DIMENSION) / 100;
    return {
      width: realSize,
      height: realSize,
    };
  },
});

export type TSizeBuilderKey = ReturnType<typeof SizeBuilder>;

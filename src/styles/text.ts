import { reScale } from '@utils/style';

export const TextBuilder: TStringBuilder = (style: IAppStyles) => ({
  tc: {
    textAlign: 'center',
  },
  tf: {
    textAlign: 'left',
  },
  tr: {
    textAlign: 'right',
  },
  f1: {
    fontSize: style.FONT.SIZE.f1,
  },
  f2: {
    fontSize: style.FONT.SIZE.f2,
  },
  f3: {
    fontSize: style.FONT.SIZE.f3,
  },
  f4: {
    fontSize: style.FONT.SIZE.f4,
  },
  f5: {
    fontSize: style.FONT.SIZE.f5,
  },
  f6: {
    fontSize: style.FONT.SIZE.f6,
  },
  f7: {
    fontSize: style.FONT.SIZE.f7,
  },
  f: (size: number) => ({
    fontSize: reScale(size),
  }),
  fw: (size: string = style.FONT.WEIGHT.default) => ({
    fontWeight: size,
  }),
  thin: {
    fontWeight: style.FONT.WEIGHT.thin,
  },
  bold: {
    fontWeight: style.FONT.WEIGHT.bold,
  },
});

import { selColor } from './color';

export const BorderBuilder: TStringBuilder = (style: IAppStyles) => ({
  ba: () => ({
    borderStyle: 'solid',
    borderWidth: 1,
  }),
  bdot: () => ({
    borderStyle: 'dotted',
  }),
  bdash: () => ({
    borderStyle: 'dashed',
  }),
  bw: (width?: number) => ({
    borderWidth: width || 1,
  }),
  br: (radius?: number) => ({
    borderRadius: radius || style.BORDER.RADIUS.default,
  }),
  bc: (color: string) => ({
    borderColor: selColor(style, color, style.COLORS.FONT_HARD),
  }),
  brBtn: () => ({
    borderRadius: style.BORDER.RADIUS.default,
  }),
  brPill: () => ({
    borderRadius: style.BORDER.RADIUS.pill,
  }),
  brBottom: () => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),
  brTop: () => ({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),
  brRight: () => ({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }),
  brLeft: () => ({
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  }),
});

import { selColor } from './color';

export const BorderBuilder: TStringBuilder = (style: IAppStyles) => ({
  ba: () => ({
    borderStyle: 'solid',
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
  'br--btn': () => ({
    borderRadius: style.BORDER.RADIUS.default,
  }),
  'br--pill': () => ({
    borderRadius: style.BORDER.RADIUS.pill,
  }),
  'br--bottom': () => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }),
  'br--top': () => ({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),
  'br--right': () => ({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }),
  'br--left': () => ({
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  }),
});

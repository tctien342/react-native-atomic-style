import { selColor } from './color';

export const BorderBuilder = (style: IAppStyles) => ({
  ba: {
    borderStyle: 'solid',
    borderWidth: 1,
  },
  bw: (width?: number) => ({
    borderWidth: width || 1,
  }),
  br: (radius?: number) => ({
    borderRadius: radius || style.BORDER.RADIUS.default,
  }),
  br0: { borderRadius: 0 },
  br1: { borderRadius: style.SOLID.l1 },
  br2: { borderRadius: style.SOLID.l2 },
  br3: { borderRadius: style.SOLID.l3 },
  br4: { borderRadius: style.SOLID.l4 },
  br5: { borderRadius: style.SOLID.l5 },
  br6: { borderRadius: style.SOLID.l6 },
  br7: { borderRadius: style.SOLID.l7 },
  bc: (color: keyof typeof style.COLORS) => ({
    borderColor: selColor(style, color, style.COLORS.FONT_HARD),
  }),
  'b--dot': {
    borderStyle: 'dotted',
  },
  'b--dash': {
    borderStyle: 'dashed',
  },
  'br-btn': {
    borderRadius: style.BORDER.RADIUS.default,
  },
  'br-pill': {
    borderRadius: style.BORDER.RADIUS.pill,
  },
  'br--bottom': {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  'br--top': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  'br--right': {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  'br--left': {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
});

export type TBorderBuilderKey = ReturnType<typeof BorderBuilder>;

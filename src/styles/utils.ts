export const UtilsBuilder = () => ({
  img: { maxWidth: '100%' },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  'center-items': {
    justifyContent: 'center',
    alignItems: 'center',
  },
  'justify-center': { justifyContent: 'center' },
  'justify-start': { justifyContent: 'flex-start' },
  'justify-end': { justifyContent: 'flex-end' },
  'items-center': { alignItems: 'center' },
  'items-start': { alignItems: 'flex-start' },
  'items-end': { alignItems: 'flex-end' },
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-nowrap': { flexWrap: 'nowrap' },
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-column': {
    flexDirection: 'column',
  },
  shadow: (depth = 4, color = '#000') => ({
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: depth,
    elevation: 4,
  }),
  df: { display: 'flex' },
  dn: { display: 'none' },
  rotate: (value = '0deg') => ({
    transform: [{ rotate: `${value}deg` }],
  }),
  scale: (value = 1) => ({
    transform: [{ scale: value }],
  }),
  'overflow-visible': { overflow: 'visible' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-scroll': { overflow: 'scroll' },
});

export type TUtilsBuilderKey = ReturnType<typeof UtilsBuilder>;

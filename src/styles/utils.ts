export const UtilsBuilder: TStringBuilder = (_style: IAppStyles) => ({
  img: () => ({ maxWidth: '100%' }),
  absolute: () => ({
    position: 'absolute',
  }),
  relative: () => ({
    position: 'relative',
  }),
  centerItems: () => ({
    justifyContent: 'center',
    alignItems: 'center',
  }),
  justifyCenter: () => ({ justifyContent: 'center' }),
  justifyStart: () => ({ justifyContent: 'flex-start' }),
  justifyEnd: () => ({ justifyContent: 'flex-end' }),
  itemsCenter: () => ({ alignItems: 'center' }),
  itemsStart: () => ({ alignItems: 'flex-start' }),
  itemsEnd: () => ({ alignItems: 'flex-end' }),
  flexWrap: () => ({ flexWrap: 'wrap' }),
  flexNoWrap: () => ({ flexWrap: 'nowrap' }),
  flexRow: () => ({
    flexDirection: 'row',
  }),
  flexCol: () => ({
    flexDirection: 'column',
  }),
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
  df: () => ({ display: 'flex' }),
  dn: () => ({ display: 'none' }),
  rotate: (value = '0deg') => ({
    transform: [{ rotate: `${value}deg` }],
  }),
  scale: (value = 1) => ({
    transform: [{ scale: value }],
  }),
  ofVisible: () => ({ overflow: 'visible' }),
  ofHidden: () => ({ overflow: 'hidden' }),
  ofScroll: () => ({ overflow: 'scroll' }),
});

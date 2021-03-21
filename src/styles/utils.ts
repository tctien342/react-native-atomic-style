export const UtilsBuilder: TStringBuilder = (_style: IAppStyles) => ({
  img: () => ({ maxWidth: '100%' }),
  absolute: () => ({
    position: 'absolute',
  }),
  relative: () => ({
    position: 'relative',
  }),
  ci: () => ({
    justifyContent: 'center',
    alignItems: 'center',
  }),
  jc: () => ({ justifyContent: 'center' }),
  js: () => ({ justifyContent: 'flex-start' }),
  je: () => ({ justifyContent: 'flex-end' }),
  ic: () => ({ alignItems: 'center' }),
  is: () => ({ alignItems: 'flex-start' }),
  ie: () => ({ alignItems: 'flex-end' }),
  flexWrap: () => ({ flexWrap: 'wrap' }),
  row: () => ({
    flexDirection: 'row',
  }),
  col: () => ({
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
  'of--hidden': () => ({ overflow: 'hidden' }),
});

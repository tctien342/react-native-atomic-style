import { DEFAULT_VAL } from '@constants/style';

export const PositionBuilder: TStringBuilder = (style: IAppStyles) => ({
  top: (offset: number | string = 0) => ({
    top: offset,
  }),
  left: (offset: number | string = 0) => ({
    left: offset,
  }),
  right: (offset: number | string = 0) => ({
    right: offset,
  }),
  bottom: (offset: number | string = 0) => ({
    bottom: offset,
  }),
  z: (index = 1) => ({
    zIndex: index,
  }),
  pa: (size: number | string = DEFAULT_VAL.l1) => ({
    padding: size,
  }),
  pt: (size: number | string = DEFAULT_VAL.l1) => ({
    paddingTop: size,
  }),
  pr: (size: number | string = DEFAULT_VAL.l1) => ({
    paddingRight: size,
  }),
  pb: (size: number | string = DEFAULT_VAL.l1) => ({
    paddingBottom: size,
  }),
  pl: (size: number | string = DEFAULT_VAL.l1) => ({
    paddingLeft: size,
  }),
  ma: (size: number | string = DEFAULT_VAL.l1) => ({
    margin: size,
  }),
  mt: (size: number | string = DEFAULT_VAL.l1) => ({
    marginTop: size,
  }),
  mr: (size: number | string = DEFAULT_VAL.l1) => ({
    marginRight: size,
  }),
  mb: (size: number | string = DEFAULT_VAL.l1) => ({
    marginBottom: size,
  }),
  ml: (size: number | string = DEFAULT_VAL.l1) => ({
    marginLeft: size,
  }),
});

# react-native-atomic-style

Make your react style more easier

#### Support hooks

- useOverrideStyle(style)
- useDarkMode() => {isDarkMode, setDarkMode}
- useDynamicStyle => [currentStyle, isDarkMode]
- useStyleBuilder => { `` ts /** * Convert tachyons syntax string to react native style * @param styleString String of multi prefix tachyons syntax * @example * // Note: `vw` and `vh` or anything relate to view size will calculated as percent of phone's screen * s(`vw-100 vh-100`) as {height: vh(100), width: vw(100)} * s(`w-100 h-100`) as {height: 100, width: 100} * s(`w-100% h-100%`) as {height: '100%', width: '100%'} * s(`bg`) as {background: style.COLOR.BACKGROUND_HARD} * s(`red`) as {color: style.COLOR.RED} * s(`relative`) as {position: 'relative'} * s(`f1 prime bold`) as {fontSize: style.FONT.SIZE.xl, color: style.COLORS.PRIME, fontWeight: style.FONT.WEIGHT.bold} */ s:(str) /** * Current style of app */ style: IAppStyles; /** * Current dark mode status */ isDarkMode: boolean; /** * Set dark mode status */ setDarkMode: (u: React.SetStateAction<boolean>) => void;  `` }
- useOverrideRules(rules)

#### Import hook and using it

- Example

```tsx
    import { useStyleBuilder } from 'react-native-atomic-style';
    // On function component body
    const { s } = useStyleBuilder();
    // On render
    <Text style={s("f1 bold")}></Text>
    // => style={{ fontSize: {$MaxSize}, fontWeight: ${BoldWeight} }}
    <View style={s("flex vw-100")}></View>
    // => style={{ flex: 1, width: ${PhoneWidth*100%} }}
    <View style={[ s("flex bg-blue"),{ zIndex: -1} ]}></View>
    // => style={{ flex: 1, backgroundColor: ${blue}, zIndex: -1}}

    <View style={s('flex w-100 h-100 bg-hard')}></View>
    <View style={s('flex w-10% h-10% bg-blue pa-2%')}></View>
    <Text style={s('f1 bold hard tr w-100%')}></Text>
```

#### Support breaks point

```ts
const breakpoint = {
  i: () => Platform.OS === 'android',
  a: () => Platform.OS === 'ios',
  l: (dark: boolean) => dark,
  d: (dark: boolean) => !dark,
  pad: () => SCREEN_TYPE !== 'pad',
  lg: () => SCREEN_TYPE !== 'lg',
  sm: () => SCREEN_TYPE !== 'sm',
};
```

- Example

```ts
s('w-56-a w-64-i');
// => Will be { width: 56 } on android and { width: 64 } on ios

s('w-10% w-20%-sm');
// => Will be default { width: 10% } and { width: 20% } on small screen
```

### Default config

> You can override style by using `useOverrideStyle` hook

```ts
const LIGHT_STYLE: IAppStyles = {
  COLORS: {
    PRIME: '#389bff',
    PURPLE: '#9b71de',
    BLUE: 'blue',
    RED: '#de2f2f',
    ORANGE: 'orange',
    GREEN: 'green',
    WHITE: 'white',
    FONT_LIGHT: '#717171',
    FONT_HARD: '#2b2b2b',
    BACKGROUND_LIGHT: '#f6f6f6',
    BACKGROUND_MED: 'white',
    BACKGROUND_HARD: 'white',
    BLACK: '#000',
    GRAY: '#b6c0cc',
  },
  FONT: {
    SIZE: {
      f7: reScale(8),
      f6: reScale(10),
      f5: reScale(12),
      f4: reScale(14),
      f3: reScale(18),
      f2: reScale(22),
      f1: reScale(26),
    },
    WEIGHT: { thin: '200', bold: 'bold', default: 'normal' },
  },
  BORDER: {
    RADIUS: {
      default: reScale(10),
      pill: reScale(42),
      ...DEFAULT_VAL,
    },
  },
};

const DARK_STYLE: IAppStyles = {
  ...LIGHT_STYLE,
  COLORS: {
    ...LIGHT_STYLE.COLORS,
    RED: '#ff0266',
    FONT_LIGHT: '#5D5D5D',
    FONT_HARD: '#D7D7D7',
    BACKGROUND_LIGHT: '#585858',
    BACKGROUND_MED: '#464646',
    BACKGROUND_HARD: '#333333',
  },
  FONT: {
    ...LIGHT_STYLE.FONT,
    WEIGHT: { thin: '300', bold: 'bold', default: 'normal' },
  },
};
```

### Support command

> You can override using `useOverrideRules` hook

| Command | About | Note |
| :-- | :-- | :-- | --- |
| <b>View Size |  |  |
| vw-{size} | Width base on screen's width | value as percent |
| vh-{size} | Height base on screen's height | value as percent |
| wh-{size} | Height = Width = min screen's dimentions (Square view) | value as percent |
| h-{size} | height of view, base on parent size for percent or pixel | can be h-100% for 100% or h-100 for 100px |
| w-{size} | width of view, base on parent size for percent or pixel | can be w-100% for 100% or w-100 for 100px |
| mh-{size} | maxHeight of view, base on parent size for percent or pixel | can be mh-100% for 100% or mh-100 for 100px |
| mw-{size} | maxWidth of view, base on parent size for percent or pixel | can be mw-100% for 100% or mw-100 for 100px |
| mvh-{size} | maxHeight of view, base on phone's height | value as percent |
| mvw-{size} | maxWidth of view, base on phone's width | value as percent |
| flex-{size} | define flex size of view | value as number, default is 1 |
| <b>Text styles |  |
| tc | textAlign: center |  |
| tl | textAlign: left |  |
| tr | textAlign: right |  |
| f1 | fontSize: \${xlSize} |  |
| f2 | fontSize: \${lSize} |  |
| f3 | fontSize: \${mSize} |  |
| f4 | fontSize: \${sSize} |  |
| f5 | fontSize: \${xsSize} |  |
| bold | fontWeight: \${boldSize} |  |
| thin | fontWeight: \${thinSize} |  |
| <b>Object position |  |
| absolute | position: absolute |  |
| relative | position: relative |  |
| top-{pos} | set top position | can be top-10 for 10px or top-10% for 10% from top |
| bottom-{pos} | set bottom position | can be bottom-10 for 10px or bottom-10% for 10% from bottom |
| left-{pos} | set left position | can be left-10 for 10px or left-10% for 10% from left |
| right-{pos} | set right position | can be right-10 for 10px or right-10% for 10% from right |
| z-{index} | set zIndex of view | value as number > 0 only |
| pa-{size} | padding view by size | size can be `10%` for percent or `10` for pixel |
| pt-{size} | paddingTop view by size | size can be `10%` for percent or `10` for pixel |
| pb-{size} | paddingBottom view by size | size can be `10%` for percent or `10` for pixel |
| pl-{size} | paddingLeft view by size | size can be `10%` for percent or `10` for pixel |
| pr-{size} | paddingRight view by size | size can be `10%` for percent or `10` for pixel |
| ma-{size} | margin view by size | size can be `10%` for percent or `10` for pixel |
| mt-{size} | marginTop view by size | size can be `10%` for percent or `10` for pixel |
| mb-{size} | marginBottom view by size | size can be `10%` for percent or `10` for pixel |
| ml-{size} | marginLeft view by size | size can be `10%` for percent or `10` for pixel |
| mr-{size} | marginRight view by size | size can be `10%` for percent or `10` for pixel |
| <b>Border properties |  |
| ba | borderStyle solid |  |
| bdot | borderStyle dotted |  |
| bdash | borderStyle dashed |  |
| bw-{size} | borderWidth size | size can be `10%` for percent or `10` for pixel |
| br-{size} | borderRadius size, default as \${Input Radius} | size can be `10%` for percent or `10` for pixel | percent or `10` for pixel |
| br--pill | borderRadius \${pill radius} |  |
| br--bottom | borderRadius only bottom |  |
| br--top | borderRadius only top |  |
| br--left | borderRadius only left |  |
| br--right | borderRadius only right |  |
| <b>Utils properties |  |
| ci | center all items in view |  |
| jc | justifyContent center |  |
| ic | alignItems center |  |
| row | flexDirection: row |  |
| column | flexDirection: column |  |
| shadow-${depth}-${color} | Drop shadow to view | depth as number default 3, color default #000, depth and color only work on ios |
| <b>Color properties |  |
| o-{alpha} | opacity: alpha size | alpha size from 0-100 as percent |
| white | color: \${white} |
| prime | color: \${prime} |
| purble | color: \${purble} |
| blue | color: \${blue} |
| orange | color: \${orange} |
| red | color: \${red} |
| green | color: \${green} |
| black | color: \${black} |
| light | color: \${fontLight} |
| hard | color: \${fontHard} |
| bg-{color} | backgroundColor: color, support all above color, default as \${backgroundHard} | `light` and `hard` color with changed to `flight` and `fhard` |
| bg-med | color: \${backgroundMedium} |
| bg-light | color: \${backgroundLight} |

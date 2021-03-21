import { Dimensions, Platform, PixelRatio } from 'react-native';
import { useReducer, useEffect, useRef, useState, useCallback } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var _a$1 = Dimensions.get('window'), SCREEN_WIDTH = _a$1.width, SCREEN_HEIGHT = _a$1.height;
var DEFAULT_SIZE_CONF = {
    scaleBase: SCREEN_WIDTH / 320,
    scaleSize: {
        sm: 0.95,
        lg: 1,
        pad: 0.9,
    },
    scalePoint: {
        x1: 1.8,
        x2: 4 / 3,
    },
};
var MIN_DIMENSION = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);
var SCREEN_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
var SCALE_BASE = DEFAULT_SIZE_CONF.scaleBase;
var SCREEN_TYPE = SCREEN_RATIO > DEFAULT_SIZE_CONF.scalePoint.x1 ? 'lg' : SCREEN_RATIO > DEFAULT_SIZE_CONF.scalePoint.x2 ? 'sm' : 'pad';
/**
 * Change current scale config
 */
var setSizeConfig = function (config) {
    DEFAULT_SIZE_CONF = __assign(__assign({}, DEFAULT_SIZE_CONF), config);
};

const s$1=(e,t)=>{if(!e.includes(t))throw new Error(`'${t}' not found. It must be provided in initialState as a property key.`)},c="production"!==process.env.NODE_ENV?Symbol("UPDATE_STATE"):Symbol(),a=(a,l)=>{const u=Object.keys(l);let i=l,d=null;const p={};u.forEach(e=>{p[e]=new Set;});const E=(e,t)=>t.type===c?t.r?t.r(e):t.e:a(e,t),f=(e,t)=>{"production"!==process.env.NODE_ENV&&s$1(u,e);const r=r=>{return {...r,[e]:(o=r[e],n=t,"function"==typeof n?n(o):n)};var o,n;};if(d)d({type:c,r});else {i=r(i);const t=i[e];p[e].forEach(e=>e(t));}},S=(e,t)=>{u.forEach(r=>{const o=t[r];e[r]!==o&&p[r].forEach(e=>e(o));});};return {useGlobalStateProvider:()=>{const[o,n]=useReducer(E,i);useEffect(()=>{if(d)throw new Error("Only one global state provider is allowed");return d=n,n({type:c,e:i}),()=>{d=null;}},[]);const s=useRef(o);S(s.current,o),s.current=o,useEffect(()=>{i=o;},[o]);},useGlobalState:e=>{"production"!==process.env.NODE_ENV&&s$1(u,e);const[r,c]=useState(i[e]);return useEffect(()=>(p[e].add(c),c(i[e]),()=>{p[e].delete(c);}),[e]),[r,useCallback(t=>f(e,t),[e])]},getGlobalState:e=>("production"!==process.env.NODE_ENV&&s$1(u,e),i[e]),setGlobalState:f,getState:()=>i,setState:e=>{if(d)d({type:c,e});else {const t=i;i=e,S(t,i);}},dispatch:e=>{if(d)d(e);else {const t=i;i=a(i,e),S(t,i);}return e}}},l=e=>a((e,t)=>e,e);

/**
 * Resize an size base on scale value
 * @param size Size that need to be normalize
 */
var reScale = function (size, scale) {
    if (scale === void 0) { scale = SCALE_BASE; }
    if (size === 1)
        return 1;
    var newSize = size * scale;
    switch (SCREEN_TYPE) {
        case 'sm':
            newSize *= 0.95;
            break;
        case 'pad':
            newSize *= 0.9;
            break;
    }
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
};
/**
 * Return width base on phone screen
 * @param percent 0-100 percent of view width
 */
var vw = function (percent) {
    return Math.round((SCREEN_WIDTH * percent) / 100);
};
/**
 * Return height base on phone screen
 * @param percent 0-100 percent of view height
 */
var vh = function (percent) {
    return Math.round((SCREEN_HEIGHT * percent) / 100);
};

var DEFAULT_VAL = {
    l1: reScale(2),
    l2: reScale(4),
    l3: reScale(8),
    l4: reScale(12),
    l5: reScale(16),
};
var LIGHT_STYLE = {
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
        RADIUS: __assign({ default: reScale(10), pill: reScale(42) }, DEFAULT_VAL),
    },
};
var DARK_STYLE = __assign(__assign({}, LIGHT_STYLE), { COLORS: __assign(__assign({}, LIGHT_STYLE.COLORS), { RED: '#ff0266', FONT_LIGHT: '#5D5D5D', FONT_HARD: '#D7D7D7', BACKGROUND_LIGHT: '#585858', BACKGROUND_MED: '#464646', BACKGROUND_HARD: '#333333' }), FONT: __assign(__assign({}, LIGHT_STYLE.FONT), { WEIGHT: { thin: '300', bold: 'bold', default: 'normal' } }) });

var _a;
var GLOBAL_LIGHT_STYLE_KEY = 'GLOBAL_LIGHT_STYLE_KEY';
var GLOBAL_DARK_STYLE_KEY = 'GLOBAL_DARK_STYLE_KEY';
var GLOBAL_STYLE_RULE_KEY = 'GLOBAL_STYLE_RULE_KEY';
var GLOBAL_DARKMODE_STATE = 'GLOBAL_DARKMODE_STATE';
var GLOBAL_BREAKPOINT_KEY = 'GLOBAL_BREAKPOINT_KEY';
var INITIAL_STATES = (_a = {},
    _a[GLOBAL_LIGHT_STYLE_KEY] = LIGHT_STYLE,
    _a[GLOBAL_DARK_STYLE_KEY] = DARK_STYLE,
    _a[GLOBAL_BREAKPOINT_KEY] = {},
    _a[GLOBAL_STYLE_RULE_KEY] = {},
    _a[GLOBAL_DARKMODE_STATE] = false,
    _a);
var _b = l(INITIAL_STATES), useGlobalState = _b.useGlobalState;

var DEFAULT_BREAK_POINT = {
    i: function () { return Platform.OS !== 'ios'; },
    a: function () { return Platform.OS !== 'android'; },
    l: function (dark) { return dark; },
    d: function (dark) { return !dark; },
    pad: function () { return SCREEN_TYPE !== 'pad'; },
    lg: function () { return SCREEN_TYPE !== 'lg'; },
    sm: function () { return SCREEN_TYPE !== 'sm'; },
};

/**
 * Check if string is contain only digit
 * @param str String that need to be checked
 */
var isOnlyDigit = /^\d+$/;

var selColor = function (style, select, defaultColor) {
    var key = select.toUpperCase();
    switch (select) {
        case 'med':
            key = 'BACKGROUND_MED';
            break;
        case 'light':
            key = 'BACKGROUND_LIGHT';
            break;
        case 'fhard':
            key = 'FONT_HARD';
            break;
        case 'flight':
            key = 'FONT_LIGHT';
            break;
    }
    if (key in style.COLORS) {
        return style.COLORS[key];
    }
    return defaultColor;
};
var ColorBuilder = function (style) { return ({
    white: function () { return ({ color: style.COLORS.WHITE }); },
    hard: function () { return ({ color: style.COLORS.FONT_HARD }); },
    light: function () { return ({ color: style.COLORS.FONT_LIGHT }); },
    prime: function () { return ({ color: style.COLORS.PRIME }); },
    purble: function () { return ({ color: style.COLORS.PURPLE }); },
    blue: function () { return ({ color: style.COLORS.BLUE }); },
    orange: function () { return ({ color: style.COLORS.ORANGE }); },
    red: function () { return ({ color: style.COLORS.RED }); },
    green: function () { return ({ color: style.COLORS.GREEN }); },
    black: function () { return ({ color: style.COLORS.BLACK }); },
    o: function (value) { return ({
        opacity: value > 1 ? value / 100 : value,
    }); },
    bg: function (color) {
        return {
            backgroundColor: selColor(style, color, style.COLORS.BACKGROUND_HARD),
        };
    },
    bgmed: function () { return ({ backgroundColor: style.COLORS.BACKGROUND_MED }); },
    bglight: function () { return ({ colbackgroundColoror: style.COLORS.BACKGROUND_LIGHT }); },
}); };

var BorderBuilder = function (style) { return ({
    ba: function () { return ({
        borderStyle: 'solid',
        borderWidth: 1,
    }); },
    bdot: function () { return ({
        borderStyle: 'dotted',
    }); },
    bdash: function () { return ({
        borderStyle: 'dashed',
    }); },
    bw: function (width) { return ({
        borderWidth: width || 1,
    }); },
    br: function (radius) { return ({
        borderRadius: radius || style.BORDER.RADIUS.default,
    }); },
    bc: function (color) { return ({
        borderColor: selColor(style, color, style.COLORS.FONT_HARD),
    }); },
    brBtn: function () { return ({
        borderRadius: style.BORDER.RADIUS.default,
    }); },
    brPill: function () { return ({
        borderRadius: style.BORDER.RADIUS.pill,
    }); },
    brBottom: function () { return ({
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    }); },
    brTop: function () { return ({
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    }); },
    brRight: function () { return ({
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    }); },
    brLeft: function () { return ({
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    }); },
}); };

var PositionBuilder = function (style) { return ({
    top: function (offset) {
        if (offset === void 0) { offset = 0; }
        return ({
            top: offset,
        });
    },
    left: function (offset) {
        if (offset === void 0) { offset = 0; }
        return ({
            left: offset,
        });
    },
    right: function (offset) {
        if (offset === void 0) { offset = 0; }
        return ({
            right: offset,
        });
    },
    bottom: function (offset) {
        if (offset === void 0) { offset = 0; }
        return ({
            bottom: offset,
        });
    },
    z: function (index) {
        if (index === void 0) { index = 1; }
        return ({
            zIndex: index,
        });
    },
    pa: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            padding: size,
        });
    },
    pt: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            paddingTop: size,
        });
    },
    pr: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            paddingRight: size,
        });
    },
    pb: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            paddingBottom: size,
        });
    },
    pl: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            paddingLeft: size,
        });
    },
    ma: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            margin: size,
        });
    },
    mt: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            marginTop: size,
        });
    },
    mr: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            marginRight: size,
        });
    },
    mb: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            marginBottom: size,
        });
    },
    ml: function (size) {
        if (size === void 0) { size = DEFAULT_VAL.l1; }
        return ({
            marginLeft: size,
        });
    },
}); };

var SizeBuilder = function (style) { return ({
    vh: function (percent) { return ({
        height: vh(percent),
    }); },
    h: function (height) { return ({
        height: typeof height === 'string' ? height : reScale(height),
    }); },
    vw: function (percent) { return ({
        width: vw(percent),
    }); },
    w: function (width) { return ({
        width: typeof width === 'string' ? width : reScale(width),
    }); },
    mvh: function (percent) { return ({
        maxHeight: vh(percent),
    }); },
    mh: function (maxHeight) { return ({
        maxHeight: reScale(maxHeight),
    }); },
    mvw: function (percent) { return ({
        maxWidth: vw(percent),
    }); },
    mw: function (maxWidth) { return ({
        maxWidth: reScale(maxWidth),
    }); },
    miw: function (minWidth) { return ({
        minWidth: typeof minWidth === 'string' ? minWidth : reScale(minWidth),
    }); },
    mih: function (minHeight) { return ({
        minHeight: typeof minHeight === 'string' ? minHeight : reScale(minHeight),
    }); },
    flex: function (size) {
        if (size === void 0) { size = 1; }
        return ({
            flex: size,
        });
    },
    wh: function (size) {
        var realSize = reScale(size);
        return {
            width: realSize,
            height: realSize,
        };
    },
    miwh: function (percent) {
        var realSize = (percent * MIN_DIMENSION) / 100;
        return {
            width: realSize,
            height: realSize,
        };
    },
}); };

var TextBuilder = function (style) { return ({
    tc: function () { return ({
        textAlign: 'center',
    }); },
    tf: function () { return ({
        textAlign: 'left',
    }); },
    tr: function () { return ({
        textAlign: 'right',
    }); },
    f1: function () { return ({
        fontSize: style.FONT.SIZE.f1,
    }); },
    f2: function () { return ({
        fontSize: style.FONT.SIZE.f2,
    }); },
    f3: function () { return ({
        fontSize: style.FONT.SIZE.f3,
    }); },
    f4: function () { return ({
        fontSize: style.FONT.SIZE.f4,
    }); },
    f5: function () { return ({
        fontSize: style.FONT.SIZE.f5,
    }); },
    f6: function () { return ({
        fontSize: style.FONT.SIZE.f6,
    }); },
    f7: function () { return ({
        fontSize: style.FONT.SIZE.f7,
    }); },
    f: function (size) { return ({
        fontSize: reScale(size),
    }); },
    fw: function (size) {
        if (size === void 0) { size = style.FONT.WEIGHT.default; }
        return ({
            fontWeight: size,
        });
    },
    thin: function () { return ({
        fontWeight: style.FONT.WEIGHT.thin,
    }); },
    bold: function () { return ({
        fontWeight: style.FONT.WEIGHT.bold,
    }); },
}); };

var UtilsBuilder = function (_style) { return ({
    img: function () { return ({ maxWidth: '100%' }); },
    absolute: function () { return ({
        position: 'absolute',
    }); },
    relative: function () { return ({
        position: 'relative',
    }); },
    centerItems: function () { return ({
        justifyContent: 'center',
        alignItems: 'center',
    }); },
    justifyCenter: function () { return ({ justifyContent: 'center' }); },
    justifyStart: function () { return ({ justifyContent: 'flex-start' }); },
    justifyEnd: function () { return ({ justifyContent: 'flex-end' }); },
    itemsCenter: function () { return ({ alignItems: 'center' }); },
    itemsStart: function () { return ({ alignItems: 'flex-start' }); },
    itemsEnd: function () { return ({ alignItems: 'flex-end' }); },
    flexWrap: function () { return ({ flexWrap: 'wrap' }); },
    flexNoWrap: function () { return ({ flexWrap: 'nowrap' }); },
    flexRow: function () { return ({
        flexDirection: 'row',
    }); },
    flexCol: function () { return ({
        flexDirection: 'column',
    }); },
    shadow: function (depth, color) {
        if (depth === void 0) { depth = 4; }
        if (color === void 0) { color = '#000'; }
        return ({
            shadowColor: color,
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.2,
            shadowRadius: depth,
            elevation: 4,
        });
    },
    df: function () { return ({ display: 'flex' }); },
    dn: function () { return ({ display: 'none' }); },
    rotate: function (value) {
        if (value === void 0) { value = '0deg'; }
        return ({
            transform: [{ rotate: value + "deg" }],
        });
    },
    scale: function (value) {
        if (value === void 0) { value = 1; }
        return ({
            transform: [{ scale: value }],
        });
    },
    ofVisible: function () { return ({ overflow: 'visible' }); },
    ofHidden: function () { return ({ overflow: 'hidden' }); },
    ofScroll: function () { return ({ overflow: 'scroll' }); },
}); };

var styleBuilders = function (style) { return (__assign(__assign(__assign(__assign(__assign(__assign({}, BorderBuilder(style)), PositionBuilder()), TextBuilder(style)), SizeBuilder()), UtilsBuilder()), ColorBuilder(style))); };
var lightStyleBuilder = styleBuilders(LIGHT_STYLE);
var darkStyleBuilder = styleBuilders(DARK_STYLE);
/**
 * Cached builded styles for not build it each time call again with same build string
 */
var cacheBuilder = {};
var getStyle = function (dark, prefix, commands, overrideBuilder) {
    var _a, _b;
    if (commands === void 0) { commands = []; }
    if (overrideBuilder === void 0) { overrideBuilder = {}; }
    var out = (_b = (_a = (dark ? __assign(__assign({}, darkStyleBuilder), overrideBuilder) : __assign(__assign({}, lightStyleBuilder), overrideBuilder)))[prefix]) === null || _b === void 0 ? void 0 : _b.call.apply(_b, __spreadArray([_a], commands));
    if (out) {
        return out;
    }
    return false;
};
/**
 * Check if string builder have break point
 * @param commands array of builder string
 * @param args extras variable to passthrough
 */
var checkBreakPoint = function (commands, breakpoints) {
    if (breakpoints === void 0) { breakpoints = {}; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var bkps = __assign(__assign({}, DEFAULT_BREAK_POINT), breakpoints);
    for (var _a = 0, commands_1 = commands; _a < commands_1.length; _a++) {
        var token = commands_1[_a];
        if (bkps[token]) {
            return bkps[token].apply(bkps, args);
        }
    }
    return false;
};
var s = function (isDarkMode, breakpoints, overrideStyle) {
    if (isDarkMode === void 0) { isDarkMode = false; }
    if (breakpoints === void 0) { breakpoints = {}; }
    if (overrideStyle === void 0) { overrideStyle = {}; }
    var dark = isDarkMode ? 'dark' : 'light';
    /**
     * Convert tachyons syntax string to react native style
     * @param styleString String of multi prefix tachyons syntax
     * @example
     * // Note: `vw` and `vh` or anything relate to view size will calculated as percent of phone's screen
     * s(`vw-100 vh-100`) as {height: vh(100), width: vw(100)}
     * s(`w-100 h-100`) as {height: 100, width: 100}
     * s(`w-100% h-100%`) as {height: '100%', width: '100%'}
     * s(`bg`) as {background: style.COLOR.BACKGROUND_HARD}
     * s(`red`) as {color: style.COLOR.RED}
     * s(`relative`) as {position: 'relative'}
     * s(`f1 prime bold`) as {fontSize: style.FONT.SIZE.xl, color: style.COLORS.PRIME, fontWeight: style.FONT.WEIGHT.bold}
     */
    var prebuilt = function (styleString) {
        var _a;
        var _b;
        // Checking if style have already cached
        if ((_b = cacheBuilder[styleString]) === null || _b === void 0 ? void 0 : _b[dark]) {
            return cacheBuilder[styleString][dark];
        }
        // Compute string to style object
        var styles = {};
        var parts = styleString.split(' ');
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            var out = false;
            var commands = part.split('-');
            if (checkBreakPoint(commands, breakpoints, isDarkMode)) {
                continue;
            }
            commands = commands.filter(function (val) { return !Object.keys(breakpoints).includes(val); });
            switch (commands.length) {
                case 1: {
                    out = getStyle(isDarkMode, part, undefined, overrideStyle);
                    break;
                }
                case 2: {
                    out = getStyle(isDarkMode, commands[0], [isOnlyDigit.test(commands[1]) || commands[1].includes('.') ? parseInt(commands[1], 10) : commands[1]], overrideStyle);
                    break;
                }
                case 3: {
                    var prefix = commands.shift();
                    if (prefix) {
                        if (commands[0]) {
                            out = getStyle(isDarkMode, prefix, commands, overrideStyle);
                            break;
                        }
                        if (isOnlyDigit.test(commands[1]) || commands[1].includes('.')) {
                            out = getStyle(isDarkMode, prefix, [parseInt(commands[1], 10) * -1], overrideStyle);
                            break;
                        }
                    }
                    out = getStyle(isDarkMode, part, undefined, overrideStyle);
                }
            }
            if (out) {
                var outKeys = Object.keys(out);
                if (styles[outKeys[0]] && Array.isArray(out[outKeys[0]])) {
                    styles = __assign(__assign({}, styles), (_a = {}, _a[outKeys[0]] = __spreadArray(__spreadArray([], out[outKeys[0]]), styles[outKeys[0]]), _a));
                    continue;
                }
                styles = __assign(__assign({}, styles), out);
            }
        }
        if (!cacheBuilder[styleString]) {
            cacheBuilder[styleString] = {};
        }
        cacheBuilder[styleString][dark] = styles;
        return styles;
    };
    return prebuilt;
};

var useOverrideBuilder = function () {
    var _a = useGlobalState(GLOBAL_STYLE_RULE_KEY), crrRule = _a[0], setRules = _a[1];
    var _b = useGlobalState(GLOBAL_LIGHT_STYLE_KEY), crrLight = _b[0], setLightStyle = _b[1];
    var _c = useGlobalState(GLOBAL_DARK_STYLE_KEY), crrDark = _c[0], setDarkStyle = _c[1];
    var _d = useGlobalState(GLOBAL_BREAKPOINT_KEY), crrBreaks = _d[0], setBreakPoint = _d[1];
    /**
     * Define your custom build rules
     * @param rules Your custom rules
     * ## Example
     * ```js
     * { "wh": (arg1, arg2) => ({width: arg1, height: arg2}) }
     * ```
     * `wh-10-22` will be { width: 10, height: 22 }
     * ```js
     * { "pa--l1": () => ({ padding: $l1 }) }
     * ```
     * `pa--btn` will be { padding: $l1 }
     */
    var overrideRules = function (newRule) {
        setRules(__assign(__assign({}, crrRule), newRule));
    };
    /**
     * Override current app style
     * @param style New style for app
     * @param isLightStyle True for set light theme
     */
    var overrideStyle = function (style, isLightStyle) {
        if (isLightStyle === void 0) { isLightStyle = true; }
        if (isLightStyle) {
            setLightStyle(__assign(__assign({}, crrLight), style));
        }
        else {
            setDarkStyle(__assign(__assign({}, crrDark), style));
        }
    };
    /**
     * Add new breakpoint into builder
     * ```js
     * {
     * i: () => Platform.OS !== 'ios'
     * a: () => Platform.OS !== 'android'
     * }
     * ```
     * => `w-10-i` will only in `ios`
     * and `w-10-a` will only in `android`
     * @param breakpoints New breakpoint to be declare
     */
    var overrideBreakpoint = function (breakpoints) {
        setBreakPoint(__assign(__assign({}, crrBreaks), breakpoints));
    };
    return { overrideRules: overrideRules, overrideStyle: overrideStyle, overrideBreakpoint: overrideBreakpoint };
};
/**
 * Return current dark mode status and set function
 */
var useDarkMode = function () {
    var _a = useGlobalState(GLOBAL_DARKMODE_STATE), isDarkMode = _a[0], setDarkMode = _a[1];
    return { isDarkMode: isDarkMode, setDarkMode: setDarkMode };
};
/**
 * Get style base on current phone dark mode status
 */
var useDynamicStyle = function () {
    var isDarkMode = useGlobalState(GLOBAL_DARKMODE_STATE)[0];
    var lightTheme = useGlobalState(GLOBAL_LIGHT_STYLE_KEY)[0];
    var darkTheme = useGlobalState(GLOBAL_DARK_STYLE_KEY)[0];
    var _a = useState(isDarkMode ? darkTheme : lightTheme), style = _a[0], setStyle = _a[1];
    useEffect(function () {
        setStyle(isDarkMode ? darkTheme : lightTheme);
    }, [isDarkMode]);
    return [style, isDarkMode];
};
/**
 * Make and style builder using hook
 */
var useStyleBuilder = function () {
    var style = useDynamicStyle()[0];
    var _a = useDarkMode(), isDarkMode = _a.isDarkMode, setDarkMode = _a.setDarkMode;
    var overrideRules = useGlobalState(GLOBAL_STYLE_RULE_KEY)[0];
    var breakpoints = useGlobalState(GLOBAL_BREAKPOINT_KEY)[0];
    return { s: s(isDarkMode, breakpoints, overrideRules), style: style, isDarkMode: isDarkMode, setDarkMode: setDarkMode };
};

export { setSizeConfig, useDarkMode, useDynamicStyle, useOverrideBuilder, useStyleBuilder };
//# sourceMappingURL=index.es.js.map
